module.exports = {
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-recommended", "prettier", "plugin:storybook/recommended"],
  parser: "vue-eslint-parser",
  rules: {
    // https://eslint.vuejs.org/rules/vue/html-indent
    "vue/html-indent": ["error", 4, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    // https://eslint.vuejs.org/rules/html-self-closing.html
    "vue/html-self-closing": ["error", {
      html: {
        void: "always",
        normal: "always",
        component: "always"
      },
      svg: "always",
      math: "always"
    }]
  }
};