# ssml-jsx

```jsx
/** @jsx ssml */
import ssml, { rendetToString } from "ssml-jsx";

console.log(rendetToString(<speak>Hello</speak>));
console.log(`${<speak>Hello</speak>}`);
```
