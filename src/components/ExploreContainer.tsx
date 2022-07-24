import { useState } from "react";
import "./ExploreContainer.css";
import {
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

const ExploreContainer: React.FC = () => {
  const [text, setText] = useState<any>(() => {
    return ""; // return default value
  });

  return (
    <div className="container text-center text-align: center">
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Ionic React useState Hook Example</IonCardSubtitle>
          <IonCardTitle>
            <strong>Hello There, {text}!</strong>
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonInput
            value={text}
            placeholder="Please enter your name"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
          The purpose of this very simple app is to show a very simple way to
          implement useState in your project by sending date from a child
          component to the parent component.
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
