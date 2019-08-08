import React , {Fragment} from 'react';

import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Empty from 'components/Appointment/Empty';
import Show from 'components/Appointment/Show';
import { useVisualMode } from "hooks/useVisualMode";



export default function Appointment(props) {
  const last = props.id === 'last';

  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const CANCEL = 'CANCEL';
  const SAVING = 'SAVING';
  const EDIT = 'EDIT';
  const CONFIRM = 'CONFIRM';

  const mode = useVisualMode(SHOW);

  if (!props.interview) {
    mode.transition(EMPTY);
  }

  

  function onAdd() {
    mode.useVisualMode(CREATE);
  }
  function onCancel() {
    mode.useVisualMode(CANCEL);
  }
  function onEdit() {
    mode.useVisualMode(EDIT);
  }
  function onSave() {
    mode.useVisualMode(SAVING);
  }
  function onComplete() {
    mode.useVisualMode(SAVING);
  }
  function onDelete() {
    mode.useVisualMode(CONFIRM);
  }


  
  return (
    <Fragment>
    <Header time={props.time} />
      {mode === EMPTY && <Empty />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
    </Fragment>
  );
}