import './globals.css';

export const metadata = {
  title: 'Simon Sutherland - Full Stack Developer',
  description: 'Portfolio of Simon Sutherland - Full Stack Developer specializing in React, Node.js, and modern web technologies',
  keywords: 'full stack developer, react, node.js, javascript, web development, portfolio',
  authors: [{ name: 'Simon Sutherland' }],
  openGraph: {
    title: 'Simon Sutherland - Full Stack Developer',
    description: 'Portfolio showcasing modern web development projects and skills',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}