import "./App.css";
import TaskList from "./TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import { useState } from "react";
const TodoSection = () => {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  //Create event handlers
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskPriorityChange = (e) => {
    setTaskPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Save data to local storage
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      priority: taskPriority,
    };

    // Get existing tasks from local storage or initialize an empty array
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the array
    const updatedTasks = [...existingTasks, newTask];

    // Save the updated array back to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Optional: Clear the form fields after submission
    setTaskName("");
    toast.success("Task added successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <section className="vh-100">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container py-5 h-100">
        <div className="row md:d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>My Todos</u>
                </p>
                <Form
                  handleTaskNameChange={handleTaskNameChange}
                  handleSubmit={handleSubmit}
                  handleTaskPriorityChange={handleTaskPriorityChange}
                  taskName={taskName}
                  taskPriority={taskPriority}
                />
                <hr className="my-4" />
                <TaskList handleSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoSection;
