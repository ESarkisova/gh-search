import React, {useCallback, useContext, useEffect, useState} from "react";
import Table from "./Table";
import {API} from "../../DAL/api";
import {AlertContext, ERROR_TYPE} from "../../contexts/alertContext";
import useDebounce from "../../hooks/useDebounce";

function TableContainer() {

    const [isLoading, setIsLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [dataFromGithub, setDataFromGithub] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectLicenseType, setSelectLicenseType] = useState("");

    const debouncedSearchQuery = useDebounce(searchQuery, 700);

    const {showAlert} = useContext(AlertContext);

    const getRepo = useCallback(async (pageNum = 1) => {

        setIsLoading(true);
        try {
            const result = await API.getRepo(debouncedSearchQuery, selectLicenseType, pageNum);
            setDataFromGithub(result);
            setPageNum(pageNum);
        } catch (err) {
            showAlert(err, ERROR_TYPE)
        } finally {
            setIsLoading(false);
        }
    }, [debouncedSearchQuery, selectLicenseType]);

    useEffect(getRepo, [debouncedSearchQuery, selectLicenseType]);

    return (
        <Table
            isLoading={isLoading}
            pageCurrent={pageNum}
            tableData={dataFromGithub}
            searchQuery={searchQuery}
            selectLicenseType={selectLicenseType}
            setPage={getRepo}
            handlerSelectLicenseType={setSelectLicenseType}
            handlerSearchQueryInput={setSearchQuery}
        />
    );
}

export default TableContainer;
