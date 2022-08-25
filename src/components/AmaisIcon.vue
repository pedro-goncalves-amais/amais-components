<script>
    import { defineComponent, computed } from "vue";

    export default defineComponent({
        name: "AmaisIcon",
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        setup(props) {
            const symbolId = computed(() => `#${props.name}`);
            return { symbolId };
        },
    });
</script>

<template>
    <svg
        aria-hidden="true"
        class="amais-icon"
    >
        <use :href="symbolId" />
    </svg>
</template>

<style lang="postcss" scoped>
    .amais-icon {
        @apply w-5 h-5;
    }
</style>
