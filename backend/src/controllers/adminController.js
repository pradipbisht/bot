import User from "../models/userModel.js";
import Blog from "../models/blogModel.js";
import AllowedUser from "../models/allowedUser.js";

// Return basic counts and simple analytics for admin dashboard
export const getOverview = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const totalPosts = await Blog.countDocuments();
    const recentPosts = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title createdAt author category")
      .populate("author", "name email");

    // Simple activity metric: posts in last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recentCount = await Blog.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    return res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalAdmins,
        totalPosts,
        recentCount,
        recentPosts,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Basic analytics placeholder
export const getAnalytics = async (req, res, next) => {
  try {
    // Accept ?days=n (default 7)
    const daysCount = Math.min(parseInt(req.query.days) || 7, 90);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today);
    start.setDate(today.getDate() - (daysCount - 1));

    // Helper to build date labels for the range
    const labels = Array.from({ length: daysCount }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d.toISOString().slice(0, 10);
    });

    // Aggregate posts per day
    const postsAgg = await Blog.aggregate([
      { $match: { createdAt: { $gte: start } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
    ]);
    const postsMap = new Map(postsAgg.map((p) => [p._id, p.count]));
    const postsPerDay = labels.map((d) => ({
      date: d,
      count: postsMap.get(d) || 0,
    }));

    // Aggregate users per day (new signups)
    const usersAgg = await User.aggregate([
      { $match: { createdAt: { $gte: start } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
    ]);
    const usersMap = new Map(usersAgg.map((u) => [u._id, u.count]));
    const usersPerDay = labels.map((d) => ({
      date: d,
      count: usersMap.get(d) || 0,
    }));

    // Top categories overall
    const categoriesAgg = await Blog.aggregate([
      { $match: {} },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    const topCategories = categoriesAgg.map((c) => ({
      category: c._id || "Uncategorized",
      count: c.count,
    }));

    return res.status(200).json({
      success: true,
      data: { postsPerDay, usersPerDay, topCategories },
    });
  } catch (error) {
    next(error);
  }
};

// Additional admin-specific controllers can be added here
export const inviteEmployee = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existing = await AllowedUser.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: "Email already invited" });
    }
    const allowedUser = new AllowedUser({ email });
    await allowedUser.save();
    return res.status(201).json({ success: true, message: "Employee invited" });
  } catch (error) {
    next(error);
  }
};

// Approved invite
export const updateEmployeeStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const allowedUser = await AllowedUser.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json({ message: "Status updated", allowedUser });
  } catch (err) {
    next(err);
  }
};

// List all allowed users
export const listAllowedUsers = async (req, res, next) => {
  try {
    const list = await AllowedUser.find();
    res.json(list);
  } catch (err) {
    next(err);
  }
};
