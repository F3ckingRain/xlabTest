import React from 'react';
import styles from './HomePage.module.scss'
import PageHeader from "../../Components/PageHeader/PageHeader";
import {homeHeader} from "../../Const/HeaderText";

const HomePageContainer = () => {
    return (
        <div className={styles.homePage}>
            <PageHeader title={homeHeader.title} content={homeHeader.content}/>
        </div>
    );
};

export default HomePageContainer;