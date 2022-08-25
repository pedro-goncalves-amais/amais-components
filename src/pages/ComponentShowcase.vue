<script setup></script>

<template>
    <div class="component-showcase">
        <div class="component-container">
            <slot name="component" />
        </div>

        <div class="controls-container">
            <slot name="controls" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
    .component-showcase {
        @apply w-screen h-screen p-10;
        @apply bg-white;
        @apply grid grid-rows-1 grid-cols-3 gap-5;
        grid-template-areas: "component component controls";

        .component-container {
            @apply p-5;
            @apply bg-gray-100;
            @apply border border-gray-300 rounded-xl;
            @apply flex justify-center items-center;
            grid-area: component;
        }

        .controls-container {
            @apply p-5;
            @apply border border-gray-300 rounded-xl;
        }
    }
</style>
