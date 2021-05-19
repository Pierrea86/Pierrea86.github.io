function coordonnees(){

let x = document.getElementById("lat");
let y = document.getElementById("long");
let boutonlat = document.getElementById("latitude");
let boutonlong = document.getElementById("longitude");


function fonclatitude() {

    function success(position) {
        const latitude  = position.coords.latitude;
        x.innerHTML ="Latitude: " + latitude;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } 
    else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  

  function fonclongitude() {

    function success(position) {
      const longitude  = position.coords.longitude;
      y.innerHTML ="Longitude: " + longitude;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } 
  else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
  
  }
  
  boutonlat.addEventListener('click', fonclatitude);
  boutonlong.addEventListener('click', fonclongitude);

}

function historique(){
  
  let boutonhist = document.getElementById("reculer");

  function fonchistory() {
    let nb = document.getElementById('nbpages').value;
    window.history.go(-nb);
    }

    boutonhist.addEventListener('click', fonchistory);

}

function copcoller(){

  let boutoncpy = document.getElementById('copier');
  let boutoncoller = document.getElementById('coller');


  function copy() {
    //var copyText = document.querySelector("#textecopie");
    //copyText.select();
    //document.execCommand("copy");
    let txt = document.getElementById('textecopie').value;
    navigator.clipboard.writeText(txt).then(function message_copié(){
      alert("Le message a été copié !");
    });
    
  }

  function paste() {
    /*
    function paste() {
  var pasteText = document.querySelector("#output");
  pasteText.focus();
  document.execCommand("paste");
  console.log(pasteText.textContent);
}

document.querySelector("#paste").addEventListener("click", paste);
*/
    let txt = document.getElementById('textecolle').value;
    navigator.clipboard.readText(txt).then(function message_collé(){
      alert("Le message a été collé !");
    });
    
  }

  
  boutoncpy.addEventListener('click', copy);
  boutoncoller.addEventListener('click', paste);
  //document.querySelector("#copier").addEventListener("click", copy);
}


coordonnees();
historique();
copcoller();