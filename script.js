// =========================================
// Funny Names & DP Hub
// script.js (Part 1)
// =========================================

// ---------- Categories ----------

const categoryGrid = document.getElementById("categoryGrid");

if (categoryGrid && typeof categories !== "undefined") {

    categoryGrid.innerHTML = "";

    categories.forEach(category => {

        categoryGrid.innerHTML += `
        <a href="${category.link}" class="card">

            <div class="icon ${category.color}">
                <i class="${category.icon}"></i>
            </div>

            <h3>${category.title}</h3>

        </a>
        `;

    });

}


// ---------- Latest Funny Names ----------

const latestNames = document.getElementById("latestNames");

if (latestNames && typeof funnyNames !== "undefined") {

    latestNames.innerHTML = "";

    funnyNames.slice(0,4).forEach(name => {

        latestNames.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

}


// ---------- Funny Names Page ----------

const funnyNamesList = document.getElementById("funnyNamesList");

if (funnyNamesList && typeof funnyNames !== "undefined") {

    funnyNamesList.innerHTML = "";

    funnyNames.forEach(name => {

        funnyNamesList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();

}
// =========================================
// Search
// =========================================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".card, .list-item, .dp-card").forEach(item => {

            item.style.display =
                item.innerText.toLowerCase().includes(value)
                ? ""
                : "none";

        });

    });

}


// =========================================
// Copy Button
// =========================================

function activateCopyButtons() {

    document.querySelectorAll(".copy-btn").forEach(button => {

        button.onclick = function () {

            const text = this.parentElement
                .querySelector(".copy-text")
                .innerText;

            navigator.clipboard.writeText(text);

            this.innerHTML = "✅ Copied";

            setTimeout(() => {

                this.innerHTML =
                '<i class="fa-regular fa-copy"></i> Copy';

            },1500);

        };

    });

}

activateCopyButtons();


// =========================================
// Download Button
// =========================================

function activateDownloadButtons(){

document.querySelectorAll(".download-btn").forEach(button=>{

button.onclick=function(){

const old=this.innerHTML;

this.innerHTML="✅";

setTimeout(()=>{

this.innerHTML=old;

},1500);

};

});

}

activateDownloadButtons();
activateImagePopup();
// =========================================
// Dynamic GIFs
// =========================================

const gifGrid = document.getElementById("gifGrid");

if (gifGrid && typeof gifs !== "undefined") {

    gifGrid.innerHTML = "";

    const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/AISITE COPY/");

    const gifList = isHomePage ? gifs.slice(0,3) : gifs;


    gifList.forEach(gif => {

        gifGrid.innerHTML += `
        <div class="dp-card">

            <img src="${gif.image}" alt="${gif.title}">

            <div class="dp-bottom">

                <span>${gif.title}</span>

                <a href="${gif.image}" download class="download-btn">
                    <i class="fa-solid fa-download"></i>
                </a>

            </div>

        </div>
        `;

    });

    activateDownloadButtons();
    activateImagePopup();

}
// =========================================
// Dynamic DPs
// =========================================

const dpGrid = document.getElementById("dpGrid");

if (dpGrid && typeof dps !== "undefined") {

    dpGrid.innerHTML = "";

    // اگر Home Page ہے تو صرف 6 DPs دکھاؤ
    const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/AISITE COPY/");

  const dpList = isHomePage ? dps.slice(0,3) : dps;

    dpList.forEach(dp => {

        dpGrid.innerHTML += `
        <div class="dp-card">

            <img src="${dp.image}" alt="${dp.title}">

            <div class="dp-bottom">

                <span>${dp.title}</span>

                <a href="${dp.image}" download class="download-btn">
                    <i class="fa-solid fa-download"></i>
                </a>

            </div>

        </div>
        `;

    });

    activateDownloadButtons();
    activateImagePopup();

}


// =========================================
// Card Click Animation
// =========================================

document.addEventListener("click", function(e){

    const card = e.target.closest(".card, .trend-card, .list-item");

    if(!card) return;

    card.style.transform = "scale(.97)";

    setTimeout(function(){

        card.style.transform = "";

    },150);

});


// =========================================
// Console Message
// =========================================

console.log("✅ Funny Names & DP Hub Loaded Successfully");

// =========================================
// Stylish Names Page
// =========================================

const stylishNamesList = document.getElementById("stylishNamesList");

