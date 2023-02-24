import React from 'react'

type Props = {
	array: string[]
}

const ErrorProofParent = ({ array }: Props) => {
	return (
		<div>
			{array.map((i) => (
				<h1>i</h1>
			))}
		</div>
	)
}

const ErrorProof = () => {
	return <ErrorProofParent array={[]} />
}

export default ErrorProof
