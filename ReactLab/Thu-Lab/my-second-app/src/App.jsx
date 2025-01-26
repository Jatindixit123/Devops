import './App.css';
import { USERS } from './data';

// const usernames = ["Virat", "Sachin", "Dhoni", "Rohit"];

// Component
function Header({username}) {
  return (
    <header>
      <h1>Welcome : {username}, My React App Using Vite</h1>
    </header>
  )
}

// function User({name, age, role, pic}) {
//   return (
//     <li>
//       <img src={pic} alt={name}/>
//       <h2>Username : {name}</h2>
//       <h3>Age : {age}</h3>
//       <h3>Role : {role}</h3>
//     </li>
//   )
// }

// Props - properties
function User({props}) {
  return (
    <li>
      <img src={props.pic} alt={props.name}/>
      <h2>Username : {props.name}</h2>
      <h3>Age : {props.age}</h3>
      <h3>Role : {props.role}</h3>
    </li>
  )
}

function App() {
  const username = "John";
  return(
    <div>
      <Header username={username}/>
      <main>
        <ul>
          {/* <li>{usernames[0]}</li>
          <li>{usernames[1]}</li>
          <li>{usernames[2]}</li>
          <li>{usernames[3]}</li> */}

          {/* whenever we write any JS oriented code we should always put that in {} */}
          {/* {
            usernames.map((item) => (
              <li>{item}</li>
            ))
          } */}

          {/* <User 
            name={USERS[0].name}
            age={USERS[0].age}
            role={USERS[0].role}
            pic={USERS[0].pic}
          />

          <User 
            name={USERS[1].name}
            age={USERS[1].age}
            role={USERS[1].role}
            pic={USERS[1].pic}
          /> */}

          {/* <User {...USERS[0]}/>
          <User {...USERS[1]}/>
          <User {...USERS[2]}/> */}

          {
            USERS.map((item) => (
              <User key={item.id} props={item}/>
            ))
          }


        </ul>
      </main>
    </div>
    
  )
}

export default App
