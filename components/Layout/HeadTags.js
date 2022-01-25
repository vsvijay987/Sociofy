import Head from "next/head";

const HeadTags = () => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/sociofy.png" sizes="16*16" type="image/png" />

      <link rel="stylesheet" type="text/css" href="/listMessages.css" />

      <link rel="stylesheet" type="text/css" href="/styles.css" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Dongle:wght@300&family=Poppins:wght@100&family=Rubik:wght@300&display=swap"
        rel="stylesheet"
      />

      <title>Sociofy</title>
    </Head>
  </>
);
export default HeadTags;
