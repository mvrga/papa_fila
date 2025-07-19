export const calculatePriority = (params: {
  tempoEspera: number;
  taxaOcupacao: number;
  visitasUsuario?: number;
}): number => {
  return (
    params.tempoEspera * 0.6 +
    params.taxaOcupacao * 0.3 -
    (params.visitasUsuario || 0) * 0.1
  );
};