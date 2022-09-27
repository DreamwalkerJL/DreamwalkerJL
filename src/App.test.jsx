import { describe, expect, test } from 'vitest';

import { render, screen, userEvent } from '../test-utils';
import App from './App';

test('should first', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: /lol/i })).toBeDisabled();
  //   screen.getByRole("")
  //   userEvent.type(screen.getByPlaceholderText(/amount/i),"50")
});
