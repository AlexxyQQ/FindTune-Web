// const recordAudio = () =>
//   new Promise(async (resolve) => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     const mediaRecorder = new MediaRecorder(stream);
//     const audioChunks = [];

//     mediaRecorder.addEventListener("dataavailable", (event) => {
//       audioChunks.push(event.data);
//     });

//     const start = () => mediaRecorder.start();

//     const stop = () =>
//       new Promise((resolve) => {
//         mediaRecorder.addEventListener("stop", () => {
//           const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
//           const audioUrl = URL.createObjectURL(audioBlob);
//           const audio = new Audio(audioUrl);
//           const f = window.URL.createObjectURL(audioBlob);
//           console.log(audioBlob);

//   resolve({ audioBlob, audioUrl });
//   const downloadFile = (file) => {
//     console.log(file);
//     var element = document.createElement("a");
//     element.href = file;
//     element.download = "recorded.mp3";
//     element.style.display = "none";
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };
//   downloadFile(f);

// PythonShell.run("Backend/From-File.py");

// let options = {
//   mode: "text",
//   pythonPath: "venv/Scripts/python.exe",
//   pythonOptions: ["-f"], // get print results in real-time
//   scriptPath: "/Backend",
//   args: [audioUrl + ".mp3"],
// };

// PythonShell.run("From-File.py", options, function (err, results) {
//   if (err) throw err;
//   // results is an array consisting of messages collected during execution
//   console.log("results: %j", results);
// });
//         });

//         mediaRecorder.stop();
//       });

//     resolve({ start, stop });
//   });

// const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// document.getElementById("action").onclick = function (e) {
//   const recorder = recordAudio();
//   const actionButton = document.getElementById("action");
//   actionButton.disabled = true;
//   recorder.start();
//   sleep(10000);
//   const audio = recorder.stop();
//   sleep(10000);
//   actionButton.disabled = false;
// };

const recordAudio = () =>
  new Promise(async (resolve) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise((resolve) => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const handleAction = async () => {
  const recorder = await recordAudio();
  const actionButton = document.getElementById("action");
  actionButton.disabled = true;
  recorder.start();
  await sleep(3000);
  const audio = await recorder.stop();
  audio.play();
  await sleep(3000);
  actionButton.disabled = false;
};
