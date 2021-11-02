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
                    <Link to="/param/1">Param 1</Link>
                   
                </li>

                <li>
                    <Link to="/param/2">Param 2</Link>
                   
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default Menu;