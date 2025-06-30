import { useState } from "react";
import axios from "axios";

export default function CourseForm({ onCourseAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("instructor", instructor);

      files.forEach(file => {
        formData.append("files", file);
      });

      const response = await axios.post("http://localhost:5000/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setTitle("");
      setDescription("");
      setInstructor("");
      setFiles([]);

      if (onCourseAdded) onCourseAdded(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required className="mb-2 p-2 border rounded w-full" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required className="mb-2 p-2 border rounded w-full" />
      <input type="text" value={instructor} onChange={e => setInstructor(e.target.value)} placeholder="Instructor" required className="mb-2 p-2 border rounded w-full" />
      <input type="file" multiple onChange={handleFileChange} className="mb-4" />
      <button type="submit" disabled={loading} className="bg-blue-600 text-white py-2 px-4 rounded">
        {loading ? "Uploading..." : "Add Course"}
      </button>
    </form>
  );
}
