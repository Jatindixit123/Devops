import { useState } from "react";
import "./App.css";

// function App() {
//   const [username, setUserName] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//   const changeHandler = (e) => {
//     const textBoxValue = e.target.value;
//     setUserName(textBoxValue);
//   }

//   const validate = (e) => {
//     e.preventDefault();
//     if(!username || username.length <= 3) {
//       setErrMsg("Invalid Username, Should contain more than 3 letters");
//     }
//   }

//   return (
//     <>
//       <header>
//         <h1>Registration Form</h1>
//         <h3>Welcome : {username}</h3>
//       </header>

//       <form>
//         <div className="form-group">
//           <label>Enter your name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             onChange={changeHandler}
//           />
//           <p>
//             {errMsg}
//           </p>
//         </div>

//         <button onClick={validate}>Register Now</button>
//       </form>
//     </>
//   )
// }


function App() {
  const [userdata, setUserData] = useState({
    username: "",
    usermail: "",
    password: "",
    confPassword: "",
    dob: "",
    phone: ""
  });
  
  const [errMsg, setErrMsg] = useState({});

  const changeHandler = (e) => {
    const key = e.target.name;
    const textBoxValue = e.target.value;
    setUserData({...userdata, [key]:textBoxValue});
  }

  const validate = (e) => {
    e.preventDefault();
    const newMsg = {}
    if(!userdata.username || userdata.username.length <= 3) {
      newMsg.username = "Invalid Username, Should contain more than 3 letters";
    }

    if(!userdata.usermail) {
      newMsg.usermail = "Please enter your email address";
    }

    if(!userdata.password) {
      newMsg.password = "Please enter your password";
    }

    setErrMsg(newMsg);
  }

  return (
    <>
      <header>
        <h1>Registration Form</h1>
        <h3>Welcome : {userdata.username}</h3>
      </header>

      <form>
        <div className="form-group">
          <label>Enter your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={changeHandler}
            name="username"
          />
          <p>
            {errMsg.username}
          </p>
        </div>

        <div className="form-group">
          <label>Enter your email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={changeHandler}
            name="usermail"
          />
          <p>
            {errMsg.usermail}
          </p>
        </div>

        <div className="form-group">
          <label>Enter your password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={changeHandler}
            name="password"
          />
          <p>
            {errMsg.password}
          </p>
        </div>

        <button onClick={validate}>Register Now</button>
      </form>
    </>
  )
}

export default App