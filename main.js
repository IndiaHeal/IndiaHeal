

// async function  getAllFeedback(queries = []){
//     try {
//      const result = await databases.listDocuments(
//         VITE_APPWRITE_DATABASE_ID, // databaseId
//         VITE_APPWRITE_COLLECTION_ID, // collectionId
       
//      );
//      console.log(result,"Dfsdfsdf");
     
//      return result
//     } catch (error) {
//        console.log(error,"get all post");
       
//        return false
//     }
//   }


//   let result = getAllFeedback().then((data)=>{
//     console.log(data,"datat");
    
//     return data
//   })
//   console.log(result,"snajay kusdfhsdjfh");
// let scrollContainerservice = document.querySelector('.upperCard'); 
// scrollContainerservice.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainerservice.scrollLeft += evt.deltaY;
//     scrollContainerservice.style.scrollBehavior = 'auto';
// });


// let scrollContainerserviceLower = document.querySelector('.lowerCard'); 
// scrollContainerserviceLower.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainerserviceLower.scrollLeft += evt.deltaY;
//     scrollContainerserviceLower.style.scrollBehavior = 'auto';
// });

// setTimeout(() => {
    
    

     
// }, 10);
// let counter = 0
// setInterval(()=>{

//     scrollContainerservice.style.scrollBehavior = 'smooth';
     
//     scrollContainerservice.scrollLeft += "50";
     
// },1000)


// let isScrollingRight = true;  // Initial scroll direction (right)
// let scrollIntervalId;
// setInterval(() => {
//     const scrollContainer = scrollContainerservice;  // Assuming this is the element
//     // Get scroll dimensions and current position
//     const scrollWidth = scrollContainer.scrollWidth;
//     const clientWidth = scrollContainer.clientWidth;
//     const scrollLeft = scrollContainer.scrollLeft;
      
     
//     // Smooth scrolling behavior
//     scrollContainer.style.scrollBehavior = 'smooth';

//     // Determine scroll direction based on current position and direction flag
//     if (isScrollingRight && Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
//       isScrollingRight = false;
//     } else if (!isScrollingRight && scrollLeft === 0) {
//       isScrollingRight = true;
//     }

//     // Update scroll position based on direction
//     scrollContainer.scrollLeft += isScrollingRight ? 100 : -100;
//   }, 1000);


//   let isScrollingRightlower = true;  // Initial scroll direction (right)
 
// setInterval(() => {
//     const scrollContainers = scrollContainerserviceLower;  // Assuming this is the element
//     // Get scroll dimensions and current position
//     const scrollWidths = scrollContainers.scrollWidth;
//     const clientWidths = scrollContainers.clientWidth;
//     const scrollLefts = scrollContainers.scrollLeft;

//     // Smooth scrolling behavior
//     scrollContainers.style.scrollBehavior = 'smooth';
   
    
//     // Determine scroll direction based on current position and direction flag
//     if (isScrollingRightlower && Math.ceil(scrollLefts + clientWidths) >= scrollWidths) {
         
        
//         isScrollingRightlower = false;
//     } else if (!isScrollingRightlower && scrollLefts === 0) {
//         isScrollingRightlower = true;
//     }

//     // Update scroll position based on direction
//     scrollContainers.scrollLeft += isScrollingRightlower ? 100 : -100;
//   }, 1000);



let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");



scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener("click", ()=>{
  
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 415;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 415;
});

let scrollContainer1 = document.querySelector('.galleryreview');
let backBtn1 = document.getElementById("backBtnreview");
let nextBtn1 = document.getElementById("nextBtnreview");

// import { usersFeedbackData } from "./firestore.js";

scrollContainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    scrollContainer1.style.scrollBehavior = 'auto';
});

