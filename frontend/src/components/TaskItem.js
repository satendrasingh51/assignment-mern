import React, { useState } from "react";
import axios from "axios";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleUpdate = async () => {
    try {
      await axios.post(`/tasks/update/${task._id}`, updatedTask);
      onUpdateTask(task._id, updatedTask);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/tasks/${task._id}`);
      onDeleteTask(task._id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="mb-4 border border-gray-200 p-4 rounded shadow">
      {!isEditing ? (
        <>
          <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
          <p className="text-gray-700">{task.description}</p>
          <p className="text-gray-700">Priority: {task.priority}</p>
          <p className="text-gray-700">Category: {task.category}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 bg-blue-500 text-black border border-gray-800 font-bold py-1 px-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="ml-2 mt-2 bg-red-500 text-black border border-gray-800 font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            required
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            required
          />
          <select
            value={updatedTask.priority}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, priority: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="text"
            value={updatedTask.category}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, category: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-black border border-gray-800 font-bold py-1 px-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-gray-500 text-black border border-gray-800 font-bold py-1 px-2 rounded"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
