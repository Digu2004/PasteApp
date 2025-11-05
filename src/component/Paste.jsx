import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { removecreatepaste } from "../features/slice";
import toast from "react-hot-toast";

//Lucide icons
import { Edit, Eye, Trash2, Copy, Share2 } from "lucide-react";

export default function Paste() {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Copy text handler
  const copyhandler = (paste) => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Text copied successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
    {/* Search Bar */}
      <input
        type="text"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search content..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/*  Paste Cards */}
      <div className="flex flex-col">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste._id}
              className="border border-gray-200 rounded-xl p-5 mb-4 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* 🧾 Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
                <h5 className="text-lg font-semibold text-gray-800">
                  {paste.title}
                </h5>
                <p className="text-gray-600 flex-1 truncate">{paste.content}</p>
                <p className="text-gray-400 text-sm">{paste.createdAt}</p>
              </div>

              {/* 🎛 Action Buttons */}
              <div className="flex flex-wrap justify-end gap-3 mt-4">
                <a
                  href={`/?pasteid=${paste._id}`}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Edit size={18} />
                  Edit
                </a>

                <a
                  href={`/pastes/${paste._id}`}
                  className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition"
                >
                  <Eye size={18} />
                  View
                </a>

                <button
                  onClick={() => dispatch(removecreatepaste(paste._id))}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <Trash2 size={18} />
                  Delete
                </button>

                <button
                  onClick={() => copyhandler(paste)}
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  <Copy size={18} />
                  Copy
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No matching results found.</p>
        )}
      </div>
    </div>
  );
}
