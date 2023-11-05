import React from 'react';
import {FaLocationDot} from "react-icons/fa6";

const BoxComp = () => {
    return (
        <div className="box-Container">
            
               <li> <FaLocationDot className="Current-User"/> Current User</li>
                <li>  <FaLocationDot className="Available"/> Available</li>
                <li><FaLocationDot className="Unavailable"/> Unavailable</li>

        </div>
    );
};

export default BoxComp;