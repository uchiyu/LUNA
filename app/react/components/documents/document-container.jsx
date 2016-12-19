import React from 'react';
import DocumentTable from './document-table.jsx';
import KeywordFrom from './keyword-form.jsx';

class DocumentContainer extends React.Component {
  render() {
    return(
      <div>
        <DocumentTable documentData = {this.props.documentData} />
        <KeywordFrom />
      </div>
    );
  }
}

export default DocumentContainer;
