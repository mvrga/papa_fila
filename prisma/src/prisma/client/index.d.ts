
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Restaurante
 * 
 */
export type Restaurante = $Result.DefaultSelection<Prisma.$RestaurantePayload>
/**
 * Model Fila
 * 
 */
export type Fila = $Result.DefaultSelection<Prisma.$FilaPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model HistoricoUsuario
 * 
 */
export type HistoricoUsuario = $Result.DefaultSelection<Prisma.$HistoricoUsuarioPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurante`: Exposes CRUD operations for the **Restaurante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurantes
    * const restaurantes = await prisma.restaurante.findMany()
    * ```
    */
  get restaurante(): Prisma.RestauranteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fila`: Exposes CRUD operations for the **Fila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filas
    * const filas = await prisma.fila.findMany()
    * ```
    */
  get fila(): Prisma.FilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historicoUsuario`: Exposes CRUD operations for the **HistoricoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoricoUsuarios
    * const historicoUsuarios = await prisma.historicoUsuario.findMany()
    * ```
    */
  get historicoUsuario(): Prisma.HistoricoUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Restaurante: 'Restaurante',
    Fila: 'Fila',
    Reserva: 'Reserva',
    HistoricoUsuario: 'HistoricoUsuario',
    Pedido: 'Pedido'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "restaurante" | "fila" | "reserva" | "historicoUsuario" | "pedido"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Restaurante: {
        payload: Prisma.$RestaurantePayload<ExtArgs>
        fields: Prisma.RestauranteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestauranteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestauranteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          findFirst: {
            args: Prisma.RestauranteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestauranteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          findMany: {
            args: Prisma.RestauranteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          create: {
            args: Prisma.RestauranteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          createMany: {
            args: Prisma.RestauranteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestauranteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          delete: {
            args: Prisma.RestauranteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          update: {
            args: Prisma.RestauranteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          deleteMany: {
            args: Prisma.RestauranteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestauranteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestauranteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>[]
          }
          upsert: {
            args: Prisma.RestauranteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantePayload>
          }
          aggregate: {
            args: Prisma.RestauranteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurante>
          }
          groupBy: {
            args: Prisma.RestauranteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestauranteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestauranteCountArgs<ExtArgs>
            result: $Utils.Optional<RestauranteCountAggregateOutputType> | number
          }
        }
      }
      Fila: {
        payload: Prisma.$FilaPayload<ExtArgs>
        fields: Prisma.FilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          findFirst: {
            args: Prisma.FilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          findMany: {
            args: Prisma.FilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>[]
          }
          create: {
            args: Prisma.FilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          createMany: {
            args: Prisma.FilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>[]
          }
          delete: {
            args: Prisma.FilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          update: {
            args: Prisma.FilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          deleteMany: {
            args: Prisma.FilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>[]
          }
          upsert: {
            args: Prisma.FilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          aggregate: {
            args: Prisma.FilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFila>
          }
          groupBy: {
            args: Prisma.FilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilaCountArgs<ExtArgs>
            result: $Utils.Optional<FilaCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      HistoricoUsuario: {
        payload: Prisma.$HistoricoUsuarioPayload<ExtArgs>
        fields: Prisma.HistoricoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoricoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoricoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.HistoricoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoricoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>
          }
          findMany: {
            args: Prisma.HistoricoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>[]
          }
          create: {
            args: Prisma.HistoricoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>
          }
          createMany: {
            args: Prisma.HistoricoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoricoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.HistoricoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>
          }
          update: {
            args: Prisma.HistoricoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.HistoricoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoricoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoricoUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.HistoricoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoricoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.HistoricoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoUsuario>
          }
          groupBy: {
            args: Prisma.HistoricoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoricoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    restaurante?: RestauranteOmit
    fila?: FilaOmit
    reserva?: ReservaOmit
    historicoUsuario?: HistoricoUsuarioOmit
    pedido?: PedidoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservas: number
    historico: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | UsuarioCountOutputTypeCountReservasArgs
    historico?: boolean | UsuarioCountOutputTypeCountHistoricoArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type RestauranteCountOutputType
   */

  export type RestauranteCountOutputType = {
    reservas: number
    pedidos: number
    historicoUsuarios: number
  }

  export type RestauranteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | RestauranteCountOutputTypeCountReservasArgs
    pedidos?: boolean | RestauranteCountOutputTypeCountPedidosArgs
    historicoUsuarios?: boolean | RestauranteCountOutputTypeCountHistoricoUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCountOutputType
     */
    select?: RestauranteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * RestauranteCountOutputType without action
   */
  export type RestauranteCountOutputTypeCountHistoricoUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    historico?: boolean | Usuario$historicoArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    historico?: boolean | Usuario$historicoArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      historico: Prisma.$HistoricoUsuarioPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Usuario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historico<T extends Usuario$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.reservas
   */
  export type Usuario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Usuario.historico
   */
  export type Usuario$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    where?: HistoricoUsuarioWhereInput
    orderBy?: HistoricoUsuarioOrderByWithRelationInput | HistoricoUsuarioOrderByWithRelationInput[]
    cursor?: HistoricoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoUsuarioScalarFieldEnum | HistoricoUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Restaurante
   */

  export type AggregateRestaurante = {
    _count: RestauranteCountAggregateOutputType | null
    _avg: RestauranteAvgAggregateOutputType | null
    _sum: RestauranteSumAggregateOutputType | null
    _min: RestauranteMinAggregateOutputType | null
    _max: RestauranteMaxAggregateOutputType | null
  }

  export type RestauranteAvgAggregateOutputType = {
    capacidade: number | null
    estacoesPreparo: number | null
    tempoMedioPreparo: number | null
  }

  export type RestauranteSumAggregateOutputType = {
    capacidade: number | null
    estacoesPreparo: number | null
    tempoMedioPreparo: number | null
  }

  export type RestauranteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    capacidade: number | null
    estacoesPreparo: number | null
    tempoMedioPreparo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestauranteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    capacidade: number | null
    estacoesPreparo: number | null
    tempoMedioPreparo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestauranteCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    capacidade: number
    estacoesPreparo: number
    tempoMedioPreparo: number
    categorias: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestauranteAvgAggregateInputType = {
    capacidade?: true
    estacoesPreparo?: true
    tempoMedioPreparo?: true
  }

  export type RestauranteSumAggregateInputType = {
    capacidade?: true
    estacoesPreparo?: true
    tempoMedioPreparo?: true
  }

  export type RestauranteMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    capacidade?: true
    estacoesPreparo?: true
    tempoMedioPreparo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestauranteMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    capacidade?: true
    estacoesPreparo?: true
    tempoMedioPreparo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestauranteCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    capacidade?: true
    estacoesPreparo?: true
    tempoMedioPreparo?: true
    categorias?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestauranteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurante to aggregate.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurantes
    **/
    _count?: true | RestauranteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestauranteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestauranteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestauranteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestauranteMaxAggregateInputType
  }

  export type GetRestauranteAggregateType<T extends RestauranteAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurante[P]>
      : GetScalarType<T[P], AggregateRestaurante[P]>
  }




  export type RestauranteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestauranteWhereInput
    orderBy?: RestauranteOrderByWithAggregationInput | RestauranteOrderByWithAggregationInput[]
    by: RestauranteScalarFieldEnum[] | RestauranteScalarFieldEnum
    having?: RestauranteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestauranteCountAggregateInputType | true
    _avg?: RestauranteAvgAggregateInputType
    _sum?: RestauranteSumAggregateInputType
    _min?: RestauranteMinAggregateInputType
    _max?: RestauranteMaxAggregateInputType
  }

  export type RestauranteGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    capacidade: number
    estacoesPreparo: number
    tempoMedioPreparo: number
    categorias: string[]
    createdAt: Date
    updatedAt: Date
    _count: RestauranteCountAggregateOutputType | null
    _avg: RestauranteAvgAggregateOutputType | null
    _sum: RestauranteSumAggregateOutputType | null
    _min: RestauranteMinAggregateOutputType | null
    _max: RestauranteMaxAggregateOutputType | null
  }

  type GetRestauranteGroupByPayload<T extends RestauranteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestauranteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestauranteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestauranteGroupByOutputType[P]>
            : GetScalarType<T[P], RestauranteGroupByOutputType[P]>
        }
      >
    >


  export type RestauranteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    estacoesPreparo?: boolean
    tempoMedioPreparo?: boolean
    categorias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fila?: boolean | Restaurante$filaArgs<ExtArgs>
    reservas?: boolean | Restaurante$reservasArgs<ExtArgs>
    pedidos?: boolean | Restaurante$pedidosArgs<ExtArgs>
    historicoUsuarios?: boolean | Restaurante$historicoUsuariosArgs<ExtArgs>
    _count?: boolean | RestauranteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    estacoesPreparo?: boolean
    tempoMedioPreparo?: boolean
    categorias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    estacoesPreparo?: boolean
    tempoMedioPreparo?: boolean
    categorias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurante"]>

  export type RestauranteSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    estacoesPreparo?: boolean
    tempoMedioPreparo?: boolean
    categorias?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestauranteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "capacidade" | "estacoesPreparo" | "tempoMedioPreparo" | "categorias" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurante"]>
  export type RestauranteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fila?: boolean | Restaurante$filaArgs<ExtArgs>
    reservas?: boolean | Restaurante$reservasArgs<ExtArgs>
    pedidos?: boolean | Restaurante$pedidosArgs<ExtArgs>
    historicoUsuarios?: boolean | Restaurante$historicoUsuariosArgs<ExtArgs>
    _count?: boolean | RestauranteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestauranteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestauranteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestaurantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurante"
    objects: {
      fila: Prisma.$FilaPayload<ExtArgs> | null
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      historicoUsuarios: Prisma.$HistoricoUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      capacidade: number
      estacoesPreparo: number
      tempoMedioPreparo: number
      categorias: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurante"]>
    composites: {}
  }

  type RestauranteGetPayload<S extends boolean | null | undefined | RestauranteDefaultArgs> = $Result.GetResult<Prisma.$RestaurantePayload, S>

  type RestauranteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestauranteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestauranteCountAggregateInputType | true
    }

  export interface RestauranteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurante'], meta: { name: 'Restaurante' } }
    /**
     * Find zero or one Restaurante that matches the filter.
     * @param {RestauranteFindUniqueArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestauranteFindUniqueArgs>(args: SelectSubset<T, RestauranteFindUniqueArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestauranteFindUniqueOrThrowArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestauranteFindUniqueOrThrowArgs>(args: SelectSubset<T, RestauranteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindFirstArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestauranteFindFirstArgs>(args?: SelectSubset<T, RestauranteFindFirstArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindFirstOrThrowArgs} args - Arguments to find a Restaurante
     * @example
     * // Get one Restaurante
     * const restaurante = await prisma.restaurante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestauranteFindFirstOrThrowArgs>(args?: SelectSubset<T, RestauranteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurantes
     * const restaurantes = await prisma.restaurante.findMany()
     * 
     * // Get first 10 Restaurantes
     * const restaurantes = await prisma.restaurante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestauranteFindManyArgs>(args?: SelectSubset<T, RestauranteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurante.
     * @param {RestauranteCreateArgs} args - Arguments to create a Restaurante.
     * @example
     * // Create one Restaurante
     * const Restaurante = await prisma.restaurante.create({
     *   data: {
     *     // ... data to create a Restaurante
     *   }
     * })
     * 
     */
    create<T extends RestauranteCreateArgs>(args: SelectSubset<T, RestauranteCreateArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurantes.
     * @param {RestauranteCreateManyArgs} args - Arguments to create many Restaurantes.
     * @example
     * // Create many Restaurantes
     * const restaurante = await prisma.restaurante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestauranteCreateManyArgs>(args?: SelectSubset<T, RestauranteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurantes and returns the data saved in the database.
     * @param {RestauranteCreateManyAndReturnArgs} args - Arguments to create many Restaurantes.
     * @example
     * // Create many Restaurantes
     * const restaurante = await prisma.restaurante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurantes and only return the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestauranteCreateManyAndReturnArgs>(args?: SelectSubset<T, RestauranteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurante.
     * @param {RestauranteDeleteArgs} args - Arguments to delete one Restaurante.
     * @example
     * // Delete one Restaurante
     * const Restaurante = await prisma.restaurante.delete({
     *   where: {
     *     // ... filter to delete one Restaurante
     *   }
     * })
     * 
     */
    delete<T extends RestauranteDeleteArgs>(args: SelectSubset<T, RestauranteDeleteArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurante.
     * @param {RestauranteUpdateArgs} args - Arguments to update one Restaurante.
     * @example
     * // Update one Restaurante
     * const restaurante = await prisma.restaurante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestauranteUpdateArgs>(args: SelectSubset<T, RestauranteUpdateArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurantes.
     * @param {RestauranteDeleteManyArgs} args - Arguments to filter Restaurantes to delete.
     * @example
     * // Delete a few Restaurantes
     * const { count } = await prisma.restaurante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestauranteDeleteManyArgs>(args?: SelectSubset<T, RestauranteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurantes
     * const restaurante = await prisma.restaurante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestauranteUpdateManyArgs>(args: SelectSubset<T, RestauranteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurantes and returns the data updated in the database.
     * @param {RestauranteUpdateManyAndReturnArgs} args - Arguments to update many Restaurantes.
     * @example
     * // Update many Restaurantes
     * const restaurante = await prisma.restaurante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurantes and only return the `id`
     * const restauranteWithIdOnly = await prisma.restaurante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestauranteUpdateManyAndReturnArgs>(args: SelectSubset<T, RestauranteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurante.
     * @param {RestauranteUpsertArgs} args - Arguments to update or create a Restaurante.
     * @example
     * // Update or create a Restaurante
     * const restaurante = await prisma.restaurante.upsert({
     *   create: {
     *     // ... data to create a Restaurante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurante we want to update
     *   }
     * })
     */
    upsert<T extends RestauranteUpsertArgs>(args: SelectSubset<T, RestauranteUpsertArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCountArgs} args - Arguments to filter Restaurantes to count.
     * @example
     * // Count the number of Restaurantes
     * const count = await prisma.restaurante.count({
     *   where: {
     *     // ... the filter for the Restaurantes we want to count
     *   }
     * })
    **/
    count<T extends RestauranteCountArgs>(
      args?: Subset<T, RestauranteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestauranteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestauranteAggregateArgs>(args: Subset<T, RestauranteAggregateArgs>): Prisma.PrismaPromise<GetRestauranteAggregateType<T>>

    /**
     * Group by Restaurante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestauranteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestauranteGroupByArgs['orderBy'] }
        : { orderBy?: RestauranteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestauranteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestauranteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurante model
   */
  readonly fields: RestauranteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestauranteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fila<T extends Restaurante$filaArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$filaArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Restaurante$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Restaurante$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historicoUsuarios<T extends Restaurante$historicoUsuariosArgs<ExtArgs> = {}>(args?: Subset<T, Restaurante$historicoUsuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurante model
   */
  interface RestauranteFieldRefs {
    readonly id: FieldRef<"Restaurante", 'String'>
    readonly nome: FieldRef<"Restaurante", 'String'>
    readonly descricao: FieldRef<"Restaurante", 'String'>
    readonly capacidade: FieldRef<"Restaurante", 'Int'>
    readonly estacoesPreparo: FieldRef<"Restaurante", 'Int'>
    readonly tempoMedioPreparo: FieldRef<"Restaurante", 'Int'>
    readonly categorias: FieldRef<"Restaurante", 'String[]'>
    readonly createdAt: FieldRef<"Restaurante", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurante findUnique
   */
  export type RestauranteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante findUniqueOrThrow
   */
  export type RestauranteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante findFirst
   */
  export type RestauranteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante findFirstOrThrow
   */
  export type RestauranteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurante to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurantes.
     */
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante findMany
   */
  export type RestauranteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter, which Restaurantes to fetch.
     */
    where?: RestauranteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurantes to fetch.
     */
    orderBy?: RestauranteOrderByWithRelationInput | RestauranteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurantes.
     */
    cursor?: RestauranteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurantes.
     */
    skip?: number
    distinct?: RestauranteScalarFieldEnum | RestauranteScalarFieldEnum[]
  }

  /**
   * Restaurante create
   */
  export type RestauranteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurante.
     */
    data: XOR<RestauranteCreateInput, RestauranteUncheckedCreateInput>
  }

  /**
   * Restaurante createMany
   */
  export type RestauranteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurantes.
     */
    data: RestauranteCreateManyInput | RestauranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurante createManyAndReturn
   */
  export type RestauranteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurantes.
     */
    data: RestauranteCreateManyInput | RestauranteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurante update
   */
  export type RestauranteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurante.
     */
    data: XOR<RestauranteUpdateInput, RestauranteUncheckedUpdateInput>
    /**
     * Choose, which Restaurante to update.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante updateMany
   */
  export type RestauranteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurantes.
     */
    data: XOR<RestauranteUpdateManyMutationInput, RestauranteUncheckedUpdateManyInput>
    /**
     * Filter which Restaurantes to update
     */
    where?: RestauranteWhereInput
    /**
     * Limit how many Restaurantes to update.
     */
    limit?: number
  }

  /**
   * Restaurante updateManyAndReturn
   */
  export type RestauranteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * The data used to update Restaurantes.
     */
    data: XOR<RestauranteUpdateManyMutationInput, RestauranteUncheckedUpdateManyInput>
    /**
     * Filter which Restaurantes to update
     */
    where?: RestauranteWhereInput
    /**
     * Limit how many Restaurantes to update.
     */
    limit?: number
  }

  /**
   * Restaurante upsert
   */
  export type RestauranteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurante to update in case it exists.
     */
    where: RestauranteWhereUniqueInput
    /**
     * In case the Restaurante found by the `where` argument doesn't exist, create a new Restaurante with this data.
     */
    create: XOR<RestauranteCreateInput, RestauranteUncheckedCreateInput>
    /**
     * In case the Restaurante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestauranteUpdateInput, RestauranteUncheckedUpdateInput>
  }

  /**
   * Restaurante delete
   */
  export type RestauranteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
    /**
     * Filter which Restaurante to delete.
     */
    where: RestauranteWhereUniqueInput
  }

  /**
   * Restaurante deleteMany
   */
  export type RestauranteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurantes to delete
     */
    where?: RestauranteWhereInput
    /**
     * Limit how many Restaurantes to delete.
     */
    limit?: number
  }

  /**
   * Restaurante.fila
   */
  export type Restaurante$filaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    where?: FilaWhereInput
  }

  /**
   * Restaurante.reservas
   */
  export type Restaurante$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Restaurante.pedidos
   */
  export type Restaurante$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Restaurante.historicoUsuarios
   */
  export type Restaurante$historicoUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    where?: HistoricoUsuarioWhereInput
    orderBy?: HistoricoUsuarioOrderByWithRelationInput | HistoricoUsuarioOrderByWithRelationInput[]
    cursor?: HistoricoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoUsuarioScalarFieldEnum | HistoricoUsuarioScalarFieldEnum[]
  }

  /**
   * Restaurante without action
   */
  export type RestauranteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurante
     */
    select?: RestauranteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurante
     */
    omit?: RestauranteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteInclude<ExtArgs> | null
  }


  /**
   * Model Fila
   */

  export type AggregateFila = {
    _count: FilaCountAggregateOutputType | null
    _avg: FilaAvgAggregateOutputType | null
    _sum: FilaSumAggregateOutputType | null
    _min: FilaMinAggregateOutputType | null
    _max: FilaMaxAggregateOutputType | null
  }

  export type FilaAvgAggregateOutputType = {
    tamanho: number | null
    tempoEstimado: number | null
  }

  export type FilaSumAggregateOutputType = {
    tamanho: number | null
    tempoEstimado: number | null
  }

  export type FilaMinAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    tamanho: number | null
    tempoEstimado: number | null
    updatedAt: Date | null
  }

  export type FilaMaxAggregateOutputType = {
    id: string | null
    restauranteId: string | null
    tamanho: number | null
    tempoEstimado: number | null
    updatedAt: Date | null
  }

  export type FilaCountAggregateOutputType = {
    id: number
    restauranteId: number
    tamanho: number
    tempoEstimado: number
    updatedAt: number
    _all: number
  }


  export type FilaAvgAggregateInputType = {
    tamanho?: true
    tempoEstimado?: true
  }

  export type FilaSumAggregateInputType = {
    tamanho?: true
    tempoEstimado?: true
  }

  export type FilaMinAggregateInputType = {
    id?: true
    restauranteId?: true
    tamanho?: true
    tempoEstimado?: true
    updatedAt?: true
  }

  export type FilaMaxAggregateInputType = {
    id?: true
    restauranteId?: true
    tamanho?: true
    tempoEstimado?: true
    updatedAt?: true
  }

  export type FilaCountAggregateInputType = {
    id?: true
    restauranteId?: true
    tamanho?: true
    tempoEstimado?: true
    updatedAt?: true
    _all?: true
  }

  export type FilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fila to aggregate.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filas
    **/
    _count?: true | FilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilaMaxAggregateInputType
  }

  export type GetFilaAggregateType<T extends FilaAggregateArgs> = {
        [P in keyof T & keyof AggregateFila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFila[P]>
      : GetScalarType<T[P], AggregateFila[P]>
  }




  export type FilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaWhereInput
    orderBy?: FilaOrderByWithAggregationInput | FilaOrderByWithAggregationInput[]
    by: FilaScalarFieldEnum[] | FilaScalarFieldEnum
    having?: FilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilaCountAggregateInputType | true
    _avg?: FilaAvgAggregateInputType
    _sum?: FilaSumAggregateInputType
    _min?: FilaMinAggregateInputType
    _max?: FilaMaxAggregateInputType
  }

  export type FilaGroupByOutputType = {
    id: string
    restauranteId: string
    tamanho: number
    tempoEstimado: number
    updatedAt: Date
    _count: FilaCountAggregateOutputType | null
    _avg: FilaAvgAggregateOutputType | null
    _sum: FilaSumAggregateOutputType | null
    _min: FilaMinAggregateOutputType | null
    _max: FilaMaxAggregateOutputType | null
  }

  type GetFilaGroupByPayload<T extends FilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilaGroupByOutputType[P]>
            : GetScalarType<T[P], FilaGroupByOutputType[P]>
        }
      >
    >


  export type FilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    tamanho?: boolean
    tempoEstimado?: boolean
    updatedAt?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fila"]>

  export type FilaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    tamanho?: boolean
    tempoEstimado?: boolean
    updatedAt?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fila"]>

  export type FilaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restauranteId?: boolean
    tamanho?: boolean
    tempoEstimado?: boolean
    updatedAt?: boolean
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fila"]>

  export type FilaSelectScalar = {
    id?: boolean
    restauranteId?: boolean
    tamanho?: boolean
    tempoEstimado?: boolean
    updatedAt?: boolean
  }

  export type FilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "restauranteId" | "tamanho" | "tempoEstimado" | "updatedAt", ExtArgs["result"]["fila"]>
  export type FilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type FilaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type FilaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $FilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fila"
    objects: {
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      restauranteId: string
      tamanho: number
      tempoEstimado: number
      updatedAt: Date
    }, ExtArgs["result"]["fila"]>
    composites: {}
  }

  type FilaGetPayload<S extends boolean | null | undefined | FilaDefaultArgs> = $Result.GetResult<Prisma.$FilaPayload, S>

  type FilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilaCountAggregateInputType | true
    }

  export interface FilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fila'], meta: { name: 'Fila' } }
    /**
     * Find zero or one Fila that matches the filter.
     * @param {FilaFindUniqueArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilaFindUniqueArgs>(args: SelectSubset<T, FilaFindUniqueArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilaFindUniqueOrThrowArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilaFindUniqueOrThrowArgs>(args: SelectSubset<T, FilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaFindFirstArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilaFindFirstArgs>(args?: SelectSubset<T, FilaFindFirstArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaFindFirstOrThrowArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilaFindFirstOrThrowArgs>(args?: SelectSubset<T, FilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filas
     * const filas = await prisma.fila.findMany()
     * 
     * // Get first 10 Filas
     * const filas = await prisma.fila.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filaWithIdOnly = await prisma.fila.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilaFindManyArgs>(args?: SelectSubset<T, FilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fila.
     * @param {FilaCreateArgs} args - Arguments to create a Fila.
     * @example
     * // Create one Fila
     * const Fila = await prisma.fila.create({
     *   data: {
     *     // ... data to create a Fila
     *   }
     * })
     * 
     */
    create<T extends FilaCreateArgs>(args: SelectSubset<T, FilaCreateArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filas.
     * @param {FilaCreateManyArgs} args - Arguments to create many Filas.
     * @example
     * // Create many Filas
     * const fila = await prisma.fila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilaCreateManyArgs>(args?: SelectSubset<T, FilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filas and returns the data saved in the database.
     * @param {FilaCreateManyAndReturnArgs} args - Arguments to create many Filas.
     * @example
     * // Create many Filas
     * const fila = await prisma.fila.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filas and only return the `id`
     * const filaWithIdOnly = await prisma.fila.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilaCreateManyAndReturnArgs>(args?: SelectSubset<T, FilaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fila.
     * @param {FilaDeleteArgs} args - Arguments to delete one Fila.
     * @example
     * // Delete one Fila
     * const Fila = await prisma.fila.delete({
     *   where: {
     *     // ... filter to delete one Fila
     *   }
     * })
     * 
     */
    delete<T extends FilaDeleteArgs>(args: SelectSubset<T, FilaDeleteArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fila.
     * @param {FilaUpdateArgs} args - Arguments to update one Fila.
     * @example
     * // Update one Fila
     * const fila = await prisma.fila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilaUpdateArgs>(args: SelectSubset<T, FilaUpdateArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filas.
     * @param {FilaDeleteManyArgs} args - Arguments to filter Filas to delete.
     * @example
     * // Delete a few Filas
     * const { count } = await prisma.fila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilaDeleteManyArgs>(args?: SelectSubset<T, FilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filas
     * const fila = await prisma.fila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilaUpdateManyArgs>(args: SelectSubset<T, FilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filas and returns the data updated in the database.
     * @param {FilaUpdateManyAndReturnArgs} args - Arguments to update many Filas.
     * @example
     * // Update many Filas
     * const fila = await prisma.fila.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filas and only return the `id`
     * const filaWithIdOnly = await prisma.fila.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilaUpdateManyAndReturnArgs>(args: SelectSubset<T, FilaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fila.
     * @param {FilaUpsertArgs} args - Arguments to update or create a Fila.
     * @example
     * // Update or create a Fila
     * const fila = await prisma.fila.upsert({
     *   create: {
     *     // ... data to create a Fila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fila we want to update
     *   }
     * })
     */
    upsert<T extends FilaUpsertArgs>(args: SelectSubset<T, FilaUpsertArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaCountArgs} args - Arguments to filter Filas to count.
     * @example
     * // Count the number of Filas
     * const count = await prisma.fila.count({
     *   where: {
     *     // ... the filter for the Filas we want to count
     *   }
     * })
    **/
    count<T extends FilaCountArgs>(
      args?: Subset<T, FilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilaAggregateArgs>(args: Subset<T, FilaAggregateArgs>): Prisma.PrismaPromise<GetFilaAggregateType<T>>

    /**
     * Group by Fila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilaGroupByArgs['orderBy'] }
        : { orderBy?: FilaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fila model
   */
  readonly fields: FilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fila model
   */
  interface FilaFieldRefs {
    readonly id: FieldRef<"Fila", 'String'>
    readonly restauranteId: FieldRef<"Fila", 'String'>
    readonly tamanho: FieldRef<"Fila", 'Int'>
    readonly tempoEstimado: FieldRef<"Fila", 'Int'>
    readonly updatedAt: FieldRef<"Fila", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fila findUnique
   */
  export type FilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila findUniqueOrThrow
   */
  export type FilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila findFirst
   */
  export type FilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filas.
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filas.
     */
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Fila findFirstOrThrow
   */
  export type FilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filas.
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filas.
     */
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Fila findMany
   */
  export type FilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Filas to fetch.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filas.
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Fila create
   */
  export type FilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fila.
     */
    data: XOR<FilaCreateInput, FilaUncheckedCreateInput>
  }

  /**
   * Fila createMany
   */
  export type FilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filas.
     */
    data: FilaCreateManyInput | FilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fila createManyAndReturn
   */
  export type FilaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * The data used to create many Filas.
     */
    data: FilaCreateManyInput | FilaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fila update
   */
  export type FilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fila.
     */
    data: XOR<FilaUpdateInput, FilaUncheckedUpdateInput>
    /**
     * Choose, which Fila to update.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila updateMany
   */
  export type FilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filas.
     */
    data: XOR<FilaUpdateManyMutationInput, FilaUncheckedUpdateManyInput>
    /**
     * Filter which Filas to update
     */
    where?: FilaWhereInput
    /**
     * Limit how many Filas to update.
     */
    limit?: number
  }

  /**
   * Fila updateManyAndReturn
   */
  export type FilaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * The data used to update Filas.
     */
    data: XOR<FilaUpdateManyMutationInput, FilaUncheckedUpdateManyInput>
    /**
     * Filter which Filas to update
     */
    where?: FilaWhereInput
    /**
     * Limit how many Filas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fila upsert
   */
  export type FilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fila to update in case it exists.
     */
    where: FilaWhereUniqueInput
    /**
     * In case the Fila found by the `where` argument doesn't exist, create a new Fila with this data.
     */
    create: XOR<FilaCreateInput, FilaUncheckedCreateInput>
    /**
     * In case the Fila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilaUpdateInput, FilaUncheckedUpdateInput>
  }

  /**
   * Fila delete
   */
  export type FilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter which Fila to delete.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila deleteMany
   */
  export type FilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filas to delete
     */
    where?: FilaWhereInput
    /**
     * Limit how many Filas to delete.
     */
    limit?: number
  }

  /**
   * Fila without action
   */
  export type FilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    restauranteId: string | null
    horario: Date | null
    status: string | null
    isPriority: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    restauranteId: string | null
    horario: Date | null
    status: string | null
    isPriority: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    usuarioId: number
    restauranteId: number
    horario: number
    status: number
    isPriority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    restauranteId?: true
    horario?: true
    status?: true
    isPriority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    restauranteId?: true
    horario?: true
    status?: true
    isPriority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    restauranteId?: true
    horario?: true
    status?: true
    isPriority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: string
    usuarioId: string
    restauranteId: string
    horario: Date
    status: string
    isPriority: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReservaCountAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    horario?: boolean
    status?: boolean
    isPriority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    horario?: boolean
    status?: boolean
    isPriority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    horario?: boolean
    status?: boolean
    isPriority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    horario?: boolean
    status?: boolean
    isPriority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "restauranteId" | "horario" | "status" | "isPriority" | "createdAt" | "updatedAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      restauranteId: string
      horario: Date
      status: string
      isPriority: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'String'>
    readonly usuarioId: FieldRef<"Reserva", 'String'>
    readonly restauranteId: FieldRef<"Reserva", 'String'>
    readonly horario: FieldRef<"Reserva", 'DateTime'>
    readonly status: FieldRef<"Reserva", 'String'>
    readonly isPriority: FieldRef<"Reserva", 'Boolean'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
    readonly updatedAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model HistoricoUsuario
   */

  export type AggregateHistoricoUsuario = {
    _count: HistoricoUsuarioCountAggregateOutputType | null
    _avg: HistoricoUsuarioAvgAggregateOutputType | null
    _sum: HistoricoUsuarioSumAggregateOutputType | null
    _min: HistoricoUsuarioMinAggregateOutputType | null
    _max: HistoricoUsuarioMaxAggregateOutputType | null
  }

  export type HistoricoUsuarioAvgAggregateOutputType = {
    visitas: number | null
    avaliacaoMedia: number | null
  }

  export type HistoricoUsuarioSumAggregateOutputType = {
    visitas: number | null
    avaliacaoMedia: number | null
  }

  export type HistoricoUsuarioMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    restauranteId: string | null
    visitas: number | null
    avaliacaoMedia: number | null
    ultimaVisita: Date | null
  }

  export type HistoricoUsuarioMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    restauranteId: string | null
    visitas: number | null
    avaliacaoMedia: number | null
    ultimaVisita: Date | null
  }

  export type HistoricoUsuarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    restauranteId: number
    visitas: number
    avaliacaoMedia: number
    ultimaVisita: number
    _all: number
  }


  export type HistoricoUsuarioAvgAggregateInputType = {
    visitas?: true
    avaliacaoMedia?: true
  }

  export type HistoricoUsuarioSumAggregateInputType = {
    visitas?: true
    avaliacaoMedia?: true
  }

  export type HistoricoUsuarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    restauranteId?: true
    visitas?: true
    avaliacaoMedia?: true
    ultimaVisita?: true
  }

  export type HistoricoUsuarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    restauranteId?: true
    visitas?: true
    avaliacaoMedia?: true
    ultimaVisita?: true
  }

  export type HistoricoUsuarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    restauranteId?: true
    visitas?: true
    avaliacaoMedia?: true
    ultimaVisita?: true
    _all?: true
  }

  export type HistoricoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoUsuario to aggregate.
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoUsuarios to fetch.
     */
    orderBy?: HistoricoUsuarioOrderByWithRelationInput | HistoricoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoricoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoricoUsuarios
    **/
    _count?: true | HistoricoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoUsuarioMaxAggregateInputType
  }

  export type GetHistoricoUsuarioAggregateType<T extends HistoricoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoUsuario[P]>
      : GetScalarType<T[P], AggregateHistoricoUsuario[P]>
  }




  export type HistoricoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoricoUsuarioWhereInput
    orderBy?: HistoricoUsuarioOrderByWithAggregationInput | HistoricoUsuarioOrderByWithAggregationInput[]
    by: HistoricoUsuarioScalarFieldEnum[] | HistoricoUsuarioScalarFieldEnum
    having?: HistoricoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoUsuarioCountAggregateInputType | true
    _avg?: HistoricoUsuarioAvgAggregateInputType
    _sum?: HistoricoUsuarioSumAggregateInputType
    _min?: HistoricoUsuarioMinAggregateInputType
    _max?: HistoricoUsuarioMaxAggregateInputType
  }

  export type HistoricoUsuarioGroupByOutputType = {
    id: string
    usuarioId: string
    restauranteId: string
    visitas: number
    avaliacaoMedia: number | null
    ultimaVisita: Date
    _count: HistoricoUsuarioCountAggregateOutputType | null
    _avg: HistoricoUsuarioAvgAggregateOutputType | null
    _sum: HistoricoUsuarioSumAggregateOutputType | null
    _min: HistoricoUsuarioMinAggregateOutputType | null
    _max: HistoricoUsuarioMaxAggregateOutputType | null
  }

  type GetHistoricoUsuarioGroupByPayload<T extends HistoricoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type HistoricoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    visitas?: boolean
    avaliacaoMedia?: boolean
    ultimaVisita?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoUsuario"]>

  export type HistoricoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    visitas?: boolean
    avaliacaoMedia?: boolean
    ultimaVisita?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoUsuario"]>

  export type HistoricoUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    visitas?: boolean
    avaliacaoMedia?: boolean
    ultimaVisita?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historicoUsuario"]>

  export type HistoricoUsuarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    restauranteId?: boolean
    visitas?: boolean
    avaliacaoMedia?: boolean
    ultimaVisita?: boolean
  }

  export type HistoricoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "restauranteId" | "visitas" | "avaliacaoMedia" | "ultimaVisita", ExtArgs["result"]["historicoUsuario"]>
  export type HistoricoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type HistoricoUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type HistoricoUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $HistoricoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoricoUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      restauranteId: string
      visitas: number
      avaliacaoMedia: number | null
      ultimaVisita: Date
    }, ExtArgs["result"]["historicoUsuario"]>
    composites: {}
  }

  type HistoricoUsuarioGetPayload<S extends boolean | null | undefined | HistoricoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$HistoricoUsuarioPayload, S>

  type HistoricoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoricoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoricoUsuarioCountAggregateInputType | true
    }

  export interface HistoricoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoricoUsuario'], meta: { name: 'HistoricoUsuario' } }
    /**
     * Find zero or one HistoricoUsuario that matches the filter.
     * @param {HistoricoUsuarioFindUniqueArgs} args - Arguments to find a HistoricoUsuario
     * @example
     * // Get one HistoricoUsuario
     * const historicoUsuario = await prisma.historicoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoricoUsuarioFindUniqueArgs>(args: SelectSubset<T, HistoricoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoricoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoricoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a HistoricoUsuario
     * @example
     * // Get one HistoricoUsuario
     * const historicoUsuario = await prisma.historicoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoricoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoricoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioFindFirstArgs} args - Arguments to find a HistoricoUsuario
     * @example
     * // Get one HistoricoUsuario
     * const historicoUsuario = await prisma.historicoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoricoUsuarioFindFirstArgs>(args?: SelectSubset<T, HistoricoUsuarioFindFirstArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoricoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioFindFirstOrThrowArgs} args - Arguments to find a HistoricoUsuario
     * @example
     * // Get one HistoricoUsuario
     * const historicoUsuario = await prisma.historicoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoricoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoricoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoricoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoricoUsuarios
     * const historicoUsuarios = await prisma.historicoUsuario.findMany()
     * 
     * // Get first 10 HistoricoUsuarios
     * const historicoUsuarios = await prisma.historicoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoUsuarioWithIdOnly = await prisma.historicoUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoricoUsuarioFindManyArgs>(args?: SelectSubset<T, HistoricoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoricoUsuario.
     * @param {HistoricoUsuarioCreateArgs} args - Arguments to create a HistoricoUsuario.
     * @example
     * // Create one HistoricoUsuario
     * const HistoricoUsuario = await prisma.historicoUsuario.create({
     *   data: {
     *     // ... data to create a HistoricoUsuario
     *   }
     * })
     * 
     */
    create<T extends HistoricoUsuarioCreateArgs>(args: SelectSubset<T, HistoricoUsuarioCreateArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoricoUsuarios.
     * @param {HistoricoUsuarioCreateManyArgs} args - Arguments to create many HistoricoUsuarios.
     * @example
     * // Create many HistoricoUsuarios
     * const historicoUsuario = await prisma.historicoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoricoUsuarioCreateManyArgs>(args?: SelectSubset<T, HistoricoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoricoUsuarios and returns the data saved in the database.
     * @param {HistoricoUsuarioCreateManyAndReturnArgs} args - Arguments to create many HistoricoUsuarios.
     * @example
     * // Create many HistoricoUsuarios
     * const historicoUsuario = await prisma.historicoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoricoUsuarios and only return the `id`
     * const historicoUsuarioWithIdOnly = await prisma.historicoUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoricoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoricoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoricoUsuario.
     * @param {HistoricoUsuarioDeleteArgs} args - Arguments to delete one HistoricoUsuario.
     * @example
     * // Delete one HistoricoUsuario
     * const HistoricoUsuario = await prisma.historicoUsuario.delete({
     *   where: {
     *     // ... filter to delete one HistoricoUsuario
     *   }
     * })
     * 
     */
    delete<T extends HistoricoUsuarioDeleteArgs>(args: SelectSubset<T, HistoricoUsuarioDeleteArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoricoUsuario.
     * @param {HistoricoUsuarioUpdateArgs} args - Arguments to update one HistoricoUsuario.
     * @example
     * // Update one HistoricoUsuario
     * const historicoUsuario = await prisma.historicoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoricoUsuarioUpdateArgs>(args: SelectSubset<T, HistoricoUsuarioUpdateArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoricoUsuarios.
     * @param {HistoricoUsuarioDeleteManyArgs} args - Arguments to filter HistoricoUsuarios to delete.
     * @example
     * // Delete a few HistoricoUsuarios
     * const { count } = await prisma.historicoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoricoUsuarioDeleteManyArgs>(args?: SelectSubset<T, HistoricoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoricoUsuarios
     * const historicoUsuario = await prisma.historicoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoricoUsuarioUpdateManyArgs>(args: SelectSubset<T, HistoricoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoricoUsuarios and returns the data updated in the database.
     * @param {HistoricoUsuarioUpdateManyAndReturnArgs} args - Arguments to update many HistoricoUsuarios.
     * @example
     * // Update many HistoricoUsuarios
     * const historicoUsuario = await prisma.historicoUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoricoUsuarios and only return the `id`
     * const historicoUsuarioWithIdOnly = await prisma.historicoUsuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoricoUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoricoUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoricoUsuario.
     * @param {HistoricoUsuarioUpsertArgs} args - Arguments to update or create a HistoricoUsuario.
     * @example
     * // Update or create a HistoricoUsuario
     * const historicoUsuario = await prisma.historicoUsuario.upsert({
     *   create: {
     *     // ... data to create a HistoricoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoricoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends HistoricoUsuarioUpsertArgs>(args: SelectSubset<T, HistoricoUsuarioUpsertArgs<ExtArgs>>): Prisma__HistoricoUsuarioClient<$Result.GetResult<Prisma.$HistoricoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoricoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioCountArgs} args - Arguments to filter HistoricoUsuarios to count.
     * @example
     * // Count the number of HistoricoUsuarios
     * const count = await prisma.historicoUsuario.count({
     *   where: {
     *     // ... the filter for the HistoricoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends HistoricoUsuarioCountArgs>(
      args?: Subset<T, HistoricoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoricoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoUsuarioAggregateArgs>(args: Subset<T, HistoricoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetHistoricoUsuarioAggregateType<T>>

    /**
     * Group by HistoricoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoricoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoricoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: HistoricoUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoricoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoricoUsuario model
   */
  readonly fields: HistoricoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoricoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoricoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoricoUsuario model
   */
  interface HistoricoUsuarioFieldRefs {
    readonly id: FieldRef<"HistoricoUsuario", 'String'>
    readonly usuarioId: FieldRef<"HistoricoUsuario", 'String'>
    readonly restauranteId: FieldRef<"HistoricoUsuario", 'String'>
    readonly visitas: FieldRef<"HistoricoUsuario", 'Int'>
    readonly avaliacaoMedia: FieldRef<"HistoricoUsuario", 'Float'>
    readonly ultimaVisita: FieldRef<"HistoricoUsuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoricoUsuario findUnique
   */
  export type HistoricoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoUsuario to fetch.
     */
    where: HistoricoUsuarioWhereUniqueInput
  }

  /**
   * HistoricoUsuario findUniqueOrThrow
   */
  export type HistoricoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoUsuario to fetch.
     */
    where: HistoricoUsuarioWhereUniqueInput
  }

  /**
   * HistoricoUsuario findFirst
   */
  export type HistoricoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoUsuario to fetch.
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoUsuarios to fetch.
     */
    orderBy?: HistoricoUsuarioOrderByWithRelationInput | HistoricoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoUsuarios.
     */
    cursor?: HistoricoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoUsuarios.
     */
    distinct?: HistoricoUsuarioScalarFieldEnum | HistoricoUsuarioScalarFieldEnum[]
  }

  /**
   * HistoricoUsuario findFirstOrThrow
   */
  export type HistoricoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoUsuario to fetch.
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoUsuarios to fetch.
     */
    orderBy?: HistoricoUsuarioOrderByWithRelationInput | HistoricoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoricoUsuarios.
     */
    cursor?: HistoricoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoricoUsuarios.
     */
    distinct?: HistoricoUsuarioScalarFieldEnum | HistoricoUsuarioScalarFieldEnum[]
  }

  /**
   * HistoricoUsuario findMany
   */
  export type HistoricoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which HistoricoUsuarios to fetch.
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoricoUsuarios to fetch.
     */
    orderBy?: HistoricoUsuarioOrderByWithRelationInput | HistoricoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoricoUsuarios.
     */
    cursor?: HistoricoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoricoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoricoUsuarios.
     */
    skip?: number
    distinct?: HistoricoUsuarioScalarFieldEnum | HistoricoUsuarioScalarFieldEnum[]
  }

  /**
   * HistoricoUsuario create
   */
  export type HistoricoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoricoUsuario.
     */
    data: XOR<HistoricoUsuarioCreateInput, HistoricoUsuarioUncheckedCreateInput>
  }

  /**
   * HistoricoUsuario createMany
   */
  export type HistoricoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoricoUsuarios.
     */
    data: HistoricoUsuarioCreateManyInput | HistoricoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoricoUsuario createManyAndReturn
   */
  export type HistoricoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many HistoricoUsuarios.
     */
    data: HistoricoUsuarioCreateManyInput | HistoricoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoUsuario update
   */
  export type HistoricoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoricoUsuario.
     */
    data: XOR<HistoricoUsuarioUpdateInput, HistoricoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which HistoricoUsuario to update.
     */
    where: HistoricoUsuarioWhereUniqueInput
  }

  /**
   * HistoricoUsuario updateMany
   */
  export type HistoricoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoricoUsuarios.
     */
    data: XOR<HistoricoUsuarioUpdateManyMutationInput, HistoricoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoUsuarios to update
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * Limit how many HistoricoUsuarios to update.
     */
    limit?: number
  }

  /**
   * HistoricoUsuario updateManyAndReturn
   */
  export type HistoricoUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update HistoricoUsuarios.
     */
    data: XOR<HistoricoUsuarioUpdateManyMutationInput, HistoricoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which HistoricoUsuarios to update
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * Limit how many HistoricoUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoricoUsuario upsert
   */
  export type HistoricoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoricoUsuario to update in case it exists.
     */
    where: HistoricoUsuarioWhereUniqueInput
    /**
     * In case the HistoricoUsuario found by the `where` argument doesn't exist, create a new HistoricoUsuario with this data.
     */
    create: XOR<HistoricoUsuarioCreateInput, HistoricoUsuarioUncheckedCreateInput>
    /**
     * In case the HistoricoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoricoUsuarioUpdateInput, HistoricoUsuarioUncheckedUpdateInput>
  }

  /**
   * HistoricoUsuario delete
   */
  export type HistoricoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which HistoricoUsuario to delete.
     */
    where: HistoricoUsuarioWhereUniqueInput
  }

  /**
   * HistoricoUsuario deleteMany
   */
  export type HistoricoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoricoUsuarios to delete
     */
    where?: HistoricoUsuarioWhereInput
    /**
     * Limit how many HistoricoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * HistoricoUsuario without action
   */
  export type HistoricoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoricoUsuario
     */
    select?: HistoricoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoricoUsuario
     */
    omit?: HistoricoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoricoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    valorTotal: number | null
    prioridade: number | null
    tempoPreparo: number | null
  }

  export type PedidoSumAggregateOutputType = {
    valorTotal: number | null
    prioridade: number | null
    tempoPreparo: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    restauranteId: string | null
    valorTotal: number | null
    status: string | null
    isPriority: boolean | null
    prioridade: number | null
    tempoPreparo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    restauranteId: string | null
    valorTotal: number | null
    status: string | null
    isPriority: boolean | null
    prioridade: number | null
    tempoPreparo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    clienteId: number
    restauranteId: number
    itens: number
    valorTotal: number
    status: number
    isPriority: number
    prioridade: number
    tempoPreparo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    valorTotal?: true
    prioridade?: true
    tempoPreparo?: true
  }

  export type PedidoSumAggregateInputType = {
    valorTotal?: true
    prioridade?: true
    tempoPreparo?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    clienteId?: true
    restauranteId?: true
    valorTotal?: true
    status?: true
    isPriority?: true
    prioridade?: true
    tempoPreparo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    restauranteId?: true
    valorTotal?: true
    status?: true
    isPriority?: true
    prioridade?: true
    tempoPreparo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    clienteId?: true
    restauranteId?: true
    itens?: true
    valorTotal?: true
    status?: true
    isPriority?: true
    prioridade?: true
    tempoPreparo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    clienteId: string
    restauranteId: string
    itens: JsonValue
    valorTotal: number
    status: string
    isPriority: boolean
    prioridade: number | null
    tempoPreparo: number | null
    createdAt: Date
    updatedAt: Date
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    itens?: boolean
    valorTotal?: boolean
    status?: boolean
    isPriority?: boolean
    prioridade?: boolean
    tempoPreparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    itens?: boolean
    valorTotal?: boolean
    status?: boolean
    isPriority?: boolean
    prioridade?: boolean
    tempoPreparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    itens?: boolean
    valorTotal?: boolean
    status?: boolean
    isPriority?: boolean
    prioridade?: boolean
    tempoPreparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    restauranteId?: boolean
    itens?: boolean
    valorTotal?: boolean
    status?: boolean
    isPriority?: boolean
    prioridade?: boolean
    tempoPreparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "restauranteId" | "itens" | "valorTotal" | "status" | "isPriority" | "prioridade" | "tempoPreparo" | "createdAt" | "updatedAt", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | UsuarioDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      cliente: Prisma.$UsuarioPayload<ExtArgs>
      restaurante: Prisma.$RestaurantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      restauranteId: string
      itens: Prisma.JsonValue
      valorTotal: number
      status: string
      isPriority: boolean
      prioridade: number | null
      tempoPreparo: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurante<T extends RestauranteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteDefaultArgs<ExtArgs>>): Prisma__RestauranteClient<$Result.GetResult<Prisma.$RestaurantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'String'>
    readonly clienteId: FieldRef<"Pedido", 'String'>
    readonly restauranteId: FieldRef<"Pedido", 'String'>
    readonly itens: FieldRef<"Pedido", 'Json'>
    readonly valorTotal: FieldRef<"Pedido", 'Float'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly isPriority: FieldRef<"Pedido", 'Boolean'>
    readonly prioridade: FieldRef<"Pedido", 'Int'>
    readonly tempoPreparo: FieldRef<"Pedido", 'Int'>
    readonly createdAt: FieldRef<"Pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RestauranteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    capacidade: 'capacidade',
    estacoesPreparo: 'estacoesPreparo',
    tempoMedioPreparo: 'tempoMedioPreparo',
    categorias: 'categorias',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestauranteScalarFieldEnum = (typeof RestauranteScalarFieldEnum)[keyof typeof RestauranteScalarFieldEnum]


  export const FilaScalarFieldEnum: {
    id: 'id',
    restauranteId: 'restauranteId',
    tamanho: 'tamanho',
    tempoEstimado: 'tempoEstimado',
    updatedAt: 'updatedAt'
  };

  export type FilaScalarFieldEnum = (typeof FilaScalarFieldEnum)[keyof typeof FilaScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    restauranteId: 'restauranteId',
    horario: 'horario',
    status: 'status',
    isPriority: 'isPriority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const HistoricoUsuarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    restauranteId: 'restauranteId',
    visitas: 'visitas',
    avaliacaoMedia: 'avaliacaoMedia',
    ultimaVisita: 'ultimaVisita'
  };

  export type HistoricoUsuarioScalarFieldEnum = (typeof HistoricoUsuarioScalarFieldEnum)[keyof typeof HistoricoUsuarioScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    restauranteId: 'restauranteId',
    itens: 'itens',
    valorTotal: 'valorTotal',
    status: 'status',
    isPriority: 'isPriority',
    prioridade: 'prioridade',
    tempoPreparo: 'tempoPreparo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
    historico?: HistoricoUsuarioListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    historico?: HistoricoUsuarioOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    telefone?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
    historico?: HistoricoUsuarioListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RestauranteWhereInput = {
    AND?: RestauranteWhereInput | RestauranteWhereInput[]
    OR?: RestauranteWhereInput[]
    NOT?: RestauranteWhereInput | RestauranteWhereInput[]
    id?: StringFilter<"Restaurante"> | string
    nome?: StringFilter<"Restaurante"> | string
    descricao?: StringNullableFilter<"Restaurante"> | string | null
    capacidade?: IntFilter<"Restaurante"> | number
    estacoesPreparo?: IntFilter<"Restaurante"> | number
    tempoMedioPreparo?: IntFilter<"Restaurante"> | number
    categorias?: StringNullableListFilter<"Restaurante">
    createdAt?: DateTimeFilter<"Restaurante"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurante"> | Date | string
    fila?: XOR<FilaNullableScalarRelationFilter, FilaWhereInput> | null
    reservas?: ReservaListRelationFilter
    pedidos?: PedidoListRelationFilter
    historicoUsuarios?: HistoricoUsuarioListRelationFilter
  }

  export type RestauranteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
    categorias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fila?: FilaOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    historicoUsuarios?: HistoricoUsuarioOrderByRelationAggregateInput
  }

  export type RestauranteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestauranteWhereInput | RestauranteWhereInput[]
    OR?: RestauranteWhereInput[]
    NOT?: RestauranteWhereInput | RestauranteWhereInput[]
    nome?: StringFilter<"Restaurante"> | string
    descricao?: StringNullableFilter<"Restaurante"> | string | null
    capacidade?: IntFilter<"Restaurante"> | number
    estacoesPreparo?: IntFilter<"Restaurante"> | number
    tempoMedioPreparo?: IntFilter<"Restaurante"> | number
    categorias?: StringNullableListFilter<"Restaurante">
    createdAt?: DateTimeFilter<"Restaurante"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurante"> | Date | string
    fila?: XOR<FilaNullableScalarRelationFilter, FilaWhereInput> | null
    reservas?: ReservaListRelationFilter
    pedidos?: PedidoListRelationFilter
    historicoUsuarios?: HistoricoUsuarioListRelationFilter
  }, "id">

  export type RestauranteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
    categorias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestauranteCountOrderByAggregateInput
    _avg?: RestauranteAvgOrderByAggregateInput
    _max?: RestauranteMaxOrderByAggregateInput
    _min?: RestauranteMinOrderByAggregateInput
    _sum?: RestauranteSumOrderByAggregateInput
  }

  export type RestauranteScalarWhereWithAggregatesInput = {
    AND?: RestauranteScalarWhereWithAggregatesInput | RestauranteScalarWhereWithAggregatesInput[]
    OR?: RestauranteScalarWhereWithAggregatesInput[]
    NOT?: RestauranteScalarWhereWithAggregatesInput | RestauranteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurante"> | string
    nome?: StringWithAggregatesFilter<"Restaurante"> | string
    descricao?: StringNullableWithAggregatesFilter<"Restaurante"> | string | null
    capacidade?: IntWithAggregatesFilter<"Restaurante"> | number
    estacoesPreparo?: IntWithAggregatesFilter<"Restaurante"> | number
    tempoMedioPreparo?: IntWithAggregatesFilter<"Restaurante"> | number
    categorias?: StringNullableListFilter<"Restaurante">
    createdAt?: DateTimeWithAggregatesFilter<"Restaurante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurante"> | Date | string
  }

  export type FilaWhereInput = {
    AND?: FilaWhereInput | FilaWhereInput[]
    OR?: FilaWhereInput[]
    NOT?: FilaWhereInput | FilaWhereInput[]
    id?: StringFilter<"Fila"> | string
    restauranteId?: StringFilter<"Fila"> | string
    tamanho?: IntFilter<"Fila"> | number
    tempoEstimado?: IntFilter<"Fila"> | number
    updatedAt?: DateTimeFilter<"Fila"> | Date | string
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }

  export type FilaOrderByWithRelationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
    updatedAt?: SortOrder
    restaurante?: RestauranteOrderByWithRelationInput
  }

  export type FilaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    restauranteId?: string
    AND?: FilaWhereInput | FilaWhereInput[]
    OR?: FilaWhereInput[]
    NOT?: FilaWhereInput | FilaWhereInput[]
    tamanho?: IntFilter<"Fila"> | number
    tempoEstimado?: IntFilter<"Fila"> | number
    updatedAt?: DateTimeFilter<"Fila"> | Date | string
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }, "id" | "restauranteId">

  export type FilaOrderByWithAggregationInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
    updatedAt?: SortOrder
    _count?: FilaCountOrderByAggregateInput
    _avg?: FilaAvgOrderByAggregateInput
    _max?: FilaMaxOrderByAggregateInput
    _min?: FilaMinOrderByAggregateInput
    _sum?: FilaSumOrderByAggregateInput
  }

  export type FilaScalarWhereWithAggregatesInput = {
    AND?: FilaScalarWhereWithAggregatesInput | FilaScalarWhereWithAggregatesInput[]
    OR?: FilaScalarWhereWithAggregatesInput[]
    NOT?: FilaScalarWhereWithAggregatesInput | FilaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fila"> | string
    restauranteId?: StringWithAggregatesFilter<"Fila"> | string
    tamanho?: IntWithAggregatesFilter<"Fila"> | number
    tempoEstimado?: IntWithAggregatesFilter<"Fila"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Fila"> | Date | string
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: StringFilter<"Reserva"> | string
    usuarioId?: StringFilter<"Reserva"> | string
    restauranteId?: StringFilter<"Reserva"> | string
    horario?: DateTimeFilter<"Reserva"> | Date | string
    status?: StringFilter<"Reserva"> | string
    isPriority?: BoolFilter<"Reserva"> | boolean
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    restaurante?: RestauranteOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId_restauranteId_horario?: ReservaUsuarioIdRestauranteIdHorarioCompoundUniqueInput
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    usuarioId?: StringFilter<"Reserva"> | string
    restauranteId?: StringFilter<"Reserva"> | string
    horario?: DateTimeFilter<"Reserva"> | Date | string
    status?: StringFilter<"Reserva"> | string
    isPriority?: BoolFilter<"Reserva"> | boolean
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }, "id" | "usuarioId_restauranteId_horario">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reserva"> | string
    usuarioId?: StringWithAggregatesFilter<"Reserva"> | string
    restauranteId?: StringWithAggregatesFilter<"Reserva"> | string
    horario?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    status?: StringWithAggregatesFilter<"Reserva"> | string
    isPriority?: BoolWithAggregatesFilter<"Reserva"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type HistoricoUsuarioWhereInput = {
    AND?: HistoricoUsuarioWhereInput | HistoricoUsuarioWhereInput[]
    OR?: HistoricoUsuarioWhereInput[]
    NOT?: HistoricoUsuarioWhereInput | HistoricoUsuarioWhereInput[]
    id?: StringFilter<"HistoricoUsuario"> | string
    usuarioId?: StringFilter<"HistoricoUsuario"> | string
    restauranteId?: StringFilter<"HistoricoUsuario"> | string
    visitas?: IntFilter<"HistoricoUsuario"> | number
    avaliacaoMedia?: FloatNullableFilter<"HistoricoUsuario"> | number | null
    ultimaVisita?: DateTimeFilter<"HistoricoUsuario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }

  export type HistoricoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    visitas?: SortOrder
    avaliacaoMedia?: SortOrderInput | SortOrder
    ultimaVisita?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    restaurante?: RestauranteOrderByWithRelationInput
  }

  export type HistoricoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId_restauranteId?: HistoricoUsuarioUsuarioIdRestauranteIdCompoundUniqueInput
    AND?: HistoricoUsuarioWhereInput | HistoricoUsuarioWhereInput[]
    OR?: HistoricoUsuarioWhereInput[]
    NOT?: HistoricoUsuarioWhereInput | HistoricoUsuarioWhereInput[]
    usuarioId?: StringFilter<"HistoricoUsuario"> | string
    restauranteId?: StringFilter<"HistoricoUsuario"> | string
    visitas?: IntFilter<"HistoricoUsuario"> | number
    avaliacaoMedia?: FloatNullableFilter<"HistoricoUsuario"> | number | null
    ultimaVisita?: DateTimeFilter<"HistoricoUsuario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }, "id" | "usuarioId_restauranteId">

  export type HistoricoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    visitas?: SortOrder
    avaliacaoMedia?: SortOrderInput | SortOrder
    ultimaVisita?: SortOrder
    _count?: HistoricoUsuarioCountOrderByAggregateInput
    _avg?: HistoricoUsuarioAvgOrderByAggregateInput
    _max?: HistoricoUsuarioMaxOrderByAggregateInput
    _min?: HistoricoUsuarioMinOrderByAggregateInput
    _sum?: HistoricoUsuarioSumOrderByAggregateInput
  }

  export type HistoricoUsuarioScalarWhereWithAggregatesInput = {
    AND?: HistoricoUsuarioScalarWhereWithAggregatesInput | HistoricoUsuarioScalarWhereWithAggregatesInput[]
    OR?: HistoricoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: HistoricoUsuarioScalarWhereWithAggregatesInput | HistoricoUsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoricoUsuario"> | string
    usuarioId?: StringWithAggregatesFilter<"HistoricoUsuario"> | string
    restauranteId?: StringWithAggregatesFilter<"HistoricoUsuario"> | string
    visitas?: IntWithAggregatesFilter<"HistoricoUsuario"> | number
    avaliacaoMedia?: FloatNullableWithAggregatesFilter<"HistoricoUsuario"> | number | null
    ultimaVisita?: DateTimeWithAggregatesFilter<"HistoricoUsuario"> | Date | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: StringFilter<"Pedido"> | string
    clienteId?: StringFilter<"Pedido"> | string
    restauranteId?: StringFilter<"Pedido"> | string
    itens?: JsonFilter<"Pedido">
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    isPriority?: BoolFilter<"Pedido"> | boolean
    prioridade?: IntNullableFilter<"Pedido"> | number | null
    tempoPreparo?: IntNullableFilter<"Pedido"> | number | null
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    itens?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    prioridade?: SortOrderInput | SortOrder
    tempoPreparo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: UsuarioOrderByWithRelationInput
    restaurante?: RestauranteOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    clienteId?: StringFilter<"Pedido"> | string
    restauranteId?: StringFilter<"Pedido"> | string
    itens?: JsonFilter<"Pedido">
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    isPriority?: BoolFilter<"Pedido"> | boolean
    prioridade?: IntNullableFilter<"Pedido"> | number | null
    tempoPreparo?: IntNullableFilter<"Pedido"> | number | null
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    cliente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    restaurante?: XOR<RestauranteScalarRelationFilter, RestauranteWhereInput>
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    itens?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    prioridade?: SortOrderInput | SortOrder
    tempoPreparo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedido"> | string
    clienteId?: StringWithAggregatesFilter<"Pedido"> | string
    restauranteId?: StringWithAggregatesFilter<"Pedido"> | string
    itens?: JsonWithAggregatesFilter<"Pedido">
    valorTotal?: FloatWithAggregatesFilter<"Pedido"> | number
    status?: StringWithAggregatesFilter<"Pedido"> | string
    isPriority?: BoolWithAggregatesFilter<"Pedido"> | boolean
    prioridade?: IntNullableWithAggregatesFilter<"Pedido"> | number | null
    tempoPreparo?: IntNullableWithAggregatesFilter<"Pedido"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUsuarioCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUsuarioUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaCreateNestedOneWithoutRestauranteInput
    reservas?: ReservaCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaUncheckedCreateNestedOneWithoutRestauranteInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUpdateOneWithoutRestauranteNestedInput
    reservas?: ReservaUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUncheckedUpdateOneWithoutRestauranteNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestauranteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilaCreateInput = {
    id?: string
    tamanho?: number
    tempoEstimado?: number
    updatedAt?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutFilaInput
  }

  export type FilaUncheckedCreateInput = {
    id?: string
    restauranteId: string
    tamanho?: number
    tempoEstimado?: number
    updatedAt?: Date | string
  }

  export type FilaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutFilaNestedInput
  }

  export type FilaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilaCreateManyInput = {
    id?: string
    restauranteId: string
    tamanho?: number
    tempoEstimado?: number
    updatedAt?: Date | string
  }

  export type FilaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateInput = {
    id?: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    restaurante: RestauranteCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: string
    usuarioId: string
    restauranteId: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyInput = {
    id?: string
    usuarioId: string
    restauranteId: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioCreateInput = {
    id?: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
    usuario: UsuarioCreateNestedOneWithoutHistoricoInput
    restaurante: RestauranteCreateNestedOneWithoutHistoricoUsuariosInput
  }

  export type HistoricoUsuarioUncheckedCreateInput = {
    id?: string
    usuarioId: string
    restauranteId: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
  }

  export type HistoricoUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutHistoricoNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutHistoricoUsuariosNestedInput
  }

  export type HistoricoUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioCreateManyInput = {
    id?: string
    usuarioId: string
    restauranteId: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
  }

  export type HistoricoUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateInput = {
    id?: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: UsuarioCreateNestedOneWithoutPedidosInput
    restaurante: RestauranteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: string
    clienteId: string
    restauranteId: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    restaurante?: RestauranteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateManyInput = {
    id?: string
    clienteId: string
    restauranteId: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type HistoricoUsuarioListRelationFilter = {
    every?: HistoricoUsuarioWhereInput
    some?: HistoricoUsuarioWhereInput
    none?: HistoricoUsuarioWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoricoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FilaNullableScalarRelationFilter = {
    is?: FilaWhereInput | null
    isNot?: FilaWhereInput | null
  }

  export type RestauranteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
    categorias?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestauranteAvgOrderByAggregateInput = {
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
  }

  export type RestauranteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestauranteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestauranteSumOrderByAggregateInput = {
    capacidade?: SortOrder
    estacoesPreparo?: SortOrder
    tempoMedioPreparo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RestauranteScalarRelationFilter = {
    is?: RestauranteWhereInput
    isNot?: RestauranteWhereInput
  }

  export type FilaCountOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilaAvgOrderByAggregateInput = {
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
  }

  export type FilaMaxOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilaMinOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilaSumOrderByAggregateInput = {
    tamanho?: SortOrder
    tempoEstimado?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ReservaUsuarioIdRestauranteIdHorarioCompoundUniqueInput = {
    usuarioId: string
    restauranteId: string
    horario: Date | string
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    horario?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HistoricoUsuarioUsuarioIdRestauranteIdCompoundUniqueInput = {
    usuarioId: string
    restauranteId: string
  }

  export type HistoricoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    visitas?: SortOrder
    avaliacaoMedia?: SortOrder
    ultimaVisita?: SortOrder
  }

  export type HistoricoUsuarioAvgOrderByAggregateInput = {
    visitas?: SortOrder
    avaliacaoMedia?: SortOrder
  }

  export type HistoricoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    visitas?: SortOrder
    avaliacaoMedia?: SortOrder
    ultimaVisita?: SortOrder
  }

  export type HistoricoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    restauranteId?: SortOrder
    visitas?: SortOrder
    avaliacaoMedia?: SortOrder
    ultimaVisita?: SortOrder
  }

  export type HistoricoUsuarioSumOrderByAggregateInput = {
    visitas?: SortOrder
    avaliacaoMedia?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    itens?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    prioridade?: SortOrder
    tempoPreparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    valorTotal?: SortOrder
    prioridade?: SortOrder
    tempoPreparo?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    prioridade?: SortOrder
    tempoPreparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    restauranteId?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    isPriority?: SortOrder
    prioridade?: SortOrder
    tempoPreparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    valorTotal?: SortOrder
    prioridade?: SortOrder
    tempoPreparo?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReservaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type HistoricoUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutUsuarioInput, HistoricoUsuarioUncheckedCreateWithoutUsuarioInput> | HistoricoUsuarioCreateWithoutUsuarioInput[] | HistoricoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutUsuarioInput | HistoricoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistoricoUsuarioCreateManyUsuarioInputEnvelope
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type HistoricoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutUsuarioInput, HistoricoUsuarioUncheckedCreateWithoutUsuarioInput> | HistoricoUsuarioCreateWithoutUsuarioInput[] | HistoricoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutUsuarioInput | HistoricoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistoricoUsuarioCreateManyUsuarioInputEnvelope
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type HistoricoUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutUsuarioInput, HistoricoUsuarioUncheckedCreateWithoutUsuarioInput> | HistoricoUsuarioCreateWithoutUsuarioInput[] | HistoricoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutUsuarioInput | HistoricoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistoricoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | HistoricoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistoricoUsuarioCreateManyUsuarioInputEnvelope
    set?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    disconnect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    delete?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    update?: HistoricoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | HistoricoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistoricoUsuarioUpdateManyWithWhereWithoutUsuarioInput | HistoricoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistoricoUsuarioScalarWhereInput | HistoricoUsuarioScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type HistoricoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutUsuarioInput, HistoricoUsuarioUncheckedCreateWithoutUsuarioInput> | HistoricoUsuarioCreateWithoutUsuarioInput[] | HistoricoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutUsuarioInput | HistoricoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistoricoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | HistoricoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistoricoUsuarioCreateManyUsuarioInputEnvelope
    set?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    disconnect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    delete?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    update?: HistoricoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | HistoricoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistoricoUsuarioUpdateManyWithWhereWithoutUsuarioInput | HistoricoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistoricoUsuarioScalarWhereInput | HistoricoUsuarioScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type RestauranteCreatecategoriasInput = {
    set: string[]
  }

  export type FilaCreateNestedOneWithoutRestauranteInput = {
    create?: XOR<FilaCreateWithoutRestauranteInput, FilaUncheckedCreateWithoutRestauranteInput>
    connectOrCreate?: FilaCreateOrConnectWithoutRestauranteInput
    connect?: FilaWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ReservaCreateWithoutRestauranteInput, ReservaUncheckedCreateWithoutRestauranteInput> | ReservaCreateWithoutRestauranteInput[] | ReservaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutRestauranteInput | ReservaCreateOrConnectWithoutRestauranteInput[]
    createMany?: ReservaCreateManyRestauranteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type HistoricoUsuarioCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutRestauranteInput, HistoricoUsuarioUncheckedCreateWithoutRestauranteInput> | HistoricoUsuarioCreateWithoutRestauranteInput[] | HistoricoUsuarioUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutRestauranteInput | HistoricoUsuarioCreateOrConnectWithoutRestauranteInput[]
    createMany?: HistoricoUsuarioCreateManyRestauranteInputEnvelope
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
  }

  export type FilaUncheckedCreateNestedOneWithoutRestauranteInput = {
    create?: XOR<FilaCreateWithoutRestauranteInput, FilaUncheckedCreateWithoutRestauranteInput>
    connectOrCreate?: FilaCreateOrConnectWithoutRestauranteInput
    connect?: FilaWhereUniqueInput
  }

  export type ReservaUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ReservaCreateWithoutRestauranteInput, ReservaUncheckedCreateWithoutRestauranteInput> | ReservaCreateWithoutRestauranteInput[] | ReservaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutRestauranteInput | ReservaCreateOrConnectWithoutRestauranteInput[]
    createMany?: ReservaCreateManyRestauranteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type HistoricoUsuarioUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutRestauranteInput, HistoricoUsuarioUncheckedCreateWithoutRestauranteInput> | HistoricoUsuarioCreateWithoutRestauranteInput[] | HistoricoUsuarioUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutRestauranteInput | HistoricoUsuarioCreateOrConnectWithoutRestauranteInput[]
    createMany?: HistoricoUsuarioCreateManyRestauranteInputEnvelope
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestauranteUpdatecategoriasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FilaUpdateOneWithoutRestauranteNestedInput = {
    create?: XOR<FilaCreateWithoutRestauranteInput, FilaUncheckedCreateWithoutRestauranteInput>
    connectOrCreate?: FilaCreateOrConnectWithoutRestauranteInput
    upsert?: FilaUpsertWithoutRestauranteInput
    disconnect?: FilaWhereInput | boolean
    delete?: FilaWhereInput | boolean
    connect?: FilaWhereUniqueInput
    update?: XOR<XOR<FilaUpdateToOneWithWhereWithoutRestauranteInput, FilaUpdateWithoutRestauranteInput>, FilaUncheckedUpdateWithoutRestauranteInput>
  }

  export type ReservaUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ReservaCreateWithoutRestauranteInput, ReservaUncheckedCreateWithoutRestauranteInput> | ReservaCreateWithoutRestauranteInput[] | ReservaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutRestauranteInput | ReservaCreateOrConnectWithoutRestauranteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutRestauranteInput | ReservaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ReservaCreateManyRestauranteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutRestauranteInput | ReservaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutRestauranteInput | ReservaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRestauranteInput | PedidoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRestauranteInput | PedidoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRestauranteInput | PedidoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type HistoricoUsuarioUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutRestauranteInput, HistoricoUsuarioUncheckedCreateWithoutRestauranteInput> | HistoricoUsuarioCreateWithoutRestauranteInput[] | HistoricoUsuarioUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutRestauranteInput | HistoricoUsuarioCreateOrConnectWithoutRestauranteInput[]
    upsert?: HistoricoUsuarioUpsertWithWhereUniqueWithoutRestauranteInput | HistoricoUsuarioUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: HistoricoUsuarioCreateManyRestauranteInputEnvelope
    set?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    disconnect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    delete?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    update?: HistoricoUsuarioUpdateWithWhereUniqueWithoutRestauranteInput | HistoricoUsuarioUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: HistoricoUsuarioUpdateManyWithWhereWithoutRestauranteInput | HistoricoUsuarioUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: HistoricoUsuarioScalarWhereInput | HistoricoUsuarioScalarWhereInput[]
  }

  export type FilaUncheckedUpdateOneWithoutRestauranteNestedInput = {
    create?: XOR<FilaCreateWithoutRestauranteInput, FilaUncheckedCreateWithoutRestauranteInput>
    connectOrCreate?: FilaCreateOrConnectWithoutRestauranteInput
    upsert?: FilaUpsertWithoutRestauranteInput
    disconnect?: FilaWhereInput | boolean
    delete?: FilaWhereInput | boolean
    connect?: FilaWhereUniqueInput
    update?: XOR<XOR<FilaUpdateToOneWithWhereWithoutRestauranteInput, FilaUpdateWithoutRestauranteInput>, FilaUncheckedUpdateWithoutRestauranteInput>
  }

  export type ReservaUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ReservaCreateWithoutRestauranteInput, ReservaUncheckedCreateWithoutRestauranteInput> | ReservaCreateWithoutRestauranteInput[] | ReservaUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutRestauranteInput | ReservaCreateOrConnectWithoutRestauranteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutRestauranteInput | ReservaUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ReservaCreateManyRestauranteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutRestauranteInput | ReservaUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutRestauranteInput | ReservaUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput> | PedidoCreateWithoutRestauranteInput[] | PedidoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutRestauranteInput | PedidoCreateOrConnectWithoutRestauranteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutRestauranteInput | PedidoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: PedidoCreateManyRestauranteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutRestauranteInput | PedidoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutRestauranteInput | PedidoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<HistoricoUsuarioCreateWithoutRestauranteInput, HistoricoUsuarioUncheckedCreateWithoutRestauranteInput> | HistoricoUsuarioCreateWithoutRestauranteInput[] | HistoricoUsuarioUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: HistoricoUsuarioCreateOrConnectWithoutRestauranteInput | HistoricoUsuarioCreateOrConnectWithoutRestauranteInput[]
    upsert?: HistoricoUsuarioUpsertWithWhereUniqueWithoutRestauranteInput | HistoricoUsuarioUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: HistoricoUsuarioCreateManyRestauranteInputEnvelope
    set?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    disconnect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    delete?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    connect?: HistoricoUsuarioWhereUniqueInput | HistoricoUsuarioWhereUniqueInput[]
    update?: HistoricoUsuarioUpdateWithWhereUniqueWithoutRestauranteInput | HistoricoUsuarioUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: HistoricoUsuarioUpdateManyWithWhereWithoutRestauranteInput | HistoricoUsuarioUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: HistoricoUsuarioScalarWhereInput | HistoricoUsuarioScalarWhereInput[]
  }

  export type RestauranteCreateNestedOneWithoutFilaInput = {
    create?: XOR<RestauranteCreateWithoutFilaInput, RestauranteUncheckedCreateWithoutFilaInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutFilaInput
    connect?: RestauranteWhereUniqueInput
  }

  export type RestauranteUpdateOneRequiredWithoutFilaNestedInput = {
    create?: XOR<RestauranteCreateWithoutFilaInput, RestauranteUncheckedCreateWithoutFilaInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutFilaInput
    upsert?: RestauranteUpsertWithoutFilaInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutFilaInput, RestauranteUpdateWithoutFilaInput>, RestauranteUncheckedUpdateWithoutFilaInput>
  }

  export type UsuarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RestauranteCreateNestedOneWithoutReservasInput = {
    create?: XOR<RestauranteCreateWithoutReservasInput, RestauranteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutReservasInput
    connect?: RestauranteWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    upsert?: UsuarioUpsertWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasInput, UsuarioUpdateWithoutReservasInput>, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type RestauranteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<RestauranteCreateWithoutReservasInput, RestauranteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutReservasInput
    upsert?: RestauranteUpsertWithoutReservasInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutReservasInput, RestauranteUpdateWithoutReservasInput>, RestauranteUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RestauranteCreateNestedOneWithoutHistoricoUsuariosInput = {
    create?: XOR<RestauranteCreateWithoutHistoricoUsuariosInput, RestauranteUncheckedCreateWithoutHistoricoUsuariosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutHistoricoUsuariosInput
    connect?: RestauranteWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistoricoInput
    upsert?: UsuarioUpsertWithoutHistoricoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistoricoInput, UsuarioUpdateWithoutHistoricoInput>, UsuarioUncheckedUpdateWithoutHistoricoInput>
  }

  export type RestauranteUpdateOneRequiredWithoutHistoricoUsuariosNestedInput = {
    create?: XOR<RestauranteCreateWithoutHistoricoUsuariosInput, RestauranteUncheckedCreateWithoutHistoricoUsuariosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutHistoricoUsuariosInput
    upsert?: RestauranteUpsertWithoutHistoricoUsuariosInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutHistoricoUsuariosInput, RestauranteUpdateWithoutHistoricoUsuariosInput>, RestauranteUncheckedUpdateWithoutHistoricoUsuariosInput>
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RestauranteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPedidosInput
    connect?: RestauranteWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type RestauranteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: RestauranteCreateOrConnectWithoutPedidosInput
    upsert?: RestauranteUpsertWithoutPedidosInput
    connect?: RestauranteWhereUniqueInput
    update?: XOR<XOR<RestauranteUpdateToOneWithWhereWithoutPedidosInput, RestauranteUpdateWithoutPedidosInput>, RestauranteUncheckedUpdateWithoutPedidosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReservaCreateWithoutUsuarioInput = {
    id?: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    restauranteId: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaCreateManyUsuarioInputEnvelope = {
    data: ReservaCreateManyUsuarioInput | ReservaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoUsuarioCreateWithoutUsuarioInput = {
    id?: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutHistoricoUsuariosInput
  }

  export type HistoricoUsuarioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    restauranteId: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
  }

  export type HistoricoUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: HistoricoUsuarioWhereUniqueInput
    create: XOR<HistoricoUsuarioCreateWithoutUsuarioInput, HistoricoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type HistoricoUsuarioCreateManyUsuarioInputEnvelope = {
    data: HistoricoUsuarioCreateManyUsuarioInput | HistoricoUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutClienteInput = {
    id?: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurante: RestauranteCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id?: string
    restauranteId: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: StringFilter<"Reserva"> | string
    usuarioId?: StringFilter<"Reserva"> | string
    restauranteId?: StringFilter<"Reserva"> | string
    horario?: DateTimeFilter<"Reserva"> | Date | string
    status?: StringFilter<"Reserva"> | string
    isPriority?: BoolFilter<"Reserva"> | boolean
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type HistoricoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistoricoUsuarioWhereUniqueInput
    update: XOR<HistoricoUsuarioUpdateWithoutUsuarioInput, HistoricoUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistoricoUsuarioCreateWithoutUsuarioInput, HistoricoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type HistoricoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistoricoUsuarioWhereUniqueInput
    data: XOR<HistoricoUsuarioUpdateWithoutUsuarioInput, HistoricoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistoricoUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistoricoUsuarioScalarWhereInput
    data: XOR<HistoricoUsuarioUpdateManyMutationInput, HistoricoUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistoricoUsuarioScalarWhereInput = {
    AND?: HistoricoUsuarioScalarWhereInput | HistoricoUsuarioScalarWhereInput[]
    OR?: HistoricoUsuarioScalarWhereInput[]
    NOT?: HistoricoUsuarioScalarWhereInput | HistoricoUsuarioScalarWhereInput[]
    id?: StringFilter<"HistoricoUsuario"> | string
    usuarioId?: StringFilter<"HistoricoUsuario"> | string
    restauranteId?: StringFilter<"HistoricoUsuario"> | string
    visitas?: IntFilter<"HistoricoUsuario"> | number
    avaliacaoMedia?: FloatNullableFilter<"HistoricoUsuario"> | number | null
    ultimaVisita?: DateTimeFilter<"HistoricoUsuario"> | Date | string
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: StringFilter<"Pedido"> | string
    clienteId?: StringFilter<"Pedido"> | string
    restauranteId?: StringFilter<"Pedido"> | string
    itens?: JsonFilter<"Pedido">
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    isPriority?: BoolFilter<"Pedido"> | boolean
    prioridade?: IntNullableFilter<"Pedido"> | number | null
    tempoPreparo?: IntNullableFilter<"Pedido"> | number | null
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type FilaCreateWithoutRestauranteInput = {
    id?: string
    tamanho?: number
    tempoEstimado?: number
    updatedAt?: Date | string
  }

  export type FilaUncheckedCreateWithoutRestauranteInput = {
    id?: string
    tamanho?: number
    tempoEstimado?: number
    updatedAt?: Date | string
  }

  export type FilaCreateOrConnectWithoutRestauranteInput = {
    where: FilaWhereUniqueInput
    create: XOR<FilaCreateWithoutRestauranteInput, FilaUncheckedCreateWithoutRestauranteInput>
  }

  export type ReservaCreateWithoutRestauranteInput = {
    id?: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutRestauranteInput = {
    id?: string
    usuarioId: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutRestauranteInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutRestauranteInput, ReservaUncheckedCreateWithoutRestauranteInput>
  }

  export type ReservaCreateManyRestauranteInputEnvelope = {
    data: ReservaCreateManyRestauranteInput | ReservaCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutRestauranteInput = {
    id?: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: UsuarioCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutRestauranteInput = {
    id?: string
    clienteId: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoCreateOrConnectWithoutRestauranteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput>
  }

  export type PedidoCreateManyRestauranteInputEnvelope = {
    data: PedidoCreateManyRestauranteInput | PedidoCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type HistoricoUsuarioCreateWithoutRestauranteInput = {
    id?: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
    usuario: UsuarioCreateNestedOneWithoutHistoricoInput
  }

  export type HistoricoUsuarioUncheckedCreateWithoutRestauranteInput = {
    id?: string
    usuarioId: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
  }

  export type HistoricoUsuarioCreateOrConnectWithoutRestauranteInput = {
    where: HistoricoUsuarioWhereUniqueInput
    create: XOR<HistoricoUsuarioCreateWithoutRestauranteInput, HistoricoUsuarioUncheckedCreateWithoutRestauranteInput>
  }

  export type HistoricoUsuarioCreateManyRestauranteInputEnvelope = {
    data: HistoricoUsuarioCreateManyRestauranteInput | HistoricoUsuarioCreateManyRestauranteInput[]
    skipDuplicates?: boolean
  }

  export type FilaUpsertWithoutRestauranteInput = {
    update: XOR<FilaUpdateWithoutRestauranteInput, FilaUncheckedUpdateWithoutRestauranteInput>
    create: XOR<FilaCreateWithoutRestauranteInput, FilaUncheckedCreateWithoutRestauranteInput>
    where?: FilaWhereInput
  }

  export type FilaUpdateToOneWithWhereWithoutRestauranteInput = {
    where?: FilaWhereInput
    data: XOR<FilaUpdateWithoutRestauranteInput, FilaUncheckedUpdateWithoutRestauranteInput>
  }

  export type FilaUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilaUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    tempoEstimado?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutRestauranteInput, ReservaUncheckedUpdateWithoutRestauranteInput>
    create: XOR<ReservaCreateWithoutRestauranteInput, ReservaUncheckedCreateWithoutRestauranteInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutRestauranteInput, ReservaUncheckedUpdateWithoutRestauranteInput>
  }

  export type ReservaUpdateManyWithWhereWithoutRestauranteInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type PedidoUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutRestauranteInput, PedidoUncheckedUpdateWithoutRestauranteInput>
    create: XOR<PedidoCreateWithoutRestauranteInput, PedidoUncheckedCreateWithoutRestauranteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutRestauranteInput, PedidoUncheckedUpdateWithoutRestauranteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutRestauranteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type HistoricoUsuarioUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: HistoricoUsuarioWhereUniqueInput
    update: XOR<HistoricoUsuarioUpdateWithoutRestauranteInput, HistoricoUsuarioUncheckedUpdateWithoutRestauranteInput>
    create: XOR<HistoricoUsuarioCreateWithoutRestauranteInput, HistoricoUsuarioUncheckedCreateWithoutRestauranteInput>
  }

  export type HistoricoUsuarioUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: HistoricoUsuarioWhereUniqueInput
    data: XOR<HistoricoUsuarioUpdateWithoutRestauranteInput, HistoricoUsuarioUncheckedUpdateWithoutRestauranteInput>
  }

  export type HistoricoUsuarioUpdateManyWithWhereWithoutRestauranteInput = {
    where: HistoricoUsuarioScalarWhereInput
    data: XOR<HistoricoUsuarioUpdateManyMutationInput, HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type RestauranteCreateWithoutFilaInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutFilaInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutFilaInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutFilaInput, RestauranteUncheckedCreateWithoutFilaInput>
  }

  export type RestauranteUpsertWithoutFilaInput = {
    update: XOR<RestauranteUpdateWithoutFilaInput, RestauranteUncheckedUpdateWithoutFilaInput>
    create: XOR<RestauranteCreateWithoutFilaInput, RestauranteUncheckedCreateWithoutFilaInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutFilaInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutFilaInput, RestauranteUncheckedUpdateWithoutFilaInput>
  }

  export type RestauranteUpdateWithoutFilaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutFilaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type UsuarioCreateWithoutReservasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUsuarioCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUncheckedCreateWithoutReservasInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: HistoricoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UsuarioCreateOrConnectWithoutReservasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
  }

  export type RestauranteCreateWithoutReservasInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaCreateNestedOneWithoutRestauranteInput
    pedidos?: PedidoCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutReservasInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaUncheckedCreateNestedOneWithoutRestauranteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutReservasInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutReservasInput, RestauranteUncheckedCreateWithoutReservasInput>
  }

  export type UsuarioUpsertWithoutReservasInput = {
    update: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUsuarioUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: HistoricoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RestauranteUpsertWithoutReservasInput = {
    update: XOR<RestauranteUpdateWithoutReservasInput, RestauranteUncheckedUpdateWithoutReservasInput>
    create: XOR<RestauranteCreateWithoutReservasInput, RestauranteUncheckedCreateWithoutReservasInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutReservasInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutReservasInput, RestauranteUncheckedUpdateWithoutReservasInput>
  }

  export type RestauranteUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUpdateOneWithoutRestauranteNestedInput
    pedidos?: PedidoUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutReservasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUncheckedUpdateOneWithoutRestauranteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type UsuarioCreateWithoutHistoricoInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
  }

  export type UsuarioUncheckedCreateWithoutHistoricoInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type UsuarioCreateOrConnectWithoutHistoricoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
  }

  export type RestauranteCreateWithoutHistoricoUsuariosInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaCreateNestedOneWithoutRestauranteInput
    reservas?: ReservaCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutHistoricoUsuariosInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaUncheckedCreateNestedOneWithoutRestauranteInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutRestauranteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutHistoricoUsuariosInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutHistoricoUsuariosInput, RestauranteUncheckedCreateWithoutHistoricoUsuariosInput>
  }

  export type UsuarioUpsertWithoutHistoricoInput = {
    update: XOR<UsuarioUpdateWithoutHistoricoInput, UsuarioUncheckedUpdateWithoutHistoricoInput>
    create: XOR<UsuarioCreateWithoutHistoricoInput, UsuarioUncheckedCreateWithoutHistoricoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistoricoInput, UsuarioUncheckedUpdateWithoutHistoricoInput>
  }

  export type UsuarioUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RestauranteUpsertWithoutHistoricoUsuariosInput = {
    update: XOR<RestauranteUpdateWithoutHistoricoUsuariosInput, RestauranteUncheckedUpdateWithoutHistoricoUsuariosInput>
    create: XOR<RestauranteCreateWithoutHistoricoUsuariosInput, RestauranteUncheckedCreateWithoutHistoricoUsuariosInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutHistoricoUsuariosInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutHistoricoUsuariosInput, RestauranteUncheckedUpdateWithoutHistoricoUsuariosInput>
  }

  export type RestauranteUpdateWithoutHistoricoUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUpdateOneWithoutRestauranteNestedInput
    reservas?: ReservaUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutHistoricoUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUncheckedUpdateOneWithoutRestauranteNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutRestauranteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type UsuarioCreateWithoutPedidosInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
    historico?: HistoricoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type RestauranteCreateWithoutPedidosInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaCreateNestedOneWithoutRestauranteInput
    reservas?: ReservaCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteUncheckedCreateWithoutPedidosInput = {
    id?: string
    nome: string
    descricao?: string | null
    capacidade?: number
    estacoesPreparo?: number
    tempoMedioPreparo?: number
    categorias?: RestauranteCreatecategoriasInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    fila?: FilaUncheckedCreateNestedOneWithoutRestauranteInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutRestauranteInput
    historicoUsuarios?: HistoricoUsuarioUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCreateOrConnectWithoutPedidosInput = {
    where: RestauranteWhereUniqueInput
    create: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
    historico?: HistoricoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RestauranteUpsertWithoutPedidosInput = {
    update: XOR<RestauranteUpdateWithoutPedidosInput, RestauranteUncheckedUpdateWithoutPedidosInput>
    create: XOR<RestauranteCreateWithoutPedidosInput, RestauranteUncheckedCreateWithoutPedidosInput>
    where?: RestauranteWhereInput
  }

  export type RestauranteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: RestauranteWhereInput
    data: XOR<RestauranteUpdateWithoutPedidosInput, RestauranteUncheckedUpdateWithoutPedidosInput>
  }

  export type RestauranteUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUpdateOneWithoutRestauranteNestedInput
    reservas?: ReservaUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    estacoesPreparo?: IntFieldUpdateOperationsInput | number
    tempoMedioPreparo?: IntFieldUpdateOperationsInput | number
    categorias?: RestauranteUpdatecategoriasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fila?: FilaUncheckedUpdateOneWithoutRestauranteNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutRestauranteNestedInput
    historicoUsuarios?: HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type ReservaCreateManyUsuarioInput = {
    id?: string
    restauranteId: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricoUsuarioCreateManyUsuarioInput = {
    id?: string
    restauranteId: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
  }

  export type PedidoCreateManyClienteInput = {
    id?: string
    restauranteId: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutHistoricoUsuariosNestedInput
  }

  export type HistoricoUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    restauranteId?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyRestauranteInput = {
    id?: string
    usuarioId: string
    horario: Date | string
    status?: string
    isPriority?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoCreateManyRestauranteInput = {
    id?: string
    clienteId: string
    itens: JsonNullValueInput | InputJsonValue
    valorTotal?: number
    status?: string
    isPriority?: boolean
    prioridade?: number | null
    tempoPreparo?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoricoUsuarioCreateManyRestauranteInput = {
    id?: string
    usuarioId: string
    visitas?: number
    avaliacaoMedia?: number | null
    ultimaVisita?: Date | string
  }

  export type ReservaUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    itens?: JsonNullValueInput | InputJsonValue
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    prioridade?: NullableIntFieldUpdateOperationsInput | number | null
    tempoPreparo?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type HistoricoUsuarioUncheckedUpdateWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoricoUsuarioUncheckedUpdateManyWithoutRestauranteInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    visitas?: IntFieldUpdateOperationsInput | number
    avaliacaoMedia?: NullableFloatFieldUpdateOperationsInput | number | null
    ultimaVisita?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}