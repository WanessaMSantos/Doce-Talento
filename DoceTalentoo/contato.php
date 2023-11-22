<!DOCTYPE html>
<HTML lang="pt-br">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">   
        <meta charset="UTF-8">
	    	<title>Faça seu Orçamento</title>
		<link rel="stylesheet" type="text/css" href="css/estilo.css" />     
		<SCRIPT type="text/javascript" src="js/codigo.js"></SCRIPT>
		<link rel="shortcut icon" type="image/x-icon" href="imagens/icone.ico">
 
	</head>
	<body>
	<br><br>
			<?php
				require_once 'conexao.php';

				if ($_SERVER["REQUEST_METHOD"] === "POST") {
					$nome = $_POST['nome'];
					$email = $_POST['email'];
					$telefone = $_POST['telefone'];
					$assunto = $_POST['assunto'];
					$mensagem = $_POST['mensagem'];
					

				   
					try {
						// Preparar a consulta usando instrução preparada
						$inserir = $conexao->prepare("INSERT INTO contato(nome, email,  telefone, assunto, mensagem) 
												 VALUES (:nome, :email, :telefone, :assunto, :mensagem)");
				
						// Vincular parâmetros à instrução preparada
						$inserir->bindValue(':nome', $nome);
						$inserir->bindValue(':email', $email);
						$inserir->bindValue(':telefone', $telefone);
						$inserir->bindValue(':assunto', $assunto);
						$inserir->bindValue(':mensagem', $mensagem);
					   
				
						// Executar a consulta
						if ($inserir->execute()) {
							echo "Dados inseridos no Banco de Dados com sucesso!<br />";
						} else {
							echo "Erro ao inserir os dados: " . $inserir->errorInfo()[2];
						}
				
						// Fechar a instrução preparada
						$inserir = null;
					} catch(PDOException $e) {
						echo "Erro ao inserir os dados: " . $e->getMessage();
					}
				}
				$conexao = null;
			?>

	</body>


</html>
