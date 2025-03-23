// knapp i övre högra hörnet - visa inte förrän användaren skrollar
function showScrollButton() {
    let scroll = this.scrollY;
    if (scroll > 50) {
        document.getElementById("exit-button").style.display = "block";
    } else {
        document.getElementById("exit-button").style.display = "none";
    }
}

window.addEventListener("scroll", showScrollButton , false);

function scrollToTop() {
    globalThis.scrollTo({top: 0, left: 0, behavior: "smooth"});
}

// stor blob som följer musen
// all "blob-kod" är inte 100% min egen men självfallet förstår jag allt
const blob = document.getElementById("blob");
const blobBlur = document.getElementById("blob-blur");
let showBlob = true;

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
}
