import React from 'react'
import { usejsContext } from './jsContext'

function JavascriptChild() {
	const { functionA, functionB } = usejsContext()

	console.log('JavascriptChild Functions: ', functionA, functionB)
	return <div>JavascriptChild</div>
}

export default JavascriptChild
