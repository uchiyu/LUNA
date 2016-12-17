class DocumentsController < ApplicationController
  def index
    @documents = Document.all.map { |doc| { title: doc.title, doc_num: doc.doc_num, category: doc.category } }
  end
end
