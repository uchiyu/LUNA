#config: utf-8

require "rexml/document"

def extract( directory, file )

  %x( unzip #{directory}#{file} ppt/slides/slide1.xml )

  text = ""
  doc = REXML::Document.new(File.new("ppt/slides/slide1.xml"))
  arr = doc.to_s.scan(/<a:t>(.*?)<\/a:t>/)
  arr.each{|str_elem|
    text << str_elem.to_s
  }

  %x(rm -rf _rels ppt)
  return text.delete("\"").delete("[").delete("]")
end

def trim( text )
  puts text.match(/\d{2}[T|G|t|g]\d{3}/)
  puts text.match(/月例発表\d{4}年\d{2}月版/)
  puts text.match(/\d{2}[T|G|t|g]\d{3}[ ](.*?)香川大学/).to_s.gsub(/\d{2}[T|G|t|g]\d{3}[ ]/, "").delete("香川大学")
end

string = extract("resume/semi2013/s13t208/201503/", "s13t208-201503.pptx")
trim( string )
