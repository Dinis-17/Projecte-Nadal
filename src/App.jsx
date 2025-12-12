import './App.css'

function App() {
  const videoList = [
    {
      id: 1,
      title: 'All I Want for Christmas Is You',
      url: 'https://www.youtube.com/embed/aAkMkVFwAoo',
    },
    {
      id: 2,
      title: 'El Reno Rodolfo',
      url: 'https://www.youtube.com/embed/uArFYpxDOoU',
    },
    {
      id: 3,
      title: 'Last Christmas',
      url: 'https://www.youtube.com/embed/KhqNTjbQ71A',
    },
    {
      id: 4,
      title: 'Falu salchicha gordo bachicha',
      url: 'https://www.youtube.com/embed/0QAEwP9HO7M?si=hJTou_uTMNzoNPFe',
    },
    {
      id: 5,
      title: 'Burrito Sabanero',
      url: 'https://www.youtube.com/embed/cbgCFy8YR7E',
    },
    {
      id: 6,
      title: 'Los Diozes',
      url: 'https://www.youtube.com/embed/3ZMTt5Sh4-8',
    },
    {
      id: 7,
      title: 'La Falu en el río',
      url: 'https://www.youtube.com/embed/bx6kO3EtmK0',
    },
    {
      id: 8,
      title: 'Feliz Navidad Falu',
      url: 'https://www.youtube.com/embed/cqIeWJKTKmc',
    },
    {
      id: 9,
      title: 'Christmas Indio',
      url: 'https://www.youtube.com/embed/yqxIiwa_GYw',
    },
    {
      id: 10,
      title: 'És Nadal a Andorra',
      url: 'https://www.youtube.com/embed/0pWhj09pOjU',
    },
    {
      id: 11,
      title: "M'agrada el Nadal",
      url: 'https://www.youtube.com/embed/9eHgC_YFyWg',
    },
    {
      id: 12,
      title: 'El Caganer',
      url: 'https://www.youtube.com/embed/cAGr9Rna5Qc',
    },
    {
      id: 13,
      title: '25 de Desembre',
      url: 'https://www.youtube.com/embed/fdXf5-z19Bw',
    },
    {
      id: 14,
      title: 'Feliz Navidad',
      url: 'https://www.youtube.com/embed/TtXQk6Gq6lw',
    },
    {
      id: 15,
      title: 'Jingle Bells',
      url: 'https://www.youtube.com/embed/3PgNPc-iFW8',
    },
    {
      id: 16,
      title: 'Santa Claus Is Coming to Town',
      url: 'https://www.youtube.com/embed/0A8KT365wlA',
    },
    {
      id: 17,
      title: 'White Christmas',
      url: 'https://www.youtube.com/embed/2GmZlFq0LxY',
    },
    {
      id: 18,
      title: 'Rockin Around the Christmas Tree',
      url: 'https://www.youtube.com/embed/nXt3Z9lU5iY',
    },
    {
      id: 19,
      title: 'Do They Know It’s Christmas?',
      url: 'https://www.youtube.com/embed/8jEnTSQStGE',
    },
    {
      id: 20,
      title: 'Let It Snow! Let It Snow! Let It Snow!',
      url: 'https://www.youtube.com/embed/1MrJ-7j0a2M',
    },
    {
      id: 21,
      title: 'It’s Beginning to Look a Lot Like Christmas',
      url: 'https://www.youtube.com/embed/GFh3l8fQd3E',
    },
    {
      id: 22,
      title: 'Carol of the Bells',
      url: 'https://www.youtube.com/embed/1TFrO4i7v5Y',
    },
    {
      id: 23,
      title: 'O Holy Night',
      url: 'https://www.youtube.com/embed/7aJp3tRZkZk',
    },
    {
      id: 24,
      title: 'Silent Night',
      url: 'https://www.youtube.com/embed/9T4WB2zfmps',
    },
    {
      id: 25,
      title: 'Hark! The Herald Angels Sing',
      url: 'https://www.youtube.com/embed/6xZJ5Y2b2nE',
    },
    {
      id: 26,
      title: 'Joy to the World',
      url: 'https://www.youtube.com/embed/30OaM6b48k8',
    },
    {
      id: 27,
      title: 'We Wish You a Merry Christmas',
      url: 'https://www.youtube.com/embed/9Uo9R0L0lYw',
    },
    {
      id: 28,
      title: 'Little Drummer Boy',
      url: 'https://www.youtube.com/embed/qJ_MGWio-vc',
    },
    {
      id: 29,
      title: 'Deck the Halls',
      url: 'https://www.youtube.com/embed/EXzRjV4zGqM',
    },
    {
      id: 30,
      title: 'Have Yourself a Merry Little Christmas',
      url: 'https://www.youtube.com/embed/nY0Y0vZ4FJ4',
    },
  ];


  return (
    <div className="App">
      <h2>Playlist Nadal</h2>

      <div className="video-grid-container">
        {videoList.map((video) => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>

            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
};

export default App