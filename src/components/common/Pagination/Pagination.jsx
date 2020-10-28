import React, {memo} from "react";
import {PAGE_SIZE} from "../../../constants/constants";
import cn from "./Pagination.module.sass";

function Pagination({ pageCurrent = 1,
                    setPage,
                    totalCount = 0 }) {



    if (!totalCount) return null;

    const totalPageCount = Math.ceil(totalCount / PAGE_SIZE);

    const changePageHandler = (page) => {

        const pageNum = Number(page);
        if (pageNum > 0 && pageNum <= totalCount) {
            setPage(pageNum)
        }
    }

    const prevButtonClick = () => {
        changePageHandler(pageCurrent-1)
    }

    const nextButtonClick = () => {
        changePageHandler(pageCurrent+1)
    }

    return (
        <div className={cn.pagination__wrapper}>
            <div>Общее количество записей: <b>{totalCount}</b></div>
            <div>Количество страниц: <b>{totalPageCount}</b></div>
            <div className={cn.pagination}>
                <span>Перейти на страницу:</span>
                <button onClick={prevButtonClick} disabled={pageCurrent === 1}>prev</button>
                <b>{pageCurrent}</b>
                <button onClick={nextButtonClick} disabled={pageCurrent === totalPageCount}>next</button>
            </div>
        </div>
    );
}

function arePropsEqual(prevProps, nextProps) {
    return prevProps.totalCount === nextProps.totalCount
        && prevProps.pageCurrent === nextProps.pageCurrent;
}

export default memo(Pagination, arePropsEqual);
