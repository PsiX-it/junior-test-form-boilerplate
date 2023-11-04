import { useEffect, useState } from 'react';
import axios from 'axios';

import { ImageList } from './components';
import { Form } from './components';
import { AppContainer } from './styles';
import { Header } from './styles';

function App() {
  // Состояние для списка изображений
  const [imageList, setImageList] = useState(() => {
    const savedImageList = localStorage.getItem('imageList');

    return savedImageList ? JSON.parse(savedImageList) : [];
  });

  // Функция для добавления изображения в список
  const addImageToList = (imageData) => {
    const currentDate = new Date();

    imageData.created_at = currentDate;

    const updatedImageList = [...imageList, imageData];

    setImageList(updatedImageList);
    // Сохраняем обновленный список в локальном хранилище
    localStorage.setItem('imageList', JSON.stringify(updatedImageList));
  };

  useEffect(() => {
    if (imageList.length === 0) {
      axios
        .get('https://api.unsplash.com/photos', {
          params: {
            client_id: '7qnzebaKrDSaXNTJiynk6fpqfSOmlSmYokqKhYwG3M8',
            per_page: 5,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const unsplashImages = response.data;
            // Модифицируем данные из Unsplash API и добавляем их к списку
            const updatedImageList = unsplashImages.map((image) => {
              const imageData = { ...image };

              // Придаём изображению имя, используя alt_description или location, иначе 'Name'
              imageData.photoName =
                image.alt_description || image.location || 'Name';

              return imageData;
            });

            const combinedImageList = [...imageList, ...updatedImageList];

            setImageList(combinedImageList);
            // Сохраняем обновленный список в локальном хранилище

            localStorage.setItem(
              'imageList',
              JSON.stringify(combinedImageList),
            );
          } else {
            console.error(
              'Ошибка при загрузке изображений. Статус:',
              response.status,
            );
          }
        })
        .catch((error) => {
          console.error('Ошибка при загрузке изображений:', error);
        });
    }

    console.log(imageList);
  }, [imageList]);

  // Функция для удаления изображения из списка
  const handleDeleteImage = (index) => {
    const updatedImageList = [...imageList];

    updatedImageList.splice(index, 1);
    setImageList(updatedImageList);
    localStorage.setItem('imageList', JSON.stringify(updatedImageList));
  };

  return (
    <AppContainer>
      <Header>
        <h1>Тестовое задание junior with form</h1>
      </Header>
      <main>
        <Form addImageToList={addImageToList} />
        <ImageList imageList={imageList} onDeleteImage={handleDeleteImage} />
      </main>
    </AppContainer>
  );
}

export default App;
