import { Plugin } from "obsidian";
import { TFile, TFolder, Notice } from "obsidian";
import { exec } from "child_process";
import { BeancountSettingsTab, DEFAULT_SETTINGS, BeancountPluginSettings, loadSettings } from "./settings";

export class BeancountPlugin {
  plugin: Plugin;
  settings: BeancountPluginSettings;

  constructor(plugin: Plugin) {
    this.plugin = plugin;
  }

  async runBeanQueryOnFolder(folder: TFolder) {
    const folderPath = folder.path;
    new Notice(`Running bean-query on folder: ${folderPath}`);
    
    // Here’s the core logic:
    // 1. Gather all .md files under `folderPath`
    // 2. Extract Beancount content from each
    // 3. Write to a temp file
    // 4. Run: `bean-query temp.bean "YOUR QUERY HERE"`
    // 5. Display results (Notice, modal, or insert into a note)
  
    // You'll likely want to prompt the user for the query,
    // e.g. show a modal to input the BQL query string.
  }
  async runBeanCheckOnFile(file: TFile) {
    const filePath = file.path;
    new Notice(`Running bean-check on file: ${filePath}`);

    // Here’s the core logic:
    // 1. Gather all .md files under `folderPath`
    // 2. Extract Beancount content from each
    // 3. Write to a temp file
    // 4. Run: `bean-query temp.bean "YOUR QUERY HERE"`
    // 5. Display results (Notice, modal, or insert into a note)

    // You'll likely want to prompt the user for the query,
    // e.g. show a modal to input the BQL query string.
  }

  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await loadSettings(this.plugin));
    this.plugin.addSettingTab(new BeancountSettingsTab(this.plugin, this));
    this.plugin.registerEvent(
      this.plugin.app.workspace.on("file-menu", (menu, fileOrFolder, source) => {
        if (fileOrFolder instanceof TFolder) {
          menu.addItem((item) =>
            item
              .setTitle("Run bean-check on folder…")
              .setIcon("search") // optional icon
              .onClick(() => this.runBeanQueryOnFolder(fileOrFolder))
          );
        } else if (fileOrFolder instanceof TFile && fileOrFolder.extension === "md") {
          menu.addItem((item) =>
            item
              .setTitle("Run bean-check on note…")
              .setIcon("search") // optional icon
              .onClick(() => this.runBeanCheckOnFile(fileOrFolder))
          );
        }
      })
    );
    exec(`${this.settings.beanCheckPath || 'bean-check'} --help`, (err) => {
      if (err) {
        new Notice(
          '⚠️ Beancount not found. Please install with `pip install beancount fava` and configure its path in settings.'
        );
      }
    });
  }

  

  onunload() {}
}