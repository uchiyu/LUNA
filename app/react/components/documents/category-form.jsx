import React from 'react';

class CategoryForm extends React.Component {
  //filter() {
  //  const val = [this.refs.category1.checked, this.refs.category2.checked];
  //  const data = { category_queries: val };
  //  this.props.filter(data);
  //}
  render() {
    return(
      <form>
        <p>カテゴリ：</p>
        <input type="checkbox" name="category" ref="category1" onChange={this.filter.bind(this)} /> 自己紹介
        <input type="checkbox" name="category" ref="category2" onChange={this.filter.bind(this)} /> 授業発表
        <input type="checkbox" name="category" ref="3" /> 制作実習
        <input type="checkbox" name="category" ref="4" /> 体験総括
        <input type="checkbox" name="category" ref="5" /> 先行研究
        <input type="checkbox" name="category" ref="6" /> 企業研修
        <input type="checkbox" name="category" ref="7" /> 技術検討
        <input type="checkbox" name="category" ref="8" /> 学会発表
        <input type="checkbox" name="category" ref="9" /> 作業実践
        <input type="checkbox" name="category" ref="10" /> 就職活動
        <input type="checkbox" name="category" ref="11" /> 中間発表
        <input type="checkbox" name="category" ref="12" /> 文献調査
        <input type="checkbox" name="category" ref="13" /> 卒論審査
        <input type="checkbox" name="category" ref="14" /> 学生総括
      </form>
    );
  }
}

export default CategoryForm;
