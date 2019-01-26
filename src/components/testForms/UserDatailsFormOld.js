import React from 'react'
import { Field, FormSpy } from "react-final-form";
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
import FormStateToRedux from "../FormStateToRedux";
import RenderCount from "../common";
import InputText from "../forms/InputText";
import CreateCauseForm from "./UserCauseForm";
import CommunityDetailsForm from "./communityDetailsForm";
import ConfirmDetailsForm from "./Confirm";

const UserDetailsForm = (props) => {
 const { handleSubmit, values, pristine, submitting } = props;
 return (
  <div>
   <Grid>
    <Grid.Column>
     <Segment>
      <form onSubmit={handleSubmit}>
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
       <button type="submit" disabled={submitting || pristine}>
        Next
       </button>
       <FormSpy subscription={{ values: true }}>
        {({ values }) => <pre>
         <RenderCount />
         {JSON.stringify(values, undefined, 2)}
        </pre>}
       </FormSpy>
      </form>
     </Segment>
    </Grid.Column >
   </Grid >
   <CreateCauseForm />
   <CommunityDetailsForm />
   <ConfirmDetailsForm form='userForm' />
  </div>
 );
}

export default UserDetailsForm;
