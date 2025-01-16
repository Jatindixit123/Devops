import logo from './logo.svg';
import './App.css';
import { USER_DATA } from './data';

const username = "Ravi";

// Component name will always starts with a capital letter
function Header() {
  return (
    <h1>Welcome : {username}</h1>
  )
}

// function User({username, userAge, profilePic}) {
//   return (
//     <li>
//       <h2>Player Name : {username}</h2>
//       <h3>Player Age : {userAge}</h3>
//       <img src={profilePic} alt='image'/>
//     </li>
//   )
// }

function User(props) {
  return (
    <li>
      <h2>Player Name : {props.username}</h2>
      <h3>Player Age : {props.userAge}</h3>
      <img src={props.profilePic} alt='image'/>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <h2>Sum is {1 + 3}</h2> */}

      <main>
        <ul>
          {/* <User username="Virat Kohli"/> */}
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
      </main>
    </div>
  );
}

export default App;
