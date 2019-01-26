import React from 'react'
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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Field, FormSpy } from "react-final-form";

import "../../../App.css";
import FormStateToRedux from "../FormStateToRedux";
import RenderCount from "../common";
import InputText from "./InputText";
import SelectInput from "./SelectInput";
import InputCheckBox from "./InputCheckBox";
import { countryOptions} from '../countryOptions'


const countryOption = [
  { key: "af", value: "Afghanistan", flag: "af", text: "Afghanistan" }
];
const UserCauseForm = (props) => {
  const { handleSubmit, pristine, submitting, nextStep, prevStep, step } = props;
  console.log('From User Details form STEP:/......', step)

 return <TransitionGroup className="card-container">
     <CSSTransition key={`ABXC-AX${step}`} timeout={4500} classNames="slide">
       <Grid>
         <Grid.Column as={Form}>
           <Segment>
             <Header sub color="teal" content="Your Community" />
             {/* <form onSubmit={handleSubmit}> */}
             <FormStateToRedux form="communityForm" />
             <div className="form-field">
               <Field name="suburb" label="Enter Suburb" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <div className="form-field">
               <Field name="zipCode" label="Zip/Postal Code" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <div className="form-field">
               <Field name="country" label="Select your Country" type="dropdown" options={countryOptions} component={SelectInput} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>

             <Header sub color="teal" content="Your Network" />
             <div className="form-field">
               {/* <Form.Field> */}
               <Field name="localCouncil" label="Do You have a relationship with your local Counci?" type="checkbox" component={InputCheckBox} subscription={{ value: true, active: true, error: true, touched: true }} />
               {/* </Form.Field> */}
             </div>
             <div className="form-field">
               <Field name="council" label="Please enter the Council details" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <div className="form-field">
               <Field name="keyPeople" label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum non,
                        delectus et aperiam provident numquam hic nihil id voluptatum eius in impedit blanditiis. Molestiae quas suscipit illum minima voluptatum! ..." type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <Button label="Continue" primary disabled={submitting || pristine} onClick={nextStep} />
             <Button label="Back" primary={false}disabled={submitting || pristine} onClick={prevStep} />
             
             {/* <button type="submit" disabled={submitting || pristine} onClick={nextStep}>
               Continue
             </button>
             <button type="submit" disabled={submitting || pristine} onClick={prevStep}>
               Back
             </button> */}
             {/* <FormSpy subscription={{ values: true }}>
                {({ values }) => <pre>
                    <RenderCount />
                    {JSON.stringify(values, undefined, 2)}
                  </pre>}
              </FormSpy> */}
             {/* </form> */}
           </Segment>
         </Grid.Column>
       </Grid>
     </CSSTransition>
   </TransitionGroup>;
}

export default UserCauseForm;
