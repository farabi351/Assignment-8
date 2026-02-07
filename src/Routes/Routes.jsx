import React from 'react';


import {
  createBrowserRouter,

} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Component/Home/Home';
import Apps from '../Component/Apps/Apps';
import Installation from '../Component/Installation/Installation';
import AppDetails from '../Component/AppDetails/AppDetails';
import ErrorApp from '../Component/ErrorApp/ErrorApp';


//

// useEffect(() => {
//     Swal.fire({
//       title: "Sweet!",
//       text: "Modal with a custom image.",
//       imageUrl: "https://unsplash.it/400/200",
//       imageWidth: 400,
//       imageHeight: 200,
//       imageAlt: "Custom image"
//     });
//   }, []);



export const router = createBrowserRouter([

  
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        // {
        //     index:true,
        //     loader:()=>fetch('App.json'),
        //     path:"/",
        //     Component:Home
            
        // },

        {
        index: true,
        loader: async () => {
          const res = await fetch('/App.json');
          return res.json();
        },
        Component: Home
      },


        // {
        //     loader:()=>fetch('App.json'),
        //     path:'apps',
        //     Component:Apps

        // },

        {
        path: "apps",
        loader: async () => {
          const res = await fetch('/App.json');
          return res.json();
        },
        Component: Apps,
        
      },




        {
            path:'installation',
              loader: async () => {
                const res = await fetch('/App.json');
              return res.json();
            },
            Component:Installation
        },

        {
            path:'/appDetails/:id',
            loader: async () => {
                  const res = await fetch('/App.json');
                  return res.json();
            },
            Component:AppDetails
        },

        {

          path:'/not-found',
          Component:ErrorApp


        }

        

       
    ]
  },
]);




// Swal.fire({
//   title: "Sweet!",
//   text: "Modal with a custom image.",
//   imageUrl: "https://unsplash.it/400/200",
//   imageWidth: 400,
//   imageHeight: 200,
//   imageAlt: "Custom image"
// });