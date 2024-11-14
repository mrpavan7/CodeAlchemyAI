import { createContext, useEffect, useState } from "react";
import runChat from "../config/gemini";
import { app, auth, db } from '../firebase/firebase'
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../firebase/auth'
import { addLockableTarget } from "scroll-lock";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from "firebase/compat/app";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import 'firebase/auth';
import { firebaseApp } from "../firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Await } from "react-router-dom";
export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [transInput, setTransInput] = useState(" ")
    const [explainInput, setExplainInput] = useState("")
    const [debugInput, setDebugInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [transPrompts, setTransPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [transLoading, setTransLoading] = useState(false);
    const [debugLoading, setDebugLoading] = useState(false);
    const [explainLoading, setExplainLoading] = useState(false)
    const [resultData, setResultData] = useState("");
    const [explainResultData, setExplainResultData] = useState("Code Explaination...");
    const [debugResultData, setDebugResultData] = useState("");
    const [translatedResult, setTranslatedResult] = useState("Converted Code...");
    const [explainedResult, setExplainedResult] = useState(" ");
    const [debugedResult, setDebugedResult] = useState(" ");
    const [isLogin, setIsLogin] = useState(false);
    const [isTranslate, setIsTranslate] = useState(false);
    const [isExplain, setIsExplain] = useState(false);
    const [isDebug, setIsDebug] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [slideNumber, setSlideNumber] = useState(0);
    const [langSelected, setLangSelected] = useState("Language");
    const [logging, setLogging] = useState(false);
    const [email, setemail] = useState("");
    const [name, setname] = useState("Guest");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("Guest");
    const [isLanding, setIsLanding] = useState(true);
    const [isError, setIsError] = useState("");
    const [userDetails, setUserDetails] = useState();
    const [user, setUser] = useState();



    useEffect(() => {
        const fetchHistory = async () => {
            if (user && user.uid) {
                const userDocRef = doc(db, "History", user.uid);
                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const data = userDoc.data();
                        setTransPrompts(data.translations || []);
                    } else {
                        console.log("No such document!");
                    }
                } catch (e) {
                    console.error("Error fetching document: ", e);
                }
            }
        };

        fetchHistory();
    }, [user]);

    const loadTransPrompt = (item) => {
        console.log("Loading prompt:", item);
        setLangSelected(item.langSelected);
        setTransInput(item.transInput);
        setTranslatedResult(item.translatedResult);

        console.log(transInput);
        // Implement the logic to load and use the selected prompt
    };



    const handleTranslate = () => {
        setIsHome(false)
        setIsTranslate(true)
        setIsDebug(false)
        setIsExplain(false)
    }

    const handleDebug = () => {
        setIsHome(false)
        setIsTranslate(false)
        setIsDebug(true)
        setIsExplain(false)
    }

    const handleExplain = () => {
        setIsHome(false)
        setIsTranslate(false)
        setIsDebug(false)
        setIsExplain(true)
    }

    const handleBack = () => {
        if (isHome === false) {
            console.log(isHome)
            setIsHome(true)
            setIsTranslate(false)
            setIsDebug(false)
            setIsExplain(false)
        } else {
            setIsHome(true)
        }
    }

    const delayPara = (index, nextword) => {
        setTimeout(function () {
            setResultData(prev => prev + nextword);
        }, 75 * index)
    }

    const delayPara2 = (index, nextword) => {
        setTimeout(function () {
            setExplainResultData(prev => prev + nextword);
        }, 0)
    }

    const delayPara3 = (index, nextword) => {
        setTimeout(function () {
            setDebugResultData(prev => prev + nextword);
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
        setTransInput("");
        setLangSelected("Language");
        setTranslatedResult("Converted Code...");
    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;

        if (prompt !== undefined) {
            response = await runChat(prompt);
        }
        else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompt(input)
            response = await runChat(input)
        }

        let responseArray = response.split("**")
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i]
            delayPara(i, nextword + " ")
        }
        setLoading(false)
        setInput("")

    }


    const slidStyles = {
        transform: `translate(${slideNumber}px, 0px)`,
        transition: 'ease 1s'
    };

    const slideForward = () => {
        if (slideNumber === -8000) {
            console.log(slideNumber)
        } else {
            setSlideNumber(prev => prev - 500)
            console.log("else state")
            console.log(slideNumber)
        }
    }

    const slideBackword = () => {
        if (slideNumber === 0) {
            console.log(slideNumber)
        } else {
            setSlideNumber(prev => prev + 500)
            console.log("else state")
            console.log(slideNumber)
        }

    }

    // const handelTranslateBtn = async () => {
    //     if (transInput === " ") {
    //         toast.warn("Please Enter The Code");
    //     } else if (langSelected === "Language") {
    //         toast.warn("Please Select The Language");
    //     } else {
    //         setTransLoading(true)
    //         console.log(`translate to ${langSelected}`)
    //         console.log(transInput)
    //         let translatePrompt = `You will be translating a piece of code from one programming language to another. Here is the code to translate:

    //         <code>
    //         ${transInput}
    //         </code>

    //         Please translate this code to ${langSelected}.

    //         To translate the code:
    //         1. Carefully read through the provided code to understand its logic and functionality. 
    //         2. Think through how you would re-implement that same logic and functionality in ${langSelected}. Consider:
    //            - What analogous data structures, control flow statements, built-in functions, etc. does ${langSelected} have that can be used to achieve the same result?
    //            - What syntax differences are there between the original language and ${langSelected} that need to be accounted for?
    //         3. Write out the translated code in ${langSelected}. Aim to preserve the original code's logic, structure and variable names where possible. Add comments to explain any parts that had to change significantly in the translation process.
    //         4. Double check that your translated code looks correct and would run in ${langSelected}. Make any necessary fixes.
    //         5.include the basic syntax of ${langSelected} 
    //         6.don't add any comments and explaination write only code.`
    //         console.log(translatePrompt);
    //         let response;
    //         response = await runChat(translatePrompt);
    //         console.log(response)
    //         setTranslatedResult(response);
    //         setTransLoading(false)
    //         if (user) {
    //             if (user.uid) {
    //                 await setDoc(doc(db, "History", user.uid), {
    //                     langSelected: langSelected,
    //                     transInput: transInput,
    //                     translatedResult: response,
    //                 });
    //             } else {
    //                 await setDoc(doc(db, "History", data.user.uid), {
    //                     langSelected: langSelected,
    //                     transInput: transInput,
    //                     translatedResult: response
    //                 });
    //             }
    //         }
    //     }
    // }


    const handelTranslateBtn = async () => {
        if (transInput === " ") {
            toast.warn("Please Enter The Code");
        } else if (langSelected === "Language") {
            toast.warn("Please Select The Language");
        } else {
            setTransLoading(true);
            console.log(`translate to ${langSelected}`);
            console.log(transInput);

            let translatePrompt = `You will be translating a piece of code from one programming language to another. Here is the code to translate:

        <code>
        ${transInput}
        </code>
        
        Please translate this code to ${langSelected}.
        
        To translate the code:
        1. Carefully read through the provided code to understand its logic and functionality. 
        2. Think through how you would re-implement that same logic and functionality in ${langSelected}. Consider:
           - What analogous data structures, control flow statements, built-in functions, etc. does ${langSelected} have that can be used to achieve the same result?
           - What syntax differences are there between the original language and ${langSelected} that need to be accounted for?
        3. Write out the translated code in ${langSelected}. Aim to preserve the original code's logic, structure and variable names where possible. Add comments to explain any parts that had to change significantly in the translation process.
        4. Double check that your translated code looks correct and would run in ${langSelected}. Make any necessary fixes.
        5.include the basic syntax of ${langSelected} 
        6.don't add any comments and explaination write only code.`;

            console.log(translatePrompt);

            let response = await runChat(translatePrompt);
            console.log(response);

            setTranslatedResult(response);
            setTransLoading(false);

            if (user) {
                if (user.uid) {
                    const userDocRef = doc(db, "History", user.uid);
                    const translationEntry = {
                        langSelected: langSelected,
                        transInput: transInput,
                        translatedResult: response,
                        timestamp: new Date()  // Adding a timestamp can help with ordering/history tracking
                    };
                    try {
                        const userDoc = await getDoc(userDocRef);

                        if (userDoc.exists()) {
                            // If document exists, update it by adding new translation entry
                            await updateDoc(userDocRef, {
                                translations: arrayUnion(translationEntry)
                            });
                        } else {
                            // If document does not exist, create it with the first translation entry
                            await setDoc(userDocRef, {
                                translations: [translationEntry]
                            });
                        }

                        console.log("Translation history updated successfully!");
                    } catch (e) {
                        console.error("Error updating translation history: ", e);
                    }
                } else {
                    const userDocRef = doc(db, "History", data.user.uid);
                    const translationEntry = {
                        langSelected: langSelected,
                        transInput: transInput,
                        translatedResult: response,
                        timestamp: new Date()  // Adding a timestamp can help with ordering/history tracking
                    };
                    try {
                        const userDoc = await getDoc(userDocRef);

                        if (userDoc.exists()) {
                            // If document exists, update it by adding new translation entry
                            await updateDoc(userDocRef, {
                                translations: arrayUnion(translationEntry)
                            });
                        } else {
                            // If document does not exist, create it with the first translation entry
                            await setDoc(userDocRef, {
                                translations: [translationEntry]
                            });
                        }

                        console.log("Translation history updated successfully!");
                    } catch (e) {
                        console.error("Error updating translation history: ", e);
                    }
                }
            }
        }
    };



    const handleExplainBtn = async () => {
        if (explainInput === "") {
            toast.warn("Please Enter The Code");
        } else {
            setExplainLoading(true)
            setExplainResultData("")
            let explainPrompt = `Your task is to explain the functionality and logic of a given piece of code. Here is the code to analyze and explain:

            <code>
            ${explainInput}
            </code>
            
            First, please analyze the code and write your analysis . In your analysis, focus on:
            - Determining the overall purpose and functionality of the code
            - Identifying the key components, functions, and flow of logic 
            - Noting any significant programming techniques, libraries or algorithms utilized
            
            Next, provide a clear, detailed explanation of the code. Your explanation should include:
            - A high-level overview of what the code is designed to do
            - A breakdown of the main components and how they work together to achieve the functionality
            - An explanation of any complex logic, calculations or data transformations taking place
            - A discussion of any edge cases handled by the code and potential limitations in its current form
            
            Please gear your explanation towards a general audience, avoiding very technical jargon where possible. Be sure to concisely define any necessary technical terms you do use.
            
            The goal is to help someone understand the key aspects of how this code works as clearly as possible.`
            let explainPrompt1 = `optimize the following code :${explainInput} write the code in the best way possible and ensure the final code gives the same output and best time and space complexity and best performance make sure the code will run without any errors`
            console.log(explainPrompt);
            let response;
            response = await runChat(explainPrompt);
            console.log(response)


            let responseArray = response.split("**")
            let newResponse = "";
            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                }
                else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
            let newResponse2 = newResponse.split("*").join("</br>")
            let newResponse3 = newResponse2.replaceAll("##", "&#x2022;")

            // let newResponseArray = newResponse2.split(" ");
            // for (let i = 0; i < newResponseArray.length; i++) {
            //     const nextword = newResponseArray[i]
            //     delayPara2(i, nextword + " ")
            // }

            setExplainResultData(newResponse3);
            setExplainedResult(response);
            setExplainLoading(false);
        }
    }

    const handleDebugBtn = async () => {
        let errorMsg = prompt("Please enter thr error messege you are getting...", 'Error messege not provided')
        if (debugInput === "") {
            toast.warn("Please Enter The Code");
        } else {
            setDebugResultData("");
            setDebugLoading(true);
            let debugPrompt = `You will be acting as a code debugging assistant. Your task is to help identify and fix errors in code that is provided to you.

            Here is the code that needs to be debugged:
            <code>
            ${debugInput}
            </code>
            Here is the error message that was received when trying to run the code:
            <error_message>
            ${errorMsg}
            </error_message>
            First, carefully analyze the provided code and error message in the scratchpad below to identify what the issue(s) are:
            Next, provide a clear explanation of what is causing the error(s):
            Finally, provide the corrected version of the code with inline comments explaining any changes you made:`

            let explainPrompt1 = `optimize the following code :${explainInput} write the code in the best way possible and ensure the final code gives the same output and best time and space complexity and best performance make sure the code will run without any errors`
            console.log(debugPrompt);
            let response;
            response = await runChat(debugPrompt);
            console.log(response)


            let responseArray = response.split("**")
            let newResponse = "";
            for (let i = 0; i < responseArray.length; i++) {
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                }
                else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }
            let newResponse2 = newResponse.split("*").join("</br>")
            let newResponse3 = newResponse2.replaceAll("##", "&#x2022;")
            // let newResponseArray = newResponse2.split(" ");
            // for (let i = 0; i < newResponseArray.length; i++) {
            //     const nextword = newResponseArray[i]
            //     delayPara3(i, nextword + " ")
            // }
            setDebugResultData(newResponse3);
            setDebugedResult(response);
            setDebugLoading(false);
        }
    }

    const onSuccessfulSignIn = () => {
        toast.success("Successfully Singed-In..!");
        console.log("your email is:", email);
        console.log("your password is:", password);
        console.log("sign in success...!");
        setusername(name);
        setIsLogin(true);
        setIsLanding(false);
        setLogging(false);
        setpassword("");
        setemail("");
    };

    const onSuccessfulSignUp = () => {
        toast.success("Successfully Singed-Up..!");
        console.log("your name is:", name);
        console.log("your email is:", email);
        console.log("your password is:", password);
        console.log("sign in success...!");
        setusername(name);
        setIsLogin(true);
        setIsLanding(false);
        setLogging(false);
        setpassword("");
        setemail("");
    };


    const handlesigninbtn = async () => {
        if (email === "") {
            toast.warn("Please enter the email address...");
        } else if (password === "") {
            toast.warn("Please enter the password...");
        } else {
            try {
                await doSignInWithEmailAndPassword(email, password);
                onSuccessfulSignIn();
            } catch (e) {
                if (e.code === 'auth/invalid-email') {
                    toast.error("invalid Email...");
                } else if (e.code === 'auth/invalid-credential') {
                    toast.error("invalid Email or Password...");
                } else {
                    toast.error("Somthing went wrong please try again...")
                }
            }
        }
    }

    const handlesignupbtn = async () => {
        if (name === "") {
            toast.warn("Please enter the Name...");
        } else if (email === "") {
            toast.warn("Please enter the email address...");
        } else if (password === "") {
            toast.warn("Please enter the password...");
        } else {
            try {
                // Replace with your Firebase sign-up logic
                await createUserWithEmailAndPassword(auth, email, password);
                const user = auth.currentUser;
                console.log(user);
                if (user) {
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        userName: name,
                        password: password
                    });
                }
                onSuccessfulSignUp();
            } catch (error) {
                // Check for the specific error and set the error message
                if (error.code === 'auth/email-already-in-use') {
                    setIsError('The email address is already in use by another account.');
                    toast.error('The email address is already in use by another account.');
                } else {
                    setIsError('An unexpected error occurred.');
                    toast.error('Please enter the valid Information.');
                }
                console.error(isError);
            }
        }
    }

    const handleLanding = () => {
        if (isLanding === true) {
            setIsLanding(false)
        } else {
            setIsLanding(true)
        }
    }

    const doSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            signInWithPopup(auth, provider).then(async (data) => {
                console.log(data);
                if (data) {
                    await setDoc(doc(db, "Users", data.user.uid), {
                        email: data.user.email,
                        userName: data.user.displayName,
                    }
                    );
                }
                toast.success("Successfully Signed-In..!")
                console.log(data.user.displayName);
                setLogging(false);
                setusername(data.user.displayName);
                setIsLogin(true);
                setIsLanding(false);
                // setGoogleValue(data.user.email)
                // localStorage.setItem("email", data.user.email)
            })
        } catch (e) {
            if (e.code === 'auth/account-exists-with-different-credential') {
                toast.error('Your account exists with different credential ');
            } else {
                toast.warn('An unexpected error occurred.');
            }
        }
    };

    const doSignInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider).then(async (data) => {
            console.log(data);
            if (data) {
                await setDoc(doc(db, "Users", data.user.uid), {
                    email: data.user.email,
                    userName: data.user.displayName,
                }
                );
            }
            toast.success("Successfully Signed-In..!")
            console.log(data.user.displayName);
            setLogging(false);
            setusername(data.user.displayName);
            setIsLogin(true);
            setIsLanding(false);
            // setGoogleValue(data.user.email)
            // localStorage.setItem("email", data.user.email)
        }).catch((err) => {
            if (err.code === 'auth/account-exists-with-different-credential') {
                toast.error('Your account exists with different credential ');
            } else {
                toast.error('An unexpected error occurred.');
            }
        })
    }

    const doSignInWithGitHub = async () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider).then(async (data) => {
            console.log(data);
            if (data) {
                await setDoc(doc(db, "Users", data.user.uid), {
                    email: data.user.email,
                    userName: data.user.displayName,
                }
                );
            }
            toast.success("Successfully Signed-In..!")
            console.log(data.user.displayName);
            setLogging(false);
            setusername(data.user.displayName);
            setIsLogin(true);
            setIsLanding(false);
        }).catch((err) => {
            if (err.code === 'auth/account-exists-with-different-credential') {
                toast.error('Your account exists with different credential ');
            } else {
                toast.error('An unexpected error occurred.');
                console.error(err);
            }
        })
    }

    const doSignInWithTwitter = async () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(auth, provider).then(async (data) => {
            console.log(data);
            if (data) {
                await setDoc(doc(db, "Users", data.user.uid), {
                    email: data.user.email,
                    userName: data.user.displayName,
                }
                );
            }
            toast.success("Successfully Signed-In..!")
            console.log(data.user.displayName);
            setLogging(false);
            setusername(data.user.displayName);
            setIsLogin(true);
            setIsLanding(false);
        }).catch((err) => {
            if (err.code === 'auth/account-exists-with-different-credential') {
                toast.error('Your account exists with different credential ');
            } else {
                toast.error('An unexpected error occurred.');
                console.error(err);
            }
        })
    }

    const doSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Sign-out Successful...");
            setIsLogin(false)
            setusername("Geust");
            setIsLanding(true);
        }).catch((error) => {
            // An error happened.
            error("Somthing went wrong.");
        })
    };

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } else {
                console.log("User is not logged in");
            }
        });
    };



    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
        user ? setIsLogin(true) : setIsLogin(false);
    })



    const contextValue = {
        loadTransPrompt,
        user,
        userDetails,
        setUserDetails,
        doSignInWithTwitter,
        doSignInWithGitHub,
        doSignInWithFacebook,
        doSignOut,
        doSignInWithGoogle,
        prevPrompts,
        setPrevPrompts,
        transPrompts,
        setTransPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        transLoading,
        explainLoading,
        debugLoading,
        resultData,
        explainResultData,
        debugResultData,
        input,
        setInput,
        transInput,
        setTransInput,
        explainInput,
        setExplainInput,
        debugInput,
        setDebugInput,
        newChat,
        isLogin,
        setIsLogin,
        isTranslate,
        handleTranslate,
        isExplain,
        handleExplain,
        isDebug,
        handleDebug,
        isHome,
        handleBack,
        slidStyles,
        slideForward,
        slideBackword,
        langSelected,
        setLangSelected,
        handelTranslateBtn,
        translatedResult,
        handleExplainBtn,
        explainedResult,
        handleDebugBtn,
        debugedResult,
        logging,
        setLogging,
        setemail,
        setpassword,
        setname,
        handlesigninbtn,
        handlesignupbtn,
        username,
        isLanding,
        handleLanding,
        email,
        name,
        password,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider