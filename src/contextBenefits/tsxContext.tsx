import { createContext, useContext } from 'react'

type Props = {
	children: React.ReactNode
}

export type tsContextType = {
	functionA: () => void
	functionB: () => void
}

const tsContext = createContext<tsContextType>({} as tsContextType)

const TypescriptContextProvider = ({ children }: Props) => {
	const functionA = () => {
		console.log('Function A')
		return
	}

	const functionB = () => {
		console.log('Function B')
		return
	}

	return (
		<tsContext.Provider
			value={{
				functionA,
				functionB,
			}}
		>
			{children}
		</tsContext.Provider>
	)
}

const useTsContext = () => useContext(tsContext)

export { useTsContext }
export default TypescriptContextProvider
