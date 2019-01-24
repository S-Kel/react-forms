import React from 'react'
import { Form, Field, FormSpy } from "react-final-form";
// import { Field } from "react-final-form-html5-validation";

import { showResults } from '../App';
import RenderCount from "./common";
const required = value => (value ? undefined : 'Required');
const InputText = ({ input, meta, placeholder }) => {
 return (
  <div className={meta.active ? "active" : ""}>
   <label>First Name</label>
   <input {...input} placeholder={placeholder} />
   {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
 )
}


const ReactFinalForm = () => (
 <div className="form-container">
  <h1><span role='img'>🏁</span>React Final Form
    </h1>
  <Form onSubmit={showResults}>
   {({ handleSubmit, values, prestine, submitting }) => (
    <form
     onSubmit={handleSubmit}
     subscription={{
      submitting: true
     }}
    >
       <div className="form-field">
      <RenderCount />
      <Field
       name="firstName"
       component="input"
       placeholder="First Name"
       validate={required}
       subscription={{
        value: true,
        active: true,
        error: true,
        touched: true
       }}
      >
       {({ input, meta, placeholder }) => (
        <div className={meta.active ? "active" : ""}>
         <label>First Name</label>
         <input {...input} placeholder={placeholder} />
         {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
       )}
      </Field>
     </div>
     <div className="form-field">
      <RenderCount />
      <Field
       name="lastName"
       component="input"
       placeholder="Last Name"
       validate={required}
       subscription={{
        value: true,
        active: true,
        error: true,
        touched: true
       }}
      >
       {({ input, meta, placeholder }) => (
        <div className={meta.active ? "active" : ""}>
         <label>Last Name</label>
         <input {...input} placeholder={placeholder} />
         {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
       )}
      </Field>
     </div>
     <div className="form-field">
      <RenderCount />
      <Field
       name="email"
       component="input"
       placeholder="Email Address"
       validate={required}
       subscription={{
        value: true,
        active: true,
        error: true,
        touched: true
       }}
      >
       {({ input, meta, placeholder }) => (
        <div className={meta.active ? "active" : ""}>
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
     <FormSpy subscription={{ values: true }}>
      {({ values }) => (
       <pre>
        <RenderCount />
        {JSON.stringify(values, undefined, 2)}
       </pre>
      )}
     </FormSpy>
    </form>
   )}
  </Form>
  <h3>Final-form @finalformjs</h3>
 </div>
);

export default ReactFinalForm;
