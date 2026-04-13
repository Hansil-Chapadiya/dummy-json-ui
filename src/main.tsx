import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routers } from './routers/Router.tsx'
import store from './store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)