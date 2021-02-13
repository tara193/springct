import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.css";
import { addUserSuccess } from "../../store/actions";
import {validation} from '../../util/validation';

const LoginPage = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList);
  const [formElement, setFormElement] = useState({
    userName: null,
    userId: null,
    phoneNumber: null,
    address: null,
    role: "",
    name: null,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formElement);
    dispatch(addUserSuccess(formElement));
    return props.history.push("/list");
  };
  return (
    <div className="Login">
      <form className="Form" onSubmit={submitHandler}>
        <label className="Lable" aria-label="user_name">
          {" "}
          User Name :
        </label>
        <input
          className="Input"
          id="user_name"
          type="text"
          placeholder=" User Name"
          onChange={(event) =>
            setFormElement({ ...formElement, userName: event.target.value })
          }
          required
        />
        <label className="Lable" aria-label="passowrd">
          Password :
        </label>
        <input
          className="Input"
          id="password"
          type="password"
          placeholder="password"
          required
        />

        <label className="Lable" aria-label="user_id">
          ID :
        </label>
        <input
          className="Input"
          id="user_id"
          type="text"
          placeholder="ID"
          onChange={(event) =>
            setFormElement({ ...formElement, userId: event.target.value })
          }
        />
        <label className="Lable" aria-label="name">
          Name :
        </label>
        <input
          className="Input"
          type="text"
          placeholder="Name"
          onChange={(event) =>
            setFormElement({ ...formElement, name: event.target.value })
          }
        />
        <label className="Lable" aria-label="phn">
          Phone Number :
        </label>
        <input
          className="Input"
          id="phn"
          type="tel"
          placeholder="Phone Number"
          onChange={(event) =>
            setFormElement({ ...formElement, phoneNumber: event.target.value })
          }
        />
        <label className="Lable" aria-label="address">
          Address :
        </label>
        <input
          className="Input"
          id="address"
          type="text"
          placeholder="Address"
          onChange={(event) =>
            setFormElement({ ...formElement, address: event.target.value })
          }
        />
        <label className="Lable" aria-label="role">
          Role :
        </label>
        <select
          name="role"
          id="role"
          value={formElement.role}
          onChange={(event) =>
            setFormElement({ ...formElement, role: event.target.value })
          }
        >
          <option aria-label="role" />
          <option value="admin">Admin</option>
          <option value="normal">Normal</option>
        </select>
        <br />
        <br />
        <div>
          {users.length > 0 ? (
            <button type="submit">Add/Submit</button>
          ) : (
            <button type="submit">Login</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
