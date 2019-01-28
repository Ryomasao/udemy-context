import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
  //この名前にしなきゃいけないっぽ　
  //static contextType = LanguageContext

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voyer'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    //console.log(this.context)
    //const text =this.context === 'english' ? 'Submit' : 'Voyer'
    return (
      <ColorContext.Consumer>
        { color => this.renderButton(color) }
      </ColorContext.Consumer>
    )
  }
}

export default Button
