export type Todo = {
    id: number;
    text: string;
    completed: boolean;
    deleted: boolean;
    createdAt: Date;
    deletedAt?: Date;
}