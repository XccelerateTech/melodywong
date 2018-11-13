var pg = require('pg');
var fs = require('fs');
var CsvReadableStream = require('csv-reader');

var config = {
    user: 'postgres',
    database: 'fruits',
    password: 'password',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

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
    
}

function begin(done){
    client.query('BEGIN',function(err){
        if(err){
            // Handle error here
        }
        done();
    });
}

function commit(done){
    client.query('COMMIT',function(err){
        if(err){
            //Handle error here
        }
        done();
    });
}

function rollback(done){
    client.query('ROLLBACK',function(err){
        if(err){
            //Handle error here
        }
        done();
    });
}

function updateData(result,i){
    begin(function(){
        var check="SELECT quantity FROM fruit_and_stock WHERE citrus_name = '"+(result[i])[1]+"';";
        client.query(check,function(err,results){
            if(results.rows[0].quantity<1){
                rollback(function(){
                    console.log("Transaction is rolled back!");
                });
            }else{
                if((result[i])[0]=='BUY'){
                    var sign='+'
                }else{
                    sign='-'
                }
        
                var query="UPDATE fruit_and_stock SET quantity=quantity"+sign+(result[i])[2]+ " WHERE citrus_name='"+(result[i])[1]+"';";
                client.query(query,function(err,results){
                    if(err){
                        rollback(function(){
                            console.log("Transaction is rolled back!");
                        });
                    }else{
                        commit(function(){
                            console.log("Transaction is committed!");
                        });
                    }
                });
            }
            });


        

        });
}

async function async(){
    var result=await createArray();
 
    for(var i=0;i<result.length;i++){
        updateData(result,i);
    }

}


  

client.connect();

async();

setTimeout((function() {  
    return process.exit();
}), 1000);


