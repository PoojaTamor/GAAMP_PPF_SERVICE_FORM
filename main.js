const pathEl    = document.getElementById('cardPath');
const contentEl = document.getElementById('cardContent');
const svg       = document.getElementById('svgWrap');

// ---- Desktop shapes ----
const SHAPE = {
  small: "M55.707 2.29468H294.225C307.778 2.29468 320.827 7.43158 330.743 16.6707L362.787 46.5271C373.72 56.7137 388.108 62.3786 403.051 62.3787H520.15C532.417 62.3787 544.311 58.1685 553.847 50.4529L598.627 14.2195C608.163 6.50381 620.057 2.29468 632.323 2.29468H634.291C663.877 2.29488 687.86 26.2784 687.86 55.864V675.977C687.86 705.563 663.877 729.546 634.291 729.547H55.707C26.1213 729.547 2.1377 705.563 2.1377 675.977V55.864C2.1377 26.2783 26.1213 2.29468 55.707 2.29468Z",
  big:   "M45.9297 1.82104H477.128C488.987 1.82104 500.358 6.54507 508.725 14.949L582.738 89.2898C591.964 98.5558 604.5 103.765 617.575 103.765H830.465C841.241 103.765 851.652 99.8624 859.772 92.7791L951.456 12.8064C959.577 5.72316 969.988 1.82109 980.764 1.82104H1038.07C1062.69 1.82104 1082.66 21.7822 1082.66 46.406V693.434C1082.66 718.058 1062.69 738.02 1038.07 738.02H45.9307C21.3066 738.02 1.34473 718.058 1.34473 693.434V46.406C1.34496 21.7823 21.306 1.82129 45.9297 1.82104Z"
};

// ---- Mobile shape (same for open/close) ----
const MOBILE_SHAPE = "M496.449 704.141L496.449 411.938C496.449 403.917 493.271 396.222 487.609 390.539L437.663 340.401C431.421 334.135 427.916 325.651 427.916 316.807L427.916 172.441C427.916 165.156 430.54 158.113 435.307 152.604L489.059 90.4697C493.825 84.9597 496.449 77.9176 496.449 70.6318L496.449 31.8584C496.449 15.1124 482.874 1.53735 466.128 1.53711L31.8721 1.53709C15.1259 1.53709 1.54987 15.1122 1.54984 31.8584L1.54981 704.141C1.55003 720.886 15.1253 734.462 31.8711 734.462L466.128 734.462C482.874 734.462 496.449 720.886 496.449 704.141Z";

// ---- Helper: Check mobile ----
function isMobile(){
  return window.innerWidth <= 500;   // breakpoint आप बदल सकते हो
}

const baseSteps = [
  "personalClose","personalOpen",
  "carClose","carOpen","serviceClose",
  "serviceOpen"
];

let stepIndex = 0;
let serviceQueue = [];
let serviceIndex = -1;

// ---- Show state ----
function showState(name){
  const tpl = document.getElementById(`tpl-${name}`);
  if(!tpl) return;
  contentEl.innerHTML = tpl.innerHTML;

  if(isMobile()){
    // ---- Mobile shape always same ----
    pathEl.setAttribute('d', MOBILE_SHAPE);
    svg.setAttribute('viewBox', '0 0 498 736');
    svg.setAttribute('width',  '370');
    svg.setAttribute('height', '500');
  } else {
    // ---- Desktop logic ----
    const isOpen = name.endsWith("Open") || name.endsWith("Detail") || name==="final";
    pathEl.setAttribute('d', isOpen ? SHAPE.big : SHAPE.small);
    svg.setAttribute('viewBox', isOpen ? '0 0 1084 740' : '0 0 690 731');
    svg.setAttribute('width',  isOpen ? '700' : '500');
    svg.setAttribute('height', isOpen ? '650' : '520');
  }
}

// ---- Service flow ----
function nextService(){
  serviceIndex++;
  if(serviceIndex < serviceQueue.length){
    showState(serviceQueue[serviceIndex]);    
  } else {
    showState("final");                       
  }
}

// ---- Start button ----
// document.getElementById('getStartedBtn').addEventListener('click', ()=>{
//   document.querySelector('.getstarted').style.display = 'none';
//   document.getElementById('svgWrap').style.display    = 'block';
//   stepIndex = 0;
//   showState(baseSteps[stepIndex]);
// });
document.querySelectorAll('.getStartedBtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    // hide desktop + mobile getstarted blocks
    document.querySelectorAll('.getstarted').forEach(el => el.style.display = 'none');
    
    // show main svgWrap
    document.getElementById('svgWrap').style.display = 'block';
    
    // start step flow
    stepIndex = 0;
    showState(baseSteps[stepIndex]);
  });
});

// ---- Next/Back buttons ----
contentEl.addEventListener('click', e=>{
  const btnNext = e.target.closest('.btn-next');
  const btnBack = e.target.closest('.btn-back');

  if(btnNext){
    if(stepIndex < baseSteps.length && baseSteps[stepIndex] === "serviceOpen"){
      serviceQueue = [];
      contentEl.querySelectorAll("input[type='checkbox']:checked").forEach(cb=>{
        if(cb.value === "PPF")          serviceQueue.push("ppfDetail");
        if(cb.value === "Ceramic")      serviceQueue.push("ceramicDetail");
        if(cb.value === "Window Film")  serviceQueue.push("windowDetail");
        if(cb.value === "Graphene")     serviceQueue.push("grapheneDetail");
      });
      stepIndex++;
      if(serviceQueue.length){
        serviceIndex = -1;   
        nextService();
      } else {
        showState("final");
      }
    } else if(serviceIndex >= 0){
      nextService();
    } else if(stepIndex < baseSteps.length-1){
      stepIndex++;
      showState(baseSteps[stepIndex]);
    }
  }

  if(btnBack){
    if(serviceIndex >= 0){
      if(serviceIndex > 0){
        serviceIndex--;
        showState(serviceQueue[serviceIndex]);
      } else {
        serviceIndex = -1;
        stepIndex = baseSteps.indexOf("serviceOpen");
        showState("serviceOpen");
      }
    } else if(stepIndex > 0){
      stepIndex--;
      showState(baseSteps[stepIndex]);
    }
  }
});

// ---- Final form submit ----
document.getElementById('mainForm').addEventListener('submit', e=>{
  e.preventDefault();
  const data = new FormData(e.target);
  console.log("Form Submitted:", Object.fromEntries(data.entries()));
});

// ---- Update shape on resize ----
window.addEventListener('resize', ()=>{
  showState(baseSteps[stepIndex] || "personalClose");
});

