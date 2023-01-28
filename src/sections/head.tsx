import Head from 'next/head';

const OG_IMAGE = 'https://n6hf2tsvd5arodir7eom3qebwnl5fvstuwezbamh6f7wdndzzbqq.arweave.net/b45dTlUfQRcNEfkczcCBs1fS1lOliZCBh_F_YbR5yGE';

function DefaultHead () {
  return (
    <Head>
      <title>{'Gum'}</title>
      <meta name='description' content={'Solana Social Legos: Build sticky apps with ease'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="theme-color" content="white" />
      <link rel='icon' href='/favicon.png' />
      <meta name='og:site_name' content={'Gum'} />
      <meta property='og:type' content={'website'} />
      <meta property='og:url' content={'https://gum.fun'} />
      <meta property='og:title' content={'Gum'} />
      <meta property='og:description' content={'Solana Social Legos: Build sticky apps with ease'} />
      <meta property='og:image' content={OG_IMAGE} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={'https://gum.fun'} />
      <meta property='twitter:title' content={'Gum'} />
      <meta property='twitter:description' content={'Solana Social Legos: Build sticky apps with ease'} />
      <meta property='twitter:image' content={OG_IMAGE} />
    </Head>
  );
}

export { DefaultHead };