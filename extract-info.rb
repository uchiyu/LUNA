require 'win32ole'

if ARGV.size < 1
  puts "ファイル名を引数に指定"
  gets
  exit
end

# PowerPoint起動
ppt = WIN32OLE.new('PowerPoint.Application')
ppt.visible = true

if ppt.Presentations.Count > 0
  puts "開いてるPowerPointファイルを閉じてから実行してください。"
  gets
  exit
end

slideIndex = ""

# 各ファイルの処理
ARGV.each {|filename|
  presentation = ppt.Presentations.Open(filename, true)

  # 各スライドの処理
  presentation.Slides.each {|slide|
    # タイトルページ以外では1段字下げ
    slideIndex += "\t" if slide.Layout != 1  # 1: PowerPoint.PpSlideLayout.ppLayoutTitle
    # スライドのタイトル
    slideIndex += slide.Shapes.Title.TextFrame.TextRange.Text + "\n"
  }
  presentation.Close()
}
ppt.Quit()
