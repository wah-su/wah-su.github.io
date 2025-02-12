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
        </head>
        <body className="bg-[#1A0F05] container mx-auto max-w-[1210px] text-white py-8 overflow-x-hidden">
          {children}
        </body>
      </html>
    </>
  );
}
