  document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const destinationContent = document.getElementById('destination-content');
        const tabs = data.destinations.map((destination, index) => `
          <button class="tablinks button1 ${index === 0 ? 'active' : ''}" onclick="openPlanet(event, '${destination.name.toLowerCase()}')">${destination.name.toLowerCase()}</button>
        `).join('');
        const content = data.destinations.map((destination, index) => `
          <div id="${destination.name.toLowerCase()}" class="tabcontent ${index === 0 ? 'show' : ''}">
            <div class="planets">
              <div class="${destination.imageClass}"></div>
              <div class="planets-content">
                <h2>${destination.name.toLowerCase()}</h2>
                <p class="destination-p">${destination.description}</p>
                <div class="astronomical-unit">
                  <div>
                    <p class="subheading-2">Avg. distance</p>
                    <p class="subheading-1">${destination.distance}</p>
                  </div>
                  <div class="days-calculate">
                    <p class="subheading-2">Est. travel time</p>
                    <p class="subheading-1">${destination.travelTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `).join('');
        destinationContent.innerHTML = `
          <div class="destination-tab">${tabs}</div>
          ${content}
        `;
      })
      .catch(error => console.error('Error fetching destination data:', error));
  });
  
  function openPlanet(evt, PlanetName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(PlanetName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function myFirstfunction() {
    document.getElementById("h-menu").classList.toggle("show");
    document.getElementById("close-img").classList.toggle("z-index");
    document.getElementById("ham-img").classList.toggle("hidden");
  }
  
  function mysecondfunction() {
    document.getElementById("ham-img").classList.remove("hidden")
    document.getElementById("h-menu").classList.remove("show");
    document.getElementById("close-img").classList.remove("z-index");
  }

  
 