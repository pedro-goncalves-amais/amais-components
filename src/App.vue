<script>
    import AmaisButton from "./components/AmaisButton.vue";
    import AmaisIcon from "./components/AmaisIcon.vue";
    import ComponentShowcase from "./pages/ComponentShowcase.vue";

    export default {
        name: "App",
        components: {
            ComponentShowcase,
            AmaisButton,
            AmaisIcon,
        },
        data: () => ({
            primary: false,
            secondary: false,
            inverse: false,
            loading: false,
            disabled: false,
        }),
    };
</script>

<template>
    <ComponentShowcase>
        <template #component>
            <AmaisButton
                :primary="primary"
                :secondary="secondary"
                :inverse="inverse"
                :loading="loading"
                :disabled="disabled"
            >
                <AmaisIcon name="IconLike" />
                teste
            </AmaisButton>
        </template>

        <template #controls>
            <label class="daisy-label cursor-pointer justify-start gap-2">
                <input
                    type="checkbox"
                    class="daisy-toggle daisy-toggle-sm daisy-toggle-amais-500"
                    v-model="primary"
                />
                <span class="label-text">Primary</span>
            </label>
            <div>
                <input
                    type="checkbox"
                    v-model="secondary"
                />
                <label>Secondary</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    v-model="inverse"
                />
                <label>Inverse</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    v-model="loading"
                />
                <label>Loading</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    v-model="disabled"
                />
                <label>Disabled</label>
            </div>
        </template>
    </ComponentShowcase>
</template>
