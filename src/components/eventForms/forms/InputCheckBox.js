import React from 'react';
import {Form,Checkbox} from 'semantic-ui-react';

const InputCheckBox = (props) => {
 const { input: { value, onChange, ...input }, label, type, meta: { active, error, touched }} = props;
 return (
   <div className={active ? "active" : ""}>
     <Form.Checkbox 
        {...input}          
        label={label} 
        type={type}
        onChange={(e, data) => onChange(data.checked)}           
     />
     {error && touched && <span>{error}</span>}
   </div>);
}

export default InputCheckBox;

