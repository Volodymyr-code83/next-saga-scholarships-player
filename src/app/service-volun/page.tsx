"use client";

import SatisfactionRating from '../../components/Satisfaction/SatisfactionRating';
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


interface TodoData2Type {
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  feedbackN: number;
  recommendT1: string;
  recommendT2: string;
  likeT1: string;
  likeT2: string;
  text: string;
}

const Page = () => {
  // const router = useRouter(); // Initialize useRouter
  const cookies = parseCookies(); // Read cookies using nookies
  const token = cookies.token;
  // const isAuthenticated = useAuth();
  
  
    // Check authentication status and handle redirection
    
    const [isSaving, setIsSaving] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("Saving data...");
    const [success, setSuccess] = useState(false);
    const [toDoData2, setToDoData2] = useState<TodoData2Type>({
        imageUrl1: "",
        imageUrl2: "",
        imageUrl3: "",
        feedbackN: 1,
        recommendT1: "",
        recommendT2: "",
        likeT1: "",
        likeT2: "",
        text: "",
      });
      const [isOpenedEditImageModal1, setIsOpenedEditImageModal1] = useState(false);
      const [isOpenedEditImageModal2, setIsOpenedEditImageModal2] = useState(false);
      const [isOpenedEditImageModal3, setIsOpenedEditImageModal3] = useState(false);
      // const [isOpenedEditTextModal, setIsOpenedEditTextModal] = useState(false);
    
      const handleClose1 = () => {
        setIsOpenedEditImageModal1(false);
        // setIsOpenedEditTextModal(false);
      };

      const handleClose2 = () => {
        setIsOpenedEditImageModal2(false);
        // setIsOpenedEditTextModal(false);
      };

      const handleClose3 = () => {
        setIsOpenedEditImageModal3(false);
        // setIsOpenedEditTextModal(false);
      };
    
      const handleEditImage1 = () => {
        setIsOpenedEditImageModal1(true);
      };

      const handleEditImage2 = () => {
        setIsOpenedEditImageModal2(true);
      };

      const handleEditImage3 = () => {
        setIsOpenedEditImageModal3(true);
      };

      const handleFeedbackNChange = (data:number): void => {
        setToDoData2({...toDoData2, feedbackN: data});
      }
    
      // const handleEditText = () => {
      //   setIsOpenedEditTextModal(true);
      // };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const userUid = user.uid;
            const toDoDataRef = ref(db, `userData/${userUid}/toDoData2`);
            onValue(toDoDataRef, (snapshot) => {
              const data = snapshot.val();
              if (data) {
                setToDoData2(data);
              }
            });
          } else {
            setToDoData2({
              imageUrl1: "",
              imageUrl2: "",
              imageUrl3: "",
              feedbackN: 1,
              recommendT1: "",
              recommendT2: "",
              likeT1: "",
              likeT2: "",
              text: "",
            });
          }
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    
      const handleSubmitImage1 = (image: string) => {
        setToDoData2({
          ...toDoData2,
          imageUrl1: image,
        });
        setIsOpenedEditImageModal1(false);
      };

      const handleSubmitImage2 = (image: string) => {
        setToDoData2({
          ...toDoData2,
          imageUrl2: image,
        });
        setIsOpenedEditImageModal2(false);
      };

      const handleSubmitImage3 = (image: string) => {
        setToDoData2({
          ...toDoData2,
          imageUrl3: image,
        });
        setIsOpenedEditImageModal3(false);
      };

      const handleRecommendTChange1 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setToDoData2({...toDoData2, recommendT1: e.target.value});
      }

      const handleRecommendTChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setToDoData2({...toDoData2, recommendT2: e.target.value});
      }

      const handleLikeTChange1 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setToDoData2({...toDoData2, likeT1: e.target.value});
      }

      const handleLikeTChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setToDoData2({...toDoData2, likeT2: e.target.value});
      }



      const handleSubmit = () => {
        setIsSaving(true);
        setProgress(0);
        setMessage("Saving data...");
        setSuccess(false);
        // Logic to gather data from input fields and update pageData
        const user = auth.currentUser;
        if (user) {
          const userUid = user.uid;
          const userRef = ref(db, `userData/${userUid}/toDoData2`);
          set(userRef, {
            imageUrl1: toDoData2.imageUrl1,
            imageUrl2: toDoData2.imageUrl2,
            imageUrl3: toDoData2.imageUrl3,
            feedbackN: toDoData2.feedbackN,
            recommendT1: toDoData2.recommendT1,
            recommendT2: toDoData2.recommendT2,
            likeT1: toDoData2.likeT1,
            likeT2: toDoData2.likeT2,
            text: toDoData2.text,
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


    
      // const handleSubmitText = (text: string) => {
      //   setPageData2({
      //     ...pageData2,
      //     text,
      //   });
      //   setIsOpenedEditTextModal(false);
      // };
      
      
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

      useEffect(() => {
        if (!token) {
            // router.push("/signin"); // Redirect to the sign-in page using Next.js's router
            window.location.href = "/signin";
          }
      }, [token]);
  return (
    <>
  <div>
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start justify-start gap-[30px]">
      <p>Upload other picture or videos that can be used for promotional purposes</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
        <button
          className="relative flex h-auto min-h-[200px] w-full items-center justify-center rounded-[20px] bg-white"
          type="button"
          onClick={() => handleEditImage1()}
        >
          {toDoData2?.imageUrl1 && (
            <Image
              src={toDoData2?.imageUrl1}
              width={892}
              height={588}
              alt=""
              className="h-auto w-full rounded-[20px] object-cover"
            />
          )}
          <p className="absolute z-[1] text-lg font-medium leading-6 pb-[5px]">Image 1</p>
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
          {toDoData2?.imageUrl2 && (
            <Image
              src={toDoData2?.imageUrl2}
              width={892}
              height={588}
              alt=""
              className="h-auto w-full rounded-[20px] object-cover"
            />
          )}
          <p className="absolute z-[1] text-lg font-medium leading-6 pb-[5px]">Image 2</p>
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
          onClick={() => handleEditImage3()}
        >
          {toDoData2?.imageUrl3 && (
            <Image
              src={toDoData2?.imageUrl3}
              width={892}
              height={588}
              alt=""
              className="h-auto w-full rounded-[20px] object-cover"
            />
          )}
          <p className="absolute z-[1] text-lg font-medium leading-6 pb-[5px]">Image 3</p>
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
      <div className="relative flex w-full items-center justify-end gap-5">
        {/* Edit and Delete buttons if needed */}
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">How satisfied are you with our services?</h1>
        <div className="px-[20px] bg-white rounded-[10px]">
          <SatisfactionRating rating={toDoData2?.feedbackN} sendRatingToParent={handleFeedbackNChange} />
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Would you recommend our services to others? Why or why not?</h1>
        <div className="w-full">
          <textarea
            className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Let's hear what you have to say..."
            rows={6}
            value={toDoData2?.recommendT1}
            onChange={handleRecommendTChange1}
          />
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Would you recommend our services to others? Why or why not?</h1>
        <div className="w-full">
          <textarea
            className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Let's hear what you have to say..."
            rows={6}
            value={toDoData2?.recommendT2}
            onChange={handleRecommendTChange2}
          />
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">What do you like the most about our services?</h1>
        <textarea
          className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Let's hear what you have to say..."
          rows={6}
          value={toDoData2?.likeT1}
          onChange={handleLikeTChange1}
        />
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">What do you like the most about our services?</h1>
        <textarea
          className="block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Let's hear what you have to say..."
          rows={6}
          value={toDoData2?.likeT2}
          onChange={handleLikeTChange2}
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

  {isOpenedEditImageModal1 && (
    <ServiceDescImageModal
      isOpen={isOpenedEditImageModal1}
      onClose={handleClose1}
      imageUrl={toDoData2?.imageUrl1}
      onSubmit={handleSubmitImage1}
    />
  )}

  {isOpenedEditImageModal2 && (
    <ServiceDescImageModal
      isOpen={isOpenedEditImageModal2}
      onClose={handleClose2}
      imageUrl={toDoData2?.imageUrl2}
      onSubmit={handleSubmitImage2}
    />
  )}

  {isOpenedEditImageModal3 && (
    <ServiceDescImageModal
      isOpen={isOpenedEditImageModal3}
      onClose={handleClose3}
      imageUrl={toDoData2?.imageUrl3}
      onSubmit={handleSubmitImage3}
    />
  )}

  {isSaving && (
    <Notification message={message} progress={progress} success={success} />
  )}
</>

  );
};

export default Page;
