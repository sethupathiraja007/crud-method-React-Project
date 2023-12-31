import React, { useEffect, useState } from 'react';

export default function Editform(props) {
  // Initialize state with the current user data
  const [initials, setInitials] = useState(props.curentuser);

  // Update state when props.curentuser changes
  useEffect(() => {
    setInitials(props.curentuser);
  }, [props]);

  // Function to update form input values
  const click = (event) => {
    const { name, value } = event.target;
    setInitials({ ...initials, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!initials.username || !initials.password) return;
          props.updateuser(initials.id, initials);
        }}
      >
        <div className="up">
          <label>
            <b>USERNAME</b>
          </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={initials.username}
            onChange={click}
          />
          <label>
            <b>PASSWORD</b>
          </label>
          <input
            type="text"
            placeholder="password"
            name="password"
            value={initials.password}
            onChange={click}
          />
          <br />
          <br />
          <br />
          <div className="btn2">
            <button className="btn btn-success">UPDATE USER</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.setEditing(false);
              }}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
