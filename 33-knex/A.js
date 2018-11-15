var pg = require('pg');
var fs = require('fs');
var Promise = require('bluebird');
var CsvReadableStream = require('csv-reader');

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "fruits",
        user: "postgres",
        password: "password"
    }
});


function createArray(){
    return new Promise((resolve,reject)=>{
        var arr=[];
        var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');
        inputStream
            .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
            .on('data', function (row) {
                arr.push(row);
            })
            .on('end', function (data) {
                resolve(arr);;
            });
    })
    
};

function updateData(result,i){

    knex.transaction(async function(trx) {

        let quantity=await trx.select('quantity').from('fruit_and_stock').where('citrus_name',(result[i])[1])
        
        if((result[i])[0]==="BUY"){
            console.log('add')
            let newQuantity=quantity[0].quantity+(result[i])[2];
          
            return trx.update('quantity',newQuantity).from('fruit_and_stock').where('citrus_name',(result[i])[1]);

        }else{
            if(quantity[0].quantity-(result[i])[2]>0){
                //update minus
                console.log('reduce')
                let newQuantity=quantity[0].quantity-(result[i])[2];
          
                return trx.update('quantity',newQuantity).from('fruit_and_stock').where('citrus_name',(result[i])[1]);

            }else{
                //print error
                console.log('not enough stock')
            }
    
        }
        
})
}


async function async(){
    var result=await createArray();
 
    for(var i=0;i<result.length;i++){

        updateData(result,i);
    }

}

async();