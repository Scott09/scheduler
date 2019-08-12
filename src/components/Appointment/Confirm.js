import React from 'react';
import Button from 'components/Button';
import 'components/Appointment/styles.scss';

export default function Confirm(props) {
  return (
    <main class="appointment__card appointment__card--confirm">
    <h1 class="text--semi-bold">Delete the appointment?</h1>
    <section class="appointment__actions">
      <Button danger onClick={props.toCancelDelete} >Cancel</Button>
      <Button danger onClick={props.toDelete} >Confirm</Button>
    </section>
  </main>
  );
}