import React, { Component } from 'react'
// import{MenuItems} from "./MenuItem";
// import "./Navbar.css" 

class NewNavbarBar  extends Component {

  state={ clicked:false }

  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }

    render(){

            return(

                <div className ="new_navbar">

                </div>
                
            )
    }
}


export default NewNavbarBar