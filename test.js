function handleRequest(request) {
  const messages = [
    { message: "あまりにも驚いてじゃんがら食いに行っちゃったよ", background: "秋葉原で朝イチの1プレイ目でサスカッチにいきなり負けたときのセリフ。たかが1敗のはずだが、氏にとっては事件であった。この後食べ終わって帰ってきて、今なお語り草となっている伝説の286連勝を記録することになる。" },
    { message: "あんまりいじめちゃかわいそうだよ", background: "" },
    { message: "今の俺強すぎるよ", background: "" },
    { message: "いやー、体を洗いすぎた", background: "" },
    { message: "いや、なんか…大丈夫そう", background: "" },
    { message: "いや、ん、とりあえず…意外と、弱ぇーな", background: "" },
    { message: "色は超重要なんだけどね", background: "" },
    { message: "俺その頃、超強かったじゃん？ｗ", background: "" },
    { message: "俺の徹底したプレイスタイルにけっこうムキムキきてたらしいけどね", background: "" },
    { message: "カバンの置き…置く場所がわからなくて", background: "" },
    { message: "狩リノ…時間ダ", background: ""},
    { message: "これ強Kが利きませんけど", background: ""},
    { message: "3回くらいやれば今の柏木を崩してみせるよ", background: ""},
    { message: "そんなもんシカトで良い", background: ""},
    { message: "タマ無しキャラで最強はキャミィでしょ", background: "" },
    { message: "つまんね", background: "" },
    { message: "当然俺抜きの話だけどｗ", background: "" }, 
    { message: "どうでもいい。どうでもいいとか口にすることすら、どうでもいい", background: "" }, 
    { message: "解けなかった方程式が解け出した", background: "" }, 
    { message: "何か…すげー楽…だったんですけど", background: ""},
    { message: "何を言っているかわからないけど、何が言いたいかはわかる", background: ""},
    { message: "人型は論外", background: ""},
    { message: "負けないと思うんですけどね", background: ""},
    { message: "負ける要素は無い", background: ""},
    { message: "未来からの使者が1人だけいるって感じだった", background: ""},
    { message: "ムーミン谷に悪魔がやってきた", background: ""},
    { message: "虫じゃん。虫とか使うは無いじゃん", background: ""},
    { message: "やる気全一は後の全一", background: ""},
    { message: "よくがんばりましたね", background: ""},
    { message: "よゆうでした", background: ""},
    { message: "我ながらいい足跡を残すねぇｗ", background: ""},


  ]
  const random = Math.floor(Math.random() * messages.length) 
  const html = `<html style="text-align: center;">
     <h1 style="font-size: 3rem;" >ウメハラ名言Bot</h1>
     <p style="font-size: 3rem;">${messages[random].message}</p>
     <br>
     <p style="margin 0 20% 0 20%;">${messages[random].background}</p>
    </html>`;

  return new Response(html, {
    headers: {
      // The "text/html" part implies to the client that the content is HTML
      // and the "charset=UTF-8" part implies to the client that the content
      // is encoded using UTF-8.
      "content-type": "text/html; charset=UTF-8",
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
