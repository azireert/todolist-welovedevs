import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8UIgiE8cQBWsQTKzekMJKJ4zSdAtpqlk",
    authDomain: "todolist-welovedevs.firebaseapp.com",
    databaseURL: "https://todolist-welovedevs.firebaseio.com",
    projectId: "todolist-welovedevs",
    storageBucket: "",
    messagingSenderId: "72454212450",
    appId: "1:72454212450:web:0ec2d12c980d1efa"
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("workers")

export default firebase;
