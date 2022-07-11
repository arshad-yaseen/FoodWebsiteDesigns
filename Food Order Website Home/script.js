let dropdown  = document.getElementById('dropdown');
let arrowDown  = document.getElementById('arrowDown');
let dropdownClose = document.getElementById('dropdownClose');
let settings = document.getElementById('settings');
let settingsIcon = document.getElementById('settingsIcon');
let mainSettingsWrapper = document.getElementById('mainSettingsWrapper');
let settingsCloseIcon = document.getElementById('settingsCloseIcon');
let dropDownSettings = document.getElementById('dropDownSettings');



settingsCloseIcon.addEventListener('click',settingsCloseIconClicked)


function settingsCloseIconClicked(){
  settings.style.marginLeft="82.5%"
  settings.style.opacity="0"
  settings.style.marginTop="270px"
  settings.style.display="none"
  if (settings.style.marginLeft == "6%"){
    mainSettingsWrapper.style.opacity="0"
  }
}

arrowDown.addEventListener('mouseover',arrowOveredB)
dropdownClose.addEventListener('click', closeClicked)

function arrowOveredB(){
    dropdown.style.opacity="1"
    dropdown.style.marginTop="300px"
    arrowDown.style.transform="rotate(-180deg)"
}

function closeClicked(){
    dropdown.style.opacity="0"
    dropdown.style.marginTop="280px"
    arrowDown.style.transform="rotate(0deg)"
}

VanillaTilt.init(document.querySelectorAll(".main-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": .5
  });

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

dropDownSettings.addEventListener('click',settingsClicked);

function settingsClicked(){
  settings.style.marginLeft="82.5%"
  settings.style.marginTop="330px"
  settings.style.opacity="1"
  settings.style.display="block"
  if (settings.style.marginLeft == "7%"){
    mainSettingsWrapper.style.opacity="1"
  }
}

