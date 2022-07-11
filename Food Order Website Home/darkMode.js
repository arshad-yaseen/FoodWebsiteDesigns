let DarkModeCheckbox = document.getElementById('checkbox');
let darkModeIcon = document.getElementById('darkModeIcon');
let body = document.querySelector('body');
darkMode = localStorage.getItem("darkMode")

if (darkMode === "enabled"){
    DarkModeCheckbox.checked = true;
    darkModeIcon.classList.replace('far','fas')
}

DarkModeCheckbox.addEventListener('click',darkModeClicked)

const enableDarkMode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem("darkMode","enabled")
    darkModeIcon.classList.replace('far','fas')
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem("darkMode",null)
    darkModeIcon.classList.replace('fas','far')
}

if (darkMode === "enabled"){
    enableDarkMode();
}


function darkModeClicked(){

    darkMode = localStorage.getItem("darkMode")
    
      if (darkMode !== "enabled"){
          enableDarkMode();
          
      }else {
            disableDarkMode();
        }
    
  }