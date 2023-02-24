import { createContext, useContext } from 'react'

const jsContext = createContext(null)

const JavascriptContext = ({ children }) => {
	const functionA = () => {
		console.log('Function A')
		return
	}

	// if i change this function, javascript is completely fine with that
	const functionB = () => {
		console.log('Function B')
		return
	}

	return (
		<jsContext.Provider
			value={{
				functionA,
				functionB,
			}}
		>
			{children}
		</jsContext.Provider>
	)
}

const usejsContext = () => useContext(jsContext)

export { usejsContext }
export default JavascriptContext
