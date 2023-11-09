import { TaskCategory } from "../types/taskTypes";

export const calculateCompletionPercentage = (tasks: TaskCategory[]) => {
	const checkedTasks = tasks.flatMap((category) =>
		category.tasks.filter((task) => task.checked)
	);

	if (checkedTasks.length === 0) {
		return 0;
	}

	const sumOfValues = checkedTasks.reduce((acc, task) => acc + task.value, 0);

	return (
		(sumOfValues * 100) /
		tasks.reduce(
			(acc, category) =>
				acc + category.tasks.reduce((acc, task) => acc + task.value, 0),
			0
		)
	);
};
