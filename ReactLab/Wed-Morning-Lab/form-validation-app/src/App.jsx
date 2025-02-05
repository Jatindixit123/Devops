import { useState } from 'react'
import './App.css'

// function App() {
//   const [username, setUserName] = useState("");
//   const [msg, setMsg] = useState("");

//   const changeHandler = (e) => {
//     const textBoxValue = e.target.value;
//     setUserName(textBoxValue);
//   }

//   const validateForm = (e) => {
//     e.preventDefault();
//     if(!username || username.length <= 3) {
//       setMsg("Invalid Username, should contain more than 3 letters");
//     }
//   }

//   return (
//     <>
//       <header>
//         <h1>Registration Form</h1>
//         <h3>Welcome : {username}</h3>
//       </header>

//       <form>
//         <div className='form-group'>
//           <label>Enter your name</label>
//           <input 
//             type="text" placeholder='Enter your name'
//             onChange={changeHandler}
//           />
//           {
//             msg && 
//             <p>{msg}</p>
//           }
//         </div>

//         <button onClick={validateForm}>Register Now</button>
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
    dob: ""
  });

  const [msg, setMsg] = useState({});

  const changeHandler = (e) => {
    const key = e.target.name;
    const textBoxValue = e.target.value;
    setUserData({...userData, [key]:textBoxValue});
  }

  const validateForm = (e) => {
    e.preventDefault();
    const newMsg = {}
    if(!userData.username || userData.username.length <= 3) {
      newMsg.username = "Invalid Username, should contain more than 3 letters";
    }

    if(!userData.useremail) {
      newMsg.usermail = "Invalid email address";
    }

    if(!userData.password) {
      newMsg.password = "Please enter your password";
    }

    setMsg(newMsg);
  }

  return (
    <>
      <header>
        <h1>Registration Form</h1>
        <h3>Welcome : {userData.username}</h3>
      </header>

      <form>
        <div className='form-group'>
          <label>Enter your name</label>
          <input 
            type="text" placeholder='Enter your name'
            onChange={changeHandler}
            name='username'
          />
          {
            msg && 
            <p>{msg.username}</p>
          }
        </div>

        <div className='form-group'>
          <label>Enter your email</label>
          <input 
            type="email" placeholder='Enter your email'
            onChange={changeHandler}
            name='useremail'
          />
          {
            msg && 
            <p>{msg.usermail}</p>
          }
        </div>

        <div className='form-group'>
          <label>Enter your password</label>
          <input 
            type="password" placeholder='Enter your password'
            onChange={changeHandler}
            name='password'
          />
          {
            msg && 
            <p>{msg.password}</p>
          }
        </div>

        <button onClick={validateForm}>Register Now</button>
      </form>
    </>
  )
}

export default App
