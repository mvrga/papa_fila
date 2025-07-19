import { createClient } from '@supabase/supabase-js'

// 1. Variáveis de ambiente (NEXT_PUBLIC_* para acesso no frontend)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 2. Cria e exporta o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)

// 3. Tipos opcionais (para TypeScript)
export type Restaurante = {
  id: string
  nome: string
  tempo_espera: number
}