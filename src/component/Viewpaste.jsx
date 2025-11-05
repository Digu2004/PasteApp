import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react"; // optional, for back icon

export default function Viewpaste() {
  const { id } = useParams(); // 👈 Get paste ID from URL
  const pastes = useSelector((state) => state.paste.pastes); // 👈 Get all pastes from Redux

  const paste = pastes.find((p) => p._id === id); // 👈 Find paste by ID

  if (!paste) {
    return (
      <div className="max-w-2xl mx-auto my-10 text-center text-gray-500">
        Paste not found 😕
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
      <Link
        to="/pastes"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">{paste.title}</h2>
      <p className="text-gray-600 whitespace-pre-line mb-4">{paste.content}</p>
      <p className="text-sm text-gray-400">Created At: {paste.createdAt}</p>
    </div>
  );
}
