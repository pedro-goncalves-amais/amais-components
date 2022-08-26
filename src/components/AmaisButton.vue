<script>
    export default {
        name: "AmaisButton",
        props: {
            primary: {
                type: Boolean,
                default: false,
            },
            secondary: {
                type: Boolean,
                default: false,
            },
            inverse: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            loading: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            classes() {
                return [
                    "amais-button",
                    this.primary ? "primary" : "",
                    this.secondary ? "secondary" : "",
                    this.inverse ? "inverse" : "",
                    this.disabled ? "disabled" : "",
                    this.loading ? "loading" : "",
                ].join(" ");
            },
        },
    };
</script>

<template>
    <button
        :class="classes"
        v-wave="!disabled && !loading"
    >
        <div class="content">
            <slot />
        </div>

        <div
            class="loader"
            v-if="loading"
        >
            <span class="spinner"></span>
        </div>
    </button>
</template>

<style lang="postcss" scoped>
    .amais-button {
        @apply h-10 px-6;
        @apply font-medium;
        @apply border border-transparent rounded-full;
        @apply transition-colors;
        @apply relative;

        .content {
            @apply h-full;
            @apply transition-opacity;
            @apply opacity-100;
            @apply flex flex-row items-center justify-between gap-2;
        }

        &.primary {
            @apply bg-amais-500 hover:bg-amais-400 active:bg-amais-300;
            @apply text-white fill-white;

            &.disabled {
                @apply bg-amais-100;
            }
        }

        &.primary.inverse {
            @apply bg-white hover:bg-amais-100 active:bg-white;
            @apply text-amais-500 fill-amais-500;

            &.loading {
                @apply bg-white hover:bg-white active:bg-white;

                .loader {
                    .spinner {
                        @apply border-amais-500 border-t-transparent;
                    }
                }
            }

            &.disabled {
                @apply bg-amais-200;
            }
        }

        &.secondary {
            @apply bg-transparent hover:bg-amais-500 active:bg-amais-100;
            @apply text-amais-500 fill-amais-500 hover:text-white hover:fill-white active:text-amais-500 active:fill-amais-500;
            @apply border-amais-500 active:border-amais-500;

            &.loading {
                @apply bg-amais-100 hover:bg-amais-100 active:bg-amais-100;

                .loader {
                    .spinner {
                        @apply border-amais-500 border-t-transparent;
                    }
                }
            }

            &.disabled {
                @apply bg-transparent hover:bg-transparent active:bg-transparent;
                @apply text-amais-100 fill-amais-100 hover:text-amais-100 hover:fill-amais-100 active:text-amais-100 active:fill-amais-100;
                @apply border-amais-100 hover:border-amais-100 active:border-amais-100;
            }
        }

        &.secondary.inverse {
            @apply bg-transparent hover:bg-white active:bg-white;
            @apply text-white fill-white hover:text-amais-500 hover:fill-amais-500 active:text-amais-500 active:fill-amais-500;
            @apply border-white hover:border-white active:border-white;

            &.loading {
                @apply bg-white;
                @apply border-white;
            }

            &.disabled {
                @apply bg-transparent hover:bg-transparent active:bg-transparent;
                @apply text-amais-100 fill-amais-100 hover:text-amais-100 hover:fill-amais-100 active:text-amais-100 active:fill-amais-100;
                @apply border-amais-100 hover:border-amais-100 active:border-amais-100;
            }
        }

        &.loading {
            @apply bg-amais-300 hover:bg-amais-300;
            .content {
                @apply opacity-0;
            }

            .loader {
                @apply opacity-100;
            }
        }

        .loader {
            @apply w-fit h-fit;
            @apply absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4;
            @apply opacity-0;

            .spinner {
                @apply w-5 h-5;
                @apply block;
                @apply border-2 border-white border-t-transparent rounded-full;
                @apply animate-spin;
            }
        }
    }
</style>
