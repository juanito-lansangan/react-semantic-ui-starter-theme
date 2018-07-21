import React from 'react'
import { Message, Button, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const ErrorComponent = (props) => {
  return (
    <Message negative>
      <Message.Header>Oops! You've found a mystery land.</Message.Header>
      <p>
        <NavLink to={`/`}>Redirect to dashboard.</NavLink>
      </p>
    </Message>
  )
}

export default ErrorComponent
