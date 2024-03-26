import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (taskId, updatedTask) => {
    try {
      await axios.post(`/tasks/update/${taskId}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default App;
