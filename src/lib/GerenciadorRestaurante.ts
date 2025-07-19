// src/lib/GerenciadorRestaurante.ts
type ConfigRestaurante = {
  id: string;
  tempoMedioPreparo: number;  // Em minutos
  estacoesPreparo: number;
  capacidade: number;         // Pedidos/hora
};

export class GerenciadorRestaurante {
  private filaAtual: number = 0;
  private temposPreparoReais: number[] = [];
  private tempoMedioAtual: number;

  constructor(private config: ConfigRestaurante) {
    this.tempoMedioAtual = config.tempoMedioPreparo;
  }

  // --- Controle Básico da Fila ---
  adicionarPedido() {
    this.filaAtual++;
  }

  finalizarPedido(tempoRealPreparo: number) {
    this.filaAtual = Math.max(0, this.filaAtual - 1);
    if (tempoRealPreparo > 0) {
      this.temposPreparoReais.push(tempoRealPreparo);
      this.atualizarTempoMedio();
    }
  }

  private atualizarTempoMedio() {
    const total = this.temposPreparoReais.reduce((sum, t) => sum + t, 0);
    this.tempoMedioAtual = Math.round(total / this.temposPreparoReais.length);
  }

  // --- Cálculo de FastPass ---
  calcularFastPassDisponiveis(isEvento: boolean = false): number {
    const { capacidade } = this.config;

    // Fórmula Base
    let disponiveis = capacidade * 0.15;  // 15% da capacidade

    // Penalidade por fila cheia
    const limiteFila = capacidade * 0.5;
    if (this.filaAtual > limiteFila) {
      disponiveis -= (this.filaAtual - limiteFila) * 0.1;
    }

    // Bônus em eventos
    if (isEvento) {
      disponiveis += 2;
    }

    // Redução se preparo estiver lento
    if (this.tempoMedioAtual > 20) {
      disponiveis *= 0.7;
    }

    return Math.max(0, Math.round(disponiveis));
  }

  // --- Métodos de Consulta ---
  get tempoMedio(): number {
    return this.tempoMedioAtual;
  }

  get fila(): number {
    return this.filaAtual;
  }

  get tempoEsperaEstimado(): number {
    return Math.round(
      (this.filaAtual * this.tempoMedioAtual) / this.config.estacoesPreparo
    );
  }
}