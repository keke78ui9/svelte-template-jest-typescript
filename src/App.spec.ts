import { render } from "@testing-library/svelte";
import App from "./App.svelte";

test(App.name, () => {
  const _name: string = 'world';

  const results = render(App, { props: { name: _name } });

  expect(() => results.getByText("Hello world!")).not.toThrow();
});