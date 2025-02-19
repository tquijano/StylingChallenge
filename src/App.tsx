import { Button, Card, Facts } from "./components";
import { dataDummy } from "./utils";
import styles from "./App.module.scss";

const App = () => {
  return (
    <section className={styles.mainTemplate}>
      <div className={styles.mainTemplate_container}>
        <Facts>
          {dataDummy.map(({ card, button, textButton }, index) => (
            <Card variant={card} key={crypto.randomUUID()}>
              <Button
                variant={button}
                label={textButton}
                disabled={index === 5}
              />
            </Card>
          ))}
        </Facts>
      </div>
    </section>
  );
};

export default App;
