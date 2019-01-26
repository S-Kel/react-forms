import React, { Component } from 'react';
import { Field, FormSpy } from "react-final-form";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
 Grid,
 Segment,
 Header,
 Form,
 Checkbox,
 Button,
 Dropdown,
 Label, Transition,
 Input
} from 'semantic-ui-react';

import '../../../App.css';
import FormStateToRedux from "../FormStateToRedux";
import RenderCount from "../common";
import InputText from "../forms/InputText";
import CreateCauseForm from "./UserCauseForm";
import CommunityDetailsForm from "./communityDetailsForm";
import ConfirmDetailsForm from "./Confirm";

const CollectUserDetailsForm = (props) => {
  const { handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, step } = props;
  console.log("hasValidationErrors", invalid, pristine, submitting);
 return <CSSTransition key={step} appear={true} timeout={1000} classNames="fade">
     <div>
       {/* <CSSTransition key={step} in={true} appear={true} timeout={1000} classNames="fade">
   <TransitionGroup className="card-container">     
      <CSSTransition key={`ABXC-AX${step}`} timeout={4500} classNames="slide"> */}
       <Grid>
       <Grid.Column as={Form} onSubmit={handleSubmit}>
           <Segment>
             {/* <form>               */}
             <FormStateToRedux form="userForm" />
             <div className="form-field">
               <Field name="firstName" label="First Name" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <div className="form-field">
               <Field name="lastName" label="Last Name" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <div className="form-field">
               <Field name="email" label="Email Addr" type="email" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             <div className="form-field">
               <Field name="organization" label="Organizati" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
             </div>
             {!step && <Button label="Continue" primary disabled={invalid || submitting || pristine} onClick={nextStep} />}
             {/* {!step && <button type="submit" disabled={invalid || submitting || pristine} onClick={nextStep}>
                 Next
               </button>} */}
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
       {/* </CSSTransition> 
    </TransitionGroup>
       </CSSTransition>  */}

       {console.log("Step: ", step)}
       {console.log("Step===1: ", step === 1)}
       {console.log("Step===2: ", step === 2)}
       {console.log("Step===3: ", step === 3)}
       {(step === 1 && <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
           <CreateCauseForm step={step} nextStep={nextStep} prevStep={prevStep} />
         </CSSTransition>) || (step === 2 && <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
             <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />
           </CSSTransition>) || (step === 3 && <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
             <ConfirmDetailsForm form="userForm" step={step} nextStep={nextStep} prevStep={prevStep} />
           </CSSTransition>) || null}
     </div>
   </CSSTransition>; 
}

export default CollectUserDetailsForm;
