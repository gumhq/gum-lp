import Head from 'next/head';

function DefaultHead () {
  return (
    <Head>
      <title>{'Gum'}</title>
      <meta name='description' content={'Build Decentralized Social Apps That Scale'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="theme-color" content="white" />
      <link rel='icon' href='/favicon.png' />
      <meta name='og:site_name' content={'Gum'} />
      <meta property='og:type' content={'website'} />
      <meta property='og:url' content={'https://gum.fun'} />
      <meta property='og:title' content={'Gum'} />
      <meta property='og:description' content={'Build Decentralized Social Apps That Scale'} />
      <meta property='og:image' content={''} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={'https://gum.fun'} />
      <meta property='twitter:title' content={'Gum'} />
      <meta property='twitter:description' content={'Build Decentralized Social Apps That Scale'} />
      <meta property='twitter:image' content={''} />
    </Head>
  );
}

export { DefaultHead };