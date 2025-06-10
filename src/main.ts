import { Plugin } from "obsidian";
import { BeancountPlugin } from "./BeancountPlugin";

export default class BeancountPluginEntry extends Plugin {
  beancount: BeancountPlugin;

  async onload() {
    console.log("Loading Beancount Plugin");
    this.beancount = new BeancountPlugin(this);
    await this.beancount.onload();
  }

  onunload() {
    console.log("Unloading Beancount Plugin");
    this.beancount.onunload();
  }
}