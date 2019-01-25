import React from 'react'
import RenderCount from "../common";
import { Label,Input} from 'semantic-ui-react';

const InputText = (props) => {
   const { label, type, input, meta: { active, error, touched } } = props;
   return (
      <div style={{margin: '10px'}}>
         <RenderCount />
         <div className={active ? "active" : ""}>
               <Label>{label} </Label>
               <Input {...input} type={type} placeholder={label}/>
               {error && touched && <span>{error}</span>}
         </div>
      </div>
 );
}

export default InputText;