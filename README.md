# Python Logic Visualizer

An interactive computer science visualizer and educational simulation suite designed for Python classes, lectures, and computer labs. This platform transforms abstract Python semantics, boolean logic, memory models, control flow, functions, loops, and string slicing into tangible, interactive physical models and visual mechanics.

---

## 🚀 Core Interactive Modules

1. **Python Variable Box Quiz (`variable_box.html`)**
   - **Concepts**: Variables, data types (`int`, `float`, `str`, `bool`), type casting, arithmetic operators (`+`, `-`, `*`, `/`, `//`, `%`, `**`), and `ValueError` handling.
   - **Mechanic**: Closed 3D cardboard memory box with interactive Python code prediction, dynamic variable assignment, and physics-based opening or box collapse on evaluation.

2. **Hydraulic Boolean Logic Gates (`index.html`)**
   - **Concepts**: Boolean operators (`and`, `or`, `not`, `nand`, `nor`, compound logic), short-circuit evaluation, truth tables, and strict Python boolean types (`True`, `False`).
   - **Mechanic**: Industrial fluid dynamics simulation featuring supply tanks, interactive valves, water flow particles, animated turbines, automated truth tables, and a progressive 10-question challenge curriculum.

3. **Automated Water Diverter (`diverter.html`)**
   - **Concepts**: Conditional branching (`if / elif / else`), mutual exclusivity, and default fallbacks.
   - **Mechanic**: An industrial temperature-regulated water routing system. Adjust the temperature slider (-50°C to 150°C) to direct water into the Steam Turbine (`if`), Ice Crusher (`elif`), or Municipal Tank (`else`).

4. **Detroit Pizzeria Function Scope (`pizzeria.html`)**
   - **Concepts**: Function parameters, local scope vs. global scope, variable shadowing, captured return values, and garbage collection.
   - **Mechanic**: A Detroit-style pizzeria kitchen analogy where ingredients move between the Dining Room (global) and Kitchen (local) with live variable inspection.

5. **Loop Prediction Quiz (`loop_deck.html`)**
   - **Concepts**: `for` loops, `while` loops, `range()` arguments, `continue` skips, and `break` terminations.
   - **Mechanic**: A card-deck challenge interface where students predict loop outcomes into a predicted hand, step through iterations, and observe real-time list appending.

6. **Python String Slicing Visualizer (`slicing.html`)**
   - **Concepts**: String indexing, positive indices (`0` to `len-1`), negative indices (`-len` to `-1`), default bounds, and stride steps (`s[start:stop:step]`).
   - **Mechanic**: Interactive index grid with real-time character highlighting and step-by-step traversal.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: Vanilla TypeScript / ES Modules, Tailwind CSS styling, HTML5 Canvas 2D animations, Lucide icons.
- **Build Tooling**: Vite with ESBuild production bundler.
- **Offline PWA**: Service Worker (`sw.js`) and Web App Manifest (`manifest.json`) for 100% offline operation in classrooms and labs without internet access.

---

## 📦 Getting Started & Local Development

### Prerequisites
- Node.js (v18+) or Bun / npm.

### Installation & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server (runs on port `3000`):
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Start production server:
   ```bash
   npm start
   ```

---

## 📜 License

This project is open-source software licensed under the **[BSD 3-Clause License](LICENSE)**.
