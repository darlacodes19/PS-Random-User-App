import React from 'react'

function Button (props) {

    return (
        <div> 
                <button onClick={props.clicked}>{props.isActive ? "Get another user" : "Get user"}</button> 
        </div> 
    )

}

export default Button 