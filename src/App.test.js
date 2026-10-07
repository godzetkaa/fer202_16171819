import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders all exercise demos and the animal cards', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Event Handling Demo' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Render and Commit Demo' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'State as a Snapshot Demo' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'PropTypes Demo' })).toBeInTheDocument();
  expect(screen.getByText('Lion')).toBeInTheDocument();
  expect(screen.getByText('Gorilla')).toBeInTheDocument();
  expect(screen.getByText('Zebra')).toBeInTheDocument();
});

test('increments the event handling count', () => {
  render(<App />);
  const demo = screen.getByRole('heading', { name: 'Event Handling Demo' }).closest('section');

  fireEvent.click(within(demo).getByRole('button', { name: 'Increase Count' }));
  expect(within(demo).getByText('Count: 1')).toBeInTheDocument();
});

test('increments and re-renders the render and commit demo', () => {
  render(<App />);
  const demo = screen.getByRole('heading', { name: 'Render and Commit Demo' }).closest('section');

  fireEvent.click(within(demo).getByRole('button', { name: 'Increment' }));
  expect(within(demo).getByText('Count: 1')).toBeInTheDocument();
});

test('takes and restores a count snapshot', () => {
  render(<App />);
  const demo = screen.getByRole('heading', { name: 'State as a Snapshot Demo' }).closest('section');

  fireEvent.click(within(demo).getByRole('button', { name: 'Increment' }));
  fireEvent.click(within(demo).getByRole('button', { name: 'Take Snapshot' }));
  fireEvent.click(within(demo).getByRole('button', { name: 'Increment' }));
  fireEvent.click(within(demo).getByRole('button', { name: 'Restore Snapshot' }));

  expect(within(demo).getByText('Count: 1')).toBeInTheDocument();
});

test('uses the default additional data when an animal has no additional object', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);

  fireEvent.click(screen.getAllByRole('button', { name: 'More Info' })[0]);

  expect(alertSpy).toHaveBeenCalledWith('notes: No Additional Information');
  alertSpy.mockRestore();
});
