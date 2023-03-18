import { useState } from "react";
import React, {useState,useEffect} from "react";
function EventAdd() {
    const [title, setTitle] = React.useState("");
    const [discription,setDescription] = React.useState("");
    const [data, setData] = React.useState(null);
    const [image, setImage ]= React.useState("");

useEffect
const handleChange =(e)=>{(setTitle (e.target,value));
}
const handleChangeDesc =(e)=>{(setDescription (e.target,value));
}

   <div className="forms">
<input type="text">Enter Title</input>
<input type="text">Enter Discription</input>
<input type="text">Enter Title</input>
   </div> 
}
export default EventAdd;