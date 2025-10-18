
    

  // Select all card-contents
  document.querySelectorAll(".cardlist").forEach(card => {
    const heading = card.querySelector(".card-title-open");
    const fields = card.querySelector(".formInputs");

    card.addEventListener("click", () => {
      // Heading fade up

      heading.classList.add("fadeOut");

      // Fields appear after heading animation
      setTimeout(() => {
        fields.classList.add("show");
      }, 600);
    });
  });


  
  const modelData = {
  Audi: ["A3", "A3 Cabriolet", "A4", "A6", "A6 Matrix", "Q2", "Q3", "Q5", "Q7", "R8", "RS5", "RS6", "RS7 Sportback", "S5 Sportback", "TT"],
  BMW: ["2 Series Gran Coupe", "3 Series", "3 Series GT", "4 Series", "5 Series", "5 Series GT", "6 Series", "7 Series", "8 Series", "i8", "M3", "M5", "X1", "X3", "X4", "X5", "X6", "Z4"],
  BYD: ["Atto 3", "Seal", "E6", "Dolphin", "Tang", "Song Plus"],
  Chevrolet: ["Aveo", "Aveo Old", "Aveo U-VA", "Beat", "Captiva", "Cruze", "Enjoy", "Forester", "Optra", "Optra Magnum", "Optra SRV", "Sail", "Sail Hatchback", "Sail U-VA", "Spark", "Tavera", "Trailblazer"],
  Citroen: ["Basalt", "C3", "C3 AIRCROSS", "C5 Aircross"],
  Datsun: ["GO", "Go Puls"],
  Ford: ["Classic", "Escort", "Fiesta", "Fiesta Classic", "Freestyle", "Fusion", "Ikon", "Mondeo", "Mustang"],
  Hyundai: ["Accent", "Accent Viva", "Alcazar", "Aura", "Creta", "Creta N-Line", "Elantra", "Eon", "Exter", "Getz", "Getz Prime", "Grand i10", "Grand i10 Nios", "i10", "i20", "Neo Fluidic Elantra", "New Santro 1.1", "Santa Fe", "Santro", "Santro Xing", "Sonata", "Sonata Embera", "Terracan", "Tucson", "Venue", "Venue N-Line", "Xcent"],
  Isuzu: ["MU-X", "D-MAX V-Cross", "Hi-Lander", "S-Cab", "S-Cab Z"],
  Jaguar: ["F-Pace", "E-Pace", "I-Pace", "XE", "XF", "XJ"],
  Kia: ["Carens", "Carnival", "Seltos", "Sonet"],
  "Land Rover": ["Discovery", "Discovery 3", "Discovery 4", "Discovery Sport", "Range Rover Evoque"],
  Lexus: ["NX", "RX", "LX", "ES", "LS", "LC 500h", "LM"],
  Mahindra: ["Alturas G4", "Armada", "Bolero", "Bolero Neo", "e20", "KUV100", "KUV100 NXT", "Marazzo", "Marshal", "NuvoSport", "Quanto", "REVAI", "Scorpio", "Scorpio Classic", "Scorpio Getaway", "Scorpio N", "Thar", "Thar Roxx", "TUV 300 PLUS", "TUV300", "Verito", "XUV 300", "XUV 300 TurboSport", "XUV 3XO", "XUV500", "XUV700", "Xylo"],
  "Maruti Suzuki": ["1000", "800", "A-Star", "Alto", "Alto 800", "Baleno", "Brezza", "Celerio", "Celerio X", "Ciaz", "Dzire", "Eeco", "Esteem", "Estilo", "Fronx", "Grand Vitara", "Gypsy", "Ignis", "Invicto", "Jimny", "New Ertiga", "Omni", "Ritz", "S-Cross", "S-Presso", "Swift", "SX4", "Versa", "Wagon R", "XL6", "Zen", "Zen Estilo"],
  "MG Motors": ["Astor", "Gloster", "Hector", "Hector Plus", "ZS EV"],
  "Mercedes-Benz": ["A-Class", "AMG GT", "B-Class", "C-Class", "CLA", "E-Class", "E-Class Cabriolet", "GL", "GLA", "GLB", "GLC", "GLE", "GLE Coupe", "GLS", "ML-Class", "S-Coupe", "SL"],
  "Mini Cooper": ["Cooper", "Countryman", "Cooper SE", "Countryman Electric"],
  Nissan: ["350Z", "370Z", "Evalia", "Kicks", "Magnite", "Micra", "Micra Active", "Sunny", "Teana", "Terrano", "X-Trail"],
  Porsche: ["Macan", "Cayenne", "911", "Panamera", "Taycan", "718", "Cayenne Coupe"],
  Renault: ["Captur", "Duster", "Fluence", "Kiger", "Koleos", "Kwid", "Lodgy", "Logan", "Pulse", "Scala", "Triber"],
  Skoda: ["Fabia", "Fabia Scout", "Karoq", "Kodiaq", "Kushaq", "Laura", "Octavia", "Octavia Combi", "Rapid", "Slavia", "Superb", "Superb Old", "Yeti"],
  Tata: ["Altroz", "Aria", "Bolt", "Curvy", "Harrier", "Hexa", "Indica", "Indica V2", "Indica V2 Turbo", "Indica V2 Xeta", "Indica Vista", "Indica eV2", "Indicab", "Indigo", "Indigo CS", "Indigo XL", "Indigo eCS", "Indigo Marina", "Manza", "Movus", "Nano", "Nano GenX", "Nexon", "Nexon EV", "Nexon EV Max", "Nexon EV Prime", "Punch", "Safari", "Safari Storme", "Sierra", "Sumo", "Sumo Gold", "Sumo Grande", "Sumo Grande MK II", "Sumo Spacio", "Sumo Victa", "Tiago", "Tiago EV", "Tiago NRG", "Tigor", "Tigor EV", "Venture", "Vista Tech", "Xenon XT", "Zest"],
  Toyota: ["Alphard", "Camry", "Celica", "Corolla", "Corolla Altis", "Corona", "Etios", "Etios Cross", "Etios Liva", "Fortuner", "Glanza", "Hilux", "Innova", "Innova Crysta", "Innova Hycross", "Land Cruiser", "Land Cruiser Prado", "Prius", "Qualis", "Rumion", "Urban Cruiser", "Urban Cruiser Hyryder", "Urban Cruiser Taisor", "Yaris"],
  Volkswagen: ["1600", "Ameo", "Beetle", "Cross Polo", "Jetta", "Passat", "Phaeton", "Polo", "T-Roc", "Taigun", "Tiguan", "Tiguan AllSpace", "Touareg", "Virtus", "Vento"],
  Volvo: ["XC90", "XC60", "XC40 Recharge", "C40 Recharge", "EX40", "EC40", "EX30", "S90"]
};

