import { useState } from "react";
import axios from "axios";

export default function CourseForm({ onCourseAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => setFiles([...e.target.files]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("instructor", instructor);
      files.forEach((file) => formData.append("files", file));

      const res = await axios.post("http://localhost:5000/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setTitle("");
      setDescription("");
      setInstructor("");
      setFiles([]);
      onCourseAdded && onCourseAdded(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to upload course");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Course</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input className="border rounded px-3 py-2 w-full" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Description</label>
        <textarea className="border rounded px-3 py-2 w-full" value={description} onChange={e => setDescription(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Instructor Name</label>
        <input className="border rounded px-3 py-2 w-full" value={instructor} onChange={e => setInstructor(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Files</label>
        <input type="file" multiple onChange={handleFileChange} className="block" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={loading}>
        {loading ? "Uploading..." : "Add Course"}
      </button>
    </form>
  );
}
