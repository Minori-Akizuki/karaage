// なんとなく sinon 使ってるけど、あんまり意味が無い。
var sinonTestCase = sinon.testCase({

  /**
   * 事前処理
   */
  setUp: function () {
    jstestdriver.console.log('setUp');
    // なにもしない
  },

  /**
   * 事後処理
   */
  tearDown: function () {
    jstestdriver.console.log('tearDown');
    // なにもしない
  },

  /**
   * 以下テストケース
   */

  /**
   * ソートをしてくれるかどうか
   */
  'test sort': function () {
    jstestdriver.console.log('test sort');
    var actual = karaage.sortBox([4,2,3]);
    var expected = [2,3,4];
    assertEquals(expected, actual);
  },

  /**
  * 1個だけちゃんとつまめるかどうか
  */
  'test picOne': function () {
    jstestdriver.console.log('test pickOne');
    var actual = karaage.pickOne([4,2,3]);
    var expected = [2,3,3];
    assertEquals(expected, actual);
  },
  
  /**
   * 元の配列は破壊されていないかどうか。
   */
  'test immutable': function () {
    jstestdriver.console.log('test immutable');
    var boxx = [4,2,3];
    var pickedboxx = karaage.pickOne(boxx);
    // JSって変数使われないと評価されないとかあったっけ。
    jstestdriver.console.log(pickedboxx);
    var expected = [4,2,3];
    assertEquals(expected, boxx);
  },

  /**
   * 0個つまむ時は何もしないかどうか
   */
  'test picZero': function () {
    jstestdriver.console.log('test pickOne');
    var actual = karaage.pick([4,2,3])(0);
    var expected = [4,2,3];
    assertEquals(expected, actual);
  },

  /**
   * 5個ぐらいつまんでみる
   */
  'test picAny': function () {
    jstestdriver.console.log('test pickOne');
    var actual = karaage.pick([10,8,9,10,9])(5);
    var expected = [8,8,8,9,8];
    assertEquals(expected, actual);
  },

});

TestCase('karaage Test', sinonTestCase);
