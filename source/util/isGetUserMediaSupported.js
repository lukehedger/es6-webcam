export default () => {

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  if((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || navigator.getUserMedia){
    return true;
  }

  return false;

}
