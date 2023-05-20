"use client"
import { CssBaseline, ThemeProvider } from '@mui/material';
import './globals.css'
import theme  from "./theme/theme";
import NavBar from "./components/NavBar";
import StickyFooter from './components/Footer';


export default function MainLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <NavBar/>
            <section>{children}</section> 
            <StickyFooter/> 
          </body>
        </ThemeProvider>
    </html>
  )
}
