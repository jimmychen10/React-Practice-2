import React from "react";
import ReactDom from "react-dom"
import "../src/index.css"
 
function MyInfo() {
  return(
    <div>
      
      <h1>Jimmy Chen</h1>
      <p>I love programing and working toegther to solve problems and create solutions.</p>
      <h3>Favorite vacation spots</h3>
      <ul>
        <li>Tokyo, Japan</li>
        <li>Hong Kong, China</li>
        <li>Foshan, China</li>
 
      </ul>
    </div>
  )
}
 
ReactDom.render(<MyInfo/>,document.getElementById("root"));