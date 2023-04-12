import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        {/* noindex and nofollow robots */}
        <meta name="robots" content="noindex, nofollow" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ccb9e821cd9a4f889bc059a799b2f6bf"}'></script>
      </body>
    </QwikCityProvider>
  );
});
