import type{TaskModel, TaskType} from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        [key in TaskType]: number;
    };
};