import React from 'react';

const ForDay = (props) => {
  return <div>
  <p>{props.match.params.location} {props.match.params.date}</p>
</div>
}

export default ForDay
