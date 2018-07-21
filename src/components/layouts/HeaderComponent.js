import React from 'react'
import logo from '../../logo.svg'
import {
  Container,
  Dropdown,
  Image,
  Icon,
  Menu
} from 'semantic-ui-react'

const HeaderComponent = (props) => {
  const trigger = (
    <span>
      <Image avatar src='https://www.gravatar.com/avatar/e37a6f5d1127286ce89d4fe69269989b' /> {props.username}
    </span>
  )

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' onClick={props.handleSidebarOpen} ><Icon name='bars' /></Menu.Item>
        <Menu.Item as='a' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          React UI
        </Menu.Item>
        <Menu.Menu position='right'>
          <Dropdown trigger={trigger} item floating pointing='top right' icon={null} >
            <Dropdown.Menu>
              <Dropdown.Item icon='user' text='Account' />
              <Dropdown.Item icon='settings' text='Settings' />
              <Dropdown.Item icon='sign out' text='Sign Out' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default HeaderComponent