import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import useTitle from "./hooks/useTitle";
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
    const [toggle, setToggle] = useState(true);
    const [name,setName] = useLocalStorage( "name", "");

    const toggleHandler = ()=>{
        setToggle(!toggle)

    }
    return (
        <div>
           <button onClick={toggleHandler}>Toggle</button> 
           {toggle ? <Landing/> : <Login/>}
           <input type="text" value ={name} onChange={(event)=>setName(event.target.value)}/>
        </div>
    );
};

export default App;