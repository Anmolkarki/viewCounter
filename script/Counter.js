// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCV6sqakCQV8eRX3YkU6NJsiMcgvXIx1CY",
    authDomain: "viewcounter-a3b13.firebaseapp.com",
    databaseURL: "https://viewcounter-a3b13-default-rtdb.firebaseio.com",
    projectId: "viewcounter-a3b13",
    storageBucket: "viewcounter-a3b13.appspot.com",
    messagingSenderId: "243699920223",
    appId: "1:243699920223:web:1374398dae384282d99aea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Referencing to Firebase database
const referenceFirebase = firebase.database().ref();
//it is to track hits
const ViewCounter = referenceFirebase.child("pageCounts");
//gets key and value of previous database
let getData = new Promise(function(resolve, reject) {
    //creating an storeData to store previously saved data in databse
    let storeData = {};
    ViewCounter.orderByChild("location").equalTo(location.pathname).once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            storeData = {
                key: child.key,
                noOfViews: child.val().count
            }
        });
        if (storeData) {
            resolve(storeData);
        } else {
            reject(error);
        }
    });
});

//if promise resoves then identifies the page in the database
getData.then(function(fromResolve) {
    var key = fromResolve.key;
    var previousCount = fromResolve.noOfViews;

    if (key == undefined) {
        key = ViewCounter.push().key;
        previousCount = 0;
    }

    counts = previousCount + 1;
    //gathering info and updating new
    var updateData = {
        location: location.pathname,
        count: counts,

    }
    var newValues = {}
    newValues["/pageCounts/" + key] = updateData;
    referenceFirebase.update(newValues);
    document.querySelector("h1.counter").innerText = counts;
}).catch(function(fromReject) {
    console.log(error);
})