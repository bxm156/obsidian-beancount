import { App, PluginSettingTab, Setting, Plugin } from "obsidian";

export interface BeancountPluginSettings {
  mainLedgerPath: string;
  favaPath: string;
  defaultCurrency: string;
}

export const DEFAULT_SETTINGS: BeancountPluginSettings = {
  mainLedgerPath: "Finance/ledger.md",
  favaPath: "fava",
  defaultCurrency: "USD"
};

export async function loadSettings(plugin: Plugin): Promise<Partial<BeancountPluginSettings>> {
  return await plugin.loadData();
}

export class BeancountSettingsTab extends PluginSettingTab {
  plugin: Plugin;
  parent: any;

  constructor(plugin: Plugin, parent: any) {
    super(plugin.app, plugin);
    this.plugin = plugin;
    this.parent = parent;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Beancount Plugin Settings" });

    new Setting(containerEl)
      .setName("Main Ledger File Path")
      .setDesc("Path to the main Beancount ledger file (within vault)")
      .addText(text => text
        .setPlaceholder("Finance/ledger.md")
        .setValue(this.parent.settings.mainLedgerPath)
        .onChange(async (value) => {
          this.parent.settings.mainLedgerPath = value;
          await this.plugin.saveData(this.parent.settings);
        }));
  }
}