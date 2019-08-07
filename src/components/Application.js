import React, {useState, useEffect} from "react";

import "components/Application.scss";
import DayList from 'components/DayList';
import Appointment from 'components/Appointment/Appointment';
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "1pm",
    interview: {
      student: "Scott Appleton",
      interviewer: {
        id: 1,
        name: "Jensen",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: []
  });

  const setDay = day => setState(state=>({ ...state, day }));

  useEffect(()=>{
    Promise.all([axios("/api/days"),axios("/api/appointments"),axios("/api/interviewers")])
    .then((daysObject)=>{
      // setDays(daysObject[0].data)
      // setAppointments(daysObject[1].data)
      setState({...state, days: [...daysObject[0].data], appointments: {...daysObject[1].data}});
    })
  },[]);

  const appointments = getAppointmentsForDay({days: state.days, appointments: state.appointments},state.day);

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
        <DayList days={state.days} day={state.day} setDay={(day) => {setDay(day)}}/>
        <nav className="sidebar__menu" />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map((appointment) => {
          return <Appointment key={appointment.id} {...appointment} />
        })}
      </section>
    </main>
  );
}
