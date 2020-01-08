# ssml-tsx

Write SSML (Speech Synthesis Markup Language) inline within JSX or TSX.
This module includes type definitions for SSML.

```jsx
/** @jsx ssml */
import ssml, { rendetToString, FC } from "ssml-tsx";

console.log(renderToString(
  <speak>
    <say-as interpret-as="date">10/1</say-as>
  </speak>
));
// => "<speak><say-as interpret-as=\"date\">10/1</say-as></speak>"

const Foo: FC<{ name: string }> = ({ name }) => (
  <speak>
    <say-as interpret-as="characters">{name}</say-as>
    <break time="2s" />
    <p>What would you like to do today?</p>
  </speak>
);
console.log(renderToString(<Foo name="bar" />));
// => "<speak><say-as interpret-as=\"characters\">bar</say-as><break time=\"2s"/><p>What would you like to do today?</p></speak>"
```
