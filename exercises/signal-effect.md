# Effect

Introduce the `effect` function to the project and understand custom side effects.

## Goal

Trigger a navigation over a custom effect by using the `effect` function.

## SearchValue navigation

Go to `AppShellComponent` and use an `effect` in order to trigger a navigation when a `signal` changes.

<details>
  <summary>AppShellComponent</summary>

```ts
// src/app/app-shell/app-shell.component.ts

import { effect } from '@angular/core';

setSearchValue(value: string) {
  this.searchValue.set(value);
  // DELETE THIS 👇
  // this.router.navigate(['search', this.searchValue()]); 
}

// ...

constructor() {
  effect(() => {
    if(this.searchValue()) {
      this.router.navigate(['search', this.searchValue()]);
    }
  })
}
```

</details>

As we don't need the `setSearchValue` method anymore, let's remove it form the class and adjust our template to only use the signal.

<details>
  <summary>AppShellComponent Template</summary>

```html
<!-- src/app/app-shell/app-shell.component.html -->

<!-- use searchValue directly -->
<ui-search-bar 
  [ngModel]="searchValue()" 
  (ngModelChange)="searchValue.set($event)" 
/>

<!-- OR convert to two-way binding & it works -->
<ui-search-bar [(ngModel)]="searchValue" />
```

</details>
