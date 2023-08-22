import React, { useState } from "react";
import "./layout.css";
import Table from "./table";
import Adduser from "./adduser";
import Editform from "./Editform";
export default function Layout() {
  const userdata = [
    { id: 1, username: "sethupathiraja", password: "123" },
    { id: 2, username: "raja", password: "1234" },
    { id: 3, username: "mano", password: "12345" },
  ];
  const newuserdata = (user) => {
    user.id = state.length + 1;
    setState([...state, user]);
  };
  const deleteuser = (id) => {
    setState(state.filter((user) => user.id !== id));
    setEditing(false)
  };
  const [state, setState] = useState(userdata);
  const [editing, setEditing] = useState(false);
  const initial = { id: null, username: "", password: "" };
  const [curentuser, setCurentuser] = useState(initial);
  const editRow = (user) => {
    setEditing(true);
    setCurentuser({
      id: user.id,
      username: user.username,
      password: user.password,
    });
  };
  const updateuser = (id, updateuser) => {
    setEditing(false);
    setState(state.map((user) => (user.id === id ? updateuser : user)));
  };

  return (
    <div className="container-fluid">
      <h1>CRUD METHOD</h1>
      <div style={{marginTop:"50px"}}>
        {editing ? (
          <div>
            <h3 style={{ color: "white", textAlign: "center" }}><u>EDIT USER </u></h3>
            <Editform
              setEditing={setEditing}
              curentuser={curentuser}
              updateuser={updateuser}
            />
          </div>
        ) : (
          <div>
            <h3 style={{ color: "white", textAlign: "center" }} ><u>ADD USER </u></h3>
            <Adduser newuserdata={newuserdata} />
          </div>
        )}
      </div>
      <br />
      <br />
      <br />

      <Table editRow={editRow} deleteuser={deleteuser} users={state} />
      <br />
      <br />
      <br />
    </div>
  );
}
   