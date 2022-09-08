<script setup>
    import { computed, ref } from "vue";
    import AmaisTextField from "./components/AmaisTextField.vue";
    import AmaisSwitch from "./components/AmaisSwitch.vue";
    import ComponentShowcase from "./pages/ComponentShowcase.vue";
    import AmaisIcon from "./components/AmaisIcon.vue";

    const primary = ref(false);
    const value = ref("Es");
    const errorMessage = ref("O valor deve conter no mínimo 4 caracteres.");
    const error = ref(false);
</script>

<template>
    <ComponentShowcase>
        <template #component>
            <AmaisTextField
                label="teste"
                :error="error"
                :error-message="errorMessage"
                v-model="value"
            >
                <template #append-icon>
                    <AmaisIcon
                        class="cursor-pointer"
                        name="IconBook"
                        @click="value = undefined"
                    />
                </template>
            </AmaisTextField>
        </template>

        <template #controls>
            <AmaisSwitch
                label="primary"
                v-model="primary"
            />
            <AmaisSwitch
                label="error"
                v-model="error"
            />
        </template>
    </ComponentShowcase>
</template>
