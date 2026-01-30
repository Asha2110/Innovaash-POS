import { activateLicense } from "./license.js";

window.activate = async function() {

 const key = document
   .getElementById("licenseInput")
   .value;

 await activateLicense(key);
};