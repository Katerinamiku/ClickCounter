import React from 'react';
import {NavLink} from "react-router-dom";
import s from './ClickCounter.module.css'
const Navigation = () => {
    return (
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/settings'> Settings </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={(navData) => navData.isActive ? s.active : s.item} to='/counter'>Counter</NavLink>
                </div>
        </nav>
    );
};

export default Navigation;
