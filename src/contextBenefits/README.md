## typescript Context Benefits

**Description**

We have a context that provides some functions to their children.

- **Case 1**:
  I want to change this function because it's not well implemented. In order to do that, I have to go to `tsxContext.tsx` and rewrite the function. By the moment I save the changes, Typescript will automatically throw me error, and notify me about the consumers of the context that use this function. **I don't have to manually check everyfile that uses `useTsContext` because I have immediate errors on my editor**.

  e.g. useFlow() is being used throughout the whole project. If someone makes a change to flowContext, typescript will immediately show to the developer, which files are correlated to this change.

- **Case 2**:
  I have a Context that provides too many functions. With Ctr + Space, the developer knows excactly what the context is providing.
  The same benefit applies to functions that provide a JSON with a lot of values

  e.g. useFlow() provides about 30 functions / values. With TS I dont have to manually check every time the flowContext.js file in order to see what is being provided.
