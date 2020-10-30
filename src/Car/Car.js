import React from "react";


export default (props) => (
    <div>

        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.inputHandler}/>
        {/*<button onClick={props.onChangeTitle}>Click</button>*/}
    </div>
)