if (stylishNamesList && typeof stylishNames !== "undefined") {

    stylishNamesList.innerHTML = "";

    stylishNames.forEach(name => {

        stylishNamesList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();
}

// =========================================
// Boys Names Page
// =========================================

const boysNamesList = document.getElementById("boysNamesList");

if (boysNamesList && typeof boysNames !== "undefined") {

    boysNamesList.innerHTML = "";

    boysNames.forEach(name => {

        boysNamesList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();
}

// =========================================
// Girls Names Page
// =========================================

const girlsNamesList = document.getElementById("girlsNamesList");

if (girlsNamesList && typeof girlsNames !== "undefined") {

    girlsNamesList.innerHTML = "";

    girlsNames.forEach(name => {

        girlsNamesList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();
}

// =========================================
// Couple Names Page
// =========================================

const coupleNamesList = document.getElementById("coupleNamesList");

if (coupleNamesList && typeof coupleNames !== "undefined") {

    coupleNamesList.innerHTML = "";

    coupleNames.forEach(name => {

        coupleNamesList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();
}

// =========================================
// Vip Names Page
// =========================================

const vipNamesList = document.getElementById("vipNamesList");

if (vipNamesList && typeof vipNames !== "undefined") {

    vipNamesList.innerHTML = "";

    vipNames.forEach(name => {

        vipNamesList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();
}

// =========================================
// DPs Page
// =========================================

const dpsList = document.getElementById("dpsList");

if (dpsList && typeof dps !== "undefined") {

    dpsList.innerHTML = "";

    dps.forEach(name => {

        dpsList.innerHTML += `
        <div class="list-item">

            <span class="copy-text">${name}</span>

            <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

        </div>
        `;

    });

    activateCopyButtons();
}


// =========================================
// Birthday Posters Page
// =========================================

const birthdayGrid = document.getElementById("birthdayGrid");

if (birthdayGrid && typeof birthdayPosters !== "undefined") {

    birthdayGrid.innerHTML = "";

    birthdayPosters.forEach(poster => {

        birthdayGrid.innerHTML += `
        <div class="dp-card">

            <img src="${poster.image}" alt="${poster.title}">

            <div class="dp-bottom">

                <span>${poster.title}</span>

                <a href="${poster.image}" download class="download-btn">
                    <i class="fa-solid fa-download"></i>
                </a>

            </div>

        </div>
        `;

    });

    activateDownloadButtons();
}

// =========================================
// Room Posters Page
// =========================================

const roomGrid = document.getElementById("roomGrid");

if (roomGrid && typeof roomPosters !== "undefined") {

    roomGrid.innerHTML = "";

    roomPosters.forEach(poster => {

        roomGrid.innerHTML += `
        <div class="dp-card">

            <img src="${poster.image}" alt="${poster.title}">

            <div class="dp-bottom">

                <span>${poster.title}</span>

                <a href="${poster.image}" download class="download-btn">
                    <i class="fa-solid fa-download"></i>
                </a>

            </div>

        </div>
        `;

    });

    activateDownloadButtons();
}

// =========================================
// Back To Top Button
// =========================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =========================================
// Image Popup
// =========================================

const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const popupClose = document.getElementById("popupClose");

function activateImagePopup() {

    document.querySelectorAll(".dp-card img").forEach(img => {

        img.onclick = function () {

            popupImage.src = this.src;

            imagePopup.style.display = "flex";

        };

    });

}

if (popupClose) {

    popupClose.onclick = function () {

        imagePopup.style.display = "none";

    };

}

if (imagePopup) {

    imagePopup.onclick = function (e) {

        if (e.target === imagePopup) {

            imagePopup.style.display = "none";

        }

    };

}

activateImagePopup();

// =========================================
// Featured Members Moving Strip
// =========================================

const featuredBox = document.getElementById("featuredMembers");

if (featuredBox && typeof featuredMembers !== "undefined") {

    let html = "";

    featuredMembers.forEach(member => {

        html += `
        <div class="member-card">

            <img src="${member.image}" alt="${member.name}">

            <div class="member-info">

                <h3>${member.title}</h3>

                ${member.name ? `<p>➜ ${member.name}</p>` : ""}

            </div>

        </div>
        `;

    });

    // Duplicate for smooth infinite scrolling
   featuredBox.innerHTML = html + html;

const track = featuredBox;

let pos = 0;

function moveMembers(){

    pos -= 0.5;

    if(Math.abs(pos) >= track.scrollWidth / 2){

        pos = 0;

    }

    track.style.transform = `translateX(${pos}px)`;

    requestAnimationFrame(moveMembers);

}

moveMembers();

}