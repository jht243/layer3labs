import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

import loader from '../loader'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <head>
          <style>{loader}</style>
        </head>
        <body>
          <div id={'globalLoader'}>
            <img src="/logo.svg" alt="Layer 3" />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
