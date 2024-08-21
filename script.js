const video = document.getElementById("trailer");
var pause = document.getElementById("pause");
var mute = document.getElementById("mute");


video.volume = 0;
video.muted = true;

function iniciar() {
  volumeControl.value = 0;
  video.play();
}

function pausar() {
  if (video.paused) {
    video.play();
    pause.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    video.pause();
    pause.innerHTML = '<i class="fa fa-play"></i>';
  }
}

const volumeControl = document.querySelector('.volume');
video.volume = volumeControl.value / 100;
volumeControl.addEventListener('input', function() {
  video.volume = this.value / 100;
  if(volumeControl.value == 0) {
    video.volume = volumeControl.value;
    mute.innerHTML = '<i class="fa fa-volume-off"></i>';
  } else {
    video.volume = volumeControl.value / 100;
    mute.innerHTML = '<i class="fa fa-volume-up"></i>';
  }
});

if(video.muted) {
  volumeControl.value = 0;
  volumeControl.addEventListener('input', function() {
    video.muted = false;
    video.volume = this.value / 100;
    if(volumeControl.value == 0) {
      video.volume = volumeControl.value;
      mute.innerHTML = '<i class="fa fa-volume-off"></i>';
    } else {
      video.volume = volumeControl.value / 100;
      mute.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
  });
}

function mutar() {
  if (video.muted) {
    video.muted = false;
    mute.innerHTML = '<i class="fa fa-volume-up"></i>';
    volumeControl.value = 100;
  } else {
    video.muted = true;
    mute.innerHTML = '<i class="fa fa-volume-off"></i>';
    volumeControl.value = 0;
  }
}

function pop() {
  var url = "popquiz.html";
  var janelaPopup = window.open(url, "NomeDaJanela", "width=900,height=600");
  if (!janelaPopup) {
      alert("A janela pop-up foi bloqueada pelo navegador. Verifique as configurações do bloqueador de pop-up.");
  }
}