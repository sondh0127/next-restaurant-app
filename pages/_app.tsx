// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import withTwindApp from '@twind/next/app'
import twindConfig from '../twind.config'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const queryClientRef = React.useRef<QueryClient>()
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient()
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
		</QueryClientProvider>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default withTwindApp(twindConfig, MyApp)
