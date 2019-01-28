import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'
import UserCreate from './UserCreate'
import LanguageSelector from './LanguageSelector'


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
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
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
