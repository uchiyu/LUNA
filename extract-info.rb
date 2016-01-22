#config: utf-8

require "rexml/document"

%x( unzip resume/semi2013/s13t208/201410/s13t208-201410.pptx ppt/slides/slide1.xml )

doc = REXML::Document.new(File.new("ppt/slides/slide1.xml"))

arr = doc.to_s.scan(/<a:t>(.*?)<\/a:t>/)
text = ""
arr.each{|str_elem|
  text << str_elem.to_s
}
p text.delete("\"").delete("[").delete("]")

%x(rm -rf _rels ppt)
