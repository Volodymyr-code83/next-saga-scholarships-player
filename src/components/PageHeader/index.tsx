"use client";
import { PageHeaderDataType } from "@/types";
import { useState, ChangeEvent, useEffect } from "react";
import PageHeaderModal from "./PageHeaderModal";
import ProfileImage from '../../assets/images/profileimg.png';
import ServiceDescImageModal from "@/components/services/ServiceDescImageModal";
import Chart from '../Chart/CircleBarChart';
import Image from "next/image";
import firebaseConfig from "../../../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

interface NotificationProps {
  message: string;
  progress: number;
  success: boolean;
}


interface PageDataType {
  imageUrl: string;
  completedNum1: number;
  acceptedNum1: number;
  pendingNum1: number;
  rejectedNum1: number;
  progressNum1: number;
  preferredPosition1: string;
  secondaryPosition1: string;
  wsRefNumber1: string;
  youtubeVideoLink1: string;
  ncaaNumber1: string;
  gameLink1: string;
  text: string;
}

const PageHeader = () => {

  const [progressNum, setProgressNum] = useState<number>(0);
  const [isSaving, setIsSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Saving data...");
  const [success, setSuccess] = useState(false);
  const [pageData, setPageData] = useState<PageDataType>({
    imageUrl: "",
    completedNum1: 1,
    acceptedNum1: 0,
    pendingNum1: 0,
    rejectedNum1: 0,
    progressNum1: 0,
    preferredPosition1: "",
    secondaryPosition1: "",
    wsRefNumber1: "",
    youtubeVideoLink1: "",
    ncaaNumber1: "",
    gameLink1: "",
    text: "",
  })

  const handleCompletedNumChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, completedNum1: parseInt(e.target.value)});
  }

  const handleAcceptedNumChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, acceptedNum1: parseInt(e.target.value)});
  }

  const handlePendingNumChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, pendingNum1: parseInt(e.target.value)});
  }

  const handleRejectedNumChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, rejectedNum1: parseInt(e.target.value)});
  }

  const handlePreferredPositionChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, preferredPosition1: e.target.value});
  };

  const handleSecondaryPositionChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, secondaryPosition1: e.target.value});
  }

  const handleYoutubeVideoLinkChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, youtubeVideoLink1: e.target.value});
  }

  const handleWsRefNumberChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, wsRefNumber1: e.target.value});
  }

  const handleNcaaNumberChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, ncaaNumber1: e.target.value});
  }

  const handleGameLinkChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPageData({...pageData, gameLink1: e.target.value});
  }


  useEffect(() => {
    handleProgress();
  }, [pageData?.completedNum1, pageData?.acceptedNum1, pageData?.pendingNum1, pageData?.rejectedNum1]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUid = user.uid;
        const pageDataRef = ref(db, `userData/${userUid}/pageData`);
        onValue(pageDataRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setPageData(data);
          }
        });
      } else {
        setPageData({
          imageUrl: "",
          completedNum1: 1,
          acceptedNum1: 0,
          pendingNum1: 0,
          rejectedNum1: 0,
          progressNum1: 0,
          preferredPosition1: "",
          secondaryPosition1: "",
          wsRefNumber1: "",
          youtubeVideoLink1: "",
          ncaaNumber1: "",
          gameLink1: "",
          text: "",
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [isOpenedEditImageModal, setIsOpenedEditImageModal] = useState(false);
 
  const handleEditImage = () => {
    setIsOpenedEditImageModal(true);
  }

  const handleCloseImage = () => {
    setIsOpenedEditImageModal(false);
  }

  const handleSubmitImage = (image: string) => {
    setPageData({
      ...pageData,
      imageUrl: image,
    })
    setIsOpenedEditImageModal(false)
  }

  const handleProgress = () => {
    const total = pageData?.acceptedNum1 + pageData?.pendingNum1 + pageData?.rejectedNum1 + pageData?.completedNum1;
    const value: number = parseFloat((pageData?.completedNum1 / total * 100).toFixed(1));
    setProgressNum(value);
  }

  // const handleNumberChange = (
  //   value: string,
  //   setter: React.Dispatch<React.SetStateAction<number>>
  // ) => {
  //   const parsedValue = parseInt(value);
  //   if (!isNaN(parsedValue)) {
  //     setter(parsedValue);
  //   } else {
  //     setter(0);
  //   }
  // };


  const handleSubmit = () => {
    setIsSaving(true);
    setProgress(0);
    setMessage("Saving data...");
    setSuccess(false);
    // Logic to gather data from input fields and update pageData
    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;
      const userRef = ref(db, `userData/${userUid}/pageData`);
      set(userRef, {
        imageUrl: pageData.imageUrl,
        completedNum1: pageData.completedNum1,
        acceptedNum1: pageData.acceptedNum1,
        pendingNum1: pageData.pendingNum1,
        rejectedNum1: pageData.rejectedNum1,
        progressNum1: pageData.progressNum1,
        preferredPosition1: pageData.preferredPosition1,
        secondaryPosition1: pageData.secondaryPosition1,
        wsRefNumber1: pageData.wsRefNumber1,
        youtubeVideoLink1: pageData.youtubeVideoLink1,
        ncaaNumber1: pageData.ncaaNumber1,
        gameLink1: pageData.gameLink1,
        text: pageData.text,
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
  };

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
      <div className="flex w-full max-w-[2000px] gap-20">
        <div className="flex-7 w-full">
          <div className="flex w-full items-center justify-start rounded-[10px] bg-white" style={{width:'800px'}}>
          <button 
          className="relative mx-auto flex h-full max-h-[506px] min-h-[506px] w-full max-w-[892px] items-center justify-center  rounded-[10px] bg-[#AFAFAF]"
          type="button"
          onClick={() => handleEditImage()}
        >
          {pageData?.imageUrl && (
            <Image
              src={pageData?.imageUrl}
              width={892}
              height={588}
              alt=""
              className="h-full z-[2] h-[800px] max-h-[506px] w-full max-w-[892px] bg-cover bg-center"
            />
          )} 
          <p className="absolute z-[1] text-lg font-medium leading-6 pb-[5px]">Upload your selfie here</p>
          <div className="absolute z-[1] px-[10px] py-[10px] bg-blue rounded-[5px] mt-[80px]">
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
            <div className="flex flex-col w-full items-center">
              <div className="flex flex-col justify-between gap-[100px]">
                <div>
                  <h2 className="text-center font-bold text-2xl">Player information</h2>
                </div>
                <div>
                  <label className="text-lg font-medium leading-6 pb-[5px]">DOB: 2021</label>

                  <p className="text-lg font-medium leading-6 pb-[5px]">Position: CB,RWB</p>
                  <p className="text-lg font-medium leading-6 pb-[5px]">Pursuing College enrollment</p>
                  <p className="text-lg font-medium leading-6 pb-[5px]">Sport: Football</p>
                  <p className="text-lg font-medium leading-6 pb-[5px]">Desired Major: Mechanical Eng.</p>
                  <p className="text-lg font-medium leading-6 pb-[5px]">Home Town: Washington DC</p>
                  <p className="text-lg font-medium leading-6 pb-[5px]">Home Club: DC United</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="flex-3 w-full">
          <div className="flex flex-col gap-5 rounded-[10px] bg-white px-9 pb-9 pt-5 h-[506px]">
            <div className="pt-[20px] pb-[30px]">
              <h2 className="text-center font-bold text-2xl">Tasks analystics</h2>
            </div>
            <div className="flex flex-col justfy-center items-center">
              <Chart progress={progressNum} thickness={10} />
            </div>
            <div className="flex w-full justify-between mt-[60px]">
              <div className="flex gap-[5px]">
                <label htmlFor="completedNum" className="font-bold">Completed:</label>
                <input 
                  type="text" 
                  id="completedNum" 
                  name="completedNum"
                  value={pageData?.completedNum1}
                  onChange={handleCompletedNumChange}
                  className="border border-gray-300 rounded-md px-[1px] w-[40px]"
                  placeholder="NUM"
                />        
              </div>      
              <div className="flex gap-[5px]">
                <label htmlFor="acceptedNum" className="font-bold">Accepted:</label>
                <input 
                  type="text" 
                  id="acceptedNum" 
                  name="acceptedNum" 
                  value={pageData?.acceptedNum1}
                  onChange={handleAcceptedNumChange}
                  className="border border-gray-300 rounded-md px-[1px] w-[40px]"
                  placeholder="NUM"
                />        
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex gap-[5px]">
                <label htmlFor="pendingNum" className="font-bold ml-[22px]">Pending:</label>
                <input 
                  type="text" 
                  id="pendingNum" 
                  name="pendingNum" 
                  value={pageData?.pendingNum1}
                  onChange={handlePendingNumChange}
                  className="border border-gray-300 rounded-md px-[1px] w-[40px]"
                  placeholder="NUM"
                />        
              </div>
              <div className="flex gap-[5px]">
                <label htmlFor="RejectedNum" className="font-bold">Rejected:</label>
                <input 
                  type="text" 
                  id="RejectedNum" 
                  name="RejectedNum" 
                  value={pageData?.rejectedNum1}
                  onChange={handleRejectedNumChange}
                  className="border border-gray-300 rounded-md px-[1px] w-[40px]"
                  placeholder="NUM"
                />        
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="flex flex-col w-full max-w-[2000px] gap-5">
      <div>
        <h2 className="font-bold text-2xl">Other information</h2>
      </div>
      <div className="flex justify-between w-full gap-5 mb-[10px]">
        <div className="w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">Preferred position</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="preferredPosition"
            id="preferredPosition"
            value={pageData?.preferredPosition1}
            onChange={handlePreferredPositionChange}
            placeholder="Center Back(CB)"
          />
        </div>
        <div className="w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">Secondary preferred position</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="secondaryPosition"
            id="secondaryPosition"
            value={pageData?.secondaryPosition1}
            onChange={handleSecondaryPositionChange}
            placeholder="Right Wing Back(RWB)"
          />
        </div>
        <div className="w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">WES or Spantran reference number</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="wsRefNumber"
            id="wsRefNumber"
            value={pageData?.wsRefNumber1}
            onChange={handleWsRefNumberChange}
            placeholder="Should be in numbers"
          />
        </div>
      </div>
      <div className="flex w-full gap-[150px] mb-[10px]">
        <div className="w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">Your Youtube highlight video link</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="youtubeVideoLink"
            id="youtubeVideoLink"
            value={pageData?.youtubeVideoLink1}
            onChange={handleYoutubeVideoLinkChange}
            placeholder="Should only be a link"
          />
        </div>
        <div className="w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">NCAA ID number</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="ncaaNumber"
            id="ncaaNumber"
            value={pageData?.ncaaNumber1}
            onChange={handleNcaaNumberChange}
            placeholder="Should be in numbers"
          />
        </div>
      </div>
      <div className="flex justify-between w-full gap-5 mb-[10px]">
        <div className="w-96">
          <p className="text-lg font-medium leading-6 pb-[10px]">You full game Youtube link</p>
          <input
            className="w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="gameLink"
            id="gameLink"
            value={pageData?.gameLink1}
            onChange={handleGameLinkChange}
            placeholder="Should only be a link"
          />
        </div>
      </div>
      <div className="flex justify-end mt-[1rem]">
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleSubmit}
            > Submit
            </button>
      </div>
    </div>
    

      
        {/* <PageHeaderModal
          isOpen={isModalOpened}
          data={pageHeaderData}
          onClose={() => setIsModalOpened(false)}
          onSubmit={handleSubmit}
        /> */}
        {isOpenedEditImageModal && (
        <ServiceDescImageModal
          isOpen={isOpenedEditImageModal}
          onClose={handleCloseImage}
          imageUrl={pageData?.imageUrl}
          onSubmit={handleSubmitImage}
        />
      )}
      {isSaving && (
        <Notification message={message} progress={progress} success={success} />
      )}
    </>
  );
};

export default PageHeader;
