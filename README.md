## 🚀 Fluxo do Papa fila

### 1️⃣ Home - Seleção das Barracas

- Exibe uma **lista de barracas ou estabelecimentos** participantes.
- Cada barraca possui:
  - Nome
  - Descrição ou categoria (opcional)
  - Ícone ou imagem

➡️ **Ao selecionar uma barraca, o usuário é redirecionado para a tela de produtos.**

---

### 2️⃣ Produtos da Barraca

- Lista os produtos disponíveis na barraca selecionada.
- Cada produto possui:
  - Nome
  - Preço
  - Descrição
  - Foto ou ícone
- Opção de **adicionar produtos ao carrinho**.
- Controle de quantidade.

---

### 3️⃣ Carrinho e Finalização

- Visualização do carrinho com os produtos selecionados.
- Opção de remover ou alterar quantidades.
- **Ao finalizar o pedido, é gerado um QR Code de pagamento.**
  - Pode ser Pix ou integração com outro meio de pagamento.

---

### 4️⃣ Dashboard (Admin)

Rota: `/dashboard`

#### Funcionalidades:

##### 📝 Listagem de Pedidos

- Visualização de todos os pedidos recebidos.
- Mudança de status do pedido:
  - **Pendente** ➡️ **Em preparo** ➡️ **Pronto** ➡️ **Entregue**
- Visualização detalhada do pedido:
  - Produtos
  - Quantidade
  - Valor total
  - Tempo desde o pedido

##### 📊 Visão Geral

- **Produtos Pendentes**: Produtos ainda não preparados.
- **Produtos Totais do Dia**: Quantidade vendida por produto no dia.
- **Produtos Prontos**: Produtos já finalizados e prontos para entrega.

