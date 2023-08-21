import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Firebase/AuthProvider/AuthProvider'
import router from './Routes/Router/Router'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>,
    </QueryClientProvider>
  </ThemeProvider>
)
