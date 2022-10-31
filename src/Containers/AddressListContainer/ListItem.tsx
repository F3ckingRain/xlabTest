import React, {FC} from 'react';
import styles from './AddressList.module.scss'

interface ListItemProps  {
    value: string,
    unrestricted_value: string
}

const ListItem:FC<ListItemProps> = (
    {value, unrestricted_value}
) => {
    return (
        <div className={styles.item}>
            <span className={styles.item__text}>{value}, {unrestricted_value}</span>
        </div>
    );
};

export default ListItem;