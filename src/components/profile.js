import React, { useEffect, useState } from "react";
import { User, Loader2, LogOut,Home } from "lucide-react";
import NavigationBar from "./navigation";
import { useAuth } from "./UserContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const { authData, logout } = useAuth();
  const { email, token } = authData;
  const [profileData, setProfileData] = useState(null);
  const [journalData, setJournalData] = useState(null);
  const [journeyData, setJourneyData] = useState(null);
  const [muscleData, setMuscleData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfileData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      if (profileData.journalAllData) {
        const filteredData1 = profileData.journalAllData.filter(
          (item) => item.experienceDate === selectedDate
        );
        setJournalData(filteredData1);
      } else {
        setJournalData(null);
      }

   

      console.log(profileData.journeysAll.length);
if (profileData?.journeysAll?.length > 0) {
  const filteredData2 = profileData.journeysAll.find((item) => {
    // Check if item is defined and has a date
    if (!item || !item.date) {
      // Instead of returning false, set a custom "not found" object
      setJourneyData({
        notFound: true,
        message: "No journey details available for the selected date",
        selectedDate: selectedDate
      });
      return false;
    }

    try {
      const createdAtDate = new Date(item.date)
        .toISOString()
        .split("T")[0];
      
      // Compare it with the selected date
      return createdAtDate === selectedDate;
    } catch (error) {
      console.error("Error parsing date:", error);
      // Set a custom error object when date parsing fails
      setJourneyData({
        error: true,
        message: "Error processing journey date",
        originalError: error.toString(),
        selectedDate: selectedDate
      });
      return false;
    }
  });

  // Check if a matching journey was found
  if (filteredData2) {
    setJourneyData(filteredData2);
    // console.log(filteredData2.date);
  } else {
    // No matching journey found
    setJourneyData({
      notFound: true,
      message: "No journey found for the selected date",
      selectedDate: selectedDate
    });
  }
} else {
  // No journeys in the array
  setJourneyData({
    empty: true,
    message: "No journeys available",
    selectedDate: selectedDate
  });
}
      if (profileData.muscleSelectionsAll) {
        const filteredData3 = profileData.muscleSelectionsAll.filter((item) => {
          // Extract the date part from createdAt
          const createdAtDate = new Date(item.date).toISOString().split("T")[0];
          // Compare it with the selected date
          return createdAtDate === selectedDate;
        });
        setMuscleData(filteredData3);
      } else {
        setMuscleData(null);
      }

      if (profileData.postExperiencesAll) {
        const filteredData4 = profileData.postExperiencesAll.filter((item) => {
          // Extract the date part from createdAt
          const createdAtDate = new Date(item.date).toISOString().split("T")[0];
          // Compare it with the selected date
          return createdAtDate === selectedDate;
        });
        setPostData(filteredData4);
      } else {
        setPostData(null);
      }

      if (profileData.audiosAll) {
        const filteredData5 = profileData.audiosAll.filter((item) => {
          // Extract the date part from createdAt
          const createdAtDate = new Date(item.date).toISOString().split("T")[0];
          // Compare it with the selected date
          return createdAtDate === selectedDate;
        });

        setAudioData(filteredData5);
      } else {
        setAudioData(null);
      }
    }
  }, [selectedDate]);


  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/profile`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, selectedDate }),
      });
      const data = await response.json();
  
      if (response.ok) {
        setProfileData(data.data);
        const latestDate = data.data.dates[data.data.dates.length - 1]; // Get the last date, assuming it's the latest
        setSelectedDate(latestDate);
        setError(null);
      } else {
        if (response.status === 401 && data.message.includes("Invalid or expired token")) {
          // Handle token expiration or invalid token
          handleLogout();
        } else {
          setError(data.message || "Error fetching user data. Please try again.");
        }
      }
    } catch (err) {
      setError("Error fetching user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


  const handleLogout = () => {

    logout();

  navigate("/");

  };


  const handleHome = () => {
    navigate("/journalScreen");
  };
  const DateDropdown = () => (
    <select
      className="mb-4 p-2 bg-gray-800 text-white rounded"
      style={{ position: "relative", top: "-61px" }}
      value={selectedDate}
      onChange={handleDateChange}
    >
      {[...profileData?.dates].reverse().map((date, index) => (
        <option key={index} value={date}>
          {date}
        </option>
      ))}
    </select>
  );

  const renderUserInfoCard = () => {
    if (!profileData?.user) return null;

    return (
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center mb-8">
        <div className="flex items-center space-x-4 w-full border-b border-gray-700 pb-4 mb-4">
          <User className="w-10 h-10 text-purple-500" />
          <h2 className="text-2xl font-bold text-purple-400">User Profile</h2>
        </div>
        <img
          src={"profile.jpg"}
          alt={profileData.user.name}
          className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover mb-4"
        />
        <h3 className="text-xl font-bold text-white">
          {profileData.user.name}
        </h3>
        <p className="text-gray-400">{profileData.user.email}</p>
       
         <div className="mt-4 flex space-x-4">
          <button
            onClick={handleHome}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <Home className="mr-2" /> Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <LogOut className="mr-2" /> Logout
          </button>
        </div>
      </div>
    );
  };

  const renderSection = (title, content) => (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">{title}</h2>
      {content?.length > 0 ? (
        content.map((item, index) => (
          <div key={index} className="mb-4">
            {item}
          </div>
        ))
      ) : (
        <p className="text-gray-400">No data available</p>
      )}
    </div>
  );

  const renderOnboardingQuestions = () =>
    profileData.onboardingQuestion
      ? renderSection(
          "Onboarding Questions",
          profileData.onboardingQuestion.responses.map((response, idx) => (
            <div key={idx} className="text-gray-300 space-y-1">
              <p>
                <strong>Q:</strong> {response.question}
              </p>
              <p>
                <strong>A:</strong> {response.answer}
              </p>
            </div>
          ))
        )
      : null;


  const renderJourneys = () => {
    console.log("Journey Data:", journeyData);
    console.log("Profile Data Journeys:", profileData?.journeys);
  
    // Check if journeyData exists and has levels
    if (journeyData?.levels?.length > 0) {
      return renderSection(
        "Journeys",
        journeyData.levels.map((level, idx) => (
          <div key={idx} className="text-gray-300 space-y-2">
            <h3 className="text-purple-300 font-semibold">{level.title}</h3>
            {level?.questionAnswers?.map((qa, i) => (
              <p key={i} className="space-y-1">
                <strong>Q:</strong> {qa.question} <br />
                <strong>A:</strong> {qa.answer}
              </p>
            ))}
          </div>
        ))
      );
    }
  
    // Check if profileData.journeys exists and has levels
    if (profileData?.journeys?.levels?.length > 0) {
      return renderSection(
        "Journeys",
        profileData.journeys.levels.map((level, idx) => (
          <div key={idx} className="text-gray-300 space-y-2">
            <h3 className="text-purple-300 font-semibold">{level.title}</h3>
            {level?.questionAnswers?.map((qa, i) => (
              <p key={i} className="space-y-1">
                <strong>Q:</strong> {qa.question} <br />
                <strong>A:</strong> {qa.answer}
              </p>
            ))}
          </div>
        ))
      );
    }
  
    // Default fallback: No journeys found
    return renderSection("Journeys", [
      <p key="no-journeys" className="text-gray-400">
        No journeys available for the selected date or overall.
      </p>,
    ]);
  };
  
  const renderMuscleSelections = () =>
    muscleData
      ? renderSection("Muscle Selections", [
          muscleData.map((item) => (
            <p className="text-gray-300 space-y-1" key={item._id}>
              {item.selectedMuscles?.join(", ") || "None"}
            </p>
          )),
        ])
      : renderSection("Muscle Selections", [
          <div className="text-gray-300 space-y-1" key="muscles">
            <p>
              <strong>Selected Muscles:</strong>{" "}
              {profileData.muscleSelections?.selectedMuscles?.join(", ") ||
                "None"}
            </p>
          </div>,
        ]);



  const renderPostExperiences = () => {
    // If postData exists, map through it
    if (postData) {
      return renderSection("Post Experiences", [
        postData.map((item) => (
          <p className="text-gray-300 space-y-1" key={item._id}>
            {item.postExperience || "No post experience available"}
          </p>
        )),
      ]);
    }
  
    // Fallback to profileData.postExperiences
    const fallbackPostExperience =
      profileData?.postExperiences?.postExperience || "No post experience available";
  
    return renderSection("Post Experiences", [
      <p className="text-gray-300 space-y-1" key="postExp">
        {fallbackPostExperience}
      </p>,
    ]);
  };
  
  const renderAudios = () => {
    // If audioData exists and is an array, map through it
    if (Array.isArray(audioData) && audioData.length > 0) {
      return renderSection(
        "Audio Summary",
        audioData.map((item) => (
          <p className="text-gray-300 space-y-1" key={item._id}>
            {item.audio || "No audio summary available"}
          </p>
        ))
      );
    }
  
    // If profileData.audios exists and is an array, map through it
    if (Array.isArray(profileData?.audios) && profileData.audios.length > 0) {
      return renderSection(
        "Audio Summary",
        profileData.audios.map((item) => (
          <p className="text-gray-300 space-y-1" key={item._id}>
            {item.audio || "No audio summary available"}
          </p>
        ))
      );
    }
  
    // Fallback: no audio data available
    return renderSection("Audio Summary", [
      <p className="text-gray-400" key="no-audio">
        No audio summaries available.
      </p>,
    ]);
  };
  
  const renderJournals = () => {
    // If journalData is not null, show specific journal data for the selected date
    if (journalData) {
      return (
        <div className="flex justify-between items-center bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Journals
            </h2>
            <div className="text-gray-300 space-y-1">
              {journalData.map((journal) => (
                <React.Fragment key={journal._id}>
                  <p>
                    <strong>Medicine:</strong> {journal.medicine}
                  </p>
                  <p>
                    <strong>Intention:</strong> {journal.intention}
                  </p>
                  <p>
                    <strong>Current State:</strong> {journal.currentState}
                  </p>
                  <p>
                    <strong>Post Experience:</strong> {journal.postExperience}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <DateDropdown />
          </div>
        </div>
      );
    } else {
      // If journalData is null, show default data from profileData.journals
      // This block will execute when the component is initially rendered
      if (!profileData?.journals)
      {
        return renderSection("Journals", [
          <p className="text-gray-400" key="no-audio">
           No default journal entries available.
          </p>,
        ]);
      }
        


      return (
        <div className="flex justify-between items-center bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Journals
            </h2>
            <div className="text-gray-300 space-y-1">
              <p>
                <strong>Medicine:</strong> {profileData.journals.medicine}
              </p>
              <p>
                <strong>Intention:</strong> {profileData.journals.intention}
              </p>
              <p>
                <strong>Current State:</strong>{" "}
                {profileData.journals.currentState}
              </p>
              <p>
                <strong>Post Experience:</strong>{" "}
                {profileData.journals.postExperience}
              </p>
            </div>
          </div>
          <div>
            <DateDropdown />
          </div>
        </div>
      );
    }
  };

  const ProfileLoader = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-950 to-black">
      <Loader2 className="animate-spin text-white mb-4" size={64} />
      <h2 className="text-xl font-semibold text-white">
        Loading Profile Data...
      </h2>
      <p className="text-sm text-blue-100 mt-2">
        Please wait while we retrieve your information.
      </p>
    </div>
  );

  if (loading) {
    return <ProfileLoader />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center text-red-500">
        <p className="mb-4">{error}</p>
        <button
          onClick={fetchProfileData}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <NavigationBar />
      <div className="max-w-6xl mx-auto">
        {renderUserInfoCard()}
        {renderOnboardingQuestions()}
        {renderJournals()}
        {renderMuscleSelections()}
        {renderJourneys()}
        {renderPostExperiences()}
        {renderAudios()}
      </div>
    </div>
  );
};

export default UserProfile;
