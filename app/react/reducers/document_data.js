import * as types from '../constants';

// state { student_num: , title: , doc_num: , category: }

const initialState = {
  searchKey: {
    student_num: "",
    title: "",
    doc_num: "",
    category: "",
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
  if (data.title) { documents.searchKey.title = data.title }
  if (data.student_num) { documents.searchKey.student_num = data.student_num }
  for (let elem of documents.documentData) {
    elem.visible = true
  }
  let documentData = documents.documentData.map( elem => {
    if ( elem.title.match(documents.searchKey.title) === null ) { elem.visible = false }
    if ( elem.student_num.match(documents.searchKey.student_num) === null ) { elem.visible = false }
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
    case types.SEARCH_STUDENT:
      return searchDocument(documents, action.data)
    default:
      return state
  }
}
