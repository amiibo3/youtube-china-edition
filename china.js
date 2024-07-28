document.addEventListener('DOMContentLoaded', function() {
  const videoElement = document.getElementById('video-element');
  const videoThumbnailList = document.getElementById('video-thumbnail-list');

  // ここでmp4フォルダ内の動画ファイルを取得し、サムネイルリストを作成する
  const videoFiles = ['sample.mp4', 'another.mp4', 'third.mp4'];
  videoFiles.forEach(function(file) {
    const videoThumbnail = document.createElement('div');
    videoThumbnail.classList.add('video-thumbnail');
    videoThumbnail.innerHTML = `
      <img src="thumbnails/${file.split('.')[0]}.jpg" alt="${file.split('.')[0]}">
      <div class="duration">3:45</div>
      <div class="title">Video Title</div>
      <div class="channel-icon"></div>
      <div class="channel-name">Channel Name</div>
    `;
    videoThumbnail.addEventListener('click', function() {
      videoElement.src = 'videos/' + file;
      videoElement.type = 'video/mp4';
      videoElement.play();
    });
    videoThumbnailList.appendChild(videoThumbnail);
  });
});
