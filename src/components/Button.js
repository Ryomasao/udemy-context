import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {
  //この名前にしなきゃいけないっぽ　
  //static contextType = LanguageContext

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voyer'
  }

  render() {
    //console.log(this.context)
    //const text =this.context === 'english' ? 'Submit' : 'Voyer'
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button
