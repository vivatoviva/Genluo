import Head from 'next/head'

export default ({title}) => {
  return (
    <div>
      <Head>
        <title>{title} | Genluo</title>
      </Head>
    </div>
  )
}