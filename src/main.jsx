import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SharedContextProvider } from "./context/SharedContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <SharedContextProvider>
    <App />
  </SharedContextProvider>
)
