import PropTypes from "prop-types";
import React from "react";
import "../App.css";


export let Chips = ({ label = "", crossed = "", className }) => {
    return (
        <div className={`chips ${className}`}>
            <div className="text">
                <div className="label">{label}</div><div className="crossed">{crossed}</div>
            </div>
        </div>
    );
};

Chips.propTypes = {
    label: PropTypes.string,
    crossed: PropTypes.string,
};

export default Chips