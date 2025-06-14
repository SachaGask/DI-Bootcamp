// Définition de la classe Video
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

// === Instances individuelles ===
const video1 = new Video("Learn JS in 10 Minutes", "Alice", 600);
video1.watch();

const video2 = new Video("Cooking Vegan Pasta", "Bob", 900);
video2.watch();

// === Données bonus pour 5 vidéos ===
const videoData = [
  { title: "How to Draw", uploader: "Charlie", time: 300 },
  { title: "React Crash Course", uploader: "Dani", time: 1200 },
  { title: "Cat Compilation", uploader: "Emma", time: 240 },
  { title: "Guitar Basics", uploader: "Felix", time: 480 },
  { title: "10-Minute Yoga", uploader: "Grace", time: 600 },
];

// === Création et appel de la méthode watch() pour chaque vidéo ===
const videos = [];

for (let data of videoData) {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
  video.watch();
}
