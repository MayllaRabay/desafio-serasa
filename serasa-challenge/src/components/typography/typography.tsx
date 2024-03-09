import {
  TypographyAlignment,
  TypographyColor,
  TypographyVariant,
  TypographyWeight,
} from "@/enums";
import React from "react";
import styles from "./typography-styles.module.scss";

interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  align?: TypographyAlignment;
  color?: TypographyColor;
  weight?: TypographyWeight;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  align,
  color,
  weight,
}) => {
  const classNames = [
    styles[variant],
    align && styles[align],
    color && styles[color],
    weight && styles[weight],
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
};

export default Typography;
