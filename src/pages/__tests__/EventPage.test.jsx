// Mock hooks used by the page to avoid network/localStorage dependencies
jest.mock('../../hooks/useAuth', () => ({
  useUsers: () => ({ data: [], isLoading: false, error: null }),
  loginUser: () => false,
  getAuthenticated: () => false,
  getUser: () => null,
  clearLocalStorage: () => {}
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import EventPage from '../EventPage';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createQueryClient = () => new QueryClient({ defaultOptions: { queries: { retry: false } } });

describe('EventPage', () => {
  it('should render EventPage without crashing', () => {
    const qc = createQueryClient();
    render(
      <QueryClientProvider client={qc}>
        <MemoryRouter>
          <EventPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    // Adicione data-testid="event-page" no elemento principal da página
  // Verify visible text that confirms the page rendered
  expect(screen.getByText(/Eventos/i)).toBeInTheDocument();
  });
});
