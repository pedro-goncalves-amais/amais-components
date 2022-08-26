<script>
    export default {
        name: "AmaisSwitch",
        props: {
            label: {
                type: String,
                default: "",
            },
            modelValue: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            classes() {
                return ["amais-switch"].join(" ");
            },
        },
    };
</script>

<template>
    <label :class="classes">
        <input
            type="checkbox"
            class="toggle"
            :checked="modelValue"
            @input="$emit('update:modelValue', $event.target.checked)"
        />
        <span class="label">{{ label }}</span>
    </label>
</template>

<style lang="postcss" scoped>
    .amais-switch {
        @apply daisy-label;
        @apply justify-start gap-2;
        @apply cursor-pointer;

        .toggle {
            @apply daisy-toggle daisy-toggle-sm;
        }

        .label {
            @apply daisy-label-text;
        }
    }
</style>
