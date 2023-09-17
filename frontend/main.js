window.addEventListener('DOMContentLoaded', (event) =>{
    getVistCount();
})

const functionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVistCount = () => {
    let count = 0;
    fetch(functionAPI).then(response => {
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
