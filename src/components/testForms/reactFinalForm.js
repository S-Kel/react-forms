import React from 'react'
import { Form, Field, FormSpy } from "react-final-form";
// import { Field } from "react-final-form-html5-validation";
import createDecorator from "final-form-focus";

import {showResults} from '../../App';
import RenderCount from "../eventForms/common";
import validate from "../eventForms/validates";
// import Styles from "./styles";

const required = value => (value ? undefined : 'Required');

const InputText = ({ label, type, input, meta: { active, error, touched } }) =>{
 return <div>
     <RenderCount />
     <div className={active ? "active" : ""}>
       <label>{label} </label>
       <input {...input} type={type} placeholder={label} />
       {error && touched && <span>{error}</span>}
     </div>
   </div>;
}

const focusOnError = createDecorator();
const ReactFinalForm = () => (
  <div className="form-container">
    <h1>🏁React Final Form
    </h1>
    <Form 
       onSubmit={showResults}
       decorators={[focusOnError]}
       validate={validate}
       subscription={{
        submitted: true
      }}
      render = {({ handleSubmit, values, prestine, submitting }) => (
        <form onSubmit={handleSubmit}>
         <div className="form-field">            
            <Field
              name="firstName"              
              label="First Name"
              type='text'
              component={InputText}
              subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
            />            
         </div>
         <div className="form-field">
           <Field
             name="lastName"
             label="Last Name"
             type='text'
             component={InputText}
             subscription={{
             value: true,
             active: true,
             error: true,
             touched: true
           }}
           />
        </div>
        <div className="form-field">
          <Field
            name="email"
            label="Email Addr"
            type='email'
            component={InputText}
            subscription={{
            value: true,
            active: true,
            error: true,
            touched: true
          }}
          />            
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
    />
    <h3>Final-form @finalformjs</h3>
  </div>
);

export default ReactFinalForm;
