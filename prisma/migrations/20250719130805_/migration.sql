-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurantes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "capacidade" INTEGER NOT NULL DEFAULT 50,
    "estacoes_preparo" INTEGER NOT NULL DEFAULT 2,
    "tempo_medio_preparo" INTEGER NOT NULL DEFAULT 15,
    "categorias" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filas" (
    "id" TEXT NOT NULL,
    "restauranteId" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL DEFAULT 0,
    "tempo_estimado" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "filas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "restauranteId" TEXT NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pendente',
    "is_priority" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historico_usuarios" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "restauranteId" TEXT NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 1,
    "avaliacao_media" DOUBLE PRECISION DEFAULT 0.0,
    "ultima_visita" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "restauranteId" TEXT NOT NULL,
    "itens" JSONB NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pendente',
    "is_priority" BOOLEAN NOT NULL DEFAULT false,
    "prioridade" INTEGER,
    "tempo_preparo" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "usuarios_email_idx" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "restaurantes_nome_idx" ON "restaurantes"("nome");

-- CreateIndex
CREATE INDEX "restaurantes_categorias_idx" ON "restaurantes"("categorias");

-- CreateIndex
CREATE UNIQUE INDEX "filas_restauranteId_key" ON "filas"("restauranteId");

-- CreateIndex
CREATE INDEX "filas_restauranteId_updated_at_idx" ON "filas"("restauranteId", "updated_at");

-- CreateIndex
CREATE INDEX "reservas_restauranteId_status_horario_idx" ON "reservas"("restauranteId", "status", "horario");

-- CreateIndex
CREATE INDEX "reservas_usuarioId_horario_idx" ON "reservas"("usuarioId", "horario");

-- CreateIndex
CREATE UNIQUE INDEX "reservas_usuarioId_restauranteId_horario_key" ON "reservas"("usuarioId", "restauranteId", "horario");

-- CreateIndex
CREATE INDEX "historico_usuarios_restauranteId_avaliacao_media_idx" ON "historico_usuarios"("restauranteId", "avaliacao_media");

-- CreateIndex
CREATE UNIQUE INDEX "historico_usuarios_usuarioId_restauranteId_key" ON "historico_usuarios"("usuarioId", "restauranteId");

-- CreateIndex
CREATE INDEX "pedidos_restauranteId_status_prioridade_idx" ON "pedidos"("restauranteId", "status", "prioridade");

-- CreateIndex
CREATE INDEX "pedidos_is_priority_prioridade_idx" ON "pedidos"("is_priority", "prioridade");

-- CreateIndex
CREATE INDEX "pedidos_clienteId_created_at_idx" ON "pedidos"("clienteId", "created_at");

-- AddForeignKey
ALTER TABLE "filas" ADD CONSTRAINT "filas_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_usuarios" ADD CONSTRAINT "historico_usuarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_usuarios" ADD CONSTRAINT "historico_usuarios_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
