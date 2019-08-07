import React , {Fragment} from 'react';

import 'components/Appointment/styles.scss';
import Header from 'components/Appointment/Header';
import Empty from 'components/Appointment/Empty';
import Show from 'components/Appointment/Show';



export default function Appointment(props) {
  const last = props.id === 'last';
  return (
    <Fragment>
    <Header time={props.time} />
    {!last && (props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}  /> : <Empty />)}
    </Fragment>
  );
}