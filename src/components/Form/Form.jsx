import React from 'react';
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
} from './styles';

export const Form = ({ addImageToList }) => {
  const {
    handleSubmit, // Функция для обработки отправки формы
    control, // Объект управления для регистрации полей формы
    reset, // Функция для сброса значений полей формы
    formState: { errors }, // Ошибки формы
  } = useForm({
    defaultValues: {
      photoName: '',
      photoUrl: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    addImageToList(data);
    reset();
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

      <SubmitButtonContainer>
        <SubmitButton type="submit">Добавить фото</SubmitButton>
      </SubmitButtonContainer>
    </FormWrapper>
  );
};
