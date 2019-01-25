import React from 'react'
import { Form, Field } from "react-final-form";

import { showResults } from '../../App';

const required = value => (value ? undefined : 'Required');

const ReactFinalForm = () => (
 <div className="form-container">
  <h1>React Final Form</h1>
  <Form onSubmit={showResults}>
   {({ handleSubmit, values, prestine, submitting }) => (
    <form onSubmit={handleSubmit}>
     <div>
      <Field name="firstName" component="input" placeholder="First Name" validate={required}>
       {({ input, meta, placeholder }) => (
        <div className={meta.active ? 'active' : ''}>
         <label>First Name</label>
         <input {...input} placeholder={placeholder} />
         {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
       )}
      </Field>
     </div>
     <div>
      <Field name="lastName" component="input" placeholder="Last Name" validate={required}>
       {({ input, meta, placeholder }) => (
        <div className={meta.active ? 'active' : ''}>
         <label>Last Name</label>
         <input {...input} placeholder={placeholder} />
         {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
       )}
      </Field>
     </div>
     <div>
      <Field name="email" component="input" placeholder="Email Address" validate={required}>
       {({ input, meta, placeholder }) => (
        <div className={meta.active ? 'active' : ''}>
         <label>Email Addr</label>
         <input {...input} placeholder={placeholder} />
         {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
       )}
      </Field>
     </div>
     <button type="submit" disabled={submitting}>
      Submit
          </button>
     <pre>{JSON.stringify(values, undefined, 2)}</pre>
    </form>
   )}
  </Form>
  <h3>Final-form @finalformjs</h3>
 </div>
);

export default ReactFinalForm;
