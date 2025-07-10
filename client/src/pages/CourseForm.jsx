import { useState } from "react";
import axios from "axios";

export default function CourseForm({ onCourseAdded, course, isEdit = false, onSuccess, onCancel }) {
  const [title, setTitle] = useState(course?.title || "");
  const [description, setDescription] = useState(course?.description || "");
  const [instructor, setInstructor] = useState(course?.instructor || "");
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("instructor", instructor);

      if (files) {
        for (const file of files) {
          formData.append("files", file);
        }
      }

      if (isEdit) {
        await axios.put(`http://localhost:5000/api/courses/${course._id}`, formData);
        onSuccess?.();
      } else {
        await axios.post("http://localhost:5000/api/courses", formData);
        onCourseAdded();
      }

      setTitle("");
      setDescription("");
      setInstructor("");
      setFiles(null);
    } catch (err) {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Instructor"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="w-full"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Saving..." : isEdit ? "Update" : "Add"}
        </button>
        {isEdit && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
