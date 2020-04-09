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

  test("should convert amazon tag", () => {
    const AmazonComponents = () => (
      <speak>
      <amazon-effect name="whispered">effect</amazon-effect>
      <amazon-emotion name="excited" intensity="low">emotion</amazon-emotion>
      <amazon-domain name="news">domain</amazon-domain>
      </speak>
    )
    expect(renderToString(<AmazonComponents />)).toBe(`<speak><amazon:effect name=\"whispered\">effect</amazon:effect><amazon:emotion name=\"excited\" intensity=\"low\">emotion</amazon:emotion><amazon:domain name=\"news\">domain</amazon:domain></speak>`)
  })

  test("should match empty string with null component", () => {
    const NullComponent: FC = () => null;
    expect(renderToString(<NullComponent />)).toBe("");
  });
});
