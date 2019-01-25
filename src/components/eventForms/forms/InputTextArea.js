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
      <Label>{label}</Label>
      <div className={active ? "active" : ""}>
        <TextArea {...input} placeholder={label} type={type} style={{padding: '15px',width: '392px', margin: '10px auto'}} rows={rows} />
        {error && touched && <span>{error}</span>}
      </div>
    </div>;
};

export default InputTextArea;
































































































