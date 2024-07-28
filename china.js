document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('video-element');
    const videoList = document.getElementById('video-list');
  
    // ここでmp4フォルダ内の動画ファイルを取得し、リストを作成する
    const videoFiles = ['sample.mp4', 'another.mp4', 'third.mp4'];
    videoFiles.forEach(function(file) {
      const listItem = document.createElement('li');
      listItem.textContent = file.split('.')[0];
      listItem.addEventListener('click', function() {
        videoElement.src = 'videos/' + file;
        videoElement.type = 'video/mp4';
        videoElement.play();
      });
      videoList.appendChild(listItem);
    });
  });
  