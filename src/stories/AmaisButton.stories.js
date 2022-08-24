import AmaisButton from "../../src/components/AmaisButton.vue";

export default {
    title: "Buttonasd",
    component: AmaisButton,
};

const Template = args => ({
    // Components used in your story `template` are defined in the `components` object
    components: { AmaisButton },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
        <AmaisButton v-bind="args">
            teste
        </AmaisButton>
    `,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    primary: true,
};
