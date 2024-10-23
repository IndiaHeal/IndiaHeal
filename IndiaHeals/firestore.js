import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore  , collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPCUkGpS4euAGJrePOkCmXXffKAk3EpM",
  authDomain: "healindia-24e99.firebaseapp.com",
  projectId: "healindia-24e99",
  storageBucket: "healindia-24e99.appspot.com",
  messagingSenderId: "558415657727",
  appId: "1:558415657727:web:6a9e7195aedad138c56aca",
  measurementId: "G-8W84V5KKT1"
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

let serviceData = await getServices(db) 
serviceData[0]['sickness '].forEach((data,index)=>{
     if(index <= Math.abs((serviceData[0]['sickness '].length)/2) ){
        createServiceCard(data)
     }else{
        createServiceCardLower(data)
     }
})
 


 

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




let hospitalData = await getHospitals(db) 
hospitalData.forEach(element => {
    createHospitalCard(element)
});


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
    profileImage.addEventListener('mouseover', () => {
      
        profileImage.style.cursor = 'pointer';
 overlay.style.visibility = 'visible';
 overlayname.style.visibility = 'visible';
  
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.cursor = 'pointer';
 overlay.style.visibility = 'hidden';
 overlayname.style.visibility = 'hidden';
});
}


async function getCountries(db) {
    const countriesList = collection(db, 'Countries');
    const countrySnapshot = await getDocs(countriesList);
    const countriesData = countrySnapshot.docs.map(doc => doc.data());
    return countriesData;
}

let countriesData = await getCountries(db) 
countriesData.forEach(element => {
    createCountryCard(element)
   
});


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
    profileImage.addEventListener('mouseover', () => {
      
        profileImage.style.cursor = 'pointer';
 overlay.style.visibility = 'visible';
 overlayname.style.visibility = 'visible';
  
});

profileImage.addEventListener('mouseout', () => {
    profileImage.style.cursor = 'pointer';
 overlay.style.visibility = 'hidden';
 overlayname.style.visibility = 'hidden';
});

}



async function getUsersFeedback(db) {
    const feedbackList = collection(db, 'UserFeedback');
    const feedbackSnapshot = await getDocs(feedbackList);
    const feedbackData = feedbackSnapshot.docs.map(doc => doc.data());
    return feedbackData;
}

let usersFeedbackData = await getUsersFeedback(db) 
usersFeedbackData.forEach(element => {
    console.log(element,"sanjay kushwah");
    
    createPost(element)
   
});


function createPost(postData) {
    // Create the main container element
    const galleryReview =  document.getElementById('userFeedback')
  
    // Create the inner container with fixed width
    const innerContainer = document.createElement("div");
    innerContainer.style.width = "100%";
    galleryReview.appendChild(innerContainer);
  
    // Create the review card element
    const reviewCard = document.createElement("span");
    reviewCard.classList.add("reviewCard");
    innerContainer.appendChild(reviewCard);
  
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






