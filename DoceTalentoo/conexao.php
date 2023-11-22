<?php
    $host = 'localhost';
    $usuario= 'root';
    $senha = '123';
    $banco = 'doce_talento';

    try {
        // Conexão com o banco de dados utilizando PDO
        $conexao = new PDO("mysql:host=$host;dbname=$banco;charset=utf8", $usuario, $senha);
        // Habilitar exceções para erros de PDO
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        // Tratar erros de conexão
        die('Não foi possível conectar ao banco de dados. Erro detectado: ' . $e->getMessage());
    }

?>