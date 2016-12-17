import React from 'react';
import CreateForm from './create-form';
import StudentTable from './student-table';

class StudentContainer extends React.Component {
  propTypes: {
   studentData: React.propTypes.array.isRequired
  }

  render() {
    return(
      <div>
        <CreateForm />
        <StudentTable studentData = {this.props.studentData} />
      </div>
    );
  }
}

export default StudentContainer;