const brandSelect = document.getElementById("Brand");
      const modelSelect = document.getElementById("Model");
      const otherModelInput = document.getElementById("OtherModel");


      console.log(document.getElementById("Brand"));
console.log(document.getElementById("Model"));
      brandSelect.addEventListener("change", function () {
        const selectedBrand = brandSelect.value;
        modelSelect.innerHTML =
          '<option value="" selected disabled>Select Model</option>';

        if (modelData[selectedBrand]) {
          modelData[selectedBrand].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
          });

          // Add "Other" option
          const otherOption = document.createElement("option");
          otherOption.value = "Other";
          otherOption.textContent = "Other";
          modelSelect.appendChild(otherOption);

          modelSelect.disabled = false;
        } else {
          modelSelect.disabled = true;
        }

        // Hide Other input when brand changes
        otherModelContainer.style.display = "none";
        otherModelInput.value = "";
      });

      // Model change
      modelSelect.addEventListener("change", function () {
        if (modelSelect.value === "Other") {
          otherModelContainer.style.display = "block";
          otherModelInput.focus();
             otherModelInput.required = true;
        } else {
          otherModelContainer.style.display = "none";
          otherModelInput.value = "";
           otherModelInput.required = false;
        }
      });
// Model change
modelSelect.addEventListener("change", function () {
  if (modelSelect.value === "Other") {
    otherModelContainer.style.display = "block";
    otherModelInput.required = true;
    otherModelInput.focus();
  } else {
    otherModelContainer.style.display = "none";
    otherModelInput.value = "";
    otherModelInput.required = false;
  }
});



  // Form submit
  // document.getElementById("mainForm").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   console.log(Object.fromEntries(formData));
  // });
  // Form submit event listener

