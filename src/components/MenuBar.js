import React from 'react'

class MenuBar extends React.Component{
  constructor(props){
    super(props);

  }

  profileClickHandler = (event) => {
    this.menuChanger(event)
    this.setState({
      visible: "profile"
    }, () => this.props.getVisible(this.state.visible))
  }

  photoClickHandler = (event) => {
    this.menuChanger(event)
    this.setState({
      visible: "photo"
    }, () => this.props.getVisible(this.state.visible))
  }

  cocktailClickHandler = (event) => {
    this.menuChanger(event)
    this.setState({
      visible: "cocktail"
    }, () => this.props.getVisible(this.state.visible))
  }

  pokemonClickHandler = (event) => {
    this.menuChanger(event)
    this.setState({
      visible: "pokemon"
    }, () => this.props.getVisible(this.state.visible))
  }

  menuChanger = (event) => {
    if (event.target.className === "item"){
      let entireMenu = event.target.parentNode.querySelectorAll('a')
        for (let i=0; i < entireMenu.length; i++){
          entireMenu[i].className = "item"
        }
      event.target.className = "item active"
    }
  }


render(){
  return (
    <div className="ui four item menu">
      <a className="item" id="profile" onClick={this.profileClickHandler.bind(this)}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo" onClick={this.photoClickHandler}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className="item" id="cocktail" onClick={this.cocktailClickHandler}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className="item" id="pokemon" onClick={this.pokemonClickHandler}>
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )
}
}
  /*
  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */


export default MenuBar
