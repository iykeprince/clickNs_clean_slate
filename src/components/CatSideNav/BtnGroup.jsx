import React  from "react";
import PropTypes from 'prop-types';
import * as FaIcon from "react-icons/fa";
import * as RiIcon from "react-icons/ri";
import "./CatStyle.scss"

const BtnGroup = (props) => {
    return (
        <div className="btn-group" >
            <span onClick={props.handleList} id="list" className="btn btn-default btn-xs">
            <FaIcon.FaList /> List
            </span>
            <span onClick={props.handleGrid} id="grid" className="btn btn-default btn-xs">
            <RiIcon.RiLayoutGridFill/>Grid
            </span>
        </div>
    );
};

BtnGroup.propTypes = {
    handleList: PropTypes.func,
    handleGrid: PropTypes.func,
};

export default BtnGroup;
