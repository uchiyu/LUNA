import React from 'react';

class DocumentContainer extends React.Component {
  render() {
    return(
      <div>
        <DocumentsTable documentDate = {this.props.documentDate} />
        <KeywordFrom />
      </div>
    );
  }
}

export default DocumentContainer;
