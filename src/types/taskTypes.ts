export interface Task {
	description: string;
	value: number;
	checked: boolean;
}

export interface TaskCategory {
	name: string;
	tasks: Task[];
}
