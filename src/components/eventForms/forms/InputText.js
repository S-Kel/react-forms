import React from 'react'
import RenderCount from "../common";
import { Form, Label,Input} from 'semantic-ui-react';

const InputText = (props) => {
   const { label, type, input, meta: { active, error, touched } } = props;
   return (
      <div style={{margin: '10px'}}>
         <RenderCount />
         <div className={active ? "active" : ""}>
            <Form.Input 
               label={label}
               type={type}
               placeholder={label}
               {...input} 
            />
            {error && touched && <span>{error}</span>}
         </div>
      </div>
 );
}

export default InputText;