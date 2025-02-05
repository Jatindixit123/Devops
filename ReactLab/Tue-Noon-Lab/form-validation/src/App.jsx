import { useState } from 'react'
import './App.css'

function App() {
  // const [username, setUserName] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    usermail: "",
    password: "",
    confPassword: "",
    dob: ""
  });

  // const [errMsg, setErrMsg] = useState("");
  const [errMsg, setErrMsg] = useState({});

  const changeHandler = (e) => {
    // console.log(e);
    // setUserName(e.target.value);
    const key = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [key]:value});
  }

  const validateForm = (e) => {
    e.preventDefault();

    const newErrMsg = {}
    if(!userData.username || userData.username.length <= 4) {
      newErrMsg.usernameMsg = "Please enter a valid username";
    }

    // Validate Email Using RegEx pattern
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!userData.usermail || !emailRegEx.test(userData.usermail)) {
      newErrMsg.usermailMsg = "Please enter a valid email address";
    }

    // Validate Password based on strength
    // below 4 character - weak password
    // between 4 and 8 - average password
    // above 8 - strong password
    if(!userData.password) {
      newErrMsg.userPasswordMsg = "Please enter your password";
    }

    // Validate Confirm Password

    // Validate age should be above 18


    setErrMsg(newErrMsg);
    
  }

  return (
    <>
      <header>
        <h1>Registration Form</h1>
        {/* <h3>Welcome : {username}</h3> */}
      </header>

      <form>
        <div className='form-group'>
          <label>Enter your name</label>
          <input type="text" 
            placeholder='Enter your name'
            onChange={changeHandler}
            value={userData.username}
            name='username'
          />
          {
            errMsg.usernameMsg &&
            <p>
              {errMsg.usernameMsg}
            </p>
          }
        </div>

        <div className='form-group'>
          <label>Enter your email</label>
          <input type="email" 
            placeholder='Enter your email'
            onChange={changeHandler}
            value={userData.usermail}
            name='usermail'
          />
          {
            errMsg.usermailMsg && 
            <p>
              {errMsg.usermailMsg}
            </p>
          }
        </div>

        <div className='form-group'>
          <label>Enter your password</label>
          <input type="password" 
            placeholder='Enter your password'
            onChange={changeHandler}
            value={userData.password}
            name='password'
          />
          {
            errMsg.userPasswordMsg && 
            <p>
              {errMsg.userPasswordMsg}
            </p>
          }
        </div>

        <button onClick={validateForm}>Register Now</button>
      </form>
    </>
  )
}

export default App
