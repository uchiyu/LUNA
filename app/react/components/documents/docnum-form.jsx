import React from 'react';

class DocnumForm extends React.Component {
  filter() {
    const val = this.refs.docnum.value;
    const data = { doc_num: val };
    this.props.filter(data);
  }
  render() {
    return(
      <form>
        <input ref="docnum" type="text" onKeyUp={this.filter.bind(this)} placeholder="例 : 201703" />
      </form>
    );
  }
}

export default DocnumForm;
