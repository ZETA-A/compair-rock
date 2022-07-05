let loadFile = (event) => {
    let output = document.getElementById("webcam-container");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
        URL.revokeObjectURL(output.src);
    };
};
