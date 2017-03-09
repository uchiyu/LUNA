import * as types from '../constants';

// state { student_num: , title: , doc_num: , category: }

const initialState = {
  searchKey: {
    student_num: "",
    title_queries: [],
    doc_num: "",
    category_queries: [],
  },
  documentData : [
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
}

function searchDocument(documents, data) {
  if (data.title_queries) { documents.searchKey.title_queries = data.title_queries }
  if (data.student_num) { documents.searchKey.student_num = data.student_num }
  if (data.doc_num) { documents.searchKey.doc_num = data.doc_num }
  if (data.category_queries) { documents.searchKey.category_queries = data.category_queries }
  for (let elem of documents.documentData) {
    elem.visible = true
  }
  let documentData = documents.documentData.map( elem => {
    let visibleFlag = { keyword: false, student_num: false, doc_num: false, category: false }

    documents.searchKey.title_queries.forEach(function(query) {
      if ( elem.title.match(query) !== null ) { visibleFlag['keyword'] = true }
    });
    if ( elem.student_num.match(documents.searchKey.student_num) !== null ) { visibleFlag['student_num'] = true }
    if ( String(elem.doc_num).match(documents.searchKey.doc_num) !== null ) { visibleFlag['doc_num'] = true }
    documents.searchKey.category_queries.forEach(function(query) {
      if ( elem.category === query ) { visibleFlag['category'] = true }
    });

    // フォームが未入力の場合は表示flagをtrueに
    if ( documents.searchKey.title_queries.length === 0 ) { visibleFlag['keyword'] = true  }
    if ( documents.searchKey.student_num === "" ) { visibleFlag['student_num'] = true  }
    if ( documents.searchKey.doc_num === "" ) { visibleFlag['doc_num'] = true  }
    if ( documents.searchKey.category_queries.length === 0 ) { visibleFlag['category'] = true }

    if ( visibleFlag['keyword'] && visibleFlag['student_num'] && visibleFlag['doc_num'] && visibleFlag['category'] ) { elem.visible = true } else { elem.visible = false }
    return elem
  })
  documents['documentData'] = documentData
  return documents
}

export default function documentFilter(state = initialState, action) {
  let documents = Object.assign([], state)
  switch (action.type) {
    case types.SEARCH_DOCUMENT:
      return searchDocument(documents, action.data)
    default:
      return state
  }
}
