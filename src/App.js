import Home from './pages/Home'
import History from './pages/History';
import Dashboard from './pages/Dashboard';
import ViewHistory from './pages/ViewHistory';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Dashboard/>,
      children:[
        {
          index:true,
         /*  path:'/home', */
          element:<Home/>,
        },
        {
          path:'/history',
          element:<History/>
        },
        {
          path:'/viewhistory',
          element:<ViewHistory/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
