module.exports = {
    /**
     * Include parentheses around a sole arrow function parameter.
     * @see https://prettier.io/docs/en/options.html#arrow-function-parentheses
     */
    arrowParens: "avoid",

    /**
     * Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.
     * @see https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
     */
    htmlWhitespaceSensitivity: "ignore",

    /**
     * Whether or not to indent the code inside <script> and <style> tags in Vue files.
     * @see https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation
     */
    vueIndentScriptAndStyle: true,

    /**
     * Enforce single attribute per line in HTML, Vue and JSX.
     * @see https://prettier.io/docs/en/options.html#single-attribute-per-line
     */
    singleAttributePerLine: true,
};
