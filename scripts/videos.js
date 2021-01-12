const d = document,
  w = window;

const playVideo = (entry) => {
  entry.target.play();
};

const pauseVideo = (entry) => {
  entry.target.pause();
  entry.target.currency = 0;
};

export const videoHover = (miniature, video) => {
  const $miniature = d.querySelector(miniature),
    $videos = d.querySelectorAll(video),
    options = {
      threshold: 0.45,
    },
    callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo(entry);
        } else {
          pauseVideo(entry);
        }
        w.addEventListener("visibilitychange", (e) =>
          d.visibilityState === "visible" ? playVideo(entry) : pauseVideo(entry)
        );
      });
    },
    observer = new IntersectionObserver(callback, options);

  $videos.forEach(($video) => observer.observe($video));

  $miniature.addEventListener("mouseover", (e) => {
    e.target.play();
  });

  $miniature.addEventListener("mouseleave", (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  });
};
