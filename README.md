# Obsidian Beancount Plugin

Manage your [Beancount](https://beancount.github.io) double-entry accounting system directly within Obsidian.md. This plugin enables you to write, validate, and query financial data using plain Markdown files—fully integrated with your notes and workflows.

## ✨ Features

- 💸 **Markdown Ledger**: Write and edit `.beancount`-style entries in standard `.md` files.
- ✅ **Validation**: Run `bean-check` and highlight errors directly in your editor.
- 🧾 **Quick Transaction Entry**: Use a modal to add transactions with autocomplete support.
- 📊 **Inline Queries**: Execute `beancount-query` blocks and display results in your notes.
- 📈 **Fava Integration**: Launch or embed the Fava web interface to visualize your ledger.
- 📅 **Daily Notes Support** (planned): Capture expenses in your daily notes for later aggregation.

## 🚀 Getting Started

1. **Install Beancount** (Python):
   ```bash
   pip install beancount fava
   ```

2. **Install the Plugin**:
   - From the Obsidian Community Plugins browser (once published).
   - Or clone this repo into your vault under `.obsidian/plugins/obsidian-beancount-plugin`.

3. **Configure Settings**:
   - Set the path to your main ledger file (e.g., `Finance/ledger.md`).
   - Set Fava executable path (optional).
   - Customize default currency and formatting.

## 🧰 Usage

- Use the command palette (`Ctrl+P`) to:
  - Add a new transaction.
  - Validate the ledger.
  - Run Fava.

- Write transactions directly in notes:
  ```plaintext
  2025-06-10 * "Grocery Store"
    Expenses:Food     $45.00
    Assets:Cash
  ```

- Comment lines with `;` to add Markdown-style headings that won’t break validation:
  ```plaintext
  ; ## June 2025
  ```

- Query your ledger in preview mode:
  ````
  ```beancount-query
  SELECT account, sum(position) WHERE account ~ "Expenses" GROUP BY account
  ```
  ````

## 📊 Fava Integration

- Enable and launch Fava from plugin settings.
- View rich visualizations (income reports, account trends) in your browser.
- Future goal: embed Fava directly into an Obsidian pane.

## 🛠 Roadmap

- [x] Ledger parsing from `.md`
- [x] Validation with `bean-check`
- [x] Quick transaction modal
- [ ] Query block rendering
- [ ] Daily notes integration
- [ ] Fava embedded iframe (desktop only)

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit pull requests. Bug reports, feature suggestions, and feedback are appreciated.

## 📜 License

MIT License © Your Name

---
Powered by [Beancount](https://beancount.github.io) and inspired by the plain text accounting movement.