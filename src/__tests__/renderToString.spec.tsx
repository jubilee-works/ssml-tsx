/** @jsx ssml */
import ssml, { renderToString, FC } from "..";

describe("renderToString", () => {
  test("should match expected output.", () => {
    const Foo: FC<{ name: string }> = ({ name }) => (
      <speak>
        <say-as interpret-as="characters">{name}</say-as>
        <break time="2s" />
        <p>What would you like to do today?</p>
      </speak>
    );

    const element1 = <Foo name="foo" />;
    const element2 = <say-as interpret-as="date">foo</say-as>;

    expect(renderToString(element1)).toBe(
      `<speak><say-as interpret-as=\"characters\">foo</say-as><break time="2s"/><p>What would you like to do today?</p></speak>`
    );
    expect(renderToString(element2)).toBe(
      `<say-as interpret-as="date">foo</say-as>`
    );
  });
});
