[1mdiff --git a/.vscode/settings.json b/.vscode/settings.json[m
[1mindex 7622208..217d6e1 100644[m
[1m--- a/.vscode/settings.json[m
[1m+++ b/.vscode/settings.json[m
[36m@@ -1,13 +1,24 @@[m
 {[m
[32m+[m[32m  "emmet.syntaxProfiles": {[m
[32m+[m[32m    "javascript": "jsx",[m
[32m+[m[32m    "typescript": "tsx"[m
[32m+[m[32m  },[m
   "files.associations": {[m
     "*.jsx": "javascriptreact",[m
     "*.js": "javascript",[m
[32m+[m[32m    "*.tsx": "typescriptreact",[m
     "*.ts": "typescript"[m
   },[m
[32m+[m[32m  "[javascript]": {[m
[32m+[m[32m    "editor.defaultFormatter": "esbenp.prettier-vscode"[m
[32m+[m[32m  },[m
[32m+[m[32m  "editor.defaultFormatter": "esbenp.prettier-vscode",[m
[32m+[m[32m  "editor.formatOnSave": true,[m
   "emmet.showSuggestionsAsSnippets": true,[m
[32m+[m[32m  "emmet.preferences": { "css.color.short": true },[m
   "window.commandCenter": true,[m
[31m-  "editor.fontSize": 32,[m
[31m-  "editor.lineHeight": 40,[m
[32m+[m[32m  "editor.fontSize": 20,[m
[32m+[m[32m  "editor.lineHeight": 25,[m
   "editor.acceptSuggestionOnCommitCharacter": true,[m
   "editor.accessibilityPageSize": 15,[m
   "terminal.integrated.fontFamily": "",[m
[36m@@ -21,5 +32,8 @@[m
   "javascript.suggest.autoImports": true,[m
   "javascript.updateImportsOnFileMove.enabled": "always",[m
   "editor.minimap.enabled": false,[m
[31m-  "workbench.iconTheme": "Monokai Classic Icons"[m
[32m+[m[32m  "editor.renderLineHighlight": "gutter",[m
[32m+[m[32m  "workbench.iconTheme": "eq-material-theme-icons-darker",[m
[32m+[m[32m  "workbench.colorTheme": "Monokai Pro",[m
[32m+[m[32m  "terminal.integrated.defaultProfile.windows": "Git Bash"[m
 }[m
