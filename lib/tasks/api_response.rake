require 'net/http'
require 'uri'
require 'json'

namespace :api do
  desc "granada apiの結果を受け取りDocumentレコードに登録"
  task granada: :environment do
    request_url = 'http://133.92.165.48:4567/documents'

    document = Document.order(file_timestamp: :desc)[0]
    parameter = '?from='
    if document != nil
      parameter = parameter + document.file_timestamp.to_s
      request_url = request_url + parameter
    end

    p request_url

    uri = URI.parse(request_url)
    json = Net::HTTP.get(uri)
    hashes = JSON.parse(json)
    hashes.each do |hash|
      Document.create_from_hash(hash)
    end

    Document::set_student_id
  end
end
