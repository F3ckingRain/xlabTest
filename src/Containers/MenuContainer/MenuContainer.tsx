import React, {FC} from 'react';

import styles from './MenuContainer.module.scss'
import {IItem} from "../../Types/MenuItem";
import MenuItem from "../../Components/MenuItem/MenuItem";

interface MenuContainerProps {
    items: IItem[]
}

const MenuContainer:FC<MenuContainerProps> = ({items}) => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuContainer__title}>Меню</div>
            <div className={styles.menuContainer__body}>
                {items.map((el,index) => (
                    <MenuItem
                        src={el.src}
                        key={`${el}_${index + 1}`}
                        title={el.title}
                        type={el.type}
                        includes={el.includes}
                        items={el.items}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuContainer;