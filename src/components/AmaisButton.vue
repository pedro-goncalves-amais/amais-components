<script>
export default {
    name: "AmaisButton",
    props: {
        primary: {
            type: Boolean,
            default: true,
        },
        inverse: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "amais-button",
                this.primary ? "primary" : "",
                this.inverse ? "inverse" : "",
            ].join(" ");
        },
    },
};
</script>

<template>
    <button :class="classes">
        <slot />
    </button>
</template>

<style lang="postcss" scoped>
.amais-button {
    @apply h-10 px-6 rounded-full;

    @apply font-medium;
    &.primary {
        @apply bg-amais-500 text-white;
        @apply bg-amais-500 hover:bg-amais-400;

        &.inverse {
            @apply bg-white hover:bg-amais-400;
        }
    }
}
</style>
