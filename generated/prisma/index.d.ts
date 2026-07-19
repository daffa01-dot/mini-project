
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Shelter
 * 
 */
export type Shelter = $Result.DefaultSelection<Prisma.$ShelterPayload>
/**
 * Model ShelterBank
 * 
 */
export type ShelterBank = $Result.DefaultSelection<Prisma.$ShelterBankPayload>
/**
 * Model Satwa
 * 
 */
export type Satwa = $Result.DefaultSelection<Prisma.$SatwaPayload>
/**
 * Model Donasi
 * 
 */
export type Donasi = $Result.DefaultSelection<Prisma.$DonasiPayload>
/**
 * Model Laporan
 * 
 */
export type Laporan = $Result.DefaultSelection<Prisma.$LaporanPayload>
/**
 * Model MailerLog
 * 
 */
export type MailerLog = $Result.DefaultSelection<Prisma.$MailerLogPayload>
/**
 * Model SatwaBookmark
 * 
 */
export type SatwaBookmark = $Result.DefaultSelection<Prisma.$SatwaBookmarkPayload>
/**
 * Model ShelterBookmark
 * 
 */
export type ShelterBookmark = $Result.DefaultSelection<Prisma.$ShelterBookmarkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  SHELTER: 'SHELTER',
  DONATUR: 'DONATUR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const JenisSatwa: {
  ANJING: 'ANJING',
  KUCING: 'KUCING',
  LAINNYA: 'LAINNYA'
};

export type JenisSatwa = (typeof JenisSatwa)[keyof typeof JenisSatwa]


export const KelaminSatwa: {
  JANTAN: 'JANTAN',
  BETINA: 'BETINA'
};

export type KelaminSatwa = (typeof KelaminSatwa)[keyof typeof KelaminSatwa]


export const StatusSatwa: {
  TERSEDIA: 'TERSEDIA',
  DIADOPSI: 'DIADOPSI',
  TIDAK_AKTIF: 'TIDAK_AKTIF'
};

export type StatusSatwa = (typeof StatusSatwa)[keyof typeof StatusSatwa]


export const Status: {
  MENUNGGU: 'MENUNGGU',
  DIVERIFIKASI: 'DIVERIFIKASI',
  DITOLAK: 'DITOLAK'
};

export type Status = (typeof Status)[keyof typeof Status]


export const MailerLogType: {
  donasi_berhasil: 'donasi_berhasil',
  donasi_gagal: 'donasi_gagal'
};

export type MailerLogType = (typeof MailerLogType)[keyof typeof MailerLogType]


export const MailerReferenceType: {
  donasi: 'donasi'
};

export type MailerReferenceType = (typeof MailerReferenceType)[keyof typeof MailerReferenceType]


export const MailerStatus: {
  pending: 'pending',
  success: 'success',
  failed: 'failed'
};

