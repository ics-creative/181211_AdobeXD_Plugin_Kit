import { Artboard, Color, GraphicNode, Line } from "scenegraph";

function drawItem(selection: XDSelection): void {
  // [3]
  const line = new Line(); // [4.i]

  line.setStartEnd(
    // [4.ii]
    0,
    0,
    100,
    100
  );
  line.strokeEnabled = true; // [4.iii]
  line.stroke = new Color("#FF0000"); // [4.iv]
  line.strokeWidth = 10; // [4.v]
  line.strokeEndCaps = (GraphicNode as any).STROKE_CAP_ROUND; // [4.v]

  if (selection.editContext.isContainer) {
    (selection.editContext as Artboard).addChild(line);
  }
}

// メニューとして出力する
module.exports = {
  commands: {
    // コマンドが押されたらこの関数を呼び出す
    menuCommand: drawItem,
  },
};
