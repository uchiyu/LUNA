import React from 'react';

class KeywordForm extends React.Component {
  filter() {
    const val = this.refs.keyword.value;
    const keys = val.split(' ');
    const data = { title_queries: keys };
    this.props.filter(data);
  }
  render() {
    return(
      <div className="mdl-cell mdl-cell--4-col">
        キーワード：
        <input ref="keyword" type="text" onKeyUp={this.filter.bind(this)} placeholder="例：自己紹介" />
      </div>
    );
  }
}

export default KeywordForm;
