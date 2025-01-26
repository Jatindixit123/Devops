import './App.css';
import { USER_DATA } from './data';

// First component
// component name should start with capital letter
function Header() {
  return (
    <h1>Welcome to React JS</h1>
  );
}

function Main({username}) {
  return (
    <>
      <h2>My name is {username}</h2>
      <h3>This is my first react project</h3>
    </>
  );
}

// function User({userName, userAge, profilePic}) {
//   return (
//     <li>
//         <h2>Username : {userName}</h2>
//         <h4>Age is : {userAge}</h4>
//         <img src={profilePic} alt='image'/>
//     </li>
//   )
// }

// props - properties
function User({props}) {
  return (
    <li>
        <h2>Username : {props.userName}</h2>
        <h4>Age is : {props.userAge}</h4>
        <img src={props.profilePic} alt='image'/>
    </li>
  )
}

function App() {
    const username = "Ravi";
    return(
      <div>
          <Header/>
          <Main username={username}/>
          <ul>
            {/* <User
              userName = {USER_DATA[0].userName}
              userAge = {USER_DATA[0].userAge}
              profilePic = {USER_DATA[0].profilePic}
            />

            <User
              userName = {USER_DATA[1].userName}
              userAge = {USER_DATA[1].userAge}
              profilePic = {USER_DATA[1].profilePic}
            /> */}

            {/* <User {...USER_DATA[0]}/>
            <User {...USER_DATA[1]}/>
            <User {...USER_DATA[2]}/> */}

          {USER_DATA.map((user) => (
            <User key={user.id} props={user} />
          ))}

          </ul>
      </div>
    )
}

export default App
