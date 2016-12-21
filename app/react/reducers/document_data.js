import * as types from '../constants';

// state { student_num: , title: , doc_num: , category: }

const initialState = [
  {
    student_num: "s13t000",
    title: "主題",
    doc_num: "201604",
    category: "自己紹介"
  },
  {
    student_num: "s13t200",
    title: "hogehoge",
    doc_num: "201503",
    category: "企業研修"
  }
]

export default function documentFilter(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_DOCUMENT:
      return state.filter( function(elem, index, array) {
        return (elem.title.match(action.data.title))
      });
    default:
      return state;
  }
}
