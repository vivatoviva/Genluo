import Head from 'next/head'

export default ({title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../static/font-awesome-4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <style global jsx>{`
            body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
              body{font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 13px;background:#fff;-webkit-text-size-adjust:100%;} 
              
              a{color:#2d374b;text-decoration:none} 
              a:hover{color:#cd0200;text-decoration:underline} 
              em{font-style:normal} 
              li{list-style:none} 
              img{border:0;vertical-align:middle} 
              table{border-collapse:collapse;border-spacing:0} 
              p{word-wrap:break-word}
        `}</style>
    </div>
  )
}