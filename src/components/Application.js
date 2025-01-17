import React, {useState, useEffect} from "react";

import "components/Application.scss";
import DayList from 'components/DayList';
import Appointment from 'components/Appointment/Appointment';

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from 'hooks/useApplicationData';

export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: [],
  //   interviewers: []
  // });

  // useEffect(()=>{
  //   Promise.all([axios("/api/days"),axios("/api/appointments"),axios("/api/interviewers")])
  //   .then((all)=>{

  //     setState(state => ({ ...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
  //   })
  // },[]);


  // function bookInterview(id, interview) {

  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   setState({
  //     ...state,
  //     appointments
  //   });

  //   return axios({
  //     url: `/api/appointments/${id}`,
  //     method: 'put',
  //     data: {
  //       interview
  //     }
  //   });
  // }

  // const cancelInterview = function (id, interview) {
  //   return axios({
  //     url: `api/appointments/${id}`,
  //     method: "delete",
  //     data: {
  //     }
  //   }).then( () => {
  //     const appointment = {
  //       ...state.appointments[id],
  //       interview: null
  //     };
  
  //     const appointments = {
  //       ...state.appointments,
  //       [id]: appointment
  //     };
  
  //     setState({
  //       ...state,
  //       appointments
  //     });
  //   });
  //   }


  // const editInterview = function (id, interview) {

  //   return axios({
  //     url: `api/appointments/${id}`,
  //     method: "put",
  //     data: {
  //       interview:interview
  //     }
  //   }).then( () => {
  //     const appointment = {
  //       ...state.appointments[id],
  //       interview: interview
  //     };
  
  //     const appointments = {
  //       ...state.appointments,
  //       [id]: appointment
  //     };
  
  //     setState({
  //       ...state,
  //       appointments
  //     });
  //   });
  //   }
  

  // const setDay = day => setState(state=>({ ...state, day }));

  const {
    state,
    dispatch,
    bookInterview,
    cancelInterview,
    editInterview
  } = useApplicationData();

 

  const appointments = getAppointmentsForDay({days: state.days, appointments: state.appointments}, state.day);
  const interviewers = getInterviewersForDay({days: state.days, interviewers: state.interviewers}, state.day)

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        {console.log(state.day)}
        <DayList days={state.days} day={state.day} setDay={(day) => { dispatch({type:"SET_DAY", day:day}) }}/>
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map((appointment) => {
        
          const interview = getInterview(state, appointment.interview);
          return <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={interview} interviewers={interviewers} bookInterview={bookInterview} cancelInterview={cancelInterview} editInterview={editInterview} />
        })}
      </section>
    </main>
  );
}
