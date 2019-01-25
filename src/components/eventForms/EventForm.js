import React, { Component } from 'react';
import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from "final-form-focus";

import { showResults } from '../../App';
import RenderCount from "./common";
import validate from "./validates";
// import FormStateToRedux from "./FormStateToRedux";
import FormStateFromRedux from "./FormStateFromRedux";
import CreateUserForm from './forms/UserDetailsForm';
// import CreateCauseForm from "./forms/UserCauseForm";


const focusOnError = createDecorator();
export class EventForm extends Component {
  render() {
    return <div className="form-container">
        <h1>🏁 React Final Form</h1>
        <h2>Redux Example</h2>

        <Form onSubmit={showResults} decorators={[focusOnError]} validate={validate} initialValues={{}} subscription={{ submitting: true, pristine: true }}
         render={CreateUserForm}
        />
        <h3>Final-form @finalformjs</h3>
        <FormStateFromRedux form="userForm" />
      </div>;    
  }
}

export default EventForm
