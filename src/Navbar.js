import { ClassNames } from '@emotion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CogIcon } from './images/icons/cog.svg';
import { ReactComponent as PlusIcon } from './images/icons/plus.svg';

export function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav>
    )
}

export function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export function DropdownMenu() {

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className='icon-button'>{props.leftIcon}</span>

                {props.children}

                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className='dropdown'>
            <DropdownItem>Example test</DropdownItem>
            <DropdownItem
                leftIcon={<CogIcon />}
                rightIcon={<PlusIcon />}>
                Better Example
            </DropdownItem>
        </div>
    );
}


export default Navbar;