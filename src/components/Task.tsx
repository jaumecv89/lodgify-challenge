import React, { useState } from "react";
import { LuClipboardCheck, LuClipboardList } from "react-icons/lu";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { TaskCategory } from "../types/taskTypes";

interface TaskProps extends TaskCategory {
	categoryIndex: number;
	handleCheckboxClick: (categoryIndex: number, taskIndex: number) => void;
}

const Task: React.FC<TaskProps> = ({
	categoryIndex,
	name,
	tasks,
	handleCheckboxClick,
}) => {
	const [isExpanded, setIsExpanded] = useState(
		tasks.some((task) => task.checked)
	);

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded);
	};

	const areAllTasksChecked = tasks.every((task) => task.checked);

	return (
		<li className="flex flex-col p-4 gap-4 select-none not-last:border-b">
			<div
				className="flex items-center justify-between gap-8 cursor-pointer"
				onClick={toggleExpansion}
			>
				<div
					className={`flex items-center gap-4 ${
						areAllTasksChecked && "text-light-green"
					}`}
				>
					{areAllTasksChecked ? (
						<LuClipboardCheck />
					) : (
						<LuClipboardList />
					)}
					{name}
				</div>
				<div className="flex items-center gap-2 text-sm text-gray-400">
					{isExpanded ? "Hide" : "Show"}
					{isExpanded ? <SlArrowUp /> : <SlArrowDown />}
				</div>
			</div>
			{isExpanded && (
				<ul className="flex flex-col ml-2 gap-2">
					{tasks.map((task, index) => (
						<li
							key={task.description}
							className="flex gap-4 items-center"
						>
							<div
								className="text-lg cursor-pointer"
								onClick={() =>
									handleCheckboxClick(categoryIndex, index)
								}
							>
								{task.checked ? (
									<RiCheckboxFill className="text-light-green" />
								) : (
									<RiCheckboxBlankLine className="text-gray-400" />
								)}
							</div>
							<span>{task.description}</span>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default Task;
