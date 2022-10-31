import React, {ChangeEventHandler, FC, MouseEventHandler} from 'react';
import CustomButton from "../../UIkit/CustomButton/CustomButton";
import styles from './SearchItem.module.scss'

interface SearchItemProps {
    searchValue: string,
    searchHandler: ChangeEventHandler,
    action: MouseEventHandler,
    clickToggle: boolean
}

const SearchItem:FC<SearchItemProps> = ({searchValue, searchHandler, action, clickToggle}) => {
    return (
        <div className={styles.searchItem}>
            <input
                className={styles.input}
                placeholder='Введите интересующий вас адрес'
                value={searchValue}
                onChange={searchHandler}
            />
            {clickToggle &&
                <span className={styles.wrongValue}>
                    Минимальное количество символов : 3
                </span>
            }
            <CustomButton title={'Поиск'} action={action} />
        </div>
    );
};

export default SearchItem;