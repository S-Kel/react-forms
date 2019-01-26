import React from 'react'
import { Form, Label, Select, Dropdown } from 'semantic-ui-react'
import RenderCount from "../common";

const SelectInput = ({ active, input, type, label, multiple, options, meta: { touched, error } }) => {
 return <div>
     <RenderCount />
     <div className={active ? "active" : ""}>
        <Form.Dropdown          
          {...input} 
          label ={label}
          value={input.value || null} 
          onChange={(e, data) => input.onChange(data.value)} 
          search
          selection
          placeholder={label}
          options={options}
        />
         {error && touched && <span>{error}</span>}
     </div>

   

   </div>;
}

export default SelectInput
