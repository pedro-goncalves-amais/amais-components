<script setup>
    import { ref } from "vue";
    import AmaisInput from "./components/AmaisInput.vue";
    import AmaisSwitch from "./components/AmaisSwitch.vue";
    import ComponentShowcase from "./pages/ComponentShowcase.vue";
    import AmaisIcon from "./components/AmaisIcon.vue";

    const value = ref("Estuda+");
    const errorMessage = ref("O valor deve conter no mínimo 4 caracteres.");
    const error = ref(false);
    const type = ref("text");
</script>

<template>
    <ComponentShowcase>
        <template #component>
            <AmaisInput
                label="teste"
                :error="error"
                :error-message="errorMessage"
                :type="type"
                v-model="value"
            >
                <template #append-icon>
                    <AmaisIcon
                        class="cursor-pointer"
                        :name="
                            type == 'text'
                                ? 'IconVisibilityOff'
                                : 'IconVisibility'
                        "
                        @click="type = type == 'text' ? 'password' : 'text'"
                    />
                </template>
            </AmaisInput>
        </template>

        <template #controls>
            <AmaisSwitch
                label="error"
                v-model="error"
            />
        </template>
    </ComponentShowcase>
</template>
