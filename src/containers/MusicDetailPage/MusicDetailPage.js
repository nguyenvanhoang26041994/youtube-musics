import './MusicDetailPage.scss';

const MusicDetailPage = () => {
  return (
    <div id="music-detail-page" className="music-detail-page flex-1">
      <div className="container m-auto">
        <div className="flex py-10 animated slideInDown faster">
          <div className="h-32 w-32">
            <img
              className="music-detail-page__playing-music rounded-full w-full h-full --scale"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5Cj_7zz-yfSugoNAo3HD19RHeOV0qQ2A-UrC7kztjMc9-Fpm"
            />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <span className="text-2xl text-teal-500 hover:underline cursor-pointer">Hãy trao cho anh</span>
            <span className="text-base text-white cursor-pointer">Sơn Tùng M-TP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicDetailPage;
