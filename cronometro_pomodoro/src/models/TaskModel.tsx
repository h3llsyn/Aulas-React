export type TaskType = 'workTime' | 'shortBreakTime' | 'longBreakTime';

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeData: number | null;
    interrupDate: number | null;
    type: TaskType;
};