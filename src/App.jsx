import JavascriptChild from './contextBenefits/JavascriptChild'
import TypescriptChild from './contextBenefits/TypescriptChild'
import ErrorProof from './errorProof/ErrorProof'
import NeedlessProps from './needlessProps/NeedlessProps'

function App() {
	return (
		<div className='h-screen flex flex-col items-center p-4'>
			<h1 className='text-3xl m-5'>Typescript vs Javascript</h1>
			{/* NeedlessProps */}
			{/* <NeedlessProps /> */}

			{/* contextBenefits */}
			{/* <JavascriptChild />
			<TypescriptChild /> */}

			{/* ErrorProofness */}
			<ErrorProof />
		</div>
	)
}

export default App
