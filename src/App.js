import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/root';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <h1>Welcome to homepage!</h1> },
        { path: '/products', element: <h1>Products page!</h1> }
      ]
    }
  ])
  return <RouterProvider router={appRouter} />;
}

export default App;
