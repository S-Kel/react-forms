import React from 'react'
import { Form, Label, Select } from 'semantic-ui-react'
import RenderCount from "../common";

const SelectInput = ({ active, input, type, label, multiple, options, meta: { touched, error } }) => {
 return <div>
     <RenderCount />
     <div className={active ? "active" : ""}>
       <Form.Field error={touched && !!error}>
         <label>{label}</label>
         <Select {...input} value={input.value || null} placeholder={label} type={type} onChange={(e, data) => input.onChange(data.value)} options={options} />
         {error && touched && <span>{error}</span>}
       </Form.Field>
     </div>
   </div>;
}

export default SelectInput
