import React from 'react'

function ErrorProofParent({ array }) {
	return (
		<div>
			{array.map((i) => (
				<h1>i</h1>
			))}
		</div>
	)
}

function ErrorProof() {
	return <ErrorProofParent array={[]} />
}

export default ErrorProof
