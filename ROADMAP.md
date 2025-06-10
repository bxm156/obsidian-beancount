# Obsidian Beancount Plugin – Roadmap

This roadmap outlines the development plan for the Obsidian Beancount Plugin, organized by milestone phases. It includes our MVP goals, upcoming milestones, and future aspirations.

---

## ✅ MVP (Minimum Viable Product)
Core functionality needed to make the plugin useful and testable:

- [x] Parse Beancount-style entries from `.md` files
- [x] Add new transaction via command/modal
- [x] Autocomplete account names in transaction form
- [x] Run `bean-check` for validation
- [x] Highlight validation errors in editor
- [x] Basic settings panel (main file, Fava path)

---

## 🚧 Milestone 1 – Querying and Reporting
Enable users to query and explore their financial data directly within Obsidian.

- [ ] Support `beancount-query` code blocks
- [ ] Display query results as markdown tables
- [ ] Provide error feedback for invalid queries
- [ ] Include example queries in sample notes

---

## 🚧 Milestone 2 – Fava Integration
Provide advanced visualization and interactive dashboards via Fava.

- [ ] Add command to launch Fava (external browser)
- [ ] Configure Fava port and path in settings
- [ ] Explore embedding Fava via iframe (desktop only)
- [ ] Detect and gracefully handle Fava process state

---

## 🚧 Milestone 3 – Enhanced UX and Daily Workflow
Improve usability and daily capture of financial records.

- [ ] Daily Notes integration (auto-group transactions by day)
- [ ] Inline preview enhancements (e.g., render headings from comments)
- [ ] Transaction template system (reusable forms or macros)
- [ ] Mobile-friendly UI support

---

## 🌱 Future Ideas & Stretch Goals

These are ambitious or experimental ideas that may be explored based on user feedback:

- [ ] Account and tag autocomplete while typing
- [ ] Visual account explorer (graph/tree view)
- [ ] Balance preview on hover or in side panel
- [ ] Budget planner and forecasting tools
- [ ] Support for multiple ledgers
- [ ] Git integration for versioned ledger review
- [ ] Tree-sitter or LSP support for deeper syntax parsing

---

## 📅 Release Planning

Each milestone will target a point release (e.g., `v0.2`, `v0.3`, etc.). Bugfixes and minor UI improvements may ship between milestones.

Feedback and contributions are welcome! Open issues or discussion threads for suggestions, bug reports, and feature ideas.