import { USER_DATA } from "./data";

// Functional Component
// Component name must start with a capital letter
function Header() {
  return (
    <header>
      <h1>Hello world with React...</h1>
    </header>
  )
}

function Main({username}) {
  return (
    <>
      <h2>Welcome {username}, Let's learn React...</h2>
      <p>This paragraph is also inside main...</p>
    </>
  )
}

// function User({userName, userAge, profilePic}) {
//   return (
//     <li>
//       <img src={profilePic} alt="image"/>
//       <h2>Username : {userName}</h2>
//       <h3>User age : {userAge}</h3>
//     </li>
//   )
// }

// props - properties
function User({props}) {
  return (
    <li>
      <img src={props.profilePic} alt="image"/>
      <h2>Username : {props.userName}</h2>
      <h3>User age : {props.userAge}</h3>
    </li>
  )
}

function App() {
  const username = "Steve";
  return (
    <div>
      <Header/>
      <main>
        <Main username={username}/>
        <ul>
          {/* <User 
            username={USER_DATA[0].userName}
            userage={USER_DATA[0].userAge}
            pic={USER_DATA[0].profilePic}
          />

          <User 
            username={USER_DATA[1].userName}
            userage={USER_DATA[1].userAge}
            pic={USER_DATA[1].profilePic}
          />

          <User 
            username={USER_DATA[2].userName}
            userage={USER_DATA[2].userAge}
            pic={USER_DATA[2].profilePic}
          /> */}

          {/* <User {...USER_DATA[0]} />
          <User {...USER_DATA[1]} />
          <User {...USER_DATA[2]} /> */}

          {USER_DATA.map((user) => (
            <User key={user.id} props={user}/>
          ))}

        </ul>
      </main>
    </div>
  )
}

export default App;