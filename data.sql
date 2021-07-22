INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Axel', 'Hurtado', 'axi_hurtado@gmail.com', 'fsakfhskjhgsag', 'avatar.jpg', DEFAULT);

INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Horacio', 'Fischer', 'horacio_fischer@hotmail.com', 'fsakfhskjhgsag', 'avatar1.jpg', DEFAULT);

INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Sebastián', 'Calvo', 'sebacalvo@hotmail.com', 'fsakfhskjhgsag', 'avatar2.jpg', DEFAULT);

INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Soledad', 'Aldao', 'solealdao@hotmail.com', 'fsakfhskjhgsag', 'avatar3.jpg', DEFAULT);

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 1800, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 500, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 2600, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 1000, now());

INSERT INTO colors (id, color)
VALUES (DEFAULT, 'Azul');

INSERT INTO colors (id, color)
VALUES (DEFAULT, 'Verde');

INSERT INTO colors (id, color)
VALUES (DEFAULT, 'Rojo');

INSERT INTO colors (id, color)
VALUES (DEFAULT, 'Negro');

INSERT INTO sizes (id, size)
VALUES (DEFAULT, 'XS');

INSERT INTO sizes (id, size)
VALUES (DEFAULT, 'S');

INSERT INTO sizes (id, size)
VALUES (DEFAULT, 'M');

INSERT INTO sizes (id, size)
VALUES (DEFAULT, 'L');

INSERT INTO sizes (id, size)
VALUES (DEFAULT, 'XL');

INSERT INTO products (id, name, description, price, color_id, size_id, image)
VALUES (DEFAULT, 'Remera', 'ad lorem ipsum', 750, 4, 3, 'image.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, image)
VALUES (DEFAULT, 'Buzo', 'ad lorem ipsum', 2550, 1, 2, 'image1.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, image)
VALUES (DEFAULT, 'Pantalón', 'ad lorem ipsum', 3500, 3, 1, 'image2.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, image)
VALUES (DEFAULT, 'Carpa', 'ad lorem ipsum', 17500, 1, 1, 'image3.jpg');

INSERT INTO orders_products (id, product_id, order_id)
VALUES (DEFAULT, 1,4);

INSERT INTO orders_products (id, product_id, order_id)
VALUES (DEFAULT, 3,2);

INSERT INTO orders_products (id, product_id, order_id)
VALUES (DEFAULT, 2,1);

INSERT INTO orders_products (id, product_id, order_id)
VALUES (DEFAULT, 4,3);



INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Indumentaria');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Pesca');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Trekking');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Camping');


INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 1,1);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 2,1);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 3,2);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 4,4);
