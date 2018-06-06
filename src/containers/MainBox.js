import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  handleClick = (e) => {
    this.selectBtn(e);
    if (e.target.id === "profile"){
      this.setState({
        viewPort: "Profile"
      })
    }else if (e.target.id === "photo"){
      this.setState({
        viewPort: "photo"
      })
    }else if (e.target.id === "cocktail"){
      this.setState({
        viewPort: "cocktail"
      })
    }else if (e.target.id === "pokemon"){
      this.setState({
        viewPort: "pokemon"
      })
    }
  }

  selectBtn = (e) => {
    this.allBtns(e);
    if (e.target.className[0] === "i"){
      e.target.className = "item active";
    }else{
      e.target.parentNode.className = "item active";
    }
  }

  allBtns = (e) => {
    if (e.target.className[0] === "i"){
      e.target.parentNode.childNodes.forEach(a => {
        a.className = "item";
      })
    }else{
      e.target.parentNode.parentNode.childNodes.forEach(a => {
        a.className = "item";
      })
    }
  }

  display = () => {
    if (this.state.viewPort === "Profile"){
      return < Profile />
    }else if (this.state.viewPort === "photo"){
      return <Photos/>
    }else if (this.state.viewPort === "cocktail"){
      return <Cocktails/>
    }else if (this.state.viewPort === "pokemon"){
      return <Pokemon/>
    }
  }

  state = {
    viewPort: null
  }

  render() {

    const detailsToDisplay = <div>{this.display()}</div>

    return (
      <div>
        <MenuBar fun={this.handleClick} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