nextBtn1.addEventListener("click", () => {
  scrollContainer1.style.scrollBehavior = "smooth";
  const scrollAmount = scrollContainer1.offsetWidth;
  scrollContainer1.scrollLeft += scrollAmount;

  // Calculate the threshold for the second last element
  const secondLastThreshold =
    scrollContainer1.scrollWidth -
    scrollContainer1.clientWidth -
    scrollContainer1.children[scrollContainer1.children.length - 1].offsetWidth;

  if (scrollContainer1.scrollLeft >= secondLastThreshold) {
    usersFeedbackData.forEach((element) => {
      try {
        createPost(element);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    });
  }
});


backBtn1.addEventListener("click", ()=>{
    scrollContainer1.style.scrollBehavior = 'smooth';
    const scrollAmount = scrollContainer1.offsetWidth;
    scrollContainer1.scrollLeft -= scrollAmount;
});


let scrollContainerHospital = document.querySelector('.galleryHospital');
let backBtnHospital = document.getElementById("backBtnHospital");
let nextBtnHospital = document.getElementById("nextBtnHospital");

scrollContainerHospital.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainerHospital.scrollLeft += evt.deltaY;
    scrollContainerHospital.style.scrollBehavior = 'auto';
});

nextBtnHospital.addEventListener("click", ()=>{
    scrollContainerHospital.style.scrollBehavior = 'smooth';
    scrollContainerHospital.scrollLeft += 415;
});

backBtnHospital.addEventListener("click", ()=>{
    scrollContainerHospital.style.scrollBehavior = 'smooth';
    scrollContainerHospital.scrollLeft -= 415;
});


let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
    }, duration);
  }

  let slideDown = (target, duration=500) => {
     
    
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
      display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }
   let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }
   
// ====  
  
let speedAnimation = 400;
let targetId = document.getElementById("target");
let icon1 = document.getElementById('icon1')

let flag = true
let slideBtnClick = (id, sl) => document.getElementById(id).addEventListener('click', () =>{ 
   
    sl(targetId, speedAnimation)
    if(flag){
        document.getElementById('triggerToggle').style.borderRadius= "8px 8px 0px 0px"
        flag= false
        icon1.style.transform = "rotate(180deg)"; 
    }else{
      icon1.style.transform = "rotate(0deg)"
        flag = true
        document.getElementById('triggerToggle').style.borderRadius= "8px"
    }
    
   
} );

 
slideBtnClick('triggerToggle', slideToggle);

let targetId1 = document.getElementById("target1");
let icon2 = document.getElementById('icon2')

let flag1 = true
let slideBtnClick1 = (id, sl) => document.getElementById(id).addEventListener('click', () =>{ 
    sl(targetId1, speedAnimation)
    if(flag1){
      icon2.style.transform = "rotate(180deg)"; 
        document.getElementById('triggerToggle1').style.borderRadius= "8px 8px 0px 0px"
        flag1= false
    }else{
      icon2.style.transform = "rotate(0deg)"
        flag1 = true
        document.getElementById('triggerToggle1').style.borderRadius= "8px"
    }
    
   
} );

 
slideBtnClick1('triggerToggle1', slideToggle);

let targetId2 = document.getElementById("target2");
let icon3 = document.getElementById('icon3')

let flag2 = true
let slideBtnClick2 = (id, sl) => document.getElementById(id).addEventListener('click', () =>{ 
    sl(targetId2, speedAnimation)
    if(flag2){
        icon3.style.transform = "rotate(180deg)"; 
        document.getElementById('triggerToggle2').style.borderRadius= "8px 8px 0px 0px"
        flag2= false
    }else{
      icon3.style.transform = "rotate(0deg)"
        flag2 = true
        document.getElementById('triggerToggle2').style.borderRadius= "8px"
    }
    
   
} );

 
slideBtnClick2('triggerToggle2', slideToggle);

let targetId3 = document.getElementById("target3");
let icon4 = document.getElementById('icon4')

