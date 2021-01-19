import React from "react";
import { Link } from "react-router-dom";

function CategoryDirection(props) {
  return (
    <div className="link_dirGroup">
      <Link to="/">
        <span className="link_dir1">Home</span>
      </Link>

      <span className="dir">
        <b>{`>`}</b>
      </span>
      <Link>
        <span className="link_dir2 active">{props.categoryName}</span>
      </Link>
    </div>
  );
}

export default CategoryDirection;
