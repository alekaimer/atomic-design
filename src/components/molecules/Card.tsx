import { Text } from "../atoms/Text";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  imageUrl: string;
  imgTitle: string;
}

export const Card = ({ title, imageUrl, imgTitle }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} alt={imgTitle} />

      <Text type="h2">{title}</Text>
    </div>
  );
};
