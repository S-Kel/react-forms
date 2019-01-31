import React from 'react';
import {
 Grid,
 Segment,
 Header,
 Form,
 Checkbox,
 Button,
 Dropdown,
 Label,
 Input
} from 'semantic-ui-react';

const DatePicker = (props) => {
 const {icon, input, iconPosition, label, type, meta: { active, error, touched }} = props;
    return (
     <div className={active ? "active" : ""}>      
      <Form.Input 
        {...input} 
        type={type} 
        iconPosition={iconPosition} 
        icon={icon} 
        placeholder={label} />
      { error && touched && <span>{error}</span> }
     </div >
    );
}

export default DatePicker;

