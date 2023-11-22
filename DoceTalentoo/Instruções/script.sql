CREATE DATABASE IF NOT EXISTS doce_talento
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

USE doce_talento;

CREATE TABLE orcamento(
nome VARCHAR(100) NOT NULL,
telefone CHAR(14),
email VARCHAR(25) PRIMARY KEY NOT NULL,
endereco VARCHAR(100)  NOT NULL,
complemento VARCHAR(100) NOT NULL,
cep CHAR(9) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cidade VARCHAR(50) NOT NULL,
estado CHAR(2) NOT NULL,
produto VARCHAR(25) NOT NULL,
tamanho VARCHAR(25) NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE contato(
nome VARCHAR(100) NOT NULL,
telefone VARCHAR(14) PRIMARY KEY NOT NULL,
email VARCHAR(25) NOT NULL,
assunto VARCHAR(50) NOT NULL,
mensagem VARCHAR(500)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE trabalheconosco(
nome VARCHAR(100) NOT NULL,
telefone VARCHAR(14) NOT NULL,
genero VARCHAR(25) NOT NULL,
cpf CHAR(14) NOT NULL PRIMARY KEY,
email VARCHAR(25) NOT NULL,
endereco VARCHAR(100) NOT NULL,
complemento VARCHAR(100)  NOT NULL,
cep CHAR(9) NOT NULL,
bairro VARCHAR(50) NOT NULL,
cidade VARCHAR(50) NOT NULL,
estado CHAR(2) NOT NULL,
area VARCHAR(50) NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

ALTER USER 'root'@'localhost' IDENTIFIED BY '123';

SELECT * FROM contato;

SHOW tables;

