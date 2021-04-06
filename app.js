// console.log("Any string")

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let mainDomain = [ '.com', '.net', '.us', '.io'];
let direccion = '';

for(let i=0; i<pronoun.length; i++){
    for (let a=0; a<adj.length; a++){
        for(let b=0; b<noun.length; b++){
            for( let c=0; c<mainDomain.length; c++){
                direccion=pronoun[i]+adj[a]+noun[b]+mainDomain[c];
                console.log(direccion);
            }
        }
    }
}

