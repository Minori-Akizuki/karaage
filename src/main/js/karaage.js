//とりあえず名前空間ぐらいつける
var karaage = karaage || {};

// 弁当箱を、からあげが少ない順に並び替える
karaage.sortBox = arr => arr.concat().sort( (a,b) => (a<b)?-1:1 );

// boxx から、からあげを num 個つまむ。
// num=0 だったら、そのまま boxx を返却する。
// num が 1 以上だったら、1個つまんで、 さらに num-1 個つまもうとする。
karaage.pick = boxx => num =>
  num===0 ? boxx
          : karaage.pick( karaage.pickOne( boxx ) )( num-1 );

karaage.pickOne = boxx => {
  console.log(boxx + 'からいっこつまむよ'); // デバグコード

  var sortedBox = karaage.sortBox(boxx); // boxx を大きい順にソート

  // 最大の物は配列の一番最後にいるので、
  // その箱とそれ以外のものに分ける
  // 破壊操作してるけどちかたない
  var maxBox = sortedBox.pop();
  var otherBoxx = sortedBox;

  // 最大のものを一つ引いたものを、残りの箱と一緒に返す。破壊操作以下略。
  // 本当は return otherBoxx.push(maxBox-1); とか書きたいんだけど
  // こいつ配列の方返してくれないのよね。
  otherBoxx.push(maxBox-1);
  console.log('=>' + otherBoxx); // デバグコード
  return otherBoxx;
}
