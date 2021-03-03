import { render } from '@testing-library/svelte'
import App from './App.svelte'


test('test greeting', () => {

  const { getByText } = render(App, { name: 'world' } );

  expect(getByText('Hello world!')).toBeInTheDocument();
});
