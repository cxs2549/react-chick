import Hamburger from 'hamburger-react'
import { useState } from 'react'

const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
	return (
		<div className="-ml-1 lg:hidden">
			<Hamburger size={30} toggled={isOpen} toggle={setOpen} color="#D32427" />
		</div>
	)
}

export default Burger
