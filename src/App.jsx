import { useState } from "react";
import "./App.css";
import TaskList from "./TaskList";
const TodoSection = () => {
  //Create state variables
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("Select task priority");

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
    setTaskPriority("Select task priority");
  };

  // Function to handle sorting

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>My Todo-s</u>
                </p>

                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-auto">
                    <input
                      required
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Task Name"
                      value={taskName}
                      onChange={handleTaskNameChange}
                    />
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select form-select-lg"
                      aria-label="Default select example"
                      value={taskPriority}
                      onChange={handleTaskPriorityChange}
                    >
                      <option disabled selected>
                        Select task priority
                      </option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary mb-3 btn-lg"
                      type="submit"
                    >
                      Confirm identity
                    </button>
                  </div>
                </form>
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
