import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [comments, setComments] = useState<any[]>([]);
  const commentsURL = "https://dev-55-13.pantheonsite.io/wp-json/wp/v2/comments/";

  useEffect(() => {
    fetch(commentsURL)
      .then(response => response.json())
      .then(data => setComments(data))
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Comments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList id="comment-list">
          {comments.map((comment, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{comment.author_name}</h4>
                <p dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></p>
                <p>Date: {comment.date}</p>
                <a href={comment.link}>View Comment</a>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

