import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }
  filter(categories) {
    const val = []
    const that = this
    categories.forEach(function(category, index){
      if ( that.refs[`category${index}`].checked ) { val.push(categories[index]) }
    });

    const data = { category_queries: val };
    this.props.filter(data);
  }

  render() {
    const categories = ["自己紹介", "授業発表", "制作実習", "体験総括", "先行研究", "企業研修", "技術検討", "学会発表", "作業実践", "就職活動", "中間発表", "文献調査", "卒論審査", "学生総括", "その他"]
    const that = this
    let checkboxes = categories.map((category, index) => {
      return(
        <div className="mdl-cell mdl-cell--2-col">
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" key={categories[index]} onClick={() => this.filter(categories)}>
            <input type="checkbox" name="category" className="mdl-checkbox__input" ref={`category${index}`}/>
            <span className="mdl-checkbox__label">{categories[index]}</span>
          </label>
        </div>
      )
    });

    return(
      <form className="mdl-grid">
        {checkboxes}
      </form>
    );
  }
}

export default CategoryForm;
