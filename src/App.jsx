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
      title: 'Last christmas',
      url: 'https://www.youtube.com/watch?v=KhqNTjbQ71A'
    }
  ];

  return (
    <div className="App">
      <h2>Projecte Nadal</h2>

      {videoList.map((video) => (
        <div key={video.id} className="video-container">
          <h3>{video.title}</h3>

          <iframe
            width="400"
            height="220"
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
  )
}

export default App
