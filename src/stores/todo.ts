// src/stores/todo.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Todo } from '@/types/todo';
import { useLocalStorage } from '@vueuse/core';

export const useTodoStore = defineStore('todo', () => {
    const todos = useLocalStorage<Todo[]>('todos', []);
    const filter = ref<'all' | 'completed' | 'incomplete' | 'deleted'>('all');

    const filteredTodos = computed(() => {
        switch (filter.value) {
            case 'completed':
                return todos.value.filter((todo) => todo.completed && !todo.deleted);
            case 'incomplete':
                return todos.value.filter((todo) => !todo.completed && !todo.deleted);
            case 'deleted':
                return todos.value.filter((todo) => todo.deleted);
            default:
                return todos.value.filter((todo) => !todo.deleted);
        }
    });

    function createTodo(text: string) {
        if (!text.trim()) return;
        const newTodo: Todo = {
            id: Date.now(), // Simple unique ID using timestamp
            text,
            completed: false,
            deleted: false,
            createdAt: new Date(),
        };
        todos.value.push(newTodo);
    }

    function deleteTodo(id: number) {
        const todo = todos.value.find((t) => t.id === id);
        if (todo) {
            todo.deleted = true;
            todo.deletedAt = new Date();
        }
    }

    function undoDelete(id: number) {
        const todo = todos.value.find((t) => t.id === id);
        if (todo) {
            todo.deleted = false;
            todo.deletedAt = undefined;
        }
    }

    function toggleComplete(id: number) {
        const todo = todos.value.find((t) => t.id === id);
        if (todo) todo.completed = !todo.completed;
    }

    return {
        todos,
        filter,
        filteredTodos,
        createTodo,
        deleteTodo,
        undoDelete,
        toggleComplete,
    };
});