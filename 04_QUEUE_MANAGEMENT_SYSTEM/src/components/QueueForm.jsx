import React, { useState } from "react";

const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !status.trim()) return;

    onAdd({ name, status });
    setName("");
    setStatus("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 rounded-lg mb-6"
    >
      <h2 className="text-lg font-semibold mb-4">Add Customer</h2>

      <input
        type="text"
        placeholder="Customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select status</option>
        <option value="waiting">Waiting</option>
        <option value="serving">Serving</option>
        <option value="completed">Completed</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add to Queue
      </button>
    </form>
  );
};

export default QueueForm;
