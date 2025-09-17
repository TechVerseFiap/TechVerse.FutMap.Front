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
import LoginPage from '../LoginPage';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createQueryClient = () => new QueryClient({ defaultOptions: { queries: { retry: false } } });

describe('LoginPage', () => {
  it('should render LoginPage without crashing', () => {
    const qc = createQueryClient();
    render(
      <QueryClientProvider client={qc}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
  // Assert page heading is visible
  expect(screen.getByText(/Seja Bem-Vindo/i)).toBeInTheDocument();
  });
});
