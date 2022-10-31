import React, {ChangeEvent, useState} from 'react';
import SearchItem from "../../Components/SearchItem/SearchItem";
import PageHeader from "../../Components/PageHeader/PageHeader";
import styles from './SearchPage.module.scss'
import {searchHeader} from "../../Const/HeaderText";
import AddressListContainer from "../AddressListContainer/AddressListContainer";
import {useAppDispatch} from "../../Redux/store";
import {getList} from "../../Redux/ActionCreators/ActionCreators";


const SearchPageContainer = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [clickToggle, setClickToggle] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const action = () => {
        if (searchValue.length < 3) {
            setClickToggle(true)
            return
        }
        dispatch(getList(searchValue))
        setClickToggle(false)
    }
    const searchHandler = (e:ChangeEvent<HTMLInputElement>) => {
        if (!e.target) return
        setSearchValue(e.target.value)
    }
    return (
        <div className={styles.searchPage}>
            <PageHeader title={searchHeader.title} content={searchHeader.content}/>
            <SearchItem
                searchValue={searchValue}
                clickToggle={clickToggle}
                action={action}
                searchHandler={searchHandler}
            />
            <AddressListContainer/>
        </div>
    );
};

export default SearchPageContainer;