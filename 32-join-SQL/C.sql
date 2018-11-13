-- Create new table
CREATE TABLE fruit_and_stock
    AS( SELECT citrus.name AS citrus_name, stock.quantity AS quantity
    FROM citrus
    JOIN stock
    ON citrus.id=stock.citrus_id);


-- BUY, lemon,20
BEGIN;
UPDATE fruit_and_stock SET quantity=quantity+20 WHERE citrus_name='lemon';
COMMIT;

-- BUY, orange,40
BEGIN;
UPDATE fruit_and_stock SET quantity=quantity+40 WHERE citrus_name='orange';
COMMIT;

-- SELL, orange,20
BEGIN;
SELECT quantity FROM fruit_and_stock WHERE citrus_name = 'orange';
UPDATE fruit_and_stock SET quantity=quantity-20 WHERE citrus_name='orange';
COMMIT;

-- BUY, lime,40
BEGIN;
UPDATE fruit_and_stock SET quantity=quantity+40 WHERE citrus_name='lime';
COMMIT;

-- SELL, lemon,30
BEGIN;
SELECT quantity FROM fruit_and_stock WHERE citrus_name = 'lemon';
UPDATE fruit_and_stock SET quantity=quantity-30 WHERE citrus_name='lemon';
COMMIT;

-- SELL,lime,20
BEGIN;
SELECT quantity FROM fruit_and_stock WHERE citrus_name = 'lime';
UPDATE fruit_and_stock SET quantity=quantity-20 WHERE citrus_name='lime';
COMMIT;

-- BUY,grapefruit,40
BEGIN;
UPDATE fruit_and_stock SET quantity=quantity+40 WHERE citrus_name='grapefruit';
COMMIT;

-- SELL,grapefruit,20
BEGIN;
SELECT quantity FROM fruit_and_stock WHERE citrus_name = 'grapefruit';
UPDATE fruit_and_stock SET quantity=quantity-20 WHERE citrus_name='grapefruit';
COMMIT;






