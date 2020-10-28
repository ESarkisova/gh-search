<<<<<<< HEAD
import React, {useContext, useEffect, useState} from "react";
=======
import React, {useCallback, useContext, useEffect, useState} from "react";
>>>>>>> master
import Select from "../common/Select/Select";
import {AlertContext, ERROR_TYPE} from "../../contexts/alertContext";
import {API} from "../../DAL/api";

function LicensesSelect({selectLicenseType, handlerChange}) {

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const {showAlert} = useContext(AlertContext);

    const getLicense = useCallback(async () => {

        setIsLoading(true);
        try {
            const result = await API.getLicenses();
            setOptions(result.map(({key, name}) => ({value: key, label: name})))
        } catch (err) {
            showAlert(err, ERROR_TYPE)
        } finally {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => getLicense(),[])

    return (
        <Select placeholder={'Все лицензии'}
                value={selectLicenseType}
                options={options}
                handlerChange={handlerChange}
                disbled={isLoading} />
    );
}

export default LicensesSelect;
