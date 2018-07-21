import React, { Component } from 'react'
import SidebarComponent from './SidebarComponent'

class MainComponent extends Component {
  state = { visible: false }

  hideSidebar() {
    this.setState({visible: false})
  }

  openSidebar() {
    this.setState({visible: true})
  }

  render() {
    const { visible } = this.state
    return (
      <div style={{height:'100vh'}}>
        <SidebarComponent 
          handleSidebarOpen={this.openSidebar.bind(this)} 
          visible={visible} 
          handleSidebarHide={this.hideSidebar.bind(this)} />
      </div>
    )
  }
}

export default MainComponent
