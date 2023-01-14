import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

jest.mock('firebase/app');
const mockInitializeApp = initializeApp as jest.Mock;

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn(),
  logEvent: jest.fn(),
}));
const mockGetAnalytics = getAnalytics as jest.Mock;
const mockLogFirebaseAnalyticsEvent = logEvent as jest.Mock;

beforeEach(() => {
  mockInitializeApp.mockReturnValue('mock-firebase-app');

  mockGetAnalytics.mockReturnValue('mock-firebase-analytics');
});

afterEach(() => {
  mockInitializeApp.mockReset();

  mockLogFirebaseAnalyticsEvent.mockReset();
  mockGetAnalytics.mockReset();
});

export {};
