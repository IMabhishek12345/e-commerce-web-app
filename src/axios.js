import axios from "axios";

const instance=axios.create({
    baseURL: "https://us-central1-e-commerce-clone-2.cloudfunctions.net/api"   //Deployed the backend at this cloud function url
                 // "http://127.0.0.1:5001/e-commerce-clone-2/us-central1/api"  //api cloud function url
    
})

export default instance