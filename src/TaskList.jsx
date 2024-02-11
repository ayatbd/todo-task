/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const TaskList = ({ handleSubmit }) => {
  //Create state variable to store tasks
  const [tasks, setTasks] = useState([]);
  const [sortingOption, setSortingOption] = useState("All");

  //Use useEffect to fetch tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, [handleSubmit]);

  const handleDelete = (index) => {
    // Remove the task from the tasks array
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSort = (option) => {
    setSortingOption(option);
  };

  const getSortedTasks = () => {
    switch (sortingOption) {
      case "High":
        return tasks.filter((task) => task.priority === "High");
      case "Medium":
        return tasks.filter((task) => task.priority === "Medium");
      case "Low":
        return tasks.filter((task) => task.priority === "Low");
      default:
        return tasks;
    }
  };
  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4 text-dark">Task List</h2>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-white">Filter</p>
                  <select
                    className="select"
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <table className="table text-white mb-0">
                  <thead className="">
                    <tr>
                      <th scope="col">Completed</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getSortedTasks().map((task, index) => (
                      <tr className="fw-normal" key={index}>
                        <td className="align-middle">
                          <div className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                            <div className="form-check">
                              <input
                                className="form-check-input me-0"
                                type="checkbox"
                                aria-label="..."
                              />
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <span>{task.name}</span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0">
                            <span
                              className={`badge ${
                                (task.priority === "High" && "bg-danger") ||
                                (task.priority === "Medium" && "bg-warning") ||
                                (task.priority === "Low" && "bg-success")
                              }`}
                            >
                              {task.priority}
                            </span>
                          </h6>
                        </td>
                        <td className="align-middle">
                          <span
                            className="text-info me-3"
                            style={{ cursor: "pointer" }}
                          >
                            <MdEdit size="20" />
                          </span>
                          <span
                            className="text-warning"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(index)}
                          >
                            <RiDeleteBin6Line size="20" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
