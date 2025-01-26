import { USER_DATA } from "./data";

function Header({username}) {
  return (
    <header>
      <h1>Welcome : {username}, My First React App</h1>
    </header>
  )
}

// function User({userName, userAge, pic}) {
//   return (
//     <li>
//         <img src={pic} alt={userName}/>
//         <h2>Username : {userName}</h2>
//         <h3>User Age : {userAge}</h3>
//     </li>
//   )
// }


// props - properties
function User({props}) {
  return (
    <li>
        <img src={props.pic} alt={props.userName}/>
        <h2>Username : {props.userName}</h2>
        <h3>User Age : {props.userAge}</h3>
        <h3>Role : {props.role}</h3>
    </li>
  )
}

function App() {
  const username = "John";
  return (
    <div>
      <Header username={username}/>
      <main>
        <ul>
          {/* <User
            username = {USER_DATA[0].userName}
            userage = {USER_DATA[0].userAge}
            pic = {USER_DATA[0].pic}
          />

          <User
            username = {USER_DATA[1].userName}
            userage = {USER_DATA[1].userAge}
            pic = {USER_DATA[1].pic}
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

export default App
