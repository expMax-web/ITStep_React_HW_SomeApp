import React from "react";
import { useForm } from "react-hook-form";

import { ERROR_MESSAGES } from "./Constants";
import {
  validateDescription,
  validateEmail,
  validateNick,
  validatePassword,
  validateTags,
} from "./Validation";

import styles from "./Form.module.scss";

export type Form = {
  nickname: string;
  password: string;
  email: string;
  description: string;
  tags: string;
  file: any;
};

export const Form: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Form>({
    defaultValues: {
      nickname: "",
      password: "",
      email: "",
      description: "",
      tags: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Добавить фото</h1>
      <div className={styles.InputItem}>
        <label className={styles.LabelInput}>Введите nickname:</label>
        <input
          className={styles.Input}
          type="text"
          {...register("nickname", {
            validate: validateNick,
          })}
        />
        {errors?.nickname?.message && (
          <span className={styles.Error}>{errors?.nickname?.message}</span>
        )}
      </div>
      <div className={styles.InputItem}>
        <label className={styles.LabelInput}>Введите пароль:</label>
        <input
          className={styles.Input}
          type="password"
          {...register("password", {
            validate: validatePassword,
          })}
        />
        {errors?.password?.message && (
          <span className={styles.Error}>{errors?.password?.message}</span>
        )}
      </div>
      <div className={styles.InputItem}>
        <label className={styles.LabelInput}>Введите email:</label>
        <input
          className={styles.Input}
          type="text"
          {...register("email", {
            validate: validateEmail,
          })}
        />
        {errors?.email?.message && (
          <span className={styles.Error}>{errors?.email?.message}</span>
        )}
      </div>
      <input type="file" {...(register("file"), { required: true })} />
      <div className={styles.TextAreaContainer}>
        <label className={styles.TextAreaLabel}>Введите описание</label>
        <input
          className={styles.TextArea}
          type="textarea"
          {...register("description", {
            validate: validateDescription,
          })}
        />
        {errors?.description?.message && (
          <span className={styles.Error}>{errors?.description?.message}</span>
        )}
      </div>
      <div className={styles.InputItem}>
        <label className={styles.LabelInput}>Добавьте теги для фото:</label>
        <input
          className={styles.Input}
          type="text"
          {...register("tags", {
            validate: validateTags,
          })}
        />
        {errors?.tags?.message && (
          <span className={styles.Error}>{errors?.tags?.message}</span>
        )}
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};
