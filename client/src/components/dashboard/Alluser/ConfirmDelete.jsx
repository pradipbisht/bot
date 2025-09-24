function ConfirmDelete({ user, onCancel, onConfirm }) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        Are you sure you want to delete{" "}
        <strong className="text-gray-900">{user.name}</strong>? This action
        cannot be undone.
      </p>
      <div className="flex justify-end gap-3 pt-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          Delete User
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;

