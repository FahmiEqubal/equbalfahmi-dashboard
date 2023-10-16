import React from 'react';
import {
	DollarCircleFilled,
	FileTextFilled,
	WalletFilled,
	ShoppingFilled,
} from "@ant-design/icons";

export default function DashboardStatsGrid() {
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400 sm:flex-row">
					<DollarCircleFilled className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Earning</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$198k</strong>
					</div>
					<div>
						<span className="text-sm text-green-500 pl-2">-37.8%</span>
						<span className="text-sm  pl-2">this month</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-violet-400 sm:flex-row">
					<FileTextFilled className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
					</div>
					<div>
						<span className="text-sm text-red-500 pl-2">-2%</span>
						<span className="text-sm  pl-2">this month</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-300 sm:flex-row">
					<WalletFilled className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Balance</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$2.4k</strong>
					</div>
					<div>
						<span className="text-sm text-red-500 pl-2">-2%</span>
						<span className="text-sm  pl-2">this month</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-400 sm:flex-row">
					<ShoppingFilled className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$89K</strong>
					</div>
					<div>
						<span className="text-sm text-green-500 pl-2">-11%</span>
						<span className="text-sm  pl-2">this month</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	);
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}
