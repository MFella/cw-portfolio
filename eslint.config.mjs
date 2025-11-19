import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from 'eslint/config';
import { qwikEslint9Plugin } from 'eslint-plugin-qwik';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(['node_modules/*', 'dist/*', 'server/*', 'tmp/*']),
    js.configs.recommended,
    qwikEslint9Plugin.configs.recommended,
    {
        extends: compat.extends(
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
        ),
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 2021,
            sourceType: "module",

            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                project: ["./tsconfig.json"],
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-this-alias": "off",
            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "prefer-spread": "off",
            "no-case-declarations": "off",
            "no-console": "off",
            "@typescript-eslint/no-unused-vars": ["error"],
            "@typescript-eslint/consistent-type-imports": "warn",
        },
    }]);