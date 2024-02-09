const TaskList = () => {
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

                <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">High priority</h6>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done">
                          <i className="fas fa-check fa-lg text-success me-3"></i>
                        </a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove">
                          <i className="fas fa-trash-alt fa-lg text-warning"></i>
                        </a>
                      </td>
                    </tr>
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
