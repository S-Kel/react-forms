import React from 'react'
import { Form, Field } from "react-final-form";

import { showResults } from '../App';

const required = value => (value ? undefined : 'Required');

const ReactFinalForm = () => (
 <div className="form-container">
  <h1>React Final Form</h1>
  <Form onSubmit={showResults}>
   {({ handleSubmit, values, prestine, submitting }) => (
    <form onSubmit={handleSubmit}>
     <div>
      <label>First Name</label>
      <Field
       name="firstName"
       component="input"
       placeholder="First Name"
       validate={required}
      />
     </div>
     <div>
      <label>Last Name</label>
      <Field
       name="lastName"
       component="input"
       placeholder="Last Name"
       validate={required}
      />
     </div>
     <div>
      <label>Email Addr</label>
      <Field
       name="email"
       component="input"
       placeholder="Email"
       validate={required}
      />
     </div>
     <button type="submit" disabled={submitting}>
      Submit
          </button>
     <pre>{JSON.stringify(values, undefined, 2)}</pre>
     <div className='field-state'>
      <Field
       name="firstName"
       component="input"
       placeholder="First Name"
       validate={required}
      >
       {/* {fieldState => (
               <pre> {JSON.stringify(fieldState, undefined, 2)}</pre>
            )}              */}

       {({ input, meta, placeholder }) => (
        <pre>
         <div>
          <label>First Name</label>
          <input {...input} placeholder={placeholder} />
         </div>
        </pre>
       )}
      </Field>
     </div>
    </form>
   )}
  </Form>
  <h3>Final-form @finalformjs</h3>
 </div>
);

export default ReactFinalForm;
