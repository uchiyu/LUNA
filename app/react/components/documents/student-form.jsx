import React from 'react';

class StudentForm extends React.Component {
  filter() {
    const val = this.refs.student.value;
    const data = { student_num: val };
    this.props.filter(data);
  }
  render() {
    return(
      <form>
        <input ref="student" type="text" onKeyUp={this.filter.bind(this)} />
      </form>
    );
  }
}

export default StudentForm;
