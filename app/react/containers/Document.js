import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DevTools from './DevTools';
import DocumentContainer from '../components/documents/document-container';
import * as DocumentActions from '../actions';


class Document extends Component {
  render() {
    const { dispatch } = this.props;
    const boundActionCreators = bindActionCreators(DocumentActions, dispatch);

    return (
      <DocumentContainer
        documents={this.props.documents}
        {...boundActionCreators}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    documents: state.documents
  };
}

export default connect(mapStateToProps)(Document);
