import React from 'react';

import 'components/DayListItem.scss';
import classnames from 'classnames';

export default function DayListItem(props) {
  const dayListClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });

  return (
  <div
  className={dayListClass}
  onClick={ () => props.setDay(props.name) }
  >
    <h2>{props.name}</h2>
    <h4>{props.spots} spots left</h4>
  </div>
  );
}