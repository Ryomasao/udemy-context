import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {
  //この名前にしなきゃいけないっぽ　
  static contextType = LanguageContext

  render() {
    //console.log(this.context)
    const text =this.context === 'english' ? 'Submit' : 'Voyer'
    return (
      <button className="ui button primary">{text}</button>
    )
  }
}

export default Button
