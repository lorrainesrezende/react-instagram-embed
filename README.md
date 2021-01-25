# react-instagram-embed

Primeiro de tudo é necessário realizar o sequinte comando no cmd:


npx create-react-app my-app

cd my-app

npm i react-instagram-embed

npm start


Obs.: "my-app" será o nome da pasta que você criará, poderá chama-la como quiser. O npx deverá ser usado para retornar sermpre a versão mais atualizada do react.

Logo em seguida será aberto o React APP no browser. Os únicos arquivos que serão editadas são a src/App.js, src/App.css, public/index.html, portanto, copie exatamente o código descrito nesses arquivos e cole nas mesmas pastas correspondentes no seu VSCode. Daí poderá ajustar o estilo em src/App.css conforme desejado. O restante dos arquivos permanecerá o conforme foi criado previamente.

Obs.: É importante que no HTML contenha, logo abaixo de div id="root"></div:

          <div class="item active" id="item1">
          <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CJoXTSQgcIH/embed/captioned/?cr=1&amp;v=7" allowtransparency="true" frameborder="0" height="776" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="border: 1px solid rgb(219, 219, 219); margin: 1px 1px 12px; max-width: 320px; width: calc(100% - 2px); border-radius: 4px; box-shadow: none; display: block; padding: 0px; background: rgb(255, 255, 255);"></iframe>
          <script async="" defer="" src="//platform.instagram.com/en_US/embeds.js"></script>
          </div>
          
Se não for incluído isso no HTML a aplicação não é exibida. Para que a aplicação retorne o link desejado (da página desejada) é necessário entrar no link do instagram e substituir a parte (https://www.instagram.com/p/CJoXTSQgcIH/embed/captioned/?cr=1&amp;v=7) "CJoXTSQgcIH" pelo que aparecer no browser, pois essa será a chave do link correto.

Basta fazer isso e a aplicação funcionará.
      
      
