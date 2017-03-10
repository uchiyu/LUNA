import React from 'react';

class StudentForm extends React.Component {
  filter() {
    const val = this.refs.student.value;
    const data = { student_num: val };
    this.props.filter(data);
  }
  render() {
    return(
      <div className="mdl-cell mdl-cell--4-col">
        学籍番号：
        <input ref="student" type="text" onKeyUp={this.filter.bind(this)} placeholder="例 : s13t208" />
      </div>
    );
  }
}

export default StudentForm;
