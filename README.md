This is a complete reproducible setup for https://github.com/handsontable/handsontable/issues/9140.

# Setup

1. Run `yarn` to install deps (probably also works with npm...)
2. Run `yarn webpack serve` to run a webpack server with live reload
3. Go to http://localhost:8080/
4. In `src/index.js`
   - Uncomment the `THIS WORKS` part and see how the Handsontable appears on the live page
   - Instead uncomment the `THIS DOESN'T WORK` part and see how the page breaks (including console error message)

# Investigation

So we can definitely that `registerCellTypes` works fine when imported using `import`, but not when using `require`.
The two webpack assets are also part of this project, in `dist/index-broken.js` (when using `require`) and `dist/index-working.js` (when using `import`).
