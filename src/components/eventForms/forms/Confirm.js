import React, { Component } from "react";
import { connect } from "react-redux";
import {
 Grid,
 List,
 Segment,
 Header,
 Form,
 Checkbox,
 Button,
 Dropdown,
 Label,
 Input
} from 'semantic-ui-react';
import { Field, FormSpy } from "react-final-form";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../../../App.css";
import FormStateFromRedux from "../FormStateFromRedux";

import { getFormState } from "../../../store/reducers/finalFormReducer";
import { showResults } from "../../../App";

class Confirm extends Component {
 confirmSubmit= e => {
  e.preventDefault();
  showResults(this.props.state.values);
  // Process your form i.e. send data to API
 }

 // Go back to previous page
 back = e => {
  e.preventDefault();
  this.props.prevStep();
 }

 render() {
  console.log('Hellow from Confirm Form');
  // console.log(JSON.stringify(this.props.state, 0, 2));
  const {values} = this.props;
  const {      
    //  values,
      handleSubmit, 
      pristine, 
      submitting 
  } = this.props.state;
   const { step} = this.props;
   console.log('From User Details form STEP:/......', step)

  if (!values) return null;
  const { firstName, 
          lastName, 
          email, 
          organization, 
          description, 
          volunteers,
          datePicker, 
          suburb, 
          zipCode, 
          country, 
          council,
          localCouncil, 
          keyPeople } = values;
  return (
        <Grid>
          <Grid.Column>
            <form onSubmit={handleSubmit}>
              <Segment inverted style={{ textAlign: "justify" }}>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        First Name
                      </List.Header>
                      {firstName}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Last Name
                      </List.Header>
                      {lastName}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Your Email Address
                      </List.Header>
                      {email}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Your Organization Name
                      </List.Header>
                      {organization}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Description of Event
                      </List.Header>
                      {description}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Do you have 6-10 Volunteers?
                      </List.Header>
                      {volunteers && <div>Yes</div>}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        When Would You like to hold Your Event?
                      </List.Header>
                      {datePicker}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Suburb
                      </List.Header>
                      {suburb}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Postal/Zip Code
                      </List.Header>
                      {zipCode}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Country
                      </List.Header>
                      {country}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Do You have a relationship with your local Counci?
                      </List.Header>
                      {localCouncil && <div>Yes</div>}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Details of Your Local Council
                      </List.Header>
                      {council}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header style={{ color: "teal" }}>
                        Key People Within Your Organization
                      </List.Header>
                      {keyPeople}
                    </List.Content>
                  </List.Item>
                </List>
                <br />
                <Button label="Confirm" primary style={styles.button} onClick={this.confirmSubmit} />
                <Button label="Back" primary={false} style={styles.button} onClick={this.back} />
              </Segment>
            </form>
          </Grid.Column>
        </Grid>
    )
 }
// key={`ABXC-AX${step}`}
}

// 

const styles = {
 button: { margin: 15 }
}

const mapPropsToTypes = (state, ownProps) => ({
 state: getFormState(state, ownProps.form)
});
export default connect(mapPropsToTypes)(Confirm);

