import React from 'react';
import DocumentTable from './document-table.jsx';
import KeywordForm from './keyword-form.jsx';
import StudentForm from './student-form.jsx';

class DocumentContainer extends React.Component {
  render() {
    return(
      <div>
        <KeywordForm filter = {this.props.filter} />
        <StudentForm filter = {this.props.filter} />
        <DocumentTable documentData = {this.props.documents.documentData} />
      </div>
    );
  }
}

export default DocumentContainer;
