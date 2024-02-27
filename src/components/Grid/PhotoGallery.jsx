import "./PhotoGallery.css";
function PhotoGallery() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src="https://picsum.photos/200/300/?random=1" alt="Photo 1" />
        <div className="caption">Photo 1</div>
      </div>
      <div className="grid-item">
        <img src="https://picsum.photos/200/300/?random=2" alt="Photo 2" />
        <div className="caption">Photo 2</div>
      </div>
      <div className="grid-item">
        <img src="https://picsum.photos/200/300/?random=3" alt="Photo 3" />
        <div className="caption">Photo 3</div>
      </div>
    </div>
  );
}

export default PhotoGallery;
