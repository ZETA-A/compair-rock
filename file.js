let loadFile = (event) => {
    const selectMenu = document.getElementById("select-menu");
    if (selectMenu.value === "picture") {
        let reader = new FileReader();
        console.log("리더생성완료");

        reader.onload = readSuccess;

        function readSuccess(event) {
            console.log("리더 로드 완료");
            let output = document.getElementById("webcam-container");
            let img = document.createElement("img");
            document.querySelector("div#webcam-container").appendChild(img);
            console.log(event.target.result);
            img.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
        console.log("작업 모두 완료");
    } else if (selectMenu.value === "video") {
        let output = document.getElementById("webcam-container");
        console.log(event.target.URL);
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = () => {
            URL.revokeObjectURL(output.src);
        };
    }
};
