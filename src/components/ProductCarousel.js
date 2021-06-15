import "../scss/ProductCarousel.scss";

const ProductCarousel = ({ previewImage, detailImages }) => {
  return (
    <div
      id="productCarousel"
      className="carousel slide"
      data-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-indicators">
        <a
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 0"
        >
          <img src={previewImage} className="d-block w-100" alt="preview" />
        </a>
        {detailImages.map((img, i) => (
          <a
            key={`btn-${img.id}`}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to={i + 1}
            aria-label={`Slide ${i + 1}`}
          >
            <img
              src={img.imgUrl}
              className="d-block w-100"
              alt={img.description}
            />
          </a>
        ))}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={previewImage} className="d-block w-100" alt="preview" />
        </div>
        {detailImages.map((i) => (
          <div key={`item-${i.id}`} className="carousel-item">
            <img src={i.imgUrl} className="d-block w-100" alt={i.description} />
          </div>
        ))}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
