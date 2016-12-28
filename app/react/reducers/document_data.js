import * as types from '../constants';

// state { student_num: , title: , doc_num: , category: }

const initialState = [
  {
    student_num: "s13t000",
    title: "主題",
    doc_num: "201604",
    category: "自己紹介",
    visible: true
  },
  {
    student_num: "s13t200",
    title: "hogehoge",
    doc_num: "201503",
    category: "企業研修",
    visible: true
  }
]

export default function documentFilter(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_DOCUMENT:
      let documents = Object.assign([], state)
      for (let elem of documents) {
        elem.visible = true
      }

      documents = documents.map( elem => {
        action.data.title_querys.forEach(function (query) {
          if ( elem.title.match(query) === null ) {
            elem.visible = false
          }
        });
        return elem
      })
      return documents
    default:
      return state;
  }
}
