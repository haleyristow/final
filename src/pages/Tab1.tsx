import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [dataset, setDataset] = useState<any[]>([]);
  const dataURL = "https://dev-55-13.pantheonsite.io/wp-json/wp/v2/posts/";

  useEffect(() => {
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setDataset(data))
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id="post-list">
          <IonListHeader>WordPress Posts</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.title.rendered}</h4>
                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                <p>Date: {item.date}</p> {/* Displaying the date */}
                <a href={item.link}>Read More</a>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
