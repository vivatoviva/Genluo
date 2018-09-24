import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="../static/style/dist/app_min.css" />
          <link rel="stylesheet" href="../static/prismjs/prism.css"/>
          <script src="../static/prismjs/prism.js"></script>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/images/favicon.png"></link>
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <style global jsx>{`
            body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
              body{
                font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
                font-size: 13px;
                background:#fff;-webkit-text-size-adjust:100%;
              } 
              a{color:#2d374b;text-decoration:none}
              a:hover{color:#cd0200;text-decoration:underline}
              em{font-style:normal}
              li{list-style:none}
              img{border:0;vertical-align:middle}
              table{border-collapse:collapse;border-spacing:0}
              p{word-wrap:break-word}
        `}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}