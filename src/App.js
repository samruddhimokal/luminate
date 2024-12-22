
import './index.css';
// import MuscleSelector from './components/Body-part';
import OnboardingScreen from './components/OnboardingScreen';
import AuthForms from './components/Login';
import JournalScreen from './components/journal-screen-updated';
// import JourneyRoadmap from './components/journey-roadmap.tsx';

import { Routes, Route } from 'react-router-dom';
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
  const { authData, isLogin } = useAuth();
  
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


// import './index.css';
// import OnboardingScreen from './components/OnboardingScreen';
// import AuthForms from './components/Login';
// import JournalScreen from './components/journal-screen-updated';
// import { Routes, Route, useLocation } from 'react-router-dom';
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

// function App() {
//   const location = useLocation();
//   const { authData, isLogin } = useAuth();

//   // Function to determine if bottom button should be shown
//   // const shouldShowBottomButton = () => {
//   //   return authData.isAuthenticated && location.pathname !== '/';
//   // };

//   // Main content based on authentication
//   if (!authData.isAuthenticated) {
//     return <AuthForms />;
//   }

//   // For authenticated users
//   return (
//     <div>
//       {authData.isAuthenticated && isLogin ? (
//         <Routes>
//           <Route path="/journalScreen" element={<JournalScreen/>} />
//           <Route path="/postExperience" element={<PostExperience/>} />
//           <Route path="/bodyMap" element={<MuscleSelector/>} />
//           <Route path="/storyMap" element={<JourneyRoadmap/>} />
//           <Route path="/intension" element={<MentalStateSelector/>} />
//           <Route path="/resource" element={<ResourceSelector/>} />
//           <Route path="/chanting" element={<Chanting/>} />
//           <Route path="/meditation" element={<Meditation/>} />
//           <Route path="/positiveThoughts" element={<PositiveThoughts/>} />
//           <Route path="/profile" element={<UserProfile/>} />
//           <Route path="/audio" element={<AudioRecorder/>} />
//           <Route path="/" element={<JournalScreen/>} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route path="/onbardingScreen" element={<OnboardingScreen/>} />
//           <Route path="/" element={<OnboardingScreen/>} />
//         </Routes>
//       )}
//       {shouldShowBottomButton() && <BottomButton />}
//     </div>
//   );
// }

// export default App;