# contextの使用方法は2通り



* LanguageContext.jsをつくる

```javascript
import React from 'react'
export default React.createContext('english')
```

* 参照した場所で使う
```javascript
import React from 'react'
// コンテキストを読み込む
import LanguageContext from '../context/LanguageContext'

class Field extends React.Component {
  // 予約されたプロパティ名(contextType)にコンテキストを設定する
  static contextType = LanguageContext

  render() {
    // これでcontextを参照できる
    const text =this.context === 'english' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

// これでもいい。クラスにプロパティをあとからたしてexportするってことか。
// Field.contextType = LanguageContext

export default Field

```

### contextをstateを連携させる。
上の例は、contextを参照しているだけで、コンテキストの変更はできない。

以下のように、contextのProviderが使える。
ReduxのProoviderとは別。

```javascript
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

```


### Providerについて


Providerが複数あれば、それらは独立したオブジェクトになる。

```javascript
  // こっちのvalueを更新しても
  <LanguageContext.Provider value={this.state.language}>
    <UserCreate />
  </LanguageContext.Provider>

  // こっちには関係ない
  <LanguageContext.Provider value="ducth">
    <UserCreate />
  </LanguageContext.Provider>

   // Providerがなくても、this.contextは参照できる(import LanguageContextをしてるから)
  <UserCreate />
```

### Consumerについて
コンテキストでラップして、中に関数を書いてもコンテキストの値を取得できる。
こっちのほうが、複数のコンテキストを参照できるのでいいっぽい。

```javascript
import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {
  //この名前にしなきゃいけないっぽ　
  //static contextType = LanguageContext

  // valueの値はコンテキストの値
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
```

こんなかんじにネストさせる。

```javascript
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
```

```javascript
  render() {
    return (
      <ColorContext.Consumer>
        { color => 
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {value => this.renderSubmit(value)}
              </LanguageContext.Consumer>
            </button>
        }
      </ColorContext.Consumer>
    )
  }
```