export type MailerStatus = (typeof MailerStatus)[keyof typeof MailerStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type JenisSatwa = $Enums.JenisSatwa

export const JenisSatwa: typeof $Enums.JenisSatwa

export type KelaminSatwa = $Enums.KelaminSatwa

export const KelaminSatwa: typeof $Enums.KelaminSatwa

export type StatusSatwa = $Enums.StatusSatwa

export const StatusSatwa: typeof $Enums.StatusSatwa

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type MailerLogType = $Enums.MailerLogType

export const MailerLogType: typeof $Enums.MailerLogType

export type MailerReferenceType = $Enums.MailerReferenceType

export const MailerReferenceType: typeof $Enums.MailerReferenceType

export type MailerStatus = $Enums.MailerStatus

export const MailerStatus: typeof $Enums.MailerStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelter`: Exposes CRUD operations for the **Shelter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelters
    * const shelters = await prisma.shelter.findMany()
    * ```
    */
  get shelter(): Prisma.ShelterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelterBank`: Exposes CRUD operations for the **ShelterBank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShelterBanks
    * const shelterBanks = await prisma.shelterBank.findMany()
    * ```
    */
  get shelterBank(): Prisma.ShelterBankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.satwa`: Exposes CRUD operations for the **Satwa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Satwas
    * const satwas = await prisma.satwa.findMany()
    * ```
    */
  get satwa(): Prisma.SatwaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donasi`: Exposes CRUD operations for the **Donasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donasis
    * const donasis = await prisma.donasi.findMany()
    * ```
    */
  get donasi(): Prisma.DonasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporan`: Exposes CRUD operations for the **Laporan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporans
    * const laporans = await prisma.laporan.findMany()
    * ```
    */
  get laporan(): Prisma.LaporanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mailerLog`: Exposes CRUD operations for the **MailerLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailerLogs
    * const mailerLogs = await prisma.mailerLog.findMany()
    * ```
    */
  get mailerLog(): Prisma.MailerLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.satwaBookmark`: Exposes CRUD operations for the **SatwaBookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SatwaBookmarks
    * const satwaBookmarks = await prisma.satwaBookmark.findMany()
    * ```
    */
  get satwaBookmark(): Prisma.SatwaBookmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelterBookmark`: Exposes CRUD operations for the **ShelterBookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShelterBookmarks
    * const shelterBookmarks = await prisma.shelterBookmark.findMany()
    * ```
    */
  get shelterBookmark(): Prisma.ShelterBookmarkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Shelter: 'Shelter',
    ShelterBank: 'ShelterBank',
    Satwa: 'Satwa',
    Donasi: 'Donasi',
    Laporan: 'Laporan',
    MailerLog: 'MailerLog',
    SatwaBookmark: 'SatwaBookmark',
    ShelterBookmark: 'ShelterBookmark'
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
      modelProps: "user" | "shelter" | "shelterBank" | "satwa" | "donasi" | "laporan" | "mailerLog" | "satwaBookmark" | "shelterBookmark"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Shelter: {
        payload: Prisma.$ShelterPayload<ExtArgs>
        fields: Prisma.ShelterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          findFirst: {
            args: Prisma.ShelterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          findMany: {
            args: Prisma.ShelterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          create: {
            args: Prisma.ShelterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          createMany: {
            args: Prisma.ShelterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          delete: {
            args: Prisma.ShelterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          update: {
            args: Prisma.ShelterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          deleteMany: {
            args: Prisma.ShelterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          upsert: {
            args: Prisma.ShelterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          aggregate: {
            args: Prisma.ShelterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelter>
          }
          groupBy: {
            args: Prisma.ShelterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelterCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterCountAggregateOutputType> | number
          }
        }
      }
      ShelterBank: {
        payload: Prisma.$ShelterBankPayload<ExtArgs>
        fields: Prisma.ShelterBankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelterBankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelterBankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>
          }
          findFirst: {
            args: Prisma.ShelterBankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelterBankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>
          }
          findMany: {
            args: Prisma.ShelterBankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>[]
          }
          create: {
            args: Prisma.ShelterBankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>
          }
          createMany: {
            args: Prisma.ShelterBankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelterBankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>[]
          }
          delete: {
            args: Prisma.ShelterBankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>
          }
          update: {
            args: Prisma.ShelterBankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>
          }
          deleteMany: {
            args: Prisma.ShelterBankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelterBankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelterBankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>[]
          }
          upsert: {
            args: Prisma.ShelterBankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBankPayload>
          }
          aggregate: {
            args: Prisma.ShelterBankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelterBank>
          }
          groupBy: {
            args: Prisma.ShelterBankGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterBankGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelterBankCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterBankCountAggregateOutputType> | number
          }
        }
      }
      Satwa: {
        payload: Prisma.$SatwaPayload<ExtArgs>
        fields: Prisma.SatwaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatwaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatwaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>
          }
          findFirst: {
            args: Prisma.SatwaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatwaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>
          }
          findMany: {
            args: Prisma.SatwaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>[]
          }
          create: {
            args: Prisma.SatwaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>
          }
          createMany: {
            args: Prisma.SatwaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SatwaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>[]
          }
          delete: {
            args: Prisma.SatwaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>
          }
          update: {
            args: Prisma.SatwaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>
          }
          deleteMany: {
            args: Prisma.SatwaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SatwaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SatwaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>[]
          }
          upsert: {
            args: Prisma.SatwaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaPayload>
          }
          aggregate: {
            args: Prisma.SatwaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatwa>
          }
          groupBy: {
            args: Prisma.SatwaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatwaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatwaCountArgs<ExtArgs>
            result: $Utils.Optional<SatwaCountAggregateOutputType> | number
          }
        }
      }
      Donasi: {
        payload: Prisma.$DonasiPayload<ExtArgs>
        fields: Prisma.DonasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>
          }
          findFirst: {
            args: Prisma.DonasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>
          }
          findMany: {
            args: Prisma.DonasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>[]
          }
          create: {
            args: Prisma.DonasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>
          }
          createMany: {
            args: Prisma.DonasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>[]
          }
          delete: {
            args: Prisma.DonasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>
          }
          update: {
            args: Prisma.DonasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>
          }
          deleteMany: {
            args: Prisma.DonasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>[]
          }
          upsert: {
            args: Prisma.DonasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonasiPayload>
          }
          aggregate: {
            args: Prisma.DonasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonasi>
          }
          groupBy: {
            args: Prisma.DonasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonasiCountArgs<ExtArgs>
            result: $Utils.Optional<DonasiCountAggregateOutputType> | number
          }
        }
      }
      Laporan: {
        payload: Prisma.$LaporanPayload<ExtArgs>
        fields: Prisma.LaporanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findFirst: {
            args: Prisma.LaporanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findMany: {
            args: Prisma.LaporanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          create: {
            args: Prisma.LaporanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          createMany: {
            args: Prisma.LaporanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          delete: {
            args: Prisma.LaporanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          update: {
            args: Prisma.LaporanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          upsert: {
            args: Prisma.LaporanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          aggregate: {
            args: Prisma.LaporanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan>
          }
          groupBy: {
            args: Prisma.LaporanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanCountAggregateOutputType> | number
          }
        }
      }
      MailerLog: {
        payload: Prisma.$MailerLogPayload<ExtArgs>
        fields: Prisma.MailerLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailerLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailerLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>
          }
          findFirst: {
            args: Prisma.MailerLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailerLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>
          }
          findMany: {
            args: Prisma.MailerLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>[]
          }
          create: {
            args: Prisma.MailerLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>
          }
          createMany: {
            args: Prisma.MailerLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MailerLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>[]
          }
          delete: {
            args: Prisma.MailerLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>
          }
          update: {
            args: Prisma.MailerLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>
          }
          deleteMany: {
            args: Prisma.MailerLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MailerLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MailerLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>[]
          }
          upsert: {
            args: Prisma.MailerLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailerLogPayload>
          }
          aggregate: {
            args: Prisma.MailerLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMailerLog>
          }
          groupBy: {
            args: Prisma.MailerLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MailerLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailerLogCountArgs<ExtArgs>
            result: $Utils.Optional<MailerLogCountAggregateOutputType> | number
          }
        }
      }
      SatwaBookmark: {
        payload: Prisma.$SatwaBookmarkPayload<ExtArgs>
        fields: Prisma.SatwaBookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatwaBookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatwaBookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>
          }
          findFirst: {
            args: Prisma.SatwaBookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatwaBookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>
          }
          findMany: {
            args: Prisma.SatwaBookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>[]
          }
          create: {
            args: Prisma.SatwaBookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>
          }
          createMany: {
            args: Prisma.SatwaBookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SatwaBookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>[]
          }
          delete: {
            args: Prisma.SatwaBookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>
          }
          update: {
            args: Prisma.SatwaBookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>
          }
          deleteMany: {
            args: Prisma.SatwaBookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SatwaBookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SatwaBookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>[]
          }
          upsert: {
            args: Prisma.SatwaBookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatwaBookmarkPayload>
          }
          aggregate: {
            args: Prisma.SatwaBookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatwaBookmark>
          }
          groupBy: {
            args: Prisma.SatwaBookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatwaBookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatwaBookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<SatwaBookmarkCountAggregateOutputType> | number
          }
        }
      }
      ShelterBookmark: {
        payload: Prisma.$ShelterBookmarkPayload<ExtArgs>
        fields: Prisma.ShelterBookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelterBookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelterBookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>
          }
          findFirst: {
            args: Prisma.ShelterBookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelterBookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>
          }
          findMany: {
            args: Prisma.ShelterBookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>[]
          }
          create: {
            args: Prisma.ShelterBookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>
          }
          createMany: {
            args: Prisma.ShelterBookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelterBookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>[]
          }
          delete: {
            args: Prisma.ShelterBookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>
          }
          update: {
            args: Prisma.ShelterBookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>
          }
          deleteMany: {
            args: Prisma.ShelterBookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelterBookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelterBookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>[]
          }
          upsert: {
            args: Prisma.ShelterBookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterBookmarkPayload>
          }
          aggregate: {
            args: Prisma.ShelterBookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelterBookmark>
          }
          groupBy: {
            args: Prisma.ShelterBookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterBookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelterBookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterBookmarkCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    shelter?: ShelterOmit
    shelterBank?: ShelterBankOmit
    satwa?: SatwaOmit
    donasi?: DonasiOmit
    laporan?: LaporanOmit
    mailerLog?: MailerLogOmit
    satwaBookmark?: SatwaBookmarkOmit
    shelterBookmark?: ShelterBookmarkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    satwaBookmarks: number
    donasi: number
    shelterBookmarks: number
    mailerLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwaBookmarks?: boolean | UserCountOutputTypeCountSatwaBookmarksArgs
    donasi?: boolean | UserCountOutputTypeCountDonasiArgs
    shelterBookmarks?: boolean | UserCountOutputTypeCountShelterBookmarksArgs
    mailerLogs?: boolean | UserCountOutputTypeCountMailerLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSatwaBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatwaBookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonasiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShelterBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterBookmarkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMailerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailerLogWhereInput
  }


  /**
   * Count Type ShelterCountOutputType
   */

  export type ShelterCountOutputType = {
    donasi: number
    satwa: number
    bookmarks: number
  }

  export type ShelterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donasi?: boolean | ShelterCountOutputTypeCountDonasiArgs
    satwa?: boolean | ShelterCountOutputTypeCountSatwaArgs
    bookmarks?: boolean | ShelterCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterCountOutputType
     */
    select?: ShelterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountDonasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonasiWhereInput
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountSatwaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatwaWhereInput
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterBookmarkWhereInput
  }


  /**
   * Count Type SatwaCountOutputType
   */

  export type SatwaCountOutputType = {
    bookmarks: number
    donasi: number
    laporan: number
  }

  export type SatwaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | SatwaCountOutputTypeCountBookmarksArgs
    donasi?: boolean | SatwaCountOutputTypeCountDonasiArgs
    laporan?: boolean | SatwaCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * SatwaCountOutputType without action
   */
  export type SatwaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaCountOutputType
     */
    select?: SatwaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SatwaCountOutputType without action
   */
  export type SatwaCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatwaBookmarkWhereInput
  }

  /**
   * SatwaCountOutputType without action
   */
  export type SatwaCountOutputTypeCountDonasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonasiWhereInput
  }

  /**
   * SatwaCountOutputType without action
   */
  export type SatwaCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    namaLengkap: string | null
    noWhatsapp: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    namaLengkap: string | null
    noWhatsapp: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    namaLengkap: number
    noWhatsapp: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    namaLengkap?: true
    noWhatsapp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    namaLengkap?: true
    noWhatsapp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    namaLengkap?: true
    noWhatsapp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    namaLengkap: string
    noWhatsapp: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    namaLengkap?: boolean
    noWhatsapp?: boolean
    satwaBookmarks?: boolean | User$satwaBookmarksArgs<ExtArgs>
    donasi?: boolean | User$donasiArgs<ExtArgs>
    shelter?: boolean | User$shelterArgs<ExtArgs>
    shelterBookmarks?: boolean | User$shelterBookmarksArgs<ExtArgs>
    mailerLogs?: boolean | User$mailerLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    namaLengkap?: boolean
    noWhatsapp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    namaLengkap?: boolean
    noWhatsapp?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    namaLengkap?: boolean
    noWhatsapp?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "deletedAt" | "namaLengkap" | "noWhatsapp", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwaBookmarks?: boolean | User$satwaBookmarksArgs<ExtArgs>
    donasi?: boolean | User$donasiArgs<ExtArgs>
    shelter?: boolean | User$shelterArgs<ExtArgs>
    shelterBookmarks?: boolean | User$shelterBookmarksArgs<ExtArgs>
    mailerLogs?: boolean | User$mailerLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      satwaBookmarks: Prisma.$SatwaBookmarkPayload<ExtArgs>[]
      donasi: Prisma.$DonasiPayload<ExtArgs>[]
      shelter: Prisma.$ShelterPayload<ExtArgs> | null
      shelterBookmarks: Prisma.$ShelterBookmarkPayload<ExtArgs>[]
      mailerLogs: Prisma.$MailerLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      namaLengkap: string
      noWhatsapp: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    satwaBookmarks<T extends User$satwaBookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$satwaBookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donasi<T extends User$donasiArgs<ExtArgs> = {}>(args?: Subset<T, User$donasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shelter<T extends User$shelterArgs<ExtArgs> = {}>(args?: Subset<T, User$shelterArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shelterBookmarks<T extends User$shelterBookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$shelterBookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mailerLogs<T extends User$mailerLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$mailerLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly namaLengkap: FieldRef<"User", 'String'>
    readonly noWhatsapp: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.satwaBookmarks
   */
  export type User$satwaBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    where?: SatwaBookmarkWhereInput
    orderBy?: SatwaBookmarkOrderByWithRelationInput | SatwaBookmarkOrderByWithRelationInput[]
    cursor?: SatwaBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatwaBookmarkScalarFieldEnum | SatwaBookmarkScalarFieldEnum[]
  }

  /**
   * User.donasi
   */
  export type User$donasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    where?: DonasiWhereInput
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    cursor?: DonasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonasiScalarFieldEnum | DonasiScalarFieldEnum[]
  }

  /**
   * User.shelter
   */
  export type User$shelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    where?: ShelterWhereInput
  }

  /**
   * User.shelterBookmarks
   */
  export type User$shelterBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    where?: ShelterBookmarkWhereInput
    orderBy?: ShelterBookmarkOrderByWithRelationInput | ShelterBookmarkOrderByWithRelationInput[]
    cursor?: ShelterBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelterBookmarkScalarFieldEnum | ShelterBookmarkScalarFieldEnum[]
  }

  /**
   * User.mailerLogs
   */
  export type User$mailerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    where?: MailerLogWhereInput
    orderBy?: MailerLogOrderByWithRelationInput | MailerLogOrderByWithRelationInput[]
    cursor?: MailerLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailerLogScalarFieldEnum | MailerLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Shelter
   */

  export type AggregateShelter = {
    _count: ShelterCountAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  export type ShelterMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    alamatLengkap: string | null
    status: $Enums.Status | null
    deskripsi: string | null
    fotoBanner: string | null
    isAktif: boolean | null
    kota: string | null
    namaShelter: string | null
    noWhatsapp: string | null
  }

  export type ShelterMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    alamatLengkap: string | null
    status: $Enums.Status | null
    deskripsi: string | null
    fotoBanner: string | null
    isAktif: boolean | null
    kota: string | null
    namaShelter: string | null
    noWhatsapp: string | null
  }

  export type ShelterCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    alamatLengkap: number
    status: number
    deskripsi: number
    fotoBanner: number
    isAktif: number
    kota: number
    namaShelter: number
    noWhatsapp: number
    _all: number
  }


  export type ShelterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    alamatLengkap?: true
    status?: true
    deskripsi?: true
    fotoBanner?: true
    isAktif?: true
    kota?: true
    namaShelter?: true
    noWhatsapp?: true
  }

  export type ShelterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    alamatLengkap?: true
    status?: true
    deskripsi?: true
    fotoBanner?: true
    isAktif?: true
    kota?: true
    namaShelter?: true
    noWhatsapp?: true
  }

  export type ShelterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    alamatLengkap?: true
    status?: true
    deskripsi?: true
    fotoBanner?: true
    isAktif?: true
    kota?: true
    namaShelter?: true
    noWhatsapp?: true
    _all?: true
  }

  export type ShelterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelter to aggregate.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shelters
    **/
    _count?: true | ShelterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterMaxAggregateInputType
  }

  export type GetShelterAggregateType<T extends ShelterAggregateArgs> = {
        [P in keyof T & keyof AggregateShelter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelter[P]>
      : GetScalarType<T[P], AggregateShelter[P]>
  }




  export type ShelterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterWhereInput
    orderBy?: ShelterOrderByWithAggregationInput | ShelterOrderByWithAggregationInput[]
    by: ShelterScalarFieldEnum[] | ShelterScalarFieldEnum
    having?: ShelterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterCountAggregateInputType | true
    _min?: ShelterMinAggregateInputType
    _max?: ShelterMaxAggregateInputType
  }

  export type ShelterGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string
    alamatLengkap: string
    status: $Enums.Status
    deskripsi: string
    fotoBanner: string | null
    isAktif: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    _count: ShelterCountAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  type GetShelterGroupByPayload<T extends ShelterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterGroupByOutputType[P]>
        }
      >
    >


  export type ShelterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    alamatLengkap?: boolean
    status?: boolean
    deskripsi?: boolean
    fotoBanner?: boolean
    isAktif?: boolean
    kota?: boolean
    namaShelter?: boolean
    noWhatsapp?: boolean
    donasi?: boolean | Shelter$donasiArgs<ExtArgs>
    satwa?: boolean | Shelter$satwaArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rekening?: boolean | Shelter$rekeningArgs<ExtArgs>
    bookmarks?: boolean | Shelter$bookmarksArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    alamatLengkap?: boolean
    status?: boolean
    deskripsi?: boolean
    fotoBanner?: boolean
    isAktif?: boolean
    kota?: boolean
    namaShelter?: boolean
    noWhatsapp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    alamatLengkap?: boolean
    status?: boolean
    deskripsi?: boolean
    fotoBanner?: boolean
    isAktif?: boolean
    kota?: boolean
    namaShelter?: boolean
    noWhatsapp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    alamatLengkap?: boolean
    status?: boolean
    deskripsi?: boolean
    fotoBanner?: boolean
    isAktif?: boolean
    kota?: boolean
    namaShelter?: boolean
    noWhatsapp?: boolean
  }

  export type ShelterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "deletedAt" | "userId" | "alamatLengkap" | "status" | "deskripsi" | "fotoBanner" | "isAktif" | "kota" | "namaShelter" | "noWhatsapp", ExtArgs["result"]["shelter"]>
  export type ShelterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donasi?: boolean | Shelter$donasiArgs<ExtArgs>
    satwa?: boolean | Shelter$satwaArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rekening?: boolean | Shelter$rekeningArgs<ExtArgs>
    bookmarks?: boolean | Shelter$bookmarksArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShelterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShelterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShelterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shelter"
    objects: {
      donasi: Prisma.$DonasiPayload<ExtArgs>[]
      satwa: Prisma.$SatwaPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      rekening: Prisma.$ShelterBankPayload<ExtArgs> | null
      bookmarks: Prisma.$ShelterBookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string
      alamatLengkap: string
      status: $Enums.Status
      deskripsi: string
      fotoBanner: string | null
      isAktif: boolean
      kota: string
      namaShelter: string
      noWhatsapp: string
    }, ExtArgs["result"]["shelter"]>
    composites: {}
  }

  type ShelterGetPayload<S extends boolean | null | undefined | ShelterDefaultArgs> = $Result.GetResult<Prisma.$ShelterPayload, S>

  type ShelterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterCountAggregateInputType | true
    }

  export interface ShelterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shelter'], meta: { name: 'Shelter' } }
    /**
     * Find zero or one Shelter that matches the filter.
     * @param {ShelterFindUniqueArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelterFindUniqueArgs>(args: SelectSubset<T, ShelterFindUniqueArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelterFindUniqueOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelterFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindFirstArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelterFindFirstArgs>(args?: SelectSubset<T, ShelterFindFirstArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindFirstOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelterFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelters
     * const shelters = await prisma.shelter.findMany()
     * 
     * // Get first 10 Shelters
     * const shelters = await prisma.shelter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelterWithIdOnly = await prisma.shelter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelterFindManyArgs>(args?: SelectSubset<T, ShelterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelter.
     * @param {ShelterCreateArgs} args - Arguments to create a Shelter.
     * @example
     * // Create one Shelter
     * const Shelter = await prisma.shelter.create({
     *   data: {
     *     // ... data to create a Shelter
     *   }
     * })
     * 
     */
    create<T extends ShelterCreateArgs>(args: SelectSubset<T, ShelterCreateArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelters.
     * @param {ShelterCreateManyArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelterCreateManyArgs>(args?: SelectSubset<T, ShelterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelters and returns the data saved in the database.
     * @param {ShelterCreateManyAndReturnArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelterCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelter.
     * @param {ShelterDeleteArgs} args - Arguments to delete one Shelter.
     * @example
     * // Delete one Shelter
     * const Shelter = await prisma.shelter.delete({
     *   where: {
     *     // ... filter to delete one Shelter
     *   }
     * })
     * 
     */
    delete<T extends ShelterDeleteArgs>(args: SelectSubset<T, ShelterDeleteArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelter.
     * @param {ShelterUpdateArgs} args - Arguments to update one Shelter.
     * @example
     * // Update one Shelter
     * const shelter = await prisma.shelter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelterUpdateArgs>(args: SelectSubset<T, ShelterUpdateArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelters.
     * @param {ShelterDeleteManyArgs} args - Arguments to filter Shelters to delete.
     * @example
     * // Delete a few Shelters
     * const { count } = await prisma.shelter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelterDeleteManyArgs>(args?: SelectSubset<T, ShelterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelterUpdateManyArgs>(args: SelectSubset<T, ShelterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters and returns the data updated in the database.
     * @param {ShelterUpdateManyAndReturnArgs} args - Arguments to update many Shelters.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShelterUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelter.
     * @param {ShelterUpsertArgs} args - Arguments to update or create a Shelter.
     * @example
     * // Update or create a Shelter
     * const shelter = await prisma.shelter.upsert({
     *   create: {
     *     // ... data to create a Shelter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelter we want to update
     *   }
     * })
     */
    upsert<T extends ShelterUpsertArgs>(args: SelectSubset<T, ShelterUpsertArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterCountArgs} args - Arguments to filter Shelters to count.
     * @example
     * // Count the number of Shelters
     * const count = await prisma.shelter.count({
     *   where: {
     *     // ... the filter for the Shelters we want to count
     *   }
     * })
    **/
    count<T extends ShelterCountArgs>(
      args?: Subset<T, ShelterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShelterAggregateArgs>(args: Subset<T, ShelterAggregateArgs>): Prisma.PrismaPromise<GetShelterAggregateType<T>>

    /**
     * Group by Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterGroupByArgs} args - Group by arguments.
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
      T extends ShelterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelterGroupByArgs['orderBy'] }
        : { orderBy?: ShelterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShelterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shelter model
   */
  readonly fields: ShelterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shelter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donasi<T extends Shelter$donasiArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$donasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    satwa<T extends Shelter$satwaArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$satwaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rekening<T extends Shelter$rekeningArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$rekeningArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookmarks<T extends Shelter$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shelter model
   */
  interface ShelterFieldRefs {
    readonly id: FieldRef<"Shelter", 'String'>
    readonly createdAt: FieldRef<"Shelter", 'DateTime'>
    readonly updatedAt: FieldRef<"Shelter", 'DateTime'>
    readonly deletedAt: FieldRef<"Shelter", 'DateTime'>
    readonly userId: FieldRef<"Shelter", 'String'>
    readonly alamatLengkap: FieldRef<"Shelter", 'String'>
    readonly status: FieldRef<"Shelter", 'Status'>
    readonly deskripsi: FieldRef<"Shelter", 'String'>
    readonly fotoBanner: FieldRef<"Shelter", 'String'>
    readonly isAktif: FieldRef<"Shelter", 'Boolean'>
    readonly kota: FieldRef<"Shelter", 'String'>
    readonly namaShelter: FieldRef<"Shelter", 'String'>
    readonly noWhatsapp: FieldRef<"Shelter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shelter findUnique
   */
  export type ShelterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter findUniqueOrThrow
   */
  export type ShelterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter findFirst
   */
  export type ShelterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter findFirstOrThrow
   */
  export type ShelterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter findMany
   */
  export type ShelterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelters to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter create
   */
  export type ShelterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The data needed to create a Shelter.
     */
    data: XOR<ShelterCreateInput, ShelterUncheckedCreateInput>
  }

  /**
   * Shelter createMany
   */
  export type ShelterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shelters.
     */
    data: ShelterCreateManyInput | ShelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shelter createManyAndReturn
   */
  export type ShelterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * The data used to create many Shelters.
     */
    data: ShelterCreateManyInput | ShelterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelter update
   */
  export type ShelterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The data needed to update a Shelter.
     */
    data: XOR<ShelterUpdateInput, ShelterUncheckedUpdateInput>
    /**
     * Choose, which Shelter to update.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter updateMany
   */
  export type ShelterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shelters.
     */
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyInput>
    /**
     * Filter which Shelters to update
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to update.
     */
    limit?: number
  }

  /**
   * Shelter updateManyAndReturn
   */
  export type ShelterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * The data used to update Shelters.
     */
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyInput>
    /**
     * Filter which Shelters to update
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelter upsert
   */
  export type ShelterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The filter to search for the Shelter to update in case it exists.
     */
    where: ShelterWhereUniqueInput
    /**
     * In case the Shelter found by the `where` argument doesn't exist, create a new Shelter with this data.
     */
    create: XOR<ShelterCreateInput, ShelterUncheckedCreateInput>
    /**
     * In case the Shelter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelterUpdateInput, ShelterUncheckedUpdateInput>
  }

  /**
   * Shelter delete
   */
  export type ShelterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter which Shelter to delete.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter deleteMany
   */
  export type ShelterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelters to delete
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to delete.
     */
    limit?: number
  }

  /**
   * Shelter.donasi
   */
  export type Shelter$donasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    where?: DonasiWhereInput
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    cursor?: DonasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonasiScalarFieldEnum | DonasiScalarFieldEnum[]
  }

  /**
   * Shelter.satwa
   */
  export type Shelter$satwaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    where?: SatwaWhereInput
    orderBy?: SatwaOrderByWithRelationInput | SatwaOrderByWithRelationInput[]
    cursor?: SatwaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatwaScalarFieldEnum | SatwaScalarFieldEnum[]
  }

  /**
   * Shelter.rekening
   */
  export type Shelter$rekeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    where?: ShelterBankWhereInput
  }

  /**
   * Shelter.bookmarks
   */
  export type Shelter$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    where?: ShelterBookmarkWhereInput
    orderBy?: ShelterBookmarkOrderByWithRelationInput | ShelterBookmarkOrderByWithRelationInput[]
    cursor?: ShelterBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelterBookmarkScalarFieldEnum | ShelterBookmarkScalarFieldEnum[]
  }

  /**
   * Shelter without action
   */
  export type ShelterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
  }


  /**
   * Model ShelterBank
   */

  export type AggregateShelterBank = {
    _count: ShelterBankCountAggregateOutputType | null
    _min: ShelterBankMinAggregateOutputType | null
    _max: ShelterBankMaxAggregateOutputType | null
  }

  export type ShelterBankMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    namaBank: string | null
    nomorRekening: string | null
    atasNamaRekening: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShelterBankMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    namaBank: string | null
    nomorRekening: string | null
    atasNamaRekening: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShelterBankCountAggregateOutputType = {
    id: number
    shelterId: number
    namaBank: number
    nomorRekening: number
    atasNamaRekening: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShelterBankMinAggregateInputType = {
    id?: true
    shelterId?: true
    namaBank?: true
    nomorRekening?: true
    atasNamaRekening?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShelterBankMaxAggregateInputType = {
    id?: true
    shelterId?: true
    namaBank?: true
    nomorRekening?: true
    atasNamaRekening?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShelterBankCountAggregateInputType = {
    id?: true
    shelterId?: true
    namaBank?: true
    nomorRekening?: true
    atasNamaRekening?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShelterBankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShelterBank to aggregate.
     */
    where?: ShelterBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBanks to fetch.
     */
    orderBy?: ShelterBankOrderByWithRelationInput | ShelterBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelterBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShelterBanks
    **/
    _count?: true | ShelterBankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterBankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterBankMaxAggregateInputType
  }

  export type GetShelterBankAggregateType<T extends ShelterBankAggregateArgs> = {
        [P in keyof T & keyof AggregateShelterBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelterBank[P]>
      : GetScalarType<T[P], AggregateShelterBank[P]>
  }




  export type ShelterBankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterBankWhereInput
    orderBy?: ShelterBankOrderByWithAggregationInput | ShelterBankOrderByWithAggregationInput[]
    by: ShelterBankScalarFieldEnum[] | ShelterBankScalarFieldEnum
    having?: ShelterBankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterBankCountAggregateInputType | true
    _min?: ShelterBankMinAggregateInputType
    _max?: ShelterBankMaxAggregateInputType
  }

  export type ShelterBankGroupByOutputType = {
    id: string
    shelterId: string
    namaBank: string
    nomorRekening: string
    atasNamaRekening: string
    createdAt: Date
    updatedAt: Date
    _count: ShelterBankCountAggregateOutputType | null
    _min: ShelterBankMinAggregateOutputType | null
    _max: ShelterBankMaxAggregateOutputType | null
  }

  type GetShelterBankGroupByPayload<T extends ShelterBankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterBankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterBankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterBankGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterBankGroupByOutputType[P]>
        }
      >
    >


  export type ShelterBankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    namaBank?: boolean
    nomorRekening?: boolean
    atasNamaRekening?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelterBank"]>

  export type ShelterBankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    namaBank?: boolean
    nomorRekening?: boolean
    atasNamaRekening?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelterBank"]>

  export type ShelterBankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    namaBank?: boolean
    nomorRekening?: boolean
    atasNamaRekening?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelterBank"]>

  export type ShelterBankSelectScalar = {
    id?: boolean
    shelterId?: boolean
    namaBank?: boolean
    nomorRekening?: boolean
    atasNamaRekening?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShelterBankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "namaBank" | "nomorRekening" | "atasNamaRekening" | "createdAt" | "updatedAt", ExtArgs["result"]["shelterBank"]>
  export type ShelterBankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type ShelterBankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type ShelterBankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }

  export type $ShelterBankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShelterBank"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string
      namaBank: string
      nomorRekening: string
      atasNamaRekening: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shelterBank"]>
    composites: {}
  }

  type ShelterBankGetPayload<S extends boolean | null | undefined | ShelterBankDefaultArgs> = $Result.GetResult<Prisma.$ShelterBankPayload, S>

  type ShelterBankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelterBankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterBankCountAggregateInputType | true
    }

  export interface ShelterBankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShelterBank'], meta: { name: 'ShelterBank' } }
    /**
     * Find zero or one ShelterBank that matches the filter.
     * @param {ShelterBankFindUniqueArgs} args - Arguments to find a ShelterBank
     * @example
     * // Get one ShelterBank
     * const shelterBank = await prisma.shelterBank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelterBankFindUniqueArgs>(args: SelectSubset<T, ShelterBankFindUniqueArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShelterBank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelterBankFindUniqueOrThrowArgs} args - Arguments to find a ShelterBank
     * @example
     * // Get one ShelterBank
     * const shelterBank = await prisma.shelterBank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelterBankFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelterBankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShelterBank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankFindFirstArgs} args - Arguments to find a ShelterBank
     * @example
     * // Get one ShelterBank
     * const shelterBank = await prisma.shelterBank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelterBankFindFirstArgs>(args?: SelectSubset<T, ShelterBankFindFirstArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShelterBank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankFindFirstOrThrowArgs} args - Arguments to find a ShelterBank
     * @example
     * // Get one ShelterBank
     * const shelterBank = await prisma.shelterBank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelterBankFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelterBankFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShelterBanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShelterBanks
     * const shelterBanks = await prisma.shelterBank.findMany()
     * 
     * // Get first 10 ShelterBanks
     * const shelterBanks = await prisma.shelterBank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelterBankWithIdOnly = await prisma.shelterBank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelterBankFindManyArgs>(args?: SelectSubset<T, ShelterBankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShelterBank.
     * @param {ShelterBankCreateArgs} args - Arguments to create a ShelterBank.
     * @example
     * // Create one ShelterBank
     * const ShelterBank = await prisma.shelterBank.create({
     *   data: {
     *     // ... data to create a ShelterBank
     *   }
     * })
     * 
     */
    create<T extends ShelterBankCreateArgs>(args: SelectSubset<T, ShelterBankCreateArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShelterBanks.
     * @param {ShelterBankCreateManyArgs} args - Arguments to create many ShelterBanks.
     * @example
     * // Create many ShelterBanks
     * const shelterBank = await prisma.shelterBank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelterBankCreateManyArgs>(args?: SelectSubset<T, ShelterBankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShelterBanks and returns the data saved in the database.
     * @param {ShelterBankCreateManyAndReturnArgs} args - Arguments to create many ShelterBanks.
     * @example
     * // Create many ShelterBanks
     * const shelterBank = await prisma.shelterBank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShelterBanks and only return the `id`
     * const shelterBankWithIdOnly = await prisma.shelterBank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelterBankCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelterBankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShelterBank.
     * @param {ShelterBankDeleteArgs} args - Arguments to delete one ShelterBank.
     * @example
     * // Delete one ShelterBank
     * const ShelterBank = await prisma.shelterBank.delete({
     *   where: {
     *     // ... filter to delete one ShelterBank
     *   }
     * })
     * 
     */
    delete<T extends ShelterBankDeleteArgs>(args: SelectSubset<T, ShelterBankDeleteArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShelterBank.
     * @param {ShelterBankUpdateArgs} args - Arguments to update one ShelterBank.
     * @example
     * // Update one ShelterBank
     * const shelterBank = await prisma.shelterBank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelterBankUpdateArgs>(args: SelectSubset<T, ShelterBankUpdateArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShelterBanks.
     * @param {ShelterBankDeleteManyArgs} args - Arguments to filter ShelterBanks to delete.
     * @example
     * // Delete a few ShelterBanks
     * const { count } = await prisma.shelterBank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelterBankDeleteManyArgs>(args?: SelectSubset<T, ShelterBankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShelterBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShelterBanks
     * const shelterBank = await prisma.shelterBank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelterBankUpdateManyArgs>(args: SelectSubset<T, ShelterBankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShelterBanks and returns the data updated in the database.
     * @param {ShelterBankUpdateManyAndReturnArgs} args - Arguments to update many ShelterBanks.
     * @example
     * // Update many ShelterBanks
     * const shelterBank = await prisma.shelterBank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShelterBanks and only return the `id`
     * const shelterBankWithIdOnly = await prisma.shelterBank.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShelterBankUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelterBankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShelterBank.
     * @param {ShelterBankUpsertArgs} args - Arguments to update or create a ShelterBank.
     * @example
     * // Update or create a ShelterBank
     * const shelterBank = await prisma.shelterBank.upsert({
     *   create: {
     *     // ... data to create a ShelterBank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShelterBank we want to update
     *   }
     * })
     */
    upsert<T extends ShelterBankUpsertArgs>(args: SelectSubset<T, ShelterBankUpsertArgs<ExtArgs>>): Prisma__ShelterBankClient<$Result.GetResult<Prisma.$ShelterBankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShelterBanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankCountArgs} args - Arguments to filter ShelterBanks to count.
     * @example
     * // Count the number of ShelterBanks
     * const count = await prisma.shelterBank.count({
     *   where: {
     *     // ... the filter for the ShelterBanks we want to count
     *   }
     * })
    **/
    count<T extends ShelterBankCountArgs>(
      args?: Subset<T, ShelterBankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterBankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShelterBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShelterBankAggregateArgs>(args: Subset<T, ShelterBankAggregateArgs>): Prisma.PrismaPromise<GetShelterBankAggregateType<T>>

    /**
     * Group by ShelterBank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBankGroupByArgs} args - Group by arguments.
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
      T extends ShelterBankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelterBankGroupByArgs['orderBy'] }
        : { orderBy?: ShelterBankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShelterBankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShelterBank model
   */
  readonly fields: ShelterBankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShelterBank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelterBankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShelterBank model
   */
  interface ShelterBankFieldRefs {
    readonly id: FieldRef<"ShelterBank", 'String'>
    readonly shelterId: FieldRef<"ShelterBank", 'String'>
    readonly namaBank: FieldRef<"ShelterBank", 'String'>
    readonly nomorRekening: FieldRef<"ShelterBank", 'String'>
    readonly atasNamaRekening: FieldRef<"ShelterBank", 'String'>
    readonly createdAt: FieldRef<"ShelterBank", 'DateTime'>
    readonly updatedAt: FieldRef<"ShelterBank", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShelterBank findUnique
   */
  export type ShelterBankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBank to fetch.
     */
    where: ShelterBankWhereUniqueInput
  }

  /**
   * ShelterBank findUniqueOrThrow
   */
  export type ShelterBankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBank to fetch.
     */
    where: ShelterBankWhereUniqueInput
  }

  /**
   * ShelterBank findFirst
   */
  export type ShelterBankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBank to fetch.
     */
    where?: ShelterBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBanks to fetch.
     */
    orderBy?: ShelterBankOrderByWithRelationInput | ShelterBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShelterBanks.
     */
    cursor?: ShelterBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShelterBanks.
     */
    distinct?: ShelterBankScalarFieldEnum | ShelterBankScalarFieldEnum[]
  }

  /**
   * ShelterBank findFirstOrThrow
   */
  export type ShelterBankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBank to fetch.
     */
    where?: ShelterBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBanks to fetch.
     */
    orderBy?: ShelterBankOrderByWithRelationInput | ShelterBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShelterBanks.
     */
    cursor?: ShelterBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShelterBanks.
     */
    distinct?: ShelterBankScalarFieldEnum | ShelterBankScalarFieldEnum[]
  }

  /**
   * ShelterBank findMany
   */
  export type ShelterBankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBanks to fetch.
     */
    where?: ShelterBankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBanks to fetch.
     */
    orderBy?: ShelterBankOrderByWithRelationInput | ShelterBankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShelterBanks.
     */
    cursor?: ShelterBankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBanks.
     */
    skip?: number
    distinct?: ShelterBankScalarFieldEnum | ShelterBankScalarFieldEnum[]
  }

  /**
   * ShelterBank create
   */
  export type ShelterBankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * The data needed to create a ShelterBank.
     */
    data: XOR<ShelterBankCreateInput, ShelterBankUncheckedCreateInput>
  }

  /**
   * ShelterBank createMany
   */
  export type ShelterBankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShelterBanks.
     */
    data: ShelterBankCreateManyInput | ShelterBankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShelterBank createManyAndReturn
   */
  export type ShelterBankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * The data used to create many ShelterBanks.
     */
    data: ShelterBankCreateManyInput | ShelterBankCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShelterBank update
   */
  export type ShelterBankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * The data needed to update a ShelterBank.
     */
    data: XOR<ShelterBankUpdateInput, ShelterBankUncheckedUpdateInput>
    /**
     * Choose, which ShelterBank to update.
     */
    where: ShelterBankWhereUniqueInput
  }

  /**
   * ShelterBank updateMany
   */
  export type ShelterBankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShelterBanks.
     */
    data: XOR<ShelterBankUpdateManyMutationInput, ShelterBankUncheckedUpdateManyInput>
    /**
     * Filter which ShelterBanks to update
     */
    where?: ShelterBankWhereInput
    /**
     * Limit how many ShelterBanks to update.
     */
    limit?: number
  }

  /**
   * ShelterBank updateManyAndReturn
   */
  export type ShelterBankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * The data used to update ShelterBanks.
     */
    data: XOR<ShelterBankUpdateManyMutationInput, ShelterBankUncheckedUpdateManyInput>
    /**
     * Filter which ShelterBanks to update
     */
    where?: ShelterBankWhereInput
    /**
     * Limit how many ShelterBanks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShelterBank upsert
   */
  export type ShelterBankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * The filter to search for the ShelterBank to update in case it exists.
     */
    where: ShelterBankWhereUniqueInput
    /**
     * In case the ShelterBank found by the `where` argument doesn't exist, create a new ShelterBank with this data.
     */
    create: XOR<ShelterBankCreateInput, ShelterBankUncheckedCreateInput>
    /**
     * In case the ShelterBank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelterBankUpdateInput, ShelterBankUncheckedUpdateInput>
  }

  /**
   * ShelterBank delete
   */
  export type ShelterBankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
    /**
     * Filter which ShelterBank to delete.
     */
    where: ShelterBankWhereUniqueInput
  }

  /**
   * ShelterBank deleteMany
   */
  export type ShelterBankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShelterBanks to delete
     */
    where?: ShelterBankWhereInput
    /**
     * Limit how many ShelterBanks to delete.
     */
    limit?: number
  }

  /**
   * ShelterBank without action
   */
  export type ShelterBankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBank
     */
    select?: ShelterBankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBank
     */
    omit?: ShelterBankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBankInclude<ExtArgs> | null
  }


  /**
   * Model Satwa
   */

  export type AggregateSatwa = {
    _count: SatwaCountAggregateOutputType | null
    _avg: SatwaAvgAggregateOutputType | null
    _sum: SatwaSumAggregateOutputType | null
    _min: SatwaMinAggregateOutputType | null
    _max: SatwaMaxAggregateOutputType | null
  }

  export type SatwaAvgAggregateOutputType = {
    umur: number | null
    danaTerkumpul: number | null
  }

  export type SatwaSumAggregateOutputType = {
    umur: number | null
    danaTerkumpul: number | null
  }

  export type SatwaMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    nama: string | null
    jenis: $Enums.JenisSatwa | null
    ras: string | null
    umur: number | null
    kelamin: $Enums.KelaminSatwa | null
    foto: string | null
    deskripsi: string | null
    danaTerkumpul: number | null
    status: $Enums.StatusSatwa | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SatwaMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    nama: string | null
    jenis: $Enums.JenisSatwa | null
    ras: string | null
    umur: number | null
    kelamin: $Enums.KelaminSatwa | null
    foto: string | null
    deskripsi: string | null
    danaTerkumpul: number | null
    status: $Enums.StatusSatwa | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SatwaCountAggregateOutputType = {
    id: number
    shelterId: number
    nama: number
    jenis: number
    ras: number
    umur: number
    kelamin: number
    foto: number
    deskripsi: number
    danaTerkumpul: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SatwaAvgAggregateInputType = {
    umur?: true
    danaTerkumpul?: true
  }

  export type SatwaSumAggregateInputType = {
    umur?: true
    danaTerkumpul?: true
  }

  export type SatwaMinAggregateInputType = {
    id?: true
    shelterId?: true
    nama?: true
    jenis?: true
    ras?: true
    umur?: true
    kelamin?: true
    foto?: true
    deskripsi?: true
    danaTerkumpul?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SatwaMaxAggregateInputType = {
    id?: true
    shelterId?: true
    nama?: true
    jenis?: true
    ras?: true
    umur?: true
    kelamin?: true
    foto?: true
    deskripsi?: true
    danaTerkumpul?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SatwaCountAggregateInputType = {
    id?: true
    shelterId?: true
    nama?: true
    jenis?: true
    ras?: true
    umur?: true
    kelamin?: true
    foto?: true
    deskripsi?: true
    danaTerkumpul?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SatwaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Satwa to aggregate.
     */
    where?: SatwaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satwas to fetch.
     */
    orderBy?: SatwaOrderByWithRelationInput | SatwaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatwaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satwas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satwas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Satwas
    **/
    _count?: true | SatwaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SatwaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SatwaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatwaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatwaMaxAggregateInputType
  }

  export type GetSatwaAggregateType<T extends SatwaAggregateArgs> = {
        [P in keyof T & keyof AggregateSatwa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatwa[P]>
      : GetScalarType<T[P], AggregateSatwa[P]>
  }




  export type SatwaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatwaWhereInput
    orderBy?: SatwaOrderByWithAggregationInput | SatwaOrderByWithAggregationInput[]
    by: SatwaScalarFieldEnum[] | SatwaScalarFieldEnum
    having?: SatwaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatwaCountAggregateInputType | true
    _avg?: SatwaAvgAggregateInputType
    _sum?: SatwaSumAggregateInputType
    _min?: SatwaMinAggregateInputType
    _max?: SatwaMaxAggregateInputType
  }

  export type SatwaGroupByOutputType = {
    id: string
    shelterId: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto: string | null
    deskripsi: string | null
    danaTerkumpul: number
    status: $Enums.StatusSatwa
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SatwaCountAggregateOutputType | null
    _avg: SatwaAvgAggregateOutputType | null
    _sum: SatwaSumAggregateOutputType | null
    _min: SatwaMinAggregateOutputType | null
    _max: SatwaMaxAggregateOutputType | null
  }

  type GetSatwaGroupByPayload<T extends SatwaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatwaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatwaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatwaGroupByOutputType[P]>
            : GetScalarType<T[P], SatwaGroupByOutputType[P]>
        }
      >
    >


  export type SatwaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    nama?: boolean
    jenis?: boolean
    ras?: boolean
    umur?: boolean
    kelamin?: boolean
    foto?: boolean
    deskripsi?: boolean
    danaTerkumpul?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    bookmarks?: boolean | Satwa$bookmarksArgs<ExtArgs>
    donasi?: boolean | Satwa$donasiArgs<ExtArgs>
    laporan?: boolean | Satwa$laporanArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    _count?: boolean | SatwaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satwa"]>

  export type SatwaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    nama?: boolean
    jenis?: boolean
    ras?: boolean
    umur?: boolean
    kelamin?: boolean
    foto?: boolean
    deskripsi?: boolean
    danaTerkumpul?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satwa"]>

  export type SatwaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    nama?: boolean
    jenis?: boolean
    ras?: boolean
    umur?: boolean
    kelamin?: boolean
    foto?: boolean
    deskripsi?: boolean
    danaTerkumpul?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satwa"]>

  export type SatwaSelectScalar = {
    id?: boolean
    shelterId?: boolean
    nama?: boolean
    jenis?: boolean
    ras?: boolean
    umur?: boolean
    kelamin?: boolean
    foto?: boolean
    deskripsi?: boolean
    danaTerkumpul?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SatwaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "nama" | "jenis" | "ras" | "umur" | "kelamin" | "foto" | "deskripsi" | "danaTerkumpul" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["satwa"]>
  export type SatwaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | Satwa$bookmarksArgs<ExtArgs>
    donasi?: boolean | Satwa$donasiArgs<ExtArgs>
    laporan?: boolean | Satwa$laporanArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    _count?: boolean | SatwaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SatwaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type SatwaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }

  export type $SatwaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Satwa"
    objects: {
      bookmarks: Prisma.$SatwaBookmarkPayload<ExtArgs>[]
      donasi: Prisma.$DonasiPayload<ExtArgs>[]
      laporan: Prisma.$LaporanPayload<ExtArgs>[]
      shelter: Prisma.$ShelterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string
      nama: string
      jenis: $Enums.JenisSatwa
      ras: string | null
      umur: number
      kelamin: $Enums.KelaminSatwa
      foto: string | null
      deskripsi: string | null
      danaTerkumpul: number
      status: $Enums.StatusSatwa
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["satwa"]>
    composites: {}
  }

  type SatwaGetPayload<S extends boolean | null | undefined | SatwaDefaultArgs> = $Result.GetResult<Prisma.$SatwaPayload, S>

  type SatwaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SatwaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SatwaCountAggregateInputType | true
    }

  export interface SatwaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Satwa'], meta: { name: 'Satwa' } }
    /**
     * Find zero or one Satwa that matches the filter.
     * @param {SatwaFindUniqueArgs} args - Arguments to find a Satwa
     * @example
     * // Get one Satwa
     * const satwa = await prisma.satwa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatwaFindUniqueArgs>(args: SelectSubset<T, SatwaFindUniqueArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Satwa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatwaFindUniqueOrThrowArgs} args - Arguments to find a Satwa
     * @example
     * // Get one Satwa
     * const satwa = await prisma.satwa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatwaFindUniqueOrThrowArgs>(args: SelectSubset<T, SatwaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Satwa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaFindFirstArgs} args - Arguments to find a Satwa
     * @example
     * // Get one Satwa
     * const satwa = await prisma.satwa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatwaFindFirstArgs>(args?: SelectSubset<T, SatwaFindFirstArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Satwa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaFindFirstOrThrowArgs} args - Arguments to find a Satwa
     * @example
     * // Get one Satwa
     * const satwa = await prisma.satwa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatwaFindFirstOrThrowArgs>(args?: SelectSubset<T, SatwaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Satwas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Satwas
     * const satwas = await prisma.satwa.findMany()
     * 
     * // Get first 10 Satwas
     * const satwas = await prisma.satwa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satwaWithIdOnly = await prisma.satwa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SatwaFindManyArgs>(args?: SelectSubset<T, SatwaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Satwa.
     * @param {SatwaCreateArgs} args - Arguments to create a Satwa.
     * @example
     * // Create one Satwa
     * const Satwa = await prisma.satwa.create({
     *   data: {
     *     // ... data to create a Satwa
     *   }
     * })
     * 
     */
    create<T extends SatwaCreateArgs>(args: SelectSubset<T, SatwaCreateArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Satwas.
     * @param {SatwaCreateManyArgs} args - Arguments to create many Satwas.
     * @example
     * // Create many Satwas
     * const satwa = await prisma.satwa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SatwaCreateManyArgs>(args?: SelectSubset<T, SatwaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Satwas and returns the data saved in the database.
     * @param {SatwaCreateManyAndReturnArgs} args - Arguments to create many Satwas.
     * @example
     * // Create many Satwas
     * const satwa = await prisma.satwa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Satwas and only return the `id`
     * const satwaWithIdOnly = await prisma.satwa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SatwaCreateManyAndReturnArgs>(args?: SelectSubset<T, SatwaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Satwa.
     * @param {SatwaDeleteArgs} args - Arguments to delete one Satwa.
     * @example
     * // Delete one Satwa
     * const Satwa = await prisma.satwa.delete({
     *   where: {
     *     // ... filter to delete one Satwa
     *   }
     * })
     * 
     */
    delete<T extends SatwaDeleteArgs>(args: SelectSubset<T, SatwaDeleteArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Satwa.
     * @param {SatwaUpdateArgs} args - Arguments to update one Satwa.
     * @example
     * // Update one Satwa
     * const satwa = await prisma.satwa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SatwaUpdateArgs>(args: SelectSubset<T, SatwaUpdateArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Satwas.
     * @param {SatwaDeleteManyArgs} args - Arguments to filter Satwas to delete.
     * @example
     * // Delete a few Satwas
     * const { count } = await prisma.satwa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SatwaDeleteManyArgs>(args?: SelectSubset<T, SatwaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Satwas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Satwas
     * const satwa = await prisma.satwa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SatwaUpdateManyArgs>(args: SelectSubset<T, SatwaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Satwas and returns the data updated in the database.
     * @param {SatwaUpdateManyAndReturnArgs} args - Arguments to update many Satwas.
     * @example
     * // Update many Satwas
     * const satwa = await prisma.satwa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Satwas and only return the `id`
     * const satwaWithIdOnly = await prisma.satwa.updateManyAndReturn({
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
    updateManyAndReturn<T extends SatwaUpdateManyAndReturnArgs>(args: SelectSubset<T, SatwaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Satwa.
     * @param {SatwaUpsertArgs} args - Arguments to update or create a Satwa.
     * @example
     * // Update or create a Satwa
     * const satwa = await prisma.satwa.upsert({
     *   create: {
     *     // ... data to create a Satwa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Satwa we want to update
     *   }
     * })
     */
    upsert<T extends SatwaUpsertArgs>(args: SelectSubset<T, SatwaUpsertArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Satwas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaCountArgs} args - Arguments to filter Satwas to count.
     * @example
     * // Count the number of Satwas
     * const count = await prisma.satwa.count({
     *   where: {
     *     // ... the filter for the Satwas we want to count
     *   }
     * })
    **/
    count<T extends SatwaCountArgs>(
      args?: Subset<T, SatwaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatwaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Satwa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatwaAggregateArgs>(args: Subset<T, SatwaAggregateArgs>): Prisma.PrismaPromise<GetSatwaAggregateType<T>>

    /**
     * Group by Satwa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaGroupByArgs} args - Group by arguments.
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
      T extends SatwaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatwaGroupByArgs['orderBy'] }
        : { orderBy?: SatwaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SatwaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatwaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Satwa model
   */
  readonly fields: SatwaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Satwa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatwaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends Satwa$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Satwa$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donasi<T extends Satwa$donasiArgs<ExtArgs> = {}>(args?: Subset<T, Satwa$donasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    laporan<T extends Satwa$laporanArgs<ExtArgs> = {}>(args?: Subset<T, Satwa$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Satwa model
   */
  interface SatwaFieldRefs {
    readonly id: FieldRef<"Satwa", 'String'>
    readonly shelterId: FieldRef<"Satwa", 'String'>
    readonly nama: FieldRef<"Satwa", 'String'>
    readonly jenis: FieldRef<"Satwa", 'JenisSatwa'>
    readonly ras: FieldRef<"Satwa", 'String'>
    readonly umur: FieldRef<"Satwa", 'Int'>
    readonly kelamin: FieldRef<"Satwa", 'KelaminSatwa'>
    readonly foto: FieldRef<"Satwa", 'String'>
    readonly deskripsi: FieldRef<"Satwa", 'String'>
    readonly danaTerkumpul: FieldRef<"Satwa", 'Int'>
    readonly status: FieldRef<"Satwa", 'StatusSatwa'>
    readonly createdAt: FieldRef<"Satwa", 'DateTime'>
    readonly updatedAt: FieldRef<"Satwa", 'DateTime'>
    readonly deletedAt: FieldRef<"Satwa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Satwa findUnique
   */
  export type SatwaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * Filter, which Satwa to fetch.
     */
    where: SatwaWhereUniqueInput
  }

  /**
   * Satwa findUniqueOrThrow
   */
  export type SatwaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * Filter, which Satwa to fetch.
     */
    where: SatwaWhereUniqueInput
  }

  /**
   * Satwa findFirst
   */
  export type SatwaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * Filter, which Satwa to fetch.
     */
    where?: SatwaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satwas to fetch.
     */
    orderBy?: SatwaOrderByWithRelationInput | SatwaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Satwas.
     */
    cursor?: SatwaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satwas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satwas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Satwas.
     */
    distinct?: SatwaScalarFieldEnum | SatwaScalarFieldEnum[]
  }

  /**
   * Satwa findFirstOrThrow
   */
  export type SatwaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * Filter, which Satwa to fetch.
     */
    where?: SatwaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satwas to fetch.
     */
    orderBy?: SatwaOrderByWithRelationInput | SatwaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Satwas.
     */
    cursor?: SatwaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satwas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satwas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Satwas.
     */
    distinct?: SatwaScalarFieldEnum | SatwaScalarFieldEnum[]
  }

  /**
   * Satwa findMany
   */
  export type SatwaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * Filter, which Satwas to fetch.
     */
    where?: SatwaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Satwas to fetch.
     */
    orderBy?: SatwaOrderByWithRelationInput | SatwaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Satwas.
     */
    cursor?: SatwaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Satwas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Satwas.
     */
    skip?: number
    distinct?: SatwaScalarFieldEnum | SatwaScalarFieldEnum[]
  }

  /**
   * Satwa create
   */
  export type SatwaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * The data needed to create a Satwa.
     */
    data: XOR<SatwaCreateInput, SatwaUncheckedCreateInput>
  }

  /**
   * Satwa createMany
   */
  export type SatwaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Satwas.
     */
    data: SatwaCreateManyInput | SatwaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Satwa createManyAndReturn
   */
  export type SatwaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * The data used to create many Satwas.
     */
    data: SatwaCreateManyInput | SatwaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Satwa update
   */
  export type SatwaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * The data needed to update a Satwa.
     */
    data: XOR<SatwaUpdateInput, SatwaUncheckedUpdateInput>
    /**
     * Choose, which Satwa to update.
     */
    where: SatwaWhereUniqueInput
  }

  /**
   * Satwa updateMany
   */
  export type SatwaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Satwas.
     */
    data: XOR<SatwaUpdateManyMutationInput, SatwaUncheckedUpdateManyInput>
    /**
     * Filter which Satwas to update
     */
    where?: SatwaWhereInput
    /**
     * Limit how many Satwas to update.
     */
    limit?: number
  }

  /**
   * Satwa updateManyAndReturn
   */
  export type SatwaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * The data used to update Satwas.
     */
    data: XOR<SatwaUpdateManyMutationInput, SatwaUncheckedUpdateManyInput>
    /**
     * Filter which Satwas to update
     */
    where?: SatwaWhereInput
    /**
     * Limit how many Satwas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Satwa upsert
   */
  export type SatwaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * The filter to search for the Satwa to update in case it exists.
     */
    where: SatwaWhereUniqueInput
    /**
     * In case the Satwa found by the `where` argument doesn't exist, create a new Satwa with this data.
     */
    create: XOR<SatwaCreateInput, SatwaUncheckedCreateInput>
    /**
     * In case the Satwa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatwaUpdateInput, SatwaUncheckedUpdateInput>
  }

  /**
   * Satwa delete
   */
  export type SatwaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    /**
     * Filter which Satwa to delete.
     */
    where: SatwaWhereUniqueInput
  }

  /**
   * Satwa deleteMany
   */
  export type SatwaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Satwas to delete
     */
    where?: SatwaWhereInput
    /**
     * Limit how many Satwas to delete.
     */
    limit?: number
  }

  /**
   * Satwa.bookmarks
   */
  export type Satwa$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    where?: SatwaBookmarkWhereInput
    orderBy?: SatwaBookmarkOrderByWithRelationInput | SatwaBookmarkOrderByWithRelationInput[]
    cursor?: SatwaBookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatwaBookmarkScalarFieldEnum | SatwaBookmarkScalarFieldEnum[]
  }

  /**
   * Satwa.donasi
   */
  export type Satwa$donasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    where?: DonasiWhereInput
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    cursor?: DonasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonasiScalarFieldEnum | DonasiScalarFieldEnum[]
  }

  /**
   * Satwa.laporan
   */
  export type Satwa$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Satwa without action
   */
  export type SatwaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
  }


  /**
   * Model Donasi
   */

  export type AggregateDonasi = {
    _count: DonasiCountAggregateOutputType | null
    _avg: DonasiAvgAggregateOutputType | null
    _sum: DonasiSumAggregateOutputType | null
    _min: DonasiMinAggregateOutputType | null
    _max: DonasiMaxAggregateOutputType | null
  }

  export type DonasiAvgAggregateOutputType = {
    nominal: number | null
  }

  export type DonasiSumAggregateOutputType = {
    nominal: number | null
  }

  export type DonasiMinAggregateOutputType = {
    id: string | null
    donaturId: string | null
    satwaId: string | null
    shelterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    buktiResi: string | null
    catatan: string | null
    nominal: number | null
    status: $Enums.Status | null
    alasanDitolak: string | null
    diverifikasiAt: Date | null
  }

  export type DonasiMaxAggregateOutputType = {
    id: string | null
    donaturId: string | null
    satwaId: string | null
    shelterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    buktiResi: string | null
    catatan: string | null
    nominal: number | null
    status: $Enums.Status | null
    alasanDitolak: string | null
    diverifikasiAt: Date | null
  }

  export type DonasiCountAggregateOutputType = {
    id: number
    donaturId: number
    satwaId: number
    shelterId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    buktiResi: number
    catatan: number
    nominal: number
    status: number
    alasanDitolak: number
    diverifikasiAt: number
    _all: number
  }


  export type DonasiAvgAggregateInputType = {
    nominal?: true
  }

  export type DonasiSumAggregateInputType = {
    nominal?: true
  }

  export type DonasiMinAggregateInputType = {
    id?: true
    donaturId?: true
    satwaId?: true
    shelterId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    buktiResi?: true
    catatan?: true
    nominal?: true
    status?: true
    alasanDitolak?: true
    diverifikasiAt?: true
  }

  export type DonasiMaxAggregateInputType = {
    id?: true
    donaturId?: true
    satwaId?: true
    shelterId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    buktiResi?: true
    catatan?: true
    nominal?: true
    status?: true
    alasanDitolak?: true
    diverifikasiAt?: true
  }

  export type DonasiCountAggregateInputType = {
    id?: true
    donaturId?: true
    satwaId?: true
    shelterId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    buktiResi?: true
    catatan?: true
    nominal?: true
    status?: true
    alasanDitolak?: true
    diverifikasiAt?: true
    _all?: true
  }

  export type DonasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donasi to aggregate.
     */
    where?: DonasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donasis to fetch.
     */
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donasis
    **/
    _count?: true | DonasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonasiMaxAggregateInputType
  }

  export type GetDonasiAggregateType<T extends DonasiAggregateArgs> = {
        [P in keyof T & keyof AggregateDonasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonasi[P]>
      : GetScalarType<T[P], AggregateDonasi[P]>
  }




  export type DonasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonasiWhereInput
    orderBy?: DonasiOrderByWithAggregationInput | DonasiOrderByWithAggregationInput[]
    by: DonasiScalarFieldEnum[] | DonasiScalarFieldEnum
    having?: DonasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonasiCountAggregateInputType | true
    _avg?: DonasiAvgAggregateInputType
    _sum?: DonasiSumAggregateInputType
    _min?: DonasiMinAggregateInputType
    _max?: DonasiMaxAggregateInputType
  }

  export type DonasiGroupByOutputType = {
    id: string
    donaturId: string
    satwaId: string | null
    shelterId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    buktiResi: string
    catatan: string | null
    nominal: number
    status: $Enums.Status
    alasanDitolak: string | null
    diverifikasiAt: Date | null
    _count: DonasiCountAggregateOutputType | null
    _avg: DonasiAvgAggregateOutputType | null
    _sum: DonasiSumAggregateOutputType | null
    _min: DonasiMinAggregateOutputType | null
    _max: DonasiMaxAggregateOutputType | null
  }

  type GetDonasiGroupByPayload<T extends DonasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonasiGroupByOutputType[P]>
            : GetScalarType<T[P], DonasiGroupByOutputType[P]>
        }
      >
    >


  export type DonasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donaturId?: boolean
    satwaId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    buktiResi?: boolean
    catatan?: boolean
    nominal?: boolean
    status?: boolean
    alasanDitolak?: boolean
    diverifikasiAt?: boolean
    donatur?: boolean | UserDefaultArgs<ExtArgs>
    satwa?: boolean | Donasi$satwaArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donasi"]>

  export type DonasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donaturId?: boolean
    satwaId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    buktiResi?: boolean
    catatan?: boolean
    nominal?: boolean
    status?: boolean
    alasanDitolak?: boolean
    diverifikasiAt?: boolean
    donatur?: boolean | UserDefaultArgs<ExtArgs>
    satwa?: boolean | Donasi$satwaArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donasi"]>

  export type DonasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donaturId?: boolean
    satwaId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    buktiResi?: boolean
    catatan?: boolean
    nominal?: boolean
    status?: boolean
    alasanDitolak?: boolean
    diverifikasiAt?: boolean
    donatur?: boolean | UserDefaultArgs<ExtArgs>
    satwa?: boolean | Donasi$satwaArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donasi"]>

  export type DonasiSelectScalar = {
    id?: boolean
    donaturId?: boolean
    satwaId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    buktiResi?: boolean
    catatan?: boolean
    nominal?: boolean
    status?: boolean
    alasanDitolak?: boolean
    diverifikasiAt?: boolean
  }

  export type DonasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "donaturId" | "satwaId" | "shelterId" | "createdAt" | "updatedAt" | "deletedAt" | "buktiResi" | "catatan" | "nominal" | "status" | "alasanDitolak" | "diverifikasiAt", ExtArgs["result"]["donasi"]>
  export type DonasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donatur?: boolean | UserDefaultArgs<ExtArgs>
    satwa?: boolean | Donasi$satwaArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type DonasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donatur?: boolean | UserDefaultArgs<ExtArgs>
    satwa?: boolean | Donasi$satwaArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type DonasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donatur?: boolean | UserDefaultArgs<ExtArgs>
    satwa?: boolean | Donasi$satwaArgs<ExtArgs>
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }

  export type $DonasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donasi"
    objects: {
      donatur: Prisma.$UserPayload<ExtArgs>
      satwa: Prisma.$SatwaPayload<ExtArgs> | null
      shelter: Prisma.$ShelterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donaturId: string
      satwaId: string | null
      shelterId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      buktiResi: string
      catatan: string | null
      nominal: number
      status: $Enums.Status
      alasanDitolak: string | null
      diverifikasiAt: Date | null
    }, ExtArgs["result"]["donasi"]>
    composites: {}
  }

  type DonasiGetPayload<S extends boolean | null | undefined | DonasiDefaultArgs> = $Result.GetResult<Prisma.$DonasiPayload, S>

  type DonasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonasiCountAggregateInputType | true
    }

  export interface DonasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donasi'], meta: { name: 'Donasi' } }
    /**
     * Find zero or one Donasi that matches the filter.
     * @param {DonasiFindUniqueArgs} args - Arguments to find a Donasi
     * @example
     * // Get one Donasi
     * const donasi = await prisma.donasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonasiFindUniqueArgs>(args: SelectSubset<T, DonasiFindUniqueArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonasiFindUniqueOrThrowArgs} args - Arguments to find a Donasi
     * @example
     * // Get one Donasi
     * const donasi = await prisma.donasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonasiFindUniqueOrThrowArgs>(args: SelectSubset<T, DonasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiFindFirstArgs} args - Arguments to find a Donasi
     * @example
     * // Get one Donasi
     * const donasi = await prisma.donasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonasiFindFirstArgs>(args?: SelectSubset<T, DonasiFindFirstArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiFindFirstOrThrowArgs} args - Arguments to find a Donasi
     * @example
     * // Get one Donasi
     * const donasi = await prisma.donasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonasiFindFirstOrThrowArgs>(args?: SelectSubset<T, DonasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donasis
     * const donasis = await prisma.donasi.findMany()
     * 
     * // Get first 10 Donasis
     * const donasis = await prisma.donasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donasiWithIdOnly = await prisma.donasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonasiFindManyArgs>(args?: SelectSubset<T, DonasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donasi.
     * @param {DonasiCreateArgs} args - Arguments to create a Donasi.
     * @example
     * // Create one Donasi
     * const Donasi = await prisma.donasi.create({
     *   data: {
     *     // ... data to create a Donasi
     *   }
     * })
     * 
     */
    create<T extends DonasiCreateArgs>(args: SelectSubset<T, DonasiCreateArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donasis.
     * @param {DonasiCreateManyArgs} args - Arguments to create many Donasis.
     * @example
     * // Create many Donasis
     * const donasi = await prisma.donasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonasiCreateManyArgs>(args?: SelectSubset<T, DonasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donasis and returns the data saved in the database.
     * @param {DonasiCreateManyAndReturnArgs} args - Arguments to create many Donasis.
     * @example
     * // Create many Donasis
     * const donasi = await prisma.donasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donasis and only return the `id`
     * const donasiWithIdOnly = await prisma.donasi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonasiCreateManyAndReturnArgs>(args?: SelectSubset<T, DonasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donasi.
     * @param {DonasiDeleteArgs} args - Arguments to delete one Donasi.
     * @example
     * // Delete one Donasi
     * const Donasi = await prisma.donasi.delete({
     *   where: {
     *     // ... filter to delete one Donasi
     *   }
     * })
     * 
     */
    delete<T extends DonasiDeleteArgs>(args: SelectSubset<T, DonasiDeleteArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donasi.
     * @param {DonasiUpdateArgs} args - Arguments to update one Donasi.
     * @example
     * // Update one Donasi
     * const donasi = await prisma.donasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonasiUpdateArgs>(args: SelectSubset<T, DonasiUpdateArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donasis.
     * @param {DonasiDeleteManyArgs} args - Arguments to filter Donasis to delete.
     * @example
     * // Delete a few Donasis
     * const { count } = await prisma.donasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonasiDeleteManyArgs>(args?: SelectSubset<T, DonasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donasis
     * const donasi = await prisma.donasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonasiUpdateManyArgs>(args: SelectSubset<T, DonasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donasis and returns the data updated in the database.
     * @param {DonasiUpdateManyAndReturnArgs} args - Arguments to update many Donasis.
     * @example
     * // Update many Donasis
     * const donasi = await prisma.donasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donasis and only return the `id`
     * const donasiWithIdOnly = await prisma.donasi.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonasiUpdateManyAndReturnArgs>(args: SelectSubset<T, DonasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donasi.
     * @param {DonasiUpsertArgs} args - Arguments to update or create a Donasi.
     * @example
     * // Update or create a Donasi
     * const donasi = await prisma.donasi.upsert({
     *   create: {
     *     // ... data to create a Donasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donasi we want to update
     *   }
     * })
     */
    upsert<T extends DonasiUpsertArgs>(args: SelectSubset<T, DonasiUpsertArgs<ExtArgs>>): Prisma__DonasiClient<$Result.GetResult<Prisma.$DonasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiCountArgs} args - Arguments to filter Donasis to count.
     * @example
     * // Count the number of Donasis
     * const count = await prisma.donasi.count({
     *   where: {
     *     // ... the filter for the Donasis we want to count
     *   }
     * })
    **/
    count<T extends DonasiCountArgs>(
      args?: Subset<T, DonasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonasiAggregateArgs>(args: Subset<T, DonasiAggregateArgs>): Prisma.PrismaPromise<GetDonasiAggregateType<T>>

    /**
     * Group by Donasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonasiGroupByArgs} args - Group by arguments.
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
      T extends DonasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonasiGroupByArgs['orderBy'] }
        : { orderBy?: DonasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donasi model
   */
  readonly fields: DonasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donatur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    satwa<T extends Donasi$satwaArgs<ExtArgs> = {}>(args?: Subset<T, Donasi$satwaArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Donasi model
   */
  interface DonasiFieldRefs {
    readonly id: FieldRef<"Donasi", 'String'>
    readonly donaturId: FieldRef<"Donasi", 'String'>
    readonly satwaId: FieldRef<"Donasi", 'String'>
    readonly shelterId: FieldRef<"Donasi", 'String'>
    readonly createdAt: FieldRef<"Donasi", 'DateTime'>
    readonly updatedAt: FieldRef<"Donasi", 'DateTime'>
    readonly deletedAt: FieldRef<"Donasi", 'DateTime'>
    readonly buktiResi: FieldRef<"Donasi", 'String'>
    readonly catatan: FieldRef<"Donasi", 'String'>
    readonly nominal: FieldRef<"Donasi", 'Int'>
    readonly status: FieldRef<"Donasi", 'Status'>
    readonly alasanDitolak: FieldRef<"Donasi", 'String'>
    readonly diverifikasiAt: FieldRef<"Donasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donasi findUnique
   */
  export type DonasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * Filter, which Donasi to fetch.
     */
    where: DonasiWhereUniqueInput
  }

  /**
   * Donasi findUniqueOrThrow
   */
  export type DonasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * Filter, which Donasi to fetch.
     */
    where: DonasiWhereUniqueInput
  }

  /**
   * Donasi findFirst
   */
  export type DonasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * Filter, which Donasi to fetch.
     */
    where?: DonasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donasis to fetch.
     */
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donasis.
     */
    cursor?: DonasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donasis.
     */
    distinct?: DonasiScalarFieldEnum | DonasiScalarFieldEnum[]
  }

  /**
   * Donasi findFirstOrThrow
   */
  export type DonasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * Filter, which Donasi to fetch.
     */
    where?: DonasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donasis to fetch.
     */
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donasis.
     */
    cursor?: DonasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donasis.
     */
    distinct?: DonasiScalarFieldEnum | DonasiScalarFieldEnum[]
  }

  /**
   * Donasi findMany
   */
  export type DonasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * Filter, which Donasis to fetch.
     */
    where?: DonasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donasis to fetch.
     */
    orderBy?: DonasiOrderByWithRelationInput | DonasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donasis.
     */
    cursor?: DonasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donasis.
     */
    skip?: number
    distinct?: DonasiScalarFieldEnum | DonasiScalarFieldEnum[]
  }

  /**
   * Donasi create
   */
  export type DonasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Donasi.
     */
    data: XOR<DonasiCreateInput, DonasiUncheckedCreateInput>
  }

  /**
   * Donasi createMany
   */
  export type DonasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donasis.
     */
    data: DonasiCreateManyInput | DonasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donasi createManyAndReturn
   */
  export type DonasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * The data used to create many Donasis.
     */
    data: DonasiCreateManyInput | DonasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donasi update
   */
  export type DonasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Donasi.
     */
    data: XOR<DonasiUpdateInput, DonasiUncheckedUpdateInput>
    /**
     * Choose, which Donasi to update.
     */
    where: DonasiWhereUniqueInput
  }

  /**
   * Donasi updateMany
   */
  export type DonasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donasis.
     */
    data: XOR<DonasiUpdateManyMutationInput, DonasiUncheckedUpdateManyInput>
    /**
     * Filter which Donasis to update
     */
    where?: DonasiWhereInput
    /**
     * Limit how many Donasis to update.
     */
    limit?: number
  }

  /**
   * Donasi updateManyAndReturn
   */
  export type DonasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * The data used to update Donasis.
     */
    data: XOR<DonasiUpdateManyMutationInput, DonasiUncheckedUpdateManyInput>
    /**
     * Filter which Donasis to update
     */
    where?: DonasiWhereInput
    /**
     * Limit how many Donasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donasi upsert
   */
  export type DonasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Donasi to update in case it exists.
     */
    where: DonasiWhereUniqueInput
    /**
     * In case the Donasi found by the `where` argument doesn't exist, create a new Donasi with this data.
     */
    create: XOR<DonasiCreateInput, DonasiUncheckedCreateInput>
    /**
     * In case the Donasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonasiUpdateInput, DonasiUncheckedUpdateInput>
  }

  /**
   * Donasi delete
   */
  export type DonasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
    /**
     * Filter which Donasi to delete.
     */
    where: DonasiWhereUniqueInput
  }

  /**
   * Donasi deleteMany
   */
  export type DonasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donasis to delete
     */
    where?: DonasiWhereInput
    /**
     * Limit how many Donasis to delete.
     */
    limit?: number
  }

  /**
   * Donasi.satwa
   */
  export type Donasi$satwaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satwa
     */
    select?: SatwaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Satwa
     */
    omit?: SatwaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaInclude<ExtArgs> | null
    where?: SatwaWhereInput
  }

  /**
   * Donasi without action
   */
  export type DonasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donasi
     */
    select?: DonasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donasi
     */
    omit?: DonasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonasiInclude<ExtArgs> | null
  }


  /**
   * Model Laporan
   */

  export type AggregateLaporan = {
    _count: LaporanCountAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  export type LaporanMinAggregateOutputType = {
    id: string | null
    satwaId: string | null
    judul: string | null
    deskripsi: string | null
    foto: string | null
    fotoPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LaporanMaxAggregateOutputType = {
    id: string | null
    satwaId: string | null
    judul: string | null
    deskripsi: string | null
    foto: string | null
    fotoPublicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LaporanCountAggregateOutputType = {
    id: number
    satwaId: number
    judul: number
    deskripsi: number
    foto: number
    fotoPublicId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type LaporanMinAggregateInputType = {
    id?: true
    satwaId?: true
    judul?: true
    deskripsi?: true
    foto?: true
    fotoPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LaporanMaxAggregateInputType = {
    id?: true
    satwaId?: true
    judul?: true
    deskripsi?: true
    foto?: true
    fotoPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LaporanCountAggregateInputType = {
    id?: true
    satwaId?: true
    judul?: true
    deskripsi?: true
    foto?: true
    fotoPublicId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LaporanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporan to aggregate.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laporans
    **/
    _count?: true | LaporanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanMaxAggregateInputType
  }

  export type GetLaporanAggregateType<T extends LaporanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan[P]>
      : GetScalarType<T[P], AggregateLaporan[P]>
  }




  export type LaporanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithAggregationInput | LaporanOrderByWithAggregationInput[]
    by: LaporanScalarFieldEnum[] | LaporanScalarFieldEnum
    having?: LaporanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanCountAggregateInputType | true
    _min?: LaporanMinAggregateInputType
    _max?: LaporanMaxAggregateInputType
  }

  export type LaporanGroupByOutputType = {
    id: string
    satwaId: string
    judul: string
    deskripsi: string
    foto: string | null
    fotoPublicId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: LaporanCountAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  type GetLaporanGroupByPayload<T extends LaporanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    satwaId?: boolean
    judul?: boolean
    deskripsi?: boolean
    foto?: boolean
    fotoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    satwaId?: boolean
    judul?: boolean
    deskripsi?: boolean
    foto?: boolean
    fotoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    satwaId?: boolean
    judul?: boolean
    deskripsi?: boolean
    foto?: boolean
    fotoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectScalar = {
    id?: boolean
    satwaId?: boolean
    judul?: boolean
    deskripsi?: boolean
    foto?: boolean
    fotoPublicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type LaporanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "satwaId" | "judul" | "deskripsi" | "foto" | "fotoPublicId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["laporan"]>
  export type LaporanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
  }

  export type $LaporanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laporan"
    objects: {
      satwa: Prisma.$SatwaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      satwaId: string
      judul: string
      deskripsi: string
      foto: string | null
      fotoPublicId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["laporan"]>
    composites: {}
  }

  type LaporanGetPayload<S extends boolean | null | undefined | LaporanDefaultArgs> = $Result.GetResult<Prisma.$LaporanPayload, S>

  type LaporanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanCountAggregateInputType | true
    }

  export interface LaporanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laporan'], meta: { name: 'Laporan' } }
    /**
     * Find zero or one Laporan that matches the filter.
     * @param {LaporanFindUniqueArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanFindUniqueArgs>(args: SelectSubset<T, LaporanFindUniqueArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laporan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanFindUniqueOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanFindFirstArgs>(args?: SelectSubset<T, LaporanFindFirstArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laporans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporans
     * const laporans = await prisma.laporan.findMany()
     * 
     * // Get first 10 Laporans
     * const laporans = await prisma.laporan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanWithIdOnly = await prisma.laporan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanFindManyArgs>(args?: SelectSubset<T, LaporanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laporan.
     * @param {LaporanCreateArgs} args - Arguments to create a Laporan.
     * @example
     * // Create one Laporan
     * const Laporan = await prisma.laporan.create({
     *   data: {
     *     // ... data to create a Laporan
     *   }
     * })
     * 
     */
    create<T extends LaporanCreateArgs>(args: SelectSubset<T, LaporanCreateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laporans.
     * @param {LaporanCreateManyArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanCreateManyArgs>(args?: SelectSubset<T, LaporanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Laporans and returns the data saved in the database.
     * @param {LaporanCreateManyAndReturnArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Laporan.
     * @param {LaporanDeleteArgs} args - Arguments to delete one Laporan.
     * @example
     * // Delete one Laporan
     * const Laporan = await prisma.laporan.delete({
     *   where: {
     *     // ... filter to delete one Laporan
     *   }
     * })
     * 
     */
    delete<T extends LaporanDeleteArgs>(args: SelectSubset<T, LaporanDeleteArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laporan.
     * @param {LaporanUpdateArgs} args - Arguments to update one Laporan.
     * @example
     * // Update one Laporan
     * const laporan = await prisma.laporan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanUpdateArgs>(args: SelectSubset<T, LaporanUpdateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laporans.
     * @param {LaporanDeleteManyArgs} args - Arguments to filter Laporans to delete.
     * @example
     * // Delete a few Laporans
     * const { count } = await prisma.laporan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanDeleteManyArgs>(args?: SelectSubset<T, LaporanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanUpdateManyArgs>(args: SelectSubset<T, LaporanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans and returns the data updated in the database.
     * @param {LaporanUpdateManyAndReturnArgs} args - Arguments to update many Laporans.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.updateManyAndReturn({
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
    updateManyAndReturn<T extends LaporanUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Laporan.
     * @param {LaporanUpsertArgs} args - Arguments to update or create a Laporan.
     * @example
     * // Update or create a Laporan
     * const laporan = await prisma.laporan.upsert({
     *   create: {
     *     // ... data to create a Laporan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanUpsertArgs>(args: SelectSubset<T, LaporanUpsertArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCountArgs} args - Arguments to filter Laporans to count.
     * @example
     * // Count the number of Laporans
     * const count = await prisma.laporan.count({
     *   where: {
     *     // ... the filter for the Laporans we want to count
     *   }
     * })
    **/
    count<T extends LaporanCountArgs>(
      args?: Subset<T, LaporanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaporanAggregateArgs>(args: Subset<T, LaporanAggregateArgs>): Prisma.PrismaPromise<GetLaporanAggregateType<T>>

    /**
     * Group by Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanGroupByArgs} args - Group by arguments.
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
      T extends LaporanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LaporanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laporan model
   */
  readonly fields: LaporanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laporan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    satwa<T extends SatwaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SatwaDefaultArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Laporan model
   */
  interface LaporanFieldRefs {
    readonly id: FieldRef<"Laporan", 'String'>
    readonly satwaId: FieldRef<"Laporan", 'String'>
    readonly judul: FieldRef<"Laporan", 'String'>
    readonly deskripsi: FieldRef<"Laporan", 'String'>
    readonly foto: FieldRef<"Laporan", 'String'>
    readonly fotoPublicId: FieldRef<"Laporan", 'String'>
    readonly createdAt: FieldRef<"Laporan", 'DateTime'>
    readonly updatedAt: FieldRef<"Laporan", 'DateTime'>
    readonly deletedAt: FieldRef<"Laporan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Laporan findUnique
   */
  export type LaporanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findUniqueOrThrow
   */
  export type LaporanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findFirst
   */
  export type LaporanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findFirstOrThrow
   */
  export type LaporanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findMany
   */
  export type LaporanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporans to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan create
   */
  export type LaporanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to create a Laporan.
     */
    data: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
  }

  /**
   * Laporan createMany
   */
  export type LaporanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan createManyAndReturn
   */
  export type LaporanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan update
   */
  export type LaporanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to update a Laporan.
     */
    data: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
    /**
     * Choose, which Laporan to update.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan updateMany
   */
  export type LaporanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
  }

  /**
   * Laporan updateManyAndReturn
   */
  export type LaporanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan upsert
   */
  export type LaporanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The filter to search for the Laporan to update in case it exists.
     */
    where: LaporanWhereUniqueInput
    /**
     * In case the Laporan found by the `where` argument doesn't exist, create a new Laporan with this data.
     */
    create: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
    /**
     * In case the Laporan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
  }

  /**
   * Laporan delete
   */
  export type LaporanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter which Laporan to delete.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan deleteMany
   */
  export type LaporanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporans to delete
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to delete.
     */
    limit?: number
  }

  /**
   * Laporan without action
   */
  export type LaporanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
  }


  /**
   * Model MailerLog
   */

  export type AggregateMailerLog = {
    _count: MailerLogCountAggregateOutputType | null
    _min: MailerLogMinAggregateOutputType | null
    _max: MailerLogMaxAggregateOutputType | null
  }

  export type MailerLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    emailTo: string | null
    subject: string | null
    body: string | null
    referenceId: string | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted_at: Date | null
    type: $Enums.MailerLogType | null
    referenceType: $Enums.MailerReferenceType | null
    status: $Enums.MailerStatus | null
  }

  export type MailerLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    emailTo: string | null
    subject: string | null
    body: string | null
    referenceId: string | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted_at: Date | null
    type: $Enums.MailerLogType | null
    referenceType: $Enums.MailerReferenceType | null
    status: $Enums.MailerStatus | null
  }

  export type MailerLogCountAggregateOutputType = {
    id: number
    userId: number
    emailTo: number
    subject: number
    body: number
    referenceId: number
    sentAt: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    deleted_at: number
    type: number
    referenceType: number
    status: number
    _all: number
  }


  export type MailerLogMinAggregateInputType = {
    id?: true
    userId?: true
    emailTo?: true
    subject?: true
    body?: true
    referenceId?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    deleted_at?: true
    type?: true
    referenceType?: true
    status?: true
  }

  export type MailerLogMaxAggregateInputType = {
    id?: true
    userId?: true
    emailTo?: true
    subject?: true
    body?: true
    referenceId?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    deleted_at?: true
    type?: true
    referenceType?: true
    status?: true
  }

  export type MailerLogCountAggregateInputType = {
    id?: true
    userId?: true
    emailTo?: true
    subject?: true
    body?: true
    referenceId?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    deleted_at?: true
    type?: true
    referenceType?: true
    status?: true
    _all?: true
  }

  export type MailerLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailerLog to aggregate.
     */
    where?: MailerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailerLogs to fetch.
     */
    orderBy?: MailerLogOrderByWithRelationInput | MailerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailerLogs
    **/
    _count?: true | MailerLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailerLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailerLogMaxAggregateInputType
  }

  export type GetMailerLogAggregateType<T extends MailerLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMailerLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailerLog[P]>
      : GetScalarType<T[P], AggregateMailerLog[P]>
  }




  export type MailerLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailerLogWhereInput
    orderBy?: MailerLogOrderByWithAggregationInput | MailerLogOrderByWithAggregationInput[]
    by: MailerLogScalarFieldEnum[] | MailerLogScalarFieldEnum
    having?: MailerLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailerLogCountAggregateInputType | true
    _min?: MailerLogMinAggregateInputType
    _max?: MailerLogMaxAggregateInputType
  }

  export type MailerLogGroupByOutputType = {
    id: string
    userId: string | null
    emailTo: string
    subject: string
    body: string
    referenceId: string | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    deleted_at: Date | null
    type: $Enums.MailerLogType
    referenceType: $Enums.MailerReferenceType | null
    status: $Enums.MailerStatus
    _count: MailerLogCountAggregateOutputType | null
    _min: MailerLogMinAggregateOutputType | null
    _max: MailerLogMaxAggregateOutputType | null
  }

  type GetMailerLogGroupByPayload<T extends MailerLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailerLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailerLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailerLogGroupByOutputType[P]>
            : GetScalarType<T[P], MailerLogGroupByOutputType[P]>
        }
      >
    >


  export type MailerLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailTo?: boolean
    subject?: boolean
    body?: boolean
    referenceId?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted_at?: boolean
    type?: boolean
    referenceType?: boolean
    status?: boolean
    user?: boolean | MailerLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["mailerLog"]>

  export type MailerLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailTo?: boolean
    subject?: boolean
    body?: boolean
    referenceId?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted_at?: boolean
    type?: boolean
    referenceType?: boolean
    status?: boolean
    user?: boolean | MailerLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["mailerLog"]>

  export type MailerLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailTo?: boolean
    subject?: boolean
    body?: boolean
    referenceId?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted_at?: boolean
    type?: boolean
    referenceType?: boolean
    status?: boolean
    user?: boolean | MailerLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["mailerLog"]>

  export type MailerLogSelectScalar = {
    id?: boolean
    userId?: boolean
    emailTo?: boolean
    subject?: boolean
    body?: boolean
    referenceId?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted_at?: boolean
    type?: boolean
    referenceType?: boolean
    status?: boolean
  }

  export type MailerLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "emailTo" | "subject" | "body" | "referenceId" | "sentAt" | "errorMessage" | "createdAt" | "updatedAt" | "deleted_at" | "type" | "referenceType" | "status", ExtArgs["result"]["mailerLog"]>
  export type MailerLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MailerLog$userArgs<ExtArgs>
  }
  export type MailerLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MailerLog$userArgs<ExtArgs>
  }
  export type MailerLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MailerLog$userArgs<ExtArgs>
  }

  export type $MailerLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailerLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      emailTo: string
      subject: string
      body: string
      referenceId: string | null
      sentAt: Date | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
      deleted_at: Date | null
      type: $Enums.MailerLogType
      referenceType: $Enums.MailerReferenceType | null
      status: $Enums.MailerStatus
    }, ExtArgs["result"]["mailerLog"]>
    composites: {}
  }

  type MailerLogGetPayload<S extends boolean | null | undefined | MailerLogDefaultArgs> = $Result.GetResult<Prisma.$MailerLogPayload, S>

  type MailerLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MailerLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MailerLogCountAggregateInputType | true
    }

  export interface MailerLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailerLog'], meta: { name: 'MailerLog' } }
    /**
     * Find zero or one MailerLog that matches the filter.
     * @param {MailerLogFindUniqueArgs} args - Arguments to find a MailerLog
     * @example
     * // Get one MailerLog
     * const mailerLog = await prisma.mailerLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MailerLogFindUniqueArgs>(args: SelectSubset<T, MailerLogFindUniqueArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MailerLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MailerLogFindUniqueOrThrowArgs} args - Arguments to find a MailerLog
     * @example
     * // Get one MailerLog
     * const mailerLog = await prisma.mailerLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MailerLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MailerLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MailerLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogFindFirstArgs} args - Arguments to find a MailerLog
     * @example
     * // Get one MailerLog
     * const mailerLog = await prisma.mailerLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MailerLogFindFirstArgs>(args?: SelectSubset<T, MailerLogFindFirstArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MailerLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogFindFirstOrThrowArgs} args - Arguments to find a MailerLog
     * @example
     * // Get one MailerLog
     * const mailerLog = await prisma.mailerLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MailerLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MailerLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MailerLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailerLogs
     * const mailerLogs = await prisma.mailerLog.findMany()
     * 
     * // Get first 10 MailerLogs
     * const mailerLogs = await prisma.mailerLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailerLogWithIdOnly = await prisma.mailerLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MailerLogFindManyArgs>(args?: SelectSubset<T, MailerLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MailerLog.
     * @param {MailerLogCreateArgs} args - Arguments to create a MailerLog.
     * @example
     * // Create one MailerLog
     * const MailerLog = await prisma.mailerLog.create({
     *   data: {
     *     // ... data to create a MailerLog
     *   }
     * })
     * 
     */
    create<T extends MailerLogCreateArgs>(args: SelectSubset<T, MailerLogCreateArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MailerLogs.
     * @param {MailerLogCreateManyArgs} args - Arguments to create many MailerLogs.
     * @example
     * // Create many MailerLogs
     * const mailerLog = await prisma.mailerLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MailerLogCreateManyArgs>(args?: SelectSubset<T, MailerLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MailerLogs and returns the data saved in the database.
     * @param {MailerLogCreateManyAndReturnArgs} args - Arguments to create many MailerLogs.
     * @example
     * // Create many MailerLogs
     * const mailerLog = await prisma.mailerLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MailerLogs and only return the `id`
     * const mailerLogWithIdOnly = await prisma.mailerLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MailerLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MailerLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MailerLog.
     * @param {MailerLogDeleteArgs} args - Arguments to delete one MailerLog.
     * @example
     * // Delete one MailerLog
     * const MailerLog = await prisma.mailerLog.delete({
     *   where: {
     *     // ... filter to delete one MailerLog
     *   }
     * })
     * 
     */
    delete<T extends MailerLogDeleteArgs>(args: SelectSubset<T, MailerLogDeleteArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MailerLog.
     * @param {MailerLogUpdateArgs} args - Arguments to update one MailerLog.
     * @example
     * // Update one MailerLog
     * const mailerLog = await prisma.mailerLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MailerLogUpdateArgs>(args: SelectSubset<T, MailerLogUpdateArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MailerLogs.
     * @param {MailerLogDeleteManyArgs} args - Arguments to filter MailerLogs to delete.
     * @example
     * // Delete a few MailerLogs
     * const { count } = await prisma.mailerLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MailerLogDeleteManyArgs>(args?: SelectSubset<T, MailerLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailerLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailerLogs
     * const mailerLog = await prisma.mailerLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MailerLogUpdateManyArgs>(args: SelectSubset<T, MailerLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailerLogs and returns the data updated in the database.
     * @param {MailerLogUpdateManyAndReturnArgs} args - Arguments to update many MailerLogs.
     * @example
     * // Update many MailerLogs
     * const mailerLog = await prisma.mailerLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MailerLogs and only return the `id`
     * const mailerLogWithIdOnly = await prisma.mailerLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends MailerLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MailerLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MailerLog.
     * @param {MailerLogUpsertArgs} args - Arguments to update or create a MailerLog.
     * @example
     * // Update or create a MailerLog
     * const mailerLog = await prisma.mailerLog.upsert({
     *   create: {
     *     // ... data to create a MailerLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailerLog we want to update
     *   }
     * })
     */
    upsert<T extends MailerLogUpsertArgs>(args: SelectSubset<T, MailerLogUpsertArgs<ExtArgs>>): Prisma__MailerLogClient<$Result.GetResult<Prisma.$MailerLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MailerLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogCountArgs} args - Arguments to filter MailerLogs to count.
     * @example
     * // Count the number of MailerLogs
     * const count = await prisma.mailerLog.count({
     *   where: {
     *     // ... the filter for the MailerLogs we want to count
     *   }
     * })
    **/
    count<T extends MailerLogCountArgs>(
      args?: Subset<T, MailerLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailerLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailerLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailerLogAggregateArgs>(args: Subset<T, MailerLogAggregateArgs>): Prisma.PrismaPromise<GetMailerLogAggregateType<T>>

    /**
     * Group by MailerLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailerLogGroupByArgs} args - Group by arguments.
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
      T extends MailerLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailerLogGroupByArgs['orderBy'] }
        : { orderBy?: MailerLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MailerLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailerLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailerLog model
   */
  readonly fields: MailerLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailerLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailerLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MailerLog$userArgs<ExtArgs> = {}>(args?: Subset<T, MailerLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MailerLog model
   */
  interface MailerLogFieldRefs {
    readonly id: FieldRef<"MailerLog", 'String'>
    readonly userId: FieldRef<"MailerLog", 'String'>
    readonly emailTo: FieldRef<"MailerLog", 'String'>
    readonly subject: FieldRef<"MailerLog", 'String'>
    readonly body: FieldRef<"MailerLog", 'String'>
    readonly referenceId: FieldRef<"MailerLog", 'String'>
    readonly sentAt: FieldRef<"MailerLog", 'DateTime'>
    readonly errorMessage: FieldRef<"MailerLog", 'String'>
    readonly createdAt: FieldRef<"MailerLog", 'DateTime'>
    readonly updatedAt: FieldRef<"MailerLog", 'DateTime'>
    readonly deleted_at: FieldRef<"MailerLog", 'DateTime'>
    readonly type: FieldRef<"MailerLog", 'MailerLogType'>
    readonly referenceType: FieldRef<"MailerLog", 'MailerReferenceType'>
    readonly status: FieldRef<"MailerLog", 'MailerStatus'>
  }
    

  // Custom InputTypes
  /**
   * MailerLog findUnique
   */
  export type MailerLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * Filter, which MailerLog to fetch.
     */
    where: MailerLogWhereUniqueInput
  }

  /**
   * MailerLog findUniqueOrThrow
   */
  export type MailerLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * Filter, which MailerLog to fetch.
     */
    where: MailerLogWhereUniqueInput
  }

  /**
   * MailerLog findFirst
   */
  export type MailerLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * Filter, which MailerLog to fetch.
     */
    where?: MailerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailerLogs to fetch.
     */
    orderBy?: MailerLogOrderByWithRelationInput | MailerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailerLogs.
     */
    cursor?: MailerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailerLogs.
     */
    distinct?: MailerLogScalarFieldEnum | MailerLogScalarFieldEnum[]
  }

  /**
   * MailerLog findFirstOrThrow
   */
  export type MailerLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * Filter, which MailerLog to fetch.
     */
    where?: MailerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailerLogs to fetch.
     */
    orderBy?: MailerLogOrderByWithRelationInput | MailerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailerLogs.
     */
    cursor?: MailerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailerLogs.
     */
    distinct?: MailerLogScalarFieldEnum | MailerLogScalarFieldEnum[]
  }

  /**
   * MailerLog findMany
   */
  export type MailerLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * Filter, which MailerLogs to fetch.
     */
    where?: MailerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailerLogs to fetch.
     */
    orderBy?: MailerLogOrderByWithRelationInput | MailerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailerLogs.
     */
    cursor?: MailerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailerLogs.
     */
    skip?: number
    distinct?: MailerLogScalarFieldEnum | MailerLogScalarFieldEnum[]
  }

  /**
   * MailerLog create
   */
  export type MailerLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MailerLog.
     */
    data: XOR<MailerLogCreateInput, MailerLogUncheckedCreateInput>
  }

  /**
   * MailerLog createMany
   */
  export type MailerLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MailerLogs.
     */
    data: MailerLogCreateManyInput | MailerLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MailerLog createManyAndReturn
   */
  export type MailerLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * The data used to create many MailerLogs.
     */
    data: MailerLogCreateManyInput | MailerLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MailerLog update
   */
  export type MailerLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MailerLog.
     */
    data: XOR<MailerLogUpdateInput, MailerLogUncheckedUpdateInput>
    /**
     * Choose, which MailerLog to update.
     */
    where: MailerLogWhereUniqueInput
  }

  /**
   * MailerLog updateMany
   */
  export type MailerLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailerLogs.
     */
    data: XOR<MailerLogUpdateManyMutationInput, MailerLogUncheckedUpdateManyInput>
    /**
     * Filter which MailerLogs to update
     */
    where?: MailerLogWhereInput
    /**
     * Limit how many MailerLogs to update.
     */
    limit?: number
  }

  /**
   * MailerLog updateManyAndReturn
   */
  export type MailerLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * The data used to update MailerLogs.
     */
    data: XOR<MailerLogUpdateManyMutationInput, MailerLogUncheckedUpdateManyInput>
    /**
     * Filter which MailerLogs to update
     */
    where?: MailerLogWhereInput
    /**
     * Limit how many MailerLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MailerLog upsert
   */
  export type MailerLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MailerLog to update in case it exists.
     */
    where: MailerLogWhereUniqueInput
    /**
     * In case the MailerLog found by the `where` argument doesn't exist, create a new MailerLog with this data.
     */
    create: XOR<MailerLogCreateInput, MailerLogUncheckedCreateInput>
    /**
     * In case the MailerLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailerLogUpdateInput, MailerLogUncheckedUpdateInput>
  }

  /**
   * MailerLog delete
   */
  export type MailerLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
    /**
     * Filter which MailerLog to delete.
     */
    where: MailerLogWhereUniqueInput
  }

  /**
   * MailerLog deleteMany
   */
  export type MailerLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailerLogs to delete
     */
    where?: MailerLogWhereInput
    /**
     * Limit how many MailerLogs to delete.
     */
    limit?: number
  }

  /**
   * MailerLog.user
   */
  export type MailerLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MailerLog without action
   */
  export type MailerLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailerLog
     */
    select?: MailerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailerLog
     */
    omit?: MailerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailerLogInclude<ExtArgs> | null
  }


  /**
   * Model SatwaBookmark
   */

  export type AggregateSatwaBookmark = {
    _count: SatwaBookmarkCountAggregateOutputType | null
    _min: SatwaBookmarkMinAggregateOutputType | null
    _max: SatwaBookmarkMaxAggregateOutputType | null
  }

  export type SatwaBookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    satwaId: string | null
    createdAt: Date | null
  }

  export type SatwaBookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    satwaId: string | null
    createdAt: Date | null
  }

  export type SatwaBookmarkCountAggregateOutputType = {
    id: number
    userId: number
    satwaId: number
    createdAt: number
    _all: number
  }


  export type SatwaBookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    satwaId?: true
    createdAt?: true
  }

  export type SatwaBookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    satwaId?: true
    createdAt?: true
  }

  export type SatwaBookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    satwaId?: true
    createdAt?: true
    _all?: true
  }

  export type SatwaBookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatwaBookmark to aggregate.
     */
    where?: SatwaBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatwaBookmarks to fetch.
     */
    orderBy?: SatwaBookmarkOrderByWithRelationInput | SatwaBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatwaBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatwaBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatwaBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SatwaBookmarks
    **/
    _count?: true | SatwaBookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatwaBookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatwaBookmarkMaxAggregateInputType
  }

  export type GetSatwaBookmarkAggregateType<T extends SatwaBookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateSatwaBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatwaBookmark[P]>
      : GetScalarType<T[P], AggregateSatwaBookmark[P]>
  }




  export type SatwaBookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatwaBookmarkWhereInput
    orderBy?: SatwaBookmarkOrderByWithAggregationInput | SatwaBookmarkOrderByWithAggregationInput[]
    by: SatwaBookmarkScalarFieldEnum[] | SatwaBookmarkScalarFieldEnum
    having?: SatwaBookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatwaBookmarkCountAggregateInputType | true
    _min?: SatwaBookmarkMinAggregateInputType
    _max?: SatwaBookmarkMaxAggregateInputType
  }

  export type SatwaBookmarkGroupByOutputType = {
    id: string
    userId: string
    satwaId: string
    createdAt: Date
    _count: SatwaBookmarkCountAggregateOutputType | null
    _min: SatwaBookmarkMinAggregateOutputType | null
    _max: SatwaBookmarkMaxAggregateOutputType | null
  }

  type GetSatwaBookmarkGroupByPayload<T extends SatwaBookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatwaBookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatwaBookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatwaBookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], SatwaBookmarkGroupByOutputType[P]>
        }
      >
    >


  export type SatwaBookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    satwaId?: boolean
    createdAt?: boolean
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satwaBookmark"]>

  export type SatwaBookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    satwaId?: boolean
    createdAt?: boolean
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satwaBookmark"]>

  export type SatwaBookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    satwaId?: boolean
    createdAt?: boolean
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["satwaBookmark"]>

  export type SatwaBookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    satwaId?: boolean
    createdAt?: boolean
  }

  export type SatwaBookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "satwaId" | "createdAt", ExtArgs["result"]["satwaBookmark"]>
  export type SatwaBookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SatwaBookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SatwaBookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    satwa?: boolean | SatwaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SatwaBookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SatwaBookmark"
    objects: {
      satwa: Prisma.$SatwaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      satwaId: string
      createdAt: Date
    }, ExtArgs["result"]["satwaBookmark"]>
    composites: {}
  }

  type SatwaBookmarkGetPayload<S extends boolean | null | undefined | SatwaBookmarkDefaultArgs> = $Result.GetResult<Prisma.$SatwaBookmarkPayload, S>

  type SatwaBookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SatwaBookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SatwaBookmarkCountAggregateInputType | true
    }

  export interface SatwaBookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SatwaBookmark'], meta: { name: 'SatwaBookmark' } }
    /**
     * Find zero or one SatwaBookmark that matches the filter.
     * @param {SatwaBookmarkFindUniqueArgs} args - Arguments to find a SatwaBookmark
     * @example
     * // Get one SatwaBookmark
     * const satwaBookmark = await prisma.satwaBookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatwaBookmarkFindUniqueArgs>(args: SelectSubset<T, SatwaBookmarkFindUniqueArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SatwaBookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatwaBookmarkFindUniqueOrThrowArgs} args - Arguments to find a SatwaBookmark
     * @example
     * // Get one SatwaBookmark
     * const satwaBookmark = await prisma.satwaBookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatwaBookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, SatwaBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SatwaBookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkFindFirstArgs} args - Arguments to find a SatwaBookmark
     * @example
     * // Get one SatwaBookmark
     * const satwaBookmark = await prisma.satwaBookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatwaBookmarkFindFirstArgs>(args?: SelectSubset<T, SatwaBookmarkFindFirstArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SatwaBookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkFindFirstOrThrowArgs} args - Arguments to find a SatwaBookmark
     * @example
     * // Get one SatwaBookmark
     * const satwaBookmark = await prisma.satwaBookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatwaBookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, SatwaBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SatwaBookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SatwaBookmarks
     * const satwaBookmarks = await prisma.satwaBookmark.findMany()
     * 
     * // Get first 10 SatwaBookmarks
     * const satwaBookmarks = await prisma.satwaBookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satwaBookmarkWithIdOnly = await prisma.satwaBookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SatwaBookmarkFindManyArgs>(args?: SelectSubset<T, SatwaBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SatwaBookmark.
     * @param {SatwaBookmarkCreateArgs} args - Arguments to create a SatwaBookmark.
     * @example
     * // Create one SatwaBookmark
     * const SatwaBookmark = await prisma.satwaBookmark.create({
     *   data: {
     *     // ... data to create a SatwaBookmark
     *   }
     * })
     * 
     */
    create<T extends SatwaBookmarkCreateArgs>(args: SelectSubset<T, SatwaBookmarkCreateArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SatwaBookmarks.
     * @param {SatwaBookmarkCreateManyArgs} args - Arguments to create many SatwaBookmarks.
     * @example
     * // Create many SatwaBookmarks
     * const satwaBookmark = await prisma.satwaBookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SatwaBookmarkCreateManyArgs>(args?: SelectSubset<T, SatwaBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SatwaBookmarks and returns the data saved in the database.
     * @param {SatwaBookmarkCreateManyAndReturnArgs} args - Arguments to create many SatwaBookmarks.
     * @example
     * // Create many SatwaBookmarks
     * const satwaBookmark = await prisma.satwaBookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SatwaBookmarks and only return the `id`
     * const satwaBookmarkWithIdOnly = await prisma.satwaBookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SatwaBookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, SatwaBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SatwaBookmark.
     * @param {SatwaBookmarkDeleteArgs} args - Arguments to delete one SatwaBookmark.
     * @example
     * // Delete one SatwaBookmark
     * const SatwaBookmark = await prisma.satwaBookmark.delete({
     *   where: {
     *     // ... filter to delete one SatwaBookmark
     *   }
     * })
     * 
     */
    delete<T extends SatwaBookmarkDeleteArgs>(args: SelectSubset<T, SatwaBookmarkDeleteArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SatwaBookmark.
     * @param {SatwaBookmarkUpdateArgs} args - Arguments to update one SatwaBookmark.
     * @example
     * // Update one SatwaBookmark
     * const satwaBookmark = await prisma.satwaBookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SatwaBookmarkUpdateArgs>(args: SelectSubset<T, SatwaBookmarkUpdateArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SatwaBookmarks.
     * @param {SatwaBookmarkDeleteManyArgs} args - Arguments to filter SatwaBookmarks to delete.
     * @example
     * // Delete a few SatwaBookmarks
     * const { count } = await prisma.satwaBookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SatwaBookmarkDeleteManyArgs>(args?: SelectSubset<T, SatwaBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatwaBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SatwaBookmarks
     * const satwaBookmark = await prisma.satwaBookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SatwaBookmarkUpdateManyArgs>(args: SelectSubset<T, SatwaBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatwaBookmarks and returns the data updated in the database.
     * @param {SatwaBookmarkUpdateManyAndReturnArgs} args - Arguments to update many SatwaBookmarks.
     * @example
     * // Update many SatwaBookmarks
     * const satwaBookmark = await prisma.satwaBookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SatwaBookmarks and only return the `id`
     * const satwaBookmarkWithIdOnly = await prisma.satwaBookmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends SatwaBookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, SatwaBookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SatwaBookmark.
     * @param {SatwaBookmarkUpsertArgs} args - Arguments to update or create a SatwaBookmark.
     * @example
     * // Update or create a SatwaBookmark
     * const satwaBookmark = await prisma.satwaBookmark.upsert({
     *   create: {
     *     // ... data to create a SatwaBookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SatwaBookmark we want to update
     *   }
     * })
     */
    upsert<T extends SatwaBookmarkUpsertArgs>(args: SelectSubset<T, SatwaBookmarkUpsertArgs<ExtArgs>>): Prisma__SatwaBookmarkClient<$Result.GetResult<Prisma.$SatwaBookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SatwaBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkCountArgs} args - Arguments to filter SatwaBookmarks to count.
     * @example
     * // Count the number of SatwaBookmarks
     * const count = await prisma.satwaBookmark.count({
     *   where: {
     *     // ... the filter for the SatwaBookmarks we want to count
     *   }
     * })
    **/
    count<T extends SatwaBookmarkCountArgs>(
      args?: Subset<T, SatwaBookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatwaBookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SatwaBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatwaBookmarkAggregateArgs>(args: Subset<T, SatwaBookmarkAggregateArgs>): Prisma.PrismaPromise<GetSatwaBookmarkAggregateType<T>>

    /**
     * Group by SatwaBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatwaBookmarkGroupByArgs} args - Group by arguments.
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
      T extends SatwaBookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatwaBookmarkGroupByArgs['orderBy'] }
        : { orderBy?: SatwaBookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SatwaBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatwaBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SatwaBookmark model
   */
  readonly fields: SatwaBookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SatwaBookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatwaBookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    satwa<T extends SatwaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SatwaDefaultArgs<ExtArgs>>): Prisma__SatwaClient<$Result.GetResult<Prisma.$SatwaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SatwaBookmark model
   */
  interface SatwaBookmarkFieldRefs {
    readonly id: FieldRef<"SatwaBookmark", 'String'>
    readonly userId: FieldRef<"SatwaBookmark", 'String'>
    readonly satwaId: FieldRef<"SatwaBookmark", 'String'>
    readonly createdAt: FieldRef<"SatwaBookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SatwaBookmark findUnique
   */
  export type SatwaBookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which SatwaBookmark to fetch.
     */
    where: SatwaBookmarkWhereUniqueInput
  }

  /**
   * SatwaBookmark findUniqueOrThrow
   */
  export type SatwaBookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which SatwaBookmark to fetch.
     */
    where: SatwaBookmarkWhereUniqueInput
  }

  /**
   * SatwaBookmark findFirst
   */
  export type SatwaBookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which SatwaBookmark to fetch.
     */
    where?: SatwaBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatwaBookmarks to fetch.
     */
    orderBy?: SatwaBookmarkOrderByWithRelationInput | SatwaBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatwaBookmarks.
     */
    cursor?: SatwaBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatwaBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatwaBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatwaBookmarks.
     */
    distinct?: SatwaBookmarkScalarFieldEnum | SatwaBookmarkScalarFieldEnum[]
  }

  /**
   * SatwaBookmark findFirstOrThrow
   */
  export type SatwaBookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which SatwaBookmark to fetch.
     */
    where?: SatwaBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatwaBookmarks to fetch.
     */
    orderBy?: SatwaBookmarkOrderByWithRelationInput | SatwaBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatwaBookmarks.
     */
    cursor?: SatwaBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatwaBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatwaBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatwaBookmarks.
     */
    distinct?: SatwaBookmarkScalarFieldEnum | SatwaBookmarkScalarFieldEnum[]
  }

  /**
   * SatwaBookmark findMany
   */
  export type SatwaBookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which SatwaBookmarks to fetch.
     */
    where?: SatwaBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatwaBookmarks to fetch.
     */
    orderBy?: SatwaBookmarkOrderByWithRelationInput | SatwaBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SatwaBookmarks.
     */
    cursor?: SatwaBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatwaBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatwaBookmarks.
     */
    skip?: number
    distinct?: SatwaBookmarkScalarFieldEnum | SatwaBookmarkScalarFieldEnum[]
  }

  /**
   * SatwaBookmark create
   */
  export type SatwaBookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a SatwaBookmark.
     */
    data: XOR<SatwaBookmarkCreateInput, SatwaBookmarkUncheckedCreateInput>
  }

  /**
   * SatwaBookmark createMany
   */
  export type SatwaBookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SatwaBookmarks.
     */
    data: SatwaBookmarkCreateManyInput | SatwaBookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SatwaBookmark createManyAndReturn
   */
  export type SatwaBookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many SatwaBookmarks.
     */
    data: SatwaBookmarkCreateManyInput | SatwaBookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SatwaBookmark update
   */
  export type SatwaBookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a SatwaBookmark.
     */
    data: XOR<SatwaBookmarkUpdateInput, SatwaBookmarkUncheckedUpdateInput>
    /**
     * Choose, which SatwaBookmark to update.
     */
    where: SatwaBookmarkWhereUniqueInput
  }

  /**
   * SatwaBookmark updateMany
   */
  export type SatwaBookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SatwaBookmarks.
     */
    data: XOR<SatwaBookmarkUpdateManyMutationInput, SatwaBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which SatwaBookmarks to update
     */
    where?: SatwaBookmarkWhereInput
    /**
     * Limit how many SatwaBookmarks to update.
     */
    limit?: number
  }

  /**
   * SatwaBookmark updateManyAndReturn
   */
  export type SatwaBookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * The data used to update SatwaBookmarks.
     */
    data: XOR<SatwaBookmarkUpdateManyMutationInput, SatwaBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which SatwaBookmarks to update
     */
    where?: SatwaBookmarkWhereInput
    /**
     * Limit how many SatwaBookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SatwaBookmark upsert
   */
  export type SatwaBookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the SatwaBookmark to update in case it exists.
     */
    where: SatwaBookmarkWhereUniqueInput
    /**
     * In case the SatwaBookmark found by the `where` argument doesn't exist, create a new SatwaBookmark with this data.
     */
    create: XOR<SatwaBookmarkCreateInput, SatwaBookmarkUncheckedCreateInput>
    /**
     * In case the SatwaBookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatwaBookmarkUpdateInput, SatwaBookmarkUncheckedUpdateInput>
  }

  /**
   * SatwaBookmark delete
   */
  export type SatwaBookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
    /**
     * Filter which SatwaBookmark to delete.
     */
    where: SatwaBookmarkWhereUniqueInput
  }

  /**
   * SatwaBookmark deleteMany
   */
  export type SatwaBookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatwaBookmarks to delete
     */
    where?: SatwaBookmarkWhereInput
    /**
     * Limit how many SatwaBookmarks to delete.
     */
    limit?: number
  }

  /**
   * SatwaBookmark without action
   */
  export type SatwaBookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatwaBookmark
     */
    select?: SatwaBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatwaBookmark
     */
    omit?: SatwaBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatwaBookmarkInclude<ExtArgs> | null
  }


  /**
   * Model ShelterBookmark
   */

  export type AggregateShelterBookmark = {
    _count: ShelterBookmarkCountAggregateOutputType | null
    _min: ShelterBookmarkMinAggregateOutputType | null
    _max: ShelterBookmarkMaxAggregateOutputType | null
  }

  export type ShelterBookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    shelterId: string | null
    createdAt: Date | null
  }

  export type ShelterBookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    shelterId: string | null
    createdAt: Date | null
  }

  export type ShelterBookmarkCountAggregateOutputType = {
    id: number
    userId: number
    shelterId: number
    createdAt: number
    _all: number
  }


  export type ShelterBookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    shelterId?: true
    createdAt?: true
  }

  export type ShelterBookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    shelterId?: true
    createdAt?: true
  }

  export type ShelterBookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    shelterId?: true
    createdAt?: true
    _all?: true
  }

  export type ShelterBookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShelterBookmark to aggregate.
     */
    where?: ShelterBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBookmarks to fetch.
     */
    orderBy?: ShelterBookmarkOrderByWithRelationInput | ShelterBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelterBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShelterBookmarks
    **/
    _count?: true | ShelterBookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterBookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterBookmarkMaxAggregateInputType
  }

  export type GetShelterBookmarkAggregateType<T extends ShelterBookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateShelterBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelterBookmark[P]>
      : GetScalarType<T[P], AggregateShelterBookmark[P]>
  }




  export type ShelterBookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterBookmarkWhereInput
    orderBy?: ShelterBookmarkOrderByWithAggregationInput | ShelterBookmarkOrderByWithAggregationInput[]
    by: ShelterBookmarkScalarFieldEnum[] | ShelterBookmarkScalarFieldEnum
    having?: ShelterBookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterBookmarkCountAggregateInputType | true
    _min?: ShelterBookmarkMinAggregateInputType
    _max?: ShelterBookmarkMaxAggregateInputType
  }

  export type ShelterBookmarkGroupByOutputType = {
    id: string
    userId: string
    shelterId: string
    createdAt: Date
    _count: ShelterBookmarkCountAggregateOutputType | null
    _min: ShelterBookmarkMinAggregateOutputType | null
    _max: ShelterBookmarkMaxAggregateOutputType | null
  }

  type GetShelterBookmarkGroupByPayload<T extends ShelterBookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterBookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterBookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterBookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterBookmarkGroupByOutputType[P]>
        }
      >
    >


  export type ShelterBookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelterBookmark"]>

  export type ShelterBookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelterBookmark"]>

  export type ShelterBookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shelterId?: boolean
    createdAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelterBookmark"]>

  export type ShelterBookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    shelterId?: boolean
    createdAt?: boolean
  }

  export type ShelterBookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shelterId" | "createdAt", ExtArgs["result"]["shelterBookmark"]>
  export type ShelterBookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShelterBookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShelterBookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShelterBookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShelterBookmark"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      shelterId: string
      createdAt: Date
    }, ExtArgs["result"]["shelterBookmark"]>
    composites: {}
  }

  type ShelterBookmarkGetPayload<S extends boolean | null | undefined | ShelterBookmarkDefaultArgs> = $Result.GetResult<Prisma.$ShelterBookmarkPayload, S>

  type ShelterBookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelterBookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterBookmarkCountAggregateInputType | true
    }

  export interface ShelterBookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShelterBookmark'], meta: { name: 'ShelterBookmark' } }
    /**
     * Find zero or one ShelterBookmark that matches the filter.
     * @param {ShelterBookmarkFindUniqueArgs} args - Arguments to find a ShelterBookmark
     * @example
     * // Get one ShelterBookmark
     * const shelterBookmark = await prisma.shelterBookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelterBookmarkFindUniqueArgs>(args: SelectSubset<T, ShelterBookmarkFindUniqueArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShelterBookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelterBookmarkFindUniqueOrThrowArgs} args - Arguments to find a ShelterBookmark
     * @example
     * // Get one ShelterBookmark
     * const shelterBookmark = await prisma.shelterBookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelterBookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelterBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShelterBookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkFindFirstArgs} args - Arguments to find a ShelterBookmark
     * @example
     * // Get one ShelterBookmark
     * const shelterBookmark = await prisma.shelterBookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelterBookmarkFindFirstArgs>(args?: SelectSubset<T, ShelterBookmarkFindFirstArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShelterBookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkFindFirstOrThrowArgs} args - Arguments to find a ShelterBookmark
     * @example
     * // Get one ShelterBookmark
     * const shelterBookmark = await prisma.shelterBookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelterBookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelterBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShelterBookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShelterBookmarks
     * const shelterBookmarks = await prisma.shelterBookmark.findMany()
     * 
     * // Get first 10 ShelterBookmarks
     * const shelterBookmarks = await prisma.shelterBookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelterBookmarkWithIdOnly = await prisma.shelterBookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelterBookmarkFindManyArgs>(args?: SelectSubset<T, ShelterBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShelterBookmark.
     * @param {ShelterBookmarkCreateArgs} args - Arguments to create a ShelterBookmark.
     * @example
     * // Create one ShelterBookmark
     * const ShelterBookmark = await prisma.shelterBookmark.create({
     *   data: {
     *     // ... data to create a ShelterBookmark
     *   }
     * })
     * 
     */
    create<T extends ShelterBookmarkCreateArgs>(args: SelectSubset<T, ShelterBookmarkCreateArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShelterBookmarks.
     * @param {ShelterBookmarkCreateManyArgs} args - Arguments to create many ShelterBookmarks.
     * @example
     * // Create many ShelterBookmarks
     * const shelterBookmark = await prisma.shelterBookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelterBookmarkCreateManyArgs>(args?: SelectSubset<T, ShelterBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShelterBookmarks and returns the data saved in the database.
     * @param {ShelterBookmarkCreateManyAndReturnArgs} args - Arguments to create many ShelterBookmarks.
     * @example
     * // Create many ShelterBookmarks
     * const shelterBookmark = await prisma.shelterBookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShelterBookmarks and only return the `id`
     * const shelterBookmarkWithIdOnly = await prisma.shelterBookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelterBookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelterBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShelterBookmark.
     * @param {ShelterBookmarkDeleteArgs} args - Arguments to delete one ShelterBookmark.
     * @example
     * // Delete one ShelterBookmark
     * const ShelterBookmark = await prisma.shelterBookmark.delete({
     *   where: {
     *     // ... filter to delete one ShelterBookmark
     *   }
     * })
     * 
     */
    delete<T extends ShelterBookmarkDeleteArgs>(args: SelectSubset<T, ShelterBookmarkDeleteArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShelterBookmark.
     * @param {ShelterBookmarkUpdateArgs} args - Arguments to update one ShelterBookmark.
     * @example
     * // Update one ShelterBookmark
     * const shelterBookmark = await prisma.shelterBookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelterBookmarkUpdateArgs>(args: SelectSubset<T, ShelterBookmarkUpdateArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShelterBookmarks.
     * @param {ShelterBookmarkDeleteManyArgs} args - Arguments to filter ShelterBookmarks to delete.
     * @example
     * // Delete a few ShelterBookmarks
     * const { count } = await prisma.shelterBookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelterBookmarkDeleteManyArgs>(args?: SelectSubset<T, ShelterBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShelterBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShelterBookmarks
     * const shelterBookmark = await prisma.shelterBookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelterBookmarkUpdateManyArgs>(args: SelectSubset<T, ShelterBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShelterBookmarks and returns the data updated in the database.
     * @param {ShelterBookmarkUpdateManyAndReturnArgs} args - Arguments to update many ShelterBookmarks.
     * @example
     * // Update many ShelterBookmarks
     * const shelterBookmark = await prisma.shelterBookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShelterBookmarks and only return the `id`
     * const shelterBookmarkWithIdOnly = await prisma.shelterBookmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShelterBookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelterBookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShelterBookmark.
     * @param {ShelterBookmarkUpsertArgs} args - Arguments to update or create a ShelterBookmark.
     * @example
     * // Update or create a ShelterBookmark
     * const shelterBookmark = await prisma.shelterBookmark.upsert({
     *   create: {
     *     // ... data to create a ShelterBookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShelterBookmark we want to update
     *   }
     * })
     */
    upsert<T extends ShelterBookmarkUpsertArgs>(args: SelectSubset<T, ShelterBookmarkUpsertArgs<ExtArgs>>): Prisma__ShelterBookmarkClient<$Result.GetResult<Prisma.$ShelterBookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShelterBookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkCountArgs} args - Arguments to filter ShelterBookmarks to count.
     * @example
     * // Count the number of ShelterBookmarks
     * const count = await prisma.shelterBookmark.count({
     *   where: {
     *     // ... the filter for the ShelterBookmarks we want to count
     *   }
     * })
    **/
    count<T extends ShelterBookmarkCountArgs>(
      args?: Subset<T, ShelterBookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterBookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShelterBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShelterBookmarkAggregateArgs>(args: Subset<T, ShelterBookmarkAggregateArgs>): Prisma.PrismaPromise<GetShelterBookmarkAggregateType<T>>

    /**
     * Group by ShelterBookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterBookmarkGroupByArgs} args - Group by arguments.
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
      T extends ShelterBookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelterBookmarkGroupByArgs['orderBy'] }
        : { orderBy?: ShelterBookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShelterBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShelterBookmark model
   */
  readonly fields: ShelterBookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShelterBookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelterBookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShelterBookmark model
   */
  interface ShelterBookmarkFieldRefs {
    readonly id: FieldRef<"ShelterBookmark", 'String'>
    readonly userId: FieldRef<"ShelterBookmark", 'String'>
    readonly shelterId: FieldRef<"ShelterBookmark", 'String'>
    readonly createdAt: FieldRef<"ShelterBookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShelterBookmark findUnique
   */
  export type ShelterBookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBookmark to fetch.
     */
    where: ShelterBookmarkWhereUniqueInput
  }

  /**
   * ShelterBookmark findUniqueOrThrow
   */
  export type ShelterBookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBookmark to fetch.
     */
    where: ShelterBookmarkWhereUniqueInput
  }

  /**
   * ShelterBookmark findFirst
   */
  export type ShelterBookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBookmark to fetch.
     */
    where?: ShelterBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBookmarks to fetch.
     */
    orderBy?: ShelterBookmarkOrderByWithRelationInput | ShelterBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShelterBookmarks.
     */
    cursor?: ShelterBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShelterBookmarks.
     */
    distinct?: ShelterBookmarkScalarFieldEnum | ShelterBookmarkScalarFieldEnum[]
  }

  /**
   * ShelterBookmark findFirstOrThrow
   */
  export type ShelterBookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBookmark to fetch.
     */
    where?: ShelterBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBookmarks to fetch.
     */
    orderBy?: ShelterBookmarkOrderByWithRelationInput | ShelterBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShelterBookmarks.
     */
    cursor?: ShelterBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShelterBookmarks.
     */
    distinct?: ShelterBookmarkScalarFieldEnum | ShelterBookmarkScalarFieldEnum[]
  }

  /**
   * ShelterBookmark findMany
   */
  export type ShelterBookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * Filter, which ShelterBookmarks to fetch.
     */
    where?: ShelterBookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShelterBookmarks to fetch.
     */
    orderBy?: ShelterBookmarkOrderByWithRelationInput | ShelterBookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShelterBookmarks.
     */
    cursor?: ShelterBookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShelterBookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShelterBookmarks.
     */
    skip?: number
    distinct?: ShelterBookmarkScalarFieldEnum | ShelterBookmarkScalarFieldEnum[]
  }

  /**
   * ShelterBookmark create
   */
  export type ShelterBookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a ShelterBookmark.
     */
    data: XOR<ShelterBookmarkCreateInput, ShelterBookmarkUncheckedCreateInput>
  }

  /**
   * ShelterBookmark createMany
   */
  export type ShelterBookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShelterBookmarks.
     */
    data: ShelterBookmarkCreateManyInput | ShelterBookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShelterBookmark createManyAndReturn
   */
  export type ShelterBookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many ShelterBookmarks.
     */
    data: ShelterBookmarkCreateManyInput | ShelterBookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShelterBookmark update
   */
  export type ShelterBookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a ShelterBookmark.
     */
    data: XOR<ShelterBookmarkUpdateInput, ShelterBookmarkUncheckedUpdateInput>
    /**
     * Choose, which ShelterBookmark to update.
     */
    where: ShelterBookmarkWhereUniqueInput
  }

  /**
   * ShelterBookmark updateMany
   */
  export type ShelterBookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShelterBookmarks.
     */
    data: XOR<ShelterBookmarkUpdateManyMutationInput, ShelterBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which ShelterBookmarks to update
     */
    where?: ShelterBookmarkWhereInput
    /**
     * Limit how many ShelterBookmarks to update.
     */
    limit?: number
  }

  /**
   * ShelterBookmark updateManyAndReturn
   */
  export type ShelterBookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * The data used to update ShelterBookmarks.
     */
    data: XOR<ShelterBookmarkUpdateManyMutationInput, ShelterBookmarkUncheckedUpdateManyInput>
    /**
     * Filter which ShelterBookmarks to update
     */
    where?: ShelterBookmarkWhereInput
    /**
     * Limit how many ShelterBookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShelterBookmark upsert
   */
  export type ShelterBookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the ShelterBookmark to update in case it exists.
     */
    where: ShelterBookmarkWhereUniqueInput
    /**
     * In case the ShelterBookmark found by the `where` argument doesn't exist, create a new ShelterBookmark with this data.
     */
    create: XOR<ShelterBookmarkCreateInput, ShelterBookmarkUncheckedCreateInput>
    /**
     * In case the ShelterBookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelterBookmarkUpdateInput, ShelterBookmarkUncheckedUpdateInput>
  }

  /**
   * ShelterBookmark delete
   */
  export type ShelterBookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
    /**
     * Filter which ShelterBookmark to delete.
     */
    where: ShelterBookmarkWhereUniqueInput
  }

  /**
   * ShelterBookmark deleteMany
   */
  export type ShelterBookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShelterBookmarks to delete
     */
    where?: ShelterBookmarkWhereInput
    /**
     * Limit how many ShelterBookmarks to delete.
     */
    limit?: number
  }

  /**
   * ShelterBookmark without action
   */
  export type ShelterBookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterBookmark
     */
    select?: ShelterBookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShelterBookmark
     */
    omit?: ShelterBookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterBookmarkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    namaLengkap: 'namaLengkap',
    noWhatsapp: 'noWhatsapp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShelterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    alamatLengkap: 'alamatLengkap',
    status: 'status',
    deskripsi: 'deskripsi',
    fotoBanner: 'fotoBanner',
    isAktif: 'isAktif',
    kota: 'kota',
    namaShelter: 'namaShelter',
    noWhatsapp: 'noWhatsapp'
  };

  export type ShelterScalarFieldEnum = (typeof ShelterScalarFieldEnum)[keyof typeof ShelterScalarFieldEnum]


  export const ShelterBankScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    namaBank: 'namaBank',
    nomorRekening: 'nomorRekening',
    atasNamaRekening: 'atasNamaRekening',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShelterBankScalarFieldEnum = (typeof ShelterBankScalarFieldEnum)[keyof typeof ShelterBankScalarFieldEnum]


  export const SatwaScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    nama: 'nama',
    jenis: 'jenis',
    ras: 'ras',
    umur: 'umur',
    kelamin: 'kelamin',
    foto: 'foto',
    deskripsi: 'deskripsi',
    danaTerkumpul: 'danaTerkumpul',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SatwaScalarFieldEnum = (typeof SatwaScalarFieldEnum)[keyof typeof SatwaScalarFieldEnum]


  export const DonasiScalarFieldEnum: {
    id: 'id',
    donaturId: 'donaturId',
    satwaId: 'satwaId',
    shelterId: 'shelterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    buktiResi: 'buktiResi',
    catatan: 'catatan',
    nominal: 'nominal',
    status: 'status',
    alasanDitolak: 'alasanDitolak',
    diverifikasiAt: 'diverifikasiAt'
  };

  export type DonasiScalarFieldEnum = (typeof DonasiScalarFieldEnum)[keyof typeof DonasiScalarFieldEnum]


  export const LaporanScalarFieldEnum: {
    id: 'id',
    satwaId: 'satwaId',
    judul: 'judul',
    deskripsi: 'deskripsi',
    foto: 'foto',
    fotoPublicId: 'fotoPublicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type LaporanScalarFieldEnum = (typeof LaporanScalarFieldEnum)[keyof typeof LaporanScalarFieldEnum]


  export const MailerLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    emailTo: 'emailTo',
    subject: 'subject',
    body: 'body',
    referenceId: 'referenceId',
    sentAt: 'sentAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted_at: 'deleted_at',
    type: 'type',
    referenceType: 'referenceType',
    status: 'status'
  };

  export type MailerLogScalarFieldEnum = (typeof MailerLogScalarFieldEnum)[keyof typeof MailerLogScalarFieldEnum]


  export const SatwaBookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    satwaId: 'satwaId',
    createdAt: 'createdAt'
  };

  export type SatwaBookmarkScalarFieldEnum = (typeof SatwaBookmarkScalarFieldEnum)[keyof typeof SatwaBookmarkScalarFieldEnum]


  export const ShelterBookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shelterId: 'shelterId',
    createdAt: 'createdAt'
  };

  export type ShelterBookmarkScalarFieldEnum = (typeof ShelterBookmarkScalarFieldEnum)[keyof typeof ShelterBookmarkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'JenisSatwa'
   */
  export type EnumJenisSatwaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisSatwa'>
    


  /**
   * Reference to a field of type 'JenisSatwa[]'
   */
  export type ListEnumJenisSatwaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisSatwa[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'KelaminSatwa'
   */
  export type EnumKelaminSatwaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KelaminSatwa'>
    


  /**
   * Reference to a field of type 'KelaminSatwa[]'
   */
  export type ListEnumKelaminSatwaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KelaminSatwa[]'>
    


  /**
   * Reference to a field of type 'StatusSatwa'
   */
  export type EnumStatusSatwaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSatwa'>
    


  /**
   * Reference to a field of type 'StatusSatwa[]'
   */
  export type ListEnumStatusSatwaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSatwa[]'>
    


  /**
   * Reference to a field of type 'MailerLogType'
   */
  export type EnumMailerLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailerLogType'>
    


  /**
   * Reference to a field of type 'MailerLogType[]'
   */
  export type ListEnumMailerLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailerLogType[]'>
    


  /**
   * Reference to a field of type 'MailerReferenceType'
   */
  export type EnumMailerReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailerReferenceType'>
    


  /**
   * Reference to a field of type 'MailerReferenceType[]'
   */
  export type ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailerReferenceType[]'>
    


  /**
   * Reference to a field of type 'MailerStatus'
   */
  export type EnumMailerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailerStatus'>
    


  /**
   * Reference to a field of type 'MailerStatus[]'
   */
  export type ListEnumMailerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MailerStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    namaLengkap?: StringFilter<"User"> | string
    noWhatsapp?: StringNullableFilter<"User"> | string | null
    satwaBookmarks?: SatwaBookmarkListRelationFilter
    donasi?: DonasiListRelationFilter
    shelter?: XOR<ShelterNullableScalarRelationFilter, ShelterWhereInput> | null
    shelterBookmarks?: ShelterBookmarkListRelationFilter
    mailerLogs?: MailerLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    namaLengkap?: SortOrder
    noWhatsapp?: SortOrderInput | SortOrder
    satwaBookmarks?: SatwaBookmarkOrderByRelationAggregateInput
    donasi?: DonasiOrderByRelationAggregateInput
    shelter?: ShelterOrderByWithRelationInput
    shelterBookmarks?: ShelterBookmarkOrderByRelationAggregateInput
    mailerLogs?: MailerLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    namaLengkap?: StringFilter<"User"> | string
    noWhatsapp?: StringNullableFilter<"User"> | string | null
    satwaBookmarks?: SatwaBookmarkListRelationFilter
    donasi?: DonasiListRelationFilter
    shelter?: XOR<ShelterNullableScalarRelationFilter, ShelterWhereInput> | null
    shelterBookmarks?: ShelterBookmarkListRelationFilter
    mailerLogs?: MailerLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    namaLengkap?: SortOrder
    noWhatsapp?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    namaLengkap?: StringWithAggregatesFilter<"User"> | string
    noWhatsapp?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ShelterWhereInput = {
    AND?: ShelterWhereInput | ShelterWhereInput[]
    OR?: ShelterWhereInput[]
    NOT?: ShelterWhereInput | ShelterWhereInput[]
    id?: StringFilter<"Shelter"> | string
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shelter"> | Date | string | null
    userId?: StringFilter<"Shelter"> | string
    alamatLengkap?: StringFilter<"Shelter"> | string
    status?: EnumStatusFilter<"Shelter"> | $Enums.Status
    deskripsi?: StringFilter<"Shelter"> | string
    fotoBanner?: StringNullableFilter<"Shelter"> | string | null
    isAktif?: BoolFilter<"Shelter"> | boolean
    kota?: StringFilter<"Shelter"> | string
    namaShelter?: StringFilter<"Shelter"> | string
    noWhatsapp?: StringFilter<"Shelter"> | string
    donasi?: DonasiListRelationFilter
    satwa?: SatwaListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rekening?: XOR<ShelterBankNullableScalarRelationFilter, ShelterBankWhereInput> | null
    bookmarks?: ShelterBookmarkListRelationFilter
  }

  export type ShelterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    alamatLengkap?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    fotoBanner?: SortOrderInput | SortOrder
    isAktif?: SortOrder
    kota?: SortOrder
    namaShelter?: SortOrder
    noWhatsapp?: SortOrder
    donasi?: DonasiOrderByRelationAggregateInput
    satwa?: SatwaOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    rekening?: ShelterBankOrderByWithRelationInput
    bookmarks?: ShelterBookmarkOrderByRelationAggregateInput
  }

  export type ShelterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ShelterWhereInput | ShelterWhereInput[]
    OR?: ShelterWhereInput[]
    NOT?: ShelterWhereInput | ShelterWhereInput[]
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shelter"> | Date | string | null
    alamatLengkap?: StringFilter<"Shelter"> | string
    status?: EnumStatusFilter<"Shelter"> | $Enums.Status
    deskripsi?: StringFilter<"Shelter"> | string
    fotoBanner?: StringNullableFilter<"Shelter"> | string | null
    isAktif?: BoolFilter<"Shelter"> | boolean
    kota?: StringFilter<"Shelter"> | string
    namaShelter?: StringFilter<"Shelter"> | string
    noWhatsapp?: StringFilter<"Shelter"> | string
    donasi?: DonasiListRelationFilter
    satwa?: SatwaListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rekening?: XOR<ShelterBankNullableScalarRelationFilter, ShelterBankWhereInput> | null
    bookmarks?: ShelterBookmarkListRelationFilter
  }, "id" | "userId">

  export type ShelterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    alamatLengkap?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    fotoBanner?: SortOrderInput | SortOrder
    isAktif?: SortOrder
    kota?: SortOrder
    namaShelter?: SortOrder
    noWhatsapp?: SortOrder
    _count?: ShelterCountOrderByAggregateInput
    _max?: ShelterMaxOrderByAggregateInput
    _min?: ShelterMinOrderByAggregateInput
  }

  export type ShelterScalarWhereWithAggregatesInput = {
    AND?: ShelterScalarWhereWithAggregatesInput | ShelterScalarWhereWithAggregatesInput[]
    OR?: ShelterScalarWhereWithAggregatesInput[]
    NOT?: ShelterScalarWhereWithAggregatesInput | ShelterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shelter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Shelter"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Shelter"> | string
    alamatLengkap?: StringWithAggregatesFilter<"Shelter"> | string
    status?: EnumStatusWithAggregatesFilter<"Shelter"> | $Enums.Status
    deskripsi?: StringWithAggregatesFilter<"Shelter"> | string
    fotoBanner?: StringNullableWithAggregatesFilter<"Shelter"> | string | null
    isAktif?: BoolWithAggregatesFilter<"Shelter"> | boolean
    kota?: StringWithAggregatesFilter<"Shelter"> | string
    namaShelter?: StringWithAggregatesFilter<"Shelter"> | string
    noWhatsapp?: StringWithAggregatesFilter<"Shelter"> | string
  }

  export type ShelterBankWhereInput = {
    AND?: ShelterBankWhereInput | ShelterBankWhereInput[]
    OR?: ShelterBankWhereInput[]
    NOT?: ShelterBankWhereInput | ShelterBankWhereInput[]
    id?: StringFilter<"ShelterBank"> | string
    shelterId?: StringFilter<"ShelterBank"> | string
    namaBank?: StringFilter<"ShelterBank"> | string
    nomorRekening?: StringFilter<"ShelterBank"> | string
    atasNamaRekening?: StringFilter<"ShelterBank"> | string
    createdAt?: DateTimeFilter<"ShelterBank"> | Date | string
    updatedAt?: DateTimeFilter<"ShelterBank"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }

  export type ShelterBankOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    namaBank?: SortOrder
    nomorRekening?: SortOrder
    atasNamaRekening?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shelter?: ShelterOrderByWithRelationInput
  }

  export type ShelterBankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shelterId?: string
    AND?: ShelterBankWhereInput | ShelterBankWhereInput[]
    OR?: ShelterBankWhereInput[]
    NOT?: ShelterBankWhereInput | ShelterBankWhereInput[]
    namaBank?: StringFilter<"ShelterBank"> | string
    nomorRekening?: StringFilter<"ShelterBank"> | string
    atasNamaRekening?: StringFilter<"ShelterBank"> | string
    createdAt?: DateTimeFilter<"ShelterBank"> | Date | string
    updatedAt?: DateTimeFilter<"ShelterBank"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }, "id" | "shelterId">

  export type ShelterBankOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    namaBank?: SortOrder
    nomorRekening?: SortOrder
    atasNamaRekening?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShelterBankCountOrderByAggregateInput
    _max?: ShelterBankMaxOrderByAggregateInput
    _min?: ShelterBankMinOrderByAggregateInput
  }

  export type ShelterBankScalarWhereWithAggregatesInput = {
    AND?: ShelterBankScalarWhereWithAggregatesInput | ShelterBankScalarWhereWithAggregatesInput[]
    OR?: ShelterBankScalarWhereWithAggregatesInput[]
    NOT?: ShelterBankScalarWhereWithAggregatesInput | ShelterBankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShelterBank"> | string
    shelterId?: StringWithAggregatesFilter<"ShelterBank"> | string
    namaBank?: StringWithAggregatesFilter<"ShelterBank"> | string
    nomorRekening?: StringWithAggregatesFilter<"ShelterBank"> | string
    atasNamaRekening?: StringWithAggregatesFilter<"ShelterBank"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShelterBank"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShelterBank"> | Date | string
  }

  export type SatwaWhereInput = {
    AND?: SatwaWhereInput | SatwaWhereInput[]
    OR?: SatwaWhereInput[]
    NOT?: SatwaWhereInput | SatwaWhereInput[]
    id?: StringFilter<"Satwa"> | string
    shelterId?: StringFilter<"Satwa"> | string
    nama?: StringFilter<"Satwa"> | string
    jenis?: EnumJenisSatwaFilter<"Satwa"> | $Enums.JenisSatwa
    ras?: StringNullableFilter<"Satwa"> | string | null
    umur?: IntFilter<"Satwa"> | number
    kelamin?: EnumKelaminSatwaFilter<"Satwa"> | $Enums.KelaminSatwa
    foto?: StringNullableFilter<"Satwa"> | string | null
    deskripsi?: StringNullableFilter<"Satwa"> | string | null
    danaTerkumpul?: IntFilter<"Satwa"> | number
    status?: EnumStatusSatwaFilter<"Satwa"> | $Enums.StatusSatwa
    createdAt?: DateTimeFilter<"Satwa"> | Date | string
    updatedAt?: DateTimeFilter<"Satwa"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Satwa"> | Date | string | null
    bookmarks?: SatwaBookmarkListRelationFilter
    donasi?: DonasiListRelationFilter
    laporan?: LaporanListRelationFilter
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }

  export type SatwaOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    ras?: SortOrderInput | SortOrder
    umur?: SortOrder
    kelamin?: SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    danaTerkumpul?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    bookmarks?: SatwaBookmarkOrderByRelationAggregateInput
    donasi?: DonasiOrderByRelationAggregateInput
    laporan?: LaporanOrderByRelationAggregateInput
    shelter?: ShelterOrderByWithRelationInput
  }

  export type SatwaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SatwaWhereInput | SatwaWhereInput[]
    OR?: SatwaWhereInput[]
    NOT?: SatwaWhereInput | SatwaWhereInput[]
    shelterId?: StringFilter<"Satwa"> | string
    nama?: StringFilter<"Satwa"> | string
    jenis?: EnumJenisSatwaFilter<"Satwa"> | $Enums.JenisSatwa
    ras?: StringNullableFilter<"Satwa"> | string | null
    umur?: IntFilter<"Satwa"> | number
    kelamin?: EnumKelaminSatwaFilter<"Satwa"> | $Enums.KelaminSatwa
    foto?: StringNullableFilter<"Satwa"> | string | null
    deskripsi?: StringNullableFilter<"Satwa"> | string | null
    danaTerkumpul?: IntFilter<"Satwa"> | number
    status?: EnumStatusSatwaFilter<"Satwa"> | $Enums.StatusSatwa
    createdAt?: DateTimeFilter<"Satwa"> | Date | string
    updatedAt?: DateTimeFilter<"Satwa"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Satwa"> | Date | string | null
    bookmarks?: SatwaBookmarkListRelationFilter
    donasi?: DonasiListRelationFilter
    laporan?: LaporanListRelationFilter
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }, "id">

  export type SatwaOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    ras?: SortOrderInput | SortOrder
    umur?: SortOrder
    kelamin?: SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    danaTerkumpul?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SatwaCountOrderByAggregateInput
    _avg?: SatwaAvgOrderByAggregateInput
    _max?: SatwaMaxOrderByAggregateInput
    _min?: SatwaMinOrderByAggregateInput
    _sum?: SatwaSumOrderByAggregateInput
  }

  export type SatwaScalarWhereWithAggregatesInput = {
    AND?: SatwaScalarWhereWithAggregatesInput | SatwaScalarWhereWithAggregatesInput[]
    OR?: SatwaScalarWhereWithAggregatesInput[]
    NOT?: SatwaScalarWhereWithAggregatesInput | SatwaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Satwa"> | string
    shelterId?: StringWithAggregatesFilter<"Satwa"> | string
    nama?: StringWithAggregatesFilter<"Satwa"> | string
    jenis?: EnumJenisSatwaWithAggregatesFilter<"Satwa"> | $Enums.JenisSatwa
    ras?: StringNullableWithAggregatesFilter<"Satwa"> | string | null
    umur?: IntWithAggregatesFilter<"Satwa"> | number
    kelamin?: EnumKelaminSatwaWithAggregatesFilter<"Satwa"> | $Enums.KelaminSatwa
    foto?: StringNullableWithAggregatesFilter<"Satwa"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Satwa"> | string | null
    danaTerkumpul?: IntWithAggregatesFilter<"Satwa"> | number
    status?: EnumStatusSatwaWithAggregatesFilter<"Satwa"> | $Enums.StatusSatwa
    createdAt?: DateTimeWithAggregatesFilter<"Satwa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Satwa"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Satwa"> | Date | string | null
  }

  export type DonasiWhereInput = {
    AND?: DonasiWhereInput | DonasiWhereInput[]
    OR?: DonasiWhereInput[]
    NOT?: DonasiWhereInput | DonasiWhereInput[]
    id?: StringFilter<"Donasi"> | string
    donaturId?: StringFilter<"Donasi"> | string
    satwaId?: StringNullableFilter<"Donasi"> | string | null
    shelterId?: StringFilter<"Donasi"> | string
    createdAt?: DateTimeFilter<"Donasi"> | Date | string
    updatedAt?: DateTimeFilter<"Donasi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Donasi"> | Date | string | null
    buktiResi?: StringFilter<"Donasi"> | string
    catatan?: StringNullableFilter<"Donasi"> | string | null
    nominal?: IntFilter<"Donasi"> | number
    status?: EnumStatusFilter<"Donasi"> | $Enums.Status
    alasanDitolak?: StringNullableFilter<"Donasi"> | string | null
    diverifikasiAt?: DateTimeNullableFilter<"Donasi"> | Date | string | null
    donatur?: XOR<UserScalarRelationFilter, UserWhereInput>
    satwa?: XOR<SatwaNullableScalarRelationFilter, SatwaWhereInput> | null
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }

  export type DonasiOrderByWithRelationInput = {
    id?: SortOrder
    donaturId?: SortOrder
    satwaId?: SortOrderInput | SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    buktiResi?: SortOrder
    catatan?: SortOrderInput | SortOrder
    nominal?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    diverifikasiAt?: SortOrderInput | SortOrder
    donatur?: UserOrderByWithRelationInput
    satwa?: SatwaOrderByWithRelationInput
    shelter?: ShelterOrderByWithRelationInput
  }

  export type DonasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonasiWhereInput | DonasiWhereInput[]
    OR?: DonasiWhereInput[]
    NOT?: DonasiWhereInput | DonasiWhereInput[]
    donaturId?: StringFilter<"Donasi"> | string
    satwaId?: StringNullableFilter<"Donasi"> | string | null
    shelterId?: StringFilter<"Donasi"> | string
    createdAt?: DateTimeFilter<"Donasi"> | Date | string
    updatedAt?: DateTimeFilter<"Donasi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Donasi"> | Date | string | null
    buktiResi?: StringFilter<"Donasi"> | string
    catatan?: StringNullableFilter<"Donasi"> | string | null
    nominal?: IntFilter<"Donasi"> | number
    status?: EnumStatusFilter<"Donasi"> | $Enums.Status
    alasanDitolak?: StringNullableFilter<"Donasi"> | string | null
    diverifikasiAt?: DateTimeNullableFilter<"Donasi"> | Date | string | null
    donatur?: XOR<UserScalarRelationFilter, UserWhereInput>
    satwa?: XOR<SatwaNullableScalarRelationFilter, SatwaWhereInput> | null
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
  }, "id">

  export type DonasiOrderByWithAggregationInput = {
    id?: SortOrder
    donaturId?: SortOrder
    satwaId?: SortOrderInput | SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    buktiResi?: SortOrder
    catatan?: SortOrderInput | SortOrder
    nominal?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrderInput | SortOrder
    diverifikasiAt?: SortOrderInput | SortOrder
    _count?: DonasiCountOrderByAggregateInput
    _avg?: DonasiAvgOrderByAggregateInput
    _max?: DonasiMaxOrderByAggregateInput
    _min?: DonasiMinOrderByAggregateInput
    _sum?: DonasiSumOrderByAggregateInput
  }

  export type DonasiScalarWhereWithAggregatesInput = {
    AND?: DonasiScalarWhereWithAggregatesInput | DonasiScalarWhereWithAggregatesInput[]
    OR?: DonasiScalarWhereWithAggregatesInput[]
    NOT?: DonasiScalarWhereWithAggregatesInput | DonasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donasi"> | string
    donaturId?: StringWithAggregatesFilter<"Donasi"> | string
    satwaId?: StringNullableWithAggregatesFilter<"Donasi"> | string | null
    shelterId?: StringWithAggregatesFilter<"Donasi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Donasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donasi"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Donasi"> | Date | string | null
    buktiResi?: StringWithAggregatesFilter<"Donasi"> | string
    catatan?: StringNullableWithAggregatesFilter<"Donasi"> | string | null
    nominal?: IntWithAggregatesFilter<"Donasi"> | number
    status?: EnumStatusWithAggregatesFilter<"Donasi"> | $Enums.Status
    alasanDitolak?: StringNullableWithAggregatesFilter<"Donasi"> | string | null
    diverifikasiAt?: DateTimeNullableWithAggregatesFilter<"Donasi"> | Date | string | null
  }

  export type LaporanWhereInput = {
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    id?: StringFilter<"Laporan"> | string
    satwaId?: StringFilter<"Laporan"> | string
    judul?: StringFilter<"Laporan"> | string
    deskripsi?: StringFilter<"Laporan"> | string
    foto?: StringNullableFilter<"Laporan"> | string | null
    fotoPublicId?: StringNullableFilter<"Laporan"> | string | null
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    satwa?: XOR<SatwaScalarRelationFilter, SatwaWhereInput>
  }

  export type LaporanOrderByWithRelationInput = {
    id?: SortOrder
    satwaId?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrderInput | SortOrder
    fotoPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    satwa?: SatwaOrderByWithRelationInput
  }

  export type LaporanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    satwaId?: StringFilter<"Laporan"> | string
    judul?: StringFilter<"Laporan"> | string
    deskripsi?: StringFilter<"Laporan"> | string
    foto?: StringNullableFilter<"Laporan"> | string | null
    fotoPublicId?: StringNullableFilter<"Laporan"> | string | null
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    satwa?: XOR<SatwaScalarRelationFilter, SatwaWhereInput>
  }, "id">

  export type LaporanOrderByWithAggregationInput = {
    id?: SortOrder
    satwaId?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrderInput | SortOrder
    fotoPublicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LaporanCountOrderByAggregateInput
    _max?: LaporanMaxOrderByAggregateInput
    _min?: LaporanMinOrderByAggregateInput
  }

  export type LaporanScalarWhereWithAggregatesInput = {
    AND?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    OR?: LaporanScalarWhereWithAggregatesInput[]
    NOT?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Laporan"> | string
    satwaId?: StringWithAggregatesFilter<"Laporan"> | string
    judul?: StringWithAggregatesFilter<"Laporan"> | string
    deskripsi?: StringWithAggregatesFilter<"Laporan"> | string
    foto?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    fotoPublicId?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Laporan"> | Date | string | null
  }

  export type MailerLogWhereInput = {
    AND?: MailerLogWhereInput | MailerLogWhereInput[]
    OR?: MailerLogWhereInput[]
    NOT?: MailerLogWhereInput | MailerLogWhereInput[]
    id?: StringFilter<"MailerLog"> | string
    userId?: StringNullableFilter<"MailerLog"> | string | null
    emailTo?: StringFilter<"MailerLog"> | string
    subject?: StringFilter<"MailerLog"> | string
    body?: StringFilter<"MailerLog"> | string
    referenceId?: StringNullableFilter<"MailerLog"> | string | null
    sentAt?: DateTimeNullableFilter<"MailerLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"MailerLog"> | string | null
    createdAt?: DateTimeFilter<"MailerLog"> | Date | string
    updatedAt?: DateTimeFilter<"MailerLog"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MailerLog"> | Date | string | null
    type?: EnumMailerLogTypeFilter<"MailerLog"> | $Enums.MailerLogType
    referenceType?: EnumMailerReferenceTypeNullableFilter<"MailerLog"> | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFilter<"MailerLog"> | $Enums.MailerStatus
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MailerLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    emailTo?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    type?: SortOrder
    referenceType?: SortOrderInput | SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MailerLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MailerLogWhereInput | MailerLogWhereInput[]
    OR?: MailerLogWhereInput[]
    NOT?: MailerLogWhereInput | MailerLogWhereInput[]
    userId?: StringNullableFilter<"MailerLog"> | string | null
    emailTo?: StringFilter<"MailerLog"> | string
    subject?: StringFilter<"MailerLog"> | string
    body?: StringFilter<"MailerLog"> | string
    referenceId?: StringNullableFilter<"MailerLog"> | string | null
    sentAt?: DateTimeNullableFilter<"MailerLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"MailerLog"> | string | null
    createdAt?: DateTimeFilter<"MailerLog"> | Date | string
    updatedAt?: DateTimeFilter<"MailerLog"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MailerLog"> | Date | string | null
    type?: EnumMailerLogTypeFilter<"MailerLog"> | $Enums.MailerLogType
    referenceType?: EnumMailerReferenceTypeNullableFilter<"MailerLog"> | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFilter<"MailerLog"> | $Enums.MailerStatus
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MailerLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    emailTo?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    type?: SortOrder
    referenceType?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: MailerLogCountOrderByAggregateInput
    _max?: MailerLogMaxOrderByAggregateInput
    _min?: MailerLogMinOrderByAggregateInput
  }

  export type MailerLogScalarWhereWithAggregatesInput = {
    AND?: MailerLogScalarWhereWithAggregatesInput | MailerLogScalarWhereWithAggregatesInput[]
    OR?: MailerLogScalarWhereWithAggregatesInput[]
    NOT?: MailerLogScalarWhereWithAggregatesInput | MailerLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailerLog"> | string
    userId?: StringNullableWithAggregatesFilter<"MailerLog"> | string | null
    emailTo?: StringWithAggregatesFilter<"MailerLog"> | string
    subject?: StringWithAggregatesFilter<"MailerLog"> | string
    body?: StringWithAggregatesFilter<"MailerLog"> | string
    referenceId?: StringNullableWithAggregatesFilter<"MailerLog"> | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"MailerLog"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"MailerLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MailerLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailerLog"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"MailerLog"> | Date | string | null
    type?: EnumMailerLogTypeWithAggregatesFilter<"MailerLog"> | $Enums.MailerLogType
    referenceType?: EnumMailerReferenceTypeNullableWithAggregatesFilter<"MailerLog"> | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusWithAggregatesFilter<"MailerLog"> | $Enums.MailerStatus
  }

  export type SatwaBookmarkWhereInput = {
    AND?: SatwaBookmarkWhereInput | SatwaBookmarkWhereInput[]
    OR?: SatwaBookmarkWhereInput[]
    NOT?: SatwaBookmarkWhereInput | SatwaBookmarkWhereInput[]
    id?: StringFilter<"SatwaBookmark"> | string
    userId?: StringFilter<"SatwaBookmark"> | string
    satwaId?: StringFilter<"SatwaBookmark"> | string
    createdAt?: DateTimeFilter<"SatwaBookmark"> | Date | string
    satwa?: XOR<SatwaScalarRelationFilter, SatwaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SatwaBookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    satwaId?: SortOrder
    createdAt?: SortOrder
    satwa?: SatwaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SatwaBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_satwaId?: SatwaBookmarkUserIdSatwaIdCompoundUniqueInput
    AND?: SatwaBookmarkWhereInput | SatwaBookmarkWhereInput[]
    OR?: SatwaBookmarkWhereInput[]
    NOT?: SatwaBookmarkWhereInput | SatwaBookmarkWhereInput[]
    userId?: StringFilter<"SatwaBookmark"> | string
    satwaId?: StringFilter<"SatwaBookmark"> | string
    createdAt?: DateTimeFilter<"SatwaBookmark"> | Date | string
    satwa?: XOR<SatwaScalarRelationFilter, SatwaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_satwaId">

  export type SatwaBookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    satwaId?: SortOrder
    createdAt?: SortOrder
    _count?: SatwaBookmarkCountOrderByAggregateInput
    _max?: SatwaBookmarkMaxOrderByAggregateInput
    _min?: SatwaBookmarkMinOrderByAggregateInput
  }

  export type SatwaBookmarkScalarWhereWithAggregatesInput = {
    AND?: SatwaBookmarkScalarWhereWithAggregatesInput | SatwaBookmarkScalarWhereWithAggregatesInput[]
    OR?: SatwaBookmarkScalarWhereWithAggregatesInput[]
    NOT?: SatwaBookmarkScalarWhereWithAggregatesInput | SatwaBookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SatwaBookmark"> | string
    userId?: StringWithAggregatesFilter<"SatwaBookmark"> | string
    satwaId?: StringWithAggregatesFilter<"SatwaBookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SatwaBookmark"> | Date | string
  }

  export type ShelterBookmarkWhereInput = {
    AND?: ShelterBookmarkWhereInput | ShelterBookmarkWhereInput[]
    OR?: ShelterBookmarkWhereInput[]
    NOT?: ShelterBookmarkWhereInput | ShelterBookmarkWhereInput[]
    id?: StringFilter<"ShelterBookmark"> | string
    userId?: StringFilter<"ShelterBookmark"> | string
    shelterId?: StringFilter<"ShelterBookmark"> | string
    createdAt?: DateTimeFilter<"ShelterBookmark"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShelterBookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    shelter?: ShelterOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShelterBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_shelterId?: ShelterBookmarkUserIdShelterIdCompoundUniqueInput
    AND?: ShelterBookmarkWhereInput | ShelterBookmarkWhereInput[]
    OR?: ShelterBookmarkWhereInput[]
    NOT?: ShelterBookmarkWhereInput | ShelterBookmarkWhereInput[]
    userId?: StringFilter<"ShelterBookmark"> | string
    shelterId?: StringFilter<"ShelterBookmark"> | string
    createdAt?: DateTimeFilter<"ShelterBookmark"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_shelterId">

  export type ShelterBookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    _count?: ShelterBookmarkCountOrderByAggregateInput
    _max?: ShelterBookmarkMaxOrderByAggregateInput
    _min?: ShelterBookmarkMinOrderByAggregateInput
  }

  export type ShelterBookmarkScalarWhereWithAggregatesInput = {
    AND?: ShelterBookmarkScalarWhereWithAggregatesInput | ShelterBookmarkScalarWhereWithAggregatesInput[]
    OR?: ShelterBookmarkScalarWhereWithAggregatesInput[]
    NOT?: ShelterBookmarkScalarWhereWithAggregatesInput | ShelterBookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShelterBookmark"> | string
    userId?: StringWithAggregatesFilter<"ShelterBookmark"> | string
    shelterId?: StringWithAggregatesFilter<"ShelterBookmark"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShelterBookmark"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkCreateNestedManyWithoutUserInput
    donasi?: DonasiCreateNestedManyWithoutDonaturInput
    shelter?: ShelterCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutUserInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutDonaturInput
    shelter?: ShelterUncheckedCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUpdateManyWithoutUserNestedInput
    donasi?: DonasiUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutUserNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUncheckedUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShelterCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiCreateNestedManyWithoutShelterInput
    satwa?: SatwaCreateNestedManyWithoutShelterInput
    user: UserCreateNestedOneWithoutShelterInput
    rekening?: ShelterBankCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiUncheckedCreateNestedManyWithoutShelterInput
    satwa?: SatwaUncheckedCreateNestedManyWithoutShelterInput
    rekening?: ShelterBankUncheckedCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUpdateManyWithoutShelterNestedInput
    user?: UserUpdateOneRequiredWithoutShelterNestedInput
    rekening?: ShelterBankUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUncheckedUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUncheckedUpdateManyWithoutShelterNestedInput
    rekening?: ShelterBankUncheckedUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
  }

  export type ShelterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
  }

  export type ShelterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
  }

  export type ShelterBankCreateInput = {
    id?: string
    namaBank: string
    nomorRekening: string
    atasNamaRekening: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutRekeningInput
  }

  export type ShelterBankUncheckedCreateInput = {
    id?: string
    shelterId: string
    namaBank: string
    nomorRekening: string
    atasNamaRekening: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShelterBankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBank?: StringFieldUpdateOperationsInput | string
    nomorRekening?: StringFieldUpdateOperationsInput | string
    atasNamaRekening?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutRekeningNestedInput
  }

  export type ShelterBankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    namaBank?: StringFieldUpdateOperationsInput | string
    nomorRekening?: StringFieldUpdateOperationsInput | string
    atasNamaRekening?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBankCreateManyInput = {
    id?: string
    shelterId: string
    namaBank: string
    nomorRekening: string
    atasNamaRekening: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShelterBankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBank?: StringFieldUpdateOperationsInput | string
    nomorRekening?: StringFieldUpdateOperationsInput | string
    atasNamaRekening?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    namaBank?: StringFieldUpdateOperationsInput | string
    nomorRekening?: StringFieldUpdateOperationsInput | string
    atasNamaRekening?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatwaCreateInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkCreateNestedManyWithoutSatwaInput
    donasi?: DonasiCreateNestedManyWithoutSatwaInput
    laporan?: LaporanCreateNestedManyWithoutSatwaInput
    shelter: ShelterCreateNestedOneWithoutSatwaInput
  }

  export type SatwaUncheckedCreateInput = {
    id?: string
    shelterId: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutSatwaInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutSatwaInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutSatwaInput
  }

  export type SatwaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUpdateManyWithoutSatwaNestedInput
    donasi?: DonasiUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUpdateManyWithoutSatwaNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutSatwaNestedInput
  }

  export type SatwaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutSatwaNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutSatwaNestedInput
  }

  export type SatwaCreateManyInput = {
    id?: string
    shelterId: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SatwaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SatwaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonasiCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
    donatur: UserCreateNestedOneWithoutDonasiInput
    satwa?: SatwaCreateNestedOneWithoutDonasiInput
    shelter: ShelterCreateNestedOneWithoutDonasiInput
  }

  export type DonasiUncheckedCreateInput = {
    id?: string
    donaturId: string
    satwaId?: string | null
    shelterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type DonasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    donatur?: UserUpdateOneRequiredWithoutDonasiNestedInput
    satwa?: SatwaUpdateOneWithoutDonasiNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutDonasiNestedInput
  }

  export type DonasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donaturId?: StringFieldUpdateOperationsInput | string
    satwaId?: NullableStringFieldUpdateOperationsInput | string | null
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonasiCreateManyInput = {
    id?: string
    donaturId: string
    satwaId?: string | null
    shelterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type DonasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donaturId?: StringFieldUpdateOperationsInput | string
    satwaId?: NullableStringFieldUpdateOperationsInput | string | null
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanCreateInput = {
    id?: string
    judul: string
    deskripsi: string
    foto?: string | null
    fotoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    satwa: SatwaCreateNestedOneWithoutLaporanInput
  }

  export type LaporanUncheckedCreateInput = {
    id?: string
    satwaId: string
    judul: string
    deskripsi: string
    foto?: string | null
    fotoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LaporanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satwa?: SatwaUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    satwaId?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanCreateManyInput = {
    id?: string
    satwaId: string
    judul: string
    deskripsi: string
    foto?: string | null
    fotoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LaporanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    satwaId?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MailerLogCreateInput = {
    id?: string
    emailTo: string
    subject: string
    body: string
    referenceId?: string | null
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.MailerLogType
    referenceType?: $Enums.MailerReferenceType | null
    status?: $Enums.MailerStatus
    user?: UserCreateNestedOneWithoutMailerLogsInput
  }

  export type MailerLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    emailTo: string
    subject: string
    body: string
    referenceId?: string | null
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.MailerLogType
    referenceType?: $Enums.MailerReferenceType | null
    status?: $Enums.MailerStatus
  }

  export type MailerLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
    user?: UserUpdateOneWithoutMailerLogsNestedInput
  }

  export type MailerLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
  }

  export type MailerLogCreateManyInput = {
    id?: string
    userId?: string | null
    emailTo: string
    subject: string
    body: string
    referenceId?: string | null
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.MailerLogType
    referenceType?: $Enums.MailerReferenceType | null
    status?: $Enums.MailerStatus
  }

  export type MailerLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
  }

  export type MailerLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
  }

  export type SatwaBookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    satwa: SatwaCreateNestedOneWithoutBookmarksInput
    user: UserCreateNestedOneWithoutSatwaBookmarksInput
  }

  export type SatwaBookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    satwaId: string
    createdAt?: Date | string
  }

  export type SatwaBookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    satwa?: SatwaUpdateOneRequiredWithoutBookmarksNestedInput
    user?: UserUpdateOneRequiredWithoutSatwaBookmarksNestedInput
  }

  export type SatwaBookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    satwaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatwaBookmarkCreateManyInput = {
    id?: string
    userId: string
    satwaId: string
    createdAt?: Date | string
  }

  export type SatwaBookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatwaBookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    satwaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutBookmarksInput
    user: UserCreateNestedOneWithoutShelterBookmarksInput
  }

  export type ShelterBookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    shelterId: string
    createdAt?: Date | string
  }

  export type ShelterBookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutBookmarksNestedInput
    user?: UserUpdateOneRequiredWithoutShelterBookmarksNestedInput
  }

  export type ShelterBookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBookmarkCreateManyInput = {
    id?: string
    userId: string
    shelterId: string
    createdAt?: Date | string
  }

  export type ShelterBookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type SatwaBookmarkListRelationFilter = {
    every?: SatwaBookmarkWhereInput
    some?: SatwaBookmarkWhereInput
    none?: SatwaBookmarkWhereInput
  }

  export type DonasiListRelationFilter = {
    every?: DonasiWhereInput
    some?: DonasiWhereInput
    none?: DonasiWhereInput
  }

  export type ShelterNullableScalarRelationFilter = {
    is?: ShelterWhereInput | null
    isNot?: ShelterWhereInput | null
  }

  export type ShelterBookmarkListRelationFilter = {
    every?: ShelterBookmarkWhereInput
    some?: ShelterBookmarkWhereInput
    none?: ShelterBookmarkWhereInput
  }

  export type MailerLogListRelationFilter = {
    every?: MailerLogWhereInput
    some?: MailerLogWhereInput
    none?: MailerLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SatwaBookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShelterBookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MailerLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    namaLengkap?: SortOrder
    noWhatsapp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    namaLengkap?: SortOrder
    noWhatsapp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    namaLengkap?: SortOrder
    noWhatsapp?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SatwaListRelationFilter = {
    every?: SatwaWhereInput
    some?: SatwaWhereInput
    none?: SatwaWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShelterBankNullableScalarRelationFilter = {
    is?: ShelterBankWhereInput | null
    isNot?: ShelterBankWhereInput | null
  }

  export type SatwaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShelterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    alamatLengkap?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    fotoBanner?: SortOrder
    isAktif?: SortOrder
    kota?: SortOrder
    namaShelter?: SortOrder
    noWhatsapp?: SortOrder
  }

  export type ShelterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    alamatLengkap?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    fotoBanner?: SortOrder
    isAktif?: SortOrder
    kota?: SortOrder
    namaShelter?: SortOrder
    noWhatsapp?: SortOrder
  }

  export type ShelterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    alamatLengkap?: SortOrder
    status?: SortOrder
    deskripsi?: SortOrder
    fotoBanner?: SortOrder
    isAktif?: SortOrder
    kota?: SortOrder
    namaShelter?: SortOrder
    noWhatsapp?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShelterScalarRelationFilter = {
    is?: ShelterWhereInput
    isNot?: ShelterWhereInput
  }

  export type ShelterBankCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    namaBank?: SortOrder
    nomorRekening?: SortOrder
    atasNamaRekening?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShelterBankMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    namaBank?: SortOrder
    nomorRekening?: SortOrder
    atasNamaRekening?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShelterBankMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    namaBank?: SortOrder
    nomorRekening?: SortOrder
    atasNamaRekening?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJenisSatwaFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSatwa | EnumJenisSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisSatwaFilter<$PrismaModel> | $Enums.JenisSatwa
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

  export type EnumKelaminSatwaFilter<$PrismaModel = never> = {
    equals?: $Enums.KelaminSatwa | EnumKelaminSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumKelaminSatwaFilter<$PrismaModel> | $Enums.KelaminSatwa
  }

  export type EnumStatusSatwaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSatwa | EnumStatusSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSatwaFilter<$PrismaModel> | $Enums.StatusSatwa
  }

  export type LaporanListRelationFilter = {
    every?: LaporanWhereInput
    some?: LaporanWhereInput
    none?: LaporanWhereInput
  }

  export type LaporanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SatwaCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    ras?: SortOrder
    umur?: SortOrder
    kelamin?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    danaTerkumpul?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SatwaAvgOrderByAggregateInput = {
    umur?: SortOrder
    danaTerkumpul?: SortOrder
  }

  export type SatwaMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    ras?: SortOrder
    umur?: SortOrder
    kelamin?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    danaTerkumpul?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SatwaMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    ras?: SortOrder
    umur?: SortOrder
    kelamin?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    danaTerkumpul?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SatwaSumOrderByAggregateInput = {
    umur?: SortOrder
    danaTerkumpul?: SortOrder
  }

  export type EnumJenisSatwaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSatwa | EnumJenisSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisSatwaWithAggregatesFilter<$PrismaModel> | $Enums.JenisSatwa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisSatwaFilter<$PrismaModel>
    _max?: NestedEnumJenisSatwaFilter<$PrismaModel>
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

  export type EnumKelaminSatwaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KelaminSatwa | EnumKelaminSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumKelaminSatwaWithAggregatesFilter<$PrismaModel> | $Enums.KelaminSatwa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKelaminSatwaFilter<$PrismaModel>
    _max?: NestedEnumKelaminSatwaFilter<$PrismaModel>
  }

  export type EnumStatusSatwaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSatwa | EnumStatusSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSatwaWithAggregatesFilter<$PrismaModel> | $Enums.StatusSatwa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSatwaFilter<$PrismaModel>
    _max?: NestedEnumStatusSatwaFilter<$PrismaModel>
  }

  export type SatwaNullableScalarRelationFilter = {
    is?: SatwaWhereInput | null
    isNot?: SatwaWhereInput | null
  }

  export type DonasiCountOrderByAggregateInput = {
    id?: SortOrder
    donaturId?: SortOrder
    satwaId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    buktiResi?: SortOrder
    catatan?: SortOrder
    nominal?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrder
    diverifikasiAt?: SortOrder
  }

  export type DonasiAvgOrderByAggregateInput = {
    nominal?: SortOrder
  }

  export type DonasiMaxOrderByAggregateInput = {
    id?: SortOrder
    donaturId?: SortOrder
    satwaId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    buktiResi?: SortOrder
    catatan?: SortOrder
    nominal?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrder
    diverifikasiAt?: SortOrder
  }

  export type DonasiMinOrderByAggregateInput = {
    id?: SortOrder
    donaturId?: SortOrder
    satwaId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    buktiResi?: SortOrder
    catatan?: SortOrder
    nominal?: SortOrder
    status?: SortOrder
    alasanDitolak?: SortOrder
    diverifikasiAt?: SortOrder
  }

  export type DonasiSumOrderByAggregateInput = {
    nominal?: SortOrder
  }

  export type SatwaScalarRelationFilter = {
    is?: SatwaWhereInput
    isNot?: SatwaWhereInput
  }

  export type LaporanCountOrderByAggregateInput = {
    id?: SortOrder
    satwaId?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    fotoPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LaporanMaxOrderByAggregateInput = {
    id?: SortOrder
    satwaId?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    fotoPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LaporanMinOrderByAggregateInput = {
    id?: SortOrder
    satwaId?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    fotoPublicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumMailerLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerLogType | EnumMailerLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerLogTypeFilter<$PrismaModel> | $Enums.MailerLogType
  }

  export type EnumMailerReferenceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerReferenceType | EnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel> | $Enums.MailerReferenceType | null
  }

  export type EnumMailerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerStatus | EnumMailerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerStatusFilter<$PrismaModel> | $Enums.MailerStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MailerLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailTo?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    referenceId?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrder
    type?: SortOrder
    referenceType?: SortOrder
    status?: SortOrder
  }

  export type MailerLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailTo?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    referenceId?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrder
    type?: SortOrder
    referenceType?: SortOrder
    status?: SortOrder
  }

  export type MailerLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailTo?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    referenceId?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted_at?: SortOrder
    type?: SortOrder
    referenceType?: SortOrder
    status?: SortOrder
  }

  export type EnumMailerLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerLogType | EnumMailerLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.MailerLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailerLogTypeFilter<$PrismaModel>
    _max?: NestedEnumMailerLogTypeFilter<$PrismaModel>
  }

  export type EnumMailerReferenceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerReferenceType | EnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMailerReferenceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MailerReferenceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel>
  }

  export type EnumMailerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerStatus | EnumMailerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerStatusWithAggregatesFilter<$PrismaModel> | $Enums.MailerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailerStatusFilter<$PrismaModel>
    _max?: NestedEnumMailerStatusFilter<$PrismaModel>
  }

  export type SatwaBookmarkUserIdSatwaIdCompoundUniqueInput = {
    userId: string
    satwaId: string
  }

  export type SatwaBookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    satwaId?: SortOrder
    createdAt?: SortOrder
  }

  export type SatwaBookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    satwaId?: SortOrder
    createdAt?: SortOrder
  }

  export type SatwaBookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    satwaId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShelterBookmarkUserIdShelterIdCompoundUniqueInput = {
    userId: string
    shelterId: string
  }

  export type ShelterBookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShelterBookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShelterBookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shelterId?: SortOrder
    createdAt?: SortOrder
  }

  export type SatwaBookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<SatwaBookmarkCreateWithoutUserInput, SatwaBookmarkUncheckedCreateWithoutUserInput> | SatwaBookmarkCreateWithoutUserInput[] | SatwaBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutUserInput | SatwaBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: SatwaBookmarkCreateManyUserInputEnvelope
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
  }

  export type DonasiCreateNestedManyWithoutDonaturInput = {
    create?: XOR<DonasiCreateWithoutDonaturInput, DonasiUncheckedCreateWithoutDonaturInput> | DonasiCreateWithoutDonaturInput[] | DonasiUncheckedCreateWithoutDonaturInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutDonaturInput | DonasiCreateOrConnectWithoutDonaturInput[]
    createMany?: DonasiCreateManyDonaturInputEnvelope
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
  }

  export type ShelterCreateNestedOneWithoutUserInput = {
    create?: XOR<ShelterCreateWithoutUserInput, ShelterUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutUserInput
    connect?: ShelterWhereUniqueInput
  }

  export type ShelterBookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<ShelterBookmarkCreateWithoutUserInput, ShelterBookmarkUncheckedCreateWithoutUserInput> | ShelterBookmarkCreateWithoutUserInput[] | ShelterBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutUserInput | ShelterBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: ShelterBookmarkCreateManyUserInputEnvelope
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
  }

  export type MailerLogCreateNestedManyWithoutUserInput = {
    create?: XOR<MailerLogCreateWithoutUserInput, MailerLogUncheckedCreateWithoutUserInput> | MailerLogCreateWithoutUserInput[] | MailerLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MailerLogCreateOrConnectWithoutUserInput | MailerLogCreateOrConnectWithoutUserInput[]
    createMany?: MailerLogCreateManyUserInputEnvelope
    connect?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
  }

  export type SatwaBookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SatwaBookmarkCreateWithoutUserInput, SatwaBookmarkUncheckedCreateWithoutUserInput> | SatwaBookmarkCreateWithoutUserInput[] | SatwaBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutUserInput | SatwaBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: SatwaBookmarkCreateManyUserInputEnvelope
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
  }

  export type DonasiUncheckedCreateNestedManyWithoutDonaturInput = {
    create?: XOR<DonasiCreateWithoutDonaturInput, DonasiUncheckedCreateWithoutDonaturInput> | DonasiCreateWithoutDonaturInput[] | DonasiUncheckedCreateWithoutDonaturInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutDonaturInput | DonasiCreateOrConnectWithoutDonaturInput[]
    createMany?: DonasiCreateManyDonaturInputEnvelope
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
  }

  export type ShelterUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ShelterCreateWithoutUserInput, ShelterUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutUserInput
    connect?: ShelterWhereUniqueInput
  }

  export type ShelterBookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShelterBookmarkCreateWithoutUserInput, ShelterBookmarkUncheckedCreateWithoutUserInput> | ShelterBookmarkCreateWithoutUserInput[] | ShelterBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutUserInput | ShelterBookmarkCreateOrConnectWithoutUserInput[]
    createMany?: ShelterBookmarkCreateManyUserInputEnvelope
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
  }

  export type MailerLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MailerLogCreateWithoutUserInput, MailerLogUncheckedCreateWithoutUserInput> | MailerLogCreateWithoutUserInput[] | MailerLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MailerLogCreateOrConnectWithoutUserInput | MailerLogCreateOrConnectWithoutUserInput[]
    createMany?: MailerLogCreateManyUserInputEnvelope
    connect?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SatwaBookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<SatwaBookmarkCreateWithoutUserInput, SatwaBookmarkUncheckedCreateWithoutUserInput> | SatwaBookmarkCreateWithoutUserInput[] | SatwaBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutUserInput | SatwaBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: SatwaBookmarkUpsertWithWhereUniqueWithoutUserInput | SatwaBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SatwaBookmarkCreateManyUserInputEnvelope
    set?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    disconnect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    delete?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    update?: SatwaBookmarkUpdateWithWhereUniqueWithoutUserInput | SatwaBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SatwaBookmarkUpdateManyWithWhereWithoutUserInput | SatwaBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SatwaBookmarkScalarWhereInput | SatwaBookmarkScalarWhereInput[]
  }

  export type DonasiUpdateManyWithoutDonaturNestedInput = {
    create?: XOR<DonasiCreateWithoutDonaturInput, DonasiUncheckedCreateWithoutDonaturInput> | DonasiCreateWithoutDonaturInput[] | DonasiUncheckedCreateWithoutDonaturInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutDonaturInput | DonasiCreateOrConnectWithoutDonaturInput[]
    upsert?: DonasiUpsertWithWhereUniqueWithoutDonaturInput | DonasiUpsertWithWhereUniqueWithoutDonaturInput[]
    createMany?: DonasiCreateManyDonaturInputEnvelope
    set?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    disconnect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    delete?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    update?: DonasiUpdateWithWhereUniqueWithoutDonaturInput | DonasiUpdateWithWhereUniqueWithoutDonaturInput[]
    updateMany?: DonasiUpdateManyWithWhereWithoutDonaturInput | DonasiUpdateManyWithWhereWithoutDonaturInput[]
    deleteMany?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
  }

  export type ShelterUpdateOneWithoutUserNestedInput = {
    create?: XOR<ShelterCreateWithoutUserInput, ShelterUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutUserInput
    upsert?: ShelterUpsertWithoutUserInput
    disconnect?: ShelterWhereInput | boolean
    delete?: ShelterWhereInput | boolean
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutUserInput, ShelterUpdateWithoutUserInput>, ShelterUncheckedUpdateWithoutUserInput>
  }

  export type ShelterBookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShelterBookmarkCreateWithoutUserInput, ShelterBookmarkUncheckedCreateWithoutUserInput> | ShelterBookmarkCreateWithoutUserInput[] | ShelterBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutUserInput | ShelterBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: ShelterBookmarkUpsertWithWhereUniqueWithoutUserInput | ShelterBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShelterBookmarkCreateManyUserInputEnvelope
    set?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    disconnect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    delete?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    update?: ShelterBookmarkUpdateWithWhereUniqueWithoutUserInput | ShelterBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShelterBookmarkUpdateManyWithWhereWithoutUserInput | ShelterBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShelterBookmarkScalarWhereInput | ShelterBookmarkScalarWhereInput[]
  }

  export type MailerLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<MailerLogCreateWithoutUserInput, MailerLogUncheckedCreateWithoutUserInput> | MailerLogCreateWithoutUserInput[] | MailerLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MailerLogCreateOrConnectWithoutUserInput | MailerLogCreateOrConnectWithoutUserInput[]
    upsert?: MailerLogUpsertWithWhereUniqueWithoutUserInput | MailerLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MailerLogCreateManyUserInputEnvelope
    set?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    disconnect?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    delete?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    connect?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    update?: MailerLogUpdateWithWhereUniqueWithoutUserInput | MailerLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MailerLogUpdateManyWithWhereWithoutUserInput | MailerLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MailerLogScalarWhereInput | MailerLogScalarWhereInput[]
  }

  export type SatwaBookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SatwaBookmarkCreateWithoutUserInput, SatwaBookmarkUncheckedCreateWithoutUserInput> | SatwaBookmarkCreateWithoutUserInput[] | SatwaBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutUserInput | SatwaBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: SatwaBookmarkUpsertWithWhereUniqueWithoutUserInput | SatwaBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SatwaBookmarkCreateManyUserInputEnvelope
    set?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    disconnect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    delete?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    update?: SatwaBookmarkUpdateWithWhereUniqueWithoutUserInput | SatwaBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SatwaBookmarkUpdateManyWithWhereWithoutUserInput | SatwaBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SatwaBookmarkScalarWhereInput | SatwaBookmarkScalarWhereInput[]
  }

  export type DonasiUncheckedUpdateManyWithoutDonaturNestedInput = {
    create?: XOR<DonasiCreateWithoutDonaturInput, DonasiUncheckedCreateWithoutDonaturInput> | DonasiCreateWithoutDonaturInput[] | DonasiUncheckedCreateWithoutDonaturInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutDonaturInput | DonasiCreateOrConnectWithoutDonaturInput[]
    upsert?: DonasiUpsertWithWhereUniqueWithoutDonaturInput | DonasiUpsertWithWhereUniqueWithoutDonaturInput[]
    createMany?: DonasiCreateManyDonaturInputEnvelope
    set?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    disconnect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    delete?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    update?: DonasiUpdateWithWhereUniqueWithoutDonaturInput | DonasiUpdateWithWhereUniqueWithoutDonaturInput[]
    updateMany?: DonasiUpdateManyWithWhereWithoutDonaturInput | DonasiUpdateManyWithWhereWithoutDonaturInput[]
    deleteMany?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
  }

  export type ShelterUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ShelterCreateWithoutUserInput, ShelterUncheckedCreateWithoutUserInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutUserInput
    upsert?: ShelterUpsertWithoutUserInput
    disconnect?: ShelterWhereInput | boolean
    delete?: ShelterWhereInput | boolean
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutUserInput, ShelterUpdateWithoutUserInput>, ShelterUncheckedUpdateWithoutUserInput>
  }

  export type ShelterBookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShelterBookmarkCreateWithoutUserInput, ShelterBookmarkUncheckedCreateWithoutUserInput> | ShelterBookmarkCreateWithoutUserInput[] | ShelterBookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutUserInput | ShelterBookmarkCreateOrConnectWithoutUserInput[]
    upsert?: ShelterBookmarkUpsertWithWhereUniqueWithoutUserInput | ShelterBookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShelterBookmarkCreateManyUserInputEnvelope
    set?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    disconnect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    delete?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    update?: ShelterBookmarkUpdateWithWhereUniqueWithoutUserInput | ShelterBookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShelterBookmarkUpdateManyWithWhereWithoutUserInput | ShelterBookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShelterBookmarkScalarWhereInput | ShelterBookmarkScalarWhereInput[]
  }

  export type MailerLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MailerLogCreateWithoutUserInput, MailerLogUncheckedCreateWithoutUserInput> | MailerLogCreateWithoutUserInput[] | MailerLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MailerLogCreateOrConnectWithoutUserInput | MailerLogCreateOrConnectWithoutUserInput[]
    upsert?: MailerLogUpsertWithWhereUniqueWithoutUserInput | MailerLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MailerLogCreateManyUserInputEnvelope
    set?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    disconnect?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    delete?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    connect?: MailerLogWhereUniqueInput | MailerLogWhereUniqueInput[]
    update?: MailerLogUpdateWithWhereUniqueWithoutUserInput | MailerLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MailerLogUpdateManyWithWhereWithoutUserInput | MailerLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MailerLogScalarWhereInput | MailerLogScalarWhereInput[]
  }

  export type DonasiCreateNestedManyWithoutShelterInput = {
    create?: XOR<DonasiCreateWithoutShelterInput, DonasiUncheckedCreateWithoutShelterInput> | DonasiCreateWithoutShelterInput[] | DonasiUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutShelterInput | DonasiCreateOrConnectWithoutShelterInput[]
    createMany?: DonasiCreateManyShelterInputEnvelope
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
  }

  export type SatwaCreateNestedManyWithoutShelterInput = {
    create?: XOR<SatwaCreateWithoutShelterInput, SatwaUncheckedCreateWithoutShelterInput> | SatwaCreateWithoutShelterInput[] | SatwaUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: SatwaCreateOrConnectWithoutShelterInput | SatwaCreateOrConnectWithoutShelterInput[]
    createMany?: SatwaCreateManyShelterInputEnvelope
    connect?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutShelterInput = {
    create?: XOR<UserCreateWithoutShelterInput, UserUncheckedCreateWithoutShelterInput>
    connectOrCreate?: UserCreateOrConnectWithoutShelterInput
    connect?: UserWhereUniqueInput
  }

  export type ShelterBankCreateNestedOneWithoutShelterInput = {
    create?: XOR<ShelterBankCreateWithoutShelterInput, ShelterBankUncheckedCreateWithoutShelterInput>
    connectOrCreate?: ShelterBankCreateOrConnectWithoutShelterInput
    connect?: ShelterBankWhereUniqueInput
  }

  export type ShelterBookmarkCreateNestedManyWithoutShelterInput = {
    create?: XOR<ShelterBookmarkCreateWithoutShelterInput, ShelterBookmarkUncheckedCreateWithoutShelterInput> | ShelterBookmarkCreateWithoutShelterInput[] | ShelterBookmarkUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutShelterInput | ShelterBookmarkCreateOrConnectWithoutShelterInput[]
    createMany?: ShelterBookmarkCreateManyShelterInputEnvelope
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
  }

  export type DonasiUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<DonasiCreateWithoutShelterInput, DonasiUncheckedCreateWithoutShelterInput> | DonasiCreateWithoutShelterInput[] | DonasiUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutShelterInput | DonasiCreateOrConnectWithoutShelterInput[]
    createMany?: DonasiCreateManyShelterInputEnvelope
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
  }

  export type SatwaUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<SatwaCreateWithoutShelterInput, SatwaUncheckedCreateWithoutShelterInput> | SatwaCreateWithoutShelterInput[] | SatwaUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: SatwaCreateOrConnectWithoutShelterInput | SatwaCreateOrConnectWithoutShelterInput[]
    createMany?: SatwaCreateManyShelterInputEnvelope
    connect?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
  }

  export type ShelterBankUncheckedCreateNestedOneWithoutShelterInput = {
    create?: XOR<ShelterBankCreateWithoutShelterInput, ShelterBankUncheckedCreateWithoutShelterInput>
    connectOrCreate?: ShelterBankCreateOrConnectWithoutShelterInput
    connect?: ShelterBankWhereUniqueInput
  }

  export type ShelterBookmarkUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<ShelterBookmarkCreateWithoutShelterInput, ShelterBookmarkUncheckedCreateWithoutShelterInput> | ShelterBookmarkCreateWithoutShelterInput[] | ShelterBookmarkUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutShelterInput | ShelterBookmarkCreateOrConnectWithoutShelterInput[]
    createMany?: ShelterBookmarkCreateManyShelterInputEnvelope
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DonasiUpdateManyWithoutShelterNestedInput = {
    create?: XOR<DonasiCreateWithoutShelterInput, DonasiUncheckedCreateWithoutShelterInput> | DonasiCreateWithoutShelterInput[] | DonasiUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutShelterInput | DonasiCreateOrConnectWithoutShelterInput[]
    upsert?: DonasiUpsertWithWhereUniqueWithoutShelterInput | DonasiUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: DonasiCreateManyShelterInputEnvelope
    set?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    disconnect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    delete?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    update?: DonasiUpdateWithWhereUniqueWithoutShelterInput | DonasiUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: DonasiUpdateManyWithWhereWithoutShelterInput | DonasiUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
  }

  export type SatwaUpdateManyWithoutShelterNestedInput = {
    create?: XOR<SatwaCreateWithoutShelterInput, SatwaUncheckedCreateWithoutShelterInput> | SatwaCreateWithoutShelterInput[] | SatwaUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: SatwaCreateOrConnectWithoutShelterInput | SatwaCreateOrConnectWithoutShelterInput[]
    upsert?: SatwaUpsertWithWhereUniqueWithoutShelterInput | SatwaUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: SatwaCreateManyShelterInputEnvelope
    set?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    disconnect?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    delete?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    connect?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    update?: SatwaUpdateWithWhereUniqueWithoutShelterInput | SatwaUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: SatwaUpdateManyWithWhereWithoutShelterInput | SatwaUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: SatwaScalarWhereInput | SatwaScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutShelterNestedInput = {
    create?: XOR<UserCreateWithoutShelterInput, UserUncheckedCreateWithoutShelterInput>
    connectOrCreate?: UserCreateOrConnectWithoutShelterInput
    upsert?: UserUpsertWithoutShelterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShelterInput, UserUpdateWithoutShelterInput>, UserUncheckedUpdateWithoutShelterInput>
  }

  export type ShelterBankUpdateOneWithoutShelterNestedInput = {
    create?: XOR<ShelterBankCreateWithoutShelterInput, ShelterBankUncheckedCreateWithoutShelterInput>
    connectOrCreate?: ShelterBankCreateOrConnectWithoutShelterInput
    upsert?: ShelterBankUpsertWithoutShelterInput
    disconnect?: ShelterBankWhereInput | boolean
    delete?: ShelterBankWhereInput | boolean
    connect?: ShelterBankWhereUniqueInput
    update?: XOR<XOR<ShelterBankUpdateToOneWithWhereWithoutShelterInput, ShelterBankUpdateWithoutShelterInput>, ShelterBankUncheckedUpdateWithoutShelterInput>
  }

  export type ShelterBookmarkUpdateManyWithoutShelterNestedInput = {
    create?: XOR<ShelterBookmarkCreateWithoutShelterInput, ShelterBookmarkUncheckedCreateWithoutShelterInput> | ShelterBookmarkCreateWithoutShelterInput[] | ShelterBookmarkUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutShelterInput | ShelterBookmarkCreateOrConnectWithoutShelterInput[]
    upsert?: ShelterBookmarkUpsertWithWhereUniqueWithoutShelterInput | ShelterBookmarkUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: ShelterBookmarkCreateManyShelterInputEnvelope
    set?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    disconnect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    delete?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    update?: ShelterBookmarkUpdateWithWhereUniqueWithoutShelterInput | ShelterBookmarkUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: ShelterBookmarkUpdateManyWithWhereWithoutShelterInput | ShelterBookmarkUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: ShelterBookmarkScalarWhereInput | ShelterBookmarkScalarWhereInput[]
  }

  export type DonasiUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<DonasiCreateWithoutShelterInput, DonasiUncheckedCreateWithoutShelterInput> | DonasiCreateWithoutShelterInput[] | DonasiUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutShelterInput | DonasiCreateOrConnectWithoutShelterInput[]
    upsert?: DonasiUpsertWithWhereUniqueWithoutShelterInput | DonasiUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: DonasiCreateManyShelterInputEnvelope
    set?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    disconnect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    delete?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    update?: DonasiUpdateWithWhereUniqueWithoutShelterInput | DonasiUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: DonasiUpdateManyWithWhereWithoutShelterInput | DonasiUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
  }

  export type SatwaUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<SatwaCreateWithoutShelterInput, SatwaUncheckedCreateWithoutShelterInput> | SatwaCreateWithoutShelterInput[] | SatwaUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: SatwaCreateOrConnectWithoutShelterInput | SatwaCreateOrConnectWithoutShelterInput[]
    upsert?: SatwaUpsertWithWhereUniqueWithoutShelterInput | SatwaUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: SatwaCreateManyShelterInputEnvelope
    set?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    disconnect?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    delete?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    connect?: SatwaWhereUniqueInput | SatwaWhereUniqueInput[]
    update?: SatwaUpdateWithWhereUniqueWithoutShelterInput | SatwaUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: SatwaUpdateManyWithWhereWithoutShelterInput | SatwaUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: SatwaScalarWhereInput | SatwaScalarWhereInput[]
  }

  export type ShelterBankUncheckedUpdateOneWithoutShelterNestedInput = {
    create?: XOR<ShelterBankCreateWithoutShelterInput, ShelterBankUncheckedCreateWithoutShelterInput>
    connectOrCreate?: ShelterBankCreateOrConnectWithoutShelterInput
    upsert?: ShelterBankUpsertWithoutShelterInput
    disconnect?: ShelterBankWhereInput | boolean
    delete?: ShelterBankWhereInput | boolean
    connect?: ShelterBankWhereUniqueInput
    update?: XOR<XOR<ShelterBankUpdateToOneWithWhereWithoutShelterInput, ShelterBankUpdateWithoutShelterInput>, ShelterBankUncheckedUpdateWithoutShelterInput>
  }

  export type ShelterBookmarkUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<ShelterBookmarkCreateWithoutShelterInput, ShelterBookmarkUncheckedCreateWithoutShelterInput> | ShelterBookmarkCreateWithoutShelterInput[] | ShelterBookmarkUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ShelterBookmarkCreateOrConnectWithoutShelterInput | ShelterBookmarkCreateOrConnectWithoutShelterInput[]
    upsert?: ShelterBookmarkUpsertWithWhereUniqueWithoutShelterInput | ShelterBookmarkUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: ShelterBookmarkCreateManyShelterInputEnvelope
    set?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    disconnect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    delete?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    connect?: ShelterBookmarkWhereUniqueInput | ShelterBookmarkWhereUniqueInput[]
    update?: ShelterBookmarkUpdateWithWhereUniqueWithoutShelterInput | ShelterBookmarkUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: ShelterBookmarkUpdateManyWithWhereWithoutShelterInput | ShelterBookmarkUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: ShelterBookmarkScalarWhereInput | ShelterBookmarkScalarWhereInput[]
  }

  export type ShelterCreateNestedOneWithoutRekeningInput = {
    create?: XOR<ShelterCreateWithoutRekeningInput, ShelterUncheckedCreateWithoutRekeningInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutRekeningInput
    connect?: ShelterWhereUniqueInput
  }

  export type ShelterUpdateOneRequiredWithoutRekeningNestedInput = {
    create?: XOR<ShelterCreateWithoutRekeningInput, ShelterUncheckedCreateWithoutRekeningInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutRekeningInput
    upsert?: ShelterUpsertWithoutRekeningInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutRekeningInput, ShelterUpdateWithoutRekeningInput>, ShelterUncheckedUpdateWithoutRekeningInput>
  }

  export type SatwaBookmarkCreateNestedManyWithoutSatwaInput = {
    create?: XOR<SatwaBookmarkCreateWithoutSatwaInput, SatwaBookmarkUncheckedCreateWithoutSatwaInput> | SatwaBookmarkCreateWithoutSatwaInput[] | SatwaBookmarkUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutSatwaInput | SatwaBookmarkCreateOrConnectWithoutSatwaInput[]
    createMany?: SatwaBookmarkCreateManySatwaInputEnvelope
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
  }

  export type DonasiCreateNestedManyWithoutSatwaInput = {
    create?: XOR<DonasiCreateWithoutSatwaInput, DonasiUncheckedCreateWithoutSatwaInput> | DonasiCreateWithoutSatwaInput[] | DonasiUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutSatwaInput | DonasiCreateOrConnectWithoutSatwaInput[]
    createMany?: DonasiCreateManySatwaInputEnvelope
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
  }

  export type LaporanCreateNestedManyWithoutSatwaInput = {
    create?: XOR<LaporanCreateWithoutSatwaInput, LaporanUncheckedCreateWithoutSatwaInput> | LaporanCreateWithoutSatwaInput[] | LaporanUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSatwaInput | LaporanCreateOrConnectWithoutSatwaInput[]
    createMany?: LaporanCreateManySatwaInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type ShelterCreateNestedOneWithoutSatwaInput = {
    create?: XOR<ShelterCreateWithoutSatwaInput, ShelterUncheckedCreateWithoutSatwaInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutSatwaInput
    connect?: ShelterWhereUniqueInput
  }

  export type SatwaBookmarkUncheckedCreateNestedManyWithoutSatwaInput = {
    create?: XOR<SatwaBookmarkCreateWithoutSatwaInput, SatwaBookmarkUncheckedCreateWithoutSatwaInput> | SatwaBookmarkCreateWithoutSatwaInput[] | SatwaBookmarkUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutSatwaInput | SatwaBookmarkCreateOrConnectWithoutSatwaInput[]
    createMany?: SatwaBookmarkCreateManySatwaInputEnvelope
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
  }

  export type DonasiUncheckedCreateNestedManyWithoutSatwaInput = {
    create?: XOR<DonasiCreateWithoutSatwaInput, DonasiUncheckedCreateWithoutSatwaInput> | DonasiCreateWithoutSatwaInput[] | DonasiUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutSatwaInput | DonasiCreateOrConnectWithoutSatwaInput[]
    createMany?: DonasiCreateManySatwaInputEnvelope
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutSatwaInput = {
    create?: XOR<LaporanCreateWithoutSatwaInput, LaporanUncheckedCreateWithoutSatwaInput> | LaporanCreateWithoutSatwaInput[] | LaporanUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSatwaInput | LaporanCreateOrConnectWithoutSatwaInput[]
    createMany?: LaporanCreateManySatwaInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type EnumJenisSatwaFieldUpdateOperationsInput = {
    set?: $Enums.JenisSatwa
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKelaminSatwaFieldUpdateOperationsInput = {
    set?: $Enums.KelaminSatwa
  }

  export type EnumStatusSatwaFieldUpdateOperationsInput = {
    set?: $Enums.StatusSatwa
  }

  export type SatwaBookmarkUpdateManyWithoutSatwaNestedInput = {
    create?: XOR<SatwaBookmarkCreateWithoutSatwaInput, SatwaBookmarkUncheckedCreateWithoutSatwaInput> | SatwaBookmarkCreateWithoutSatwaInput[] | SatwaBookmarkUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutSatwaInput | SatwaBookmarkCreateOrConnectWithoutSatwaInput[]
    upsert?: SatwaBookmarkUpsertWithWhereUniqueWithoutSatwaInput | SatwaBookmarkUpsertWithWhereUniqueWithoutSatwaInput[]
    createMany?: SatwaBookmarkCreateManySatwaInputEnvelope
    set?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    disconnect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    delete?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    update?: SatwaBookmarkUpdateWithWhereUniqueWithoutSatwaInput | SatwaBookmarkUpdateWithWhereUniqueWithoutSatwaInput[]
    updateMany?: SatwaBookmarkUpdateManyWithWhereWithoutSatwaInput | SatwaBookmarkUpdateManyWithWhereWithoutSatwaInput[]
    deleteMany?: SatwaBookmarkScalarWhereInput | SatwaBookmarkScalarWhereInput[]
  }

  export type DonasiUpdateManyWithoutSatwaNestedInput = {
    create?: XOR<DonasiCreateWithoutSatwaInput, DonasiUncheckedCreateWithoutSatwaInput> | DonasiCreateWithoutSatwaInput[] | DonasiUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutSatwaInput | DonasiCreateOrConnectWithoutSatwaInput[]
    upsert?: DonasiUpsertWithWhereUniqueWithoutSatwaInput | DonasiUpsertWithWhereUniqueWithoutSatwaInput[]
    createMany?: DonasiCreateManySatwaInputEnvelope
    set?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    disconnect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    delete?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    update?: DonasiUpdateWithWhereUniqueWithoutSatwaInput | DonasiUpdateWithWhereUniqueWithoutSatwaInput[]
    updateMany?: DonasiUpdateManyWithWhereWithoutSatwaInput | DonasiUpdateManyWithWhereWithoutSatwaInput[]
    deleteMany?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
  }

  export type LaporanUpdateManyWithoutSatwaNestedInput = {
    create?: XOR<LaporanCreateWithoutSatwaInput, LaporanUncheckedCreateWithoutSatwaInput> | LaporanCreateWithoutSatwaInput[] | LaporanUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSatwaInput | LaporanCreateOrConnectWithoutSatwaInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutSatwaInput | LaporanUpsertWithWhereUniqueWithoutSatwaInput[]
    createMany?: LaporanCreateManySatwaInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutSatwaInput | LaporanUpdateWithWhereUniqueWithoutSatwaInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutSatwaInput | LaporanUpdateManyWithWhereWithoutSatwaInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type ShelterUpdateOneRequiredWithoutSatwaNestedInput = {
    create?: XOR<ShelterCreateWithoutSatwaInput, ShelterUncheckedCreateWithoutSatwaInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutSatwaInput
    upsert?: ShelterUpsertWithoutSatwaInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutSatwaInput, ShelterUpdateWithoutSatwaInput>, ShelterUncheckedUpdateWithoutSatwaInput>
  }

  export type SatwaBookmarkUncheckedUpdateManyWithoutSatwaNestedInput = {
    create?: XOR<SatwaBookmarkCreateWithoutSatwaInput, SatwaBookmarkUncheckedCreateWithoutSatwaInput> | SatwaBookmarkCreateWithoutSatwaInput[] | SatwaBookmarkUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: SatwaBookmarkCreateOrConnectWithoutSatwaInput | SatwaBookmarkCreateOrConnectWithoutSatwaInput[]
    upsert?: SatwaBookmarkUpsertWithWhereUniqueWithoutSatwaInput | SatwaBookmarkUpsertWithWhereUniqueWithoutSatwaInput[]
    createMany?: SatwaBookmarkCreateManySatwaInputEnvelope
    set?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    disconnect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    delete?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    connect?: SatwaBookmarkWhereUniqueInput | SatwaBookmarkWhereUniqueInput[]
    update?: SatwaBookmarkUpdateWithWhereUniqueWithoutSatwaInput | SatwaBookmarkUpdateWithWhereUniqueWithoutSatwaInput[]
    updateMany?: SatwaBookmarkUpdateManyWithWhereWithoutSatwaInput | SatwaBookmarkUpdateManyWithWhereWithoutSatwaInput[]
    deleteMany?: SatwaBookmarkScalarWhereInput | SatwaBookmarkScalarWhereInput[]
  }

  export type DonasiUncheckedUpdateManyWithoutSatwaNestedInput = {
    create?: XOR<DonasiCreateWithoutSatwaInput, DonasiUncheckedCreateWithoutSatwaInput> | DonasiCreateWithoutSatwaInput[] | DonasiUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: DonasiCreateOrConnectWithoutSatwaInput | DonasiCreateOrConnectWithoutSatwaInput[]
    upsert?: DonasiUpsertWithWhereUniqueWithoutSatwaInput | DonasiUpsertWithWhereUniqueWithoutSatwaInput[]
    createMany?: DonasiCreateManySatwaInputEnvelope
    set?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    disconnect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    delete?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    connect?: DonasiWhereUniqueInput | DonasiWhereUniqueInput[]
    update?: DonasiUpdateWithWhereUniqueWithoutSatwaInput | DonasiUpdateWithWhereUniqueWithoutSatwaInput[]
    updateMany?: DonasiUpdateManyWithWhereWithoutSatwaInput | DonasiUpdateManyWithWhereWithoutSatwaInput[]
    deleteMany?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutSatwaNestedInput = {
    create?: XOR<LaporanCreateWithoutSatwaInput, LaporanUncheckedCreateWithoutSatwaInput> | LaporanCreateWithoutSatwaInput[] | LaporanUncheckedCreateWithoutSatwaInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSatwaInput | LaporanCreateOrConnectWithoutSatwaInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutSatwaInput | LaporanUpsertWithWhereUniqueWithoutSatwaInput[]
    createMany?: LaporanCreateManySatwaInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutSatwaInput | LaporanUpdateWithWhereUniqueWithoutSatwaInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutSatwaInput | LaporanUpdateManyWithWhereWithoutSatwaInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDonasiInput = {
    create?: XOR<UserCreateWithoutDonasiInput, UserUncheckedCreateWithoutDonasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonasiInput
    connect?: UserWhereUniqueInput
  }

  export type SatwaCreateNestedOneWithoutDonasiInput = {
    create?: XOR<SatwaCreateWithoutDonasiInput, SatwaUncheckedCreateWithoutDonasiInput>
    connectOrCreate?: SatwaCreateOrConnectWithoutDonasiInput
    connect?: SatwaWhereUniqueInput
  }

  export type ShelterCreateNestedOneWithoutDonasiInput = {
    create?: XOR<ShelterCreateWithoutDonasiInput, ShelterUncheckedCreateWithoutDonasiInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutDonasiInput
    connect?: ShelterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDonasiNestedInput = {
    create?: XOR<UserCreateWithoutDonasiInput, UserUncheckedCreateWithoutDonasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonasiInput
    upsert?: UserUpsertWithoutDonasiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonasiInput, UserUpdateWithoutDonasiInput>, UserUncheckedUpdateWithoutDonasiInput>
  }

  export type SatwaUpdateOneWithoutDonasiNestedInput = {
    create?: XOR<SatwaCreateWithoutDonasiInput, SatwaUncheckedCreateWithoutDonasiInput>
    connectOrCreate?: SatwaCreateOrConnectWithoutDonasiInput
    upsert?: SatwaUpsertWithoutDonasiInput
    disconnect?: SatwaWhereInput | boolean
    delete?: SatwaWhereInput | boolean
    connect?: SatwaWhereUniqueInput
    update?: XOR<XOR<SatwaUpdateToOneWithWhereWithoutDonasiInput, SatwaUpdateWithoutDonasiInput>, SatwaUncheckedUpdateWithoutDonasiInput>
  }

  export type ShelterUpdateOneRequiredWithoutDonasiNestedInput = {
    create?: XOR<ShelterCreateWithoutDonasiInput, ShelterUncheckedCreateWithoutDonasiInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutDonasiInput
    upsert?: ShelterUpsertWithoutDonasiInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutDonasiInput, ShelterUpdateWithoutDonasiInput>, ShelterUncheckedUpdateWithoutDonasiInput>
  }

  export type SatwaCreateNestedOneWithoutLaporanInput = {
    create?: XOR<SatwaCreateWithoutLaporanInput, SatwaUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: SatwaCreateOrConnectWithoutLaporanInput
    connect?: SatwaWhereUniqueInput
  }

  export type SatwaUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<SatwaCreateWithoutLaporanInput, SatwaUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: SatwaCreateOrConnectWithoutLaporanInput
    upsert?: SatwaUpsertWithoutLaporanInput
    connect?: SatwaWhereUniqueInput
    update?: XOR<XOR<SatwaUpdateToOneWithWhereWithoutLaporanInput, SatwaUpdateWithoutLaporanInput>, SatwaUncheckedUpdateWithoutLaporanInput>
  }

  export type UserCreateNestedOneWithoutMailerLogsInput = {
    create?: XOR<UserCreateWithoutMailerLogsInput, UserUncheckedCreateWithoutMailerLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMailerLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMailerLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.MailerLogType
  }

  export type NullableEnumMailerReferenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.MailerReferenceType | null
  }

  export type EnumMailerStatusFieldUpdateOperationsInput = {
    set?: $Enums.MailerStatus
  }

  export type UserUpdateOneWithoutMailerLogsNestedInput = {
    create?: XOR<UserCreateWithoutMailerLogsInput, UserUncheckedCreateWithoutMailerLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMailerLogsInput
    upsert?: UserUpsertWithoutMailerLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMailerLogsInput, UserUpdateWithoutMailerLogsInput>, UserUncheckedUpdateWithoutMailerLogsInput>
  }

  export type SatwaCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<SatwaCreateWithoutBookmarksInput, SatwaUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: SatwaCreateOrConnectWithoutBookmarksInput
    connect?: SatwaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSatwaBookmarksInput = {
    create?: XOR<UserCreateWithoutSatwaBookmarksInput, UserUncheckedCreateWithoutSatwaBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSatwaBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type SatwaUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<SatwaCreateWithoutBookmarksInput, SatwaUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: SatwaCreateOrConnectWithoutBookmarksInput
    upsert?: SatwaUpsertWithoutBookmarksInput
    connect?: SatwaWhereUniqueInput
    update?: XOR<XOR<SatwaUpdateToOneWithWhereWithoutBookmarksInput, SatwaUpdateWithoutBookmarksInput>, SatwaUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateOneRequiredWithoutSatwaBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutSatwaBookmarksInput, UserUncheckedCreateWithoutSatwaBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSatwaBookmarksInput
    upsert?: UserUpsertWithoutSatwaBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSatwaBookmarksInput, UserUpdateWithoutSatwaBookmarksInput>, UserUncheckedUpdateWithoutSatwaBookmarksInput>
  }

  export type ShelterCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<ShelterCreateWithoutBookmarksInput, ShelterUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutBookmarksInput
    connect?: ShelterWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShelterBookmarksInput = {
    create?: XOR<UserCreateWithoutShelterBookmarksInput, UserUncheckedCreateWithoutShelterBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutShelterBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type ShelterUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<ShelterCreateWithoutBookmarksInput, ShelterUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutBookmarksInput
    upsert?: ShelterUpsertWithoutBookmarksInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutBookmarksInput, ShelterUpdateWithoutBookmarksInput>, ShelterUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateOneRequiredWithoutShelterBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutShelterBookmarksInput, UserUncheckedCreateWithoutShelterBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutShelterBookmarksInput
    upsert?: UserUpsertWithoutShelterBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShelterBookmarksInput, UserUpdateWithoutShelterBookmarksInput>, UserUncheckedUpdateWithoutShelterBookmarksInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumJenisSatwaFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSatwa | EnumJenisSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisSatwaFilter<$PrismaModel> | $Enums.JenisSatwa
  }

  export type NestedEnumKelaminSatwaFilter<$PrismaModel = never> = {
    equals?: $Enums.KelaminSatwa | EnumKelaminSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumKelaminSatwaFilter<$PrismaModel> | $Enums.KelaminSatwa
  }

  export type NestedEnumStatusSatwaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSatwa | EnumStatusSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSatwaFilter<$PrismaModel> | $Enums.StatusSatwa
  }

  export type NestedEnumJenisSatwaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSatwa | EnumJenisSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisSatwa[] | ListEnumJenisSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisSatwaWithAggregatesFilter<$PrismaModel> | $Enums.JenisSatwa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisSatwaFilter<$PrismaModel>
    _max?: NestedEnumJenisSatwaFilter<$PrismaModel>
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

  export type NestedEnumKelaminSatwaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KelaminSatwa | EnumKelaminSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.KelaminSatwa[] | ListEnumKelaminSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumKelaminSatwaWithAggregatesFilter<$PrismaModel> | $Enums.KelaminSatwa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKelaminSatwaFilter<$PrismaModel>
    _max?: NestedEnumKelaminSatwaFilter<$PrismaModel>
  }

  export type NestedEnumStatusSatwaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSatwa | EnumStatusSatwaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSatwa[] | ListEnumStatusSatwaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSatwaWithAggregatesFilter<$PrismaModel> | $Enums.StatusSatwa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSatwaFilter<$PrismaModel>
    _max?: NestedEnumStatusSatwaFilter<$PrismaModel>
  }

  export type NestedEnumMailerLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerLogType | EnumMailerLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerLogTypeFilter<$PrismaModel> | $Enums.MailerLogType
  }

  export type NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerReferenceType | EnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel> | $Enums.MailerReferenceType | null
  }

  export type NestedEnumMailerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerStatus | EnumMailerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerStatusFilter<$PrismaModel> | $Enums.MailerStatus
  }

  export type NestedEnumMailerLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerLogType | EnumMailerLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerLogType[] | ListEnumMailerLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.MailerLogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailerLogTypeFilter<$PrismaModel>
    _max?: NestedEnumMailerLogTypeFilter<$PrismaModel>
  }

  export type NestedEnumMailerReferenceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerReferenceType | EnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MailerReferenceType[] | ListEnumMailerReferenceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMailerReferenceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MailerReferenceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumMailerReferenceTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMailerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MailerStatus | EnumMailerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MailerStatus[] | ListEnumMailerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMailerStatusWithAggregatesFilter<$PrismaModel> | $Enums.MailerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMailerStatusFilter<$PrismaModel>
    _max?: NestedEnumMailerStatusFilter<$PrismaModel>
  }

  export type SatwaBookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    satwa: SatwaCreateNestedOneWithoutBookmarksInput
  }

  export type SatwaBookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    satwaId: string
    createdAt?: Date | string
  }

  export type SatwaBookmarkCreateOrConnectWithoutUserInput = {
    where: SatwaBookmarkWhereUniqueInput
    create: XOR<SatwaBookmarkCreateWithoutUserInput, SatwaBookmarkUncheckedCreateWithoutUserInput>
  }

  export type SatwaBookmarkCreateManyUserInputEnvelope = {
    data: SatwaBookmarkCreateManyUserInput | SatwaBookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonasiCreateWithoutDonaturInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
    satwa?: SatwaCreateNestedOneWithoutDonasiInput
    shelter: ShelterCreateNestedOneWithoutDonasiInput
  }

  export type DonasiUncheckedCreateWithoutDonaturInput = {
    id?: string
    satwaId?: string | null
    shelterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type DonasiCreateOrConnectWithoutDonaturInput = {
    where: DonasiWhereUniqueInput
    create: XOR<DonasiCreateWithoutDonaturInput, DonasiUncheckedCreateWithoutDonaturInput>
  }

  export type DonasiCreateManyDonaturInputEnvelope = {
    data: DonasiCreateManyDonaturInput | DonasiCreateManyDonaturInput[]
    skipDuplicates?: boolean
  }

  export type ShelterCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiCreateNestedManyWithoutShelterInput
    satwa?: SatwaCreateNestedManyWithoutShelterInput
    rekening?: ShelterBankCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiUncheckedCreateNestedManyWithoutShelterInput
    satwa?: SatwaUncheckedCreateNestedManyWithoutShelterInput
    rekening?: ShelterBankUncheckedCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutUserInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutUserInput, ShelterUncheckedCreateWithoutUserInput>
  }

  export type ShelterBookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutBookmarksInput
  }

  export type ShelterBookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    shelterId: string
    createdAt?: Date | string
  }

  export type ShelterBookmarkCreateOrConnectWithoutUserInput = {
    where: ShelterBookmarkWhereUniqueInput
    create: XOR<ShelterBookmarkCreateWithoutUserInput, ShelterBookmarkUncheckedCreateWithoutUserInput>
  }

  export type ShelterBookmarkCreateManyUserInputEnvelope = {
    data: ShelterBookmarkCreateManyUserInput | ShelterBookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MailerLogCreateWithoutUserInput = {
    id?: string
    emailTo: string
    subject: string
    body: string
    referenceId?: string | null
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.MailerLogType
    referenceType?: $Enums.MailerReferenceType | null
    status?: $Enums.MailerStatus
  }

  export type MailerLogUncheckedCreateWithoutUserInput = {
    id?: string
    emailTo: string
    subject: string
    body: string
    referenceId?: string | null
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.MailerLogType
    referenceType?: $Enums.MailerReferenceType | null
    status?: $Enums.MailerStatus
  }

  export type MailerLogCreateOrConnectWithoutUserInput = {
    where: MailerLogWhereUniqueInput
    create: XOR<MailerLogCreateWithoutUserInput, MailerLogUncheckedCreateWithoutUserInput>
  }

  export type MailerLogCreateManyUserInputEnvelope = {
    data: MailerLogCreateManyUserInput | MailerLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SatwaBookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: SatwaBookmarkWhereUniqueInput
    update: XOR<SatwaBookmarkUpdateWithoutUserInput, SatwaBookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<SatwaBookmarkCreateWithoutUserInput, SatwaBookmarkUncheckedCreateWithoutUserInput>
  }

  export type SatwaBookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: SatwaBookmarkWhereUniqueInput
    data: XOR<SatwaBookmarkUpdateWithoutUserInput, SatwaBookmarkUncheckedUpdateWithoutUserInput>
  }

  export type SatwaBookmarkUpdateManyWithWhereWithoutUserInput = {
    where: SatwaBookmarkScalarWhereInput
    data: XOR<SatwaBookmarkUpdateManyMutationInput, SatwaBookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type SatwaBookmarkScalarWhereInput = {
    AND?: SatwaBookmarkScalarWhereInput | SatwaBookmarkScalarWhereInput[]
    OR?: SatwaBookmarkScalarWhereInput[]
    NOT?: SatwaBookmarkScalarWhereInput | SatwaBookmarkScalarWhereInput[]
    id?: StringFilter<"SatwaBookmark"> | string
    userId?: StringFilter<"SatwaBookmark"> | string
    satwaId?: StringFilter<"SatwaBookmark"> | string
    createdAt?: DateTimeFilter<"SatwaBookmark"> | Date | string
  }

  export type DonasiUpsertWithWhereUniqueWithoutDonaturInput = {
    where: DonasiWhereUniqueInput
    update: XOR<DonasiUpdateWithoutDonaturInput, DonasiUncheckedUpdateWithoutDonaturInput>
    create: XOR<DonasiCreateWithoutDonaturInput, DonasiUncheckedCreateWithoutDonaturInput>
  }

  export type DonasiUpdateWithWhereUniqueWithoutDonaturInput = {
    where: DonasiWhereUniqueInput
    data: XOR<DonasiUpdateWithoutDonaturInput, DonasiUncheckedUpdateWithoutDonaturInput>
  }

  export type DonasiUpdateManyWithWhereWithoutDonaturInput = {
    where: DonasiScalarWhereInput
    data: XOR<DonasiUpdateManyMutationInput, DonasiUncheckedUpdateManyWithoutDonaturInput>
  }

  export type DonasiScalarWhereInput = {
    AND?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
    OR?: DonasiScalarWhereInput[]
    NOT?: DonasiScalarWhereInput | DonasiScalarWhereInput[]
    id?: StringFilter<"Donasi"> | string
    donaturId?: StringFilter<"Donasi"> | string
    satwaId?: StringNullableFilter<"Donasi"> | string | null
    shelterId?: StringFilter<"Donasi"> | string
    createdAt?: DateTimeFilter<"Donasi"> | Date | string
    updatedAt?: DateTimeFilter<"Donasi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Donasi"> | Date | string | null
    buktiResi?: StringFilter<"Donasi"> | string
    catatan?: StringNullableFilter<"Donasi"> | string | null
    nominal?: IntFilter<"Donasi"> | number
    status?: EnumStatusFilter<"Donasi"> | $Enums.Status
    alasanDitolak?: StringNullableFilter<"Donasi"> | string | null
    diverifikasiAt?: DateTimeNullableFilter<"Donasi"> | Date | string | null
  }

  export type ShelterUpsertWithoutUserInput = {
    update: XOR<ShelterUpdateWithoutUserInput, ShelterUncheckedUpdateWithoutUserInput>
    create: XOR<ShelterCreateWithoutUserInput, ShelterUncheckedCreateWithoutUserInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutUserInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutUserInput, ShelterUncheckedUpdateWithoutUserInput>
  }

  export type ShelterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUpdateManyWithoutShelterNestedInput
    rekening?: ShelterBankUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUncheckedUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUncheckedUpdateManyWithoutShelterNestedInput
    rekening?: ShelterBankUncheckedUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterBookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: ShelterBookmarkWhereUniqueInput
    update: XOR<ShelterBookmarkUpdateWithoutUserInput, ShelterBookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<ShelterBookmarkCreateWithoutUserInput, ShelterBookmarkUncheckedCreateWithoutUserInput>
  }

  export type ShelterBookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: ShelterBookmarkWhereUniqueInput
    data: XOR<ShelterBookmarkUpdateWithoutUserInput, ShelterBookmarkUncheckedUpdateWithoutUserInput>
  }

  export type ShelterBookmarkUpdateManyWithWhereWithoutUserInput = {
    where: ShelterBookmarkScalarWhereInput
    data: XOR<ShelterBookmarkUpdateManyMutationInput, ShelterBookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type ShelterBookmarkScalarWhereInput = {
    AND?: ShelterBookmarkScalarWhereInput | ShelterBookmarkScalarWhereInput[]
    OR?: ShelterBookmarkScalarWhereInput[]
    NOT?: ShelterBookmarkScalarWhereInput | ShelterBookmarkScalarWhereInput[]
    id?: StringFilter<"ShelterBookmark"> | string
    userId?: StringFilter<"ShelterBookmark"> | string
    shelterId?: StringFilter<"ShelterBookmark"> | string
    createdAt?: DateTimeFilter<"ShelterBookmark"> | Date | string
  }

  export type MailerLogUpsertWithWhereUniqueWithoutUserInput = {
    where: MailerLogWhereUniqueInput
    update: XOR<MailerLogUpdateWithoutUserInput, MailerLogUncheckedUpdateWithoutUserInput>
    create: XOR<MailerLogCreateWithoutUserInput, MailerLogUncheckedCreateWithoutUserInput>
  }

  export type MailerLogUpdateWithWhereUniqueWithoutUserInput = {
    where: MailerLogWhereUniqueInput
    data: XOR<MailerLogUpdateWithoutUserInput, MailerLogUncheckedUpdateWithoutUserInput>
  }

  export type MailerLogUpdateManyWithWhereWithoutUserInput = {
    where: MailerLogScalarWhereInput
    data: XOR<MailerLogUpdateManyMutationInput, MailerLogUncheckedUpdateManyWithoutUserInput>
  }

  export type MailerLogScalarWhereInput = {
    AND?: MailerLogScalarWhereInput | MailerLogScalarWhereInput[]
    OR?: MailerLogScalarWhereInput[]
    NOT?: MailerLogScalarWhereInput | MailerLogScalarWhereInput[]
    id?: StringFilter<"MailerLog"> | string
    userId?: StringNullableFilter<"MailerLog"> | string | null
    emailTo?: StringFilter<"MailerLog"> | string
    subject?: StringFilter<"MailerLog"> | string
    body?: StringFilter<"MailerLog"> | string
    referenceId?: StringNullableFilter<"MailerLog"> | string | null
    sentAt?: DateTimeNullableFilter<"MailerLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"MailerLog"> | string | null
    createdAt?: DateTimeFilter<"MailerLog"> | Date | string
    updatedAt?: DateTimeFilter<"MailerLog"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MailerLog"> | Date | string | null
    type?: EnumMailerLogTypeFilter<"MailerLog"> | $Enums.MailerLogType
    referenceType?: EnumMailerReferenceTypeNullableFilter<"MailerLog"> | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFilter<"MailerLog"> | $Enums.MailerStatus
  }

  export type DonasiCreateWithoutShelterInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
    donatur: UserCreateNestedOneWithoutDonasiInput
    satwa?: SatwaCreateNestedOneWithoutDonasiInput
  }

  export type DonasiUncheckedCreateWithoutShelterInput = {
    id?: string
    donaturId: string
    satwaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type DonasiCreateOrConnectWithoutShelterInput = {
    where: DonasiWhereUniqueInput
    create: XOR<DonasiCreateWithoutShelterInput, DonasiUncheckedCreateWithoutShelterInput>
  }

  export type DonasiCreateManyShelterInputEnvelope = {
    data: DonasiCreateManyShelterInput | DonasiCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type SatwaCreateWithoutShelterInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkCreateNestedManyWithoutSatwaInput
    donasi?: DonasiCreateNestedManyWithoutSatwaInput
    laporan?: LaporanCreateNestedManyWithoutSatwaInput
  }

  export type SatwaUncheckedCreateWithoutShelterInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutSatwaInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutSatwaInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutSatwaInput
  }

  export type SatwaCreateOrConnectWithoutShelterInput = {
    where: SatwaWhereUniqueInput
    create: XOR<SatwaCreateWithoutShelterInput, SatwaUncheckedCreateWithoutShelterInput>
  }

  export type SatwaCreateManyShelterInputEnvelope = {
    data: SatwaCreateManyShelterInput | SatwaCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutShelterInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkCreateNestedManyWithoutUserInput
    donasi?: DonasiCreateNestedManyWithoutDonaturInput
    shelterBookmarks?: ShelterBookmarkCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShelterInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutUserInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutDonaturInput
    shelterBookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShelterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShelterInput, UserUncheckedCreateWithoutShelterInput>
  }

  export type ShelterBankCreateWithoutShelterInput = {
    id?: string
    namaBank: string
    nomorRekening: string
    atasNamaRekening: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShelterBankUncheckedCreateWithoutShelterInput = {
    id?: string
    namaBank: string
    nomorRekening: string
    atasNamaRekening: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShelterBankCreateOrConnectWithoutShelterInput = {
    where: ShelterBankWhereUniqueInput
    create: XOR<ShelterBankCreateWithoutShelterInput, ShelterBankUncheckedCreateWithoutShelterInput>
  }

  export type ShelterBookmarkCreateWithoutShelterInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutShelterBookmarksInput
  }

  export type ShelterBookmarkUncheckedCreateWithoutShelterInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ShelterBookmarkCreateOrConnectWithoutShelterInput = {
    where: ShelterBookmarkWhereUniqueInput
    create: XOR<ShelterBookmarkCreateWithoutShelterInput, ShelterBookmarkUncheckedCreateWithoutShelterInput>
  }

  export type ShelterBookmarkCreateManyShelterInputEnvelope = {
    data: ShelterBookmarkCreateManyShelterInput | ShelterBookmarkCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type DonasiUpsertWithWhereUniqueWithoutShelterInput = {
    where: DonasiWhereUniqueInput
    update: XOR<DonasiUpdateWithoutShelterInput, DonasiUncheckedUpdateWithoutShelterInput>
    create: XOR<DonasiCreateWithoutShelterInput, DonasiUncheckedCreateWithoutShelterInput>
  }

  export type DonasiUpdateWithWhereUniqueWithoutShelterInput = {
    where: DonasiWhereUniqueInput
    data: XOR<DonasiUpdateWithoutShelterInput, DonasiUncheckedUpdateWithoutShelterInput>
  }

  export type DonasiUpdateManyWithWhereWithoutShelterInput = {
    where: DonasiScalarWhereInput
    data: XOR<DonasiUpdateManyMutationInput, DonasiUncheckedUpdateManyWithoutShelterInput>
  }

  export type SatwaUpsertWithWhereUniqueWithoutShelterInput = {
    where: SatwaWhereUniqueInput
    update: XOR<SatwaUpdateWithoutShelterInput, SatwaUncheckedUpdateWithoutShelterInput>
    create: XOR<SatwaCreateWithoutShelterInput, SatwaUncheckedCreateWithoutShelterInput>
  }

  export type SatwaUpdateWithWhereUniqueWithoutShelterInput = {
    where: SatwaWhereUniqueInput
    data: XOR<SatwaUpdateWithoutShelterInput, SatwaUncheckedUpdateWithoutShelterInput>
  }

  export type SatwaUpdateManyWithWhereWithoutShelterInput = {
    where: SatwaScalarWhereInput
    data: XOR<SatwaUpdateManyMutationInput, SatwaUncheckedUpdateManyWithoutShelterInput>
  }

  export type SatwaScalarWhereInput = {
    AND?: SatwaScalarWhereInput | SatwaScalarWhereInput[]
    OR?: SatwaScalarWhereInput[]
    NOT?: SatwaScalarWhereInput | SatwaScalarWhereInput[]
    id?: StringFilter<"Satwa"> | string
    shelterId?: StringFilter<"Satwa"> | string
    nama?: StringFilter<"Satwa"> | string
    jenis?: EnumJenisSatwaFilter<"Satwa"> | $Enums.JenisSatwa
    ras?: StringNullableFilter<"Satwa"> | string | null
    umur?: IntFilter<"Satwa"> | number
    kelamin?: EnumKelaminSatwaFilter<"Satwa"> | $Enums.KelaminSatwa
    foto?: StringNullableFilter<"Satwa"> | string | null
    deskripsi?: StringNullableFilter<"Satwa"> | string | null
    danaTerkumpul?: IntFilter<"Satwa"> | number
    status?: EnumStatusSatwaFilter<"Satwa"> | $Enums.StatusSatwa
    createdAt?: DateTimeFilter<"Satwa"> | Date | string
    updatedAt?: DateTimeFilter<"Satwa"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Satwa"> | Date | string | null
  }

  export type UserUpsertWithoutShelterInput = {
    update: XOR<UserUpdateWithoutShelterInput, UserUncheckedUpdateWithoutShelterInput>
    create: XOR<UserCreateWithoutShelterInput, UserUncheckedCreateWithoutShelterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShelterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShelterInput, UserUncheckedUpdateWithoutShelterInput>
  }

  export type UserUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUpdateManyWithoutUserNestedInput
    donasi?: DonasiUpdateManyWithoutDonaturNestedInput
    shelterBookmarks?: ShelterBookmarkUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutUserNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutDonaturNestedInput
    shelterBookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShelterBankUpsertWithoutShelterInput = {
    update: XOR<ShelterBankUpdateWithoutShelterInput, ShelterBankUncheckedUpdateWithoutShelterInput>
    create: XOR<ShelterBankCreateWithoutShelterInput, ShelterBankUncheckedCreateWithoutShelterInput>
    where?: ShelterBankWhereInput
  }

  export type ShelterBankUpdateToOneWithWhereWithoutShelterInput = {
    where?: ShelterBankWhereInput
    data: XOR<ShelterBankUpdateWithoutShelterInput, ShelterBankUncheckedUpdateWithoutShelterInput>
  }

  export type ShelterBankUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBank?: StringFieldUpdateOperationsInput | string
    nomorRekening?: StringFieldUpdateOperationsInput | string
    atasNamaRekening?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBankUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBank?: StringFieldUpdateOperationsInput | string
    nomorRekening?: StringFieldUpdateOperationsInput | string
    atasNamaRekening?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBookmarkUpsertWithWhereUniqueWithoutShelterInput = {
    where: ShelterBookmarkWhereUniqueInput
    update: XOR<ShelterBookmarkUpdateWithoutShelterInput, ShelterBookmarkUncheckedUpdateWithoutShelterInput>
    create: XOR<ShelterBookmarkCreateWithoutShelterInput, ShelterBookmarkUncheckedCreateWithoutShelterInput>
  }

  export type ShelterBookmarkUpdateWithWhereUniqueWithoutShelterInput = {
    where: ShelterBookmarkWhereUniqueInput
    data: XOR<ShelterBookmarkUpdateWithoutShelterInput, ShelterBookmarkUncheckedUpdateWithoutShelterInput>
  }

  export type ShelterBookmarkUpdateManyWithWhereWithoutShelterInput = {
    where: ShelterBookmarkScalarWhereInput
    data: XOR<ShelterBookmarkUpdateManyMutationInput, ShelterBookmarkUncheckedUpdateManyWithoutShelterInput>
  }

  export type ShelterCreateWithoutRekeningInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiCreateNestedManyWithoutShelterInput
    satwa?: SatwaCreateNestedManyWithoutShelterInput
    user: UserCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutRekeningInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiUncheckedCreateNestedManyWithoutShelterInput
    satwa?: SatwaUncheckedCreateNestedManyWithoutShelterInput
    bookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutRekeningInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutRekeningInput, ShelterUncheckedCreateWithoutRekeningInput>
  }

  export type ShelterUpsertWithoutRekeningInput = {
    update: XOR<ShelterUpdateWithoutRekeningInput, ShelterUncheckedUpdateWithoutRekeningInput>
    create: XOR<ShelterCreateWithoutRekeningInput, ShelterUncheckedCreateWithoutRekeningInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutRekeningInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutRekeningInput, ShelterUncheckedUpdateWithoutRekeningInput>
  }

  export type ShelterUpdateWithoutRekeningInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUpdateManyWithoutShelterNestedInput
    user?: UserUpdateOneRequiredWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutRekeningInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUncheckedUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUncheckedUpdateManyWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type SatwaBookmarkCreateWithoutSatwaInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSatwaBookmarksInput
  }

  export type SatwaBookmarkUncheckedCreateWithoutSatwaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SatwaBookmarkCreateOrConnectWithoutSatwaInput = {
    where: SatwaBookmarkWhereUniqueInput
    create: XOR<SatwaBookmarkCreateWithoutSatwaInput, SatwaBookmarkUncheckedCreateWithoutSatwaInput>
  }

  export type SatwaBookmarkCreateManySatwaInputEnvelope = {
    data: SatwaBookmarkCreateManySatwaInput | SatwaBookmarkCreateManySatwaInput[]
    skipDuplicates?: boolean
  }

  export type DonasiCreateWithoutSatwaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
    donatur: UserCreateNestedOneWithoutDonasiInput
    shelter: ShelterCreateNestedOneWithoutDonasiInput
  }

  export type DonasiUncheckedCreateWithoutSatwaInput = {
    id?: string
    donaturId: string
    shelterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type DonasiCreateOrConnectWithoutSatwaInput = {
    where: DonasiWhereUniqueInput
    create: XOR<DonasiCreateWithoutSatwaInput, DonasiUncheckedCreateWithoutSatwaInput>
  }

  export type DonasiCreateManySatwaInputEnvelope = {
    data: DonasiCreateManySatwaInput | DonasiCreateManySatwaInput[]
    skipDuplicates?: boolean
  }

  export type LaporanCreateWithoutSatwaInput = {
    id?: string
    judul: string
    deskripsi: string
    foto?: string | null
    fotoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LaporanUncheckedCreateWithoutSatwaInput = {
    id?: string
    judul: string
    deskripsi: string
    foto?: string | null
    fotoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LaporanCreateOrConnectWithoutSatwaInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutSatwaInput, LaporanUncheckedCreateWithoutSatwaInput>
  }

  export type LaporanCreateManySatwaInputEnvelope = {
    data: LaporanCreateManySatwaInput | LaporanCreateManySatwaInput[]
    skipDuplicates?: boolean
  }

  export type ShelterCreateWithoutSatwaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiCreateNestedManyWithoutShelterInput
    user: UserCreateNestedOneWithoutShelterInput
    rekening?: ShelterBankCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutSatwaInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiUncheckedCreateNestedManyWithoutShelterInput
    rekening?: ShelterBankUncheckedCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutSatwaInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutSatwaInput, ShelterUncheckedCreateWithoutSatwaInput>
  }

  export type SatwaBookmarkUpsertWithWhereUniqueWithoutSatwaInput = {
    where: SatwaBookmarkWhereUniqueInput
    update: XOR<SatwaBookmarkUpdateWithoutSatwaInput, SatwaBookmarkUncheckedUpdateWithoutSatwaInput>
    create: XOR<SatwaBookmarkCreateWithoutSatwaInput, SatwaBookmarkUncheckedCreateWithoutSatwaInput>
  }

  export type SatwaBookmarkUpdateWithWhereUniqueWithoutSatwaInput = {
    where: SatwaBookmarkWhereUniqueInput
    data: XOR<SatwaBookmarkUpdateWithoutSatwaInput, SatwaBookmarkUncheckedUpdateWithoutSatwaInput>
  }

  export type SatwaBookmarkUpdateManyWithWhereWithoutSatwaInput = {
    where: SatwaBookmarkScalarWhereInput
    data: XOR<SatwaBookmarkUpdateManyMutationInput, SatwaBookmarkUncheckedUpdateManyWithoutSatwaInput>
  }

  export type DonasiUpsertWithWhereUniqueWithoutSatwaInput = {
    where: DonasiWhereUniqueInput
    update: XOR<DonasiUpdateWithoutSatwaInput, DonasiUncheckedUpdateWithoutSatwaInput>
    create: XOR<DonasiCreateWithoutSatwaInput, DonasiUncheckedCreateWithoutSatwaInput>
  }

  export type DonasiUpdateWithWhereUniqueWithoutSatwaInput = {
    where: DonasiWhereUniqueInput
    data: XOR<DonasiUpdateWithoutSatwaInput, DonasiUncheckedUpdateWithoutSatwaInput>
  }

  export type DonasiUpdateManyWithWhereWithoutSatwaInput = {
    where: DonasiScalarWhereInput
    data: XOR<DonasiUpdateManyMutationInput, DonasiUncheckedUpdateManyWithoutSatwaInput>
  }

  export type LaporanUpsertWithWhereUniqueWithoutSatwaInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutSatwaInput, LaporanUncheckedUpdateWithoutSatwaInput>
    create: XOR<LaporanCreateWithoutSatwaInput, LaporanUncheckedCreateWithoutSatwaInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutSatwaInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutSatwaInput, LaporanUncheckedUpdateWithoutSatwaInput>
  }

  export type LaporanUpdateManyWithWhereWithoutSatwaInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutSatwaInput>
  }

  export type LaporanScalarWhereInput = {
    AND?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    OR?: LaporanScalarWhereInput[]
    NOT?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    id?: StringFilter<"Laporan"> | string
    satwaId?: StringFilter<"Laporan"> | string
    judul?: StringFilter<"Laporan"> | string
    deskripsi?: StringFilter<"Laporan"> | string
    foto?: StringNullableFilter<"Laporan"> | string | null
    fotoPublicId?: StringNullableFilter<"Laporan"> | string | null
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
  }

  export type ShelterUpsertWithoutSatwaInput = {
    update: XOR<ShelterUpdateWithoutSatwaInput, ShelterUncheckedUpdateWithoutSatwaInput>
    create: XOR<ShelterCreateWithoutSatwaInput, ShelterUncheckedCreateWithoutSatwaInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutSatwaInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutSatwaInput, ShelterUncheckedUpdateWithoutSatwaInput>
  }

  export type ShelterUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUpdateManyWithoutShelterNestedInput
    user?: UserUpdateOneRequiredWithoutShelterNestedInput
    rekening?: ShelterBankUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUncheckedUpdateManyWithoutShelterNestedInput
    rekening?: ShelterBankUncheckedUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type UserCreateWithoutDonasiInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkCreateNestedManyWithoutUserInput
    shelter?: ShelterCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonasiInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutUserInput
    shelter?: ShelterUncheckedCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonasiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonasiInput, UserUncheckedCreateWithoutDonasiInput>
  }

  export type SatwaCreateWithoutDonasiInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkCreateNestedManyWithoutSatwaInput
    laporan?: LaporanCreateNestedManyWithoutSatwaInput
    shelter: ShelterCreateNestedOneWithoutSatwaInput
  }

  export type SatwaUncheckedCreateWithoutDonasiInput = {
    id?: string
    shelterId: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutSatwaInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutSatwaInput
  }

  export type SatwaCreateOrConnectWithoutDonasiInput = {
    where: SatwaWhereUniqueInput
    create: XOR<SatwaCreateWithoutDonasiInput, SatwaUncheckedCreateWithoutDonasiInput>
  }

  export type ShelterCreateWithoutDonasiInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    satwa?: SatwaCreateNestedManyWithoutShelterInput
    user: UserCreateNestedOneWithoutShelterInput
    rekening?: ShelterBankCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutDonasiInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    satwa?: SatwaUncheckedCreateNestedManyWithoutShelterInput
    rekening?: ShelterBankUncheckedCreateNestedOneWithoutShelterInput
    bookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutDonasiInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutDonasiInput, ShelterUncheckedCreateWithoutDonasiInput>
  }

  export type UserUpsertWithoutDonasiInput = {
    update: XOR<UserUpdateWithoutDonasiInput, UserUncheckedUpdateWithoutDonasiInput>
    create: XOR<UserCreateWithoutDonasiInput, UserUncheckedCreateWithoutDonasiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonasiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonasiInput, UserUncheckedUpdateWithoutDonasiInput>
  }

  export type UserUpdateWithoutDonasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUpdateManyWithoutUserNestedInput
    shelter?: ShelterUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutUserNestedInput
    shelter?: ShelterUncheckedUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SatwaUpsertWithoutDonasiInput = {
    update: XOR<SatwaUpdateWithoutDonasiInput, SatwaUncheckedUpdateWithoutDonasiInput>
    create: XOR<SatwaCreateWithoutDonasiInput, SatwaUncheckedCreateWithoutDonasiInput>
    where?: SatwaWhereInput
  }

  export type SatwaUpdateToOneWithWhereWithoutDonasiInput = {
    where?: SatwaWhereInput
    data: XOR<SatwaUpdateWithoutDonasiInput, SatwaUncheckedUpdateWithoutDonasiInput>
  }

  export type SatwaUpdateWithoutDonasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUpdateManyWithoutSatwaNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutSatwaNestedInput
  }

  export type SatwaUncheckedUpdateWithoutDonasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutSatwaNestedInput
  }

  export type ShelterUpsertWithoutDonasiInput = {
    update: XOR<ShelterUpdateWithoutDonasiInput, ShelterUncheckedUpdateWithoutDonasiInput>
    create: XOR<ShelterCreateWithoutDonasiInput, ShelterUncheckedCreateWithoutDonasiInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutDonasiInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutDonasiInput, ShelterUncheckedUpdateWithoutDonasiInput>
  }

  export type ShelterUpdateWithoutDonasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    satwa?: SatwaUpdateManyWithoutShelterNestedInput
    user?: UserUpdateOneRequiredWithoutShelterNestedInput
    rekening?: ShelterBankUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutDonasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    satwa?: SatwaUncheckedUpdateManyWithoutShelterNestedInput
    rekening?: ShelterBankUncheckedUpdateOneWithoutShelterNestedInput
    bookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type SatwaCreateWithoutLaporanInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkCreateNestedManyWithoutSatwaInput
    donasi?: DonasiCreateNestedManyWithoutSatwaInput
    shelter: ShelterCreateNestedOneWithoutSatwaInput
  }

  export type SatwaUncheckedCreateWithoutLaporanInput = {
    id?: string
    shelterId: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutSatwaInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutSatwaInput
  }

  export type SatwaCreateOrConnectWithoutLaporanInput = {
    where: SatwaWhereUniqueInput
    create: XOR<SatwaCreateWithoutLaporanInput, SatwaUncheckedCreateWithoutLaporanInput>
  }

  export type SatwaUpsertWithoutLaporanInput = {
    update: XOR<SatwaUpdateWithoutLaporanInput, SatwaUncheckedUpdateWithoutLaporanInput>
    create: XOR<SatwaCreateWithoutLaporanInput, SatwaUncheckedCreateWithoutLaporanInput>
    where?: SatwaWhereInput
  }

  export type SatwaUpdateToOneWithWhereWithoutLaporanInput = {
    where?: SatwaWhereInput
    data: XOR<SatwaUpdateWithoutLaporanInput, SatwaUncheckedUpdateWithoutLaporanInput>
  }

  export type SatwaUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUpdateManyWithoutSatwaNestedInput
    donasi?: DonasiUpdateManyWithoutSatwaNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutSatwaNestedInput
  }

  export type SatwaUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutSatwaNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutSatwaNestedInput
  }

  export type UserCreateWithoutMailerLogsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkCreateNestedManyWithoutUserInput
    donasi?: DonasiCreateNestedManyWithoutDonaturInput
    shelter?: ShelterCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMailerLogsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutUserInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutDonaturInput
    shelter?: ShelterUncheckedCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMailerLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMailerLogsInput, UserUncheckedCreateWithoutMailerLogsInput>
  }

  export type UserUpsertWithoutMailerLogsInput = {
    update: XOR<UserUpdateWithoutMailerLogsInput, UserUncheckedUpdateWithoutMailerLogsInput>
    create: XOR<UserCreateWithoutMailerLogsInput, UserUncheckedCreateWithoutMailerLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMailerLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMailerLogsInput, UserUncheckedUpdateWithoutMailerLogsInput>
  }

  export type UserUpdateWithoutMailerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUpdateManyWithoutUserNestedInput
    donasi?: DonasiUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMailerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutUserNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUncheckedUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SatwaCreateWithoutBookmarksInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    donasi?: DonasiCreateNestedManyWithoutSatwaInput
    laporan?: LaporanCreateNestedManyWithoutSatwaInput
    shelter: ShelterCreateNestedOneWithoutSatwaInput
  }

  export type SatwaUncheckedCreateWithoutBookmarksInput = {
    id?: string
    shelterId: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    donasi?: DonasiUncheckedCreateNestedManyWithoutSatwaInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutSatwaInput
  }

  export type SatwaCreateOrConnectWithoutBookmarksInput = {
    where: SatwaWhereUniqueInput
    create: XOR<SatwaCreateWithoutBookmarksInput, SatwaUncheckedCreateWithoutBookmarksInput>
  }

  export type UserCreateWithoutSatwaBookmarksInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    donasi?: DonasiCreateNestedManyWithoutDonaturInput
    shelter?: ShelterCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSatwaBookmarksInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    donasi?: DonasiUncheckedCreateNestedManyWithoutDonaturInput
    shelter?: ShelterUncheckedCreateNestedOneWithoutUserInput
    shelterBookmarks?: ShelterBookmarkUncheckedCreateNestedManyWithoutUserInput
    mailerLogs?: MailerLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSatwaBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSatwaBookmarksInput, UserUncheckedCreateWithoutSatwaBookmarksInput>
  }

  export type SatwaUpsertWithoutBookmarksInput = {
    update: XOR<SatwaUpdateWithoutBookmarksInput, SatwaUncheckedUpdateWithoutBookmarksInput>
    create: XOR<SatwaCreateWithoutBookmarksInput, SatwaUncheckedCreateWithoutBookmarksInput>
    where?: SatwaWhereInput
  }

  export type SatwaUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: SatwaWhereInput
    data: XOR<SatwaUpdateWithoutBookmarksInput, SatwaUncheckedUpdateWithoutBookmarksInput>
  }

  export type SatwaUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    donasi?: DonasiUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUpdateManyWithoutSatwaNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutSatwaNestedInput
  }

  export type SatwaUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    donasi?: DonasiUncheckedUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutSatwaNestedInput
  }

  export type UserUpsertWithoutSatwaBookmarksInput = {
    update: XOR<UserUpdateWithoutSatwaBookmarksInput, UserUncheckedUpdateWithoutSatwaBookmarksInput>
    create: XOR<UserCreateWithoutSatwaBookmarksInput, UserUncheckedCreateWithoutSatwaBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSatwaBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSatwaBookmarksInput, UserUncheckedUpdateWithoutSatwaBookmarksInput>
  }

  export type UserUpdateWithoutSatwaBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    donasi?: DonasiUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSatwaBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    donasi?: DonasiUncheckedUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUncheckedUpdateOneWithoutUserNestedInput
    shelterBookmarks?: ShelterBookmarkUncheckedUpdateManyWithoutUserNestedInput
    mailerLogs?: MailerLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShelterCreateWithoutBookmarksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiCreateNestedManyWithoutShelterInput
    satwa?: SatwaCreateNestedManyWithoutShelterInput
    user: UserCreateNestedOneWithoutShelterInput
    rekening?: ShelterBankCreateNestedOneWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutBookmarksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: string
    alamatLengkap: string
    status?: $Enums.Status
    deskripsi: string
    fotoBanner?: string | null
    isAktif?: boolean
    kota: string
    namaShelter: string
    noWhatsapp: string
    donasi?: DonasiUncheckedCreateNestedManyWithoutShelterInput
    satwa?: SatwaUncheckedCreateNestedManyWithoutShelterInput
    rekening?: ShelterBankUncheckedCreateNestedOneWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutBookmarksInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutBookmarksInput, ShelterUncheckedCreateWithoutBookmarksInput>
  }

  export type UserCreateWithoutShelterBookmarksInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkCreateNestedManyWithoutUserInput
    donasi?: DonasiCreateNestedManyWithoutDonaturInput
    shelter?: ShelterCreateNestedOneWithoutUserInput
    mailerLogs?: MailerLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShelterBookmarksInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    namaLengkap: string
    noWhatsapp?: string | null
    satwaBookmarks?: SatwaBookmarkUncheckedCreateNestedManyWithoutUserInput
    donasi?: DonasiUncheckedCreateNestedManyWithoutDonaturInput
    shelter?: ShelterUncheckedCreateNestedOneWithoutUserInput
    mailerLogs?: MailerLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShelterBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShelterBookmarksInput, UserUncheckedCreateWithoutShelterBookmarksInput>
  }

  export type ShelterUpsertWithoutBookmarksInput = {
    update: XOR<ShelterUpdateWithoutBookmarksInput, ShelterUncheckedUpdateWithoutBookmarksInput>
    create: XOR<ShelterCreateWithoutBookmarksInput, ShelterUncheckedCreateWithoutBookmarksInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutBookmarksInput, ShelterUncheckedUpdateWithoutBookmarksInput>
  }

  export type ShelterUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUpdateManyWithoutShelterNestedInput
    user?: UserUpdateOneRequiredWithoutShelterNestedInput
    rekening?: ShelterBankUpdateOneWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    alamatLengkap?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deskripsi?: StringFieldUpdateOperationsInput | string
    fotoBanner?: NullableStringFieldUpdateOperationsInput | string | null
    isAktif?: BoolFieldUpdateOperationsInput | boolean
    kota?: StringFieldUpdateOperationsInput | string
    namaShelter?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: StringFieldUpdateOperationsInput | string
    donasi?: DonasiUncheckedUpdateManyWithoutShelterNestedInput
    satwa?: SatwaUncheckedUpdateManyWithoutShelterNestedInput
    rekening?: ShelterBankUncheckedUpdateOneWithoutShelterNestedInput
  }

  export type UserUpsertWithoutShelterBookmarksInput = {
    update: XOR<UserUpdateWithoutShelterBookmarksInput, UserUncheckedUpdateWithoutShelterBookmarksInput>
    create: XOR<UserCreateWithoutShelterBookmarksInput, UserUncheckedCreateWithoutShelterBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShelterBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShelterBookmarksInput, UserUncheckedUpdateWithoutShelterBookmarksInput>
  }

  export type UserUpdateWithoutShelterBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUpdateManyWithoutUserNestedInput
    donasi?: DonasiUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUpdateOneWithoutUserNestedInput
    mailerLogs?: MailerLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShelterBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaLengkap?: StringFieldUpdateOperationsInput | string
    noWhatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    satwaBookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutUserNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutDonaturNestedInput
    shelter?: ShelterUncheckedUpdateOneWithoutUserNestedInput
    mailerLogs?: MailerLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SatwaBookmarkCreateManyUserInput = {
    id?: string
    satwaId: string
    createdAt?: Date | string
  }

  export type DonasiCreateManyDonaturInput = {
    id?: string
    satwaId?: string | null
    shelterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type ShelterBookmarkCreateManyUserInput = {
    id?: string
    shelterId: string
    createdAt?: Date | string
  }

  export type MailerLogCreateManyUserInput = {
    id?: string
    emailTo: string
    subject: string
    body: string
    referenceId?: string | null
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted_at?: Date | string | null
    type: $Enums.MailerLogType
    referenceType?: $Enums.MailerReferenceType | null
    status?: $Enums.MailerStatus
  }

  export type SatwaBookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    satwa?: SatwaUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type SatwaBookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    satwaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatwaBookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    satwaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonasiUpdateWithoutDonaturInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    satwa?: SatwaUpdateOneWithoutDonasiNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutDonasiNestedInput
  }

  export type DonasiUncheckedUpdateWithoutDonaturInput = {
    id?: StringFieldUpdateOperationsInput | string
    satwaId?: NullableStringFieldUpdateOperationsInput | string | null
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonasiUncheckedUpdateManyWithoutDonaturInput = {
    id?: StringFieldUpdateOperationsInput | string
    satwaId?: NullableStringFieldUpdateOperationsInput | string | null
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShelterBookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type ShelterBookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailerLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
  }

  export type MailerLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
  }

  export type MailerLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailTo?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumMailerLogTypeFieldUpdateOperationsInput | $Enums.MailerLogType
    referenceType?: NullableEnumMailerReferenceTypeFieldUpdateOperationsInput | $Enums.MailerReferenceType | null
    status?: EnumMailerStatusFieldUpdateOperationsInput | $Enums.MailerStatus
  }

  export type DonasiCreateManyShelterInput = {
    id?: string
    donaturId: string
    satwaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type SatwaCreateManyShelterInput = {
    id?: string
    nama: string
    jenis: $Enums.JenisSatwa
    ras?: string | null
    umur: number
    kelamin: $Enums.KelaminSatwa
    foto?: string | null
    deskripsi?: string | null
    danaTerkumpul?: number
    status?: $Enums.StatusSatwa
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShelterBookmarkCreateManyShelterInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type DonasiUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    donatur?: UserUpdateOneRequiredWithoutDonasiNestedInput
    satwa?: SatwaUpdateOneWithoutDonasiNestedInput
  }

  export type DonasiUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    donaturId?: StringFieldUpdateOperationsInput | string
    satwaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonasiUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    donaturId?: StringFieldUpdateOperationsInput | string
    satwaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SatwaUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUpdateManyWithoutSatwaNestedInput
    donasi?: DonasiUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUpdateManyWithoutSatwaNestedInput
  }

  export type SatwaUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookmarks?: SatwaBookmarkUncheckedUpdateManyWithoutSatwaNestedInput
    donasi?: DonasiUncheckedUpdateManyWithoutSatwaNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutSatwaNestedInput
  }

  export type SatwaUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisSatwaFieldUpdateOperationsInput | $Enums.JenisSatwa
    ras?: NullableStringFieldUpdateOperationsInput | string | null
    umur?: IntFieldUpdateOperationsInput | number
    kelamin?: EnumKelaminSatwaFieldUpdateOperationsInput | $Enums.KelaminSatwa
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    danaTerkumpul?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSatwaFieldUpdateOperationsInput | $Enums.StatusSatwa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShelterBookmarkUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShelterBookmarksNestedInput
  }

  export type ShelterBookmarkUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterBookmarkUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatwaBookmarkCreateManySatwaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type DonasiCreateManySatwaInput = {
    id?: string
    donaturId: string
    shelterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buktiResi: string
    catatan?: string | null
    nominal: number
    status?: $Enums.Status
    alasanDitolak?: string | null
    diverifikasiAt?: Date | string | null
  }

  export type LaporanCreateManySatwaInput = {
    id?: string
    judul: string
    deskripsi: string
    foto?: string | null
    fotoPublicId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SatwaBookmarkUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSatwaBookmarksNestedInput
  }

  export type SatwaBookmarkUncheckedUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatwaBookmarkUncheckedUpdateManyWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonasiUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    donatur?: UserUpdateOneRequiredWithoutDonasiNestedInput
    shelter?: ShelterUpdateOneRequiredWithoutDonasiNestedInput
  }

  export type DonasiUncheckedUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    donaturId?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonasiUncheckedUpdateManyWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    donaturId?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buktiResi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    nominal?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasanDitolak?: NullableStringFieldUpdateOperationsInput | string | null
    diverifikasiAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanUncheckedUpdateWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanUncheckedUpdateManyWithoutSatwaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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