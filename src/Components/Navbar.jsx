import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useState } from 'react';

export default function Navbar({SetSearchData})
{
    let [Query,SetQuery]  = useState("")
    return(
        <nav>
            <h1>News.IO</h1>
            <div className="searchbar">
                <input onChange={(e)=>SetQuery(e.target.value)} type="text" placeholder='Search...'/>
            <button onClick={()=>{
                SetSearchData(Query)
                console.log(Query)
            }}>Search</button>
            </div>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/News' >News</Link></li>
                <li><Link to='/Service' >contact</Link></li>
            </ul>
        </nav>
    )
}