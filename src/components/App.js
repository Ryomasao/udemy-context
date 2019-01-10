import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'


class App extends React.Component {
  state = {
    language: 'english'
  }

  // ここはarrowにする必要がないかも　
  onLanguageChange = language => {
    this.setState({ language })
  }


  // 1: Provierあり、かつvalueはステート：　更新される　
  // 2: Provierあり、かつvalueは固定: valueの値で一度設定されるだけ　
  // 3: Provierなし、contextで定義している初期値が一度設定されるだけ　
  render() {
    return (
      <div className="ui container">
        <div>
          select language: 
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        {/**
        <LanguageContext.Provider value='dutch'>
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate />
         */}
      </div>
    )
  }
}

export default App;
