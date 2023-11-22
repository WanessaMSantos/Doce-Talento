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
		<fieldset>	
			<?php
				require_once 'conexao.php';
				if ($_SERVER["REQUEST_METHOD"] === "POST") {
					$nome = $_POST['nome'];
					$telefone = $_POST['telefone'];
					$email = $_POST['email'];
					$endereco = $_POST['endereco'];
					$complemento = $_POST['complemento'];
					$cep = $_POST['cep'];
					$bairro = $_POST['bairro'];
					$cidade= $_POST['cidade'];
					$estado = $_POST['estado'];
					$produto = $_POST['produto'];
					$tamanho = $_POST['tamanho'];

				   
					try {
						// Preparar a consulta usando instrução preparada
						$inserir = $conexao->prepare("INSERT INTO orcamento(nome, telefone, email, endereco, complemento, cep, bairro, cidade, estado, produto, tamanho) 
												 VALUES (:nome, :telefone, :email, :endereco, :complemento, :cep, :bairro, :cidade, :estado, :produto, :tamanho)");
				
						// Vincular parâmetros à instrução preparada
						$inserir->bindValue(':nome', $nome);
						$inserir->bindValue(':telefone', $telefone);
						$inserir->bindValue(':email', $email);
						$inserir->bindValue(':endereco', $endereco);
						$inserir->bindValue(':complemento', $complemento);
						$inserir->bindValue(':cep', $cep);
						$inserir->bindValue(':bairro', $bairro);
						$inserir->bindValue(':cidade', $cidade);
						$inserir->bindValue(':estado', $estado);
						$inserir->bindValue(':produto', $produto);
						$inserir->bindValue(':tamanho', $tamanho);

					   
				
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

		</fieldset>

	</body>


</html>
