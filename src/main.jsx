import { createRoot } from 'react-dom/client'
import './index.css'
import {App, Hello} from './App.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <Hello />
    </>
)
