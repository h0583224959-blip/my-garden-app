import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the garden and flowers from the collection', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'הגינה שלי' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'פרחי הגינה' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'פרח ורד' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'פרח חמנייה' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'פרח סחלב' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'פרח כלנית' })).toBeInTheDocument();
});

test('uses default colors when flower props are omitted', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: 'פרח מרווה' })).toHaveStyle({
    backgroundColor: '#91b88f',
  });
  expect(screen.getByRole('button', { name: 'פרח מרווה' })).toHaveTextContent('#2e7d32');
  expect(screen.getByRole('button', { name: 'פרח יקינתון' })).toHaveStyle({
    backgroundColor: '#ffb6c1',
  });
  expect(screen.getByRole('button', { name: 'פרח לילך' })).toHaveTextContent('#ffb6c1');
  expect(screen.getByRole('button', { name: 'פרח לילך' })).toHaveTextContent('#2e7d32');
});

test('shows flower colors in the card and title', () => {
  render(<App />);

  const rose = screen.getByRole('button', { name: 'פרח ורד' });
  expect(rose).toHaveStyle({ backgroundColor: '#e75b7b' });
  expect(screen.getByRole('heading', { name: 'ורד' })).toHaveStyle({ color: '#622d45' });
  expect(rose).toHaveTextContent('צבע עלי כותרת: #e75b7b');
  expect(rose).toHaveTextContent('צבע המרכז: #622d45');
});

test('shows the clicked flower name in an alert', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'פרח ורד' }));

  expect(alertSpy).toHaveBeenCalledWith('אני פרח מסוג ורד');
  alertSpy.mockRestore();
});
