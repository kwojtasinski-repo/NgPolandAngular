# Push-Based Modern Angular Workshop | Standalone & Signals & Architecture

## Installation Instructions

**System Requirements**

* `node > 20`
* `npm > 8`

**Clone and install**

```bash
git clone https://github.com/push-based/ws-ng-poland-2024-signal-arch.git

cd ws-ng-poland-2024-signal-arch
npm install

# (optional) if the step before didn't work, please try the following
npm install --force
```

**Run the application**

```bash
npm run start
```

## Workshop Information

* [Workshop General Information](https://docs.google.com/document/d/1LPjxxlPGiH_B7OQA3CAyG-L7ZwKnT5aO2r_piTkh_m0/)
* [Slides](https://drive.google.com/drive/folders/1MTUTx5Vwq-XMdl9dHxapYPQpZiiVlkgZ)

## Exercises

[0. Project Setup](./exercises/project%20setup.md)

### Exercises

inject()
* [inject - Manual migration](exercises/inject%20-%20manual-migration.md)
* [inject - Automatic migration](exercises/inject%20-%20automatic-migration.md)

Standalone
* [Standalone: Manual migration](exercises/standalone%20-%20migration.md)
* [Standalone: Routing migration](exercises/standalone%20-%20routing.md)
* [Standalone: Modern providers](exercises/standalone%20-%20new%20providers.md)
* [Standalone: Automatic-migration](exercises/standalone%20-%20automatic-migration.md)

Esbuild migration
* [New Build System Performance](./exercises/new-build-system-migration.md)

New Control Flow
* [New Control Flow](exercises/new-control-flow.md)

Signals
* [Signal - Introduction](exercises/signal-introduction.md)
* [Signal - Computed](exercises/signal-computed.md)
* [Signal - Effect](exercises/signal-effect.md)

Change Detection
* [Change Detection: Dirty Check](./exercises/change-detection%20-%20Dirty%20Check.md)
* [Change Detection: OnPush](./exercises/change-detection%20-%20OnPush.md)
* [Change Detection: Manual Change Detection](./exercises/change-detection%20-%20manual%20cd.md)
* [Change Detection: signals](./exercises/change-detection%20-%20signals.md)
* [Change Detection: zoneless](./exercises/change-detection%20-%20zoneless.md)

### ⚠️ Switch to v19 branch

More Signals
* [Signal - toSignal](exercises/signal-toSignal.md)
* [Signal - resource  & injectParams](exercises/signal-resource-injectParams.md)
* [Signal - Automatic Migration](exercises/signal-migration.md)

Defer
* [Defer](./exercises/defer.md)

Server Side Rendering
* [SSR: Setup & Gotchas](exercises/ssr%20-%20setup%20%26%20gotchas.md)
* [SSR: Caching & Server Timing](exercises/ssr-simple-caching-and-server-timing.md)
* [SSR: Server Routes Configuration](exercises/ssr-server-routes-config.md)
