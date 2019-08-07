import React from 'react';
import 'components/Appointment/styles.scss';

export default function Empty(props) {
  return (
    <main className="appointment__add">
    <button onClick={props.onAdd}><img className="appointment__add=button" src="images/add.png" alt="addimage"></img></button>
    </main>
  );
}