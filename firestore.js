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
    serviceData[0]['sickness'].forEach((data,index)=>{
     if(index <= Math.abs((serviceData[0]['sickness'].length)/2) ){
        createServiceCard(data)
     }else{
        createServiceCardLower(data)
     }
})
} catch (error) {
    console.log(error,"Services");
    
}
 


 

function createServiceCard(data){
    const scrollContainer =  document.getElementById('upperCardId')
    const innerContainer = document.createElement("div");
    innerContainer.innerHTML = data
    innerContainer.classList.add("cards");
    if(data == 'IVF Treatment'){
        innerContainer.classList.add("ivf"); 
    }
    scrollContainer.appendChild(innerContainer);
}

function createServiceCardLower(data){
    const scrollContainer =  document.getElementById('lowerCardId')
    const innerContainer = document.createElement("div");
    innerContainer.innerHTML = data
    
    if(data == 'IVF Treatment'){
        innerContainer.classList.add("ivf"); 
    }
    innerContainer.classList.add("cards");
    scrollContainer.appendChild(innerContainer);
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

try {
    let usersFeedbackData = await getUsersFeedback(db) 
    usersFeedbackData.forEach(element => {
    console.log(element,"sanjay kushwah");
    
    createPost(element)
   
});
} catch (error) {
     console.log(error,"user feedback");
     
}


function createPost(postData) {
    // Create the main container element
    const galleryReview =  document.getElementById('userFeedback')
  
    // Create the inner container with fixed width
    const innerContainer = document.createElement("div");
    innerContainer.style.width = "100%";
    innerContainer.style.position = "relative"
    galleryReview.appendChild(innerContainer);
  
    // Create the review card element
    const reviewCard = document.createElement("span");
    reviewCard.classList.add("reviewCard");
    innerContainer.appendChild(reviewCard);
    const reviewBackgroundImageSpan = document.createElement("span");
    reviewBackgroundImageSpan.classList.add('backgroundIMage')
    const reviewBackgroundIMage = document.createElement("img");
    reviewBackgroundIMage.src = "https://firebasestorage.googleapis.com/v0/b/india-heals.appspot.com/o/svgIcon%2Fspeech-bubble-1.svg?alt=media&token=c8f7703a-9097-4ca5-8830-c0695647d6f8"
    reviewBackgroundImageSpan.appendChild(reviewBackgroundIMage)
    innerContainer.appendChild(reviewBackgroundImageSpan);

    // Create the review text element with dynamic width
    const reviewText = document.createElement("span");
   
    
    reviewText.classList.add("reviewText");
    reviewText.style.width =  "80%"; // Handle optional text width
    reviewText.textContent = postData.Feedback;
    reviewCard.appendChild(reviewText);
  
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






