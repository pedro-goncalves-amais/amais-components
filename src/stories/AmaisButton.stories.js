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
    defaultSlot: "<b>aaaaaa</b>",
};
