import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom';

import './styles.css'

export default function Navbar() {
    const history = useHistory();

    const [query, setQuery] = useState('');

    function handleQuery(e) {
        e.preventDefault();

        if(query === ''){
            return alert('Empty query string!');
        }
        var redefinedQuery = query.replace(" ", "+")
        history.push(`/query/${redefinedQuery}`);
        window.location.reload();
    }

    return (
        <div className="navbar-container">

            <ul>
                <li><Link to="/">HOME</Link></li>

                <li>
                    <form onSubmit={handleQuery}>
                        <input placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />
                        <button type="submit">Search!</button>
                    </form>


                </li>
            </ul>


        </div>
    )
}