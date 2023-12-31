import React,{useState} from 'react';

import Card from '../Ui/card'
import classes from './AddUser.module.css'
import Button from '../Ui/button';
import ErrorModal from '../Ui/ErrorModal';

const AddUser=(props)=>{
const  [enteredUserName,setEnteredUserName]=useState('')
const  [enteredAge,setEnteredAge]=useState('');
const [error,setError]=useState()


const addUserHandler=(e)=>{
e.preventDefault();
if(enteredUserName.trim().length===0 || enteredAge.trim().length===0)
{
    setError({title:'Invalid Input',message:'Please enter a valid username and age(non- empty values)'});
return;
}
if(+enteredAge<1)
{
    setError({title:'Invalid age',message:'Please enter a valid  age(>0)'});

    return;
}
props.onAddUser(enteredUserName,enteredAge);
setEnteredUserName('');
setEnteredAge('')
}

const userNameChangeHandler=(event)=>{
setEnteredUserName(event.target.value);

}

const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
    
    }
    
const errorHandler=()=>{
    setError(null)
}
return <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
<Card className={classes.input}><form onSubmit={addUserHandler}>
   
    <label htmlFor='username'>username</label>
    <input type='text' id='username' onChange={userNameChangeHandler} value={enteredUserName}/>
    <label htmlFor='age'>age</label>
    <input type='text' id='age' onChange={ageChangeHandler} value={enteredAge}/>
    <Button type="submit">Add User</Button>
</form>
</Card>
</div>

}

export default AddUser;