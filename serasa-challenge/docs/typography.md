# Documentação do Componente Typography

## 💻 Sobre

O componente Typography fornece estilos de tipografia consistentes para utilização em toda a aplicação. Garante uma identidade visual unificada e melhora a legibilidade em diferentes tamanhos de telas e dispositivos. Inclui estilos predefinidos para cabeçalhos que variam de _h1_ a _h6_, e corpo de texto _médio_ e _pequeno_. As pré-definições incluem: **font-size**, **letter-spacing** e **line-height**.

- **Font Family**: default "Roboto".

- **Importar Componente**: import { Typography } from "@/components";
- **Importar Enums**:
  import {
  TypographyAlignment,
  TypographyColor,
  TypographyVariant,
  TypographyWeight,
  } from "@/enums";

## 🎨 Layout e Propriedades

- **TypographyVariant**: define o tamanho da fonte (obrigatório).

  - **Display**
  - **HeadingL**
  - **HeadingM**
  - **HeadingS**
  - **HeadingXS**
  - **Subheading**
  - **BodyM**
  - **BodyS**

- **TypographyAlignment**: define o alinhamento do texto (opcional).

  - **Start**: alinha à esquerda. **(default)**
  - **Center**: alinha ao centro.
  - **End**: alinha à direita.

- **TypographyColor**: define a cor do texto (opcional).

  - **LightSolid**: #FFFFFF **(default para tema escuro)**
  - **LightHigh**: rgba(255, 255, 255, 0.80)
  - **DarkLow**: rgba(0, 0, 0, 0.44)
  - **DarkMedium**: rgba(0, 0, 0, 0.60)
  - **DarkHigh**: rgba(0, 0, 0, 0.80) **(default para tema claro)**
  - **Magenta**: #E63888
  - **Error**: #EF5350

- **TypographyWeight**: define o estilo do texto (opcional).

  - **Regular**: fonte regular (400). **(default para BodyM e BodyS)**
  - **Bold**: fonte negrito (700). **(default para display, headers e subheader)**

## 💡 Exemplos de uso:

```javascript
<div>
  <Typography
    variant={TypographyVariant.Display}
    align={TypographyAlignment.Center}
    color={TypographyColor.Magenta}
  >
    Um título grande, centralizado e colorido!
  </Typography>

  <Typography
    variant={TypographyVariant.HeadingS}
    align={TypographyAlignment.Center}
    weight={TypographyWeight.Regular}
  >
    Um título menor, centralizado e regular.
  </Typography>

  <Typography variant={TypographyVariant.BodyM}>Um parágrafo.</Typography>

  <Typography variant={TypographyVariant.BodyM} weight={TypographyWeight.Bold}>
    Um parágrafo em negrito.
  </Typography>
</div>
```
