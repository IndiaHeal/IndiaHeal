import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore  , collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6mHfuXnw7br8165vtuAaNVJZYpFR9H8M",
    authDomain: "india-heals.firebaseapp.com",
    projectId: "india-heals",
    storageBucket: "india-heals.appspot.com",
    messagingSenderId: "675812644179",
    appId: "1:675812644179:web:e4e12a2d8251ebd4d63da6",
    measurementId: "G-4F538300E9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
 
async function getServices(db) {
    const serviceList = collection(db, 'Services');
    const serviceSnapeShot = await getDocs(serviceList);
    const serviceData = serviceSnapeShot.docs.map(doc => doc.data());
    return serviceData;
}

try {
    let serviceData = await getServices(db) 
    serviceData.forEach((data)=>{
        createServiceCard(data)
    })
    
} catch (error) {
    console.log(error,"Services");
    
}
 


 

function createServiceCard(data){
    const serviceDiv = document.getElementById('serviceCardId')
    const parentdiv =  document.createElement("div");
    parentdiv.classList.add('cardService')
    const innerContainer = document.createElement("div");
    const profileImage = document.createElement("img");
     
    // profileImage.classList.add("profileImage");
    profileImage.src = data.url || "https://firebasestorage.googleapis.com/v0/b/heal-india.appspot.com/o/mountain.png?alt=media&token=e9353c9e-b4c6-46f6-859b-76e0ab2ab381";
    innerContainer.appendChild(profileImage)
     
    parentdiv.appendChild(innerContainer)
    const innerContainer2 = document.createElement("div");
    innerContainer2.innerHTML = data.name
    innerContainer2.classList.add('serviceName')
    parentdiv.appendChild(innerContainer2)
    serviceDiv.appendChild(parentdiv)
     
}

 

 
async function getHospitals(db) {
const citiesCol = collection(db, 'Hospitals');
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());
return cityList;
}




try {
    let hospitalData = await getHospitals(db) 
    hospitalData.forEach(element => {
        createHospitalCard(element)
    }); 
} catch (error) {
    console.log(error,"hospitals");
    
}


function createHospitalCard(data){
    const country =  document.getElementById('hospitalId')
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("firstImage");
    country.appendChild(innerContainer);

    const innerContainer2 = document.createElement("span");
    innerContainer2.style.position= "relative"
    innerContainer.appendChild(innerContainer2);

    const profileImage = document.createElement("img");
     
    // profileImage.classList.add("profileImage");
    profileImage.src = data.url || "https://firebasestorage.googleapis.com/v0/b/heal-india.appspot.com/o/mountain.png?alt=media&token=e9353c9e-b4c6-46f6-859b-76e0ab2ab381"; // Handle optional image URL
    innerContainer2.appendChild(profileImage);
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const overlayname = document.createElement("p");
    overlayname.innerHTML = data.name
    overlayname.classList.add("name");
    innerContainer2.appendChild(overlay);
    innerContainer2.appendChild(overlayname);
     
    profileImage.style.cursor = 'pointer';
    innerContainer.addEventListener('click', () => {
        const newTabURL = data.hosUrl // Replace with the desired URL
        window.open(newTabURL, '_blank'); // Open URL in a new tab
    });
//     innerContainer2.addEventListener('mouseover', () => {
//         overlayname.style.cursor = 'pointer';
//         overlay.style.visibility = 'visible';
//         overlay.style.cursor = "pointer"
//         overlayname.style.visibility = 'visible';
  
// });

        // overlayname.style.cursor = 'pointer';
        // overlay.style.visibility = 'visible';
        // overlay.style.cursor = "pointer"
        // overlayname.style.visibility = 'visible';

// innerContainer2.addEventListener('mouseout', () => {
//     overlayname.style.cursor = "pointer"
//     profileImage.style.cursor = 'pointer';
//  overlay.style.visibility = 'hidden';
//  overlayname.style.visibility = 'hidden';
// });
}


async function getCountries(db) {
    const countriesList = collection(db, 'Countries');
    const countrySnapshot = await getDocs(countriesList);
    const countriesData = countrySnapshot.docs.map(doc => doc.data());
    return countriesData;
}

try {
    let countriesData = await getCountries(db) 
    countriesData.forEach(element => {
    createCountryCard(element)
   
});
} catch (error) {
    console.log(error,"Countries");
    
}


