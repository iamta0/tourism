document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const technologyContent = document.getElementById('technology-content');
            const tabs = data.technology.map((tech, index) => `
                <button class="tablinks button3 ${index === 0 ? 'active' : ''}" onclick="openCity(event, '${tech.id}')">${index + 1}</button>
            `).join('');
            const content = data.technology.map((tech, index) => `
                <div id="${tech.id}" class="tabcontent ${index === 0 ? 'show' : ''}">
                    <div class="profile">
                        <div class="img-p">
                            <img src="${tech.image}" alt="${tech.title} Image">
                        </div>
                        <div class="profile-content">
                            <p class="p4">The terminology...</p>
                            <h3>${tech.title}</h3>
                            <p class="profile-p">${tech.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
            technologyContent.innerHTML = `
                <div class="technology-tab">${tabs}</div>
                <div class="technology-tabs-content">${content}</div>
            `;
        })
        .catch(error => console.error('Error fetching technology data:', error));
});

function openCity(evt, TechnologyName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TechnologyName).style.display = "block";
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

  