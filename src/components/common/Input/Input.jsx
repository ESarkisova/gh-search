import React from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> master
import cn from "./Input.module.sass";

function Input({value,
               placeholder = "",
               type = "text",
               size="large",
               onChange}) {

    Input.propTypes = {
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        type: PropTypes.oneOf(["password","text"]),
        size: PropTypes.oneOf(["large","small"]),
        onChange: PropTypes.func.isRequired,
    }

    const handlerChange = (e) => {
        onChange && onChange(e.target.value)
    }

    return (
        <div className={cn.input__wrapper}>
            <input className={`${cn.input} ${cn[size]}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handlerChange}/>
        </div>
    );
}

export default Input;
