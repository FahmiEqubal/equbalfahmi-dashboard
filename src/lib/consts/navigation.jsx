import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineQuestionMarkCircle,
	HiOutlineCurrencyDollar,
	HiGift
} from 'react-icons/hi'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <HiOutlineCurrencyDollar />
	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <HiGift />
	},
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	
	{
		key: 'support',
		label: 'Equbal Fahmi',
		description: 'Manager',
		image: "../deo.jpeg", 
		path: '/support',
	}
	  
]