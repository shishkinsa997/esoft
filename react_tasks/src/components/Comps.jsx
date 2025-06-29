// import PropTypes from "prop-types";
import React from "react";


// export let Comps = (props) => {
//     return (
//         <div className={props.classDiv}>
//             <p className={props.classP}>
//                 {props.text}
//             </p>
//         </div>
//     );
// };
function Comps (props){
    return (
        <p>Привет, {props.text}</p>
    );
};

// Chips.propTypes = {
//     label: PropTypes.string,
//     crossed: PropTypes.string,
// };

export default Comps