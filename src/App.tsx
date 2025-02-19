import { Button, Card, Facts } from "./components";
import styles from "./App.module.scss";

const App = () => {
  type DataDummyProps = {
    card?: "default" | "border";
    button?: "default" | "icon";
    textButton: string;
  };
  const dataDummy: DataDummyProps[] = [
    {
      button: "icon",
      textButton: "This is a two line button that terminates with",
    },
    {
      textButton: "This is a two line button that terminates with",
    },
    {
      button: "icon",
      textButton: "This is a two line button that terminates with",
    },
    {
      button: "icon",
      textButton: "This is a two line button that terminates with",
    },
    {
      card: "border",
      button: "icon",
      textButton: "This is a two line button that terminates with",
    },
    {
      card: "border",
      button: "icon",
      textButton: "This is a two line button that terminates with",
    },
    {
      card: "border",
      button: "icon",
      textButton: "This is a two line button that terminates with",
    },
  ];
  return (
    <section className={styles.mainTemplate}>
      <div className={styles.mainTemplate_container}>
        <Facts>
          {dataDummy.map(({ card, button, textButton }) => (
            <Card variant={card}>
              <Button variant={button} label={textButton} />
            </Card>
          ))}
        </Facts>
      </div>
    </section>
  );
};

export default App;
