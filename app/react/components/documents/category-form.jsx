import React from 'react';

class CategoryForm extends React.Component {
  filter() {
    const val = []
    if ( this.refs.category1.checked ) { val.push("自己紹介") }
    if ( this.refs.category2.checked ) { val.push("授業発表") }
    if ( this.refs.category3.checked ) { val.push("制作実習") }
    if ( this.refs.category4.checked ) { val.push("体験総括") }
    if ( this.refs.category5.checked ) { val.push("先行研究") }
    if ( this.refs.category6.checked ) { val.push("企業研修") }
    if ( this.refs.category7.checked ) { val.push("技術検討") }
    if ( this.refs.category8.checked ) { val.push("学会発表") }
    if ( this.refs.category9.checked ) { val.push("作業実践") }
    if ( this.refs.category10.checked ) { val.push("就職活動") }
    if ( this.refs.category11.checked ) { val.push("中間発表") }
    if ( this.refs.category12.checked ) { val.push("文献調査") }
    if ( this.refs.category13.checked ) { val.push("卒論審査") }
    if ( this.refs.category14.checked ) { val.push("学生総括") }
    const data = { category_queries: val };
    this.props.filter(data);
  }
  render() {
    return(
      <form>
        <p>カテゴリ：</p>
        <input type="checkbox" name="category" ref="category1" onChange={this.filter.bind(this)} /> 自己紹介
        <input type="checkbox" name="category" ref="category2" onChange={this.filter.bind(this)} /> 授業発表
        <input type="checkbox" name="category" ref="category3" onChange={this.filter.bind(this)} /> 制作実習
        <input type="checkbox" name="category" ref="category4" onChange={this.filter.bind(this)} /> 体験総括
        <input type="checkbox" name="category" ref="category5" onChange={this.filter.bind(this)} /> 先行研究
        <input type="checkbox" name="category" ref="category6" onChange={this.filter.bind(this)} /> 企業研修
        <input type="checkbox" name="category" ref="category7" onChange={this.filter.bind(this)} /> 技術検討
        <input type="checkbox" name="category" ref="category8" onChange={this.filter.bind(this)} /> 学会発表
        <input type="checkbox" name="category" ref="category9" onChange={this.filter.bind(this)} /> 作業実践
        <input type="checkbox" name="category" ref="category10" onChange={this.filter.bind(this)} /> 就職活動
        <input type="checkbox" name="category" ref="category11" onChange={this.filter.bind(this)} /> 中間発表
        <input type="checkbox" name="category" ref="category12" onChange={this.filter.bind(this)} /> 文献調査
        <input type="checkbox" name="category" ref="category13" onChange={this.filter.bind(this)} /> 卒論審査
        <input type="checkbox" name="category" ref="category14" onChange={this.filter.bind(this)} /> 学生総括
      </form>
    );
  }
}

export default CategoryForm;
