import React from 'react'
import { Form, Field } from "react-final-form";

import { showResults } from '../../App';

const required = value => (value ? undefined : 'Required');

const ReactFinalForm = () => (
 <div className="form-container">
  <h1>React Final Form</h1>
  <Form onSubmit={showResults}>
   {({ handleSubmit, values, prestine, submitting }) => (
    <form onSubmit={handleSubmit}>
     <div>
      <label>First Name</label>
      <Field
       name="firstName"
       component="input"
       placeholder="First Name"
       validate={required}
      />
     </div>
     <div>
      <label>Last Name</label>
      <Field
       name="lastName"
       component="input"
       placeholder="Last Name"
       validate={required}
      />
     </div>
     <div>
      <label>Email Addr</label>
      <Field
       name="email"
       component="input"
       placeholder="Email"
       validate={required}
      />
     </div>
     <button type="submit" disabled={submitting}>
      Submit
          </button>
     <pre>{JSON.stringify(values, undefined, 2)}</pre>
     <div className='field-state'>
      <Field
       name="firstName"
       component="input"
       placeholder="First Name"
       validate={required}
      >
       {/* {fieldState => (
               <pre> {JSON.stringify(fieldState, undefined, 2)}</pre>
            )}              */}

       {({ input, meta, placeholder }) => (
        <pre>
         <div>
          <label>First Name</label>
          <input {...input} placeholder={placeholder} />
         </div>
        </pre>
       )}
      </Field>
     </div>
    </form>
   )}
  </Form>
  <h3>Final-form @finalformjs</h3>
 </div>
);

export default ReactFinalForm;





{
     console.log('Form Redux State', state)
     // const { values :{firstName, lastName, email, organization, description,volunteers,suburb,zipCode,country, council, keyPeople}} = state;
     return (
          <Segment raised>
               <List divided inverted relaxed>
                    <pre>{JSON.stringify(state, 0, 2)}</pre>
                    {/* <List.Item>
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
       {volunteers && (<div>Yes</div>)}
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
     </List.Item>  */}
               </List>
               <br />
          </Segment>
     );
}

{/* <SlideTransition key={`ABXC-AX${1}`} in={step === 1} appear={true} duration={5000} classNames='slide'>
        <div className='box-container'>
          <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />
        </div>
      </SlideTransition>
      <SlideTransition key={`ABXC-AX${2}`} in={step === 2} duration={5000} classNames='slide'>
        <div className='box-container'>
            <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />
        </div>
       </SlideTransition>
      <SlideTransition key={`ABXC-AX${3}`} in={step === 3} duration={5000} classNames='slide'>
          <div className='card-container'>
            <ConfirmDetailsForm form="userForm" step={step} nextStep={nextStep} prevStep={prevStep} />
        </div>
       </SlideTransition> */}

{/* <CSSTransition key={`ABXC-AX${step}`} in={true} appear={true} exit={true} timeout={500} classNames="slide">
      {
           (step === 1 && <CreateCauseForm step={step} nextStep={nextStep} prevStep={prevStep} />)
        || (step === 2 && <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />)
        || (step === 3 && <ConfirmDetailsForm form="userForm" step={step} nextStep={nextStep} prevStep={prevStep} />)
        || <div />
      }
      </CSSTransition> */}
      
<SlideTransition isOpen={step === 1} duration={5000} classNames="slide">
     <div className='box-container'>
          <CreateCauseForm step={step} nextStep={nextStep} prevStep={prevStep} />
     </div>
</SlideTransition>
     <SlideTransition isOpen={step === 2} duration={5000}>
          <div className='box-container'>
               <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />
          </div>
     </SlideTransition>
     <SlideTransition isOpen={step === 3} duration={5000}>
          <div className='card-container'>
               <ConfirmDetailsForm form="userForm" step={step} nextStep={nextStep} prevStep={prevStep} />
          </div>
     </SlideTransition>