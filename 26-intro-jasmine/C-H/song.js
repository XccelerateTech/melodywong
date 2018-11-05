//Add the property name , album and author for the class song. They should be initialized in the constructor. And add a method getDescription which should return the The name of this song is ${name} and it is from the album ${album}. It is written by ${author} on called.

class Song{
    constructor(name,album,author){
        this.name=name;
        this.album=album;
        this.author=author;
    }

    getDescription(){
        return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author} on called.`
    }

    isInSameAlbum(otherSong){
        if(this.album===otherSong.album){
            return true;
        }else{
            return false;
        }
    }
}

module.exports=Song;