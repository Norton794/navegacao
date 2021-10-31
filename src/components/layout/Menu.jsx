import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
const Menu = props => (
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                   
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default Menu;