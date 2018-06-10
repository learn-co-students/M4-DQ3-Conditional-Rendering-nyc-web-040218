import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    detail: 'profile'
  }

  clickedState = (clicked) => {
    this.setState({
      detail: clicked
    })
  }

  render() {
    const status = this.state.detail

    let detailsToDisplay;
    switch(status) {
      case 'profile':
        detailsToDisplay = <Profile />;
        break;
      case 'photo':
        detailsToDisplay = <Photos />;
        break;
      case 'cocktail':
        detailsToDisplay = <Cocktails />;
        break;
      case 'pokemon':
        detailsToDisplay = <Pokemon />;
        break;
      default:
        detailsToDisplay = null
    }

    return (
      <div>
        <MenuBar details={this.clickedState} clicked={this.state.detail}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
