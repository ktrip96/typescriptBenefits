import Parent from './needlessProps/Parent'

function App() {
	return (
		<div className='h-screen flex flex-col items-center p-4'>
			<h1 className='text-3xl m-5'>Typescript vs Javascript</h1>
			<Parent />
		</div>
	)
}

export default App
