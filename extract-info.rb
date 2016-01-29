#config: utf-8

require "rexml/document"

def extract( directory, file )

  %x( unzip #{directory}#{file} ppt/slides/slide1.xml )

  text = ""
  doc = REXML::Document.new(File.new("ppt/slides/slide1.xml"))
  doc = doc.to_s.scan(/<p:txBody>(.*?)<\/p:txBody>/)
  doc.each{|doc_elem|
    arr = doc_elem.to_s.scan(/<a:t>(.*?)<\/a:t>/)
    arr.each{|str_elem|
      text << str_elem.to_s
    }
    text << ","
  }
  %x(rm -rf _rels ppt)
  return text.delete("\"").delete("[").delete("]")
end

def trim( text )
  arr = text.to_s.split(",")
  arr.each{|text_block|
    # 情報のマッチング
    puts text_block.match(/\d{2}[T|G|t|g]\d{3}/)
    puts text_block.match(/月例発表([ ]|)\d{4}年\d{2}月版/)
    puts text_block.match(/^(?!.*(月例発表([ ]|)\d{4}年\d{2}月版|\d{2}[T|G|t|g]\d{3}|富永研究室)).+$/)
    # puts text_block.match(/\d{2}[T|G|t|g]\d{3}[ ](.*)[ |　|\d{2}[T|G|t|g]\d{3}]/).to_s # 名前の抽出
  }
end

string = extract("resume/semi2013/s13t210/201503/", "s13t210-201503.pptx")
puts string
puts
trim( string )
