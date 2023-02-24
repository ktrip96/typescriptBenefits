import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TypesriptContextProvider from './contextBenefits/tsxContext'
import JavascriptContext from './contextBenefits/jsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<TypesriptContextProvider>
			<JavascriptContext>
				<App />
			</JavascriptContext>
		</TypesriptContextProvider>
	</React.StrictMode>
)
