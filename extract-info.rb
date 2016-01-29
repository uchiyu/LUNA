#config: utf-8

require "rexml/document"
require "csv"

def extract_info( directory, file )

  %x( unzip #{directory}#{file} ppt/slides/slide1.xml )

  text = ''
  doc = REXML::Document.new(File.new('ppt/slides/slide1.xml'))
  doc = doc.to_s.scan(/<p:txBody>(.*?)<\/p:txBody>/)
  doc.each do |doc_elem|
    arr = doc_elem.to_s.scan(/<a:t>(.*?)<\/a:t>/)
    arr.each do |str_elem|
      text << str_elem.to_s
    end
    text << ','
  end
  %x(rm -rf _rels ppt)
  return text.delete('\"').delete('[').delete(']')
end

def trim_text( text, file )

  write = Array.new(4)
  arr = text.to_s.split(',') # テキストの結合

  write[0] = file

  arr.each do |text_block|
    # 情報のマッチング
    tmp = text_block.match(/\d{2}[T|G|t|g]\d{3}/).to_s.strip
    if tmp != ''
      write[1] = tmp
    end

    tmp = text_block.match(/\d{4}年\d{2}月版/).to_s.strip
    if tmp != ''
      write[2] = tmp
    end

    tmp = text_block.match(/^(?!.*(月例発表([ ]|)\d{4}年\d{2}月版|\d{2}[T|G|t|g]\d{3}|富永研究室)).+$/).to_s.strip
    if tmp != ''
      write[3] = tmp
    end
  end 
  
  path = 'sample.csv'
  CSV.open(path, "a") do |csv|
    csv << write
  end
end

def find_file( directories, files )
  Dir.glob('./**/*').each do |path|
    if /^(?!(.*)\/s\d{2}[T|G|t|g]\d{3}\/\d{6}\/(.*)\/(.*)).*.pptx/ =~ path # /年月/*.pptx の場合のみ
      file = path.to_s.slice!(/[^\/]*$/) # ファイル名の抽出
      directly = path.delete(path.to_s.slice!(/[^\/]*$/)) # ディレクトリ名の抽出
      if file.match(/s\d{2}[T|G|t|g]\d{3}/).to_s == directly.match(/s\d{2}[T|G|t|g]\d{3}/).to_s #学番が一致するなら
        directories.push( directly )
        files.push( file )
      end
    end
  end
end

directories = Array.new
files = Array.new
find_file( directories, files )
files.zip(directories).each do |file, directory| # zip で配列の合成
  string = extract_info(directory, file)
  trim_text( string, file )
end
