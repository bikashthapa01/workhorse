var video = document.getElementById('videoid');



function playVideo(){
  if(video.paused){
    video.play();
    var playBtn = document.getElementById('playBtn').style.display='none';
  }else{
    video.pause()

  }

}