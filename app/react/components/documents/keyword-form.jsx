import React from 'react';

class KeywordForm extends React.Component {
  filter() {
    const val = this.refs.keyword.value;
    const data = { title: val };
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
