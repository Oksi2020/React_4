import React, { useState } from 'react';
import './controlledForm.css'
import { Toggler, TogglerItem } from '../context/toggler';


export const ControlledForm =() => {

    const [active, setActive] = useState('frontend');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('Kyiv'); 
    const [user, setUser] = useState([]);

    const changeActive = value => _ => setActive(value);
    const changeUserName = e => setUserName(e.target.value);
    const changeEmail = e => setEmail(e.target.value);
    const changeCity = e => setCity(e.target.value);
    const submit = e => {
        e.preventDefault();
        if(userName && email) {
            setUser([...user, {name: userName, userEmail: email, type: active, userCity: city}]);
            setUserName('');
            setEmail('');
            setCity('Kyiv');
            setActive('frontend');
        }
    }   

    return(
        <div className = 'controlledForm' onSubmit = {submit}>
            <h1>Controlled Form</h1>
            <form className = 'form'>
                <label>
                    <span>
                        Your name :
                    </span>
                    <input 
                        type ='text'
                        onChange = {changeUserName}
                    ></input>
                </label>
                <label>
                    <span>
                        Email:
                    </span>
                    <input 
                        type ='email'
                        value = { email }
                        onChange = { changeEmail }
                    ></input>
                </label>
                <label>
                    <span>
                        City:
                    </span>
                    <select value = {city} onChange={changeCity}>
                        <option> Kyiv</option>
                        <option> Lviv</option>
                        <option> Harkiv</option>
                        <option> Odessa</option>
                    </select>
                </label>
                <Toggler 
                    name = 'Type' 
                    active = { active } 
                    action = { changeActive }
                    value = { userName }
                >
                    <TogglerItem value = 'frontend'>ErontEnd</TogglerItem>
                    <TogglerItem value = 'backend'>Backend</TogglerItem>
                    <TogglerItem value = 'designer'>Designer</TogglerItem>
                </Toggler>
                <button>Write new user</button>
            </form> 
            <ul>
                {
                    user.map(users=> (
                    <li key = {users.name}> 
                        <b>User Name:</b> {users.name} <br />
                        <b>Email: </b>{users.userEmail} <br/>
                        <b>City: </b>{users.userCity} <br/>
                        <b>Type: </b>{users.type} <br />
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}