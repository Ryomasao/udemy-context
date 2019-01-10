import React from 'react'
import UserCreate from './UserCreate'

class App extends React.Component {
  state = {
    language: 'english'
  }

  // ここはarrowにする必要がないかも　
  onLanguageChange = language => {
    this.setState({ language })
  }


  render() {
    return (
      <div className="ui container">
        <div>
          select language: 
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App;
