INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Axel', 'Hurtado', 'axelandre91@gmail.com', '$2a$10$9ur/K3iJE8nQR/yuPCU.euCR00Qm5IT1kAle6ZgQ4toM6HdCRen2S', '1627166511237_img.png', DEFAULT);

INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Horacio', 'Fischer', 'horacio_fischer@hotmail.com', '$2a$10$9ur/K3iJE8nQR/yuPCU.euCR00Qm5IT1kAle6ZgQ4toM6HdCRen2S', '1627166511237_img.png', DEFAULT);

INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Sebastián', 'Calvo', 'sebacalvo@hotmail.com', '$2a$10$9ur/K3iJE8nQR/yuPCU.euCR00Qm5IT1kAle6ZgQ4toM6HdCRen2S', '1627166511237_img.png', DEFAULT);

INSERT INTO users (id, first_name, last_name, email, password, avatar, user_type)
VALUES (DEFAULT, 'Soledad', 'Aldao', 'soledad_aldao@hotmail.com', '$2a$10$9ur/K3iJE8nQR/yuPCU.euCR00Qm5IT1kAle6ZgQ4toM6HdCRen2S', '1627166511237_img.png', DEFAULT);

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 1800, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 500, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 2600, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 2300, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 1000, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 1400, now());

INSERT INTO orders (id, user_id, total, date)
VALUES (DEFAULT, 1, 3700, now());

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

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Remera térmica', 'ad lorem ipsum', 750, 4, 3,20, '1627330632133_img.jpeg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Campera', 'ad lorem ipsum', 3550, 1, 2, 5,'1622826329595_img_.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Set cocina', 'ad lorem ipsum', 2500, 3, 1,5, '1622849053647_img_.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Caja de pesca', 'ad lorem ipsum', 3500, 3, 1,20, '1622845646182_img_.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Pantalón trekking', 'ad lorem ipsum', 4500, 3, 1,10, '1627333796125_img.jpeg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Pasamontañas', 'ad lorem ipsum', 10500, 3, 1,30, '1622846164000_img_.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Bolsa de dormir', 'ad lorem ipsum', 17500, 1, 1,35, '1622846125469_img_.jpg');

INSERT INTO products (id, name, description, price, color_id, size_id, discount, image)
VALUES (DEFAULT, 'Carpa', 'ad lorem ipsum', 40500, 1, 1,40, '1622777186491_img_.jpeg');


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
VALUES (DEFAULT, 4,2);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 5,3);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 6,3);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 7,4);

INSERT INTO categories_products (id, product_id, category_id)
VALUES (DEFAULT, 8,4);
