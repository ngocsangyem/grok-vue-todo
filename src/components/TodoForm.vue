<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';
import { useDebounceFn } from '@vueuse/core';

const todoStore = useTodoStore();
const text = ref('');

const debouncedAddTodo = useDebounceFn(() => {
    todoStore.createTodo(text.value);
    text.value = '';
}, 300);

function addTodo() {
    debouncedAddTodo();
}
</script>

<template>
    <form @submit.prevent="addTodo" class="flex space-x-2 mb-4">
        <input v-model="text" type="text" placeholder="Add a new todo"
            class="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            :disabled="!text.trim()">
            Add
        </button>
    </form>
</template>