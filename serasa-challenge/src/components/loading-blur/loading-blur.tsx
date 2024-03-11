import { Typography } from "@/components";
import { TypographyAlignment, TypographyVariant } from "@/enums";
import React from "react";
import styles from "./loading-blur-styles.module.scss";

interface LoadingBlurProps {
  children: React.ReactNode;
  isLoading: boolean;
  loadingText?: string;
}

const LoadingBlur: React.FC<LoadingBlurProps> = ({
  children,
  isLoading,
  loadingText = "Carregando...",
}) => {
  return (
    <div className={styles.container} data-status={isLoading && "isLoading"}>
      <div className={styles.children}>{children}</div>
      <div className={styles.loadingText}>
        <Typography
          variant={TypographyVariant.HeadingL}
          align={TypographyAlignment.Center}
        >
          {loadingText}
        </Typography>
      </div>
    </div>
  );
};

export default LoadingBlur;
