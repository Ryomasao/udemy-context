import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        select language: 
        <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')} />
      </div>
    );
  }
}

export default LanguageSelector;