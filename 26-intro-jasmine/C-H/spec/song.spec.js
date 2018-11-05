let Song=require('../song');
let helper=require('../spec/helpers/SpecHelper.js')

describe("Song test", function() {

    beforeEach(function() {
    song=new Song('Problem','My Everything','Ariana Grande');
    song1=new Song('Adrenalina','Raggaeton','Jennifer Lopez');
    song2=new Song('All I Want For Chtistmas Is You','Christmas Album','Mariah Carrey');
    song3=new Song('One Last Time','My Everything','Ariana Grande');
    song4=new Song('Problem','My Everything','Ariana Grande');
    });

    //name
    it("Name should match", function() {
        expect(song.name).toEqual('Problem');
        expect(song1.name).toEqual('Adrenalina');
        expect(song2.name).toEqual('All I Want For Chtistmas Is You');
    });
    //album
    it("Album should match", function() {
        expect(song.album).toEqual('My Everything');
        expect(song1.album).toEqual('Raggaeton');
        expect(song2.album).toEqual('Christmas Album');
    });

    //author
    it("Author should match", function() {
        expect(song.author).toEqual('Ariana Grande');
        expect(song1.author).toEqual('Jennifer Lopez');
        expect(song2.author).toEqual('Mariah Carrey');
    });

    //getDescription
    it("Description should match", function() {
        expect(song.getDescription()).toEqual('The name of this song is Problem and it is from the album My Everything. It is written by Ariana Grande on called.');
    });

     //isInSameAlbum(otherSong)
     it("Same album should match", function() {
        //C
        expect(song1.isInSameAlbum(song2)).toEqual(false);
        //D - custom matcher
        expect(song).toBeInTheSameAlbumAs(song3);
    });

    //two different song objects - toBe
    it("toBe", function() {
        expect(song).toBe(song4);
    });
    //two different song objects - toEqual
    it("toEqual", function() {
        expect(song).toEqual(song4);
    });


})


/*
expect().toBe - meaning the type and the value should match, same as ===
expect().toEqual - meaning the value should match, same as ==
*/