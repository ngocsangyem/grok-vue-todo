<!-- src/App.vue -->
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import TodoForm from '@/components/TodoForm.vue';
import TodoFilterControls from '@/components/TodoFilterControls.vue';
import TodoList from '@/components/TodoList.vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

// Manage dark mode with local storage persistence
const isDark = useDark({
    storageKey: 'theme', // Key for local storage
    valueDark: 'dark',   // Class applied for dark mode
    valueLight: 'light', // Class applied for light mode
});
const toggleDark = useToggle(isDark);
</script>

<template>
    <div :class="{ dark: isDark }"
        class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div class="container mx-auto p-4 max-w-2xl">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold">Todo App</h1>
                <button @click="toggleDark()"
                    class="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                    <SunIcon v-if="isDark" class="h-6 w-6 text-yellow-500" />
                    <MoonIcon v-else class="h-6 w-6 text-gray-500" />
                </button>
            </div>
            <TodoForm />
            <TodoFilterControls />
            <TodoList />
        </div>
    </div>
</template>