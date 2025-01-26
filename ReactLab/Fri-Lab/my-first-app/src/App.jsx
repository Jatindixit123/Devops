import './App.css'
import { USER_DATA } from './data';

// Header is a component - first letter should be capital
function Header() {
  const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";
  return(
    <header>
      {/* <img src={logoUrl} alt="logo"/> */}
    </header>
  )
}

// function User({username, userAge, profilePic}) {
//   return (
//     <li>
//       <p>Username : {username}</p>
//       <p>User Age: {userAge}</p>
//       <img src={profilePic} alt="img"/>
//     </li>
//   )
// }

function User(props) {
  return (
    <li>
      <p>Username : {props.username}</p>
      <p>User Age: {props.userAge}</p>
      <img src={props.profilePic} alt="img"/>
    </li>
  )
}

function App() {
  const username = "React";
  return (
    <div>
      <Header/>
      <h1>Hello world with {username}...</h1>

      <ul>
        {/* <User 
          username={USER_DATA[0].username}
          userage={USER_DATA[0].userAge}
          profilepic={USER_DATA[0].profilePic}
        />

        <User 
          username={USER_DATA[1].username}
          userage={USER_DATA[1].userAge}
          profilepic={USER_DATA[1].profilePic}
        />

        <User 
          username={USER_DATA[2].username}
          userage={USER_DATA[2].userAge}
          profilepic={USER_DATA[2].profilePic}
        /> */}

        <User {...USER_DATA[0]}/>
        <User {...USER_DATA[1]}/>
        <User {...USER_DATA[2]}/>
      </ul>
    </div>
  )
}

export default App
