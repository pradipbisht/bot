import { Edit, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import api from "../../../api/axios";

function UserRow({ user, onEdit, onDelete, refresh }) {
  const handleRoleToggle = async () => {
    try {
      const newRole = user.role === "admin" ? "user" : "admin";
      await api.put(`/api/user/${user._id || user.id}`, { role: newRole });
      toast.success(`Role updated to ${newRole}`);
      refresh();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update role");
    }
  };

  return (
    <tr
      key={user._id || user.id}
      className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          <div className="text-sm font-semibold text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            user.role === "admin"
              ? "bg-purple-100 text-purple-800"
              : "bg-green-100 text-green-800"
          }`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(user.createdAt).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onEdit(user)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            title="Edit user">
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(user)}
            className="text-red-600 hover:text-red-800 transition-colors"
            title="Delete user">
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={handleRoleToggle}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            title="Toggle admin">
            {user.role === "admin" ? "Demote" : "Promote"}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;

