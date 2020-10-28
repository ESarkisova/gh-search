import React from "react";
import cn from "../Table.module.sass";

function TableItem({name, description, license, html_url, stargazers_count}) {

    return (
        <div className={cn.table__row}>
            <div>
                <span>Имя</span>
                <span className={cn.table__content}>{name}</span>
            </div>
            <div>
                <span>Описание</span>
                <span className={cn.table__content}>{description}</span>
            </div>
            <div>
                <span>Лицензия</span>
                <span className={cn.table__content}>{license?.name}</span>
            </div>
            <div className="text-center">
                <span>Ссылка</span>
                <a className={cn.table__content} href={html_url} rel="noopener noreferrer" target="_blank">ссылка</a>
            </div>
            <div className="text-center">
                <span>Популярность</span>
                <span className={cn.table__content}>{stargazers_count}</span>
            </div>
        </div>)

}

export default TableItem;
