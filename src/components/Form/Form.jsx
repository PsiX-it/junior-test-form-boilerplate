import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
  ErrorText,
  Field,
  FieldsContainer,
  FormWrapper,
  Input,
  Label,
  SubmitButton,
  SubmitButtonContainer,
  TextArea,
} from './styles';

export const Form = ({ addImageToList }) => {
  const [hasDescription, setHasDescription] = useState(false);

  const {
    handleSubmit, // Функция для обработки отправки формы
    control, // Объект управления для регистрации полей формы
    reset, // Функция для сброса значений полей формы
    formState: { errors }, // Ошибки формы
    getValues, // Получение значений формы
  } = useForm({
    defaultValues: {
      photoName: '',
      photoUrl: '',
      photoDescription: '',
      addedFromForm: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    const imageData = {
      ...data,
      description: getValues('photoDescription'),
      addedFromForm: true,
    };

    addImageToList(imageData);
    reset();
    setHasDescription(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FieldsContainer>
        <Field>
          <Label>Название фото</Label>
          <Controller
            name="photoName"
            control={control}
            rules={{ required: 'Название фото обязательно' }}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  placeholder="Yosemite National Park"
                  id="photoName"
                  className={errors.photoName ? 'hasError' : ''}
                />
                {errors.photoName && (
                  <ErrorText>{errors.photoName.message}</ErrorText>
                )}
              </div>
            )}
          />
        </Field>
        <Field>
          <Label>Ссылка на фото</Label>
          <Controller
            name="photoUrl"
            control={control}
            rules={{
              required: 'Ссылка на фото обязательна',
              pattern: {
                value: /^https?:\/\/\S+/i,
                message: 'Введите правильный URL',
              },
            }}
            render={({ field }) => (
              <div>
                <Input
                  {...field}
                  placeholder="https://unsplash.com/photos/green-trees-vXQCvT6evmE"
                  id="photoUrl"
                  className={errors.photoUrl ? 'hasError' : ''}
                />
                {errors.photoUrl && (
                  <ErrorText>{errors.photoUrl.message}</ErrorText>
                )}
              </div>
            )}
          />
        </Field>
      </FieldsContainer>

      <div>
        <Label>
          <input
            type="checkbox"
            checked={hasDescription}
            onChange={() => setHasDescription(!hasDescription)}
          />
          {' Есть описание'}
        </Label>
        {hasDescription && (
          <div>
            <Label>Описание</Label>
            <Controller
              name="photoDescription"
              control={control}
              rules={{ required: 'Описание фото обязательно' }}
              render={({ field }) => (
                <div>
                  <TextArea
                    {...field}
                    placeholder="Описание фото"
                    id="photoDescription"
                    className={errors.photoDescription ? 'hasError' : ''}
                  />
                  {errors.photoDescription && (
                    <ErrorText>{errors.photoDescription.message}</ErrorText>
                  )}
                </div>
              )}
            />
          </div>
        )}
      </div>

      <SubmitButtonContainer>
        <SubmitButton type="submit">Добавить фото</SubmitButton>
      </SubmitButtonContainer>
    </FormWrapper>
  );
};
