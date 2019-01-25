import React from 'react'
import RenderCount from "../common";

const InputText = ({ label, type, input, meta: { active, error, touched } }) => {
 return (
 <div>
    <RenderCount />
    <div className={active ? "active" : ""}>
       <label>{label} </label>
    <input {...input} type={type} placeholder={label}/>
       {error && touched && <span>{error}</span>}
    </div>
 </div>)
}

export default InputText;