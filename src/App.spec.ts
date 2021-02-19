import { render } from "@testing-library/svelte";
import App from "./App.svelte";

test('test 1', () => {
  const _name: string = 'world';

  const results = render(App, { props: { name: _name } });

  expect(() => results.getByText("Hello world!")).not.toThrow();
});

test('test 2', () => {

const {getByTestId} = render(App, {name: 'test'});

expect(getByTestId('name')).toBeInTheDocument();
});