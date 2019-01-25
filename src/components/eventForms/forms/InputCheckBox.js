import React from 'react';
import {Checkbox} from 'semantic-ui-react';

const InputCheckBox = (props) => {
 const { input: { value, onChange, ...input }, name, label, type, meta: { active, error, touched }} = props;
 return <div className={active ? "active" : ""}>
     <Checkbox         
        label={<label>{label}</label>} 
        type={type}
        onChange={(e, data) => onChange(data.checked)}    
        {...input}    
     />
     {error && touched && <span>{error}</span>}
   </div>;
}

export default InputCheckBox;

