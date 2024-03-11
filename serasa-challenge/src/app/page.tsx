import { EvaluationForm, Typography } from "@/components";
import {
  TypographyAlignment,
  TypographyColor,
  TypographyVariant,
} from "@/enums";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainTitle}>
        <Typography
          variant={TypographyVariant.Display}
          align={TypographyAlignment.Center}
          color={TypographyColor.Magenta}
        >
          Sua opinião é valiosa e faz a diferença!
        </Typography>
      </div>
      <EvaluationForm />
    </main>
  );
}
