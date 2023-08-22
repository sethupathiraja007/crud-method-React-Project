import React, { useState } from "react";

export default function Adduser(props) {
  // Initial user data
  const initial = { id: null, username: "", password: "" };
  const [initials, setinitials] = useState(initial);

  // Function to update form input values
  const click = (event) => {
    const { name, value } = event.target;
    setinitials({ ...initials, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!initials.username || !initials.password) return;
          props.newuserdata(initials);
          setinitials(initial);
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
          <div className="btn1">
            <button className="btn btn-success">ADD USER</button>
          </div>
        </div>
      </form>
    </div>
  );
}
