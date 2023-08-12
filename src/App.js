import React,{useState} from 'react';
import AddUser from './components/users/addUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler=(ename,eage)=>{
    setUsersList((prevUserList)=>{
      return [...prevUserList,{name:ename,age:eage,id:Math.random().toString()}]

    });
  }
  return (
    <div>
<AddUser onAddUser={addUserHandler}/>
<UsersList users={usersList}/>
    </div>
  );
}

export default App;