let flag3 = true
let slideBtnClick3 = (id, sl) => document.getElementById(id).addEventListener('click', () =>{ 
    sl(targetId3, speedAnimation)
    if(flag3){
      icon4.style.transform = "rotate(180deg)"; 
        document.getElementById('triggerToggle3').style.borderRadius= "8px 8px 0px 0px"
        flag3= false
    }else{
      icon4.style.transform = "rotate(0deg)"
        flag3 = true
        document.getElementById('triggerToggle3').style.borderRadius= "8px"
    }
    
   
} );

 
slideBtnClick3('triggerToggle3', slideToggle);


let targetId4 = document.getElementById("target4");
let icon5 = document.getElementById('icon5')

let flag4 = true
let slideBtnClick4 = (id, sl) => document.getElementById(id).addEventListener('click', () =>{ 
    sl(targetId4, speedAnimation)
    if(flag4){
      icon5.style.transform = "rotate(180deg)"; 
        document.getElementById('triggerToggle4').style.borderRadius= "8px 8px 0px 0px"
        flag4= false
    }else{
      icon5.style.transform = "rotate(0deg)"
        flag4 = true
        document.getElementById('triggerToggle4').style.borderRadius= "8px"
    }
    
   
} );

 
slideBtnClick4('triggerToggle4', slideToggle);

// =========== old

//   document.getElementById("triggerUp").addEventListener('click', function() {
//   slideUp(document.getElementById("target"), 400);
// });
//   document.getElementById("triggerDown").addEventListener('click', function() {
//   slideDown(document.getElementById("target"), 400);
// });
//   document.getElementById("triggerToggle").addEventListener('click', function() {
//   slideToggle(document.getElementById("target"), 400);
// });


function scrollToDiv(divId) {
     
    
    var div = document.getElementById(divId);
    if (div) {
         
        
      div.style.scrollBehavior = 'smooth';
    }
  }



  const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSection   
 = sections[0];
    let currentScrollPosition = window.scrollY;

    sections.forEach(section => {
        if (section.offsetTop <= currentScrollPosition && section.offsetTop + section.offsetHeight > currentScrollPosition) {
            currentSection = section;
        }
    });

    navLinks.forEach(link => {
        if (link.href.includes(currentSection.id)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});



function generateAgeOptions() {
  const ageDropdown = document.getElementById("ageDropdown");
  // Generate options for each year within the range
  for (let i =0 ; i< 100 ; i++) {
    const age = i;
    const option = document.createElement("option");
    option.value = age;
    option.text = age;
    option.classList.add('optionStyle');
    ageDropdown.appendChild(option);
  }
}

 
window.addEventListener("load", generateAgeOptions);





const appointmentForm = document.getElementById('AppointmentForm');

let emailSystem = emailjs 
appointmentForm.addEventListener('submit', (event) => {
  document.getElementById('contactUsIdButton').innerHTML = "Contact Us Sending"
  event.preventDefault(); 
  let name = document.getElementById('fullName').value
  let email = document.getElementById('email').value
  let phoneNumber = document.getElementById('phoneNumber').value
  let age = document.getElementById('ageDropdown').value
  let gender = document.getElementById('genderId').value
  let disease = document.getElementById('deparmentId').value
 var templateParams = {
  to_name: 'India Heals',
  from_name :`${name}`,
  message: {
    name:name,
    email:email,
    phoneNumber:phoneNumber,
    age:age,
    gender:gender,
    disease:disease
  },

};

emailSystem.send("service_ode5rwg","template_x52ud0k", templateParams).then(
  (response) => {
    document.getElementById('contactUsIdButton').innerHTML = "Contact Us Sent"
     alert("Email Sent Successfully")
     document.getElementById('contactUsIdButton').innerHTML = "Contact Us"
     let name = document.getElementById('fullName').value = ""
     let email = document.getElementById('email').value = ""
     let phoneNumber = document.getElementById('phoneNumber').value = ""
     let age = document.getElementById('ageDropdown').value = "Select Age"
     let gender = document.getElementById('genderId').value = "Gender"
     let disease = document.getElementById('deparmentId').value = ""
  },
  (error) => {
    alert('FAILED...', error);
  },
);
  
})


  