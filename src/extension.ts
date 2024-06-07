import * as vscode from "vscode";
import * as cp from "child_process";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "npm-command-executor" is now active!'
  );

  let disposableInstall = vscode.commands.registerCommand(
    "extension.executeNpmInstall",
    () => {
      executeNpmCommand("install");
    }
  );

  let disposableStart = vscode.commands.registerCommand(
    "extension.executeNpmStart",
    () => {
      executeNpmCommand("start");
    }
  );

  let disposableBuild = vscode.commands.registerCommand(
    "extension.executeXcubeBuild",
    () => {
      executeNpmCommand("act build");
    }
  );

  context.subscriptions.push(
    disposableInstall,
    disposableStart,
    disposableBuild
  );
}

function executeNpmCommand(command: string) {
  const terminal = vscode.window.createTerminal("cmd terminal");
  terminal.show();
  terminal.sendText(`${command}`);
}

export function deactivate() {}
