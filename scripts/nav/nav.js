const makeNav = () => {
    return `
    <img class="pageimage" src="../images/patagonia.jpg" alt="patagoniaImg"><img class="logo" id="NavButton" src="../images/Geologo.jpg" alt="Geologo">
          <div id="mySidenav" class="sidenav">
              <a href="javascript:void(0)" id="closebutton" class="closebtn" >&times;</a>
              <a href="/index.html">Home</a>
              <a href="/pages/createnew.html">Create New</a>
              <a href="/pages/saved.html">Saved</a>
              <a href="/pages/search.html">Search?</a>
              <a href="https://www.geocaching.com/play" target="_blank" rel="noopener noreferrer">Start Geocaching!</a>
              <p class ="footer">&copy; 2021 Tundra Travellers</p>
            </div>`
            
            
    }
    export const SendNavToDom = () => {
        const navDom = document.querySelector(".Nav");
        navDom.innerHTML += makeNav()
    }
    export function openNav(){
        document.getElementById("NavButton").addEventListener("click", navOpen);
    }
    export function navOpen() {
      document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    export function closeNav() {
        const closeButtonDom = document.getElementById("closebutton")
        closeButtonDom.addEventListener("click",event => {
            if(event.target.id === "closebutton"){
                navClose();
            }
        } )
    }
    export function navClose() {
        document.getElementById("mySidenav").style.width = "0px";
    }