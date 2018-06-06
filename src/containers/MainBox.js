import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super();
    this.state = {
      visible: null
    }
  }

  getVisible = (visibility) => {
    this.setState({
      visible: visibility
    })
  }

  myFunc = () => {
    if(this.state.visible === "profile") {
      return <Profile />
    } else if(this.state.visible === "photo") {
      return <Photos />
    } else if(this.state.visible === "cocktail") {
      return <Cocktails />
    } else if(this.state.visible === "pokemon") {
      return <Pokemon />
    }
  }


  // getVisible = (this.st.visible) => {
  //   if(this.state.visible === "profile") {
  //     return <Profile />
  //   }
  //   else if(this.state.visible === "photo") {
  //     return <Photos />
  //   }
  //   if(this.state.visible === "cocktail") {
  //     return <Cocktails />
  //   }
  //   if(this.state.visible === "pokemon") {
  //     return <Pokemon />
  //   }
  // }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar getVisible={this.getVisible}/>
        {this.myFunc()}
      </div>
    )
  }

}

export default MainBox
