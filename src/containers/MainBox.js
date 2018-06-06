import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: 'item active',
      photo: 'item',
      cocktail: 'item',
      pokemon: 'item',
      activePage: 'profile'
    }
  }

  handleSelectedTab = (element) => {
    this.setState({
      profile: 'item',
      photo: 'item',
      cocktail: 'item',
      pokemon: 'item',
      [element.id]: 'item active',
      activePage: [element.id]
    }, this.setClassName )

  }

  setClassName = () => {
    const children = [...document.getElementById('menu').children]

    children.map((sweetChil) => { sweetChil.className = this.state[sweetChil.id] })
  }



  render() {
    const componentAdapter = {
      profile: Profile,
      photo: Photos,
      cocktail: Cocktails,
      pokemon: Pokemon
    }

    const PageComponent = componentAdapter[this.state.activePage]

    return (
      <div>
        <MenuBar currentSelectedTab={this.handleSelectedTab} />
        <PageComponent />
      </div>
    )
  }

}

export default MainBox
