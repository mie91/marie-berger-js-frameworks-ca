import React from "react";

function SuccessMessage({children}) {
    return ( 
        <div className = "alert alert-success"> '
            {children}
        </div>
    );
}

export default SuccessMessage;