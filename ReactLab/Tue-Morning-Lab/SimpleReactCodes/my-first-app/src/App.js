import './App.css';
import { USER_DATA } from './data';

const username = "Ravi";

// Header component
function Header() {
  return (
    <header>
      <h2>Welcome : {username}</h2>
    </header>
  )
}

function User(props) {
  return (
    <li>
      <img src={props.profilePic} alt="User Image"/>
      <h3>Username : {props.username}</h3>
      <h4>Age : {props.userAge}</h4>
    </li>
  )
}

// function User({profilePic, username, userAge}) {
//   return (
//     <li>
//       <img src={profilePic} alt="User Image"/>
//       <h3>Username : {username}</h3>
//       <h4>Age : {userAge}</h4>
//     </li>
//   )
// }

// Footer component
function Footer() {

}

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world with React</h1> */}
      <Header/>
      <main>
        <h2>Users...</h2>
        <ul>
          {/* <User 
          profilePic = ""
          username = ""
          userAge = ""
          /> */}

          {/* <User 
          profilePic = {USER_DATA[0].profilePic}
          username = {USER_DATA[0].username}
          userAge = {USER_DATA[0].userAge}
          />

        <User 
          profilePic = {USER_DATA[1].profilePic}
          username = {USER_DATA[1].username}
          userAge = {USER_DATA[1].userAge}
          />

        <User 
          profilePic = {USER_DATA[2].profilePic}
          username = {USER_DATA[2].username}
          userAge = {USER_DATA[2].userAge}
          /> */}

          <User {...USER_DATA[0]}/>
          <User {...USER_DATA[1]}/>
          <User {...USER_DATA[2]}/>
          <User {...USER_DATA[3]}/>
        </ul>
      </main>
    </div>
  );
}

export default App;
