import { ReactElement } from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
const RootLayout = ({ children }: any): ReactElement => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>
        <div className="lg:mx-[30vw] md:mx-[25vw] rounded-md border-current bg-secondary-white">
          <Navbar/>
          {children}
          </div>
      </body>
    </html>
  )
};

export default RootLayout;
