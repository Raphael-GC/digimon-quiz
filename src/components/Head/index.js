import Head from 'next/head'

export default function Home({ title, description, bg }) {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Digimon Adventure Quiz" />
      
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta property="og:type" content="website" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://digimon-quiz.raphael-gc.vercel.app" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bg} />
      
      <link rel="icon" href="/favicon.ico"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
  )
}  