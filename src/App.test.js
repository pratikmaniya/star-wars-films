import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import App from './App';
import { GET_FILMS } from './apollo/queries';
import ErrorBoundary from './ErrorBoundary';

const mocks = [
  {
    request: {
      query: GET_FILMS,
    },
    result: {
      data: {
        allFilms: {
          films: [
            { id: '1', title: 'A New Hope', releaseDate: '1977-05-25', director: 'George Lucas', episodeID: 4 },
            { id: '2', title: 'The Empire Strikes Back', releaseDate: '1980-05-21', director: 'Irvin Kershner', episodeID: 5 },
          ],
        },
      },
    },
  },
];

test('renders Header component', () => {
  render(
    <App />
  );
  expect(screen.getByText(/Star Wars Films/i)).toBeInTheDocument();
});

test('navigates to FilmList and FilmDetails', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('A New Hope')).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText('A New Hope'));
  await waitFor(() => {
    expect(screen.getByText('Director: George Lucas')).toBeInTheDocument();
  });
});

test('displays error boundary UI on error', () => {
  const ErrorThrowingComponent = () => { throw new Error('Test Error'); };
  render(
    <ErrorBoundary>
      <ErrorThrowingComponent />
    </ErrorBoundary>
  );
  expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
});
