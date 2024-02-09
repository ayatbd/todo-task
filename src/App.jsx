import "./App.css";
import TaskList from "./TaskList";
const TodoSection = () => {
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

                {/* <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Add new..."
                        />
                        <a
                          href="#!"
                          data-mdb-toggle="tooltip"
                          title="Set due date"
                        >
                          <i className="fas fa-calendar-alt fa-lg me-3"></i>
                        </a>
                        <div>
                          <button type="button" className="btn btn-primary">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <form className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Task Name"
                    />
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select form-control-lg"
                      aria-label="Default select example"
                    >
                      <option selected>Select task priority</option>
                      <option value="1">Low</option>
                      <option value="2">Medium</option>
                      <option value="3">High</option>
                    </select>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">
                      Confirm identity
                    </button>
                  </div>
                </form>
                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select className="select">
                    <option value="1">All</option>
                    <option value="2">Completed</option>
                    <option value="3">Active</option>
                    <option value="4">Has due date</option>
                  </select>
                  <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                  <select className="select">
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                  </select>
                  <a
                    href="#!"
                    style={{ color: "#23af89" }}
                    data-mdb-toggle="tooltip"
                    title="Ascending"
                  >
                    <i className="fas fa-sort-amount-down-alt ms-2"></i>
                  </a>
                </div>

                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoSection;
