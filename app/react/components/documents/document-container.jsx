import React from 'react';
import DocumentTable from './document-table.jsx';
import KeywordForm from './keyword-form.jsx';
import StudentForm from './student-form.jsx';
import DocnumForm from './docnum-form.jsx';
import CategoryForm from './category-form.jsx';

class DocumentContainer extends React.Component {
  render() {
    return(
      <div>
        <div>キーワード：</div>
        <KeywordForm filter = {this.props.filter} />
        <div>学籍番号：</div>
        <StudentForm filter = {this.props.filter} />
        <div>ナンバリング：</div>
        <DocnumForm filter = {this.props.filter} />
        <div>カテゴリ：</div>
        <CategoryForm filter = {this.props.filter} />
        <DocumentTable documentData = {this.props.documents.documentData} />
      </div>
    );
  }
}

export default DocumentContainer;
