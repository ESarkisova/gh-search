import React, {useContext, useEffect, useState} from 'react';
import Table from "./Table";
import {API} from "../../DAL/api";
import {AlertContext, ERROR_TYPE} from "../../contexts/alertContext";
import useDebounce from "../../hooks/useDebounce";

const SEARCH_PARAM = 'SEARCH_PARAM';
const LICENSE_PARAM = 'LICENSE_PARAM';

function TableContainer() {

    const [isLoading, setIsLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [dataFromGithub, setDataFromGithub] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectLicenseType, setSelectLicenseType] = useState('');

    const debouncedSearchQuery = useDebounce(searchQuery, 700);

    const {showAlert} = useContext(AlertContext);

    useEffect(async () => {

        setIsLoading(true);
        try {
            const result = await API.getRepo(debouncedSearchQuery, selectLicenseType, pageNum);
            setDataFromGithub(result);
        } catch (err) {
            showAlert(err, ERROR_TYPE)
        } finally {
            setIsLoading(false);
        }

    },
        [debouncedSearchQuery, selectLicenseType, pageNum]);

    const setNewParamForQuery = (typeParam, value) => {

        switch (typeParam) {
            case SEARCH_PARAM:
                setSearchQuery(value);
                break;
            case LICENSE_PARAM:
                setSelectLicenseType(value);
                break;
            default:
                return;
        }

        if (pageNum > 1) {
            setPageNum(1);
        }
    }


    return (
        <Table
            isLoading={isLoading}
            pageCurrent={pageNum}
            tableData={dataFromGithub}
            searchQuery={searchQuery}
            selectLicenseType={selectLicenseType}
            setPage={setPageNum}
            handlerSelectLicenseType={(type) => setNewParamForQuery(LICENSE_PARAM, type)}
            handlerSearchQueryInput={(query) => setNewParamForQuery(SEARCH_PARAM, query)}
        />
    );
}

export default TableContainer;
