import { Navigation } from "../components/Navigation";

export const metadata = {
  title: "Nextjs First App",
  description: "My first Nextjs app",
  keywords: "nextjs, react, javascript",
};

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        />
      </head>
      <body>
        <Navigation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
