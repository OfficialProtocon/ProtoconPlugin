import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    console.log("Congratulations, your extension \"protoconplugin\" is now active!");
    
    let disposable = vscode.commands.registerCommand("protoconplugin.helloWorld", () => {
        vscode.window.showInformationMessage("Hello World from ProtoconPlugin!");
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
