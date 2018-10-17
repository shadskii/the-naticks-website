# the-naticks-website

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

# Add this to your settings.json in vscode
```
{
  "eslint.autoFixOnSave": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "html.format.enable": false
}

```