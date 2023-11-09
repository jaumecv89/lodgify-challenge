import React from "react";

interface ProgressBarProps {
	completionPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completionPercentage }) => {
	const percentage = Math.round(completionPercentage);

	return (
		<div className="w-full my-2 min-h-[26px] bg-light-gray rounded-full">
			{percentage !== 0 && (
				<div
					className="bg-light-green min-w-[2rem] text-sm font-medium text-white text-right p-1.5 pr-4 leading-none rounded-full"
					style={{ width: `${percentage}%` }}
				>
					{`${percentage}%`}
				</div>
			)}
		</div>
	);
};

export default ProgressBar;
