import React, { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

const App = () => {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (newStatus, id) => {
    setQueue(
      queue.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Queue Management System
      </h1>
      <div className="w-full max-w-5xl flex mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex gap-6">
          <div className="w-1/3">
            <QueueForm onAdd={addToQueue} />
          </div>

          <div className="w-2/3">
            <QueueDisplay
              queue={queue}
              onUpdateStatus={updateStatus}
              onRemove={removeFromQueue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
