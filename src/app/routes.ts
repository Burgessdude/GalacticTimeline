import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { Home } from './components/Home';
import { LegendsPage } from './components/LegendsPage';
import { CanonPage } from './components/CanonPage';
import { BookDetailPage } from './components/BookDetailPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        { index: true, Component: Home },
        { path: 'legends', Component: LegendsPage },
        { path: 'legends/:bookId', Component: BookDetailPage },
        { path: 'canon', Component: CanonPage },
        { path: 'canon/:bookId', Component: BookDetailPage },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);
