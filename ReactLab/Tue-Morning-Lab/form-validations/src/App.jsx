import { useState } from 'react'
import './App.css'

function App() {

  // const [username, setUserName] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    password: "",
    confPassword: "",
    dob: ""
  });

  // const [message, setMessage] = useState("");
  const [message, setMessage] = useState({});
  
  const changeHandler = (e) => {
    // setUserName(e.target.value);
    // console.log(e);
    const key = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [key]:value});
    console.log(userData);
    setMessage({});
  }

  const isValid = () => {
    const errMsg = {};
    if(!userData.username || userData.username.length <= 4) {
        errMsg.username = "Please enter a valid username";
    }

    // Validate Email - should match the email pattern
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!userData.useremail || !emailRegEx.test(userData.useremail)) {
      errMsg.email = "Invalid Email Address";
    }

    // TODO
    // Validate Password - test for password strength
    // Confirm Password - test for password and confirm password should match

    setMessage(errMsg);
    console.log(message);

    return Object.keys(errMsg).length === 0;
  }

  const handleClick = (e) => {
    // will prevent reloading form
    e.preventDefault();
    // setMessage(username);
    if(!isValid()) {
      
    }
    // setUserData({
    //   username: "",
    //   useremail: "",
    //   password: "",
    //   confPassword: "",
    //   dob: ""
    // })
  }

  return (
    <div>
      <h1>Registration Form</h1>
      {/* <h2>Welcome : {message}</h2> */}
      <form>
        <div className='form-group'>
          <label>Enter your name</label>
          <input 
            type='text'
            placeholder='Enter your name'
            name='username'
            value={userData.username}
            onChange={changeHandler}
          />
          {message.username && <p>{message.username}</p>}
        </div>

        <div className='form-group'>
          <label>Enter your email</label>
          <input 
            type='email'
            placeholder='Enter your name'
            name='useremail'
            value={userData.useremail}
            onChange={changeHandler}
          />
        </div>

        <div className='form-group'>
          <label>Enter your password</label>
          <input 
            type='password'
            placeholder='Enter your password'
            name='password'
            value={userData.password}
            onChange={changeHandler}
          />
        </div>

        <div className='form-group'>
          <label>Confirm Password</label>
          <input 
            type='password'
            placeholder='Confirm Password'
            name='confPassword'
            value={userData.confPassword}
            onChange={changeHandler}
          />
        </div>

        <div className='form-group'>
          <label>Enter your DOB</label>
          <input 
            type='date'
            name='dob'
            value={userData.dob}
            onChange={changeHandler}
          />
        </div>

        <button onClick={handleClick}>Register Now</button>
      </form>
    </div>
  )
}

export default App
