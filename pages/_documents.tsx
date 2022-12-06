import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* <title>Raunak Gurud | Portfolio:Full-Stack Web developer</title>
          <meta
            name="description"
            content="Raunak Gurud is an Full stack web developer and Freelancer progressively enhancing web application.want to have your own website contact me"
          />
          <meta name="author" content="Raunak Gurud" />
          <meta
            name="keywords"
            content="Full-stack-Webdeveloper,React, MERN ,HTML, CSS, JavaScript,TypeScript"
          />

           // Open Graph Meta Tags 
          <meta property="og:type" content="Portfolio Website" />
          <meta property="og:title" content="Raunak Gurud | Portfolio:Full-Stack Web developer" />
          <meta
            property="og:description"
            content="Raunak Gurud is an Full stack web developer and Freelancer progressively enhancing web application.want to have your own website contact me"
          />
          <meta property="og:image" content="./Assets/Images/mypic1.png" />
          <meta property="og:url" content="PERMALINK" />
          <meta property="og:site_name" content="SITE NAME" />

          <meta name="twitter:title" content="Raunak Gurud | Portfolio:Full-Stack Web developer" />
          <meta
            name="twitter:description"
            content="Raunak Gurud is an Full stack web developer and Freelancer progressively enhancing web application.want to have your own website contact me"
          />
          <meta name="twitter:image" content="./Assets/Images/mypic1.png" />
          <meta name="twitter:site" content="@RaunakGurud" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