function createCountryCard(data){
    const country =  document.getElementById('country')
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("firstImage");
    country.appendChild(innerContainer);

    const innerContainer2 = document.createElement("span");
    innerContainer2.style.position= "relative"
    innerContainer.appendChild(innerContainer2);

    const profileImage = document.createElement("img");
    // profileImage.classList.add("profileImage");
    profileImage.src = data.url || "https://firebasestorage.googleapis.com/v0/b/heal-india.appspot.com/o/mountain.png?alt=media&token=e9353c9e-b4c6-46f6-859b-76e0ab2ab381"; // Handle optional image URL
    innerContainer2.appendChild(profileImage);
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const overlayname = document.createElement("p");
    overlayname.innerHTML = data.name
    overlayname.classList.add("name");
    innerContainer2.appendChild(overlay);
    innerContainer2.appendChild(overlayname);
     
    profileImage.style.cursor = 'pointer';
//     innerContainer2.addEventListener('mouseover', () => {
      
//         overlayname.style.cursor = 'pointer';
//         overlay.style.cursor = 'pointer';
//         overlay.style.visibility = 'visible';
//         overlayname.style.visibility = 'visible';
  
// });
        // overlayname.style.cursor = 'pointer';
        // overlay.style.cursor = 'pointer';
        // overlay.style.visibility = 'visible';
        // overlayname.style.visibility = 'visible';
// innerContainer2.addEventListener('mouseout', () => {
//     overlayname.style.cursor = 'pointer';
//     overlay.style.cursor = 'pointer';
//     overlay.style.visibility = 'hidden';
//     overlayname.style.visibility = 'hidden';
// });

}



async function getUsersFeedback(db) {
    const feedbackList = collection(db, 'UserFeedback');
    const feedbackSnapshot = await getDocs(feedbackList);
    const feedbackData = feedbackSnapshot.docs.map(doc => doc.data());
    return feedbackData;
}


createPost  = (postData)=> {
    // Create the main container element
    const galleryReview =  document.getElementById('userFeedback')
  

    // parent inner container for youtube video
    const parentReview = document.createElement('div')
    parentReview.classList.add('parentReview')
    // Create the inner container with fixed width
    const innerContainer = document.createElement("div");
    innerContainer.classList.add('innerContainer')
    // parentReview.appendChild(innerContainer)
    galleryReview.appendChild(innerContainer);
  
    const containerYoutube = document.createElement('div');
    containerYoutube.classList.add('youtubeI')
    // youtube video iframe
    const iframe = createYouTubeIframe(postData.youtubeUrl)
    containerYoutube.appendChild(iframe)

    innerContainer.appendChild(containerYoutube)
//     parentReview.appendChild(iframe)
    // Create the review card element
    const reviewCard = document.createElement("span");
    reviewCard.classList.add("reviewCard");
    parentReview.appendChild(reviewCard);
    const reviewBackgroundImageSpan = document.createElement("span");
    reviewBackgroundImageSpan.classList.add('backgroundIMage')
    const reviewBackgroundIMage = document.createElement("img");
    reviewBackgroundIMage.src = "https://firebasestorage.googleapis.com/v0/b/india-heals.appspot.com/o/svgIcon%2Fspeech-bubble-1.svg?alt=media&token=c8f7703a-9097-4ca5-8830-c0695647d6f8"
    reviewBackgroundImageSpan.appendChild(reviewBackgroundIMage)
    parentReview.appendChild(reviewBackgroundImageSpan);
    
    innerContainer.appendChild(parentReview)
    // Create the review text element with dynamic width
    const reviewText = document.createElement("span");
    const tooptip = document.createElement("div");
    
    tooptip.textContent = postData.Feedback
    tooptip.classList.add('tooltip')
    tooptip.style.display = 'none'
    reviewText.classList.add("reviewText");
    reviewText.classList.add('reviewTextLimit') // Handle optional text width
    reviewText.textContent = postData.Feedback;
    
    // reviewText.data-full-text = postData.Feedback
    reviewCard.appendChild(reviewText);
    reviewCard.appendChild(tooptip);
     
    reviewText.addEventListener('mouseover', () => {
        tooptip.style.display = 'block';
      });
      
      reviewText.addEventListener('mouseout', () => {
        tooptip.style.display = 'none';
      });
    
    // Create the profile image element with dynamic image URL
    const profileImage = document.createElement("img");
    profileImage.classList.add("profileImage");
    profileImage.src = postData.url || "https://firebasestorage.googleapis.com/v0/b/heal-india.appspot.com/o/mountain.png?alt=media&token=e9353c9e-b4c6-46f6-859b-76e0ab2ab381"; // Handle optional image URL
    reviewCard.appendChild(profileImage);
  
    // Create the name text element with dynamic name
    const nameText = document.createElement("span");
    nameText.classList.add("nameText");
    nameText.textContent = postData.name;
    reviewCard.appendChild(nameText);
  
   
  }


try {
    usersFeedbackData = await getUsersFeedback(db) 
    usersFeedbackData.forEach(element => {
    createPost(element)
   
});
} catch (error) {
     console.log(error,"user feedback");
     
}

function createYouTubeIframe(videoURl) {
    // Create the iframe element
    const aspectRatio = 9 / 16;
    const iframe = document.createElement('iframe');
    iframe.width = '80%';
    iframe.height = '70%';
    iframe.style.borderRadius = '15px';
    iframe.src = videoURl;
    iframe.frameBorder = 0;
    iframe.allowFullscreen = true;
  
    // Return the created iframe element
    return iframe;
  }



  

 
const youtubeIframe = createYouTubeIframe(videoId, width, height);






