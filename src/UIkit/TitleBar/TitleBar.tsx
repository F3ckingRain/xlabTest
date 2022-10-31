import React, {FC} from 'react';

import styles from './TitleBar.module.scss'
import {IUser} from '../../Types/User'
import clsx from "clsx";

interface TitleBarProps {
    user: IUser
}

const TitleBar:FC<TitleBarProps> = ({user}) => {
    return (
        <div className={styles.titleBar}>
            <div className={styles.titleBar__logo}>
                <button className={clsx(styles.titleBar__btn, styles.settingsBtn)}/>
                <span>
                    Wrench CRM
                </span>
            </div>
            <div className={styles.titleBar__user}>
                <button className={clsx(styles.titleBar__btn, styles.userBtn)}/>
                <span>{user.firstName}</span>
                <span>{user.secondName}</span>
            </div>
        </div>
    );
};

export default TitleBar;