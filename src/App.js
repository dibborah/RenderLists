import { Fragment } from "react";
import User from "./components/User";

function App() {
  const users = [
    { id: 1, firstName: "Harhsit", lastName: "Vasistha" },
    { id: 2, firstName: "Elon", lastName: "Musk" },
    { id: 3, firstName: "Dibya", lastName: "Borah" },
  ];

  // map method is used to iterate an Array in React

  return (
    <Fragment>
      {/**
    {users.map((user) => {
        return <User firstName={user.firstName}/>
      })}
    **/}
      {/**{users.map((user) => (
        <User firstName={user.firstName} />
      ))}**/}
      {users.map((user) => (
        <User {...user} key={user.id}/>
      ))}
    </Fragment>
  );
}

export default App;
