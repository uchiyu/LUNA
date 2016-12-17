import React from 'react';

class StudentContainer extends React.Component {
  render() {
    return(
      <form>
        <div>学籍番号：</div>
        <input type="text" name="num" />
        <div>名前：</div>
        <input type="text" name="name" />
        <input type="submit" value="作成" />
      </form>
    );
  }
}

export default StudentContainer;
