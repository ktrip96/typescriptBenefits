import React from 'react'

type Props = {
	counter: number
}

const ReceivePropsTS = ({ counter }: Props) => {
	return <div>Typescript: {counter}</div>
}

export default ReceivePropsTS
