import React from 'react'

const MenuBar = (props) => {

  const handleClick = (event) => {
    props.details(event.currentTarget.id)
  }

  return (
    <div className="ui four item menu">
      <a className={props.clicked === 'profile' ? "item active" : "item"} id="profile" onClick={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={props.clicked === 'photo' ? "item active" : "item"} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item " + (props.clicked === 'cocktail' ? "active" : null)} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item " + (props.clicked === 'pokemon' ? "active" : null)} id="pokemon" onClick={handleClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
