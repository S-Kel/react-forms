import React, { Component } from "react";
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
import FormStateFromRedux from "../FormStateFromRedux";
import { connect } from "react-redux";
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
  const {
     values,
      handleSubmit, 
      pristine, 
      submitting 
  } = this.props.state;
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
          keyPeople } = values;
  return (
   <Grid>
    <Grid.Column>
     <Segment inverted style={{textAlign: 'justify'}}>
      <List divided inverted relaxed>
        {/* <form onSubmit={handleSubmit}> */}
          <List.Item>
            <List.Content>
              <List.Header>First Name</List.Header>
              {firstName}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Last Name</List.Header>
              {lastName}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Your Email Address</List.Header>
              {email}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Your Organization Name</List.Header>
              {organization}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Description of Event</List.Header>
              {description}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Do you have 6-10 Volunteers?</List.Header>
              {volunteers && <div>Yes</div>}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>When Would You like to hold Your Event</List.Header>
              {datePicker}
            </List.Content>
           </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Suburb</List.Header>
              {suburb}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Postal/Zip Code</List.Header>
              {zipCode}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Country</List.Header>
              {country}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Details of Your Local Council</List.Header>
              {council}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Key People Within Your Organization</List.Header>
              {keyPeople}
            </List.Content>
          </List.Item>
        {/* </form> */}
      </List>
      <br />
   <Button label="Confirm" primary style={styles.button} disabled={submitting || pristine} onClick={this.confirmSubmit} />
      <Button label="Back" primary={false} style={styles.button} onClick={this.back} />
    </Segment>
   </Grid.Column>
  </Grid>
    
  );
 }

}

const styles = {
 button: { margin: 15 }
}

const mapPropsToTypes = (state, ownProps) => ({
 state: getFormState(state, ownProps.form)
});
export default connect(mapPropsToTypes)(Confirm);

