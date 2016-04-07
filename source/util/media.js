export default (isGetUserMediaSupported) => {

  if (isGetUserMediaSupported) {
    let getUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia ?
      navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices) :
      function (constraints) {
        return new Promise(function (resolve, reject) {
          navigator.getUserMedia(constraints, resolve, reject);
        });
      };

    getUserMedia({audio: false, video: true})
      .then(stream => {
        let video = document.querySelector('video')
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(err => {
        console.error(err);
      })
  }

}
