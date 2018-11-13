-- Exercise A

CREATE TABLE stock (
    id SERIAL primary key,
    quantity integer,
    price decimal,
    citrus_id integer
    );

INSERT into stock (QUANTITY,PRICE,CITRUS_ID) VALUES (33,25,1);
INSERT into stock (QUANTITY,PRICE,CITRUS_ID) VALUES (50,15,2);
INSERT into stock (QUANTITY,PRICE,CITRUS_ID) VALUES (10,35,3);
INSERT into stock (QUANTITY,PRICE,CITRUS_ID) VALUES (0,20,4);

-- figure out how many fruits with orange color are on stock.
SELECT citrus.name AS citrus_name, citrus.color AS citrus_color,stock.quantity AS quantity
FROM citrus 
JOIN stock 
ON citrus.id=stock.citrus_id
WHERE citrus.color='orange' AND stock.quantity>0;


-- Exercise B
SELECT * FROM citrus
FULL OUTER JOIN stock
ON citrus.id=stock.citrus_id;