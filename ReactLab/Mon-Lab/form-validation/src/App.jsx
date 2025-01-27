import { useState } from 'react'
import './App.css'

function App() {

  const [userData, setUserData] = useState({
    userName : "",
    userEmail: "",
    userPassword: "",
    userConfPassword : "",
    userAge: 0
  });

  const [error, setError] = useState({});

  const validate = () => {
    const newErrors = {};

    // Check if username is greater than 4 letters
    if(!userData.userName || userData.userName.length <= 4) {
      newErrors.nameMsg = "Username must contain more than 4 letters";
    }

    // Check if email is valid
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const changeHandler = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
    console.log({...userData});
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  }

  return (
    <>
      <header>
        <h1>Registration Form</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Enter your name : </label>
          <input
            type='text'
            placeholder='Enter your name'
            value={userData.userName}
            name='userName'
            onChange={changeHandler}
          />
          {error.nameMsg && <p>{error.nameMsg}</p>}
        </div>

        <div className='form-group'>
          <label>Enter your email : </label>
          <input
            type='email'
            placeholder='Enter your email'
            value={userData.userEmail}
            name='userEmail'
            onChange={changeHandler}
          />
        </div>

        <button type='submit'>Register Now</button>
      </form>
    </>
  )
}

export default App
