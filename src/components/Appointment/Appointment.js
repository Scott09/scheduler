import React from "react";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import { useVisualMode } from "hooks/useVisualMode";
import Form from "components/Form";
import Status from 'components/Appointment/Status';

const EMPTY = "EMPTY";
const SHOW = "SHOW";



export default function Appointment(props) {
  function onSave(name, interviewer, id) {

    const interview = {
      student: name,
      interviewer
    };
    mode.transition('SAVING');
    props.bookInterview(id, interview).then(() => {mode.transition('SHOW')});
  }
 
  const mode = useVisualMode(props.interview ? SHOW: EMPTY);

  const onAdd = () => {
    console.log("onAdd");
    mode.transition('CREATE');
  }

  const onCancel = () => {
    mode.back();
  }

  console.log(props.interview);
  console.log(mode);

  
  return (
    <React.Fragment>
      <Header time={props.time} />

      {mode.mode === "EMPTY" && <Empty onAdd={onAdd} />}

      {mode.mode === "CREATE" && <Form
        name={""}
        interviewers={props.interviewers}
        value={0}
        onSave={onSave}
        onCancel={onCancel}
      />}
      {mode.mode === "SAVING" && (<Status message={'saving'}/>)}
      {mode.mode === "SHOW" && (
        < Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
    </React.Fragment>
  );
}
