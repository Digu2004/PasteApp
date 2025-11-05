import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addcreatepaste, updatecreatepaste } from "../features/slice";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchparams] = useSearchParams();//it finds the id from url
  const pasteid = searchparams.get("pasteid");
  const dispatch = useDispatch();
  const allpastes=useSelector((state)=>state.paste.pastes)

  useEffect(()=>{
    if(pasteid)
    {
      const paste=allpastes.find((p)=>p._id === pasteid);
      setTitle(paste.title);
      setContent(paste.content)
    }
  },[pasteid,allpastes]);

  const createOrUpdatePaste = () => {
    const paste = {
      title,
      content,
      _id: pasteid || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteid) {
      dispatch(updatecreatepaste(paste));
    } else {
      dispatch(addcreatepaste(paste));
    }

    // Clear form
    setTitle("");
    setContent("");
  };

  return (
 <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
    <h3 className="text-center text-2xl font-semibold text-blue-600 mb-6">
      Copy Paster App
    </h3>

    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <input
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={createOrUpdatePaste}
        className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 font-medium"
      >
        {pasteid ? "Update Paste" : "Create Paste"}
      </button>
    </div>

    <textarea
      placeholder="Enter content here"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      rows={10}
    ></textarea>
  </div>
</div>

  );
}
