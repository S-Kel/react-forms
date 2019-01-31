import React from 'react'
import { Form,TextArea, Label } from 'semantic-ui-react';
import RenderCount from "../common";

const InputTextArea = (props) => {
 const {
  width,
  rows,
  label,
  type,
  input,
  meta: { active, error, touched }
 } = props;
  return <div>
      <RenderCount />
      <div className={active ? "active" : ""}>
        <Form.TextArea 
            {...input} 
            label={label}
            type={type} 
            rows={rows}
            placeholder={label}             
            />
        {error && touched && <span>{error}</span>}
      </div>
    </div>;
};

export default InputTextArea;
































































































