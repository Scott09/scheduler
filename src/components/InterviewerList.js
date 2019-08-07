import React, { useState , useEffect } from 'react';

import 'components/InterviewerList.scss';
import InterviewerListItem from 'components/InterviewerListItem';

export default function InterviewerList(props) {
  // const [currentInterviewer, setInterviewer] = useState("");

  return (
    <section class="interviewers">
      <h4 class="interviewers__header text--light">Interviewer</h4>
      <ul class="interviewers__list">
        {props.interviewers.map((interviewer) => {
          return <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            selected={interviewer.id === props.interviewer}
            setInterviewer={(event) => props.setInterviewer(interviewer.id)} />
            
      })}
      </ul>
    </section>
  );
}
