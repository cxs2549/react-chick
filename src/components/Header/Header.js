import logo from '../../assets/logo.svg'
import Burger from './Burger'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import styled from 'styled-components'

const StyledHeader = styled.header`
	#signin {
		&::before {
			content: '(';
			color: black;
			margin-right: 8px;
		}
		&::after {
			content: ')';
			color: black;
			margin-left: 8px;
		}
	}
`

const Logo = () => {
	return (
		<img
			src={logo}
			alt=""
			className="w-16 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0"
		/>
	)
}

const OrderNow = () => {
	return (
		<button className="text-[#D32427] font-bold capitalize leading-5 lg:flex lg:gap-1 lg:font-semibold lg:text-white lg:bg-[#D32427] lg:px-4 lg:py-2 lg:rounded-full">
			<p>order</p>
			<p className="lg:hidden">now</p>
			<p className="hidden lg:block">food</p>
		</button>
	)
}

const SignIn = () => {
	return (
		<div className="hidden text-[#D32427] lg:flex items-center gap-3 font-semibold lg:ml-8">
			<p>Chick-fil-A One</p>
			<span id="signin" className="text-xs">
				Sign In
			</span>
		</div>
	)
}

const Search = () => {
	return (
		<div className="hidden lg:block">
			<BiSearch size={28} color="#D32427" />
		</div>
	)
}

const Links = () => {
	return (
		<nav className="hidden lg:flex xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 text-[#D32427] font-semibold gap-8">
			<a href="/">Menu</a>
			<a href="/">Stories</a>
			<a href="/">About</a>
			<a href="/">Careers</a>
		</nav>
	)
}

const Find = () => {
	return (
		<div className="hidden lg:flex items-center gap-1 flex-1 border-l h-[50px] pl-5 text-sm xl:text-base">
			<HiOutlineLocationMarker size={28} color="#D32427" />
			<p className="text-[#D32427]  font-semibold">Find a restaurant</p>
		</div>
	)
}

const Header = () => {
	return (
		<StyledHeader className="shadow">
			<div className="max-w-[1400px] mx-auto px-4 h-20 flex items-center justify-between relative lg:gap-4">
				<Burger />
				<Logo />
				<Find />
				<Links />
				<SignIn />
				<OrderNow />
				<Search />
			</div>
		</StyledHeader>
	)
}

export default Header
