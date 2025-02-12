import React from "react";

interface BaseProps {
  children: React.ReactNode;
  isDev?: boolean;
}

export default function Base({ children, isDev }: BaseProps) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>WAH.su</title>
          {isDev ? <script src="/static/js/hotreload.js"></script> : ""}
          <script src="/static/js/checkstatus.js"></script>
          <link rel="stylesheet" href="/static/css/tailwind.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Sometype+Mono&family=Ubuntu&family=Ubuntu+Mono&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />

          <meta name="description" content="A tech non-company with a whole lot of wah—100% tech, 200% wah!" />
          <meta name="keywords" content="wah.su, radiquum, invite-only, hosting" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://home.wah.su/" />
          <meta name="twitter:title" content="WAH.su" />
          <meta name="twitter:description" content="A tech non-company with a whole lot of wah—100% tech, 200% wah!" />
          <meta name="twitter:image" content="https://home.wah.su/static/og/opengraph.png" />

          <meta property="og:title" content="WAH.su" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://home.wah.su/" />
          <meta property="og:image" content="https://home.wah.su/static/og/opengraph.png" />
          <meta property="og:description" content="A tech non-company with a whole lot of wah—100% tech, 200% wah!" />
        </head>
        <body className="bg-[#1A0F05] container mx-auto max-w-[1210px] text-white py-8 overflow-x-hidden">
          {children}
        </body>
      </html>
    </>
  );
}
