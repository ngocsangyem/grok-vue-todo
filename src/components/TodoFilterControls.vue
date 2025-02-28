<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
</script>

<template>
    <div class="flex flex-wrap gap-2 mb-4">
        <button @click="todoStore.filter = 'all'" :class="[
            'p-2 rounded',
            todoStore.filter === 'all' ? 'bg-blue-500 text-white dark:bg-blue-600' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        ]">
            All
        </button>
        <button @click="todoStore.filter = 'completed'" :class="[
            'p-2 rounded',
            todoStore.filter === 'completed' ? 'bg-blue-500 text-white dark:bg-blue-600' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        ]">
            Completed
        </button>
        <button @click="todoStore.filter = 'incomplete'" :class="[
            'p-2 rounded',
            todoStore.filter === 'incomplete' ? 'bg-blue-500 text-white dark:bg-blue-600' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        ]">
            Incomplete
        </button>
        <button @click="todoStore.filter = 'deleted'" :class="[
            'p-2 rounded',
            todoStore.filter === 'deleted' ? 'bg-blue-500 text-white dark:bg-blue-600' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        ]">
            Deleted
        </button>
    </div>
</template>