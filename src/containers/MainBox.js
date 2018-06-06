import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {


//// ORIGINAL WAY (NOT RIGHT)
  // handleClick = (event) => {
  //   // console.log('handling click', event.target);
  //   if (event.target.id === "profile"){
  //     console.log('clicked profile');
  //     return <Profile />
  //   } else if (event.target.id === "photo") {
  //     console.log('clicked photo');
  //     return <Photos />
  //   } else if (event.target.id === "cocktail") {
  //     console.log('clicked cocktail');
  //     return <Cocktails />
  //   } else if (event.target.id === "pokemon") {
  //     console.log('clicked pokemon');
  //     return <Pokemon />
  //   }
  // }

  // BRIE'S CODE
  handleClick = (e) => {
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
    // BRIE'S CODE
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
      // BRIE'S CODE
      state = {
        viewPort: null
      }
      // BRIE'S CODE
      selectBtn = (e) => {
  this.allBtns(e);
  if (e.target.className[0] === "i"){
    e.target.className = "item active";
  }else{
    e.target.parentNode.className = "item active";
  }
}
    // BRIE'S CODE
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

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */ // OLD WAY (WRONG)
    // const detailsToDisplay = <div>{this.handleClick}</div>

    const detailsToDisplay = <div>{this.display()}</div>

    return (
      <div>
        <MenuBar onClick={this.handleClick}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox






// ///////////////////////////////////////

//
//   display = () => {
//     if (this.state.viewPort === "Profile"){
//       return < Profile />
//     }else if (this.state.viewPort === "photo"){
//       return <Photos/>
//     }else if (this.state.viewPort === "cocktail"){
//       return <Cocktails/>
//     }else if (this.state.viewPort === "pokemon"){
//       return <Pokemon/>
//     }
//   }
//
//   state = {
//     viewPort: null
//   }
//
//