// document.getElementById("mainForm").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const formData = new FormData(form);

//   // Validation: check empty fields
//   for (let [name, value] of formData.entries()) {
//     if (!value.trim()) {
//       alert(`Please fill the ${name} field`);
//       return;
//     }
//   }

//   // Convert FormData to object
//   const data = Object.fromEntries(formData.entries());
//   console.log(data)

//   // try {
//   //   const response = await fetch("YOUR_WEB_APP_URL_HERE", {
//   //     method: "POST",
//   //     body: JSON.stringify(data),
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //   });

//   //   const result = await response.json();
//   //   if (result.status === "success") {
//   //     alert("Form submitted successfully!");
//   //     form.reset();
//   //   } else {
//   //     alert("Error: " + result.message);
//   //   }
//   // } catch (err) {
//   //   alert("Error: " + err.message);
//   // }
// });

document.getElementById("mainForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.querySelector(".submit-btn");
  console.log(submitBtn)
  // const formData = new FormData(form);
// ✅ Handle coverage
        let modelSelect = form.model;
let otherModelInput = document.getElementById("OtherModel");
let modelValue = modelSelect.value;

if (modelValue === "Other" && otherModelInput && otherModelInput.value.trim() !== "") {
  modelValue = otherModelInput.value.trim();
}

let coverageSelect = form.coverage;
let otherPartsInput = document.getElementById("parts");
let coverageValue = coverageSelect.value;

if (coverageValue === "Partial" && otherPartsInput && otherPartsInput.value.trim() !== "") {
  coverageValue = otherPartsInput.value.trim();
}


  let valid = true;
  const name = form.querySelector("[name='name']");
  if (!name.value.trim()) {
    valid = false;
     Swal.fire("Missing Fields", "Please enter your full name.",);
  }

  const phone = form.querySelector("[name='phone']");
  if (!/^[0-9]{10}$/.test(phone.value.trim())) {
    valid = false;
     Swal.fire("Invalid Phone", "Phone number must be 10 digits.",);
  }

  const email = form.querySelector("[name='email']");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    valid = false;
  Swal.fire("Invalid Email", "Please enter a valid email address.", );

  }
  

  const vehicleNo = form.querySelector("input[placeholder='[Vehicle No.]']");
  // if (!vehicleNo.value.trim()) {
  //   valid = false;
  //   alert("Please enter vehicle number.");
  // }
 // sirf letters aur numbers
