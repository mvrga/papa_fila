# 🥡 Papa Filas - Solução Inteligente para Filas em Eventos

O **Papa Filas** é um sistema completo de cardápio digital com fila inteligente e FastPass, voltado para **eventos de médio e grande porte**. Ele conecta visitantes a restaurantes de forma eficiente, transparente e lucrativa — reduzindo filas, aumentando a satisfação e otimizando a operação dos foodtrucks.

---

## 🚀 Problema

Filas longas e desorganizadas são comuns em eventos, gerando:

- **Experiência negativa para o visitante**
- **Perda de vendas** para os restaurantes
- **Falta de controle e previsibilidade** na cozinha

---

## ✅ Nossa Solução

> Um sistema que une **cardápio digital**, **monitoramento de filas em tempo real** e um **sistema justo de FastPass**, com dashboard para gestão de preparo e performance dos restaurantes.

---

## 🧠 Principais Funcionalidades

### 👥 Para o Usuário Final
- Visualização de restaurantes e **tempo estimado de fila**
- Escolha e pagamento do pedido direto pelo celular
- Sistema de **FastPass pago**, que permite furar a fila de forma justa

### 🍳 Para Restaurantes
- Dashboard com:
  - Fila em tempo real
  - Tempo médio de preparo
  - Capacidade operacional adaptativa
  - Recomendação de liberação de FastPass baseada em dados
- Redução de gargalos e maior previsibilidade na operação

---

## 🛠️ Tecnologias Utilizadas

| Stack        | Tecnologias               |
|--------------|---------------------------|
| **Front-end** | Next.js, Tailwind CSS     |
| **Back-end**  | Supabase (API + Auth)     |
| **Banco**     | Supabase PostgreSQL       |
| **Hospedagem**| Vercel + Supabase Hosting |

---

## ⚙️ Lógica da Fila Inteligente

Utilizamos um algoritmo preditivo que calcula:

- Capacidade total da cozinha por hora
- Tempo médio adaptativo com base em pedidos reais
- Liberação segura e limitada de FastPass (pagos)

> Isso garante que os pedidos normais não sejam prejudicados e ainda abre margem para receita extra.

---

## 🧪 Executando o Projeto Localmente

```bash
git clone https://github.com/seu-usuario/papa-filas.git
cd papa-filas
npm install
npm run dev
