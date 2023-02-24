import React from 'react'
import ReceivePropsJS from './ReceivePropsJS'
import ReceivePropsTS from './ReceivePropsTS'

type Props = {}

export default function Parent({}: Props) {
	return (
		<div>
			<h2>Passing needless Props or forgetting to pass props</h2>
			{/* With typescript, the editor is warning me */}
			<ReceivePropsTS counter={123} />
			<ReceivePropsJS counter={'123123'} />
		</div>
	)
}
