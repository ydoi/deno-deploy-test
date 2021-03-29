function handleRequest(request) {
  const messages = [
    { message: "あまりにも驚いてじゃんがら食いに行っちゃったよ", background: "" },
    { message: "あんまりいじめちゃかわいそうだよ", background: "" },
  ]
  const random = Math.floor(Math.random() * messages.length) 
  const html = `<html>
     <h1>ウメハラ名言Bot</h2>
     ${messages[random].message}
     <br>
     ${messages[random].background}
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
