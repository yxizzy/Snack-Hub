import React from 'react';
import { IonButton, IonCard, IonThumbnail, IonImg, IonCardTitle, IonContent, IonIcon, 
    IonItem, IonLabel, IonTab, IonHeader, IonToolbar,IonTabBar, IonTitle, IonTabs, IonTabButton, IonBadge } from '@ionic/react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            toggle: false
        }
    }

    setToggle = () => {
        this.setState({ toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <IonContent>
                <IonCard>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src='http://placekitten.com/g/200/300' />
                        </IonThumbnail>
                        <IonLabel>Chicken Shawama
                            {toggle === false ? null : 
                            <IonLabel>
                                <p><strong>Size: </strong>Large</p>
                                <p><strong>Quantity: </strong>2</p>
                                <p><strong>Comment: </strong>Less Spicy</p>
                            </IonLabel>
    }
                        </IonLabel>
                        <IonButton fill="outline" slot="end" onClick={this.setToggle}>{toggle === true ? "Close" : "View"}</IonButton>
                        
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src='http://placekitten.com/g/200/300' />
                        </IonThumbnail>
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src='http://placekitten.com/g/200/300' />
                        </IonThumbnail>
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src='http://placekitten.com/g/200/300' />
                        </IonThumbnail>
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src='http://placekitten.com/g/200/300' />
                        </IonThumbnail>
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>

                </IonCard>
                {/* <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule">
        <IonIcon name="calendar" />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon name="contacts" />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon name="map" />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon name="information-circle" />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs> */}
            </IonContent>
        )
    }
}

export default Home;