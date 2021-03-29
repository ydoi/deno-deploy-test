function handleRequest(request) {
  const messages = [
    { message: "あまりにも驚いてじゃんがら食いに行っちゃったよ", background: "秋葉原で朝イチの1プレイ目でサスカッチにいきなり負けたときのセリフ。たかが1敗のはずだが、氏にとっては事件であった。この後食べ終わって帰ってきて、今なお語り草となっている伝説の286連勝を記録することになる。" },
    { message: "あんまりいじめちゃかわいそうだよ", background: "闘劇05 ストリートファイター3 3rd Strikeにて、圧倒的な勝ち方をするチームメイトのヌキに対しての一言。" },
    { message: "いやー、体を洗いすぎた", background: "CAPCOM vs SNK 公式全国大会にて、氏を除いてすべての出場者が集まり、すでに集合時間から2時間が経過したころ、係員に連れられてギリギリ登場したときの不思議なコメント。" },
    { message: "いや、なんか…大丈夫そう", background: "闘劇05 ストリートファイター3 3rd Strike 決勝戦にて、司会に相手チーム（優勝候補のK.O/こくじん）に対するコメントを求められたとき。" },
    { message: "いや、ん、とりあえず…意外と、弱ぇーな", background: "闘劇05 ストリートファイター3 3rd Strike 決勝戦にて、当時最強プレイヤーのK.Oを大将戦で破ったあとのセリフ。ちなみに、この最終戦まで自らは全敗、全てチームメイトのヌキ頼みで進んできてからの今大会唯一の勝利であった。" },
    { message: "色は超重要なんだけどね", background: "使用キャラクターの色の選び方についての雑談のとき。インタビュアーが見えにくい色を使うと技が判別しにくくなりますよね、といった意見に対して、そういう攻略的なことは関係なく重要。と答えた。キャラクターの性能にはまったく関係ないはずのカラーであるが、氏には一家言あるようだ。" },
    { message: "俺その頃、超強かったじゃん？ｗ", background: "ヴァンパイアハンター時代、「梅ちゃんでも勝てない猛者がいる」と聞き岐阜のおもちゃ屋「アンクルトム」に遠征し、噂の平井モンと戦った時のセリフ。本当に強く、一緒に向かった友人はほとんど勝てず、梅原氏ともほぼ互角だったそうだ。それが不思議なほどに、理想的な動きをしていたらしい。その完成ぶりから未来からの使者、とも評していた。" },
    { message: "俺の徹底したプレイスタイルにけっこうムキムキきてたらしいけどね", background: "" },
    { message: "カバンの置き…置く場所がわからなくて", background: "闘劇03 CAPCOM vs SNK2 TOP8でのセリフ。試合時は荷物を置いてきたかったが、選手用ロッカーがどこかわからなかったようだ。中身はお菓子だったらしい。" },
    { message: "狩リノ…時間ダ", background: "少年時代、対戦前によく言っていたらしい。"},
    { message: "これ強Kが利きませんけど", background: "ヴァンパイアセイヴァーのロケテストで、圧倒的連勝をおさめたあとのセリフ。そういえば、途中からキックがいいはずのところでもパンチしか使っていなかったことに気づいた柏木氏は、あまりの実力差におののきゲーセンを飛び出してどこかにいってしまった。"},
    { message: "3回くらいやれば今の柏木を崩してみせるよ", background: "柏木ナッシュの完成されたガイ戦の前に苦戦していた友人のアール氏に対して。かなり厳しいとされるナッシュ-ガイで、1, 2戦目は徹底して裏の選択肢を取り、3戦目でごく普通に立ち回りあっさり勝利する姿を見せた。"},
    { message: "そんなもんシカトで良い", background: "ヴァンパイアハンターで氏の使っているパイロン-ザベルはほとんど詰んでいるから、負けようがないという話をしていたときに、でも虫ピン(ザベルの回転技)の対処だけは困らないですか？と聞かれたときの回答。何気ない答えだが、困る技だからと言って常に対処が必要なわけではないということを教えてくれる。"},
    { message: "タマ無しキャラで最強はキャミィでしょ", background: "タマ=飛び道具のことなのだが、これを聞いた女性プレイヤーがウメハラ君がそんなことを。。と勘違いしてしまい、すぐに気づいて赤面してしまったらしい。" },
    { message: "つまんね", background: "自分の出番が無いまま優勝してしまったときのセリフ。" },
    { message: "当然俺抜きの話だけどｗ", background: "ストリートファイターZERO3 の世界大会(アメリカ)にて。正直舐めていたアメリカチャンピオンが氏の考える基本を忠実に守った強さのリュウであり、日本に来てもおそらく最強だろう、という話をしたときの言葉。" }, 
    { message: "どうでもいい。どうでもいいとか口にすることすら、どうでもいい", background: "インターネットで自分の画像などが好き勝手に使われていることについて。" }, 
    { message: "解けなかった方程式が解け出した", background: "ストリートファイターZERO3 の世界大会(アメリカ)にて。全米チャンプのアレックスにあと1敗で負けるところまで追い込まれるも、それまでの情報を糧になんとか取り返し、そのまま逆転優勝したときを振り返ってのセリフ。" }, 
    { message: "何か…すげー楽…だったんですけど", background: "闘劇03 ストリートファイター3 3rd Strike 優勝者インタビューにて。チームメイトのヌキに決勝まで全ての相手を倒してもらい、決勝戦の大将戦だけ勝利して美味しいところを全部もっていった後のセリフ。大会に出る前から、ユン(決勝の相手であった最強プレイヤー:K.Oの使用キャラクター)だけ練習するから、あとはヌキよろしく！とか言ってたらしいが、本当にそうなった。"},
    { message: "何を言っているかわからないけど、何が言いたいかはわかる", background: ""},
    { message: "人型は論外", background: "ヴァンパイアシリーズのキャラ選択について。"},
    { message: "負けないと思うんですけどね", background: "ストリートファイターZERO3 世界大会(アメリカ)の決勝戦、司会に対戦相手である全米チャンプ・アレックスへのコメントを求められて。"},
    { message: "負ける要素は無い", background: "ストリートファイターZERO3 全国大会決勝戦、司会に対戦相手のヌキへのコメントを求められて。ヌキとの豪鬼同キャラ対決のみに絞り、クラハシ氏に豪鬼を使ってもらってずっと練習していたらしい。ヌキが同じゲーセンに来たら捨てゲーして移動までしていたとか。"},
    { message: "未来からの使者が1人だけいるって感じだった", background: ""},
    { message: "ムーミン谷に悪魔がやってきた", background: "足払い合戦を牧歌的に楽しんでいたウメハラ一派のゲーセンに、徹底して飛び道具しか使わない戦い方のクラハシ氏が現れて荒らされた時のセリフ。"},
    { message: "虫じゃん。虫とか使うは無いじゃん", background: "ヴァンパイアセイヴァーのキャラ選択の話で、強キャラクターであるQB(蜂のキャラクター)の選択肢はあったか？と問われて。"},
    { message: "やる気全一は後の全一", background: "さほど評価していなかったがやる気のすごいプレイヤーと久しぶりに対戦し、負けたときのセリフ。"},
    { message: "よくがんばりましたね", background: "CAPCOM vs SNKの家庭用ソフト大会のチャンピオンとエキシビジョンで闘い、当然のように圧勝したあとのセリフ。家庭用とか関係なく普通にかなり強い人だったそうだが。。"},
    { message: "よゆうでした", background: "定例大会の優勝後の適当なコメント。ちなみに新宿のトップレベルのゲーセンの大会である。"},
    { message: "我ながらいい足跡を残すねぇｗ", background: ""},


  ]
  const random = Math.floor(Math.random() * messages.length) 
  const html = `<html style="text-align: center;">
     <h1 style="font-size: 3rem;" >ウメハラ名言Bot</h1>
     <p style="font-size: 2.5rem;">${messages[random].message}</p>
     <br>
     <p style="margin: 0 20% 0 20%; font-size: 1.5rem;">${messages[random].background}</p>
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
