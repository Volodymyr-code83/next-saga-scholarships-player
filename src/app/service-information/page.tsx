"use client";

// import { useRouter } from "next/navigation";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceDeleteModal from "@/components/services/ServiceDeleteModal";
import ServiceEditModal from "@/components/services/ServiceEditModal";
import { ServicePageDataType } from "@/types";
import { useState, ChangeEvent, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";

import firebaseConfig from "../../../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

import { todo } from "node:test";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

interface NotificationProps {
  message: string;
  progress: number;
  success: boolean;
}

interface ToDoData1Type {
  youtubeHighlightVideoLink: string;
  transcripts: File | null;
  spantranReferenceNum: string;
  ncaaIdNum: string;
  ncaaFinalReport: File | null;
  duolingoCertificate: File | null;
  satScoreCertificate: File | null;
  gameYoutubeLink: string;
  translated: File | null;
  finalSpantranReport: File | null;
  toeflScoreCertificate: File | null;
  oneTwenty: File | null;
}

const Page = () => {
  // const router = useRouter(); // Initialize useRouter
  const [isSaving, setIsSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Saving data...");
  const [success, setSuccess] = useState(false);
  const cookies = parseCookies(); // Read cookies using nookies
  const token = cookies.token;

    // const isAuthenticated = useAuth();

  
    // Check authentication status and handle redirection
    useEffect(() => {
      if (!token) {
          // router.push("/signin"); // Redirect to the sign-in page using Next.js's router
          window.location.href = "/signin";
        }
    }, [token]);
  const [toDoData1, setToDoData1] = useState<ToDoData1Type>({
    youtubeHighlightVideoLink: '',
    transcripts: null,
    spantranReferenceNum: '',
    ncaaIdNum: '',
    ncaaFinalReport: null,
    duolingoCertificate: null,
    satScoreCertificate: null,
    gameYoutubeLink: '',
    translated: null,
    finalSpantranReport: null,
    toeflScoreCertificate: null,
    oneTwenty: null,
  });

  const handleYoutubeHighlightVideoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData1({...toDoData1, youtubeHighlightVideoLink: e.target.value});
  }

  const handleSpantranReferenceNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData1({...toDoData1, spantranReferenceNum: e.target.value});
  }

  const handleNcaaIdNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData1({...toDoData1, ncaaIdNum: e.target.value});
  }

  const handleGameYoutubeLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData1({...toDoData1, gameYoutubeLink: e.target.value});
  }

  const handleTranscriptsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, transcripts: e.target.files[0]});
    }
  }

  const handleNcaaFinalReportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, ncaaFinalReport: e.target.files[0]});
    }
  }

  const handleDuolingoCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, duolingoCertificate: e.target.files[0]});
    }
  }

  const handleSatScoreCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, satScoreCertificate: e.target.files[0]});
    }
  }

  const handleTranslatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, translated: e.target.files[0]});
    }
  }

  const handleFinalSpantranReportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, finalSpantranReport: e.target.files[0]});
    }
  }

  const handleToeflScoreCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, toeflScoreCertificate: e.target.files[0]});
    }
  }

  const handleOneTwentyChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setToDoData1({...toDoData1, oneTwenty: e.target.files[0]});
    }
  }

  const uploadFileToStorage = async (file: File, name: string) => {
    // You need to implement the file upload logic to Firebase Storage here
    // For simplicity, I'll just set the download URL to the file name
    const downloadURL = file.name;
    return downloadURL;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      uploadFileToStorage(file, name);
    } else {
      setToDoData1((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = () => {
    setIsSaving(true);
    setProgress(0);
    setMessage("Saving data...");
    setSuccess(false);
    const user = auth.currentUser; 
    if (user) {
      const userUid = user.uid;
      const userRef = ref(db, `userData/${userUid}/toDoData1`);
      set(userRef, toDoData1)
      .then(() => {
        console.log("Page data saved successfully!");
        setProgress(100);
        setMessage("Data saved successfully! ✔️");
        setTimeout(() => {
          setSuccess(true);
          setTimeout(() => {
            setIsSaving(false);
          }, 3000); // Keep success message displayed for 3 seconds
        }, 1000); // Allow time for the progress bar to fill before hiding
      })
      .catch((error) => {
        console.error("Error saving page data: ", error);
        setIsSaving(false);
      });

    // Simulate progress bar
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 90) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 300);
  } else {
    console.error("No user is currently signed in.");
  }

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUid = user.uid;
        const pageDataRef = ref(db, `userData/${userUid}/toDoData1`);
        onValue(pageDataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setToDoData1(data);
          }
        });
      } else {
        setToDoData1({
          youtubeHighlightVideoLink: '',
          transcripts: null,
          spantranReferenceNum: '',
          ncaaIdNum: '',
          ncaaFinalReport: null,
          duolingoCertificate: null,
          satScoreCertificate: null,
          gameYoutubeLink: '',
          translated: null,
          finalSpantranReport: null,
          toeflScoreCertificate: null,
          oneTwenty: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Notification = ({ message, progress, success }: NotificationProps) => {
    return (
      <div
        className={`fixed right-5 bottom-5 w-80 p-4 bg-green-600 text-white rounded shadow-lg transition-transform duration-700 ${
          success && "transform translate-x-full"
        }`}
      >
        <div>{message}</div>
        {!success && (
          <div className="w-full bg-green-200 h-2 rounded mt-2">
            <div
              className="bg-green-500 h-full rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
  <div className="grid w-full max-w-[2000px] gap-[50px] md:grid-cols-2">
    <div className="w-full">
      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Your Youtube highlight video link</p>
        <input
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="youtubeHighlightVideoLink"
          id="youtubeHighlightVideoLink"
          value={toDoData1?.youtubeHighlightVideoLink}
          onChange={handleYoutubeHighlightVideoLinkChange}
          placeholder="Should only be a link"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload transcripts</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="transcripts"
          id="transcripts"
          onChange={handleInputChange}
          placeholder="Upload PDF file"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Spantran reference number</p>
        <input
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="spantranReferenceNum"
          id="spantranReferenceNum"
          value={toDoData1.spantranReferenceNum}
          onChange={handleSpantranReferenceNumChange}
          placeholder="Should be in numbers"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">NCAA ID number</p>
        <input
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="ncaaIdNum"
          id="ncaaIdNum"
          value={toDoData1?.ncaaIdNum}
          onChange={handleNcaaIdNumChange}
          placeholder="Should be in numbers"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload PDF of NCAA final report</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="ncaaFinalReport"
          id="ncaaFinalReport"
          onChange={handleInputChange}
          placeholder="Upload PDF file"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload Duolingo certificate PDF</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="duolingoCertificate"
          id="duolingoCertificate"
          onChange={handleInputChange}
          placeholder="Should be in a PDF format"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload SAT score certificate PDF</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="satScoreCertificate"
          id="satScoreCertificate"
          onChange={handleInputChange}
          placeholder="Should be in a PDF format"
        />
      </div>
    </div>

    <div className="w-full">
      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Your full game Youtube link</p>
        <input
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type="text"
          name="gameYoutubeLink"
          id="gameYoutubeLink"
          value={toDoData1.gameYoutubeLink}
          onChange={handleGameYoutubeLinkChange}
          placeholder="Should only be a link"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload translated PDF</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="translated"
          id="translated"
          onChange={handleInputChange}
          placeholder="Upload PDF file"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload Final Spantran report PDF</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="finalSpantranReport"
          id="finalSpantranReport"
          onChange={handleInputChange}
          placeholder="Upload PDF file"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload TOEFL score certificate PDF</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="toeflScoreCertificate"
          id="toeflScoreCertificate"
          onChange={handleInputChange}
          placeholder="Upload PDF file"
        />
      </div>

      <div className="w-full mb-[50px]">
        <p className="text-lg font-medium leading-6 pb-[10px]">Upload a PDF of 1-20</p>
        <input
          type="file"
          accept=".pdf"
          className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          name="oneTwenty"
          id="oneTwenty"
          onChange={handleInputChange}
          placeholder="Upload PDF file"
        />
      </div>
      <div className="flex justify-end mt-[1rem]">
        <button
          type="submit"
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  {isSaving && (
    <Notification message={message} progress={progress} success={success} />
  )}
</>

  );
};

export default Page;
