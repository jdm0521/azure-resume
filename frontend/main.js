window.addEventListener('DOMContentLoaded', (event) =>{
    getVistCount();
})

const localfunctionAPI = 'http://localhost:7071/api/GetResumeCounter';
const functionApiURL =  'https://getreumecounter.azurewebsites.net/api/GetResumeCounter?code=iHiPbIWmO8G4BNtApY900-hnDIfUC6n3Bh3uaBfsE_KhAzFuA1EAFA==';

const getVistCount = () => {
    let count = 0;
    fetch(functionApiURL).then(response => {
        return response.json()

    }).then(response =>{
        console.log("Website called function API.")
        console.log(response);
        count = response;
        document.getElementById("counter").innerText = count; 
    }).catch(function(error){
        console.log(error);
    });
    return count; 
}
