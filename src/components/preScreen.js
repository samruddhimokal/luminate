// import React, { useState, useEffect } from 'react';

// const PrefaceScreen = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       if (onComplete) {
//         onComplete();
//       }
//     }, 5000); // 5 seconds

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-gradient-to-b from-purple-900 to-purple-700 flex items-center justify-center px-4">
//       <div className="max-w-xl text-center animate-fade-in">
//         <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
//           Welcome to Luminate
//         </h1>
//         <p className="text-purple-100 text-lg leading-relaxed">
//           This app includes reflective exercises and best practices of plant medicine experiences, 
//           helping you optimize or improve the feelings and life changes you get as a result of these experiences.
//         </p>
//         <p className="text-purple-100 text-lg mt-4 leading-relaxed">
//           By answering these few questions, it will help you maximize your plant medicine experience.
//         </p>
//       </div>
//     </div>
//   );
// };

// // Usage example component
// const App = () => {
//   const [showMainContent, setShowMainContent] = useState(false);

//   const handlePrefaceComplete = () => {
//     setShowMainContent(true);
//   };

//   return (
//     <>
//       <PrefaceScreen onComplete={handlePrefaceComplete} />
//       {showMainContent && (
//         <div className="p-4">
//           {/* Your main app content here */}
//           <h1>Main Content</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default App;