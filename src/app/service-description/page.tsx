"use client";

// import { useRouter } from "next/navigation";
import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import ServiceDescImageModal from "@/components/services/ServiceDescImageModal";
import ServiceDescTextEditModal from "@/components/services/ServiceDescTextEditModal";
import firebaseConfig from "../../../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { setCookie, parseCookies } from "nookies"; 

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

interface NotificationProps {
  message: string;
  progress: number;
  success: boolean;
}


interface ToDoDataType {
  imageUrl1: string;
  imageUrl2: string;
  day: number;
  month: number;
  year: number;
  text: string;
  preferredPosition: string;
  secondaryPreferredPosition: string;
  resume: string;
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
    
  
  const [toDoData, setToDoData] = useState<ToDoDataType>({
    imageUrl1: "",
    imageUrl2: "",
    day: 0,
    month: 0,
    year: 0,
    preferredPosition: "",
    secondaryPreferredPosition: "",
    resume: "",
    text: "",
  });
  const [isOpenedEditImageModal1, setIsOpenedEditImageModal1] = useState(false);
  const [isOpenedEditImageModal2, setIsOpenedEditImageModal2] = useState(false);
  // const [isOpenedEditTextModal, setIsOpenedEditTextModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUid = user.uid;
        const toDoDataRef = ref(db, `userData/${userUid}/toDoData`);
        onValue(toDoDataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setToDoData(data);
          }
        });
      } else {
        setToDoData({
          imageUrl1: "",
          imageUrl2: "",
          day: 0,
          month: 0,
          year: 0,
          preferredPosition: "",
          secondaryPreferredPosition: "",
          resume: "",
          text: "",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  const handleClose1 = () => {
    setIsOpenedEditImageModal1(false);
    // setIsOpenedEditTextModal(false);
  };

  const handleClose2 = () => {
    setIsOpenedEditImageModal2(false);
  }

  const handleEditImage1 = () => {
    setIsOpenedEditImageModal1(true);
  };

  const handleEditImage2 = () => {
    setIsOpenedEditImageModal2(true);
  }

  // const handleEditText = () => {
  //   setIsOpenedEditTextModal(true);
  // };

  const handleSubmitImage1 = (image: string) => {
    setToDoData({
      ...toDoData,
      imageUrl1: image,
    });
    setIsOpenedEditImageModal1(false);
  };

  const handleSubmitImage2 = (image: string) => {
    setToDoData({
      ...toDoData,
      imageUrl2: image,
    });
    setIsOpenedEditImageModal2(false);
  }

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData({...toDoData, day: parseInt(event.target.value)});  
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData({...toDoData, month: parseInt(event.target.value)});
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData({...toDoData, year: parseInt(event.target.value)});
  };

  const handlePreferredPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData({...toDoData, preferredPosition: e.target.value});
  }

  const handleSecondaryPreferredPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDoData({...toDoData, secondaryPreferredPosition: e.target.value});
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setToDoData({...toDoData, resume: e.target.value});
  }

  // const handleSubmitText = (text: string) => {
  //   setPageData({
  //     ...pageData,
  //     text,
  //   });
  //   setIsOpenedEditTextModal(false);
  // };

  const handleSave = () => {
    setIsSaving(true);
    setProgress(0);
    setMessage("Saving data...");
    setSuccess(false);
    // Logic to gather data from input fields and update pageData
    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;
      const userRef = ref(db, `userData/${userUid}/toDoData`);
      set(userRef, {
        imageUrl1: toDoData.imageUrl1,
        imageUrl2: toDoData.imageUrl2,
        day: toDoData.day,
        month: toDoData.month,
        year: toDoData.year,
        preferredPosition: toDoData.preferredPosition,
        secondaryPreferredPosition: toDoData.secondaryPreferredPosition,
        resume: toDoData.resume,
        text: toDoData.text,
      })
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

  // useEffect(() => {
  //   if (!token) {
  //       // router.push("/signin"); // Redirect to the sign-in page using Next.js's router
  //       window.location.href = "/signin";
  //     }
  // }, [token]);

  return (
    <div className="mx-auto w-full max-w-screen-xl gap-[30px] p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
  <button
          className="relative flex h-auto min-h-[200px] w-full items-center justify-center rounded-[20px] bg-white"
          type="button"
          onClick={() => handleEditImage2()}
        >
          {toDoData?.imageUrl1 && (
            <Image
              src={toDoData?.imageUrl1}
              width={892}
              height={588}
              alt=""
              className="h-auto w-full rounded-[20px] object-cover"
            />
          )}
          <p className="absolute z-[1] text-lg font-medium leading-6 pb-[5px]">Upload your profile picture here</p>
          <div className="absolute px-[10px] z-[1] py-[10px] bg-blue rounded-[5px] mt-[80px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
    <button
          className="relative flex h-auto min-h-[200px] w-full items-center justify-center rounded-[20px] bg-white"
          type="button"
          onClick={() => handleEditImage2()}
        >
          {toDoData?.imageUrl2 && (
            <Image
              src={toDoData?.imageUrl2}
              width={892}
              height={588}
              alt=""
              className="h-auto w-full rounded-[20px] object-cover"
            />
          )}
          <p className="absolute z-[1] text-lg font-medium leading-6 pb-[5px]">Upload your in-action picture here</p>
          <div className="absolute px-[10px] z-[1] py-[10px] bg-blue rounded-[5px] mt-[80px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4998 12.5L13.3332 8.33337L4.1665 17.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
  </div>
  <div className="flex flex-col md:flex-row w-full max-w-screen-xl items-start justify-between gap-5 mt-[30px]">
    <div>
      <div className="flex flex-col"> 
        <p className="text-lg font-medium leading-6 pb-[10px]">Date of birth</p>
        <div className="date-of-birth-container">
          <h2 className="date-of-birth-header">Date of Birth</h2>
          <div className="date-inputs flex gap-[10px]">
            <input
              type="number"
              placeholder="Day"
              min="1"
              max="31"
              value={toDoData?.day || ''}
              onChange={handleDayChange}
              className="rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none"
            />
            <input
              type="number"
              placeholder="Month"
              min="1"
              max="12"
              value={toDoData?.month || ''}
              onChange={handleMonthChange}
              className="rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none"
            />
            <input
              type="number"
              placeholder="Year"
              min="1900"
              max="2024"
              value={toDoData?.year || ''}
              onChange={handleYearChange}
              className="rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none"
            />
          </div>
        </div> 
      </div>
      <div className="flex flex-col w-full gap-5 mt-[20px]">
        <div className="w-full md:w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">Preferred position</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none"
            type="text"
            name="preferredPosition"
            id="preferredPosition"
            value={toDoData?.preferredPosition}
            onChange={handlePreferredPositionChange}
            placeholder="Enter the position you prefer"
          />
        </div>
        <div className="w-full md:w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">Secondary preferred position</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none"
            type="text"
            name="secondaryPosition"
            id="secondaryPosition"
            value={toDoData?.secondaryPreferredPosition}
            onChange={handleSecondaryPreferredPositionChange}
            placeholder="Enter your secondary preferred position"
          />
        </div>
      </div>
    </div>
    <div className="w-full md:w-[580px]">
      <p className="text-lg font-medium leading-6 pb-[10px]">Upload your soccer resume (in words)</p>
      <textarea
        className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        placeholder="Enter your resume text here..."
        value={toDoData?.resume}
        onChange={handleResumeChange}
        rows={6}
      />
      <div className="flex justify-end mt-[1rem]">
        <button
          type="submit"
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleSave}
        > Submit
        </button>
      </div>
    </div>
  </div>



        

      
      {/* <div className="flex w-full items-center justify-end gap-5">
          <button
            className="rounded bg-blue px-4 py-2 text-[13px] uppercase leading-[13px] text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue"
            type="button"
            onClick={() => handleEditImage()}
          >
            Edit
          </button>
          <button
            className=" rounded bg-red px-4 py-2 text-[13px] uppercase leading-[13px] text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red"
            type="button"
            onClick={() =>
              setPageData({
                ...pageData,
                imageUrl: "",
              })
            }
          >
            Delete
          </button>
      </div> */}
      {isOpenedEditImageModal1 && (
        <ServiceDescImageModal
          isOpen={isOpenedEditImageModal1}
          onClose={handleClose1}
          imageUrl={toDoData?.imageUrl1}
          onSubmit={handleSubmitImage1}
        />
      )}

      {isOpenedEditImageModal2 && (
        <ServiceDescImageModal
          isOpen={isOpenedEditImageModal2}
          onClose={handleClose2}
          imageUrl={toDoData?.imageUrl2}
          onSubmit={handleSubmitImage2}
        />
      )}
      {/* {isOpenedEditTextModal && (
        <ServiceDescTextEditModal
          isOpen={isOpenedEditTextModal}
          onClose={handleClose}
          text={pageData?.text}
          onSubmit={handleSubmitText}
        />
      )} */}
      {isSaving && (
        <Notification message={message} progress={progress} success={success} />
      )}
    </div>
  );
};

export default Page;
