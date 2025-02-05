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
//       setErrMsg("Please enter a valid username");
//     }
//   }

//   return (
//     <>
//       <header>
//         <h1>Registration Form</h1>
//         <h2>Welcome : {username}</h2>
//       </header>

//       <form>
//         <div className="form-group">
//           <label>Enter your name</label>
//           <input 
//             type="text" placeholder="Enter your name"
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
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    password: "",
    confPassword: "",
    dob: "",
    phone: ""
  });
  
  const [errMsg, setErrMsg] = useState({});

  const changeHandler = (e) => {
    const key = e.target.name;
    const textBoxValue = e.target.value;
    setUserData({...userData, [key]:textBoxValue});
  }

  const validate = (e) => {
    e.preventDefault();

    const newMsg = {}

    if(!userData.username) {
      newMsg.username = "Please enter username";
    }
    if(userData.username.length <= 3) {
      newMsg.usernameLength = "Name should have more than 3 letters";
    }
    if(!userData.useremail) {
      newMsg.usermail = "Please enter your mail id";
    }
    if(!userData.password) {
      newMsg.password = "Please enter your password";
    }
    
    setErrMsg(newMsg);
  }

  return (
    <>
      <header>
        <h1>Registration Form</h1>
        <h2>Welcome : {userData.username}</h2>
      </header>

      <form>
        <div className="form-group">
          <label>Enter your name</label>
          <input 
            type="text" placeholder="Enter your name"
            onChange={changeHandler}
            name="username"
          />
          <p>
            {errMsg.username || errMsg.usernameLength}
          </p>
        </div>

        <div className="form-group">
          <label>Enter your email</label>
          <input 
            type="email" placeholder="Enter your email"
            onChange={changeHandler}
            name="useremail"
          />
          <p>
            {errMsg.usermail}
          </p>
        </div>

        <div className="form-group">
          <label>Enter your password</label>
          <input 
            type="password" placeholder="Enter your password"
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

export default App;