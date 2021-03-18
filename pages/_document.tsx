import Document, { DocumentContext } from 'next/document'
import withTwindDocument from "@twind/next/document";
import twindConfig from '../twind.config'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default withTwindDocument(twindConfig, MyDocument)