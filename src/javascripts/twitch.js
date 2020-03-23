const TwitchApi = {
    id: clientId,
    

    //get first 20 streams
    //needs dynamic search
    getStreams: async function(){
        const url = "https://api.twitch.tv/helix/streams?first=20";
        
        
        
        const header = new Headers({
            'Client-ID':this.id
        });
        
        return await fetch(url, {
            headers:header
        }).then((response)=>{return response.json()});
        
    }
}