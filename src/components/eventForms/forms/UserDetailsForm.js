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
 Label, 
 Input
} from 'semantic-ui-react';

import '../../../App.css';
import FormStateToRedux from "../FormStateToRedux";
import RenderCount from "../common";
import InputText from "../forms/InputText";
import CreateCauseForm from "./UserCauseForm";
import CommunityDetailsForm from "./communityDetailsForm";
import ConfirmDetailsForm from "./Confirm";

import FadeTransition from "../CSSTransitions/fadeTransition";
import SlideTransition from "../CSSTransitions/slideTransition";

const CollectUserDetailsForm = (props) => {
  const { handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, step } = props;
  console.log("hasValidationErrors", invalid, pristine, submitting);
  return (    
      <div>
      <CSSTransition key={`ABXC-AX0`} in={true} appear timeout={4500} classNames="fade">
        <Grid style={{marginBottom: 2}}>
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
              {/* </form> */}
            </Segment>
          </Grid.Column>
        </Grid>
      </CSSTransition>
        {console.log("Step: ", step)}
        {console.log("Step===1: ", step === 1)}
        {console.log("Step===2: ", step === 2)}
        {console.log("Step===3: ", step === 3)}
      <TransitionGroup className='card-container'>
      {
        (step === 1 && 
          <CSSTransition 
              key={step} 
              in={step === 1} 
              appear={step === 1} 
              timeout={500} 
              // mountOnEnter={true}
              // unmountOnExit={true}
              classNames="slide">
              <div className='box-container'>
                <CreateCauseForm step={step} nextStep={nextStep} prevStep={prevStep} />
              </div>
          </CSSTransition>)
      || (step === 2 && 
          <CSSTransition 
              key={step} 
              in={step === 2} 
              appear={step === 2} 
              timeout={500} 
              classNames="slide">
            <div className='box-container'>
              <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />
            </div>
          </CSSTransition>)
      || (step === 3 && 
        <CSSTransition 
            key={step} 
            in={step === 3} 
            appear={step === 3} 
            timeout={500}  
            classNames="slide">
            <div className='box-container'>
              <ConfirmDetailsForm form="userForm" step={step} nextStep={nextStep} prevStep={prevStep} />
            </div>
          </CSSTransition>)
          || <div className='box-container' />
      
      }
      </TransitionGroup>     
  </div>)
    {/* </CSSTransition>; */}
}

export default CollectUserDetailsForm;
