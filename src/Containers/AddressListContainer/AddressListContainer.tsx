import React from 'react';
import styles from './AddressList.module.scss'
import {useAppSelector} from "../../Redux/store";
import ListItem from "./ListItem";


const AddressListContainer = () => {
    const {data} = useAppSelector(state => state.apiReducer)
    return (
        <div className={styles.addressList}>
            <div className={styles.addressList__header}>Адреса</div>
            <div className={styles.addressList__content}>
                {data.map((el,index) => (
                    <ListItem
                        value={el.value}
                        unrestricted_value={el.unrestricted_value}
                        key={`${el}_${index + 1}`}
                    />))
                }
            </div>
        </div>
    );
};

export default AddressListContainer;