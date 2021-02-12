import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: event.target.pints.value, id: v4()});
  }

  return(
    <>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Submit"/>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;