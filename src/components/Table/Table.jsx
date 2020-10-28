import React from "react";
import classNames from "classnames";
import Input from "../common/Input/Input";
import LicensesSelect from "../LicensesSelect/LicensesSelect";
import Pagination from "../common/Pagination/Pagination";
import TableItem from "./components/TableItem";
import cn from "./Table.module.sass";

function Table({ isLoading,
                pageCurrent,
                tableData,
                searchQuery,
                selectLicenseType,
                setPage,
                handlerSelectLicenseType,
                handlerSearchQueryInput }) {

    const dataTableExist = !isLoading && tableData;

    const classNamesWrapper = classNames({
        "loading": isLoading,
        [cn.table__wrapper]: true,
    });

    return (
        <div className={classNamesWrapper}>

            <div className={cn.table__block}>
                <div className="flex-left">
                    <Input
                        value={searchQuery}
                        onChange={handlerSearchQueryInput}
                        placeholder="Поиск..."
                    />
                </div>
                <div className="flex-right">
                    <LicensesSelect
                        value={selectLicenseType}
                        handlerChange={handlerSelectLicenseType}
                    />
                </div>
            </div>

            <div className={cn.table__block}>
                <div className={`${cn.table__row} ${cn.table__row_header}`}>
                    <div>Имя</div>
                    <div>Описание</div>
                    <div>Лицензия</div>
                    <div>Ссылка</div>
                    <div>Популярность</div>
                </div>
                {dataTableExist && (tableData?.total_count > 0 ?
                    tableData.items.map(repo => <TableItem key={repo.id} {...repo} />)
                    : <span className="mt-20">Записи не найдены</span>)}
            </div>

            {dataTableExist && <Pagination
                pageCurrent={pageCurrent}
                setPage={setPage}
                totalCount={tableData?.total_count} />}

        </div>
    );
}

export default Table;
