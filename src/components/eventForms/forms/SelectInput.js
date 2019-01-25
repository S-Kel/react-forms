import React from 'react'
import { Drop, Form, Label, Select, Dropdown } from 'semantic-ui-react'
import RenderCount from "../common";

const SelectInput = ({ active, input, type, label, multiple, options, meta: { touched, error } }) => {
 return <div>
     <RenderCount />
     <div className={active ? "active" : ""}>
         <Label>{label}</Label>
         {/* <Select
              {...input} 
              value={input.value || null} 
              placeholder={label} 
              type={type} 
              onChange={(e, data) => input.onChange(data.value)} 
              options={options} /> */}
        <Dropdown          
          {...input} 
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
