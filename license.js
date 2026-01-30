import { db } from "./firebase-config.js";

import {
 doc,
 getDoc,
 updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


function getDeviceId() {

 let id = localStorage.getItem("device_id");

 if (!id) {
   id = crypto.randomUUID();
   localStorage.setItem("device_id", id);
 }

 return id;
}


export async function activateLicense(key) {

 const deviceId = getDeviceId();

 const ref = doc(db, "licenses", key);
 const snap = await getDoc(ref);

 if (!snap.exists()) {
   alert("Invalid License Key");
   return false;
 }

 const data = snap.data();

 if (data.device && data.device !== deviceId) {
   alert("License already used on another device");
   return false;
 }

 await updateDoc(ref, {
   device: deviceId
 });

 localStorage.setItem("licenseKey", key);

 alert("Activated Successfully!");
 return true;
}