import React from 'react';

import 'components/DayListItem.scss';
import classnames from 'classnames';

export default function DayListItem(props) {
  const dayListClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });

  let sentence = "";

  if (props.spots === 0) {
    sentence = "no spots remaining";
  } if (props.spots === 1) {
    sentence = `${props.spots} spot remaining`;
  } else if (props.spots === 2 || props.spots === 3 || props.spots === 4 || props.spots === 5) {
    sentence = `${props.spots} spots remaining`;
  }
  

  return (
  <li
  className={dayListClass}
  onClick={ () => props.setDay(props.name) }
  data-testid = "day"
  >
    <h2>{props.name}</h2>
    <h4>{sentence}</h4>
  </li>
  );
}