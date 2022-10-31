import React, {FC} from 'react';
import styles from './PageHeader.module.scss'

interface PageHeaderProps {
    title: string,
    content: string
}

const PageHeader:FC<PageHeaderProps> = ({title, content}) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__title}>{title}</div>
            <div className={styles.header__content}>{content}</div>
        </div>
    );
};

export default PageHeader;