import React from "react";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import { useVisualMode } from "hooks/useVisualMode";
import Form from "components/Form";
import Status from 'components/Appointment/Status';
import Error from 'components/Appointment/Error';
import Confirm from 'components/Appointment/Confirm';

const EMPTY = "EMPTY";
const SHOW = "SHOW";


export default function Appointment(props) {

  function onSave(name, interviewer, id) {
      const interview = {
        student: name,
        interviewer
      };
      console.log(`interview`, interview);
    mode.transition('SAVING');
    props.bookInterview(id, interview)
    .then(() => {mode.transition('SHOW')})
    .catch(() => {mode.transition('ERROR_SAVING')});
  }
 
  const mode = useVisualMode(props.interview ? SHOW: EMPTY);

  const backToShow = () => {
    mode.transition('SHOW');
  }

  const onAdd = () => {
    console.log("onAdd");
    mode.transition('CREATE');
  }

  const onCancel = () => {
    mode.back();
  }

  const onDelete = function () {
    mode.transition('CONFIRM')
  }

  const toDelete = function () {
    mode.transition("SAVING")
    props.cancelInterview(props.id)
      .then(() => {
      mode.transition("EMPTY")
    })
      .catch(error => mode.transition('ERROR_DELETE', true));
  }

  const onEdit = function () {
    mode.transition("CREATE")
    // editInterview
  }

  
  return (
    <React.Fragment>
      <Header time={props.time} />

      {mode.mode === "EMPTY" && <Empty onAdd={onAdd} />}

      {mode.mode === "CREATE" && <Form

        name={""}
        interviewers={props.interviewers}
        value={0}
        id={props.id}
        onSave={onSave}
        onCancel={onCancel}

      />}
      {mode.mode === "SAVING" && (<Status message={'saving'}/>)}

      {mode.mode === "SHOW" && (
        < Show
          onEdit={onEdit}
          onDelete={onDelete}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          toDelete={toDelete}
        />
      )}

      {mode.mode === 'CONFIRM' && (
        <Confirm 
          message={"Are you sure you would like to delete?"}
          toDelete={toDelete}
          toCancelDelete={() => {
            mode.transition("SHOW")
          }}
        />
      )}

      {mode.mode === 'ERROR_DELETE' && (
        <Error 
          message={"Could not delete appointment"}
          onClose={mode.back}
        />
      )}

      {mode.mode === 'ERROR_SAVING' && (
        <Error 
          message={"Could not save appointment"}
          onClose={mode.back}
          backToShow={backToShow}
        />
      )}


    </React.Fragment>
  );
}
