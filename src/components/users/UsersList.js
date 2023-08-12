import React from 'react';
import Card from '../Ui/card'
import classes from './UsersList.module.css'
const UsersList=(props)=>{
return <Card className={classes.users}> 
<ul>
    {props.users.map(user=>{
      return  <li key={user.id}>{user.name} ({user.age} years old)</li>
})}
</ul>
</Card>
}
export default UsersList;