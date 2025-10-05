// Mock hooks used by the page to avoid network/localStorage dependencies
jest.mock('../../hooks/useAuth', () => ({
  useUsers: () => ({ data: [], isLoading: false, error: null }),
  loginUser: () => false,
  getAuthenticated: () => false,
  getUser: () => ({ image: 'test-file-stub', name: 'Test User', position: 'Player', age: 25 }),
  clearLocalStorage: () => {}
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from '../ProfilePage';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createQueryClient = () => new QueryClient({ defaultOptions: { queries: { retry: false } } });

describe('ProfilePage', () => {
  it('should render ProfilePage without crashing', () => {
    const qc = createQueryClient();
    render(
      <QueryClientProvider client={qc}>
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      </QueryClientProvider>
    );
  // Verify user's name from mocked getUser is rendered
  expect(screen.getByText(/Test User/i)).toBeInTheDocument();
  });
});
