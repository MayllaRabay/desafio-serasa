"use client";

import { Typography } from "@/components";
import {
  TypographyAlignment,
  TypographyColor,
  TypographyVariant,
  TypographyWeight,
} from "@/enums";
import React, { useState } from "react";
import styles from "./styles/home.module.scss";

export default function Home() {
  const [formData, setFormData] = useState({
    rating: 0,
    name: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
  });

  const validateFormData = (data: any) => {
    const errors: { [key: string]: string } = {};
    if (!data.name.trim()) {
      errors.name = "Campo obrigatório";
    }
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateFormData(formData);

    if (Object.keys(errors).length !== 0) {
      console.log(errors);
      setFormErrors((old) => ({ ...old, name: errors.name }));
      console.log(formErrors);
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <main className={styles.main}>
      <Typography
        variant={TypographyVariant.Display}
        align={TypographyAlignment.Center}
        color={TypographyColor.Magenta}
      >
        Sua opinião é valiosa e faz a diferença!
      </Typography>

      <form onSubmit={handleSubmit}>
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
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value={1}>1 estrela</option>
            <option value={2}>2 estrelas</option>
            <option value={3}>3 estrelas</option>
            <option value={4}>4 estrelas</option>
            <option value={5}>5 estrelas</option>
          </select>
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
            onChange={handleChange}
            data-style={formErrors.name && "error"}
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
            onChange={handleChange}
            maxLength={250}
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
    </main>
  );
}
