import { cloudinary } from "../config/cloudnary.js";
import Blog from "../models/blogModel.js";

const CreateBlog = async (req, res, next) => {
  try {
    const { title, content, category, image: imageFromBody } = req.body;

    // author comes from the authenticated user
    const author = req.user?._id;

    if (!title || !content || !category) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Normalize uploaded files whether using req.file or req.files
    let uploadedFiles = [];
    if (req.files) {
      if (req.files.image)
        uploadedFiles = Array.isArray(req.files.image)
          ? req.files.image
          : [req.files.image];
      else if (req.files.images)
        uploadedFiles = Array.isArray(req.files.images)
          ? req.files.images
          : [req.files.images];
    }
    if (req.file) uploadedFiles.push(req.file);

    // Prefer uploaded file, fall back to image url provided in body
    let imageUrl = imageFromBody || null;
    if (uploadedFiles.length > 0) {
      try {
        const uploadResult = await cloudinary.uploader.upload(
          uploadedFiles[0].tempFilePath
        );
        imageUrl = uploadResult.secure_url;
      } catch (err) {
        console.error("Error uploading image:", err);
        return res
          .status(500)
          .json({ success: false, message: "Image upload failed" });
      }
    }

    if (!imageUrl) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const newPost = new Blog({
      title,
      content,
      author,
      category,
      image: imageUrl,
    });
    await newPost.save();
    res.status(201).json({
      success: true,
      message: "Blog post created successfully",
      data: newPost,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const { category, q } = req.query;
    const filter = {};

    // allowed categories
    const allowed = [
      "all",
      "SEO",
      "Social Media",
      "PPC",
      "Content Marketing",
      "Email Marketing",
      "AI Solutions",
    ];

    if (category) {
      if (!allowed.includes(category)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid category" });
      }
      // 'all' means no category filter
      if (category !== "all") filter.category = category;
    }

    let query = Blog.find(filter).populate("author", "-password");

    // text search using $text if q provided
    if (q && q.trim().length > 0) {
      query = Blog.find({ $text: { $search: q }, ...filter }).populate(
        "author",
        "-password"
      );
    }

    const blogs = await query.exec();

    res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully",
      data: blogs,
    });
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "-password"
    );
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    console.error("Error retrieving blog:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// update blog by id
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, author } = req.body;

    const blog = await Blog.findById(id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    // Update fields if provided
    if (title) blog.title = title;
    if (content) blog.content = content;
    if (category) blog.category = category;
    if (author) blog.author = author;

    // Handle a possible new uploaded file
    let uploadedFiles = [];
    if (req.files) {
      if (req.files.image)
        uploadedFiles = Array.isArray(req.files.image)
          ? req.files.image
          : [req.files.image];
      else if (req.files.images)
        uploadedFiles = Array.isArray(req.files.images)
          ? req.files.images
          : [req.files.images];
    }
    if (req.file) uploadedFiles.push(req.file);

    if (uploadedFiles.length > 0) {
      try {
        // Delete old image from Cloudinary if exists
        if (blog.image) {
          const publicId = blog.image.split("/").pop().split(".")[0];
          await cloudinary.uploader.destroy(publicId).catch(() => {});
        }
        const uploadResult = await cloudinary.uploader.upload(
          uploadedFiles[0].tempFilePath
        );
        blog.image = uploadResult.secure_url;
      } catch (err) {
        console.error("Error uploading new image:", err);
        return res
          .status(500)
          .json({ success: false, message: "Image upload failed" });
      }
    }

    const updated = await blog.save();
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delte blog by id
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    // Delete image from Cloudinary if present
    if (blog.image) {
      const publicId = blog.image.split("/").pop().split(".")[0];
      await cloudinary.uploader
        .destroy(publicId)
        .catch((error) => console.error("Error deleting image:", error));
    }

    await Blog.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { CreateBlog, getAllBlogs, getBlogById, updateBlog, deleteBlogById };
