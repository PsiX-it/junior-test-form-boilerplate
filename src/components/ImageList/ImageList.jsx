import { ImageListWrapper } from './styles';

export const ImageList = ({ imageList, onDeleteImage }) => {
  return (
    <ImageListWrapper>
      {/* Проход по массиву imageList для рендера каждого элемента */}
      {imageList.map((imageData, index) => (
        <li key={index}>
          <div className="image-container">
            <div className="header-item">
              <div>
                <p className="photo-name">
                  <b>{imageData.photoName}</b>
                </p>
                <p className="date-add">
                  <b>Дата добавления: </b>
                  {/* Преобразование даты создания в читаемый формат */}
                  {new Date(imageData.created_at).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <button onClick={() => onDeleteImage(index)}></button>
            </div>
            {imageData.photoUrl ? (
              <img src={imageData.photoUrl} alt={imageData.photoName} />
            ) : (
              <img
                src={imageData.urls.regular}
                alt={imageData.alt_description}
              />
            )}
          </div>
        </li>
      ))}
    </ImageListWrapper>
  );
};
