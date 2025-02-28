<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import type { Todo } from '@/types/todo';
import { useTimeAgo } from '@vueuse/core';


const props = defineProps<{
    todo: Todo;
}>();

const todoStore = useTodoStore();

const isDeleting = ref(false);

const createdAgo = useTimeAgo(() => props.todo.createdAt);
const deletedAgo = useTimeAgo(() => props.todo.deletedAt ?? '');

function toggleComplete() {
    todoStore.toggleComplete(props.todo.id);
}

async function deleteTodo() {
    isDeleting.value = true;
    await new Promise((resolve) => setTimeout(resolve, 300)); // Wait for animation to complete
    todoStore.deleteTodo(props.todo.id);
}

function undoDelete() {
    todoStore.undoDelete(props.todo.id);
}
</script>

<template>
    <li v-if="!isDeleting" v-motion :initial="{ opacity: 1, scale: 1 }"
        :leave="{ opacity: 0, scale: 0.7, transition: { duration: 300 } }"
        class="flex flex-wrap items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded shadow-md dark:shadow-gray-700">
        <span :class="{ 'line-through text-gray-500 dark:text-gray-400': todo.completed }"
            class="flex-grow text-gray-900 dark:text-gray-100">
            {{ todo.text }}
        </span>
        <button v-if="!todo.deleted" @click="toggleComplete"
            class="p-1 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700">
            {{ todo.completed ? 'Undo' : 'Complete' }}
        </button>
        <button v-if="!todo.deleted" @click="deleteTodo"
            class="p-1 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700">
            Delete
        </button>
        <button v-else @click="undoDelete"
            class="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
            Undo Delete
        </button>
        <span class="text-sm text-gray-500">{{ createdAgo }}</span>
        <span v-if="todo.deletedAt" class="text-sm text-gray-500">
            Deleted: {{ deletedAgo }}
        </span>
    </li>
</template>