let vehicleRegex = /^[A-Za-z0-9]+$/;
if (!vehicleRegex.test(vehicleNo.value) || vehicleNo.value.length < 6) {
  Swal.fire("Invalid Vehicle Number", "Vehicle number must be at least 6 characters (letters and numbers only).");
  return;
}
  const brand = form.querySelector("[name='brand']");
  if (!brand.value) {
    valid = false;
  Swal.fire("Car Brand Required", "Please select car brand.", );

  }

  const model = form.querySelector("[name='model']");
  if (!model.value) {
    valid = false;
  Swal.fire("Car Model Required", "Please enter car model.", );

  }

  const fileInput = document.getElementById("uplodefile");
  if (fileInput.files.length === 0) {
    valid = false;
  Swal.fire("Car Image Required", "Please upload car image.", );

  } else {
    const file = fileInput.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      valid = false;
  Swal.fire("Required", "File must be JPG, JPEG, or PNG.", );

    }
    if (file.size > 10 * 1024) { // 10 KB
      valid = false;
  Swal.fire("Required", "File must be smaller than 10KB.", );
    }
  }

  const amount = form.querySelector("[name='totalAmount']");
  if (!amount.value.trim() || isNaN(amount.value)) {
    valid = false;
       Swal.fire("Amount Required", "Enter a valid amount paid.", );
  }

  const agree = document.getElementById("agree");
  if (!agree.checked) {
    valid = false;
    Swal.fire("Agreement Required", "Please agree to the terms and conditions.");

  }


 


  if (!valid) {
    return; // Stop submit if invalid
  }

  //   submitBtn.disabled = true;
  // const originalText = submitBtn.textContent;
  // submitBtn.textContent = "Processing...";


  // ✅ Process file to base64 and send

    submitBtn.disabled = true;
  // const originalText = submitBtn.textContent;
  submitBtn.textContent = "Processing..."; 


  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
      const base64Data = reader.result; // data:image/png;base64,...

      const formData = new FormData(form);
      formData.append("imageBase64", base64Data);
      formData.set("model", modelValue);
      formData.set("coverage", coverageValue);


      fetch("https://script.google.com/macros/s/AKfycbwHldwP3iLkU5Cm0VGbNVKqr73OsNCHCDyRAsxXdYokymtKmdOqOMhU0ISFH6jF4EHHFQ/exec", {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.result === "success") {
          var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
          modal.show();

          document.getElementById("staticBackdrop").addEventListener("hidden.bs.modal", function () {
            document.getElementById("mainForm").reset();
              // submitBtn.disabled = false;           // enable button
              //  submitBtn.textContent = originalText;
            window.location.reload();
          });
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch(err => console.error(err));
    };

    reader.readAsDataURL(file); // ✅ convert to base64
  }
});


// let selectedServices = [];
// let currentServiceIndex = 0;
// let currentSubStepIndex = 0;

// const step1 = document.getElementById("step-1");
// const finalStep = document.getElementById("final-step");
// const subSteps = Array.from(document.querySelectorAll(".step[data-service]"));

// // Show first service's first sub-step
// function nextStep() {
//   if(step1.classList.contains("active")){
//     selectedServices = Array.from(document.querySelectorAll("input[name='services']:checked"))
//                             .map(e=>e.id.toLowerCase());
//     if(selectedServices.length === 0){
//       alert("Select at least one service!");
//       return;
//     }
//     step1.classList.remove("active");
//     currentServiceIndex = 0;
//     currentSubStepIndex = 0;
//     showSubStep();
//   } else {
//     currentSubStepIndex++;
//     if(currentSubStepIndex >= getSubStepsForCurrentService().length){
//       currentServiceIndex++;
//       currentSubStepIndex = 0;
//       if(currentServiceIndex >= selectedServices.length){
//         showStep(finalStep);
//         return;
//       }
//     }
//     showSubStep();
//   }
// }

// function prevStep(){
//   if(currentSubStepIndex > 0){
//     currentSubStepIndex--;
//     showSubStep();
//   } else if(currentServiceIndex > 0){
//     currentServiceIndex--;
//     currentSubStepIndex = getSubStepsForCurrentService().length - 1;
//     showSubStep();
//   } else {
//     showStep(step1);
//   }
// }

// function getSubStepsForCurrentService(){
//   return subSteps.filter(s => s.dataset.service === selectedServices[currentServiceIndex]);
// }

// function showSubStep(){
//   // hide all sub-steps
//   subSteps.forEach(s => s.classList.remove("active"));
//   finalStep.classList.remove("active");
//   // show current sub-step
//   getSubStepsForCurrentService()[currentSubStepIndex].classList.add("active");
// }

// function showStep(step){
//   // hide all
//   subSteps.forEach(s => s.classList.remove("active"));
//   step1.classList.remove("active");
//   finalStep.classList.remove("active");
//   // show desired
//   step.classList.add("active");
// }
