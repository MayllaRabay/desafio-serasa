import { TypographyColor, TypographyVariant, TypographyWeight } from "@/enums";
import React from "react";
import styles from "./typography-styles.module.scss";

interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  color,
  variant,
  weight,
}) => {
  const classNames = [
    styles[variant],
    color && styles[color],
    weight && styles[weight],
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
};

export default Typography;
