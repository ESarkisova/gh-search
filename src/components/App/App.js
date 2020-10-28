import React from "react";
import TableContainer from "../Table/TableContainer";
import AlertContextProvider from "../../contexts/alertContext";
import Alert from "../Alert/Alert";

function App() {
    return (
        <AlertContextProvider>
<<<<<<< HEAD
            <div className='container'>
                <TableContainer/>
=======
            <div className="container">
>>>>>>> master
                <Alert/>
                <TableContainer/>
            </div>
        </AlertContextProvider>
    );
}

export default App;
