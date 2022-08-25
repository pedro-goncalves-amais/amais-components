import AmaisButton from "../../src/components/AmaisButton.vue";

export default {
    title: "amais-components/Button",
    component: AmaisButton,
};

const Template = args => ({
    components: { AmaisButton },

    setup() {
        return { args };
    },

    template: `
        <AmaisButton v-bind="args">
            <template v-if="${"defaultSlot" in args}" v-slot>
                ${args.defaultSlot}
            </template>
        </AmaisButton>
    `,
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    secondary: false,
    inverse: false,
    disabled: false,
    loading: false,
    defaultSlot: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    secondary: true,
    inverse: false,
    disabled: false,
    loading: false,
    defaultSlot: "Button",
};
