import React from "react";

export default function Table(props) {
  return (
    <div>
      <div className="container mt-3">
        <table className="table  table-striped">
          <thead>
            <tr>
              <th>USERNAME</th>
              <th>PASSWORD</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length > 0 ? (
              props.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td id="d">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        props.editRow(user);
                      }}
                    >
                      EDIT
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        props.deleteuser(user.id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  No User
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

