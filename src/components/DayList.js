import React from 'react';
import DayListItem from 'components/DayListItem';



export default function DayList(props) {
  return (
    props.days.map((day) => {
      return <DayListItem 
      key={day.id}
      name={day.name}
      spots={props.spots}
      setDay={props.setDay}
      selected = {day.name === props.day}
      />
    })
  )
}