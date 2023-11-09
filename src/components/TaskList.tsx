import React from "react";
import { TaskCategory } from "../types/taskTypes";
import Task from "./Task";

interface TaskListProps {
	tasks: TaskCategory[];
	handleCheckboxClick: (categoryIndex: number, taskIndex: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, handleCheckboxClick }) => {
	return (
		<ul className="border border-gray-200 rounded-lg">
			{tasks.map((taskCategory, categoryIndex) => (
				<Task
					key={taskCategory.name}
					{...taskCategory}
					categoryIndex={categoryIndex}
					handleCheckboxClick={handleCheckboxClick}
				/>
			))}
		</ul>
	);
};

export default TaskList;
