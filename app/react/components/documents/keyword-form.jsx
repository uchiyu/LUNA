import React from 'react';

class KeywordForm extends React.Component {
  filter() {
    const val = this.refs.keyword.value;
    const keys = val.split(' ');
    const data = { title_querys: keys };
    this.props.filter(data);
  }
  render() {
    return(
      <form>
        <input ref="keyword" type="text" onKeyUp={this.filter.bind(this)} />
      </form>
    );
  }
}

export default KeywordForm;
