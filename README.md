# Bug

Related to issue: https://github.com/Quramy/typescript-eslint-language-service/issues/497

The `package.json` and related `yarn.lock` contains the last valid dependencies known where errors are reported:

```text
    "@typescript-eslint/parser": "5.41.0",
    "eslint": "^8.37.0",
    "typescript": "^4.9.5",
    "typescript-eslint-language-service": "5.0.0"
```

Changing `typescript` to v5 or `typescript-eslint-language-service` to other greater than `5.0.0` does not show the errors.

For example, with these newer dependencies:

```text
    "typescript": "^5.0.3",
    "typescript-eslint-language-service": "^5.0.5"
```

While running the script `yarn lint` reports:

```text
[some-folder] % yarn lint

/some-folder/src/main.ts
  1:1   error  Unexpected 'debugger' statement      no-debugger
  2:12  error  There should be no space after '{'   object-curly-spacing
  2:22  error  There should be no space before '}'  object-curly-spacing
  2:26  error  Missing semicolon                    semi

✖ 4 problems (4 errors, 0 warnings)
  3 errors and 0 warnings potentially fixable with the `--fix` option.
```
