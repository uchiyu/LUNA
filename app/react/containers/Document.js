import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DevTools from './DevTools';
import DocumentContainer from '../components/documents/document-container';
import * as DocumentActions from '../actions';


class Document extends Component {
  render() {
    console.log(this.props)
    const { dispatch } = this.props;
    const boundActionCreators = bindActionCreators(DocumentActions, dispatch);

    return (
      <DocumentContainer
        documentData={this.props.documentData}
        {...boundActionCreators}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    documentData: state.documentData
  };
}

export default connect(mapStateToProps)(Document);
