import React from 'react';

class DocumentTable extends React.Component {
  render() {
    let document = this.props.documentData.map(function(e){
      if ( e.visible === true ) {
        return (<tr key={e.title}><td>{e.student_num}</td><td>{e.title}</td><td>{e.doc_num}</td><td>{e.category}</td></tr>);
      }
    });

    return(
      <table>
        <thead>
          <tr>
            <th>学籍番号</th>
            <th>タイトル</th>
            <th>ナンバリング</th>
            <th>カテゴリ</th>
          </tr>
        </thead>
        <tbody>
          {document}
        </tbody>
      </table>
    );
  }
}

export default DocumentTable;
