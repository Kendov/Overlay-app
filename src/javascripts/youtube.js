const YoutubeApi = {
    apiKey: "",
    apiUrl: "https://www.googleapis.com/youtube/v3/search",

    getApi:async function(){
        const myHeaders = new Headers();
        myHeaders.append('referer', 'https://explorer.apis.google.com');
        
        
        const query = "?part=id&key=" + this.apiKey
        await fetch(this.apiUrl + query,{
            method: 'GET',
            headers:myHeaders,
            
        }).then( (response)=> {return response.json()} );
    },


}