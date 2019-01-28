import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Field extends React.Component {
  //static contextType = LanguageContext

  render() {
    console.log(this.context)
    const text =this.context === 'english' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

Field.contextType = LanguageContext;

export default Field
