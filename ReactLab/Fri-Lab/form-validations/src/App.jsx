import { useState } from "react";
import "./App.css";

// function App() {

//   const [username, setUserName] = useState("");
//   const [msg, setMsg] = useState("");

//   const changeHandler = (event) => {
//     const boxValue = event.target.value;
//     setUserName(boxValue);
//   }

//   const validate = (event) => {
//     event.preventDefault();
//     if(!username) {
//       setMsg("Please enter your name...");
//     }
//     else {
//       setMsg("");
//     }
//   }

//   return (
//     <>

//       <div className="form-wrapper">
//       <h1>Registration Form</h1>
//       <h3>Welcome : {username}</h3>
//         <form>
//           <div className="form-group">
//             <label>Enter your name</label>
//             <input 
//               type="text"
//               placeholder="Enter your name"
//               onChange={changeHandler}
//             />
//             <p>{msg}</p>
//           </div>

//           <div className="form-group">
//             <label>Enter your email</label>
//             <input 
//               type="email"
//               placeholder="Enter your email"
//             />
//           </div>


//           <div className="form-group">
//             <label>Enter your password</label>
//             <input 
//               type="password"
//               placeholder="Enter your password"
//             />
//           </div>


//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input 
//               type="password"
//               placeholder="Confirm Password"
//             />
//           </div>

//           <div className="form-group">
//             <label>Enter your DOB</label>
//             <input 
//               type="date"
//             />
//           </div>
//           <button onClick={validate}>Register Now</button>
//         </form>
//       </div>
//     </>
//   );
// }


function App() {

  const [userdata, setUserData] = useState({
    username: "",
    usermail: "",
    password: "",
    confirmPassword: "",
    age: 0
  });
  
  const [msg, setMsg] = useState({});

  const changeHandler = (event) => {
    const key = event.target.name;
    const boxValue = event.target.value;
    setUserData({...userdata, [key]:boxValue});
    console.log(userdata);
  }

  const validate = (event) => {
    event.preventDefault();
    const errMsg = {};
    if(!userdata.username) {
      errMsg.username = "Please enter your name...";
    }
    if(!userdata.usermail) {
      errMsg.usermail = "Please enter your mail...";
    }
    else {
      setMsg({});
    }

    setMsg(errMsg);
  }

  return (
    <>

      <div className="form-wrapper">
      <h1>Registration Form</h1>
      <h3>Welcome : {userdata.username}</h3>
        <form>
          <div className="form-group">
            <label>Enter your name</label>
            <input 
              type="text"
              placeholder="Enter your name"
              onChange={changeHandler}
              name="username"
            />
            <p>{msg.username}</p>
          </div>

          <div className="form-group">
            <label>Enter your email</label>
            <input 
              type="email"
              placeholder="Enter your email"
              onChange={changeHandler}
              name="usermail"
            />
            <p>{msg.usermail}</p>
          </div>


          <div className="form-group">
            <label>Enter your password</label>
            <input 
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={changeHandler}
            />
          </div>


          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={changeHandler}
            />
          </div>

          <div className="form-group">
            <label>Enter your DOB</label>
            <input 
              type="date"
            />
          </div>
          <button onClick={validate}>Register Now</button>
        </form>
      </div>
    </>
  );
}

export default App;