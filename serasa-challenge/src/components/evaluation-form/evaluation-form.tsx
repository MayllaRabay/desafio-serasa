"use client";

import { IconStar, LoadingBlur, Toast, Typography } from "@/components";
import {
  TypographyAlignment,
  TypographyColor,
  TypographyVariant,
  TypographyWeight,
} from "@/enums";
import React, { useState } from "react";
import styles from "./evaluation-form-styles.module.scss";

const EvaluationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    rating: 1,
    name: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const ratingValues = [1, 2, 3, 4, 5];

  const validateFormData = (data: any) => {
    const errors: { [key: string]: string } = {};
    if (!data.name.trim()) {
      errors.name = "Campo obrigatório";
    }
    return errors;
  };

  const handleOnRatingChange = (rating: number) => {
    setFormData({ ...formData, rating: rating });
  };

  const handleStarKeyDown = (e: any, rating: number) => {
    if (e.key === "Enter" || e.key === " ") {
      setFormData({ ...formData, rating: rating });
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormErrors((old) => ({ ...old, [name]: "" }));
    setFormData((old) => ({ ...old, [name]: value }));
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const errors = validateFormData(formData);

    if (Object.keys(errors).length !== 0) {
      setFormErrors((old) => ({ ...old, name: errors.name }));
      setIsLoading(false);
      return;
    }

    //Timeout para testes de carregando e sucesso
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsLoading(false);
      setIsToastVisible(true);
    }, 2000);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 6000);
  };

  return (
    <LoadingBlur isLoading={isLoading} loadingText="Enviando sua avaliação">
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <Toast
          isToastVisible={isToastVisible}
          toastMessage="Avaliação enviada com sucesso! Obrigado por avaliar nossos serviços."
        />
        <div className={styles.formHeader}>
          <img
            src="/serasa-logo-full.svg"
            alt="Logo da Serasa - escrito por extenso na cor magenta com pequenos quadrados coloridos a esquerda"
            className={styles.formHeaderLogo}
          />
          <Typography
            variant={TypographyVariant.HeadingS}
            align={TypographyAlignment.Center}
            weight={TypographyWeight.Regular}
          >
            Por favor, tire um momento para avaliar nossos serviços.
          </Typography>
        </div>

        <div className={styles.formFields}>
          <label htmlFor="rating">
            <Typography variant={TypographyVariant.BodyM}>
              Marque de 1 a 5 estrelas
            </Typography>
          </label>
          <div className={styles.starRating}>
            {ratingValues.map((value) => (
              <IconStar
                key={value}
                tabIndex={0}
                size={38}
                backgroundColor={
                  formData.rating && value <= formData.rating
                    ? "var(--yellow)"
                    : "none"
                }
                onClick={() => handleOnRatingChange(value)}
                onKeyDown={(e) => handleStarKeyDown(e, value)}
              />
            ))}
          </div>
        </div>

        <div className={styles.formFields}>
          <label htmlFor="name">
            <Typography variant={TypographyVariant.BodyM}>Seu nome</Typography>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleOnChange}
            data-style={formErrors.name && "error"}
            aria-label="Seu nome"
            aria-required="true"
          />
          {formErrors.name && (
            <div className={styles.formErrors}>
              <Typography
                variant={TypographyVariant.BodyS}
                color={TypographyColor.Error}
              >
                {formErrors.name}
              </Typography>
            </div>
          )}
        </div>

        <div className={styles.formFields}>
          <label htmlFor="message">
            <Typography variant={TypographyVariant.BodyM}>
              Deixe seu comentário (opcional)
            </Typography>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Deixe seu comentário (opcional)"
            value={formData.message}
            onChange={handleOnChange}
            maxLength={300}
            aria-label="Deixe seu comentário (opcional)"
          />
        </div>

        <button type="submit">
          <Typography
            variant={TypographyVariant.BodyM}
            color={TypographyColor.LightSolid}
            weight={TypographyWeight.Bold}
          >
            Enviar avaliação
          </Typography>
        </button>
      </form>
    </LoadingBlur>
  );
};

export default EvaluationForm;
