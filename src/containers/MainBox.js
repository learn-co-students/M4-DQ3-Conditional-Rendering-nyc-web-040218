import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
    constructor(){
        super();

        this.state= {
            viewTab : "profile"
        }
    }

    handleClick = (event) => {
        if (event.target.id === "profile"){
            this.setState({
                viewTab: event.target.id
            }, () => console.log(this.state))
            console.log("profile", event);
        } else if (event.target.id === "photo") {
            this.setState({
                viewTab: event.target.id
            }, () => console.log(this.state))
            console.log("photo", event);
        } else if (event.target.id === "cocktail") {
            console.log("cocktail", event);
            this.setState({
                viewTab: event.target.id
            }, () => console.log(this.state))
        } else if (event.target.id === "pokemon") {
            console.log("Pokemon", event);
            this.setState({
                viewTab: event.target.id
            }, () => console.log(this.state))
        }
    }


    changeView = () => {
        if (this.state.viewTab === "profile"){
            return <Profile />
        } else if (this.state.viewTab === "photo") {
            return <Photos />
        } else if (this.state.viewTab === "cocktail") {
            return <Cocktails />
        } else if (this.state.viewTab === "pokemon") {
            return <Pokemon />
        }
    }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.changeView()}</div>
    return (
      <div>
        <MenuBar onClick={this.handleClick} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
