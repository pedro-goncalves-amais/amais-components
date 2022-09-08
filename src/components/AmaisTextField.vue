<script setup>
    import { computed } from "vue";
    import { useClasses } from "@/composables/useClasses";
    import AmaisIcon from "@/components/AmaisIcon.vue";

    const props = defineProps({
        clearable: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
        errorMessage: {
            type: String,
            default: "error",
        },
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: undefined,
            default: undefined,
        },
        placeholder: {
            type: String,
            default: "",
        },
        primary: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "text",
        },
    });

    const classes = computed(() => {
        return useClasses([
            "amais-text-field",
            props.clearable ? "clearable" : "",
            props.error ? "error" : "",
            props.modelValue ? "" : "empty",
            props.primary ? "primary" : "",
        ]);
    });
</script>

<template>
    <fieldset :class="classes">
        <label class="label">{{ label }}</label>

        <div class="wrapper">
            <input
                class="input"
                :type="type"
                :placeholder="placeholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            />

            <slot name="append-icon" />
        </div>

        <span
            v-if="error"
            class="error-message"
        >
            {{ errorMessage }}
        </span>
    </fieldset>
</template>

<style lang="postcss" scoped>
    .amais-text-field {
        @apply relative block w-full;

        .label {
            @apply px-1;
            @apply absolute -top-2 left-3;
            @apply text-xs text-gray-400 bg-white;
            @apply pointer-events-none;
        }

        &.empty {
            .label {
                @apply top-3 left-4;
                @apply px-0;
                @apply text-sm;
                @apply transition-all;
            }
        }

        .wrapper {
            @apply flex flex-row items-center justify-between gap-2;
            @apply bg-white;
            @apply outline outline-gray-400 outline-1 rounded-lg;
            @apply focus:outline-2 focus:outline-amais-500;
            @apply px-4;
            .input {
                @apply w-full h-11;
                @apply outline-none border-none;
            }
        }

        &:focus-within {
            .label {
                @apply px-1;
                @apply -top-2 left-3;
                @apply text-xs text-amais-500 bg-white;
            }

            .wrapper {
                @apply outline-2 outline-amais-500;
            }
        }

        &.error,
        &.error:focus-within {
            .label {
                @apply text-amais-error-500;
            }
            .wrapper {
                @apply outline-amais-error-500 focus:outline-amais-error-500;
            }
        }

        .error-message {
            @apply inline-block;
            @apply text-xs;
            @apply w-full px-4;
            @apply text-amais-error-500;
        }
    }
</style>
