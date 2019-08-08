export function getAppointmentsForDay(state, day){
  let appointmentArray = []
  for (let appointmentDay of state.days){
    if(appointmentDay.name === day){
      appointmentArray = appointmentDay.appointments
    }
  }
  if(appointmentArray.length > 0){
    appointmentArray = appointmentArray.map((index) => {
      for (let date in state.appointments){
        if (Number(date) === Number(index)){
          return state.appointments[date]
        }
      }
    })
  }
  return appointmentArray;
};

export function getInterviewersForDay(state, day) {
  let selector = [];
  let tempAppoint = [];

  for (let days of state.days) {
    if (days.name === day) {
      tempAppoint = days.interviewers;
    }
  }
  for (let i of tempAppoint) {
    selector.push(state.interviewers[i]);
  }

  return selector;
}

export function getInterview(state, interview){
  if (interview) {
    return ({
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
    })
  } else {
    return null;
  }
};


