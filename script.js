function showGallery(section) {
    document.getElementById("gallery").classList.remove("hidden");
}

function showDetails(artId) {
    let details = {
        "art1": { "img": "art1.jpg", "desc": "이 작품은 자연을 주제로 한 회화입니다." },
        "art2": { "img": "art2.jpg", "desc": "이 작품은 현대적 감각을 살린 디자인입니다." }
    };

    document.getElementById("detail-image").src = details[artId].img;
    document.getElementById("detail-description").textContent = details[artId].desc;
    document.getElementById("details").classList.remove("hidden");
}

function hideDetails() {
    document.getElementById("details").classList.add("hidden");
}
