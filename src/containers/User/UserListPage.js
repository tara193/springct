import { useSelector } from "react-redux";

import "./UserListPage.css";

const UserListPage = (props) => {
  const users = useSelector((state) => state.userList);
  const role = useSelector((state) => state.userList[0].role);
  const handleClick=()=>{
    props.history.push("/");
  }
  const userInfo = users.map((user) => {
    return (
      <span
        key={user.userId}
        style={{
          display: "block",
          margin: "13px 8px",
          padding: "5px",
          border: "1px solid #ccc",
        }}
      >
        Name: {user.name} <br></br>
        Phone Number: {user.phoneNumber} <br></br>
        address : {user.address} <br></br>
      </span>
    );
  });
  return (
    <div className="UserList">
      <span style={{ justifyItems: "center" }}>UserList:</span>
      <p>{userInfo} </p>
      <div
        style={{ position: "absolute", top: "0", right: "0", margin: "20px" }}
      >
        {role === "admin" ? <button type="button" onClick={handleClick}>Add User</button> : null}
      </div>
    </div>
  );
};

export default UserListPage;
