const YoutubeApi = {
    apiKey: apiKey,
    apiUrl: "https://www.googleapis.com/youtube/v3/search",
    youtubeOembed: "https://www.youtube.com/oembed?url=",
    


    //need apiKey
    //dont now how to hide the key whithout a backend;
    getApi:async function(){
        const myHeaders = new Headers();
        myHeaders.append('referer', 'https://explorer.apis.google.com');
        
        
        const query = "?part=id&key=" + this.apiKey
        return await fetch(this.apiUrl + query,{
            method: 'GET',
            headers:myHeaders,
            
        }).then( (response)=> {return response.json()} );
    },


    getVideoById: async function(id){
        const youtubeVideoUrl = "https%3A//www.youtube.com/watch%3Fv%3D"; // + id
        const url = this.youtubeOembed + youtubeVideoUrl + id;
        //console.log(url);
        

        return await fetch(url).then(
            (response)=>{return response.json()}
        );

    },


    //this return a limited amount of searchs
    videoSearch: async function(search){
        const url = `https://www.youtube.com/search_ajax?style=json&embeddable=1&search_query=${id}`;

        //console.log(url);

        return await fetch(url).then(
            (response)=>{return response.json()}
        )
    },


}