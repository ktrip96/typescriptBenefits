import React from 'react'
import { useTsContext } from './tsxContext'

type childType = {
	random: number
}

type fnType = {
	test: childType
	test2: number
	test3: number
}

const randomFn = (): fnType => {
	return {
		test: {
			random: 1,
		},
		test2: 2,
		test3: 3,
	}
}

const TypescriptChild = () => {
	const { functionA, functionB } = useTsContext()
	console.log('Typescript  Functions: ', functionA, functionB)

	const value = randomFn().test.random

	return <div>TypescriptChild</div>
}

export default TypescriptChild
