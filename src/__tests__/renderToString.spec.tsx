/** @jsx ssml */
import ssml, { renderToString, FC } from "..";

describe("renderToString", () => {
  const Foo: FC<{ name: string }> = ({ name }) => (
    <speak>
      <say-as interpret-as="characters">{name}</say-as>
      <break time="2s" />
      <p>What would you like to do today?</p>
    </speak>
  );

  const component = <Foo name="foo" />;
  const jsx = <say-as interpret-as="date">foo</say-as>;

  test("should match expected output with `renderToString`", () => {
    expect(renderToString(component)).toBe(
      `<speak><say-as interpret-as="characters">foo</say-as><break time="2s"/><p>What would you like to do today?</p></speak>`
    );
    expect(renderToString(jsx)).toBe(
      `<say-as interpret-as="date">foo</say-as>`
    );
  });

  test("should match expected output with `toString`", () => {
    expect(component.toString()).toBe(
      `<speak><say-as interpret-as="characters">foo</say-as><break time="2s"/><p>What would you like to do today?</p></speak>`
    );
    expect(jsx.toString()).toBe(`<say-as interpret-as="date">foo</say-as>`);
  });

  test("should match expected output with template literal", () => {
    expect(`${component}`).toBe(
      `<speak><say-as interpret-as="characters">foo</say-as><break time="2s"/><p>What would you like to do today?</p></speak>`
    );
    expect(`${jsx}`).toBe(`<say-as interpret-as="date">foo</say-as>`);
  });
});
