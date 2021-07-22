CREATE TABLE users(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
first_name VARCHAR(200),
last_name VARCHAR(200),
email VARCHAR(200),
password VARCHAR(200),
avatar VARCHAR(300),
user_type TINYINT UNSIGNED DEFAULT 0 
);

CREATE TABLE orders(
id INT NOT NULL AUTO_INCREMENT,
user_id INT,
total DECIMAL,
date DATETIME,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE colors(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
color VARCHAR(200)
);

CREATE TABLE sizes(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
size VARCHAR(200)
);

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(200),
description TEXT,
price DECIMAL,
color_id INT,
size_id INT,
image VARCHAR(200),
PRIMARY KEY (id),
FOREIGN KEY (color_id) REFERENCES colors(id),
FOREIGN KEY (size_id) REFERENCES sizes(id)
);

CREATE TABLE orders_products(
id INT NOT NULL AUTO_INCREMENT,
product_id INT,
order_id INT,
PRIMARY KEY (id),
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE categories(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(200)
);

CREATE TABLE categories_products(
id INT NOT NULL AUTO_INCREMENT,
product_id INT,
category_id INT,
PRIMARY KEY (id),
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (category_id) REFERENCES categories(id)
);
