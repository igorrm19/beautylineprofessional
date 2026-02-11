# Documentação do Banco de Dados (MongoDB) - Beauty Line Professional

Este arquivo descreve as coleções e os esquemas utilizados no banco de dados da aplicação.

## Coleções (Collections)

### 1. Usuários (`User`)
Armazena as informações de conta e perfil dos usuários.
- **Arquivo de Modelo:** `backEnd/models/User.js`
- **Campos:**
    - `nome` (String): Obrigatório.
    - `email` (String): Obrigatório, único, convertido para minúsculas.
    - `senha` (String): Obrigatória (oculta por padrão nas consultas).
    - `role` (String): Enumeração ['admin', 'client'], padrão 'client'.
    - `telefone` (String): Opcional.
    - `inscricoes` (Array de ObjectIds): Referência à coleção `Course`.
    - `createdAt` (Date): Data de criação, padrão `Date.now`.

### 2. Cursos (`Course`)
Armazena os detalhes dos cursos oferecidos pela Beauty Line.
- **Arquivo de Modelo:** `backEnd/models/Course.js`
- **Campos:**
    - `titulo` (String): Obrigatório.
    - `descricao` (String): Detalhes do curso.
    - `categoria` (String): Enumeração ['Unhas', 'Cílios', 'Sobrancelhas', 'Facial', 'Depilação'], obrigatório.
    - `nivel` (String): Enumeração ['Básico', 'Intermediário', 'Avançado'], padrão 'Básico'.
    - `preco` (Number): Obrigatório.
    - `data` (Date): Data de realização do curso, obrigatório.
    - `vagas` (Number): Quantidade de vagas, padrão 0.
    - `trilhaId` (ObjectId): Referência a trilhas de conhecimento (Pathway).
    - `imagem` (String): URL da imagem de capa.
    - `createdAt` (Date): Data de criação, padrão `Date.now`.

### 3. Produtos (`Product`)
Armazena o catálogo de produtos disponíveis para venda.
- **Arquivo de Modelo:** `backEnd/models/Product.js`
- **Campos:**
    - `nome` (String): Obrigatório.
    - `descricao` (String): Descrição técnica do produto.
    - `preco` (Number): Obrigatório.
    - `categoria` (String): Categoria principal (ex: Skin Renew), obrigatório.
    - `subcategoria` (String): Opcional.
    - `tags` (Array de Strings): Tags para busca e filtragem.
    - `marca` (String): Padrão 'Beauty Line'.
    - `estoque` (Number): Quantidade disponível, padrão 0.
    - `imagem` (String): URL da imagem do produto.
    - `createdAt` (Date): Data de criação, padrão `Date.now`.

### 4. Equipamentos (`Equipment`)
Armazena equipamentos para venda ou locação.
- **Arquivo de Modelo:** `backEnd/models/Equipment.js`
- **Campos:**
    - `nome` (String): Obrigatório.
    - `descricao` (String): Detalhes sobre o equipamento.
    - `imagem` (String): URL da foto do equipamento.
    - `opcoes`: Objeto contendo valores de `venda` e `aluguel` (Number).
    - `especificacoes` (Array de Strings): Lista de especificações técnicas.
    - `tag` (String): Rótulo especial (ex: 'Novidade').
    - `createdAt` (Date): Data de criação, padrão `Date.now`.
