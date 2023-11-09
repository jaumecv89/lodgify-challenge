import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import TaskList from "./components/TaskList";
import { fetchTaskList } from "./services/api";
import { TaskCategory } from "./types/taskTypes";
import { calculateCompletionPercentage } from "./utils/taskUtils";

function App() {
	const [tasks, setTasks] = useState<TaskCategory[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchTaskList();
				setTasks(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data: ", error);
				setError("An error occurred while fetching data.");
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleCheckboxClick = (categoryIndex: number, taskIndex: number) => {
		const updatedTasks = [...tasks];
		updatedTasks[categoryIndex].tasks[taskIndex].checked =
			!updatedTasks[categoryIndex].tasks[taskIndex].checked;
		setTasks(updatedTasks);
	};

	return (
		<section className="flex p-4 items-center justify-center min-h-screen">
			<div className="bg-white w-full sm:max-w-3xl p-4 rounded-lg border border-gray-300">
				<div className="p-4">
					<h1 className="text-xl font-bold">Lodgify Grouped Tasks</h1>
					{!loading && tasks && !error && (
						<ProgressBar
							completionPercentage={calculateCompletionPercentage(
								tasks
							)}
						/>
					)}
				</div>
				{!loading && tasks && !error && (
					<TaskList
						tasks={tasks}
						handleCheckboxClick={handleCheckboxClick}
					/>
				)}
				{loading && (
					<p className="text-light-green">
						Loading data from the API...
					</p>
				)}
				{error && <p className="text-red-500">{error}</p>}
			</div>
		</section>
	);
}

export default App;
