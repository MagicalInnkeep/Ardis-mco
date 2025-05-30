const vscode = require('vscode');

// Definition of commands
const commandDocs = {
  "WAIT": 'WAIT(seconds [;"Condition" [;"Message"]]) : Ardis OPTIMIZER application sleeps at most "seconds", or until Condition returns true or ESC is pressed.'
};

function activate(context) {
  const hoverProvider = vscode.languages.registerHoverProvider('mco', {
    provideHover(document, position, token) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      const doc = commandDocs[word];
      if (doc) {
        return new vscode.Hover(doc);
      }
    }
  });

  context.subscriptions.push(hoverProvider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
