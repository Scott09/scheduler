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