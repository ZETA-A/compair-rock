const selectMenu = document.getElementById("select-menu");
const description = document.getElementById("description");
const startBtn = document.getElementById("startBtn");
const loadBtn = document.getElementById("loadBtn");
const labelBtn = document.getElementById("labelBtn");

selectMenu.addEventListener("change", (event) => {
    console.log(event.target.value);
    let eventTargetValue = event.target.value;
    if (event.target.value === "picture") {
        description.innerHTML = "불러오기를 눌러 사진을 가져오세요!";
        loadBtn.removeAttribute("disabled");
        startBtn.removeAttribute("disabled");
        labelBtn.removeAttribute("disabled");
        labelBtn.removeAttribute("class");
    } else if (event.target.value === "video") {
        description.innerHTML =
        "카메라가 보이지않는다면 접근권한을 허가해주세요!";
        startBtn.removeAttribute("disabled");
        loadBtn.setAttribute("disabled", "");
        labelBtn.removeAttribute("disabled");
        labelBtn.setAttribute("class", "disableBtn");
    } else if (event.target.value === "empty") {
        description.innerHTML = "옵션을 선택해주세요!";
        loadBtn.setAttribute("disabled", "");
        labelBtn.setAttribute("class", "disableBtn");
        labelBtn.setAttribute("disabled", "");
        startBtn.setAttribute("disabled", "");
    }
});

// export eventTargetValue
