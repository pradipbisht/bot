// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { GoogleLogin } from "@react-oauth/google";
// import { googleLoginApi } from "../../api/logs/apiLogs";

// function Signup() {
//   const { register, isLoading, error, clearError } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [formError, setFormError] = useState("");
//   const navigate = useNavigate();
// //
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormError("");
//     clearError();
//     if (!name || !email || !password) {
//       setFormError("Please fill in all fields.");
//       return;
//     }
//     const res = await register(name, email, password);
//     if (res.success) {
//       navigate("/company-access/login"); // Redirect to login after signup
//     } else {
//       setFormError(res.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <form
//         className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//         onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-bold mb-6 text-teal-700">
//           Employee Signup
//         </h2>
//         {formError && (
//           <div className="mb-4 text-red-600 text-sm">{formError}</div>
//         )}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Name</label>
//           <input
//             type="text"
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             disabled={isLoading}
//             autoFocus
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={isLoading}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Password</label>
//           <input
//             type="password"
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={isLoading}
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors font-semibold"
//           disabled={isLoading}>
//           {isLoading ? "Signing up..." : "Signup"}
//         </button>

//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-500 mb-2">Or sign up with</p>
//           <div className="flex justify-center">
//             <GoogleLogin
//               onSuccess={async (credentialResponse) => {
//                 try {
//                   const token = credentialResponse.credential;
//                   await googleLoginApi(token);
//                   navigate("/auth/success");
//                 } catch (err) {
//                   console.error("Google signup failed", err);
//                 }
//               }}
//               onError={() => console.error("Google Sign-Up failed")}
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;
