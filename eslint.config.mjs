import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["projects/**/*"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:rxjs/recommended",
).map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@angular-eslint/component-class-suffix": ["error", {
            suffixes: ["Component", "Page"],
        }],

        "@angular-eslint/directive-selector": ["error", {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
        }],

        "@angular-eslint/component-selector": ["error", {
            type: "element",
            prefix: "app",
            style: "kebab-case",
        }],

        "prefer-template": "error",
        "prefer-arrow-callback": "error",
        eqeqeq: "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@angular-eslint/contextual-decorator": "error",
        "@angular-eslint/no-attribute-decorator": "error",
        "@angular-eslint/no-forward-ref": "error",
        "@angular-eslint/no-input-prefix": "error",
        "@angular-eslint/no-lifecycle-call": "error",
        "@angular-eslint/no-pipe-impure": "error",
        "@angular-eslint/no-queries-metadata-property": "error",
        "@angular-eslint/use-component-view-encapsulation": "error",
        "@angular-eslint/use-injectable-provided-in": "error",
        "rxjs/no-exposed-subjects": "warn",
        "rxjs/no-subclass": "error",
        "rxjs/no-subject-value": "error",
        "rxjs/no-topromise": "error",
        "rxjs/no-unsafe-catch": "error",
        "rxjs/no-unsafe-first": "error",
        "rxjs/no-unsafe-switchmap": "error",
        "rxjs/throw-error": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-useless-constructor": "off",

        "@typescript-eslint/no-extraneous-class": ["warn", {
            allowWithDecorator: true,
        }],

        "@angular-eslint/no-empty-lifecycle-method": "off",

        "@typescript-eslint/unbound-method": ["error", {
            ignoreStatic: true,
        }],
    },
}, ...compat.extends("plugin:@angular-eslint/template/recommended").map(config => ({
    ...config,
    files: ["**/*.html"],
})), {
    files: ["**/*.html"],

    rules: {
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/conditional-complexity": "error",
        "@angular-eslint/template/cyclomatic-complexity": "error",
        "@angular-eslint/template/no-call-expression": "error",
        "@angular-eslint/template/no-duplicate-attributes": "error",
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/click-events-have-key-events": "error",
        "@angular-eslint/template/mouse-events-have-key-events": "error",
        "@angular-eslint/template/no-autofocus": "error",
        "@angular-eslint/template/no-distracting-elements": "error",
        "@angular-eslint/template/no-positive-tabindex": "error",
        "@angular-eslint/template/alt-text": "error",
        "@angular-eslint/template/elements-content": "error",
        "@angular-eslint/template/table-scope": "error",
        "@angular-eslint/template/valid-aria": "error",
        "@angular-eslint/template/label-for": "error",
        "@angular-eslint/template/label-has-associated-control": "error",
    },
}];