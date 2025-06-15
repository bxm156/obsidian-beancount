import { PluginSettingTab, Setting, Plugin } from "obsidian";

export interface BeancountPluginSettings {
  beanCheckPath: string;       // ← path to bean-check executable
  beanQueryPath: string;       // ← optionally for bean-query
  defaultCurrency: string;
}

export const DEFAULT_SETTINGS: BeancountPluginSettings = {
  beanCheckPath: "bean-check",
  beanQueryPath: "bean-query",
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
      .setName("Bean‑check Executable")
      .setDesc("Path to the bean‑check command")
      .addText(text => text
        .setPlaceholder("bean-check")
        .setValue(this.parent.settings.beanCheckPath)
        .onChange(async (value) => {
          this.parent.settings.beanCheckPath = value.trim();
          await this.plugin.saveData(this.parent.settings);
        }));

    new Setting(containerEl)
      .setName("Bean‑query Executable")
      .setDesc("Path to the bean‑query command for running queries")
      .addText(text =>
        text
          .setPlaceholder("bean-query")
          .setValue(this.parent.settings.beanQueryPath)
          .onChange(async (value) => {
            this.parent.settings.beanQueryPath = value.trim();
            await this.plugin.saveData(this.parent.settings);
          })
        );
  }
}