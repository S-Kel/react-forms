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

import HostDetailsForm from "./hostDetailsForm";
import CreateCauseForm from "./yourCauseForm";
import CommunityDetailsForm from "./yourCommunityForm";
import ConfirmDetailsForm from "./Confirm";

// import '../../../App.css';
// import FormStateToRedux from "../FormStateToRedux";
// import RenderCount from "../common";
// import InputText from "../forms/InputText";
// import CreateCauseForm from "./UserCauseForm";
// import CommunityDetailsForm from "./communityDetailsForm";
// import ConfirmDetailsForm from "./Confirm";

// import FadeTransition from "../CSSTransitions/fadeTransition";
// import SlideTransition from "../CSSTransitions/slideTransition";

const CollectUserDetailsForm = (props) => {
 const { handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, page } = props;
 console.log("hasValidationErrors", invalid, pristine, submitting);
 return (
  <div>
   <CSSTransition key={'page=0'} in={true} appear timeout={4500} classNames="fade">
    <HostDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
   </CSSTransition>

   {console.log("Step: ", page)}
   {console.log("page===1: ", page === 1)}
   {console.log("page===2: ", page === 2)}
   {console.log("page===3: ", page === 3)}
   {/* {
         (page === 1 && <CreateCauseForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />)
      || (page === 2 && <CommunityDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />)
       || (page === 3 && <ConfirmDetailsForm form='userForm' handleSubmit={handleSubmit} values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />)
    } */}
   <TransitionGroup className='card-container'>
    {
     (page === 1 &&
      <CSSTransition
       key={page}
       in={page === 1}
       appear={page === 1}
       timeout={500}
       // mountOnEnter={true}
       // unmountOnExit={true}
       classNames="slide">
       {/* <div className='box-container'> */}
       <CreateCauseForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
       {/* </div> */}
      </CSSTransition>)
     || (page === 2 &&
      <CSSTransition
       key={page}
       in={page === 2}
       appear={page === 2}
       timeout={500}
       classNames="slide">
       {/* <div className='box-container'> */}
       <CommunityDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
       {/* </div> */}
      </CSSTransition>)
     || (page === 3 &&
      <CSSTransition
       key={page}
       in={page === 3}
       appear={page === 3}
       timeout={500}
       classNames="slide">
       {/* <div className='box-container'> */}
       <ConfirmDetailsForm form='userForm' handleSubmit={handleSubmit} values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
       {/* </div> */}
      </CSSTransition>)
     || null

    }
   </TransitionGroup>
   <FormSpy subscription={{ values: true }}>
    {({ values }) => <pre>
     <h3 style={{ color: 'red', margin: 20, textAlign: 'center' }}>For Debugging Purposes Only</h3>
     <hr />
     <p style={{ color: 'teal', padding: '15px 20px 20px 200px' }}>{JSON.stringify(values, undefined, 2)}</p>
    </pre>}
   </FormSpy>
  </div>
 );
}

export default CollectUserDetailsForm;


({ handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, page, ...rest }) => (
   // <form onSubmit={handleSubmit} >
   <Grid textAlign='center' >
      <Grid.Column width={10}>
         <Segment raised>
            <FormStateToRedux form="userForm" />
            <Header sub style={{ color: 'red' }} content='Your Details' />
            {/* <form onSubmit={showResults}>            */}
            <Form onSubmit={handleSubmit} >
               <Form.Field>
                  <Field
                     name='firstName'
                     placeholder='First Name'
                     component={InputText}
                     subscription={{ value: true, active: true, error: true, touched: true }}
                  />
               </Form.Field>
               <Form.Field>
                  <Field
                     name='lastName'
                     type='text'
                     placeholder='Last Name'
                     component={InputText}
                     subscription={{ value: true, active: true, error: true, touched: true }}
                  />
               </Form.Field>
               <Form.Field>
                  <Field
                     name='email'
                     type='email'
                     label='Email'
                     // style={{color: '#cb3538'}}
                     iconPosition='left'
                     component={EmailInputText}
                     placeholder='Email'
                     subscription={{ value: true, active: true, error: true, touched: true }}
                  >
                  </Field>
               </Form.Field>
               <Form.Field>
                  <Field
                     name='organization'
                     type='text'
                     placeholder='Your Organization'
                     component={InputText}
                     subscription={{ value: true, active: true, error: true, touched: true }}
                  />
               </Form.Field>
               <Form.Group >
                  <Form.Field width={12} >
                     <Field
                        name='social'
                        type='text'
                        placeholder='Your links to social media pages'
                        component={InputText}
                        subscription={{ value: true, active: true, error: true, touched: true }}
                     />
                  </Form.Field>
                  <Form.Field width={4}>
                     <Form.Button style={{ background: '#cb3538', color: '#fefefe' }} type="button" content='Add links' />
                  </Form.Field>
               </Form.Group>
               <button type="submit" > Submit </button>
               {!page && <Button type='button' label="Continue" color='red' disabled={!invalid || submitting || pristine} onClick={nextStep} />}
            </Form>
            {/* </form> */}
         </Segment>
      </Grid.Column>
   </Grid>
   // <FormStateFromRedux form="userForm" />
   // </form>
)}


export const InputText = (props) => {
   const { placeholder, type, input, meta: { name, active, error, touched } } = props;
   return (
      <div className={active ? "active" : ""}>
         {/* <Form.Input
     name={name}
     type={type}
     placeholder={placeholder}
     {...input}
    /> */}
         {/* {error && touched &&  */}
         {/* {console.log('Name:>>>>', name, placeholder)} */}
         <Popup
            key={placeholder}
            trigger={< Form.Input name={name} type={type} placeholder={placeholder} {...input} />}
            header={placeholder}
            content={error}
         />
         {/* } */}
         {/* {error && touched && <Label basic color='red' pointing>{error}</Label>} */}
         {/* {error && touched && <Label basic color='red' pointing>{error}</Label>}  */}
         {/* {error && touched && <span>{error}</span>} */}
      </div>
   );
}



export const RenderSocials = ({fields, meta:{touched, error}}) => {
  return (
    <div>         
    {/* <List> */}
      <Form.Group>     
        <Form.Field width={16}>   
          <List>{fields.map((field, index)=>
            <List.Item key={index}>
              <Form.Group> 
                <Form.Field width={15}>
                  <Field 
                    name={`${field}.name`} 
                    type= 'text'
                    component={InputText}
                    placeholder='Add Link of Your Social Media Page'
                  />
                </Form.Field>
                <Form.Field width={1}>
                  <Form.Button
                    icon='trash' 
                    circular
                    type='button'
                    onClick={() => fields.remove(index)}
                  />
                </Form.Field>                
              </Form.Group>              
              {/* {console.log('Fields Errors', field)}
              {console.log('Fields Errors', !field.social) } */}
            </List.Item>
            )}
          </List>
          {/* {console.log('Fields Errors', fields)}
          {console.log('Fields Errors', !fields.socials)}
          {fields.errors && error && <span>{fields.error.name}</span>} */}
        </Form.Field>
      </Form.Group>
    {/* </List> */}
      <Form.Group>        
        <Form.Field style={{ textAlign: 'right' }} width={13} >
          <label>Your links to your social media pages.</label>         
        </Form.Field>
        <Form.Field width={3}>
          <Form.Button 
              type="button" 
              icon='plus'  
              negative 
              content='Add Link' 
              onClick={() => fields.push()} />
          {touched && error && <span>{fields.error.name}</span>}

        </Form.Field>
      </Form.Group>   
    </div>
  );
}