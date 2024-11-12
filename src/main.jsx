
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { ContextApi } from './components/ContextApi.jsx'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
  
    
  
  ,
)
