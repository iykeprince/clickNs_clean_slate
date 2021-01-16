import React  from "react";
import PropTypes from 'prop-types';
// import * as FaIcon from "react-icons/fa";
// import * as RiIcon from "react-icons/ri";
import IconStore from "../../store/IconStore"
import "./CatStyle.scss"

const BtnGroup = (props) => {
    return (
        <div className="btn-group" >
            <span onClick={props.handleList} id="list" className="btn btn-default btn-xs">
            {/* <FaIcon.FaList />  */}
            {IconStore.listIcon}
            </span>
            <span onClick={props.handleGrid} id="grid" className="btn btn-default btn-xs">
            {/* <RiIcon.RiLayoutGridFill/> */}
            {IconStore.gridIcon}
            </span>
        </div>
    );
};

BtnGroup.propTypes = {
    handleList: PropTypes.func,
    handleGrid: PropTypes.func,
};

export default BtnGroup;
