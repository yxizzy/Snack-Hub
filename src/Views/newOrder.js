import React from 'react';

class NewOrder extends React.Component{
    render(){
        return(
            <div>
                <ion-header translucent>
      <ion-toolbar>
        <ion-title>Create Order</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <form onsubmit="processForm(event)">
        <ion-list lines="full" class="ion-no-margin ion-no-padding">
          <ion-item>
            <ion-label position="stacked">First Name <ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="text" oninput="handleFirstNameValue(event)"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Last Name <ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="text" oninput="handleLastNameValue(event)"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Order<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="text" oninput="handleFirstNameValue(event)"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Quantity<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="text" oninput="handleLastNameValue(event)"></ion-input>
          </ion-item>
          
          <ion-item>
            <ion-label position="floating">Title</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Address</ion-label>
            <ion-input placeholder="Address Line 1"></ion-input>
            <ion-input placeholder="Address Line 2"></ion-input>
            <ion-input placeholder="City"></ion-input>
            <ion-input placeholder="State"></ion-input>
            <ion-input placeholder="Zip Code"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Notes</ion-label>
            <ion-textarea></ion-textarea>
          </ion-item>
        </ion-list>

        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-no-margin">Place Order</ion-button>
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
            </div>
        )
    }
}

export default NewOrder;