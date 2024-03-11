import { Typography } from "@/components";
import {
  TypographyAlignment,
  TypographyVariant,
  TypographyWeight,
} from "@/enums";
import React from "react";
import styles from "./toast-styles.module.scss";

interface ToastProps {
  isToastVisible: boolean;
  toastMessage: string;
}

const Toast: React.FC<ToastProps> = ({ isToastVisible, toastMessage }) => {
  return (
    <div
      className={styles.toast}
      data-status={isToastVisible && "isToastVisible"}
    >
      <div className={styles.toastContent}>
        <Typography
          variant={TypographyVariant.Subheading}
          align={TypographyAlignment.Center}
          weight={TypographyWeight.Regular}
        >
          {toastMessage}
        </Typography>
      </div>
    </div>
  );
};

export default Toast;
