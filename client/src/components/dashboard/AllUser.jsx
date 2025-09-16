import React, { useState, useEffect, useCallback, useRef } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import Modal from "../common/Modal";
import UserTable from "./Alluser/UserTable";
import EditUserForm from "./Alluser/EditUserForm";
import ConfirmDelete from "./Alluser/ConfirmDelete";
import PendingInvites from "./Alluser/PendingInvites";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [pending, setPending] = useState([]);
  const emailRef = useRef();

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/user/get-all");
      // Hide default admin account from the users list
      const raw = res.data?.users || res.data || [];
      const filtered = (raw || []).filter(
        (u) => (u.email || "").toLowerCase() !== "pradipbisht007@gmail.com"
      );
      setUsers(filtered);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
    const id = setInterval(fetchUsers, 10000);
    return () => clearInterval(id);
  }, [fetchUsers]);

  const fetchPending = async () => {
    try {
      const res = await api.get("/api/admin/allowed-users");
      // Hide default admin from pending invites as well
      const raw = res.data || [];
      const filtered = (raw || []).filter(
        (p) => (p.email || "").toLowerCase() !== "pradipbisht007@gmail.com"
      );
      setPending(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const inviteAndApprove = async (email) => {
    const lower = (email || "").toLowerCase();
    if (lower === "pradipbisht007@gmail.com") {
      toast.info(
        "Default admin is managed by the system and cannot be invited."
      );
      return;
    }

    try {
      await api.post("/api/admin/invite", { email });
      const list = await api.get("/api/admin/allowed-users");
      const created = list.data.find((u) => u.email === email);
      if (created) {
        await api.put(`/api/admin/update/${created._id}`, { status: "active" });
      }
      toast.success("Invited and approved user");
      fetchPending();
      fetchUsers();
    } catch (err) {
      console.error(err);
      toast.error("Failed to invite/approve");
    }
  };

  const handleApprove = async (id) => {
    try {
      await api.put(`/api/admin/update/${id}`, { status: "active" });
      toast.success("Approved user");
      fetchPending();
      fetchUsers();
    } catch (err) {
      console.error(err);
      toast.error("Failed to approve");
    }
  };

  const handleReject = async (id) => {
    try {
      await api.put(`/api/admin/update/${id}`, { status: "rejected" });
      toast.success("Rejected user");
      fetchPending();
    } catch (err) {
      console.error(err);
      toast.error("Failed to reject");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gray-50 border-b border-gray-200 flex justify-between">
        <h2 className="text-xl font-bold text-gray-900">All Users</h2>
        <div className="text-sm text-gray-500">Total: {users.length}</div>
      </div>

      <PendingInvites
        pending={pending}
        inviteAndApprove={inviteAndApprove}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      <UserTable
        users={users}
        onEdit={setEditUser}
        onDelete={setConfirmDelete}
        refresh={fetchUsers}
      />

      {/* Edit Modal */}
      <Modal
        open={!!editUser}
        title="Edit User"
        onClose={() => setEditUser(null)}>
        {editUser && (
          <EditUserForm
            user={editUser}
            onCancel={() => setEditUser(null)}
            onSave={() => setEditUser(null)}
          />
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal
        open={!!confirmDelete}
        title="Confirm Delete"
        onClose={() => setConfirmDelete(null)}>
        {confirmDelete && (
          <ConfirmDelete
            user={confirmDelete}
            onCancel={() => setConfirmDelete(null)}
            onConfirm={async () => {
              try {
                await api.delete(
                  `/api/user/${confirmDelete._id || confirmDelete.id}`
                );
                toast.success("User deleted");
                setConfirmDelete(null);
                fetchUsers();
              } catch (err) {
                console.error(err);
                toast.error("Failed to delete user");
              }
            }}
          />
        )}
      </Modal>
    </div>
  );
}

export default AllUser;
