import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./home.css"
export const Post=(props)=>{
    function handleClick() {
        props.onDelete(props.id);
      }

    return (
        <div className="post_div">
            <p>{props.content}</p>
            <img src={props.gif} alt="img"/>
            <button onClick={handleClick}>
        <DeleteIcon />
      </button>
        </div>
    )
}