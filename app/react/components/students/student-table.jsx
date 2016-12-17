import React from 'react';

class StudentTable extends React.Component {
  propTypes: {
    studentData: React.propTypes.array.isRequired
  }

  render() {
    var student = this.props.studentData.map(function(e){
      return (<tr key={e.student_number}><td>{e.student_number}</td><td>{e.name}</td></tr>);
    });

    return(
      <table>
        <thead>
          <tr>
            <th>学籍番号</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {student}
        </tbody>
      </table>
    );
  }
}

export default StudentTable;
