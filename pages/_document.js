// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/static/css/animate.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light|Lovers+Quarrel&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,900&text=0123456789" rel="stylesheet" />
        </Head>
        <body className="font-shadows-into-light scrollbar-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
