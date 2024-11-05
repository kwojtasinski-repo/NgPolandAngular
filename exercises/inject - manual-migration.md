# Modern Angular - inject manual migration

This exercise focuses on the new `inject` method that was introduced with angular v15.

## Goal

In this exercise you will learn how to transition from the traditional constructor based 
dependency injection to the new standalone `inject` approach.
You will see how much cleaner component code looks when using the new functional approach.

Our target for refactoring will be the `AppShellComponent`. There is only 
one small step to be done in order to fulfill this task:

* replace constructor based injection for `AuthService`, `MovieService`, `Router` & `TrackingService`

## Replace constructor based injection

Go to the `AppShellComponent` and use the new `inject` method. 
Of course make sure to remove the constructor completely.

<details>
  <summary>AppShellComponent inject</summary>

```ts
// movie-list-page.component.ts

protected authService = inject(AuthService);
private movieService = inject(MovieService);
private router = inject(Router);
private trackingService = inject(TrackingService);

// remove the constructor!

```

</details>

Great, you can serve the application and watch the `AppShellComponent` being still
functional :).

