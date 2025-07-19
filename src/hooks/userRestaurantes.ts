// hooks/useRestaurantes.ts
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Restaurante, RestaurantePriorizado } from '@/types/restaurante';

export const useRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantePriorizado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const calcularPrioridade = (r: Restaurante): number => {
    const PESO_TEMPO = 0.6;
    const PESO_LOTACAO = 0.4;
    return (r.tempo_espera * PESO_TEMPO) + (r.taxa_ocupacao * 100 * PESO_LOTACAO);
  };

  const carregarRestaurantes = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('restaurantes')
        .select('*')
        .returns<Restaurante[]>();

      if (supabaseError) throw new Error(supabaseError.message);

      if (data) {
        const priorizados: RestaurantePriorizado[] = data
          .map(r => ({ 
            ...r, 
            prioridade: calcularPrioridade(r) 
          }))
          .sort((menorFila, maiorFila) => menorFila.prioridade - maiorFila.prioridade);
        
        setRestaurantes(priorizados);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro desconhecido'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarRestaurantes();
  }, []);

  return { 
    restaurantes, 
    loading, 
    error,
    refetch: carregarRestaurantes 
  };
};