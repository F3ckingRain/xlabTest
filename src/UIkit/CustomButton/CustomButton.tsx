import React, {FC, MouseEventHandler} from 'react';

import styles from './CustomButton.module.scss'

interface CustomButtonProps {
    title: string,
    action: MouseEventHandler
}

const CustomButton:FC<CustomButtonProps> = ({title, action}) => {
    return (
        <button className={styles.customButton} onClick={action}>
            <div className={styles.searchLogo}/>
            <div>{title}</div>
        </button>
    );
};

export default CustomButton;