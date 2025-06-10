import { Plugin } from "obsidian";
import { BeancountSettingsTab, DEFAULT_SETTINGS, BeancountPluginSettings, loadSettings } from "./settings";

export class BeancountPlugin {
  plugin: Plugin;
  settings: BeancountPluginSettings;

  constructor(plugin: Plugin) {
    this.plugin = plugin;
  }

  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await loadSettings(this.plugin));
    this.plugin.addSettingTab(new BeancountSettingsTab(this.plugin, this));
  }

  onunload() {}
}