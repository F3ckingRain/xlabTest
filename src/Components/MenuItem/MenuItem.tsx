import React, {FC, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";

import styles from './MenuItem.module.scss'
import clsx from "clsx";
import {IItem} from "../../Types/MenuItem";

interface MenuItemProps extends IItem{

}

const MenuItem:FC<MenuItemProps> = ({src, title , type, includes ,items}) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const toggleHandler = () => {
        setToggle(prev => !prev)
    }
    const {pathname} = useLocation()
    return (
        <div className={styles.menuItem}>
            {
                src && <NavLink to={src} className={
                    pathname === src
                    ? clsx(styles.link, styles[`${type}`], styles.active)
                    : clsx(styles.link, styles[`${type}`])
                    }>
                {title}
                </NavLink>
            }
            {!src && <div className={styles.settingsItem} onClick={toggleHandler}>
                <div className={styles.settingsItem__container}>
                    <div className={clsx(styles.settingsItem__title, styles[`${type}`])}>{title}</div>
                    {includes &&  <button
                        className={toggle
                            ? clsx(styles.settingsItem__btn, styles.settingsItem__active)
                            : styles.settingsItem__btn}
                    />}
                </div>
                <div
                    className={(!toggle || !items)
                        ? styles.settingsItem__items
                        : clsx(styles.settingsItem__item, styles.settingsItem__hide)}
                >
                    {items?.map((el,index) =>
                        <MenuItem title={el.title} type={el.type} key={`${el}_${index + 1}`}/>
                    )}
                </div>
            </div>}
        </div>
    );
};

export default MenuItem;