export default values => {
 const errors = {}
 if (!values.firstName) {
  errors.firstName = 'Required'
 }
 if (!values.lastName) {
  errors.lastName = 'Required'
 }
 if (!values.email) {
  errors.email = 'Required'
 }
 if (!values.organization) {
   errors.organization = "Required";
 }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.suburb) {
    errors.suburb = "Required";
  }
  if (!values.zipCode) {
    errors.zipCode = "Required";
  }
  if (!values.council) {
    errors.council = "Required";
  }
 // if (!values.age) {
 //  errors.age = 'Required'
 // } 
 // else if (isNaN(values.age)) {
 //  errors.age = 'Must be a number'
 // }
 return errors
}
