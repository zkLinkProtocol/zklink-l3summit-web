import { MuiThemeProvider } from "@material-ui/core";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import HomepageNav from "../components/CommonNav";
import useMuiTheme from "../hooks/useMuiTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { MuiThemeType } from "@/styles/Themes";
import "./globals.css";

const App = (props: any) => {
  const { Component, pageProps } = props;
  const MuiTheme = useMuiTheme(MuiThemeType.dark);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#03D498" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <title>L3 Summit</title>
        <meta
          name="description"
          content="Exclusive Event For Layer 3 Developers, Founders, and Layer 1&2 Scaling Enthusiasts."
        />
        {/*Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.l3summit.xyz" />
        <meta
          name="twitter:title"
          content="The Leading Technical Forum Exploring Layer 3 Blockchain Solutions"
        />
        <meta
          name="twitter:description"
          content="Exclusive Event For Layer 3 Developers, Founders, and Layer 1&2 Scaling Enthusiasts."
        />
        <meta
          name="twitter:image"
          content="https://www.l3summit.xyz/l3summit-preview.png"
        />

        {/*Open Graph / Facebook*/}
        <meta property="og:url" content="https://www.l3summit.xyz" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Leading Technical Forum Exploring Layer 3 Blockchain Solutions"
        />
        <meta
          property="og:description"
          content="Exclusive Event For Layer 3 Developers, Founders, and Layer 1&2 Scaling Enthusiasts."
        />
        <meta
          property="og:image"
          content="https://www.l3summit.xyz/l3summit-preview.png"
        />

        {/*<script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-310H4YXPGL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-xxx');
          `,
          }}
        />*/}
      </Head>
      <GlobalStyle />
      <MuiThemeProvider theme={MuiTheme}>
        <ThemeProvider theme={MuiTheme}>
          <HomepageNav />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

export default App;
