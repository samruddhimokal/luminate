// // import React from 'react';

// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from './UserContext';

// // const BottomButton = () => {
// //   const { authData } = useAuth();
   
// //   const { isAuthenticated} = authData; 
// //     const navigate = useNavigate();
// //     function goToMentalStateSelector() {
// //         // Navigate to the MentalStateSelector page
// //         if(isAuthenticated)
// //         {
// //           navigate('/intension');
// //         }
// //       }
// //     function goToResource() {
// //         // Navigate to the MentalStateSelector page
// //         if(isAuthenticated)
// //           {
// //             navigate('/resource');
// //           }
        
// //       }
// //     function goToExperience() {
// //         // Navigate to the MentalStateSelector page
// //         if(isAuthenticated)
// //           {
// //             navigate('/postExperience');
// //           }
        
// //       }
// //       return (
// //         <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 py-4 flex flex-wrap justify-between px-4 sm:px-6 gap-2">
// //           <button
// //             onClick={goToMentalStateSelector}
// //             className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
// //           >
// //             Intention
// //           </button>
// //           <button
// //             onClick={goToResource}
// //             className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
// //           >
// //             Mid Trip Experience
// //           </button>
// //           <button
// //             onClick={goToExperience}
// //             className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
// //           >
// //             Post Experience
// //           </button>
// //         </div>
// //       );
      

// // }



// // export default BottomButton



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './UserContext';

// const BottomButton = () => {
//   const { authData } = useAuth();
//   const { isAuthenticated } = authData;
//   const navigate = useNavigate();

//   function goToMentalStateSelector() {
//     if (isAuthenticated) {
//       navigate('/intension');
//     }
//   }

//   function goToResource() {
//     if (isAuthenticated) {
//       navigate('/resource');
//     }
//   }

//   function goToExperience() {
//     if (isAuthenticated) {
//       navigate('/postExperience');
//     }
//   }

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 py-4 flex justify-around">
//       <button
//         onClick={goToMentalStateSelector}
//         className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
//       >
//         Intention
//       </button>
//       <button
//         onClick={goToResource}
//         className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
//       >
//         Guidance
//       </button>
//       <button
//         onClick={goToExperience}
//         className=" bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
//       >
//         Reflection
//       </button>
//     </div>
//   );
// };

// export default BottomButton;



// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from './UserContext';

// // const BottomButton = () => {
// //   const { authData } = useAuth();
// //   const { isAuthenticated } = authData;
// //   const navigate = useNavigate();

// //   function goToMentalStateSelector() {
// //     if (isAuthenticated) {
// //       navigate('/intension');
// //     }
// //   }

// //   function goToResource() {
// //     if (isAuthenticated) {
// //       navigate('/resource');
// //     }
// //   }

// //   function goToExperience() {
// //     if (isAuthenticated) {
// //       navigate('/postExperience');
// //     }
// //   }

// //   return (
// //     <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 py-4 flex justify-around">
// //       <button
// //         onClick={goToMentalStateSelector}
// //         className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
// //       >
// //         Intention
// //       </button>
// //       <button
// //         onClick={goToResource}
// //         className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
// //       >
// //         Mid Trip
// //       </button>
// //       <button
// //         onClick={goToExperience}
// //         className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all"
// //       >
// //         Post
// //       </button>
// //     </div>
// //   );
// // };

// // export default BottomButton;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './UserContext';

// const BottomButton = () => {
//   const { authData } = useAuth();
//   const { isAuthenticated } = authData;
//   const navigate = useNavigate();

//   const navigationButtons = [
//     {
//       label: <span className="font-bold">Intention</span>,
//       path: '/intension',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/intension');
//         }
//       }
//     },
//     {
//       label: 'Guidance',
//       path: '/resource',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/resource');
//         }
//       }
//     },
//     {
//       label: 'Reflection',
//       path: '/postExperience',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/postExperience');
//         }
//       }
//     }
//   ];

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 py-4">
//       <div className="flex justify-around max-w-screen-xl mx-auto px-4">
//         {navigationButtons.map((button, index) => (
//           <button
//             key={index}
//             onClick={button.onClick}
//             className=" font-bold
//               bg-gradient-to-r from-purple-600 to-purple-700 
//               text-white py-3 px-6 
//               rounded-lg
//               hover:from-purple-700 hover:to-purple-800 
//               transition-all
//               text-sm md:text-base
//               whitespace-nowrap
//             "
//           >
//             {button.label}
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default BottomButton;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './UserContext';

// const BottomButton = () => {
//   const { authData } = useAuth();
//   const { isAuthenticated } = authData;
//   const navigate = useNavigate();

//   const navigationButtons = [
//     {
//       label: 'Home',
//       path: '/',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/');
//         }
//       }
//     },
//     {
//       label: <span className="font-bold">Intention</span>,
//       path: '/intension',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/intension');
//         }
//       }
//     },
//     {
//       label: 'Guidance',
//       path: '/resource',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/resource');
//         }
//       }
//     },
//     {
//       label: 'Reflection',
//       path: '/postExperience',
//       onClick: () => {
//         if (isAuthenticated) {
//           navigate('/postExperience');
//         }
//       }
//     }
//   ];

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 py-4">
//       <div className="flex justify-around max-w-screen-xl mx-auto px-4">
//         {navigationButtons.map((button, index) => (
//           <button
//             key={index}
//             onClick={button.onClick}
//             className="
//               font-bold
//               bg-gradient-to-r from-purple-600 to-purple-700 
//               text-white py-3 px-6 
//               rounded-lg
//               hover:from-purple-700 hover:to-purple-800 
//               transition-all
//               text-sm md:text-base
//               whitespace-nowrap
//             "
//           >
//             {button.label}
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default BottomButton;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './UserContext';

const BottomButton = () => {
  const { authData } = useAuth();
  const { isAuthenticated } = authData;
  const navigate = useNavigate();

  const navigationButtons = [
    {
      label: 'Home',
      path: '/journalScreen',
      onClick: () => {
        if (isAuthenticated) {
          navigate('/journalScreen');
        }
      }
    },
    {
      label: <span className="font-bold">Intention</span>,
      path: '/intension',
      onClick: () => {
        if (isAuthenticated) {
          navigate('/intension');
        }
      }
    },
    {
      label: 'Guidance',
      path: '/resource',
      onClick: () => {
        if (isAuthenticated) {
          navigate('/resource');
        }
      }
    },
    {
      label: 'Reflection',
      path: '/postExperience',
      onClick: () => {
        if (isAuthenticated) {
          navigate('/postExperience');
        }
      }
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 py-2">
      <div className="flex justify-between items-center px-2">
        {navigationButtons.map((button, index) => (
          <button
            key={index}
            onClick={button.onClick}
            className="
              font-bold
              bg-gradient-to-r from-purple-600 to-purple-700 
              text-white py-2 px-2
              rounded-lg
              hover:from-purple-700 hover:to-purple-800 
              transition-all
              text-xs
              whitespace-nowrap
              min-w-[60px]
            "
          >
            {button.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomButton;