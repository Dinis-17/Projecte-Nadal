import './App.css'
import Snowfall from 'react-snowfall'

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
      title: 'Feliz Navidad - Arcangel',
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
      title: 'Merry Christmas!',
      url: 'https://www.youtube.com/embed/8bMh8azh3CY?si=gE3uPAPnO3cWw0kn',
    },
    {
      id: 15,
      title: 'Jingle Bells',
      url: 'https://www.youtube.com/embed/3PgNPc-iFW8',
    }
  ];


  return (
    <div className="App">
      <Snowfall snowflakeCount={300}/>
      <h2>Playlist Nadal</h2>

      <div className="video-grid-container">
        {videoList.map((video) => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>

            <iframe
              src={video.url}
              title={video.title}
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