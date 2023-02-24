## Needless Props

- When the extension of the `App` is `jsx`, there are no errors and no warnings on my editor. I am also allowed to pass **random and wrong** variables to the components.
- Changing App to `tsx` extension fixes a lot of stuff but not everything. I am getting warned for both of the components, because I am not passing any props to them.
  Typescript is clever enough to figure out that `ReceivePropsJS()`, receives some props, but doesnt know what kind of props. So a call like `<ReceivePropsJS counter="Hello" /> `is valid.

### Example

We have a reusable Button and and a js Parent.
We have to navigate to the Button.js **Everytime**, in order to see what are props that we have to pass.
In addition, we are allowed to pass random props to our Button, without anyone saying a thing.

With typescript, we can Ctr + Space, when calling our Button, and every prop is being shown on our editor.

- _ProjectExample:_ I have a context that provides a `getFields()` function, which returns {value, setValue etc.} `<Provider value={{getFields()}}>`<br>
  **Edit**: getFields() is broken or inefficient for some reason, and I have to change
