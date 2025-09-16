import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function PendingInvites({
  pending = [],
  inviteAndApprove,
  onApprove,
  onReject,
}) {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleInvite = async () => {
    const email = emailRef.current?.value?.trim();
    if (!email) return toast.info("Enter an email to invite");
    try {
      setLoading(true);
      await inviteAndApprove(email);
      if (emailRef.current) emailRef.current.value = "";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-6 p-4 border rounded">
      <h3 className="text-lg font-semibold mb-2">Pending Invites</h3>
      <div className="flex gap-2 mb-3">
        <input
          ref={emailRef}
          type="email"
          placeholder="email to invite"
          className="border p-2 rounded flex-1"
        />
        <button
          className="bg-blue-600 text-white px-3 py-2 rounded"
          onClick={handleInvite}
          disabled={loading}>
          Invite & Approve
        </button>
        <button
          className="bg-gray-200 px-3 py-2 rounded"
          onClick={() => {
            if (emailRef.current) emailRef.current.value = "";
          }}>
          Clear
        </button>
      </div>

      <div>
        {pending.length === 0 ? (
          <div className="text-sm text-gray-500">No pending invites</div>
        ) : (
          <ul className="space-y-2">
            {pending.map((p) => (
              <li
                key={p._id}
                className="flex items-center justify-between border p-2 rounded">
                <div>
                  <div className="font-medium">{p.email}</div>
                  <div className="text-sm text-gray-500">
                    Status: {p.status}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {p.status === "active" ? (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                      <span className="text-sm font-medium text-green-700">
                        Active
                      </span>
                    </div>
                  ) : p.status === "rejected" ? (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                      <span className="text-sm font-medium text-red-700">
                        Rejected
                      </span>
                    </div>
                  ) : (
                    <>
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded"
                        onClick={async () => onApprove(p._id)}>
                        Approve
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        onClick={async () => onReject(p._id)}>
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
