import { UPDATE_FORM_STATE } from '../actions/types';

// Action Creators
export const updateFormState = (form, state) => ({
   type: UPDATE_FORM_STATE,
   form,
   payload: state
});
