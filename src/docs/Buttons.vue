<script>
    import AmaisButton from "./components/AmaisButton.vue";
    import AmaisIcon from "./components/AmaisIcon.vue";
    import AmaisSwitch from "./components/AmaisSwitch.vue";
    import ComponentShowcase from "./pages/ComponentShowcase.vue";

    export default {
        name: "Buttons",
        components: {
            ComponentShowcase,
            AmaisButton,
            AmaisIcon,
            AmaisSwitch,
        },
        data: () => ({
            primary: true,
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
            <AmaisSwitch
                label="primary"
                v-model="primary"
            />
            <AmaisSwitch
                label="secondary"
                v-model="secondary"
            />
            <AmaisSwitch
                label="inverse"
                v-model="inverse"
            />
            <AmaisSwitch
                label="loading"
                v-model="loading"
            />
            <AmaisSwitch
                label="disabled"
                v-model="disabled"
            />
        </template>
    </ComponentShowcase>
</template>
