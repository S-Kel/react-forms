import React from 'react'
import { Field, FormSpy } from "react-final-form";
import FormStateToRedux from "../FormStateToRedux";
import RenderCount from "../common";
import InputText from "../forms/InputText";
import InputTextArea from "./InputTextArea";
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
} from "semantic-ui-react";
import DatePicker from './DatePicker';
import InputCheckBox from "./InputCheckBox";

const UserCauseForm = (props) => {
 const { handleSubmit, pristine, submitting } = props;
 console.log('From User Details form./......', props.children)
 return( 
   <Grid>
     <Grid.Column>
       <Segment>
        <Header sub color="teal" content="Your Cause" />
        <form onSubmit={handleSubmit}>
          <FormStateToRedux form="causeForm" />
          <div className="form-field">
             <Field name="description" label="Tell us about your event" type="text" rows={10} columns={10} autoHeight component={InputTextArea} subscription={{ value: true, active: true, error: true, touched: true }} />
          </div>
          <div className="form-field"> 
             <Form.Field>  
            <Field 
                  name="volunteers" 
                  label="Do you have 6-10 Volunteers?" 
                  type="checkbox"
                  component= {InputCheckBox} 
                  subscription={{ value: true, active: true, error: true, touched: true }} />
               </Form.Field>  
          </div>
          
            <div className="form-field">
              <Form.Field>     
               <Label
                 style={{ background: "#fefafa", padding: "15px 10px" }}>
                 Select Expected time or season
                </Label>           
                <Field 
                  name='datePicker'
                  type="date"
                  iconPosition="left"
                  icon="calendar alternate outline"
                  placeholder="Select your Target"
                  component={DatePicker}
                  subscription={{ value: true, active: true, error: true, touched: true }} />
                </Form.Field>
            </div>

          <div className="form-field">
            <Field name="organization" label="Organizati" type="text" component={InputText} subscription={{ value: true, active: true, error: true, touched: true }} />
          </div>
          <button type="submit" disabled={submitting || pristine}>
            Continue
          </button>
          <button type="submit" disabled={submitting || pristine}>
            Back
          </button>
          <FormSpy subscription={{ values: true }}>
            {({ values }) => <pre>
                <RenderCount />
                {JSON.stringify(values, undefined, 2)}
              </pre>}
          </FormSpy>
        </form>
      </Segment>
    </Grid.Column>
   </Grid>
  );
}

export default UserCauseForm;
