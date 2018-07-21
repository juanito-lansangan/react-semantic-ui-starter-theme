import React from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import HeaderComponent from './HeaderComponent'
import RouteComponent from './RouteComponent'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const SidebarComponent = (props) => {

  return (
    <BrowserRouter>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={props.handleSidebarHide}
          vertical
          visible={props.visible}
          width='thin'>
          <Menu.Item onClick={props.handleSidebarHide} as={NavLink} to='/' exact>
            <Icon name='chart bar' />
            Dashboard
          </Menu.Item>
          <Menu.Item onClick={props.handleSidebarHide} as={NavLink} to='/games'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item onClick={props.handleSidebarHide} as={NavLink} to='/channels'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <HeaderComponent {...props} />
          <Segment basic style={{paddingTop:'50px'}}>
            <RouteComponent />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </BrowserRouter>
  );
}

export default SidebarComponent
