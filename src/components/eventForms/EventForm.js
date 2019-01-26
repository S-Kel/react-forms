import React, { Component } from 'react';
import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from "final-form-focus";

import { showResults } from '../../App';
import RenderCount from "./common";
import validate from "./validates";
// import FormStateToRedux from "./FormStateToRedux";
import FormStateFromRedux from "./FormStateFromRedux";
import CollectUserDetailsForm from "./forms/UserDetailsForm";

// import CreateCauseForm from "./forms/UserCauseForm";


const focusOnError = createDecorator();
export class EventForm extends Component {
  state ={
    step: 0
  }
  nextStep =()=>{
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 || 0 });
  }
  render() {
    console.log('Checking Props inside Form', this.props);
    return (
      <div className="form-container">
        <h1>🏁 React Final Form</h1>
        <h2>Redux Example</h2>
        <Form 
              onSubmit={showResults} 
              decorators={[focusOnError]} 
              validate={validate} 
              initialValues={{}} 
              subscription={{ submitting: true, pristine: true }} 
              step={this.state.step}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              render={CollectUserDetailsForm}
        />
        <h3>Final-form @finalformjs</h3>
        <FormStateFromRedux form="userForm" />
      </div>
    );    
  }
}

export default EventForm
