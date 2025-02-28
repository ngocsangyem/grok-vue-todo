<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
import { useMotionVariants } from '@vueuse/motion';
import TodoItem from '@/components/TodoItem.vue';

const todoStore = useTodoStore();

const variants = useMotionVariants({
    initial: { opacity: 0, x: -20 },
    enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 300, staggerChildren: 0.1 },
    },
    leave: { opacity: 0, x: 20, transition: { duration: 300 } },
});
</script>

<template>
    <ul class="space-y-2">
        <transition-group name="filter">
            <div v-for="todo in todoStore.filteredTodos" :key="todo.id">
                <TodoItem v-motion :variants="variants" :todo="todo" />
            </div>
        </transition-group>
    </ul>
</template>

<style scoped>
.filter-enter-active,
.filter-leave-active {
    transition: all 0.3s ease;
}

.filter-enter-from,
.filter-leave-to {
    opacity: 0;
}
</style>