import { Typography } from "@/components";
import { TypographyColor, TypographyVariant, TypographyWeight } from "@/enums";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography
        variant={TypographyVariant.Display}
        color={TypographyColor.Magenta}
        weight={TypographyWeight.Regular}
      >
        The form will be here soon ;)
      </Typography>
    </main>
  );
}
