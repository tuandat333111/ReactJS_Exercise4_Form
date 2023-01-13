import React, { Component } from 'react'
import Modal from './Modal'
import Search from './Search'
import Students from './Students'
export default class Home extends Component {
  render() {
    return (
      <>
         <Modal/>
         <Search/>
         <Students/>        
      </>
    )
  }
}
