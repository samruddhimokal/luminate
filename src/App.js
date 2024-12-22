
// import './index.css';
// // import MuscleSelector from './components/Body-part';
// import OnboardingScreen from './components/OnboardingScreen';
// import AuthForms from './components/Login';
// import JournalScreen from './components/journal-screen-updated';
// // import JourneyRoadmap from './components/journey-roadmap.tsx';

// import { Routes, Route } from 'react-router-dom';
// import MentalStateSelector from './components/intension.js';
// import MuscleSelector from './components/Body-part.js';
// import JourneyRoadmap from './components/journey-roadmap';
// import PostExperience from './components/postExperience.js';
// import ResourceSelector from './components/resouces.js';
// import PositiveThoughts from './components/resources/positiveThoughts.js';
// import Meditation from './components/resources/meditation.js';
// import Chanting from './components/resources/chanting.js';

// import BottomButton from './components/bottomButton.js';
// import UserProfile from './components/profile.js';
// import AudioRecorder from './components/audioRecorder.js';
// import { useAuth } from "./components/UserContext";

// const PrefaceScreen = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       onComplete?.();
//     }, 5000);

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
// function App() {
//   const { authData, isLogin } = useAuth();
  
//   return (
    
//      <div>
      
//      <Routes>
//         <Route path="/" element={<AuthForms />} />
       
//         <Route path="/onbardingScreen" element={<OnboardingScreen/>} />
//         <Route path="/journalScreen" element={<JournalScreen/>} />
//         <Route path="/postExperience" element={<PostExperience/>} />
//         <Route path="/bodyMap" element={<MuscleSelector/>} />
//         <Route path="/storyMap" element={<JourneyRoadmap/>} />

//         <Route path="/intension" element={<MentalStateSelector/>} />
//         <Route path="/resource" element={<ResourceSelector/>} />
//         <Route path="/chanting" element={<Chanting/>} />
//         <Route path="/meditation" element={<Meditation/>} />
//         <Route path="/positiveThoughts" element={<PositiveThoughts/>} />
//         <Route path="/profile" element={<UserProfile/>} />
//         <Route path="/audio" element={<AudioRecorder/>} />

        

//       </Routes>
//       {authData.isAuthenticated && <BottomButton/>}
//    </div>
//   );
// }

// export default App;


// import './index.css';
// import OnboardingScreen from './components/OnboardingScreen';
// import AuthForms from './components/Login';
// import JournalScreen from './components/journal-screen-updated';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import MentalStateSelector from './components/intension.js';
// import MuscleSelector from './components/Body-part.js';
// import JourneyRoadmap from './components/journey-roadmap';
// import PostExperience from './components/postExperience.js';
// import ResourceSelector from './components/resouces.js';
// import PositiveThoughts from './components/resources/positiveThoughts.js';
// import Meditation from './components/resources/meditation.js';
// import Chanting from './components/resources/chanting.js';
// import BottomButton from './components/bottomButton.js';
// import UserProfile from './components/profile.js';
// import AudioRecorder from './components/audioRecorder.js';
// import { useAuth } from "./components/UserContext";
// import { useState, useEffect } from 'react';

// const PrefaceScreen = ({ onComplete }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//       onComplete?.();
//     }, 5000);

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

// function App() {
//   const { authData } = useAuth();
//   const navigate = useNavigate();
//   const [showPreface, setShowPreface] = useState(false);

//   // Show preface screen when user authenticates
//   useEffect(() => {
//     if (authData.isAuthenticated) {
//       setShowPreface(true);
//     }
//   }, [authData.isAuthenticated]);

//   const handlePrefaceComplete = () => {
//     setShowPreface(false);
//     navigate('/onbardingScreen');
//   };

//   return (
//     <div>
//       {showPreface && <PrefaceScreen onComplete={handlePrefaceComplete} />}
//       <Routes>
//         <Route path="/" element={<AuthForms />} />
//         <Route path="/onbardingScreen" element={<OnboardingScreen/>} />
//         <Route path="/journalScreen" element={<JournalScreen/>} />
//         <Route path="/postExperience" element={<PostExperience/>} />
//         <Route path="/bodyMap" element={<MuscleSelector/>} />
//         <Route path="/storyMap" element={<JourneyRoadmap/>} />
//         <Route path="/intension" element={<MentalStateSelector/>} />
//         <Route path="/resource" element={<ResourceSelector/>} />
//         <Route path="/chanting" element={<Chanting/>} />
//         <Route path="/meditation" element={<Meditation/>} />
//         <Route path="/positiveThoughts" element={<PositiveThoughts/>} />
//         <Route path="/profile" element={<UserProfile/>} />
//         <Route path="/audio" element={<AudioRecorder/>} />
//       </Routes>
//       {authData.isAuthenticated && <BottomButton/>}
//     </div>
//   );
// }

// export default App;

import './index.css';
import OnboardingScreen from './components/OnboardingScreen';
import AuthForms from './components/Login';
import JournalScreen from './components/journal-screen-updated';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MentalStateSelector from './components/intension.js';
import MuscleSelector from './components/Body-part.js';
import JourneyRoadmap from './components/journey-roadmap';
import PostExperience from './components/postExperience.js';
import ResourceSelector from './components/resouces.js';
import PositiveThoughts from './components/resources/positiveThoughts.js';
import Meditation from './components/resources/meditation.js';
import Chanting from './components/resources/chanting.js';
import BottomButton from './components/bottomButton.js';
import UserProfile from './components/profile.js';
import AudioRecorder from './components/audioRecorder.js';
import { useAuth } from "./components/UserContext";


function App() {
  const { authData } = useAuth();
  
  

  // Only render the main app content when preface is not showing
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthForms />} />
        <Route path="/onbardingScreen" element={<OnboardingScreen/>} />
        <Route path="/journalScreen" element={<JournalScreen/>} />
        <Route path="/postExperience" element={<PostExperience/>} />
        <Route path="/bodyMap" element={<MuscleSelector/>} />
        <Route path="/storyMap" element={<JourneyRoadmap/>} />
        <Route path="/intension" element={<MentalStateSelector/>} />
        <Route path="/resource" element={<ResourceSelector/>} />
        <Route path="/chanting" element={<Chanting/>} />
        <Route path="/meditation" element={<Meditation/>} />
        <Route path="/positiveThoughts" element={<PositiveThoughts/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/audio" element={<AudioRecorder/>} />
      </Routes>
      {authData.isAuthenticated && <BottomButton/>}
    </div>
  );
}

export default App;