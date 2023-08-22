import React, { useState } from "react";

export default function Adduser(props) {
  const initial = { id: null, username: "", password: "" };
  const [initials, setinitials] = useState(initial);
  const click = (event) => {
    const {name, value} = event.target;
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
          ></input>
          <label>
            <b>PASSWORD</b>
          </label>
          <input
            type="text"
            placeholder="password"
            name="password"
            value={initials.password}
            onChange={click}
          ></input>
          <br />
          <br />
          <br />
          <div className="btn1">
            {" "}
            <button className="btn btn-success">ADD USER</button>
          </div>
        </div>
      </form>
    </div>
  );
}
