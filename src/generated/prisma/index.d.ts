
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ServerSetting
 * 
 */
export type ServerSetting = $Result.DefaultSelection<Prisma.$ServerSettingPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model SurvivalRanking
 * 
 */
export type SurvivalRanking = $Result.DefaultSelection<Prisma.$SurvivalRankingPayload>
/**
 * Model EconomyAffiliation
 * 
 */
export type EconomyAffiliation = $Result.DefaultSelection<Prisma.$EconomyAffiliationPayload>
/**
 * Model EconomyAccount
 * 
 */
export type EconomyAccount = $Result.DefaultSelection<Prisma.$EconomyAccountPayload>
/**
 * Model EconomyLog
 * 
 */
export type EconomyLog = $Result.DefaultSelection<Prisma.$EconomyLogPayload>
/**
 * Model RaceHistory
 * 
 */
export type RaceHistory = $Result.DefaultSelection<Prisma.$RaceHistoryPayload>
/**
 * Model ServerSnapshot
 * Discordサーバーの日次スナップショット（午前0時に自動保存）
 */
export type ServerSnapshot = $Result.DefaultSelection<Prisma.$ServerSnapshotPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ServerSettings
 * const serverSettings = await prisma.serverSetting.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ServerSettings
   * const serverSettings = await prisma.serverSetting.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.serverSetting`: Exposes CRUD operations for the **ServerSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerSettings
    * const serverSettings = await prisma.serverSetting.findMany()
    * ```
    */
  get serverSetting(): Prisma.ServerSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survivalRanking`: Exposes CRUD operations for the **SurvivalRanking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurvivalRankings
    * const survivalRankings = await prisma.survivalRanking.findMany()
    * ```
    */
  get survivalRanking(): Prisma.SurvivalRankingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.economyAffiliation`: Exposes CRUD operations for the **EconomyAffiliation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EconomyAffiliations
    * const economyAffiliations = await prisma.economyAffiliation.findMany()
    * ```
    */
  get economyAffiliation(): Prisma.EconomyAffiliationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.economyAccount`: Exposes CRUD operations for the **EconomyAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EconomyAccounts
    * const economyAccounts = await prisma.economyAccount.findMany()
    * ```
    */
  get economyAccount(): Prisma.EconomyAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.economyLog`: Exposes CRUD operations for the **EconomyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EconomyLogs
    * const economyLogs = await prisma.economyLog.findMany()
    * ```
    */
  get economyLog(): Prisma.EconomyLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceHistory`: Exposes CRUD operations for the **RaceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceHistories
    * const raceHistories = await prisma.raceHistory.findMany()
    * ```
    */
  get raceHistory(): Prisma.RaceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serverSnapshot`: Exposes CRUD operations for the **ServerSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerSnapshots
    * const serverSnapshots = await prisma.serverSnapshot.findMany()
    * ```
    */
  get serverSnapshot(): Prisma.ServerSnapshotDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    ServerSetting: 'ServerSetting',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Verification: 'Verification',
    SurvivalRanking: 'SurvivalRanking',
    EconomyAffiliation: 'EconomyAffiliation',
    EconomyAccount: 'EconomyAccount',
    EconomyLog: 'EconomyLog',
    RaceHistory: 'RaceHistory',
    ServerSnapshot: 'ServerSnapshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "serverSetting" | "account" | "session" | "user" | "verification" | "survivalRanking" | "economyAffiliation" | "economyAccount" | "economyLog" | "raceHistory" | "serverSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ServerSetting: {
        payload: Prisma.$ServerSettingPayload<ExtArgs>
        fields: Prisma.ServerSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>
          }
          findFirst: {
            args: Prisma.ServerSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>
          }
          findMany: {
            args: Prisma.ServerSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>[]
          }
          create: {
            args: Prisma.ServerSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>
          }
          createMany: {
            args: Prisma.ServerSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServerSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>
          }
          update: {
            args: Prisma.ServerSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>
          }
          deleteMany: {
            args: Prisma.ServerSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServerSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSettingPayload>
          }
          aggregate: {
            args: Prisma.ServerSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServerSetting>
          }
          groupBy: {
            args: Prisma.ServerSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerSettingCountArgs<ExtArgs>
            result: $Utils.Optional<ServerSettingCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      SurvivalRanking: {
        payload: Prisma.$SurvivalRankingPayload<ExtArgs>
        fields: Prisma.SurvivalRankingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurvivalRankingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurvivalRankingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>
          }
          findFirst: {
            args: Prisma.SurvivalRankingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurvivalRankingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>
          }
          findMany: {
            args: Prisma.SurvivalRankingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>[]
          }
          create: {
            args: Prisma.SurvivalRankingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>
          }
          createMany: {
            args: Prisma.SurvivalRankingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SurvivalRankingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>
          }
          update: {
            args: Prisma.SurvivalRankingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>
          }
          deleteMany: {
            args: Prisma.SurvivalRankingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurvivalRankingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SurvivalRankingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalRankingPayload>
          }
          aggregate: {
            args: Prisma.SurvivalRankingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvivalRanking>
          }
          groupBy: {
            args: Prisma.SurvivalRankingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurvivalRankingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurvivalRankingCountArgs<ExtArgs>
            result: $Utils.Optional<SurvivalRankingCountAggregateOutputType> | number
          }
        }
      }
      EconomyAffiliation: {
        payload: Prisma.$EconomyAffiliationPayload<ExtArgs>
        fields: Prisma.EconomyAffiliationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EconomyAffiliationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EconomyAffiliationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>
          }
          findFirst: {
            args: Prisma.EconomyAffiliationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EconomyAffiliationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>
          }
          findMany: {
            args: Prisma.EconomyAffiliationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>[]
          }
          create: {
            args: Prisma.EconomyAffiliationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>
          }
          createMany: {
            args: Prisma.EconomyAffiliationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EconomyAffiliationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>
          }
          update: {
            args: Prisma.EconomyAffiliationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>
          }
          deleteMany: {
            args: Prisma.EconomyAffiliationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EconomyAffiliationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EconomyAffiliationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAffiliationPayload>
          }
          aggregate: {
            args: Prisma.EconomyAffiliationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEconomyAffiliation>
          }
          groupBy: {
            args: Prisma.EconomyAffiliationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EconomyAffiliationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EconomyAffiliationCountArgs<ExtArgs>
            result: $Utils.Optional<EconomyAffiliationCountAggregateOutputType> | number
          }
        }
      }
      EconomyAccount: {
        payload: Prisma.$EconomyAccountPayload<ExtArgs>
        fields: Prisma.EconomyAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EconomyAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EconomyAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>
          }
          findFirst: {
            args: Prisma.EconomyAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EconomyAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>
          }
          findMany: {
            args: Prisma.EconomyAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>[]
          }
          create: {
            args: Prisma.EconomyAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>
          }
          createMany: {
            args: Prisma.EconomyAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EconomyAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>
          }
          update: {
            args: Prisma.EconomyAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>
          }
          deleteMany: {
            args: Prisma.EconomyAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EconomyAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EconomyAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyAccountPayload>
          }
          aggregate: {
            args: Prisma.EconomyAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEconomyAccount>
          }
          groupBy: {
            args: Prisma.EconomyAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<EconomyAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.EconomyAccountCountArgs<ExtArgs>
            result: $Utils.Optional<EconomyAccountCountAggregateOutputType> | number
          }
        }
      }
      EconomyLog: {
        payload: Prisma.$EconomyLogPayload<ExtArgs>
        fields: Prisma.EconomyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EconomyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EconomyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>
          }
          findFirst: {
            args: Prisma.EconomyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EconomyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>
          }
          findMany: {
            args: Prisma.EconomyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>[]
          }
          create: {
            args: Prisma.EconomyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>
          }
          createMany: {
            args: Prisma.EconomyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EconomyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>
          }
          update: {
            args: Prisma.EconomyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>
          }
          deleteMany: {
            args: Prisma.EconomyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EconomyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EconomyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EconomyLogPayload>
          }
          aggregate: {
            args: Prisma.EconomyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEconomyLog>
          }
          groupBy: {
            args: Prisma.EconomyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EconomyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EconomyLogCountArgs<ExtArgs>
            result: $Utils.Optional<EconomyLogCountAggregateOutputType> | number
          }
        }
      }
      RaceHistory: {
        payload: Prisma.$RaceHistoryPayload<ExtArgs>
        fields: Prisma.RaceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>
          }
          findFirst: {
            args: Prisma.RaceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>
          }
          findMany: {
            args: Prisma.RaceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>[]
          }
          create: {
            args: Prisma.RaceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>
          }
          createMany: {
            args: Prisma.RaceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RaceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>
          }
          update: {
            args: Prisma.RaceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RaceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RaceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceHistoryPayload>
          }
          aggregate: {
            args: Prisma.RaceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceHistory>
          }
          groupBy: {
            args: Prisma.RaceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RaceHistoryCountAggregateOutputType> | number
          }
        }
      }
      ServerSnapshot: {
        payload: Prisma.$ServerSnapshotPayload<ExtArgs>
        fields: Prisma.ServerSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>
          }
          findFirst: {
            args: Prisma.ServerSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>
          }
          findMany: {
            args: Prisma.ServerSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>[]
          }
          create: {
            args: Prisma.ServerSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>
          }
          createMany: {
            args: Prisma.ServerSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServerSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>
          }
          update: {
            args: Prisma.ServerSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.ServerSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServerSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSnapshotPayload>
          }
          aggregate: {
            args: Prisma.ServerSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServerSnapshot>
          }
          groupBy: {
            args: Prisma.ServerSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<ServerSnapshotCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    serverSetting?: ServerSettingOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verification?: VerificationOmit
    survivalRanking?: SurvivalRankingOmit
    economyAffiliation?: EconomyAffiliationOmit
    economyAccount?: EconomyAccountOmit
    economyLog?: EconomyLogOmit
    raceHistory?: RaceHistoryOmit
    serverSnapshot?: ServerSnapshotOmit
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
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type EconomyAffiliationCountOutputType
   */

  export type EconomyAffiliationCountOutputType = {
    accounts: number
  }

  export type EconomyAffiliationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | EconomyAffiliationCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * EconomyAffiliationCountOutputType without action
   */
  export type EconomyAffiliationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliationCountOutputType
     */
    select?: EconomyAffiliationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EconomyAffiliationCountOutputType without action
   */
  export type EconomyAffiliationCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyAccountWhereInput
  }


  /**
   * Count Type EconomyAccountCountOutputType
   */

  export type EconomyAccountCountOutputType = {
    economyLogs: number
    raceHistories: number
  }

  export type EconomyAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    economyLogs?: boolean | EconomyAccountCountOutputTypeCountEconomyLogsArgs
    raceHistories?: boolean | EconomyAccountCountOutputTypeCountRaceHistoriesArgs
  }

  // Custom InputTypes
  /**
   * EconomyAccountCountOutputType without action
   */
  export type EconomyAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccountCountOutputType
     */
    select?: EconomyAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EconomyAccountCountOutputType without action
   */
  export type EconomyAccountCountOutputTypeCountEconomyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyLogWhereInput
  }

  /**
   * EconomyAccountCountOutputType without action
   */
  export type EconomyAccountCountOutputTypeCountRaceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ServerSetting
   */

  export type AggregateServerSetting = {
    _count: ServerSettingCountAggregateOutputType | null
    _avg: ServerSettingAvgAggregateOutputType | null
    _sum: ServerSettingSumAggregateOutputType | null
    _min: ServerSettingMinAggregateOutputType | null
    _max: ServerSettingMaxAggregateOutputType | null
  }

  export type ServerSettingAvgAggregateOutputType = {
    earthquakeNotifyScale: number | null
    mentionReadoutVolume: number | null
  }

  export type ServerSettingSumAggregateOutputType = {
    earthquakeNotifyScale: number | null
    mentionReadoutVolume: number | null
  }

  export type ServerSettingMinAggregateOutputType = {
    id: string | null
    serverId: string | null
    spamBlockEnabled: boolean | null
    inviteBlockEnabled: boolean | null
    shortBlockEnabled: boolean | null
    regexBlockEnabled: boolean | null
    spamReportChannelId: string | null
    inviteReportChannelId: string | null
    shortReportChannelId: string | null
    regexReportChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ignoredChannels: string | null
    ignoredRoles: string | null
    spamIgnoredRoles: string | null
    spamIgnoredChannels: string | null
    inviteIgnoredRoles: string | null
    inviteIgnoredChannels: string | null
    shortIgnoredRoles: string | null
    shortIgnoredChannels: string | null
    regexIgnoredRoles: string | null
    regexIgnoredChannels: string | null
    honeypotChannelId: string | null
    honeypotEnabled: boolean | null
    honeypotIgnoreRole: string | null
    honeypotReportId: string | null
    autoReactions: string | null
    earthquakeNotifyEnabled: boolean | null
    earthquakeNotifyRole: string | null
    earthquakeChannelId: string | null
    earthquakeWebhookUrl: string | null
    earthquakeNotifyScale: number | null
    joinLeaveNotificationEnabled: boolean | null
    mentionReadoutEnabled: boolean | null
    mentionReadoutNameOnly: boolean | null
    mentionReadoutVolume: number | null
    regexPatterns: string | null
    serverDataEnabled: boolean | null
  }

  export type ServerSettingMaxAggregateOutputType = {
    id: string | null
    serverId: string | null
    spamBlockEnabled: boolean | null
    inviteBlockEnabled: boolean | null
    shortBlockEnabled: boolean | null
    regexBlockEnabled: boolean | null
    spamReportChannelId: string | null
    inviteReportChannelId: string | null
    shortReportChannelId: string | null
    regexReportChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ignoredChannels: string | null
    ignoredRoles: string | null
    spamIgnoredRoles: string | null
    spamIgnoredChannels: string | null
    inviteIgnoredRoles: string | null
    inviteIgnoredChannels: string | null
    shortIgnoredRoles: string | null
    shortIgnoredChannels: string | null
    regexIgnoredRoles: string | null
    regexIgnoredChannels: string | null
    honeypotChannelId: string | null
    honeypotEnabled: boolean | null
    honeypotIgnoreRole: string | null
    honeypotReportId: string | null
    autoReactions: string | null
    earthquakeNotifyEnabled: boolean | null
    earthquakeNotifyRole: string | null
    earthquakeChannelId: string | null
    earthquakeWebhookUrl: string | null
    earthquakeNotifyScale: number | null
    joinLeaveNotificationEnabled: boolean | null
    mentionReadoutEnabled: boolean | null
    mentionReadoutNameOnly: boolean | null
    mentionReadoutVolume: number | null
    regexPatterns: string | null
    serverDataEnabled: boolean | null
  }

  export type ServerSettingCountAggregateOutputType = {
    id: number
    serverId: number
    spamBlockEnabled: number
    inviteBlockEnabled: number
    shortBlockEnabled: number
    regexBlockEnabled: number
    spamReportChannelId: number
    inviteReportChannelId: number
    shortReportChannelId: number
    regexReportChannelId: number
    createdAt: number
    updatedAt: number
    ignoredChannels: number
    ignoredRoles: number
    spamIgnoredRoles: number
    spamIgnoredChannels: number
    inviteIgnoredRoles: number
    inviteIgnoredChannels: number
    shortIgnoredRoles: number
    shortIgnoredChannels: number
    regexIgnoredRoles: number
    regexIgnoredChannels: number
    honeypotChannelId: number
    honeypotEnabled: number
    honeypotIgnoreRole: number
    honeypotReportId: number
    autoReactions: number
    earthquakeNotifyEnabled: number
    earthquakeNotifyRole: number
    earthquakeChannelId: number
    earthquakeWebhookUrl: number
    earthquakeNotifyScale: number
    joinLeaveNotificationEnabled: number
    mentionReadoutEnabled: number
    mentionReadoutNameOnly: number
    mentionReadoutVolume: number
    regexPatterns: number
    serverDataEnabled: number
    _all: number
  }


  export type ServerSettingAvgAggregateInputType = {
    earthquakeNotifyScale?: true
    mentionReadoutVolume?: true
  }

  export type ServerSettingSumAggregateInputType = {
    earthquakeNotifyScale?: true
    mentionReadoutVolume?: true
  }

  export type ServerSettingMinAggregateInputType = {
    id?: true
    serverId?: true
    spamBlockEnabled?: true
    inviteBlockEnabled?: true
    shortBlockEnabled?: true
    regexBlockEnabled?: true
    spamReportChannelId?: true
    inviteReportChannelId?: true
    shortReportChannelId?: true
    regexReportChannelId?: true
    createdAt?: true
    updatedAt?: true
    ignoredChannels?: true
    ignoredRoles?: true
    spamIgnoredRoles?: true
    spamIgnoredChannels?: true
    inviteIgnoredRoles?: true
    inviteIgnoredChannels?: true
    shortIgnoredRoles?: true
    shortIgnoredChannels?: true
    regexIgnoredRoles?: true
    regexIgnoredChannels?: true
    honeypotChannelId?: true
    honeypotEnabled?: true
    honeypotIgnoreRole?: true
    honeypotReportId?: true
    autoReactions?: true
    earthquakeNotifyEnabled?: true
    earthquakeNotifyRole?: true
    earthquakeChannelId?: true
    earthquakeWebhookUrl?: true
    earthquakeNotifyScale?: true
    joinLeaveNotificationEnabled?: true
    mentionReadoutEnabled?: true
    mentionReadoutNameOnly?: true
    mentionReadoutVolume?: true
    regexPatterns?: true
    serverDataEnabled?: true
  }

  export type ServerSettingMaxAggregateInputType = {
    id?: true
    serverId?: true
    spamBlockEnabled?: true
    inviteBlockEnabled?: true
    shortBlockEnabled?: true
    regexBlockEnabled?: true
    spamReportChannelId?: true
    inviteReportChannelId?: true
    shortReportChannelId?: true
    regexReportChannelId?: true
    createdAt?: true
    updatedAt?: true
    ignoredChannels?: true
    ignoredRoles?: true
    spamIgnoredRoles?: true
    spamIgnoredChannels?: true
    inviteIgnoredRoles?: true
    inviteIgnoredChannels?: true
    shortIgnoredRoles?: true
    shortIgnoredChannels?: true
    regexIgnoredRoles?: true
    regexIgnoredChannels?: true
    honeypotChannelId?: true
    honeypotEnabled?: true
    honeypotIgnoreRole?: true
    honeypotReportId?: true
    autoReactions?: true
    earthquakeNotifyEnabled?: true
    earthquakeNotifyRole?: true
    earthquakeChannelId?: true
    earthquakeWebhookUrl?: true
    earthquakeNotifyScale?: true
    joinLeaveNotificationEnabled?: true
    mentionReadoutEnabled?: true
    mentionReadoutNameOnly?: true
    mentionReadoutVolume?: true
    regexPatterns?: true
    serverDataEnabled?: true
  }

  export type ServerSettingCountAggregateInputType = {
    id?: true
    serverId?: true
    spamBlockEnabled?: true
    inviteBlockEnabled?: true
    shortBlockEnabled?: true
    regexBlockEnabled?: true
    spamReportChannelId?: true
    inviteReportChannelId?: true
    shortReportChannelId?: true
    regexReportChannelId?: true
    createdAt?: true
    updatedAt?: true
    ignoredChannels?: true
    ignoredRoles?: true
    spamIgnoredRoles?: true
    spamIgnoredChannels?: true
    inviteIgnoredRoles?: true
    inviteIgnoredChannels?: true
    shortIgnoredRoles?: true
    shortIgnoredChannels?: true
    regexIgnoredRoles?: true
    regexIgnoredChannels?: true
    honeypotChannelId?: true
    honeypotEnabled?: true
    honeypotIgnoreRole?: true
    honeypotReportId?: true
    autoReactions?: true
    earthquakeNotifyEnabled?: true
    earthquakeNotifyRole?: true
    earthquakeChannelId?: true
    earthquakeWebhookUrl?: true
    earthquakeNotifyScale?: true
    joinLeaveNotificationEnabled?: true
    mentionReadoutEnabled?: true
    mentionReadoutNameOnly?: true
    mentionReadoutVolume?: true
    regexPatterns?: true
    serverDataEnabled?: true
    _all?: true
  }

  export type ServerSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerSetting to aggregate.
     */
    where?: ServerSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSettings to fetch.
     */
    orderBy?: ServerSettingOrderByWithRelationInput | ServerSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerSettings
    **/
    _count?: true | ServerSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerSettingMaxAggregateInputType
  }

  export type GetServerSettingAggregateType<T extends ServerSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateServerSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerSetting[P]>
      : GetScalarType<T[P], AggregateServerSetting[P]>
  }




  export type ServerSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerSettingWhereInput
    orderBy?: ServerSettingOrderByWithAggregationInput | ServerSettingOrderByWithAggregationInput[]
    by: ServerSettingScalarFieldEnum[] | ServerSettingScalarFieldEnum
    having?: ServerSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerSettingCountAggregateInputType | true
    _avg?: ServerSettingAvgAggregateInputType
    _sum?: ServerSettingSumAggregateInputType
    _min?: ServerSettingMinAggregateInputType
    _max?: ServerSettingMaxAggregateInputType
  }

  export type ServerSettingGroupByOutputType = {
    id: string
    serverId: string
    spamBlockEnabled: boolean
    inviteBlockEnabled: boolean
    shortBlockEnabled: boolean
    regexBlockEnabled: boolean
    spamReportChannelId: string | null
    inviteReportChannelId: string | null
    shortReportChannelId: string | null
    regexReportChannelId: string | null
    createdAt: Date
    updatedAt: Date
    ignoredChannels: string | null
    ignoredRoles: string | null
    spamIgnoredRoles: string | null
    spamIgnoredChannels: string | null
    inviteIgnoredRoles: string | null
    inviteIgnoredChannels: string | null
    shortIgnoredRoles: string | null
    shortIgnoredChannels: string | null
    regexIgnoredRoles: string | null
    regexIgnoredChannels: string | null
    honeypotChannelId: string | null
    honeypotEnabled: boolean
    honeypotIgnoreRole: string | null
    honeypotReportId: string | null
    autoReactions: string | null
    earthquakeNotifyEnabled: boolean
    earthquakeNotifyRole: string | null
    earthquakeChannelId: string | null
    earthquakeWebhookUrl: string | null
    earthquakeNotifyScale: number | null
    joinLeaveNotificationEnabled: boolean
    mentionReadoutEnabled: boolean
    mentionReadoutNameOnly: boolean
    mentionReadoutVolume: number
    regexPatterns: string | null
    serverDataEnabled: boolean
    _count: ServerSettingCountAggregateOutputType | null
    _avg: ServerSettingAvgAggregateOutputType | null
    _sum: ServerSettingSumAggregateOutputType | null
    _min: ServerSettingMinAggregateOutputType | null
    _max: ServerSettingMaxAggregateOutputType | null
  }

  type GetServerSettingGroupByPayload<T extends ServerSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerSettingGroupByOutputType[P]>
            : GetScalarType<T[P], ServerSettingGroupByOutputType[P]>
        }
      >
    >


  export type ServerSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    spamBlockEnabled?: boolean
    inviteBlockEnabled?: boolean
    shortBlockEnabled?: boolean
    regexBlockEnabled?: boolean
    spamReportChannelId?: boolean
    inviteReportChannelId?: boolean
    shortReportChannelId?: boolean
    regexReportChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ignoredChannels?: boolean
    ignoredRoles?: boolean
    spamIgnoredRoles?: boolean
    spamIgnoredChannels?: boolean
    inviteIgnoredRoles?: boolean
    inviteIgnoredChannels?: boolean
    shortIgnoredRoles?: boolean
    shortIgnoredChannels?: boolean
    regexIgnoredRoles?: boolean
    regexIgnoredChannels?: boolean
    honeypotChannelId?: boolean
    honeypotEnabled?: boolean
    honeypotIgnoreRole?: boolean
    honeypotReportId?: boolean
    autoReactions?: boolean
    earthquakeNotifyEnabled?: boolean
    earthquakeNotifyRole?: boolean
    earthquakeChannelId?: boolean
    earthquakeWebhookUrl?: boolean
    earthquakeNotifyScale?: boolean
    joinLeaveNotificationEnabled?: boolean
    mentionReadoutEnabled?: boolean
    mentionReadoutNameOnly?: boolean
    mentionReadoutVolume?: boolean
    regexPatterns?: boolean
    serverDataEnabled?: boolean
  }, ExtArgs["result"]["serverSetting"]>



  export type ServerSettingSelectScalar = {
    id?: boolean
    serverId?: boolean
    spamBlockEnabled?: boolean
    inviteBlockEnabled?: boolean
    shortBlockEnabled?: boolean
    regexBlockEnabled?: boolean
    spamReportChannelId?: boolean
    inviteReportChannelId?: boolean
    shortReportChannelId?: boolean
    regexReportChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ignoredChannels?: boolean
    ignoredRoles?: boolean
    spamIgnoredRoles?: boolean
    spamIgnoredChannels?: boolean
    inviteIgnoredRoles?: boolean
    inviteIgnoredChannels?: boolean
    shortIgnoredRoles?: boolean
    shortIgnoredChannels?: boolean
    regexIgnoredRoles?: boolean
    regexIgnoredChannels?: boolean
    honeypotChannelId?: boolean
    honeypotEnabled?: boolean
    honeypotIgnoreRole?: boolean
    honeypotReportId?: boolean
    autoReactions?: boolean
    earthquakeNotifyEnabled?: boolean
    earthquakeNotifyRole?: boolean
    earthquakeChannelId?: boolean
    earthquakeWebhookUrl?: boolean
    earthquakeNotifyScale?: boolean
    joinLeaveNotificationEnabled?: boolean
    mentionReadoutEnabled?: boolean
    mentionReadoutNameOnly?: boolean
    mentionReadoutVolume?: boolean
    regexPatterns?: boolean
    serverDataEnabled?: boolean
  }

  export type ServerSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serverId" | "spamBlockEnabled" | "inviteBlockEnabled" | "shortBlockEnabled" | "regexBlockEnabled" | "spamReportChannelId" | "inviteReportChannelId" | "shortReportChannelId" | "regexReportChannelId" | "createdAt" | "updatedAt" | "ignoredChannels" | "ignoredRoles" | "spamIgnoredRoles" | "spamIgnoredChannels" | "inviteIgnoredRoles" | "inviteIgnoredChannels" | "shortIgnoredRoles" | "shortIgnoredChannels" | "regexIgnoredRoles" | "regexIgnoredChannels" | "honeypotChannelId" | "honeypotEnabled" | "honeypotIgnoreRole" | "honeypotReportId" | "autoReactions" | "earthquakeNotifyEnabled" | "earthquakeNotifyRole" | "earthquakeChannelId" | "earthquakeWebhookUrl" | "earthquakeNotifyScale" | "joinLeaveNotificationEnabled" | "mentionReadoutEnabled" | "mentionReadoutNameOnly" | "mentionReadoutVolume" | "regexPatterns" | "serverDataEnabled", ExtArgs["result"]["serverSetting"]>

  export type $ServerSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServerSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serverId: string
      spamBlockEnabled: boolean
      inviteBlockEnabled: boolean
      shortBlockEnabled: boolean
      regexBlockEnabled: boolean
      spamReportChannelId: string | null
      inviteReportChannelId: string | null
      shortReportChannelId: string | null
      regexReportChannelId: string | null
      createdAt: Date
      updatedAt: Date
      ignoredChannels: string | null
      ignoredRoles: string | null
      spamIgnoredRoles: string | null
      spamIgnoredChannels: string | null
      inviteIgnoredRoles: string | null
      inviteIgnoredChannels: string | null
      shortIgnoredRoles: string | null
      shortIgnoredChannels: string | null
      regexIgnoredRoles: string | null
      regexIgnoredChannels: string | null
      honeypotChannelId: string | null
      honeypotEnabled: boolean
      honeypotIgnoreRole: string | null
      honeypotReportId: string | null
      autoReactions: string | null
      earthquakeNotifyEnabled: boolean
      earthquakeNotifyRole: string | null
      earthquakeChannelId: string | null
      earthquakeWebhookUrl: string | null
      earthquakeNotifyScale: number | null
      joinLeaveNotificationEnabled: boolean
      mentionReadoutEnabled: boolean
      mentionReadoutNameOnly: boolean
      mentionReadoutVolume: number
      regexPatterns: string | null
      serverDataEnabled: boolean
    }, ExtArgs["result"]["serverSetting"]>
    composites: {}
  }

  type ServerSettingGetPayload<S extends boolean | null | undefined | ServerSettingDefaultArgs> = $Result.GetResult<Prisma.$ServerSettingPayload, S>

  type ServerSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerSettingCountAggregateInputType | true
    }

  export interface ServerSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServerSetting'], meta: { name: 'ServerSetting' } }
    /**
     * Find zero or one ServerSetting that matches the filter.
     * @param {ServerSettingFindUniqueArgs} args - Arguments to find a ServerSetting
     * @example
     * // Get one ServerSetting
     * const serverSetting = await prisma.serverSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerSettingFindUniqueArgs>(args: SelectSubset<T, ServerSettingFindUniqueArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServerSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerSettingFindUniqueOrThrowArgs} args - Arguments to find a ServerSetting
     * @example
     * // Get one ServerSetting
     * const serverSetting = await prisma.serverSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingFindFirstArgs} args - Arguments to find a ServerSetting
     * @example
     * // Get one ServerSetting
     * const serverSetting = await prisma.serverSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerSettingFindFirstArgs>(args?: SelectSubset<T, ServerSettingFindFirstArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingFindFirstOrThrowArgs} args - Arguments to find a ServerSetting
     * @example
     * // Get one ServerSetting
     * const serverSetting = await prisma.serverSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServerSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerSettings
     * const serverSettings = await prisma.serverSetting.findMany()
     * 
     * // Get first 10 ServerSettings
     * const serverSettings = await prisma.serverSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverSettingWithIdOnly = await prisma.serverSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerSettingFindManyArgs>(args?: SelectSubset<T, ServerSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServerSetting.
     * @param {ServerSettingCreateArgs} args - Arguments to create a ServerSetting.
     * @example
     * // Create one ServerSetting
     * const ServerSetting = await prisma.serverSetting.create({
     *   data: {
     *     // ... data to create a ServerSetting
     *   }
     * })
     * 
     */
    create<T extends ServerSettingCreateArgs>(args: SelectSubset<T, ServerSettingCreateArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServerSettings.
     * @param {ServerSettingCreateManyArgs} args - Arguments to create many ServerSettings.
     * @example
     * // Create many ServerSettings
     * const serverSetting = await prisma.serverSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerSettingCreateManyArgs>(args?: SelectSubset<T, ServerSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServerSetting.
     * @param {ServerSettingDeleteArgs} args - Arguments to delete one ServerSetting.
     * @example
     * // Delete one ServerSetting
     * const ServerSetting = await prisma.serverSetting.delete({
     *   where: {
     *     // ... filter to delete one ServerSetting
     *   }
     * })
     * 
     */
    delete<T extends ServerSettingDeleteArgs>(args: SelectSubset<T, ServerSettingDeleteArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServerSetting.
     * @param {ServerSettingUpdateArgs} args - Arguments to update one ServerSetting.
     * @example
     * // Update one ServerSetting
     * const serverSetting = await prisma.serverSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerSettingUpdateArgs>(args: SelectSubset<T, ServerSettingUpdateArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServerSettings.
     * @param {ServerSettingDeleteManyArgs} args - Arguments to filter ServerSettings to delete.
     * @example
     * // Delete a few ServerSettings
     * const { count } = await prisma.serverSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerSettingDeleteManyArgs>(args?: SelectSubset<T, ServerSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerSettings
     * const serverSetting = await prisma.serverSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerSettingUpdateManyArgs>(args: SelectSubset<T, ServerSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServerSetting.
     * @param {ServerSettingUpsertArgs} args - Arguments to update or create a ServerSetting.
     * @example
     * // Update or create a ServerSetting
     * const serverSetting = await prisma.serverSetting.upsert({
     *   create: {
     *     // ... data to create a ServerSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerSetting we want to update
     *   }
     * })
     */
    upsert<T extends ServerSettingUpsertArgs>(args: SelectSubset<T, ServerSettingUpsertArgs<ExtArgs>>): Prisma__ServerSettingClient<$Result.GetResult<Prisma.$ServerSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServerSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingCountArgs} args - Arguments to filter ServerSettings to count.
     * @example
     * // Count the number of ServerSettings
     * const count = await prisma.serverSetting.count({
     *   where: {
     *     // ... the filter for the ServerSettings we want to count
     *   }
     * })
    **/
    count<T extends ServerSettingCountArgs>(
      args?: Subset<T, ServerSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerSettingAggregateArgs>(args: Subset<T, ServerSettingAggregateArgs>): Prisma.PrismaPromise<GetServerSettingAggregateType<T>>

    /**
     * Group by ServerSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSettingGroupByArgs} args - Group by arguments.
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
      T extends ServerSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerSettingGroupByArgs['orderBy'] }
        : { orderBy?: ServerSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServerSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServerSetting model
   */
  readonly fields: ServerSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ServerSetting model
   */
  interface ServerSettingFieldRefs {
    readonly id: FieldRef<"ServerSetting", 'String'>
    readonly serverId: FieldRef<"ServerSetting", 'String'>
    readonly spamBlockEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly inviteBlockEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly shortBlockEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly regexBlockEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly spamReportChannelId: FieldRef<"ServerSetting", 'String'>
    readonly inviteReportChannelId: FieldRef<"ServerSetting", 'String'>
    readonly shortReportChannelId: FieldRef<"ServerSetting", 'String'>
    readonly regexReportChannelId: FieldRef<"ServerSetting", 'String'>
    readonly createdAt: FieldRef<"ServerSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"ServerSetting", 'DateTime'>
    readonly ignoredChannels: FieldRef<"ServerSetting", 'String'>
    readonly ignoredRoles: FieldRef<"ServerSetting", 'String'>
    readonly spamIgnoredRoles: FieldRef<"ServerSetting", 'String'>
    readonly spamIgnoredChannels: FieldRef<"ServerSetting", 'String'>
    readonly inviteIgnoredRoles: FieldRef<"ServerSetting", 'String'>
    readonly inviteIgnoredChannels: FieldRef<"ServerSetting", 'String'>
    readonly shortIgnoredRoles: FieldRef<"ServerSetting", 'String'>
    readonly shortIgnoredChannels: FieldRef<"ServerSetting", 'String'>
    readonly regexIgnoredRoles: FieldRef<"ServerSetting", 'String'>
    readonly regexIgnoredChannels: FieldRef<"ServerSetting", 'String'>
    readonly honeypotChannelId: FieldRef<"ServerSetting", 'String'>
    readonly honeypotEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly honeypotIgnoreRole: FieldRef<"ServerSetting", 'String'>
    readonly honeypotReportId: FieldRef<"ServerSetting", 'String'>
    readonly autoReactions: FieldRef<"ServerSetting", 'String'>
    readonly earthquakeNotifyEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly earthquakeNotifyRole: FieldRef<"ServerSetting", 'String'>
    readonly earthquakeChannelId: FieldRef<"ServerSetting", 'String'>
    readonly earthquakeWebhookUrl: FieldRef<"ServerSetting", 'String'>
    readonly earthquakeNotifyScale: FieldRef<"ServerSetting", 'Int'>
    readonly joinLeaveNotificationEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly mentionReadoutEnabled: FieldRef<"ServerSetting", 'Boolean'>
    readonly mentionReadoutNameOnly: FieldRef<"ServerSetting", 'Boolean'>
    readonly mentionReadoutVolume: FieldRef<"ServerSetting", 'Int'>
    readonly regexPatterns: FieldRef<"ServerSetting", 'String'>
    readonly serverDataEnabled: FieldRef<"ServerSetting", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ServerSetting findUnique
   */
  export type ServerSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * Filter, which ServerSetting to fetch.
     */
    where: ServerSettingWhereUniqueInput
  }

  /**
   * ServerSetting findUniqueOrThrow
   */
  export type ServerSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * Filter, which ServerSetting to fetch.
     */
    where: ServerSettingWhereUniqueInput
  }

  /**
   * ServerSetting findFirst
   */
  export type ServerSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * Filter, which ServerSetting to fetch.
     */
    where?: ServerSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSettings to fetch.
     */
    orderBy?: ServerSettingOrderByWithRelationInput | ServerSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerSettings.
     */
    cursor?: ServerSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSettings.
     */
    distinct?: ServerSettingScalarFieldEnum | ServerSettingScalarFieldEnum[]
  }

  /**
   * ServerSetting findFirstOrThrow
   */
  export type ServerSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * Filter, which ServerSetting to fetch.
     */
    where?: ServerSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSettings to fetch.
     */
    orderBy?: ServerSettingOrderByWithRelationInput | ServerSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerSettings.
     */
    cursor?: ServerSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSettings.
     */
    distinct?: ServerSettingScalarFieldEnum | ServerSettingScalarFieldEnum[]
  }

  /**
   * ServerSetting findMany
   */
  export type ServerSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * Filter, which ServerSettings to fetch.
     */
    where?: ServerSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSettings to fetch.
     */
    orderBy?: ServerSettingOrderByWithRelationInput | ServerSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerSettings.
     */
    cursor?: ServerSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSettings.
     */
    distinct?: ServerSettingScalarFieldEnum | ServerSettingScalarFieldEnum[]
  }

  /**
   * ServerSetting create
   */
  export type ServerSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a ServerSetting.
     */
    data: XOR<ServerSettingCreateInput, ServerSettingUncheckedCreateInput>
  }

  /**
   * ServerSetting createMany
   */
  export type ServerSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServerSettings.
     */
    data: ServerSettingCreateManyInput | ServerSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServerSetting update
   */
  export type ServerSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a ServerSetting.
     */
    data: XOR<ServerSettingUpdateInput, ServerSettingUncheckedUpdateInput>
    /**
     * Choose, which ServerSetting to update.
     */
    where: ServerSettingWhereUniqueInput
  }

  /**
   * ServerSetting updateMany
   */
  export type ServerSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServerSettings.
     */
    data: XOR<ServerSettingUpdateManyMutationInput, ServerSettingUncheckedUpdateManyInput>
    /**
     * Filter which ServerSettings to update
     */
    where?: ServerSettingWhereInput
    /**
     * Limit how many ServerSettings to update.
     */
    limit?: number
  }

  /**
   * ServerSetting upsert
   */
  export type ServerSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the ServerSetting to update in case it exists.
     */
    where: ServerSettingWhereUniqueInput
    /**
     * In case the ServerSetting found by the `where` argument doesn't exist, create a new ServerSetting with this data.
     */
    create: XOR<ServerSettingCreateInput, ServerSettingUncheckedCreateInput>
    /**
     * In case the ServerSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerSettingUpdateInput, ServerSettingUncheckedUpdateInput>
  }

  /**
   * ServerSetting delete
   */
  export type ServerSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
    /**
     * Filter which ServerSetting to delete.
     */
    where: ServerSettingWhereUniqueInput
  }

  /**
   * ServerSetting deleteMany
   */
  export type ServerSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerSettings to delete
     */
    where?: ServerSettingWhereInput
    /**
     * Limit how many ServerSettings to delete.
     */
    limit?: number
  }

  /**
   * ServerSetting without action
   */
  export type ServerSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSetting
     */
    select?: ServerSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSetting
     */
    omit?: ServerSettingOmit<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    providerId: string | null
    accountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    providerId: string | null
    accountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    providerId: number
    accountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    password: number
    createdAt: number
    updatedAt: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    providerId?: true
    accountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    providerId?: true
    accountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    providerId?: true
    accountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    providerId: string
    accountId: string
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerId?: boolean
    accountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    providerId?: boolean
    accountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "providerId" | "accountId" | "accessToken" | "refreshToken" | "expiresAt" | "password" | "createdAt" | "updatedAt" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      providerId: string
      accountId: string
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      password: string | null
      createdAt: Date
      updatedAt: Date
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


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
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model SurvivalRanking
   */

  export type AggregateSurvivalRanking = {
    _count: SurvivalRankingCountAggregateOutputType | null
    _avg: SurvivalRankingAvgAggregateOutputType | null
    _sum: SurvivalRankingSumAggregateOutputType | null
    _min: SurvivalRankingMinAggregateOutputType | null
    _max: SurvivalRankingMaxAggregateOutputType | null
  }

  export type SurvivalRankingAvgAggregateOutputType = {
    bestDays: number | null
  }

  export type SurvivalRankingSumAggregateOutputType = {
    bestDays: number | null
  }

  export type SurvivalRankingMinAggregateOutputType = {
    userId: string | null
    username: string | null
    bestDays: number | null
    updatedAt: Date | null
  }

  export type SurvivalRankingMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    bestDays: number | null
    updatedAt: Date | null
  }

  export type SurvivalRankingCountAggregateOutputType = {
    userId: number
    username: number
    bestDays: number
    updatedAt: number
    _all: number
  }


  export type SurvivalRankingAvgAggregateInputType = {
    bestDays?: true
  }

  export type SurvivalRankingSumAggregateInputType = {
    bestDays?: true
  }

  export type SurvivalRankingMinAggregateInputType = {
    userId?: true
    username?: true
    bestDays?: true
    updatedAt?: true
  }

  export type SurvivalRankingMaxAggregateInputType = {
    userId?: true
    username?: true
    bestDays?: true
    updatedAt?: true
  }

  export type SurvivalRankingCountAggregateInputType = {
    userId?: true
    username?: true
    bestDays?: true
    updatedAt?: true
    _all?: true
  }

  export type SurvivalRankingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurvivalRanking to aggregate.
     */
    where?: SurvivalRankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalRankings to fetch.
     */
    orderBy?: SurvivalRankingOrderByWithRelationInput | SurvivalRankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurvivalRankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalRankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalRankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurvivalRankings
    **/
    _count?: true | SurvivalRankingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurvivalRankingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurvivalRankingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurvivalRankingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurvivalRankingMaxAggregateInputType
  }

  export type GetSurvivalRankingAggregateType<T extends SurvivalRankingAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvivalRanking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvivalRanking[P]>
      : GetScalarType<T[P], AggregateSurvivalRanking[P]>
  }




  export type SurvivalRankingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurvivalRankingWhereInput
    orderBy?: SurvivalRankingOrderByWithAggregationInput | SurvivalRankingOrderByWithAggregationInput[]
    by: SurvivalRankingScalarFieldEnum[] | SurvivalRankingScalarFieldEnum
    having?: SurvivalRankingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurvivalRankingCountAggregateInputType | true
    _avg?: SurvivalRankingAvgAggregateInputType
    _sum?: SurvivalRankingSumAggregateInputType
    _min?: SurvivalRankingMinAggregateInputType
    _max?: SurvivalRankingMaxAggregateInputType
  }

  export type SurvivalRankingGroupByOutputType = {
    userId: string
    username: string
    bestDays: number
    updatedAt: Date
    _count: SurvivalRankingCountAggregateOutputType | null
    _avg: SurvivalRankingAvgAggregateOutputType | null
    _sum: SurvivalRankingSumAggregateOutputType | null
    _min: SurvivalRankingMinAggregateOutputType | null
    _max: SurvivalRankingMaxAggregateOutputType | null
  }

  type GetSurvivalRankingGroupByPayload<T extends SurvivalRankingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurvivalRankingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurvivalRankingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurvivalRankingGroupByOutputType[P]>
            : GetScalarType<T[P], SurvivalRankingGroupByOutputType[P]>
        }
      >
    >


  export type SurvivalRankingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    bestDays?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["survivalRanking"]>



  export type SurvivalRankingSelectScalar = {
    userId?: boolean
    username?: boolean
    bestDays?: boolean
    updatedAt?: boolean
  }

  export type SurvivalRankingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "bestDays" | "updatedAt", ExtArgs["result"]["survivalRanking"]>

  export type $SurvivalRankingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurvivalRanking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      bestDays: number
      updatedAt: Date
    }, ExtArgs["result"]["survivalRanking"]>
    composites: {}
  }

  type SurvivalRankingGetPayload<S extends boolean | null | undefined | SurvivalRankingDefaultArgs> = $Result.GetResult<Prisma.$SurvivalRankingPayload, S>

  type SurvivalRankingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurvivalRankingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurvivalRankingCountAggregateInputType | true
    }

  export interface SurvivalRankingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurvivalRanking'], meta: { name: 'SurvivalRanking' } }
    /**
     * Find zero or one SurvivalRanking that matches the filter.
     * @param {SurvivalRankingFindUniqueArgs} args - Arguments to find a SurvivalRanking
     * @example
     * // Get one SurvivalRanking
     * const survivalRanking = await prisma.survivalRanking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurvivalRankingFindUniqueArgs>(args: SelectSubset<T, SurvivalRankingFindUniqueArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SurvivalRanking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurvivalRankingFindUniqueOrThrowArgs} args - Arguments to find a SurvivalRanking
     * @example
     * // Get one SurvivalRanking
     * const survivalRanking = await prisma.survivalRanking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurvivalRankingFindUniqueOrThrowArgs>(args: SelectSubset<T, SurvivalRankingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurvivalRanking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingFindFirstArgs} args - Arguments to find a SurvivalRanking
     * @example
     * // Get one SurvivalRanking
     * const survivalRanking = await prisma.survivalRanking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurvivalRankingFindFirstArgs>(args?: SelectSubset<T, SurvivalRankingFindFirstArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurvivalRanking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingFindFirstOrThrowArgs} args - Arguments to find a SurvivalRanking
     * @example
     * // Get one SurvivalRanking
     * const survivalRanking = await prisma.survivalRanking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurvivalRankingFindFirstOrThrowArgs>(args?: SelectSubset<T, SurvivalRankingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SurvivalRankings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurvivalRankings
     * const survivalRankings = await prisma.survivalRanking.findMany()
     * 
     * // Get first 10 SurvivalRankings
     * const survivalRankings = await prisma.survivalRanking.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const survivalRankingWithUserIdOnly = await prisma.survivalRanking.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SurvivalRankingFindManyArgs>(args?: SelectSubset<T, SurvivalRankingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SurvivalRanking.
     * @param {SurvivalRankingCreateArgs} args - Arguments to create a SurvivalRanking.
     * @example
     * // Create one SurvivalRanking
     * const SurvivalRanking = await prisma.survivalRanking.create({
     *   data: {
     *     // ... data to create a SurvivalRanking
     *   }
     * })
     * 
     */
    create<T extends SurvivalRankingCreateArgs>(args: SelectSubset<T, SurvivalRankingCreateArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SurvivalRankings.
     * @param {SurvivalRankingCreateManyArgs} args - Arguments to create many SurvivalRankings.
     * @example
     * // Create many SurvivalRankings
     * const survivalRanking = await prisma.survivalRanking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurvivalRankingCreateManyArgs>(args?: SelectSubset<T, SurvivalRankingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SurvivalRanking.
     * @param {SurvivalRankingDeleteArgs} args - Arguments to delete one SurvivalRanking.
     * @example
     * // Delete one SurvivalRanking
     * const SurvivalRanking = await prisma.survivalRanking.delete({
     *   where: {
     *     // ... filter to delete one SurvivalRanking
     *   }
     * })
     * 
     */
    delete<T extends SurvivalRankingDeleteArgs>(args: SelectSubset<T, SurvivalRankingDeleteArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SurvivalRanking.
     * @param {SurvivalRankingUpdateArgs} args - Arguments to update one SurvivalRanking.
     * @example
     * // Update one SurvivalRanking
     * const survivalRanking = await prisma.survivalRanking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurvivalRankingUpdateArgs>(args: SelectSubset<T, SurvivalRankingUpdateArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SurvivalRankings.
     * @param {SurvivalRankingDeleteManyArgs} args - Arguments to filter SurvivalRankings to delete.
     * @example
     * // Delete a few SurvivalRankings
     * const { count } = await prisma.survivalRanking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurvivalRankingDeleteManyArgs>(args?: SelectSubset<T, SurvivalRankingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurvivalRankings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurvivalRankings
     * const survivalRanking = await prisma.survivalRanking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurvivalRankingUpdateManyArgs>(args: SelectSubset<T, SurvivalRankingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SurvivalRanking.
     * @param {SurvivalRankingUpsertArgs} args - Arguments to update or create a SurvivalRanking.
     * @example
     * // Update or create a SurvivalRanking
     * const survivalRanking = await prisma.survivalRanking.upsert({
     *   create: {
     *     // ... data to create a SurvivalRanking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurvivalRanking we want to update
     *   }
     * })
     */
    upsert<T extends SurvivalRankingUpsertArgs>(args: SelectSubset<T, SurvivalRankingUpsertArgs<ExtArgs>>): Prisma__SurvivalRankingClient<$Result.GetResult<Prisma.$SurvivalRankingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SurvivalRankings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingCountArgs} args - Arguments to filter SurvivalRankings to count.
     * @example
     * // Count the number of SurvivalRankings
     * const count = await prisma.survivalRanking.count({
     *   where: {
     *     // ... the filter for the SurvivalRankings we want to count
     *   }
     * })
    **/
    count<T extends SurvivalRankingCountArgs>(
      args?: Subset<T, SurvivalRankingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurvivalRankingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurvivalRanking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurvivalRankingAggregateArgs>(args: Subset<T, SurvivalRankingAggregateArgs>): Prisma.PrismaPromise<GetSurvivalRankingAggregateType<T>>

    /**
     * Group by SurvivalRanking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalRankingGroupByArgs} args - Group by arguments.
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
      T extends SurvivalRankingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurvivalRankingGroupByArgs['orderBy'] }
        : { orderBy?: SurvivalRankingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurvivalRankingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurvivalRankingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurvivalRanking model
   */
  readonly fields: SurvivalRankingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurvivalRanking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurvivalRankingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SurvivalRanking model
   */
  interface SurvivalRankingFieldRefs {
    readonly userId: FieldRef<"SurvivalRanking", 'String'>
    readonly username: FieldRef<"SurvivalRanking", 'String'>
    readonly bestDays: FieldRef<"SurvivalRanking", 'Int'>
    readonly updatedAt: FieldRef<"SurvivalRanking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SurvivalRanking findUnique
   */
  export type SurvivalRankingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * Filter, which SurvivalRanking to fetch.
     */
    where: SurvivalRankingWhereUniqueInput
  }

  /**
   * SurvivalRanking findUniqueOrThrow
   */
  export type SurvivalRankingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * Filter, which SurvivalRanking to fetch.
     */
    where: SurvivalRankingWhereUniqueInput
  }

  /**
   * SurvivalRanking findFirst
   */
  export type SurvivalRankingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * Filter, which SurvivalRanking to fetch.
     */
    where?: SurvivalRankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalRankings to fetch.
     */
    orderBy?: SurvivalRankingOrderByWithRelationInput | SurvivalRankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurvivalRankings.
     */
    cursor?: SurvivalRankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalRankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalRankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurvivalRankings.
     */
    distinct?: SurvivalRankingScalarFieldEnum | SurvivalRankingScalarFieldEnum[]
  }

  /**
   * SurvivalRanking findFirstOrThrow
   */
  export type SurvivalRankingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * Filter, which SurvivalRanking to fetch.
     */
    where?: SurvivalRankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalRankings to fetch.
     */
    orderBy?: SurvivalRankingOrderByWithRelationInput | SurvivalRankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurvivalRankings.
     */
    cursor?: SurvivalRankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalRankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalRankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurvivalRankings.
     */
    distinct?: SurvivalRankingScalarFieldEnum | SurvivalRankingScalarFieldEnum[]
  }

  /**
   * SurvivalRanking findMany
   */
  export type SurvivalRankingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * Filter, which SurvivalRankings to fetch.
     */
    where?: SurvivalRankingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalRankings to fetch.
     */
    orderBy?: SurvivalRankingOrderByWithRelationInput | SurvivalRankingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurvivalRankings.
     */
    cursor?: SurvivalRankingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalRankings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalRankings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurvivalRankings.
     */
    distinct?: SurvivalRankingScalarFieldEnum | SurvivalRankingScalarFieldEnum[]
  }

  /**
   * SurvivalRanking create
   */
  export type SurvivalRankingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * The data needed to create a SurvivalRanking.
     */
    data: XOR<SurvivalRankingCreateInput, SurvivalRankingUncheckedCreateInput>
  }

  /**
   * SurvivalRanking createMany
   */
  export type SurvivalRankingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurvivalRankings.
     */
    data: SurvivalRankingCreateManyInput | SurvivalRankingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurvivalRanking update
   */
  export type SurvivalRankingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * The data needed to update a SurvivalRanking.
     */
    data: XOR<SurvivalRankingUpdateInput, SurvivalRankingUncheckedUpdateInput>
    /**
     * Choose, which SurvivalRanking to update.
     */
    where: SurvivalRankingWhereUniqueInput
  }

  /**
   * SurvivalRanking updateMany
   */
  export type SurvivalRankingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurvivalRankings.
     */
    data: XOR<SurvivalRankingUpdateManyMutationInput, SurvivalRankingUncheckedUpdateManyInput>
    /**
     * Filter which SurvivalRankings to update
     */
    where?: SurvivalRankingWhereInput
    /**
     * Limit how many SurvivalRankings to update.
     */
    limit?: number
  }

  /**
   * SurvivalRanking upsert
   */
  export type SurvivalRankingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * The filter to search for the SurvivalRanking to update in case it exists.
     */
    where: SurvivalRankingWhereUniqueInput
    /**
     * In case the SurvivalRanking found by the `where` argument doesn't exist, create a new SurvivalRanking with this data.
     */
    create: XOR<SurvivalRankingCreateInput, SurvivalRankingUncheckedCreateInput>
    /**
     * In case the SurvivalRanking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurvivalRankingUpdateInput, SurvivalRankingUncheckedUpdateInput>
  }

  /**
   * SurvivalRanking delete
   */
  export type SurvivalRankingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
    /**
     * Filter which SurvivalRanking to delete.
     */
    where: SurvivalRankingWhereUniqueInput
  }

  /**
   * SurvivalRanking deleteMany
   */
  export type SurvivalRankingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurvivalRankings to delete
     */
    where?: SurvivalRankingWhereInput
    /**
     * Limit how many SurvivalRankings to delete.
     */
    limit?: number
  }

  /**
   * SurvivalRanking without action
   */
  export type SurvivalRankingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalRanking
     */
    select?: SurvivalRankingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalRanking
     */
    omit?: SurvivalRankingOmit<ExtArgs> | null
  }


  /**
   * Model EconomyAffiliation
   */

  export type AggregateEconomyAffiliation = {
    _count: EconomyAffiliationCountAggregateOutputType | null
    _avg: EconomyAffiliationAvgAggregateOutputType | null
    _sum: EconomyAffiliationSumAggregateOutputType | null
    _min: EconomyAffiliationMinAggregateOutputType | null
    _max: EconomyAffiliationMaxAggregateOutputType | null
  }

  export type EconomyAffiliationAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type EconomyAffiliationSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type EconomyAffiliationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    enabled: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EconomyAffiliationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    enabled: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EconomyAffiliationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    enabled: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EconomyAffiliationAvgAggregateInputType = {
    sortOrder?: true
  }

  export type EconomyAffiliationSumAggregateInputType = {
    sortOrder?: true
  }

  export type EconomyAffiliationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    enabled?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EconomyAffiliationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    enabled?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EconomyAffiliationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    enabled?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EconomyAffiliationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyAffiliation to aggregate.
     */
    where?: EconomyAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAffiliations to fetch.
     */
    orderBy?: EconomyAffiliationOrderByWithRelationInput | EconomyAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EconomyAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EconomyAffiliations
    **/
    _count?: true | EconomyAffiliationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EconomyAffiliationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EconomyAffiliationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EconomyAffiliationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EconomyAffiliationMaxAggregateInputType
  }

  export type GetEconomyAffiliationAggregateType<T extends EconomyAffiliationAggregateArgs> = {
        [P in keyof T & keyof AggregateEconomyAffiliation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEconomyAffiliation[P]>
      : GetScalarType<T[P], AggregateEconomyAffiliation[P]>
  }




  export type EconomyAffiliationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyAffiliationWhereInput
    orderBy?: EconomyAffiliationOrderByWithAggregationInput | EconomyAffiliationOrderByWithAggregationInput[]
    by: EconomyAffiliationScalarFieldEnum[] | EconomyAffiliationScalarFieldEnum
    having?: EconomyAffiliationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EconomyAffiliationCountAggregateInputType | true
    _avg?: EconomyAffiliationAvgAggregateInputType
    _sum?: EconomyAffiliationSumAggregateInputType
    _min?: EconomyAffiliationMinAggregateInputType
    _max?: EconomyAffiliationMaxAggregateInputType
  }

  export type EconomyAffiliationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    enabled: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: EconomyAffiliationCountAggregateOutputType | null
    _avg: EconomyAffiliationAvgAggregateOutputType | null
    _sum: EconomyAffiliationSumAggregateOutputType | null
    _min: EconomyAffiliationMinAggregateOutputType | null
    _max: EconomyAffiliationMaxAggregateOutputType | null
  }

  type GetEconomyAffiliationGroupByPayload<T extends EconomyAffiliationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EconomyAffiliationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EconomyAffiliationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EconomyAffiliationGroupByOutputType[P]>
            : GetScalarType<T[P], EconomyAffiliationGroupByOutputType[P]>
        }
      >
    >


  export type EconomyAffiliationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    enabled?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | EconomyAffiliation$accountsArgs<ExtArgs>
    _count?: boolean | EconomyAffiliationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["economyAffiliation"]>



  export type EconomyAffiliationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    enabled?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EconomyAffiliationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "enabled" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["economyAffiliation"]>
  export type EconomyAffiliationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | EconomyAffiliation$accountsArgs<ExtArgs>
    _count?: boolean | EconomyAffiliationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EconomyAffiliationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EconomyAffiliation"
    objects: {
      accounts: Prisma.$EconomyAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      enabled: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["economyAffiliation"]>
    composites: {}
  }

  type EconomyAffiliationGetPayload<S extends boolean | null | undefined | EconomyAffiliationDefaultArgs> = $Result.GetResult<Prisma.$EconomyAffiliationPayload, S>

  type EconomyAffiliationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EconomyAffiliationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EconomyAffiliationCountAggregateInputType | true
    }

  export interface EconomyAffiliationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EconomyAffiliation'], meta: { name: 'EconomyAffiliation' } }
    /**
     * Find zero or one EconomyAffiliation that matches the filter.
     * @param {EconomyAffiliationFindUniqueArgs} args - Arguments to find a EconomyAffiliation
     * @example
     * // Get one EconomyAffiliation
     * const economyAffiliation = await prisma.economyAffiliation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EconomyAffiliationFindUniqueArgs>(args: SelectSubset<T, EconomyAffiliationFindUniqueArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EconomyAffiliation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EconomyAffiliationFindUniqueOrThrowArgs} args - Arguments to find a EconomyAffiliation
     * @example
     * // Get one EconomyAffiliation
     * const economyAffiliation = await prisma.economyAffiliation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EconomyAffiliationFindUniqueOrThrowArgs>(args: SelectSubset<T, EconomyAffiliationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EconomyAffiliation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationFindFirstArgs} args - Arguments to find a EconomyAffiliation
     * @example
     * // Get one EconomyAffiliation
     * const economyAffiliation = await prisma.economyAffiliation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EconomyAffiliationFindFirstArgs>(args?: SelectSubset<T, EconomyAffiliationFindFirstArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EconomyAffiliation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationFindFirstOrThrowArgs} args - Arguments to find a EconomyAffiliation
     * @example
     * // Get one EconomyAffiliation
     * const economyAffiliation = await prisma.economyAffiliation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EconomyAffiliationFindFirstOrThrowArgs>(args?: SelectSubset<T, EconomyAffiliationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EconomyAffiliations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EconomyAffiliations
     * const economyAffiliations = await prisma.economyAffiliation.findMany()
     * 
     * // Get first 10 EconomyAffiliations
     * const economyAffiliations = await prisma.economyAffiliation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const economyAffiliationWithIdOnly = await prisma.economyAffiliation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EconomyAffiliationFindManyArgs>(args?: SelectSubset<T, EconomyAffiliationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EconomyAffiliation.
     * @param {EconomyAffiliationCreateArgs} args - Arguments to create a EconomyAffiliation.
     * @example
     * // Create one EconomyAffiliation
     * const EconomyAffiliation = await prisma.economyAffiliation.create({
     *   data: {
     *     // ... data to create a EconomyAffiliation
     *   }
     * })
     * 
     */
    create<T extends EconomyAffiliationCreateArgs>(args: SelectSubset<T, EconomyAffiliationCreateArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EconomyAffiliations.
     * @param {EconomyAffiliationCreateManyArgs} args - Arguments to create many EconomyAffiliations.
     * @example
     * // Create many EconomyAffiliations
     * const economyAffiliation = await prisma.economyAffiliation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EconomyAffiliationCreateManyArgs>(args?: SelectSubset<T, EconomyAffiliationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EconomyAffiliation.
     * @param {EconomyAffiliationDeleteArgs} args - Arguments to delete one EconomyAffiliation.
     * @example
     * // Delete one EconomyAffiliation
     * const EconomyAffiliation = await prisma.economyAffiliation.delete({
     *   where: {
     *     // ... filter to delete one EconomyAffiliation
     *   }
     * })
     * 
     */
    delete<T extends EconomyAffiliationDeleteArgs>(args: SelectSubset<T, EconomyAffiliationDeleteArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EconomyAffiliation.
     * @param {EconomyAffiliationUpdateArgs} args - Arguments to update one EconomyAffiliation.
     * @example
     * // Update one EconomyAffiliation
     * const economyAffiliation = await prisma.economyAffiliation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EconomyAffiliationUpdateArgs>(args: SelectSubset<T, EconomyAffiliationUpdateArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EconomyAffiliations.
     * @param {EconomyAffiliationDeleteManyArgs} args - Arguments to filter EconomyAffiliations to delete.
     * @example
     * // Delete a few EconomyAffiliations
     * const { count } = await prisma.economyAffiliation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EconomyAffiliationDeleteManyArgs>(args?: SelectSubset<T, EconomyAffiliationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EconomyAffiliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EconomyAffiliations
     * const economyAffiliation = await prisma.economyAffiliation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EconomyAffiliationUpdateManyArgs>(args: SelectSubset<T, EconomyAffiliationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EconomyAffiliation.
     * @param {EconomyAffiliationUpsertArgs} args - Arguments to update or create a EconomyAffiliation.
     * @example
     * // Update or create a EconomyAffiliation
     * const economyAffiliation = await prisma.economyAffiliation.upsert({
     *   create: {
     *     // ... data to create a EconomyAffiliation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EconomyAffiliation we want to update
     *   }
     * })
     */
    upsert<T extends EconomyAffiliationUpsertArgs>(args: SelectSubset<T, EconomyAffiliationUpsertArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EconomyAffiliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationCountArgs} args - Arguments to filter EconomyAffiliations to count.
     * @example
     * // Count the number of EconomyAffiliations
     * const count = await prisma.economyAffiliation.count({
     *   where: {
     *     // ... the filter for the EconomyAffiliations we want to count
     *   }
     * })
    **/
    count<T extends EconomyAffiliationCountArgs>(
      args?: Subset<T, EconomyAffiliationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EconomyAffiliationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EconomyAffiliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EconomyAffiliationAggregateArgs>(args: Subset<T, EconomyAffiliationAggregateArgs>): Prisma.PrismaPromise<GetEconomyAffiliationAggregateType<T>>

    /**
     * Group by EconomyAffiliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAffiliationGroupByArgs} args - Group by arguments.
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
      T extends EconomyAffiliationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EconomyAffiliationGroupByArgs['orderBy'] }
        : { orderBy?: EconomyAffiliationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EconomyAffiliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEconomyAffiliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EconomyAffiliation model
   */
  readonly fields: EconomyAffiliationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EconomyAffiliation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EconomyAffiliationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends EconomyAffiliation$accountsArgs<ExtArgs> = {}>(args?: Subset<T, EconomyAffiliation$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EconomyAffiliation model
   */
  interface EconomyAffiliationFieldRefs {
    readonly id: FieldRef<"EconomyAffiliation", 'String'>
    readonly name: FieldRef<"EconomyAffiliation", 'String'>
    readonly description: FieldRef<"EconomyAffiliation", 'String'>
    readonly enabled: FieldRef<"EconomyAffiliation", 'Boolean'>
    readonly sortOrder: FieldRef<"EconomyAffiliation", 'Int'>
    readonly createdAt: FieldRef<"EconomyAffiliation", 'DateTime'>
    readonly updatedAt: FieldRef<"EconomyAffiliation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EconomyAffiliation findUnique
   */
  export type EconomyAffiliationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAffiliation to fetch.
     */
    where: EconomyAffiliationWhereUniqueInput
  }

  /**
   * EconomyAffiliation findUniqueOrThrow
   */
  export type EconomyAffiliationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAffiliation to fetch.
     */
    where: EconomyAffiliationWhereUniqueInput
  }

  /**
   * EconomyAffiliation findFirst
   */
  export type EconomyAffiliationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAffiliation to fetch.
     */
    where?: EconomyAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAffiliations to fetch.
     */
    orderBy?: EconomyAffiliationOrderByWithRelationInput | EconomyAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyAffiliations.
     */
    cursor?: EconomyAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyAffiliations.
     */
    distinct?: EconomyAffiliationScalarFieldEnum | EconomyAffiliationScalarFieldEnum[]
  }

  /**
   * EconomyAffiliation findFirstOrThrow
   */
  export type EconomyAffiliationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAffiliation to fetch.
     */
    where?: EconomyAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAffiliations to fetch.
     */
    orderBy?: EconomyAffiliationOrderByWithRelationInput | EconomyAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyAffiliations.
     */
    cursor?: EconomyAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyAffiliations.
     */
    distinct?: EconomyAffiliationScalarFieldEnum | EconomyAffiliationScalarFieldEnum[]
  }

  /**
   * EconomyAffiliation findMany
   */
  export type EconomyAffiliationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAffiliations to fetch.
     */
    where?: EconomyAffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAffiliations to fetch.
     */
    orderBy?: EconomyAffiliationOrderByWithRelationInput | EconomyAffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EconomyAffiliations.
     */
    cursor?: EconomyAffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAffiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAffiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyAffiliations.
     */
    distinct?: EconomyAffiliationScalarFieldEnum | EconomyAffiliationScalarFieldEnum[]
  }

  /**
   * EconomyAffiliation create
   */
  export type EconomyAffiliationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * The data needed to create a EconomyAffiliation.
     */
    data: XOR<EconomyAffiliationCreateInput, EconomyAffiliationUncheckedCreateInput>
  }

  /**
   * EconomyAffiliation createMany
   */
  export type EconomyAffiliationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EconomyAffiliations.
     */
    data: EconomyAffiliationCreateManyInput | EconomyAffiliationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EconomyAffiliation update
   */
  export type EconomyAffiliationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * The data needed to update a EconomyAffiliation.
     */
    data: XOR<EconomyAffiliationUpdateInput, EconomyAffiliationUncheckedUpdateInput>
    /**
     * Choose, which EconomyAffiliation to update.
     */
    where: EconomyAffiliationWhereUniqueInput
  }

  /**
   * EconomyAffiliation updateMany
   */
  export type EconomyAffiliationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EconomyAffiliations.
     */
    data: XOR<EconomyAffiliationUpdateManyMutationInput, EconomyAffiliationUncheckedUpdateManyInput>
    /**
     * Filter which EconomyAffiliations to update
     */
    where?: EconomyAffiliationWhereInput
    /**
     * Limit how many EconomyAffiliations to update.
     */
    limit?: number
  }

  /**
   * EconomyAffiliation upsert
   */
  export type EconomyAffiliationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * The filter to search for the EconomyAffiliation to update in case it exists.
     */
    where: EconomyAffiliationWhereUniqueInput
    /**
     * In case the EconomyAffiliation found by the `where` argument doesn't exist, create a new EconomyAffiliation with this data.
     */
    create: XOR<EconomyAffiliationCreateInput, EconomyAffiliationUncheckedCreateInput>
    /**
     * In case the EconomyAffiliation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EconomyAffiliationUpdateInput, EconomyAffiliationUncheckedUpdateInput>
  }

  /**
   * EconomyAffiliation delete
   */
  export type EconomyAffiliationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    /**
     * Filter which EconomyAffiliation to delete.
     */
    where: EconomyAffiliationWhereUniqueInput
  }

  /**
   * EconomyAffiliation deleteMany
   */
  export type EconomyAffiliationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyAffiliations to delete
     */
    where?: EconomyAffiliationWhereInput
    /**
     * Limit how many EconomyAffiliations to delete.
     */
    limit?: number
  }

  /**
   * EconomyAffiliation.accounts
   */
  export type EconomyAffiliation$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    where?: EconomyAccountWhereInput
    orderBy?: EconomyAccountOrderByWithRelationInput | EconomyAccountOrderByWithRelationInput[]
    cursor?: EconomyAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EconomyAccountScalarFieldEnum | EconomyAccountScalarFieldEnum[]
  }

  /**
   * EconomyAffiliation without action
   */
  export type EconomyAffiliationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
  }


  /**
   * Model EconomyAccount
   */

  export type AggregateEconomyAccount = {
    _count: EconomyAccountCountAggregateOutputType | null
    _avg: EconomyAccountAvgAggregateOutputType | null
    _sum: EconomyAccountSumAggregateOutputType | null
    _min: EconomyAccountMinAggregateOutputType | null
    _max: EconomyAccountMaxAggregateOutputType | null
  }

  export type EconomyAccountAvgAggregateOutputType = {
    coins: number | null
    intelligenceLevel: number | null
    satiation: number | null
    happiness: number | null
    lastBirthdayBonusYear: number | null
    schoolAttendanceCount: number | null
  }

  export type EconomyAccountSumAggregateOutputType = {
    coins: bigint | null
    intelligenceLevel: number | null
    satiation: number | null
    happiness: number | null
    lastBirthdayBonusYear: number | null
    schoolAttendanceCount: number | null
  }

  export type EconomyAccountMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    name: string | null
    image: string | null
    affiliationName: string | null
    affiliationId: string | null
    coins: bigint | null
    intelligenceLevel: number | null
    satiation: number | null
    happiness: number | null
    birthday: Date | null
    lastWorkAt: Date | null
    inventory: string | null
    lastBirthdayBonusYear: number | null
    lastSchoolAt: Date | null
    schoolAttendanceCount: number | null
    status: string | null
    ipAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EconomyAccountMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    name: string | null
    image: string | null
    affiliationName: string | null
    affiliationId: string | null
    coins: bigint | null
    intelligenceLevel: number | null
    satiation: number | null
    happiness: number | null
    birthday: Date | null
    lastWorkAt: Date | null
    inventory: string | null
    lastBirthdayBonusYear: number | null
    lastSchoolAt: Date | null
    schoolAttendanceCount: number | null
    status: string | null
    ipAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EconomyAccountCountAggregateOutputType = {
    id: number
    discordId: number
    name: number
    image: number
    affiliationName: number
    affiliationId: number
    coins: number
    intelligenceLevel: number
    satiation: number
    happiness: number
    birthday: number
    lastWorkAt: number
    inventory: number
    lastBirthdayBonusYear: number
    lastSchoolAt: number
    schoolAttendanceCount: number
    status: number
    ipAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EconomyAccountAvgAggregateInputType = {
    coins?: true
    intelligenceLevel?: true
    satiation?: true
    happiness?: true
    lastBirthdayBonusYear?: true
    schoolAttendanceCount?: true
  }

  export type EconomyAccountSumAggregateInputType = {
    coins?: true
    intelligenceLevel?: true
    satiation?: true
    happiness?: true
    lastBirthdayBonusYear?: true
    schoolAttendanceCount?: true
  }

  export type EconomyAccountMinAggregateInputType = {
    id?: true
    discordId?: true
    name?: true
    image?: true
    affiliationName?: true
    affiliationId?: true
    coins?: true
    intelligenceLevel?: true
    satiation?: true
    happiness?: true
    birthday?: true
    lastWorkAt?: true
    inventory?: true
    lastBirthdayBonusYear?: true
    lastSchoolAt?: true
    schoolAttendanceCount?: true
    status?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EconomyAccountMaxAggregateInputType = {
    id?: true
    discordId?: true
    name?: true
    image?: true
    affiliationName?: true
    affiliationId?: true
    coins?: true
    intelligenceLevel?: true
    satiation?: true
    happiness?: true
    birthday?: true
    lastWorkAt?: true
    inventory?: true
    lastBirthdayBonusYear?: true
    lastSchoolAt?: true
    schoolAttendanceCount?: true
    status?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EconomyAccountCountAggregateInputType = {
    id?: true
    discordId?: true
    name?: true
    image?: true
    affiliationName?: true
    affiliationId?: true
    coins?: true
    intelligenceLevel?: true
    satiation?: true
    happiness?: true
    birthday?: true
    lastWorkAt?: true
    inventory?: true
    lastBirthdayBonusYear?: true
    lastSchoolAt?: true
    schoolAttendanceCount?: true
    status?: true
    ipAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EconomyAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyAccount to aggregate.
     */
    where?: EconomyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAccounts to fetch.
     */
    orderBy?: EconomyAccountOrderByWithRelationInput | EconomyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EconomyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EconomyAccounts
    **/
    _count?: true | EconomyAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EconomyAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EconomyAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EconomyAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EconomyAccountMaxAggregateInputType
  }

  export type GetEconomyAccountAggregateType<T extends EconomyAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateEconomyAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEconomyAccount[P]>
      : GetScalarType<T[P], AggregateEconomyAccount[P]>
  }




  export type EconomyAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyAccountWhereInput
    orderBy?: EconomyAccountOrderByWithAggregationInput | EconomyAccountOrderByWithAggregationInput[]
    by: EconomyAccountScalarFieldEnum[] | EconomyAccountScalarFieldEnum
    having?: EconomyAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EconomyAccountCountAggregateInputType | true
    _avg?: EconomyAccountAvgAggregateInputType
    _sum?: EconomyAccountSumAggregateInputType
    _min?: EconomyAccountMinAggregateInputType
    _max?: EconomyAccountMaxAggregateInputType
  }

  export type EconomyAccountGroupByOutputType = {
    id: string
    discordId: string
    name: string
    image: string | null
    affiliationName: string
    affiliationId: string | null
    coins: bigint
    intelligenceLevel: number
    satiation: number
    happiness: number
    birthday: Date | null
    lastWorkAt: Date | null
    inventory: string | null
    lastBirthdayBonusYear: number | null
    lastSchoolAt: Date | null
    schoolAttendanceCount: number
    status: string
    ipAddress: string | null
    createdAt: Date
    updatedAt: Date
    _count: EconomyAccountCountAggregateOutputType | null
    _avg: EconomyAccountAvgAggregateOutputType | null
    _sum: EconomyAccountSumAggregateOutputType | null
    _min: EconomyAccountMinAggregateOutputType | null
    _max: EconomyAccountMaxAggregateOutputType | null
  }

  type GetEconomyAccountGroupByPayload<T extends EconomyAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EconomyAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EconomyAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EconomyAccountGroupByOutputType[P]>
            : GetScalarType<T[P], EconomyAccountGroupByOutputType[P]>
        }
      >
    >


  export type EconomyAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    name?: boolean
    image?: boolean
    affiliationName?: boolean
    affiliationId?: boolean
    coins?: boolean
    intelligenceLevel?: boolean
    satiation?: boolean
    happiness?: boolean
    birthday?: boolean
    lastWorkAt?: boolean
    inventory?: boolean
    lastBirthdayBonusYear?: boolean
    lastSchoolAt?: boolean
    schoolAttendanceCount?: boolean
    status?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    affiliation?: boolean | EconomyAccount$affiliationArgs<ExtArgs>
    economyLogs?: boolean | EconomyAccount$economyLogsArgs<ExtArgs>
    raceHistories?: boolean | EconomyAccount$raceHistoriesArgs<ExtArgs>
    _count?: boolean | EconomyAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["economyAccount"]>



  export type EconomyAccountSelectScalar = {
    id?: boolean
    discordId?: boolean
    name?: boolean
    image?: boolean
    affiliationName?: boolean
    affiliationId?: boolean
    coins?: boolean
    intelligenceLevel?: boolean
    satiation?: boolean
    happiness?: boolean
    birthday?: boolean
    lastWorkAt?: boolean
    inventory?: boolean
    lastBirthdayBonusYear?: boolean
    lastSchoolAt?: boolean
    schoolAttendanceCount?: boolean
    status?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EconomyAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "name" | "image" | "affiliationName" | "affiliationId" | "coins" | "intelligenceLevel" | "satiation" | "happiness" | "birthday" | "lastWorkAt" | "inventory" | "lastBirthdayBonusYear" | "lastSchoolAt" | "schoolAttendanceCount" | "status" | "ipAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["economyAccount"]>
  export type EconomyAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliation?: boolean | EconomyAccount$affiliationArgs<ExtArgs>
    economyLogs?: boolean | EconomyAccount$economyLogsArgs<ExtArgs>
    raceHistories?: boolean | EconomyAccount$raceHistoriesArgs<ExtArgs>
    _count?: boolean | EconomyAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EconomyAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EconomyAccount"
    objects: {
      affiliation: Prisma.$EconomyAffiliationPayload<ExtArgs> | null
      economyLogs: Prisma.$EconomyLogPayload<ExtArgs>[]
      raceHistories: Prisma.$RaceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      name: string
      image: string | null
      affiliationName: string
      affiliationId: string | null
      coins: bigint
      intelligenceLevel: number
      satiation: number
      happiness: number
      birthday: Date | null
      lastWorkAt: Date | null
      inventory: string | null
      lastBirthdayBonusYear: number | null
      lastSchoolAt: Date | null
      schoolAttendanceCount: number
      status: string
      ipAddress: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["economyAccount"]>
    composites: {}
  }

  type EconomyAccountGetPayload<S extends boolean | null | undefined | EconomyAccountDefaultArgs> = $Result.GetResult<Prisma.$EconomyAccountPayload, S>

  type EconomyAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EconomyAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EconomyAccountCountAggregateInputType | true
    }

  export interface EconomyAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EconomyAccount'], meta: { name: 'EconomyAccount' } }
    /**
     * Find zero or one EconomyAccount that matches the filter.
     * @param {EconomyAccountFindUniqueArgs} args - Arguments to find a EconomyAccount
     * @example
     * // Get one EconomyAccount
     * const economyAccount = await prisma.economyAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EconomyAccountFindUniqueArgs>(args: SelectSubset<T, EconomyAccountFindUniqueArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EconomyAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EconomyAccountFindUniqueOrThrowArgs} args - Arguments to find a EconomyAccount
     * @example
     * // Get one EconomyAccount
     * const economyAccount = await prisma.economyAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EconomyAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, EconomyAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EconomyAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountFindFirstArgs} args - Arguments to find a EconomyAccount
     * @example
     * // Get one EconomyAccount
     * const economyAccount = await prisma.economyAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EconomyAccountFindFirstArgs>(args?: SelectSubset<T, EconomyAccountFindFirstArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EconomyAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountFindFirstOrThrowArgs} args - Arguments to find a EconomyAccount
     * @example
     * // Get one EconomyAccount
     * const economyAccount = await prisma.economyAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EconomyAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, EconomyAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EconomyAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EconomyAccounts
     * const economyAccounts = await prisma.economyAccount.findMany()
     * 
     * // Get first 10 EconomyAccounts
     * const economyAccounts = await prisma.economyAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const economyAccountWithIdOnly = await prisma.economyAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EconomyAccountFindManyArgs>(args?: SelectSubset<T, EconomyAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EconomyAccount.
     * @param {EconomyAccountCreateArgs} args - Arguments to create a EconomyAccount.
     * @example
     * // Create one EconomyAccount
     * const EconomyAccount = await prisma.economyAccount.create({
     *   data: {
     *     // ... data to create a EconomyAccount
     *   }
     * })
     * 
     */
    create<T extends EconomyAccountCreateArgs>(args: SelectSubset<T, EconomyAccountCreateArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EconomyAccounts.
     * @param {EconomyAccountCreateManyArgs} args - Arguments to create many EconomyAccounts.
     * @example
     * // Create many EconomyAccounts
     * const economyAccount = await prisma.economyAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EconomyAccountCreateManyArgs>(args?: SelectSubset<T, EconomyAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EconomyAccount.
     * @param {EconomyAccountDeleteArgs} args - Arguments to delete one EconomyAccount.
     * @example
     * // Delete one EconomyAccount
     * const EconomyAccount = await prisma.economyAccount.delete({
     *   where: {
     *     // ... filter to delete one EconomyAccount
     *   }
     * })
     * 
     */
    delete<T extends EconomyAccountDeleteArgs>(args: SelectSubset<T, EconomyAccountDeleteArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EconomyAccount.
     * @param {EconomyAccountUpdateArgs} args - Arguments to update one EconomyAccount.
     * @example
     * // Update one EconomyAccount
     * const economyAccount = await prisma.economyAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EconomyAccountUpdateArgs>(args: SelectSubset<T, EconomyAccountUpdateArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EconomyAccounts.
     * @param {EconomyAccountDeleteManyArgs} args - Arguments to filter EconomyAccounts to delete.
     * @example
     * // Delete a few EconomyAccounts
     * const { count } = await prisma.economyAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EconomyAccountDeleteManyArgs>(args?: SelectSubset<T, EconomyAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EconomyAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EconomyAccounts
     * const economyAccount = await prisma.economyAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EconomyAccountUpdateManyArgs>(args: SelectSubset<T, EconomyAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EconomyAccount.
     * @param {EconomyAccountUpsertArgs} args - Arguments to update or create a EconomyAccount.
     * @example
     * // Update or create a EconomyAccount
     * const economyAccount = await prisma.economyAccount.upsert({
     *   create: {
     *     // ... data to create a EconomyAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EconomyAccount we want to update
     *   }
     * })
     */
    upsert<T extends EconomyAccountUpsertArgs>(args: SelectSubset<T, EconomyAccountUpsertArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EconomyAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountCountArgs} args - Arguments to filter EconomyAccounts to count.
     * @example
     * // Count the number of EconomyAccounts
     * const count = await prisma.economyAccount.count({
     *   where: {
     *     // ... the filter for the EconomyAccounts we want to count
     *   }
     * })
    **/
    count<T extends EconomyAccountCountArgs>(
      args?: Subset<T, EconomyAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EconomyAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EconomyAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EconomyAccountAggregateArgs>(args: Subset<T, EconomyAccountAggregateArgs>): Prisma.PrismaPromise<GetEconomyAccountAggregateType<T>>

    /**
     * Group by EconomyAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyAccountGroupByArgs} args - Group by arguments.
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
      T extends EconomyAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EconomyAccountGroupByArgs['orderBy'] }
        : { orderBy?: EconomyAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EconomyAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEconomyAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EconomyAccount model
   */
  readonly fields: EconomyAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EconomyAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EconomyAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affiliation<T extends EconomyAccount$affiliationArgs<ExtArgs> = {}>(args?: Subset<T, EconomyAccount$affiliationArgs<ExtArgs>>): Prisma__EconomyAffiliationClient<$Result.GetResult<Prisma.$EconomyAffiliationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    economyLogs<T extends EconomyAccount$economyLogsArgs<ExtArgs> = {}>(args?: Subset<T, EconomyAccount$economyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceHistories<T extends EconomyAccount$raceHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, EconomyAccount$raceHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EconomyAccount model
   */
  interface EconomyAccountFieldRefs {
    readonly id: FieldRef<"EconomyAccount", 'String'>
    readonly discordId: FieldRef<"EconomyAccount", 'String'>
    readonly name: FieldRef<"EconomyAccount", 'String'>
    readonly image: FieldRef<"EconomyAccount", 'String'>
    readonly affiliationName: FieldRef<"EconomyAccount", 'String'>
    readonly affiliationId: FieldRef<"EconomyAccount", 'String'>
    readonly coins: FieldRef<"EconomyAccount", 'BigInt'>
    readonly intelligenceLevel: FieldRef<"EconomyAccount", 'Int'>
    readonly satiation: FieldRef<"EconomyAccount", 'Int'>
    readonly happiness: FieldRef<"EconomyAccount", 'Int'>
    readonly birthday: FieldRef<"EconomyAccount", 'DateTime'>
    readonly lastWorkAt: FieldRef<"EconomyAccount", 'DateTime'>
    readonly inventory: FieldRef<"EconomyAccount", 'String'>
    readonly lastBirthdayBonusYear: FieldRef<"EconomyAccount", 'Int'>
    readonly lastSchoolAt: FieldRef<"EconomyAccount", 'DateTime'>
    readonly schoolAttendanceCount: FieldRef<"EconomyAccount", 'Int'>
    readonly status: FieldRef<"EconomyAccount", 'String'>
    readonly ipAddress: FieldRef<"EconomyAccount", 'String'>
    readonly createdAt: FieldRef<"EconomyAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"EconomyAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EconomyAccount findUnique
   */
  export type EconomyAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAccount to fetch.
     */
    where: EconomyAccountWhereUniqueInput
  }

  /**
   * EconomyAccount findUniqueOrThrow
   */
  export type EconomyAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAccount to fetch.
     */
    where: EconomyAccountWhereUniqueInput
  }

  /**
   * EconomyAccount findFirst
   */
  export type EconomyAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAccount to fetch.
     */
    where?: EconomyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAccounts to fetch.
     */
    orderBy?: EconomyAccountOrderByWithRelationInput | EconomyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyAccounts.
     */
    cursor?: EconomyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyAccounts.
     */
    distinct?: EconomyAccountScalarFieldEnum | EconomyAccountScalarFieldEnum[]
  }

  /**
   * EconomyAccount findFirstOrThrow
   */
  export type EconomyAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAccount to fetch.
     */
    where?: EconomyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAccounts to fetch.
     */
    orderBy?: EconomyAccountOrderByWithRelationInput | EconomyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyAccounts.
     */
    cursor?: EconomyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyAccounts.
     */
    distinct?: EconomyAccountScalarFieldEnum | EconomyAccountScalarFieldEnum[]
  }

  /**
   * EconomyAccount findMany
   */
  export type EconomyAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * Filter, which EconomyAccounts to fetch.
     */
    where?: EconomyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyAccounts to fetch.
     */
    orderBy?: EconomyAccountOrderByWithRelationInput | EconomyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EconomyAccounts.
     */
    cursor?: EconomyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyAccounts.
     */
    distinct?: EconomyAccountScalarFieldEnum | EconomyAccountScalarFieldEnum[]
  }

  /**
   * EconomyAccount create
   */
  export type EconomyAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a EconomyAccount.
     */
    data: XOR<EconomyAccountCreateInput, EconomyAccountUncheckedCreateInput>
  }

  /**
   * EconomyAccount createMany
   */
  export type EconomyAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EconomyAccounts.
     */
    data: EconomyAccountCreateManyInput | EconomyAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EconomyAccount update
   */
  export type EconomyAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a EconomyAccount.
     */
    data: XOR<EconomyAccountUpdateInput, EconomyAccountUncheckedUpdateInput>
    /**
     * Choose, which EconomyAccount to update.
     */
    where: EconomyAccountWhereUniqueInput
  }

  /**
   * EconomyAccount updateMany
   */
  export type EconomyAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EconomyAccounts.
     */
    data: XOR<EconomyAccountUpdateManyMutationInput, EconomyAccountUncheckedUpdateManyInput>
    /**
     * Filter which EconomyAccounts to update
     */
    where?: EconomyAccountWhereInput
    /**
     * Limit how many EconomyAccounts to update.
     */
    limit?: number
  }

  /**
   * EconomyAccount upsert
   */
  export type EconomyAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the EconomyAccount to update in case it exists.
     */
    where: EconomyAccountWhereUniqueInput
    /**
     * In case the EconomyAccount found by the `where` argument doesn't exist, create a new EconomyAccount with this data.
     */
    create: XOR<EconomyAccountCreateInput, EconomyAccountUncheckedCreateInput>
    /**
     * In case the EconomyAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EconomyAccountUpdateInput, EconomyAccountUncheckedUpdateInput>
  }

  /**
   * EconomyAccount delete
   */
  export type EconomyAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    /**
     * Filter which EconomyAccount to delete.
     */
    where: EconomyAccountWhereUniqueInput
  }

  /**
   * EconomyAccount deleteMany
   */
  export type EconomyAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyAccounts to delete
     */
    where?: EconomyAccountWhereInput
    /**
     * Limit how many EconomyAccounts to delete.
     */
    limit?: number
  }

  /**
   * EconomyAccount.affiliation
   */
  export type EconomyAccount$affiliationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAffiliation
     */
    select?: EconomyAffiliationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAffiliation
     */
    omit?: EconomyAffiliationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAffiliationInclude<ExtArgs> | null
    where?: EconomyAffiliationWhereInput
  }

  /**
   * EconomyAccount.economyLogs
   */
  export type EconomyAccount$economyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    where?: EconomyLogWhereInput
    orderBy?: EconomyLogOrderByWithRelationInput | EconomyLogOrderByWithRelationInput[]
    cursor?: EconomyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EconomyLogScalarFieldEnum | EconomyLogScalarFieldEnum[]
  }

  /**
   * EconomyAccount.raceHistories
   */
  export type EconomyAccount$raceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    where?: RaceHistoryWhereInput
    orderBy?: RaceHistoryOrderByWithRelationInput | RaceHistoryOrderByWithRelationInput[]
    cursor?: RaceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceHistoryScalarFieldEnum | RaceHistoryScalarFieldEnum[]
  }

  /**
   * EconomyAccount without action
   */
  export type EconomyAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
  }


  /**
   * Model EconomyLog
   */

  export type AggregateEconomyLog = {
    _count: EconomyLogCountAggregateOutputType | null
    _avg: EconomyLogAvgAggregateOutputType | null
    _sum: EconomyLogSumAggregateOutputType | null
    _min: EconomyLogMinAggregateOutputType | null
    _max: EconomyLogMaxAggregateOutputType | null
  }

  export type EconomyLogAvgAggregateOutputType = {
    amount: number | null
    balanceBefore: number | null
    balanceAfter: number | null
  }

  export type EconomyLogSumAggregateOutputType = {
    amount: bigint | null
    balanceBefore: bigint | null
    balanceAfter: bigint | null
  }

  export type EconomyLogMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    accountId: string | null
    eventType: string | null
    amount: bigint | null
    balanceBefore: bigint | null
    balanceAfter: bigint | null
    description: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type EconomyLogMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    accountId: string | null
    eventType: string | null
    amount: bigint | null
    balanceBefore: bigint | null
    balanceAfter: bigint | null
    description: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type EconomyLogCountAggregateOutputType = {
    id: number
    discordId: number
    accountId: number
    eventType: number
    amount: number
    balanceBefore: number
    balanceAfter: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type EconomyLogAvgAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type EconomyLogSumAggregateInputType = {
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type EconomyLogMinAggregateInputType = {
    id?: true
    discordId?: true
    accountId?: true
    eventType?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    description?: true
    metadata?: true
    createdAt?: true
  }

  export type EconomyLogMaxAggregateInputType = {
    id?: true
    discordId?: true
    accountId?: true
    eventType?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    description?: true
    metadata?: true
    createdAt?: true
  }

  export type EconomyLogCountAggregateInputType = {
    id?: true
    discordId?: true
    accountId?: true
    eventType?: true
    amount?: true
    balanceBefore?: true
    balanceAfter?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type EconomyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyLog to aggregate.
     */
    where?: EconomyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyLogs to fetch.
     */
    orderBy?: EconomyLogOrderByWithRelationInput | EconomyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EconomyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EconomyLogs
    **/
    _count?: true | EconomyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EconomyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EconomyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EconomyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EconomyLogMaxAggregateInputType
  }

  export type GetEconomyLogAggregateType<T extends EconomyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEconomyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEconomyLog[P]>
      : GetScalarType<T[P], AggregateEconomyLog[P]>
  }




  export type EconomyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EconomyLogWhereInput
    orderBy?: EconomyLogOrderByWithAggregationInput | EconomyLogOrderByWithAggregationInput[]
    by: EconomyLogScalarFieldEnum[] | EconomyLogScalarFieldEnum
    having?: EconomyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EconomyLogCountAggregateInputType | true
    _avg?: EconomyLogAvgAggregateInputType
    _sum?: EconomyLogSumAggregateInputType
    _min?: EconomyLogMinAggregateInputType
    _max?: EconomyLogMaxAggregateInputType
  }

  export type EconomyLogGroupByOutputType = {
    id: string
    discordId: string
    accountId: string | null
    eventType: string
    amount: bigint
    balanceBefore: bigint
    balanceAfter: bigint
    description: string | null
    metadata: string | null
    createdAt: Date
    _count: EconomyLogCountAggregateOutputType | null
    _avg: EconomyLogAvgAggregateOutputType | null
    _sum: EconomyLogSumAggregateOutputType | null
    _min: EconomyLogMinAggregateOutputType | null
    _max: EconomyLogMaxAggregateOutputType | null
  }

  type GetEconomyLogGroupByPayload<T extends EconomyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EconomyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EconomyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EconomyLogGroupByOutputType[P]>
            : GetScalarType<T[P], EconomyLogGroupByOutputType[P]>
        }
      >
    >


  export type EconomyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    accountId?: boolean
    eventType?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    economyAccount?: boolean | EconomyLog$economyAccountArgs<ExtArgs>
  }, ExtArgs["result"]["economyLog"]>



  export type EconomyLogSelectScalar = {
    id?: boolean
    discordId?: boolean
    accountId?: boolean
    eventType?: boolean
    amount?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type EconomyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "accountId" | "eventType" | "amount" | "balanceBefore" | "balanceAfter" | "description" | "metadata" | "createdAt", ExtArgs["result"]["economyLog"]>
  export type EconomyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    economyAccount?: boolean | EconomyLog$economyAccountArgs<ExtArgs>
  }

  export type $EconomyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EconomyLog"
    objects: {
      economyAccount: Prisma.$EconomyAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      accountId: string | null
      eventType: string
      amount: bigint
      balanceBefore: bigint
      balanceAfter: bigint
      description: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["economyLog"]>
    composites: {}
  }

  type EconomyLogGetPayload<S extends boolean | null | undefined | EconomyLogDefaultArgs> = $Result.GetResult<Prisma.$EconomyLogPayload, S>

  type EconomyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EconomyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EconomyLogCountAggregateInputType | true
    }

  export interface EconomyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EconomyLog'], meta: { name: 'EconomyLog' } }
    /**
     * Find zero or one EconomyLog that matches the filter.
     * @param {EconomyLogFindUniqueArgs} args - Arguments to find a EconomyLog
     * @example
     * // Get one EconomyLog
     * const economyLog = await prisma.economyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EconomyLogFindUniqueArgs>(args: SelectSubset<T, EconomyLogFindUniqueArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EconomyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EconomyLogFindUniqueOrThrowArgs} args - Arguments to find a EconomyLog
     * @example
     * // Get one EconomyLog
     * const economyLog = await prisma.economyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EconomyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EconomyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EconomyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogFindFirstArgs} args - Arguments to find a EconomyLog
     * @example
     * // Get one EconomyLog
     * const economyLog = await prisma.economyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EconomyLogFindFirstArgs>(args?: SelectSubset<T, EconomyLogFindFirstArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EconomyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogFindFirstOrThrowArgs} args - Arguments to find a EconomyLog
     * @example
     * // Get one EconomyLog
     * const economyLog = await prisma.economyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EconomyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EconomyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EconomyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EconomyLogs
     * const economyLogs = await prisma.economyLog.findMany()
     * 
     * // Get first 10 EconomyLogs
     * const economyLogs = await prisma.economyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const economyLogWithIdOnly = await prisma.economyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EconomyLogFindManyArgs>(args?: SelectSubset<T, EconomyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EconomyLog.
     * @param {EconomyLogCreateArgs} args - Arguments to create a EconomyLog.
     * @example
     * // Create one EconomyLog
     * const EconomyLog = await prisma.economyLog.create({
     *   data: {
     *     // ... data to create a EconomyLog
     *   }
     * })
     * 
     */
    create<T extends EconomyLogCreateArgs>(args: SelectSubset<T, EconomyLogCreateArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EconomyLogs.
     * @param {EconomyLogCreateManyArgs} args - Arguments to create many EconomyLogs.
     * @example
     * // Create many EconomyLogs
     * const economyLog = await prisma.economyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EconomyLogCreateManyArgs>(args?: SelectSubset<T, EconomyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EconomyLog.
     * @param {EconomyLogDeleteArgs} args - Arguments to delete one EconomyLog.
     * @example
     * // Delete one EconomyLog
     * const EconomyLog = await prisma.economyLog.delete({
     *   where: {
     *     // ... filter to delete one EconomyLog
     *   }
     * })
     * 
     */
    delete<T extends EconomyLogDeleteArgs>(args: SelectSubset<T, EconomyLogDeleteArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EconomyLog.
     * @param {EconomyLogUpdateArgs} args - Arguments to update one EconomyLog.
     * @example
     * // Update one EconomyLog
     * const economyLog = await prisma.economyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EconomyLogUpdateArgs>(args: SelectSubset<T, EconomyLogUpdateArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EconomyLogs.
     * @param {EconomyLogDeleteManyArgs} args - Arguments to filter EconomyLogs to delete.
     * @example
     * // Delete a few EconomyLogs
     * const { count } = await prisma.economyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EconomyLogDeleteManyArgs>(args?: SelectSubset<T, EconomyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EconomyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EconomyLogs
     * const economyLog = await prisma.economyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EconomyLogUpdateManyArgs>(args: SelectSubset<T, EconomyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EconomyLog.
     * @param {EconomyLogUpsertArgs} args - Arguments to update or create a EconomyLog.
     * @example
     * // Update or create a EconomyLog
     * const economyLog = await prisma.economyLog.upsert({
     *   create: {
     *     // ... data to create a EconomyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EconomyLog we want to update
     *   }
     * })
     */
    upsert<T extends EconomyLogUpsertArgs>(args: SelectSubset<T, EconomyLogUpsertArgs<ExtArgs>>): Prisma__EconomyLogClient<$Result.GetResult<Prisma.$EconomyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EconomyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogCountArgs} args - Arguments to filter EconomyLogs to count.
     * @example
     * // Count the number of EconomyLogs
     * const count = await prisma.economyLog.count({
     *   where: {
     *     // ... the filter for the EconomyLogs we want to count
     *   }
     * })
    **/
    count<T extends EconomyLogCountArgs>(
      args?: Subset<T, EconomyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EconomyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EconomyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EconomyLogAggregateArgs>(args: Subset<T, EconomyLogAggregateArgs>): Prisma.PrismaPromise<GetEconomyLogAggregateType<T>>

    /**
     * Group by EconomyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EconomyLogGroupByArgs} args - Group by arguments.
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
      T extends EconomyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EconomyLogGroupByArgs['orderBy'] }
        : { orderBy?: EconomyLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EconomyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEconomyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EconomyLog model
   */
  readonly fields: EconomyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EconomyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EconomyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    economyAccount<T extends EconomyLog$economyAccountArgs<ExtArgs> = {}>(args?: Subset<T, EconomyLog$economyAccountArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EconomyLog model
   */
  interface EconomyLogFieldRefs {
    readonly id: FieldRef<"EconomyLog", 'String'>
    readonly discordId: FieldRef<"EconomyLog", 'String'>
    readonly accountId: FieldRef<"EconomyLog", 'String'>
    readonly eventType: FieldRef<"EconomyLog", 'String'>
    readonly amount: FieldRef<"EconomyLog", 'BigInt'>
    readonly balanceBefore: FieldRef<"EconomyLog", 'BigInt'>
    readonly balanceAfter: FieldRef<"EconomyLog", 'BigInt'>
    readonly description: FieldRef<"EconomyLog", 'String'>
    readonly metadata: FieldRef<"EconomyLog", 'String'>
    readonly createdAt: FieldRef<"EconomyLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EconomyLog findUnique
   */
  export type EconomyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * Filter, which EconomyLog to fetch.
     */
    where: EconomyLogWhereUniqueInput
  }

  /**
   * EconomyLog findUniqueOrThrow
   */
  export type EconomyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * Filter, which EconomyLog to fetch.
     */
    where: EconomyLogWhereUniqueInput
  }

  /**
   * EconomyLog findFirst
   */
  export type EconomyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * Filter, which EconomyLog to fetch.
     */
    where?: EconomyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyLogs to fetch.
     */
    orderBy?: EconomyLogOrderByWithRelationInput | EconomyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyLogs.
     */
    cursor?: EconomyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyLogs.
     */
    distinct?: EconomyLogScalarFieldEnum | EconomyLogScalarFieldEnum[]
  }

  /**
   * EconomyLog findFirstOrThrow
   */
  export type EconomyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * Filter, which EconomyLog to fetch.
     */
    where?: EconomyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyLogs to fetch.
     */
    orderBy?: EconomyLogOrderByWithRelationInput | EconomyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EconomyLogs.
     */
    cursor?: EconomyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyLogs.
     */
    distinct?: EconomyLogScalarFieldEnum | EconomyLogScalarFieldEnum[]
  }

  /**
   * EconomyLog findMany
   */
  export type EconomyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * Filter, which EconomyLogs to fetch.
     */
    where?: EconomyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EconomyLogs to fetch.
     */
    orderBy?: EconomyLogOrderByWithRelationInput | EconomyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EconomyLogs.
     */
    cursor?: EconomyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EconomyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EconomyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EconomyLogs.
     */
    distinct?: EconomyLogScalarFieldEnum | EconomyLogScalarFieldEnum[]
  }

  /**
   * EconomyLog create
   */
  export type EconomyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EconomyLog.
     */
    data: XOR<EconomyLogCreateInput, EconomyLogUncheckedCreateInput>
  }

  /**
   * EconomyLog createMany
   */
  export type EconomyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EconomyLogs.
     */
    data: EconomyLogCreateManyInput | EconomyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EconomyLog update
   */
  export type EconomyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EconomyLog.
     */
    data: XOR<EconomyLogUpdateInput, EconomyLogUncheckedUpdateInput>
    /**
     * Choose, which EconomyLog to update.
     */
    where: EconomyLogWhereUniqueInput
  }

  /**
   * EconomyLog updateMany
   */
  export type EconomyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EconomyLogs.
     */
    data: XOR<EconomyLogUpdateManyMutationInput, EconomyLogUncheckedUpdateManyInput>
    /**
     * Filter which EconomyLogs to update
     */
    where?: EconomyLogWhereInput
    /**
     * Limit how many EconomyLogs to update.
     */
    limit?: number
  }

  /**
   * EconomyLog upsert
   */
  export type EconomyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EconomyLog to update in case it exists.
     */
    where: EconomyLogWhereUniqueInput
    /**
     * In case the EconomyLog found by the `where` argument doesn't exist, create a new EconomyLog with this data.
     */
    create: XOR<EconomyLogCreateInput, EconomyLogUncheckedCreateInput>
    /**
     * In case the EconomyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EconomyLogUpdateInput, EconomyLogUncheckedUpdateInput>
  }

  /**
   * EconomyLog delete
   */
  export type EconomyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
    /**
     * Filter which EconomyLog to delete.
     */
    where: EconomyLogWhereUniqueInput
  }

  /**
   * EconomyLog deleteMany
   */
  export type EconomyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EconomyLogs to delete
     */
    where?: EconomyLogWhereInput
    /**
     * Limit how many EconomyLogs to delete.
     */
    limit?: number
  }

  /**
   * EconomyLog.economyAccount
   */
  export type EconomyLog$economyAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    where?: EconomyAccountWhereInput
  }

  /**
   * EconomyLog without action
   */
  export type EconomyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyLog
     */
    select?: EconomyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyLog
     */
    omit?: EconomyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyLogInclude<ExtArgs> | null
  }


  /**
   * Model RaceHistory
   */

  export type AggregateRaceHistory = {
    _count: RaceHistoryCountAggregateOutputType | null
    _avg: RaceHistoryAvgAggregateOutputType | null
    _sum: RaceHistorySumAggregateOutputType | null
    _min: RaceHistoryMinAggregateOutputType | null
    _max: RaceHistoryMaxAggregateOutputType | null
  }

  export type RaceHistoryAvgAggregateOutputType = {
    selectedHorseIndex: number | null
    betAmount: number | null
    odds: Decimal | null
    payout: number | null
    balanceBefore: number | null
    balanceAfter: number | null
  }

  export type RaceHistorySumAggregateOutputType = {
    selectedHorseIndex: number | null
    betAmount: bigint | null
    odds: Decimal | null
    payout: bigint | null
    balanceBefore: bigint | null
    balanceAfter: bigint | null
  }

  export type RaceHistoryMinAggregateOutputType = {
    id: string | null
    discordId: string | null
    selectedHorseIndex: number | null
    selectedHorseName: string | null
    betType: string | null
    betAmount: bigint | null
    odds: Decimal | null
    isHit: boolean | null
    payout: bigint | null
    balanceBefore: bigint | null
    balanceAfter: bigint | null
    raceResult: string | null
    createdAt: Date | null
    economyAccountId: string | null
  }

  export type RaceHistoryMaxAggregateOutputType = {
    id: string | null
    discordId: string | null
    selectedHorseIndex: number | null
    selectedHorseName: string | null
    betType: string | null
    betAmount: bigint | null
    odds: Decimal | null
    isHit: boolean | null
    payout: bigint | null
    balanceBefore: bigint | null
    balanceAfter: bigint | null
    raceResult: string | null
    createdAt: Date | null
    economyAccountId: string | null
  }

  export type RaceHistoryCountAggregateOutputType = {
    id: number
    discordId: number
    selectedHorseIndex: number
    selectedHorseName: number
    betType: number
    betAmount: number
    odds: number
    isHit: number
    payout: number
    balanceBefore: number
    balanceAfter: number
    raceResult: number
    createdAt: number
    economyAccountId: number
    _all: number
  }


  export type RaceHistoryAvgAggregateInputType = {
    selectedHorseIndex?: true
    betAmount?: true
    odds?: true
    payout?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type RaceHistorySumAggregateInputType = {
    selectedHorseIndex?: true
    betAmount?: true
    odds?: true
    payout?: true
    balanceBefore?: true
    balanceAfter?: true
  }

  export type RaceHistoryMinAggregateInputType = {
    id?: true
    discordId?: true
    selectedHorseIndex?: true
    selectedHorseName?: true
    betType?: true
    betAmount?: true
    odds?: true
    isHit?: true
    payout?: true
    balanceBefore?: true
    balanceAfter?: true
    raceResult?: true
    createdAt?: true
    economyAccountId?: true
  }

  export type RaceHistoryMaxAggregateInputType = {
    id?: true
    discordId?: true
    selectedHorseIndex?: true
    selectedHorseName?: true
    betType?: true
    betAmount?: true
    odds?: true
    isHit?: true
    payout?: true
    balanceBefore?: true
    balanceAfter?: true
    raceResult?: true
    createdAt?: true
    economyAccountId?: true
  }

  export type RaceHistoryCountAggregateInputType = {
    id?: true
    discordId?: true
    selectedHorseIndex?: true
    selectedHorseName?: true
    betType?: true
    betAmount?: true
    odds?: true
    isHit?: true
    payout?: true
    balanceBefore?: true
    balanceAfter?: true
    raceResult?: true
    createdAt?: true
    economyAccountId?: true
    _all?: true
  }

  export type RaceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceHistory to aggregate.
     */
    where?: RaceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceHistories to fetch.
     */
    orderBy?: RaceHistoryOrderByWithRelationInput | RaceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceHistories
    **/
    _count?: true | RaceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceHistoryMaxAggregateInputType
  }

  export type GetRaceHistoryAggregateType<T extends RaceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceHistory[P]>
      : GetScalarType<T[P], AggregateRaceHistory[P]>
  }




  export type RaceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceHistoryWhereInput
    orderBy?: RaceHistoryOrderByWithAggregationInput | RaceHistoryOrderByWithAggregationInput[]
    by: RaceHistoryScalarFieldEnum[] | RaceHistoryScalarFieldEnum
    having?: RaceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceHistoryCountAggregateInputType | true
    _avg?: RaceHistoryAvgAggregateInputType
    _sum?: RaceHistorySumAggregateInputType
    _min?: RaceHistoryMinAggregateInputType
    _max?: RaceHistoryMaxAggregateInputType
  }

  export type RaceHistoryGroupByOutputType = {
    id: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint
    odds: Decimal
    isHit: boolean
    payout: bigint
    balanceBefore: bigint
    balanceAfter: bigint
    raceResult: string | null
    createdAt: Date
    economyAccountId: string | null
    _count: RaceHistoryCountAggregateOutputType | null
    _avg: RaceHistoryAvgAggregateOutputType | null
    _sum: RaceHistorySumAggregateOutputType | null
    _min: RaceHistoryMinAggregateOutputType | null
    _max: RaceHistoryMaxAggregateOutputType | null
  }

  type GetRaceHistoryGroupByPayload<T extends RaceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RaceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RaceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discordId?: boolean
    selectedHorseIndex?: boolean
    selectedHorseName?: boolean
    betType?: boolean
    betAmount?: boolean
    odds?: boolean
    isHit?: boolean
    payout?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    raceResult?: boolean
    createdAt?: boolean
    economyAccountId?: boolean
    economyAccount?: boolean | RaceHistory$economyAccountArgs<ExtArgs>
  }, ExtArgs["result"]["raceHistory"]>



  export type RaceHistorySelectScalar = {
    id?: boolean
    discordId?: boolean
    selectedHorseIndex?: boolean
    selectedHorseName?: boolean
    betType?: boolean
    betAmount?: boolean
    odds?: boolean
    isHit?: boolean
    payout?: boolean
    balanceBefore?: boolean
    balanceAfter?: boolean
    raceResult?: boolean
    createdAt?: boolean
    economyAccountId?: boolean
  }

  export type RaceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discordId" | "selectedHorseIndex" | "selectedHorseName" | "betType" | "betAmount" | "odds" | "isHit" | "payout" | "balanceBefore" | "balanceAfter" | "raceResult" | "createdAt" | "economyAccountId", ExtArgs["result"]["raceHistory"]>
  export type RaceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    economyAccount?: boolean | RaceHistory$economyAccountArgs<ExtArgs>
  }

  export type $RaceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceHistory"
    objects: {
      economyAccount: Prisma.$EconomyAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discordId: string
      selectedHorseIndex: number
      selectedHorseName: string
      betType: string
      betAmount: bigint
      odds: Prisma.Decimal
      isHit: boolean
      payout: bigint
      balanceBefore: bigint
      balanceAfter: bigint
      raceResult: string | null
      createdAt: Date
      economyAccountId: string | null
    }, ExtArgs["result"]["raceHistory"]>
    composites: {}
  }

  type RaceHistoryGetPayload<S extends boolean | null | undefined | RaceHistoryDefaultArgs> = $Result.GetResult<Prisma.$RaceHistoryPayload, S>

  type RaceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceHistoryCountAggregateInputType | true
    }

  export interface RaceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceHistory'], meta: { name: 'RaceHistory' } }
    /**
     * Find zero or one RaceHistory that matches the filter.
     * @param {RaceHistoryFindUniqueArgs} args - Arguments to find a RaceHistory
     * @example
     * // Get one RaceHistory
     * const raceHistory = await prisma.raceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceHistoryFindUniqueArgs>(args: SelectSubset<T, RaceHistoryFindUniqueArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceHistoryFindUniqueOrThrowArgs} args - Arguments to find a RaceHistory
     * @example
     * // Get one RaceHistory
     * const raceHistory = await prisma.raceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryFindFirstArgs} args - Arguments to find a RaceHistory
     * @example
     * // Get one RaceHistory
     * const raceHistory = await prisma.raceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceHistoryFindFirstArgs>(args?: SelectSubset<T, RaceHistoryFindFirstArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryFindFirstOrThrowArgs} args - Arguments to find a RaceHistory
     * @example
     * // Get one RaceHistory
     * const raceHistory = await prisma.raceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceHistories
     * const raceHistories = await prisma.raceHistory.findMany()
     * 
     * // Get first 10 RaceHistories
     * const raceHistories = await prisma.raceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceHistoryWithIdOnly = await prisma.raceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceHistoryFindManyArgs>(args?: SelectSubset<T, RaceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceHistory.
     * @param {RaceHistoryCreateArgs} args - Arguments to create a RaceHistory.
     * @example
     * // Create one RaceHistory
     * const RaceHistory = await prisma.raceHistory.create({
     *   data: {
     *     // ... data to create a RaceHistory
     *   }
     * })
     * 
     */
    create<T extends RaceHistoryCreateArgs>(args: SelectSubset<T, RaceHistoryCreateArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceHistories.
     * @param {RaceHistoryCreateManyArgs} args - Arguments to create many RaceHistories.
     * @example
     * // Create many RaceHistories
     * const raceHistory = await prisma.raceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceHistoryCreateManyArgs>(args?: SelectSubset<T, RaceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RaceHistory.
     * @param {RaceHistoryDeleteArgs} args - Arguments to delete one RaceHistory.
     * @example
     * // Delete one RaceHistory
     * const RaceHistory = await prisma.raceHistory.delete({
     *   where: {
     *     // ... filter to delete one RaceHistory
     *   }
     * })
     * 
     */
    delete<T extends RaceHistoryDeleteArgs>(args: SelectSubset<T, RaceHistoryDeleteArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceHistory.
     * @param {RaceHistoryUpdateArgs} args - Arguments to update one RaceHistory.
     * @example
     * // Update one RaceHistory
     * const raceHistory = await prisma.raceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceHistoryUpdateArgs>(args: SelectSubset<T, RaceHistoryUpdateArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceHistories.
     * @param {RaceHistoryDeleteManyArgs} args - Arguments to filter RaceHistories to delete.
     * @example
     * // Delete a few RaceHistories
     * const { count } = await prisma.raceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceHistoryDeleteManyArgs>(args?: SelectSubset<T, RaceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceHistories
     * const raceHistory = await prisma.raceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceHistoryUpdateManyArgs>(args: SelectSubset<T, RaceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RaceHistory.
     * @param {RaceHistoryUpsertArgs} args - Arguments to update or create a RaceHistory.
     * @example
     * // Update or create a RaceHistory
     * const raceHistory = await prisma.raceHistory.upsert({
     *   create: {
     *     // ... data to create a RaceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceHistory we want to update
     *   }
     * })
     */
    upsert<T extends RaceHistoryUpsertArgs>(args: SelectSubset<T, RaceHistoryUpsertArgs<ExtArgs>>): Prisma__RaceHistoryClient<$Result.GetResult<Prisma.$RaceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryCountArgs} args - Arguments to filter RaceHistories to count.
     * @example
     * // Count the number of RaceHistories
     * const count = await prisma.raceHistory.count({
     *   where: {
     *     // ... the filter for the RaceHistories we want to count
     *   }
     * })
    **/
    count<T extends RaceHistoryCountArgs>(
      args?: Subset<T, RaceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceHistoryAggregateArgs>(args: Subset<T, RaceHistoryAggregateArgs>): Prisma.PrismaPromise<GetRaceHistoryAggregateType<T>>

    /**
     * Group by RaceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceHistoryGroupByArgs} args - Group by arguments.
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
      T extends RaceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RaceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceHistory model
   */
  readonly fields: RaceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    economyAccount<T extends RaceHistory$economyAccountArgs<ExtArgs> = {}>(args?: Subset<T, RaceHistory$economyAccountArgs<ExtArgs>>): Prisma__EconomyAccountClient<$Result.GetResult<Prisma.$EconomyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RaceHistory model
   */
  interface RaceHistoryFieldRefs {
    readonly id: FieldRef<"RaceHistory", 'String'>
    readonly discordId: FieldRef<"RaceHistory", 'String'>
    readonly selectedHorseIndex: FieldRef<"RaceHistory", 'Int'>
    readonly selectedHorseName: FieldRef<"RaceHistory", 'String'>
    readonly betType: FieldRef<"RaceHistory", 'String'>
    readonly betAmount: FieldRef<"RaceHistory", 'BigInt'>
    readonly odds: FieldRef<"RaceHistory", 'Decimal'>
    readonly isHit: FieldRef<"RaceHistory", 'Boolean'>
    readonly payout: FieldRef<"RaceHistory", 'BigInt'>
    readonly balanceBefore: FieldRef<"RaceHistory", 'BigInt'>
    readonly balanceAfter: FieldRef<"RaceHistory", 'BigInt'>
    readonly raceResult: FieldRef<"RaceHistory", 'String'>
    readonly createdAt: FieldRef<"RaceHistory", 'DateTime'>
    readonly economyAccountId: FieldRef<"RaceHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaceHistory findUnique
   */
  export type RaceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaceHistory to fetch.
     */
    where: RaceHistoryWhereUniqueInput
  }

  /**
   * RaceHistory findUniqueOrThrow
   */
  export type RaceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaceHistory to fetch.
     */
    where: RaceHistoryWhereUniqueInput
  }

  /**
   * RaceHistory findFirst
   */
  export type RaceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaceHistory to fetch.
     */
    where?: RaceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceHistories to fetch.
     */
    orderBy?: RaceHistoryOrderByWithRelationInput | RaceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceHistories.
     */
    cursor?: RaceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceHistories.
     */
    distinct?: RaceHistoryScalarFieldEnum | RaceHistoryScalarFieldEnum[]
  }

  /**
   * RaceHistory findFirstOrThrow
   */
  export type RaceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaceHistory to fetch.
     */
    where?: RaceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceHistories to fetch.
     */
    orderBy?: RaceHistoryOrderByWithRelationInput | RaceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceHistories.
     */
    cursor?: RaceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceHistories.
     */
    distinct?: RaceHistoryScalarFieldEnum | RaceHistoryScalarFieldEnum[]
  }

  /**
   * RaceHistory findMany
   */
  export type RaceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RaceHistories to fetch.
     */
    where?: RaceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceHistories to fetch.
     */
    orderBy?: RaceHistoryOrderByWithRelationInput | RaceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceHistories.
     */
    cursor?: RaceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceHistories.
     */
    distinct?: RaceHistoryScalarFieldEnum | RaceHistoryScalarFieldEnum[]
  }

  /**
   * RaceHistory create
   */
  export type RaceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceHistory.
     */
    data: XOR<RaceHistoryCreateInput, RaceHistoryUncheckedCreateInput>
  }

  /**
   * RaceHistory createMany
   */
  export type RaceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceHistories.
     */
    data: RaceHistoryCreateManyInput | RaceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceHistory update
   */
  export type RaceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceHistory.
     */
    data: XOR<RaceHistoryUpdateInput, RaceHistoryUncheckedUpdateInput>
    /**
     * Choose, which RaceHistory to update.
     */
    where: RaceHistoryWhereUniqueInput
  }

  /**
   * RaceHistory updateMany
   */
  export type RaceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceHistories.
     */
    data: XOR<RaceHistoryUpdateManyMutationInput, RaceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RaceHistories to update
     */
    where?: RaceHistoryWhereInput
    /**
     * Limit how many RaceHistories to update.
     */
    limit?: number
  }

  /**
   * RaceHistory upsert
   */
  export type RaceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceHistory to update in case it exists.
     */
    where: RaceHistoryWhereUniqueInput
    /**
     * In case the RaceHistory found by the `where` argument doesn't exist, create a new RaceHistory with this data.
     */
    create: XOR<RaceHistoryCreateInput, RaceHistoryUncheckedCreateInput>
    /**
     * In case the RaceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceHistoryUpdateInput, RaceHistoryUncheckedUpdateInput>
  }

  /**
   * RaceHistory delete
   */
  export type RaceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
    /**
     * Filter which RaceHistory to delete.
     */
    where: RaceHistoryWhereUniqueInput
  }

  /**
   * RaceHistory deleteMany
   */
  export type RaceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceHistories to delete
     */
    where?: RaceHistoryWhereInput
    /**
     * Limit how many RaceHistories to delete.
     */
    limit?: number
  }

  /**
   * RaceHistory.economyAccount
   */
  export type RaceHistory$economyAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EconomyAccount
     */
    select?: EconomyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EconomyAccount
     */
    omit?: EconomyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EconomyAccountInclude<ExtArgs> | null
    where?: EconomyAccountWhereInput
  }

  /**
   * RaceHistory without action
   */
  export type RaceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceHistory
     */
    select?: RaceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceHistory
     */
    omit?: RaceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ServerSnapshot
   */

  export type AggregateServerSnapshot = {
    _count: ServerSnapshotCountAggregateOutputType | null
    _avg: ServerSnapshotAvgAggregateOutputType | null
    _sum: ServerSnapshotSumAggregateOutputType | null
    _min: ServerSnapshotMinAggregateOutputType | null
    _max: ServerSnapshotMaxAggregateOutputType | null
  }

  export type ServerSnapshotAvgAggregateOutputType = {
    memberCount: number | null
    boostCount: number | null
    boostTier: number | null
  }

  export type ServerSnapshotSumAggregateOutputType = {
    memberCount: number | null
    boostCount: number | null
    boostTier: number | null
  }

  export type ServerSnapshotMinAggregateOutputType = {
    id: string | null
    serverId: string | null
    savedAt: Date | null
    serverName: string | null
    serverDescription: string | null
    iconUrl: string | null
    bannerUrl: string | null
    ownerId: string | null
    memberCount: number | null
    boostCount: number | null
    boostTier: number | null
    channels: string | null
    roles: string | null
    members: string | null
    emojis: string | null
    stickers: string | null
  }

  export type ServerSnapshotMaxAggregateOutputType = {
    id: string | null
    serverId: string | null
    savedAt: Date | null
    serverName: string | null
    serverDescription: string | null
    iconUrl: string | null
    bannerUrl: string | null
    ownerId: string | null
    memberCount: number | null
    boostCount: number | null
    boostTier: number | null
    channels: string | null
    roles: string | null
    members: string | null
    emojis: string | null
    stickers: string | null
  }

  export type ServerSnapshotCountAggregateOutputType = {
    id: number
    serverId: number
    savedAt: number
    serverName: number
    serverDescription: number
    iconUrl: number
    bannerUrl: number
    ownerId: number
    memberCount: number
    boostCount: number
    boostTier: number
    channels: number
    roles: number
    members: number
    emojis: number
    stickers: number
    _all: number
  }


  export type ServerSnapshotAvgAggregateInputType = {
    memberCount?: true
    boostCount?: true
    boostTier?: true
  }

  export type ServerSnapshotSumAggregateInputType = {
    memberCount?: true
    boostCount?: true
    boostTier?: true
  }

  export type ServerSnapshotMinAggregateInputType = {
    id?: true
    serverId?: true
    savedAt?: true
    serverName?: true
    serverDescription?: true
    iconUrl?: true
    bannerUrl?: true
    ownerId?: true
    memberCount?: true
    boostCount?: true
    boostTier?: true
    channels?: true
    roles?: true
    members?: true
    emojis?: true
    stickers?: true
  }

  export type ServerSnapshotMaxAggregateInputType = {
    id?: true
    serverId?: true
    savedAt?: true
    serverName?: true
    serverDescription?: true
    iconUrl?: true
    bannerUrl?: true
    ownerId?: true
    memberCount?: true
    boostCount?: true
    boostTier?: true
    channels?: true
    roles?: true
    members?: true
    emojis?: true
    stickers?: true
  }

  export type ServerSnapshotCountAggregateInputType = {
    id?: true
    serverId?: true
    savedAt?: true
    serverName?: true
    serverDescription?: true
    iconUrl?: true
    bannerUrl?: true
    ownerId?: true
    memberCount?: true
    boostCount?: true
    boostTier?: true
    channels?: true
    roles?: true
    members?: true
    emojis?: true
    stickers?: true
    _all?: true
  }

  export type ServerSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerSnapshot to aggregate.
     */
    where?: ServerSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSnapshots to fetch.
     */
    orderBy?: ServerSnapshotOrderByWithRelationInput | ServerSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerSnapshots
    **/
    _count?: true | ServerSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerSnapshotMaxAggregateInputType
  }

  export type GetServerSnapshotAggregateType<T extends ServerSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateServerSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerSnapshot[P]>
      : GetScalarType<T[P], AggregateServerSnapshot[P]>
  }




  export type ServerSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerSnapshotWhereInput
    orderBy?: ServerSnapshotOrderByWithAggregationInput | ServerSnapshotOrderByWithAggregationInput[]
    by: ServerSnapshotScalarFieldEnum[] | ServerSnapshotScalarFieldEnum
    having?: ServerSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerSnapshotCountAggregateInputType | true
    _avg?: ServerSnapshotAvgAggregateInputType
    _sum?: ServerSnapshotSumAggregateInputType
    _min?: ServerSnapshotMinAggregateInputType
    _max?: ServerSnapshotMaxAggregateInputType
  }

  export type ServerSnapshotGroupByOutputType = {
    id: string
    serverId: string
    savedAt: Date
    serverName: string
    serverDescription: string | null
    iconUrl: string | null
    bannerUrl: string | null
    ownerId: string
    memberCount: number
    boostCount: number
    boostTier: number
    channels: string
    roles: string
    members: string
    emojis: string
    stickers: string
    _count: ServerSnapshotCountAggregateOutputType | null
    _avg: ServerSnapshotAvgAggregateOutputType | null
    _sum: ServerSnapshotSumAggregateOutputType | null
    _min: ServerSnapshotMinAggregateOutputType | null
    _max: ServerSnapshotMaxAggregateOutputType | null
  }

  type GetServerSnapshotGroupByPayload<T extends ServerSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], ServerSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type ServerSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    savedAt?: boolean
    serverName?: boolean
    serverDescription?: boolean
    iconUrl?: boolean
    bannerUrl?: boolean
    ownerId?: boolean
    memberCount?: boolean
    boostCount?: boolean
    boostTier?: boolean
    channels?: boolean
    roles?: boolean
    members?: boolean
    emojis?: boolean
    stickers?: boolean
  }, ExtArgs["result"]["serverSnapshot"]>



  export type ServerSnapshotSelectScalar = {
    id?: boolean
    serverId?: boolean
    savedAt?: boolean
    serverName?: boolean
    serverDescription?: boolean
    iconUrl?: boolean
    bannerUrl?: boolean
    ownerId?: boolean
    memberCount?: boolean
    boostCount?: boolean
    boostTier?: boolean
    channels?: boolean
    roles?: boolean
    members?: boolean
    emojis?: boolean
    stickers?: boolean
  }

  export type ServerSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serverId" | "savedAt" | "serverName" | "serverDescription" | "iconUrl" | "bannerUrl" | "ownerId" | "memberCount" | "boostCount" | "boostTier" | "channels" | "roles" | "members" | "emojis" | "stickers", ExtArgs["result"]["serverSnapshot"]>

  export type $ServerSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServerSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serverId: string
      savedAt: Date
      serverName: string
      serverDescription: string | null
      iconUrl: string | null
      bannerUrl: string | null
      ownerId: string
      memberCount: number
      boostCount: number
      boostTier: number
      channels: string
      roles: string
      members: string
      emojis: string
      stickers: string
    }, ExtArgs["result"]["serverSnapshot"]>
    composites: {}
  }

  type ServerSnapshotGetPayload<S extends boolean | null | undefined | ServerSnapshotDefaultArgs> = $Result.GetResult<Prisma.$ServerSnapshotPayload, S>

  type ServerSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerSnapshotCountAggregateInputType | true
    }

  export interface ServerSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServerSnapshot'], meta: { name: 'ServerSnapshot' } }
    /**
     * Find zero or one ServerSnapshot that matches the filter.
     * @param {ServerSnapshotFindUniqueArgs} args - Arguments to find a ServerSnapshot
     * @example
     * // Get one ServerSnapshot
     * const serverSnapshot = await prisma.serverSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerSnapshotFindUniqueArgs>(args: SelectSubset<T, ServerSnapshotFindUniqueArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServerSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerSnapshotFindUniqueOrThrowArgs} args - Arguments to find a ServerSnapshot
     * @example
     * // Get one ServerSnapshot
     * const serverSnapshot = await prisma.serverSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotFindFirstArgs} args - Arguments to find a ServerSnapshot
     * @example
     * // Get one ServerSnapshot
     * const serverSnapshot = await prisma.serverSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerSnapshotFindFirstArgs>(args?: SelectSubset<T, ServerSnapshotFindFirstArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotFindFirstOrThrowArgs} args - Arguments to find a ServerSnapshot
     * @example
     * // Get one ServerSnapshot
     * const serverSnapshot = await prisma.serverSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServerSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerSnapshots
     * const serverSnapshots = await prisma.serverSnapshot.findMany()
     * 
     * // Get first 10 ServerSnapshots
     * const serverSnapshots = await prisma.serverSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverSnapshotWithIdOnly = await prisma.serverSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerSnapshotFindManyArgs>(args?: SelectSubset<T, ServerSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServerSnapshot.
     * @param {ServerSnapshotCreateArgs} args - Arguments to create a ServerSnapshot.
     * @example
     * // Create one ServerSnapshot
     * const ServerSnapshot = await prisma.serverSnapshot.create({
     *   data: {
     *     // ... data to create a ServerSnapshot
     *   }
     * })
     * 
     */
    create<T extends ServerSnapshotCreateArgs>(args: SelectSubset<T, ServerSnapshotCreateArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServerSnapshots.
     * @param {ServerSnapshotCreateManyArgs} args - Arguments to create many ServerSnapshots.
     * @example
     * // Create many ServerSnapshots
     * const serverSnapshot = await prisma.serverSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerSnapshotCreateManyArgs>(args?: SelectSubset<T, ServerSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServerSnapshot.
     * @param {ServerSnapshotDeleteArgs} args - Arguments to delete one ServerSnapshot.
     * @example
     * // Delete one ServerSnapshot
     * const ServerSnapshot = await prisma.serverSnapshot.delete({
     *   where: {
     *     // ... filter to delete one ServerSnapshot
     *   }
     * })
     * 
     */
    delete<T extends ServerSnapshotDeleteArgs>(args: SelectSubset<T, ServerSnapshotDeleteArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServerSnapshot.
     * @param {ServerSnapshotUpdateArgs} args - Arguments to update one ServerSnapshot.
     * @example
     * // Update one ServerSnapshot
     * const serverSnapshot = await prisma.serverSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerSnapshotUpdateArgs>(args: SelectSubset<T, ServerSnapshotUpdateArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServerSnapshots.
     * @param {ServerSnapshotDeleteManyArgs} args - Arguments to filter ServerSnapshots to delete.
     * @example
     * // Delete a few ServerSnapshots
     * const { count } = await prisma.serverSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerSnapshotDeleteManyArgs>(args?: SelectSubset<T, ServerSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerSnapshots
     * const serverSnapshot = await prisma.serverSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerSnapshotUpdateManyArgs>(args: SelectSubset<T, ServerSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServerSnapshot.
     * @param {ServerSnapshotUpsertArgs} args - Arguments to update or create a ServerSnapshot.
     * @example
     * // Update or create a ServerSnapshot
     * const serverSnapshot = await prisma.serverSnapshot.upsert({
     *   create: {
     *     // ... data to create a ServerSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends ServerSnapshotUpsertArgs>(args: SelectSubset<T, ServerSnapshotUpsertArgs<ExtArgs>>): Prisma__ServerSnapshotClient<$Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServerSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotCountArgs} args - Arguments to filter ServerSnapshots to count.
     * @example
     * // Count the number of ServerSnapshots
     * const count = await prisma.serverSnapshot.count({
     *   where: {
     *     // ... the filter for the ServerSnapshots we want to count
     *   }
     * })
    **/
    count<T extends ServerSnapshotCountArgs>(
      args?: Subset<T, ServerSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerSnapshotAggregateArgs>(args: Subset<T, ServerSnapshotAggregateArgs>): Prisma.PrismaPromise<GetServerSnapshotAggregateType<T>>

    /**
     * Group by ServerSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSnapshotGroupByArgs} args - Group by arguments.
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
      T extends ServerSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: ServerSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServerSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServerSnapshot model
   */
  readonly fields: ServerSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ServerSnapshot model
   */
  interface ServerSnapshotFieldRefs {
    readonly id: FieldRef<"ServerSnapshot", 'String'>
    readonly serverId: FieldRef<"ServerSnapshot", 'String'>
    readonly savedAt: FieldRef<"ServerSnapshot", 'DateTime'>
    readonly serverName: FieldRef<"ServerSnapshot", 'String'>
    readonly serverDescription: FieldRef<"ServerSnapshot", 'String'>
    readonly iconUrl: FieldRef<"ServerSnapshot", 'String'>
    readonly bannerUrl: FieldRef<"ServerSnapshot", 'String'>
    readonly ownerId: FieldRef<"ServerSnapshot", 'String'>
    readonly memberCount: FieldRef<"ServerSnapshot", 'Int'>
    readonly boostCount: FieldRef<"ServerSnapshot", 'Int'>
    readonly boostTier: FieldRef<"ServerSnapshot", 'Int'>
    readonly channels: FieldRef<"ServerSnapshot", 'String'>
    readonly roles: FieldRef<"ServerSnapshot", 'String'>
    readonly members: FieldRef<"ServerSnapshot", 'String'>
    readonly emojis: FieldRef<"ServerSnapshot", 'String'>
    readonly stickers: FieldRef<"ServerSnapshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServerSnapshot findUnique
   */
  export type ServerSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ServerSnapshot to fetch.
     */
    where: ServerSnapshotWhereUniqueInput
  }

  /**
   * ServerSnapshot findUniqueOrThrow
   */
  export type ServerSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ServerSnapshot to fetch.
     */
    where: ServerSnapshotWhereUniqueInput
  }

  /**
   * ServerSnapshot findFirst
   */
  export type ServerSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ServerSnapshot to fetch.
     */
    where?: ServerSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSnapshots to fetch.
     */
    orderBy?: ServerSnapshotOrderByWithRelationInput | ServerSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerSnapshots.
     */
    cursor?: ServerSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSnapshots.
     */
    distinct?: ServerSnapshotScalarFieldEnum | ServerSnapshotScalarFieldEnum[]
  }

  /**
   * ServerSnapshot findFirstOrThrow
   */
  export type ServerSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ServerSnapshot to fetch.
     */
    where?: ServerSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSnapshots to fetch.
     */
    orderBy?: ServerSnapshotOrderByWithRelationInput | ServerSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerSnapshots.
     */
    cursor?: ServerSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSnapshots.
     */
    distinct?: ServerSnapshotScalarFieldEnum | ServerSnapshotScalarFieldEnum[]
  }

  /**
   * ServerSnapshot findMany
   */
  export type ServerSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * Filter, which ServerSnapshots to fetch.
     */
    where?: ServerSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSnapshots to fetch.
     */
    orderBy?: ServerSnapshotOrderByWithRelationInput | ServerSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerSnapshots.
     */
    cursor?: ServerSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSnapshots.
     */
    distinct?: ServerSnapshotScalarFieldEnum | ServerSnapshotScalarFieldEnum[]
  }

  /**
   * ServerSnapshot create
   */
  export type ServerSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a ServerSnapshot.
     */
    data: XOR<ServerSnapshotCreateInput, ServerSnapshotUncheckedCreateInput>
  }

  /**
   * ServerSnapshot createMany
   */
  export type ServerSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServerSnapshots.
     */
    data: ServerSnapshotCreateManyInput | ServerSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServerSnapshot update
   */
  export type ServerSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a ServerSnapshot.
     */
    data: XOR<ServerSnapshotUpdateInput, ServerSnapshotUncheckedUpdateInput>
    /**
     * Choose, which ServerSnapshot to update.
     */
    where: ServerSnapshotWhereUniqueInput
  }

  /**
   * ServerSnapshot updateMany
   */
  export type ServerSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServerSnapshots.
     */
    data: XOR<ServerSnapshotUpdateManyMutationInput, ServerSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which ServerSnapshots to update
     */
    where?: ServerSnapshotWhereInput
    /**
     * Limit how many ServerSnapshots to update.
     */
    limit?: number
  }

  /**
   * ServerSnapshot upsert
   */
  export type ServerSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the ServerSnapshot to update in case it exists.
     */
    where: ServerSnapshotWhereUniqueInput
    /**
     * In case the ServerSnapshot found by the `where` argument doesn't exist, create a new ServerSnapshot with this data.
     */
    create: XOR<ServerSnapshotCreateInput, ServerSnapshotUncheckedCreateInput>
    /**
     * In case the ServerSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerSnapshotUpdateInput, ServerSnapshotUncheckedUpdateInput>
  }

  /**
   * ServerSnapshot delete
   */
  export type ServerSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
    /**
     * Filter which ServerSnapshot to delete.
     */
    where: ServerSnapshotWhereUniqueInput
  }

  /**
   * ServerSnapshot deleteMany
   */
  export type ServerSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerSnapshots to delete
     */
    where?: ServerSnapshotWhereInput
    /**
     * Limit how many ServerSnapshots to delete.
     */
    limit?: number
  }

  /**
   * ServerSnapshot without action
   */
  export type ServerSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSnapshot
     */
    select?: ServerSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSnapshot
     */
    omit?: ServerSnapshotOmit<ExtArgs> | null
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


  export const ServerSettingScalarFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    spamBlockEnabled: 'spamBlockEnabled',
    inviteBlockEnabled: 'inviteBlockEnabled',
    shortBlockEnabled: 'shortBlockEnabled',
    regexBlockEnabled: 'regexBlockEnabled',
    spamReportChannelId: 'spamReportChannelId',
    inviteReportChannelId: 'inviteReportChannelId',
    shortReportChannelId: 'shortReportChannelId',
    regexReportChannelId: 'regexReportChannelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ignoredChannels: 'ignoredChannels',
    ignoredRoles: 'ignoredRoles',
    spamIgnoredRoles: 'spamIgnoredRoles',
    spamIgnoredChannels: 'spamIgnoredChannels',
    inviteIgnoredRoles: 'inviteIgnoredRoles',
    inviteIgnoredChannels: 'inviteIgnoredChannels',
    shortIgnoredRoles: 'shortIgnoredRoles',
    shortIgnoredChannels: 'shortIgnoredChannels',
    regexIgnoredRoles: 'regexIgnoredRoles',
    regexIgnoredChannels: 'regexIgnoredChannels',
    honeypotChannelId: 'honeypotChannelId',
    honeypotEnabled: 'honeypotEnabled',
    honeypotIgnoreRole: 'honeypotIgnoreRole',
    honeypotReportId: 'honeypotReportId',
    autoReactions: 'autoReactions',
    earthquakeNotifyEnabled: 'earthquakeNotifyEnabled',
    earthquakeNotifyRole: 'earthquakeNotifyRole',
    earthquakeChannelId: 'earthquakeChannelId',
    earthquakeWebhookUrl: 'earthquakeWebhookUrl',
    earthquakeNotifyScale: 'earthquakeNotifyScale',
    joinLeaveNotificationEnabled: 'joinLeaveNotificationEnabled',
    mentionReadoutEnabled: 'mentionReadoutEnabled',
    mentionReadoutNameOnly: 'mentionReadoutNameOnly',
    mentionReadoutVolume: 'mentionReadoutVolume',
    regexPatterns: 'regexPatterns',
    serverDataEnabled: 'serverDataEnabled'
  };

  export type ServerSettingScalarFieldEnum = (typeof ServerSettingScalarFieldEnum)[keyof typeof ServerSettingScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerId: 'providerId',
    accountId: 'accountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SurvivalRankingScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    bestDays: 'bestDays',
    updatedAt: 'updatedAt'
  };

  export type SurvivalRankingScalarFieldEnum = (typeof SurvivalRankingScalarFieldEnum)[keyof typeof SurvivalRankingScalarFieldEnum]


  export const EconomyAffiliationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    enabled: 'enabled',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EconomyAffiliationScalarFieldEnum = (typeof EconomyAffiliationScalarFieldEnum)[keyof typeof EconomyAffiliationScalarFieldEnum]


  export const EconomyAccountScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    name: 'name',
    image: 'image',
    affiliationName: 'affiliationName',
    affiliationId: 'affiliationId',
    coins: 'coins',
    intelligenceLevel: 'intelligenceLevel',
    satiation: 'satiation',
    happiness: 'happiness',
    birthday: 'birthday',
    lastWorkAt: 'lastWorkAt',
    inventory: 'inventory',
    lastBirthdayBonusYear: 'lastBirthdayBonusYear',
    lastSchoolAt: 'lastSchoolAt',
    schoolAttendanceCount: 'schoolAttendanceCount',
    status: 'status',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EconomyAccountScalarFieldEnum = (typeof EconomyAccountScalarFieldEnum)[keyof typeof EconomyAccountScalarFieldEnum]


  export const EconomyLogScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    accountId: 'accountId',
    eventType: 'eventType',
    amount: 'amount',
    balanceBefore: 'balanceBefore',
    balanceAfter: 'balanceAfter',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type EconomyLogScalarFieldEnum = (typeof EconomyLogScalarFieldEnum)[keyof typeof EconomyLogScalarFieldEnum]


  export const RaceHistoryScalarFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    selectedHorseIndex: 'selectedHorseIndex',
    selectedHorseName: 'selectedHorseName',
    betType: 'betType',
    betAmount: 'betAmount',
    odds: 'odds',
    isHit: 'isHit',
    payout: 'payout',
    balanceBefore: 'balanceBefore',
    balanceAfter: 'balanceAfter',
    raceResult: 'raceResult',
    createdAt: 'createdAt',
    economyAccountId: 'economyAccountId'
  };

  export type RaceHistoryScalarFieldEnum = (typeof RaceHistoryScalarFieldEnum)[keyof typeof RaceHistoryScalarFieldEnum]


  export const ServerSnapshotScalarFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    savedAt: 'savedAt',
    serverName: 'serverName',
    serverDescription: 'serverDescription',
    iconUrl: 'iconUrl',
    bannerUrl: 'bannerUrl',
    ownerId: 'ownerId',
    memberCount: 'memberCount',
    boostCount: 'boostCount',
    boostTier: 'boostTier',
    channels: 'channels',
    roles: 'roles',
    members: 'members',
    emojis: 'emojis',
    stickers: 'stickers'
  };

  export type ServerSnapshotScalarFieldEnum = (typeof ServerSnapshotScalarFieldEnum)[keyof typeof ServerSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ServerSettingOrderByRelevanceFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    spamReportChannelId: 'spamReportChannelId',
    inviteReportChannelId: 'inviteReportChannelId',
    shortReportChannelId: 'shortReportChannelId',
    regexReportChannelId: 'regexReportChannelId',
    ignoredChannels: 'ignoredChannels',
    ignoredRoles: 'ignoredRoles',
    spamIgnoredRoles: 'spamIgnoredRoles',
    spamIgnoredChannels: 'spamIgnoredChannels',
    inviteIgnoredRoles: 'inviteIgnoredRoles',
    inviteIgnoredChannels: 'inviteIgnoredChannels',
    shortIgnoredRoles: 'shortIgnoredRoles',
    shortIgnoredChannels: 'shortIgnoredChannels',
    regexIgnoredRoles: 'regexIgnoredRoles',
    regexIgnoredChannels: 'regexIgnoredChannels',
    honeypotChannelId: 'honeypotChannelId',
    honeypotIgnoreRole: 'honeypotIgnoreRole',
    honeypotReportId: 'honeypotReportId',
    autoReactions: 'autoReactions',
    earthquakeNotifyRole: 'earthquakeNotifyRole',
    earthquakeChannelId: 'earthquakeChannelId',
    earthquakeWebhookUrl: 'earthquakeWebhookUrl',
    regexPatterns: 'regexPatterns'
  };

  export type ServerSettingOrderByRelevanceFieldEnum = (typeof ServerSettingOrderByRelevanceFieldEnum)[keyof typeof ServerSettingOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerId: 'providerId',
    accountId: 'accountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    password: 'password',
    idToken: 'idToken',
    scope: 'scope'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationOrderByRelevanceFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value'
  };

  export type VerificationOrderByRelevanceFieldEnum = (typeof VerificationOrderByRelevanceFieldEnum)[keyof typeof VerificationOrderByRelevanceFieldEnum]


  export const SurvivalRankingOrderByRelevanceFieldEnum: {
    userId: 'userId',
    username: 'username'
  };

  export type SurvivalRankingOrderByRelevanceFieldEnum = (typeof SurvivalRankingOrderByRelevanceFieldEnum)[keyof typeof SurvivalRankingOrderByRelevanceFieldEnum]


  export const EconomyAffiliationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type EconomyAffiliationOrderByRelevanceFieldEnum = (typeof EconomyAffiliationOrderByRelevanceFieldEnum)[keyof typeof EconomyAffiliationOrderByRelevanceFieldEnum]


  export const EconomyAccountOrderByRelevanceFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    name: 'name',
    image: 'image',
    affiliationName: 'affiliationName',
    affiliationId: 'affiliationId',
    inventory: 'inventory',
    status: 'status',
    ipAddress: 'ipAddress'
  };

  export type EconomyAccountOrderByRelevanceFieldEnum = (typeof EconomyAccountOrderByRelevanceFieldEnum)[keyof typeof EconomyAccountOrderByRelevanceFieldEnum]


  export const EconomyLogOrderByRelevanceFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    accountId: 'accountId',
    eventType: 'eventType',
    description: 'description',
    metadata: 'metadata'
  };

  export type EconomyLogOrderByRelevanceFieldEnum = (typeof EconomyLogOrderByRelevanceFieldEnum)[keyof typeof EconomyLogOrderByRelevanceFieldEnum]


  export const RaceHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    discordId: 'discordId',
    selectedHorseName: 'selectedHorseName',
    betType: 'betType',
    raceResult: 'raceResult',
    economyAccountId: 'economyAccountId'
  };

  export type RaceHistoryOrderByRelevanceFieldEnum = (typeof RaceHistoryOrderByRelevanceFieldEnum)[keyof typeof RaceHistoryOrderByRelevanceFieldEnum]


  export const ServerSnapshotOrderByRelevanceFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    serverName: 'serverName',
    serverDescription: 'serverDescription',
    iconUrl: 'iconUrl',
    bannerUrl: 'bannerUrl',
    ownerId: 'ownerId',
    channels: 'channels',
    roles: 'roles',
    members: 'members',
    emojis: 'emojis',
    stickers: 'stickers'
  };

  export type ServerSnapshotOrderByRelevanceFieldEnum = (typeof ServerSnapshotOrderByRelevanceFieldEnum)[keyof typeof ServerSnapshotOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ServerSettingWhereInput = {
    AND?: ServerSettingWhereInput | ServerSettingWhereInput[]
    OR?: ServerSettingWhereInput[]
    NOT?: ServerSettingWhereInput | ServerSettingWhereInput[]
    id?: StringFilter<"ServerSetting"> | string
    serverId?: StringFilter<"ServerSetting"> | string
    spamBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    inviteBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    shortBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    regexBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    spamReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    inviteReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    shortReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    regexReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    createdAt?: DateTimeFilter<"ServerSetting"> | Date | string
    updatedAt?: DateTimeFilter<"ServerSetting"> | Date | string
    ignoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    ignoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    spamIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    spamIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    inviteIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    inviteIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    shortIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    shortIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    regexIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    regexIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    honeypotChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    honeypotEnabled?: BoolFilter<"ServerSetting"> | boolean
    honeypotIgnoreRole?: StringNullableFilter<"ServerSetting"> | string | null
    honeypotReportId?: StringNullableFilter<"ServerSetting"> | string | null
    autoReactions?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeNotifyEnabled?: BoolFilter<"ServerSetting"> | boolean
    earthquakeNotifyRole?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeWebhookUrl?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeNotifyScale?: IntNullableFilter<"ServerSetting"> | number | null
    joinLeaveNotificationEnabled?: BoolFilter<"ServerSetting"> | boolean
    mentionReadoutEnabled?: BoolFilter<"ServerSetting"> | boolean
    mentionReadoutNameOnly?: BoolFilter<"ServerSetting"> | boolean
    mentionReadoutVolume?: IntFilter<"ServerSetting"> | number
    regexPatterns?: StringNullableFilter<"ServerSetting"> | string | null
    serverDataEnabled?: BoolFilter<"ServerSetting"> | boolean
  }

  export type ServerSettingOrderByWithRelationInput = {
    id?: SortOrder
    serverId?: SortOrder
    spamBlockEnabled?: SortOrder
    inviteBlockEnabled?: SortOrder
    shortBlockEnabled?: SortOrder
    regexBlockEnabled?: SortOrder
    spamReportChannelId?: SortOrderInput | SortOrder
    inviteReportChannelId?: SortOrderInput | SortOrder
    shortReportChannelId?: SortOrderInput | SortOrder
    regexReportChannelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ignoredChannels?: SortOrderInput | SortOrder
    ignoredRoles?: SortOrderInput | SortOrder
    spamIgnoredRoles?: SortOrderInput | SortOrder
    spamIgnoredChannels?: SortOrderInput | SortOrder
    inviteIgnoredRoles?: SortOrderInput | SortOrder
    inviteIgnoredChannels?: SortOrderInput | SortOrder
    shortIgnoredRoles?: SortOrderInput | SortOrder
    shortIgnoredChannels?: SortOrderInput | SortOrder
    regexIgnoredRoles?: SortOrderInput | SortOrder
    regexIgnoredChannels?: SortOrderInput | SortOrder
    honeypotChannelId?: SortOrderInput | SortOrder
    honeypotEnabled?: SortOrder
    honeypotIgnoreRole?: SortOrderInput | SortOrder
    honeypotReportId?: SortOrderInput | SortOrder
    autoReactions?: SortOrderInput | SortOrder
    earthquakeNotifyEnabled?: SortOrder
    earthquakeNotifyRole?: SortOrderInput | SortOrder
    earthquakeChannelId?: SortOrderInput | SortOrder
    earthquakeWebhookUrl?: SortOrderInput | SortOrder
    earthquakeNotifyScale?: SortOrderInput | SortOrder
    joinLeaveNotificationEnabled?: SortOrder
    mentionReadoutEnabled?: SortOrder
    mentionReadoutNameOnly?: SortOrder
    mentionReadoutVolume?: SortOrder
    regexPatterns?: SortOrderInput | SortOrder
    serverDataEnabled?: SortOrder
    _relevance?: ServerSettingOrderByRelevanceInput
  }

  export type ServerSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serverId?: string
    AND?: ServerSettingWhereInput | ServerSettingWhereInput[]
    OR?: ServerSettingWhereInput[]
    NOT?: ServerSettingWhereInput | ServerSettingWhereInput[]
    spamBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    inviteBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    shortBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    regexBlockEnabled?: BoolFilter<"ServerSetting"> | boolean
    spamReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    inviteReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    shortReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    regexReportChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    createdAt?: DateTimeFilter<"ServerSetting"> | Date | string
    updatedAt?: DateTimeFilter<"ServerSetting"> | Date | string
    ignoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    ignoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    spamIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    spamIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    inviteIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    inviteIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    shortIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    shortIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    regexIgnoredRoles?: StringNullableFilter<"ServerSetting"> | string | null
    regexIgnoredChannels?: StringNullableFilter<"ServerSetting"> | string | null
    honeypotChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    honeypotEnabled?: BoolFilter<"ServerSetting"> | boolean
    honeypotIgnoreRole?: StringNullableFilter<"ServerSetting"> | string | null
    honeypotReportId?: StringNullableFilter<"ServerSetting"> | string | null
    autoReactions?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeNotifyEnabled?: BoolFilter<"ServerSetting"> | boolean
    earthquakeNotifyRole?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeChannelId?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeWebhookUrl?: StringNullableFilter<"ServerSetting"> | string | null
    earthquakeNotifyScale?: IntNullableFilter<"ServerSetting"> | number | null
    joinLeaveNotificationEnabled?: BoolFilter<"ServerSetting"> | boolean
    mentionReadoutEnabled?: BoolFilter<"ServerSetting"> | boolean
    mentionReadoutNameOnly?: BoolFilter<"ServerSetting"> | boolean
    mentionReadoutVolume?: IntFilter<"ServerSetting"> | number
    regexPatterns?: StringNullableFilter<"ServerSetting"> | string | null
    serverDataEnabled?: BoolFilter<"ServerSetting"> | boolean
  }, "id" | "serverId">

  export type ServerSettingOrderByWithAggregationInput = {
    id?: SortOrder
    serverId?: SortOrder
    spamBlockEnabled?: SortOrder
    inviteBlockEnabled?: SortOrder
    shortBlockEnabled?: SortOrder
    regexBlockEnabled?: SortOrder
    spamReportChannelId?: SortOrderInput | SortOrder
    inviteReportChannelId?: SortOrderInput | SortOrder
    shortReportChannelId?: SortOrderInput | SortOrder
    regexReportChannelId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ignoredChannels?: SortOrderInput | SortOrder
    ignoredRoles?: SortOrderInput | SortOrder
    spamIgnoredRoles?: SortOrderInput | SortOrder
    spamIgnoredChannels?: SortOrderInput | SortOrder
    inviteIgnoredRoles?: SortOrderInput | SortOrder
    inviteIgnoredChannels?: SortOrderInput | SortOrder
    shortIgnoredRoles?: SortOrderInput | SortOrder
    shortIgnoredChannels?: SortOrderInput | SortOrder
    regexIgnoredRoles?: SortOrderInput | SortOrder
    regexIgnoredChannels?: SortOrderInput | SortOrder
    honeypotChannelId?: SortOrderInput | SortOrder
    honeypotEnabled?: SortOrder
    honeypotIgnoreRole?: SortOrderInput | SortOrder
    honeypotReportId?: SortOrderInput | SortOrder
    autoReactions?: SortOrderInput | SortOrder
    earthquakeNotifyEnabled?: SortOrder
    earthquakeNotifyRole?: SortOrderInput | SortOrder
    earthquakeChannelId?: SortOrderInput | SortOrder
    earthquakeWebhookUrl?: SortOrderInput | SortOrder
    earthquakeNotifyScale?: SortOrderInput | SortOrder
    joinLeaveNotificationEnabled?: SortOrder
    mentionReadoutEnabled?: SortOrder
    mentionReadoutNameOnly?: SortOrder
    mentionReadoutVolume?: SortOrder
    regexPatterns?: SortOrderInput | SortOrder
    serverDataEnabled?: SortOrder
    _count?: ServerSettingCountOrderByAggregateInput
    _avg?: ServerSettingAvgOrderByAggregateInput
    _max?: ServerSettingMaxOrderByAggregateInput
    _min?: ServerSettingMinOrderByAggregateInput
    _sum?: ServerSettingSumOrderByAggregateInput
  }

  export type ServerSettingScalarWhereWithAggregatesInput = {
    AND?: ServerSettingScalarWhereWithAggregatesInput | ServerSettingScalarWhereWithAggregatesInput[]
    OR?: ServerSettingScalarWhereWithAggregatesInput[]
    NOT?: ServerSettingScalarWhereWithAggregatesInput | ServerSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServerSetting"> | string
    serverId?: StringWithAggregatesFilter<"ServerSetting"> | string
    spamBlockEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    inviteBlockEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    shortBlockEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    regexBlockEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    spamReportChannelId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    inviteReportChannelId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    shortReportChannelId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    regexReportChannelId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServerSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServerSetting"> | Date | string
    ignoredChannels?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    ignoredRoles?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    spamIgnoredRoles?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    spamIgnoredChannels?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    inviteIgnoredRoles?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    inviteIgnoredChannels?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    shortIgnoredRoles?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    shortIgnoredChannels?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    regexIgnoredRoles?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    regexIgnoredChannels?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    honeypotChannelId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    honeypotEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    honeypotIgnoreRole?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    honeypotReportId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    autoReactions?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    earthquakeNotifyEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    earthquakeNotifyRole?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    earthquakeChannelId?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    earthquakeWebhookUrl?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    earthquakeNotifyScale?: IntNullableWithAggregatesFilter<"ServerSetting"> | number | null
    joinLeaveNotificationEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    mentionReadoutEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    mentionReadoutNameOnly?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
    mentionReadoutVolume?: IntWithAggregatesFilter<"ServerSetting"> | number
    regexPatterns?: StringNullableWithAggregatesFilter<"ServerSetting"> | string | null
    serverDataEnabled?: BoolWithAggregatesFilter<"ServerSetting"> | boolean
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: VerificationOrderByRelevanceInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type SurvivalRankingWhereInput = {
    AND?: SurvivalRankingWhereInput | SurvivalRankingWhereInput[]
    OR?: SurvivalRankingWhereInput[]
    NOT?: SurvivalRankingWhereInput | SurvivalRankingWhereInput[]
    userId?: StringFilter<"SurvivalRanking"> | string
    username?: StringFilter<"SurvivalRanking"> | string
    bestDays?: IntFilter<"SurvivalRanking"> | number
    updatedAt?: DateTimeFilter<"SurvivalRanking"> | Date | string
  }

  export type SurvivalRankingOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    bestDays?: SortOrder
    updatedAt?: SortOrder
    _relevance?: SurvivalRankingOrderByRelevanceInput
  }

  export type SurvivalRankingWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: SurvivalRankingWhereInput | SurvivalRankingWhereInput[]
    OR?: SurvivalRankingWhereInput[]
    NOT?: SurvivalRankingWhereInput | SurvivalRankingWhereInput[]
    username?: StringFilter<"SurvivalRanking"> | string
    bestDays?: IntFilter<"SurvivalRanking"> | number
    updatedAt?: DateTimeFilter<"SurvivalRanking"> | Date | string
  }, "userId">

  export type SurvivalRankingOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    bestDays?: SortOrder
    updatedAt?: SortOrder
    _count?: SurvivalRankingCountOrderByAggregateInput
    _avg?: SurvivalRankingAvgOrderByAggregateInput
    _max?: SurvivalRankingMaxOrderByAggregateInput
    _min?: SurvivalRankingMinOrderByAggregateInput
    _sum?: SurvivalRankingSumOrderByAggregateInput
  }

  export type SurvivalRankingScalarWhereWithAggregatesInput = {
    AND?: SurvivalRankingScalarWhereWithAggregatesInput | SurvivalRankingScalarWhereWithAggregatesInput[]
    OR?: SurvivalRankingScalarWhereWithAggregatesInput[]
    NOT?: SurvivalRankingScalarWhereWithAggregatesInput | SurvivalRankingScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"SurvivalRanking"> | string
    username?: StringWithAggregatesFilter<"SurvivalRanking"> | string
    bestDays?: IntWithAggregatesFilter<"SurvivalRanking"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SurvivalRanking"> | Date | string
  }

  export type EconomyAffiliationWhereInput = {
    AND?: EconomyAffiliationWhereInput | EconomyAffiliationWhereInput[]
    OR?: EconomyAffiliationWhereInput[]
    NOT?: EconomyAffiliationWhereInput | EconomyAffiliationWhereInput[]
    id?: StringFilter<"EconomyAffiliation"> | string
    name?: StringFilter<"EconomyAffiliation"> | string
    description?: StringNullableFilter<"EconomyAffiliation"> | string | null
    enabled?: BoolFilter<"EconomyAffiliation"> | boolean
    sortOrder?: IntFilter<"EconomyAffiliation"> | number
    createdAt?: DateTimeFilter<"EconomyAffiliation"> | Date | string
    updatedAt?: DateTimeFilter<"EconomyAffiliation"> | Date | string
    accounts?: EconomyAccountListRelationFilter
  }

  export type EconomyAffiliationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    enabled?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: EconomyAccountOrderByRelationAggregateInput
    _relevance?: EconomyAffiliationOrderByRelevanceInput
  }

  export type EconomyAffiliationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EconomyAffiliationWhereInput | EconomyAffiliationWhereInput[]
    OR?: EconomyAffiliationWhereInput[]
    NOT?: EconomyAffiliationWhereInput | EconomyAffiliationWhereInput[]
    name?: StringFilter<"EconomyAffiliation"> | string
    description?: StringNullableFilter<"EconomyAffiliation"> | string | null
    enabled?: BoolFilter<"EconomyAffiliation"> | boolean
    sortOrder?: IntFilter<"EconomyAffiliation"> | number
    createdAt?: DateTimeFilter<"EconomyAffiliation"> | Date | string
    updatedAt?: DateTimeFilter<"EconomyAffiliation"> | Date | string
    accounts?: EconomyAccountListRelationFilter
  }, "id">

  export type EconomyAffiliationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    enabled?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EconomyAffiliationCountOrderByAggregateInput
    _avg?: EconomyAffiliationAvgOrderByAggregateInput
    _max?: EconomyAffiliationMaxOrderByAggregateInput
    _min?: EconomyAffiliationMinOrderByAggregateInput
    _sum?: EconomyAffiliationSumOrderByAggregateInput
  }

  export type EconomyAffiliationScalarWhereWithAggregatesInput = {
    AND?: EconomyAffiliationScalarWhereWithAggregatesInput | EconomyAffiliationScalarWhereWithAggregatesInput[]
    OR?: EconomyAffiliationScalarWhereWithAggregatesInput[]
    NOT?: EconomyAffiliationScalarWhereWithAggregatesInput | EconomyAffiliationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EconomyAffiliation"> | string
    name?: StringWithAggregatesFilter<"EconomyAffiliation"> | string
    description?: StringNullableWithAggregatesFilter<"EconomyAffiliation"> | string | null
    enabled?: BoolWithAggregatesFilter<"EconomyAffiliation"> | boolean
    sortOrder?: IntWithAggregatesFilter<"EconomyAffiliation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EconomyAffiliation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EconomyAffiliation"> | Date | string
  }

  export type EconomyAccountWhereInput = {
    AND?: EconomyAccountWhereInput | EconomyAccountWhereInput[]
    OR?: EconomyAccountWhereInput[]
    NOT?: EconomyAccountWhereInput | EconomyAccountWhereInput[]
    id?: StringFilter<"EconomyAccount"> | string
    discordId?: StringFilter<"EconomyAccount"> | string
    name?: StringFilter<"EconomyAccount"> | string
    image?: StringNullableFilter<"EconomyAccount"> | string | null
    affiliationName?: StringFilter<"EconomyAccount"> | string
    affiliationId?: StringNullableFilter<"EconomyAccount"> | string | null
    coins?: BigIntFilter<"EconomyAccount"> | bigint | number
    intelligenceLevel?: IntFilter<"EconomyAccount"> | number
    satiation?: IntFilter<"EconomyAccount"> | number
    happiness?: IntFilter<"EconomyAccount"> | number
    birthday?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    lastWorkAt?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    inventory?: StringNullableFilter<"EconomyAccount"> | string | null
    lastBirthdayBonusYear?: IntNullableFilter<"EconomyAccount"> | number | null
    lastSchoolAt?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    schoolAttendanceCount?: IntFilter<"EconomyAccount"> | number
    status?: StringFilter<"EconomyAccount"> | string
    ipAddress?: StringNullableFilter<"EconomyAccount"> | string | null
    createdAt?: DateTimeFilter<"EconomyAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EconomyAccount"> | Date | string
    affiliation?: XOR<EconomyAffiliationNullableScalarRelationFilter, EconomyAffiliationWhereInput> | null
    economyLogs?: EconomyLogListRelationFilter
    raceHistories?: RaceHistoryListRelationFilter
  }

  export type EconomyAccountOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    affiliationName?: SortOrder
    affiliationId?: SortOrderInput | SortOrder
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    birthday?: SortOrderInput | SortOrder
    lastWorkAt?: SortOrderInput | SortOrder
    inventory?: SortOrderInput | SortOrder
    lastBirthdayBonusYear?: SortOrderInput | SortOrder
    lastSchoolAt?: SortOrderInput | SortOrder
    schoolAttendanceCount?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    affiliation?: EconomyAffiliationOrderByWithRelationInput
    economyLogs?: EconomyLogOrderByRelationAggregateInput
    raceHistories?: RaceHistoryOrderByRelationAggregateInput
    _relevance?: EconomyAccountOrderByRelevanceInput
  }

  export type EconomyAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    discordId?: string
    AND?: EconomyAccountWhereInput | EconomyAccountWhereInput[]
    OR?: EconomyAccountWhereInput[]
    NOT?: EconomyAccountWhereInput | EconomyAccountWhereInput[]
    name?: StringFilter<"EconomyAccount"> | string
    image?: StringNullableFilter<"EconomyAccount"> | string | null
    affiliationName?: StringFilter<"EconomyAccount"> | string
    affiliationId?: StringNullableFilter<"EconomyAccount"> | string | null
    coins?: BigIntFilter<"EconomyAccount"> | bigint | number
    intelligenceLevel?: IntFilter<"EconomyAccount"> | number
    satiation?: IntFilter<"EconomyAccount"> | number
    happiness?: IntFilter<"EconomyAccount"> | number
    birthday?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    lastWorkAt?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    inventory?: StringNullableFilter<"EconomyAccount"> | string | null
    lastBirthdayBonusYear?: IntNullableFilter<"EconomyAccount"> | number | null
    lastSchoolAt?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    schoolAttendanceCount?: IntFilter<"EconomyAccount"> | number
    status?: StringFilter<"EconomyAccount"> | string
    ipAddress?: StringNullableFilter<"EconomyAccount"> | string | null
    createdAt?: DateTimeFilter<"EconomyAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EconomyAccount"> | Date | string
    affiliation?: XOR<EconomyAffiliationNullableScalarRelationFilter, EconomyAffiliationWhereInput> | null
    economyLogs?: EconomyLogListRelationFilter
    raceHistories?: RaceHistoryListRelationFilter
  }, "id" | "discordId">

  export type EconomyAccountOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    affiliationName?: SortOrder
    affiliationId?: SortOrderInput | SortOrder
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    birthday?: SortOrderInput | SortOrder
    lastWorkAt?: SortOrderInput | SortOrder
    inventory?: SortOrderInput | SortOrder
    lastBirthdayBonusYear?: SortOrderInput | SortOrder
    lastSchoolAt?: SortOrderInput | SortOrder
    schoolAttendanceCount?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EconomyAccountCountOrderByAggregateInput
    _avg?: EconomyAccountAvgOrderByAggregateInput
    _max?: EconomyAccountMaxOrderByAggregateInput
    _min?: EconomyAccountMinOrderByAggregateInput
    _sum?: EconomyAccountSumOrderByAggregateInput
  }

  export type EconomyAccountScalarWhereWithAggregatesInput = {
    AND?: EconomyAccountScalarWhereWithAggregatesInput | EconomyAccountScalarWhereWithAggregatesInput[]
    OR?: EconomyAccountScalarWhereWithAggregatesInput[]
    NOT?: EconomyAccountScalarWhereWithAggregatesInput | EconomyAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EconomyAccount"> | string
    discordId?: StringWithAggregatesFilter<"EconomyAccount"> | string
    name?: StringWithAggregatesFilter<"EconomyAccount"> | string
    image?: StringNullableWithAggregatesFilter<"EconomyAccount"> | string | null
    affiliationName?: StringWithAggregatesFilter<"EconomyAccount"> | string
    affiliationId?: StringNullableWithAggregatesFilter<"EconomyAccount"> | string | null
    coins?: BigIntWithAggregatesFilter<"EconomyAccount"> | bigint | number
    intelligenceLevel?: IntWithAggregatesFilter<"EconomyAccount"> | number
    satiation?: IntWithAggregatesFilter<"EconomyAccount"> | number
    happiness?: IntWithAggregatesFilter<"EconomyAccount"> | number
    birthday?: DateTimeNullableWithAggregatesFilter<"EconomyAccount"> | Date | string | null
    lastWorkAt?: DateTimeNullableWithAggregatesFilter<"EconomyAccount"> | Date | string | null
    inventory?: StringNullableWithAggregatesFilter<"EconomyAccount"> | string | null
    lastBirthdayBonusYear?: IntNullableWithAggregatesFilter<"EconomyAccount"> | number | null
    lastSchoolAt?: DateTimeNullableWithAggregatesFilter<"EconomyAccount"> | Date | string | null
    schoolAttendanceCount?: IntWithAggregatesFilter<"EconomyAccount"> | number
    status?: StringWithAggregatesFilter<"EconomyAccount"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"EconomyAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EconomyAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EconomyAccount"> | Date | string
  }

  export type EconomyLogWhereInput = {
    AND?: EconomyLogWhereInput | EconomyLogWhereInput[]
    OR?: EconomyLogWhereInput[]
    NOT?: EconomyLogWhereInput | EconomyLogWhereInput[]
    id?: StringFilter<"EconomyLog"> | string
    discordId?: StringFilter<"EconomyLog"> | string
    accountId?: StringNullableFilter<"EconomyLog"> | string | null
    eventType?: StringFilter<"EconomyLog"> | string
    amount?: BigIntFilter<"EconomyLog"> | bigint | number
    balanceBefore?: BigIntFilter<"EconomyLog"> | bigint | number
    balanceAfter?: BigIntFilter<"EconomyLog"> | bigint | number
    description?: StringNullableFilter<"EconomyLog"> | string | null
    metadata?: StringNullableFilter<"EconomyLog"> | string | null
    createdAt?: DateTimeFilter<"EconomyLog"> | Date | string
    economyAccount?: XOR<EconomyAccountNullableScalarRelationFilter, EconomyAccountWhereInput> | null
  }

  export type EconomyLogOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    economyAccount?: EconomyAccountOrderByWithRelationInput
    _relevance?: EconomyLogOrderByRelevanceInput
  }

  export type EconomyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EconomyLogWhereInput | EconomyLogWhereInput[]
    OR?: EconomyLogWhereInput[]
    NOT?: EconomyLogWhereInput | EconomyLogWhereInput[]
    discordId?: StringFilter<"EconomyLog"> | string
    accountId?: StringNullableFilter<"EconomyLog"> | string | null
    eventType?: StringFilter<"EconomyLog"> | string
    amount?: BigIntFilter<"EconomyLog"> | bigint | number
    balanceBefore?: BigIntFilter<"EconomyLog"> | bigint | number
    balanceAfter?: BigIntFilter<"EconomyLog"> | bigint | number
    description?: StringNullableFilter<"EconomyLog"> | string | null
    metadata?: StringNullableFilter<"EconomyLog"> | string | null
    createdAt?: DateTimeFilter<"EconomyLog"> | Date | string
    economyAccount?: XOR<EconomyAccountNullableScalarRelationFilter, EconomyAccountWhereInput> | null
  }, "id">

  export type EconomyLogOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EconomyLogCountOrderByAggregateInput
    _avg?: EconomyLogAvgOrderByAggregateInput
    _max?: EconomyLogMaxOrderByAggregateInput
    _min?: EconomyLogMinOrderByAggregateInput
    _sum?: EconomyLogSumOrderByAggregateInput
  }

  export type EconomyLogScalarWhereWithAggregatesInput = {
    AND?: EconomyLogScalarWhereWithAggregatesInput | EconomyLogScalarWhereWithAggregatesInput[]
    OR?: EconomyLogScalarWhereWithAggregatesInput[]
    NOT?: EconomyLogScalarWhereWithAggregatesInput | EconomyLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EconomyLog"> | string
    discordId?: StringWithAggregatesFilter<"EconomyLog"> | string
    accountId?: StringNullableWithAggregatesFilter<"EconomyLog"> | string | null
    eventType?: StringWithAggregatesFilter<"EconomyLog"> | string
    amount?: BigIntWithAggregatesFilter<"EconomyLog"> | bigint | number
    balanceBefore?: BigIntWithAggregatesFilter<"EconomyLog"> | bigint | number
    balanceAfter?: BigIntWithAggregatesFilter<"EconomyLog"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"EconomyLog"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"EconomyLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EconomyLog"> | Date | string
  }

  export type RaceHistoryWhereInput = {
    AND?: RaceHistoryWhereInput | RaceHistoryWhereInput[]
    OR?: RaceHistoryWhereInput[]
    NOT?: RaceHistoryWhereInput | RaceHistoryWhereInput[]
    id?: StringFilter<"RaceHistory"> | string
    discordId?: StringFilter<"RaceHistory"> | string
    selectedHorseIndex?: IntFilter<"RaceHistory"> | number
    selectedHorseName?: StringFilter<"RaceHistory"> | string
    betType?: StringFilter<"RaceHistory"> | string
    betAmount?: BigIntFilter<"RaceHistory"> | bigint | number
    odds?: DecimalFilter<"RaceHistory"> | Decimal | DecimalJsLike | number | string
    isHit?: BoolFilter<"RaceHistory"> | boolean
    payout?: BigIntFilter<"RaceHistory"> | bigint | number
    balanceBefore?: BigIntFilter<"RaceHistory"> | bigint | number
    balanceAfter?: BigIntFilter<"RaceHistory"> | bigint | number
    raceResult?: StringNullableFilter<"RaceHistory"> | string | null
    createdAt?: DateTimeFilter<"RaceHistory"> | Date | string
    economyAccountId?: StringNullableFilter<"RaceHistory"> | string | null
    economyAccount?: XOR<EconomyAccountNullableScalarRelationFilter, EconomyAccountWhereInput> | null
  }

  export type RaceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    discordId?: SortOrder
    selectedHorseIndex?: SortOrder
    selectedHorseName?: SortOrder
    betType?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    isHit?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    raceResult?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    economyAccountId?: SortOrderInput | SortOrder
    economyAccount?: EconomyAccountOrderByWithRelationInput
    _relevance?: RaceHistoryOrderByRelevanceInput
  }

  export type RaceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceHistoryWhereInput | RaceHistoryWhereInput[]
    OR?: RaceHistoryWhereInput[]
    NOT?: RaceHistoryWhereInput | RaceHistoryWhereInput[]
    discordId?: StringFilter<"RaceHistory"> | string
    selectedHorseIndex?: IntFilter<"RaceHistory"> | number
    selectedHorseName?: StringFilter<"RaceHistory"> | string
    betType?: StringFilter<"RaceHistory"> | string
    betAmount?: BigIntFilter<"RaceHistory"> | bigint | number
    odds?: DecimalFilter<"RaceHistory"> | Decimal | DecimalJsLike | number | string
    isHit?: BoolFilter<"RaceHistory"> | boolean
    payout?: BigIntFilter<"RaceHistory"> | bigint | number
    balanceBefore?: BigIntFilter<"RaceHistory"> | bigint | number
    balanceAfter?: BigIntFilter<"RaceHistory"> | bigint | number
    raceResult?: StringNullableFilter<"RaceHistory"> | string | null
    createdAt?: DateTimeFilter<"RaceHistory"> | Date | string
    economyAccountId?: StringNullableFilter<"RaceHistory"> | string | null
    economyAccount?: XOR<EconomyAccountNullableScalarRelationFilter, EconomyAccountWhereInput> | null
  }, "id">

  export type RaceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    discordId?: SortOrder
    selectedHorseIndex?: SortOrder
    selectedHorseName?: SortOrder
    betType?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    isHit?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    raceResult?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    economyAccountId?: SortOrderInput | SortOrder
    _count?: RaceHistoryCountOrderByAggregateInput
    _avg?: RaceHistoryAvgOrderByAggregateInput
    _max?: RaceHistoryMaxOrderByAggregateInput
    _min?: RaceHistoryMinOrderByAggregateInput
    _sum?: RaceHistorySumOrderByAggregateInput
  }

  export type RaceHistoryScalarWhereWithAggregatesInput = {
    AND?: RaceHistoryScalarWhereWithAggregatesInput | RaceHistoryScalarWhereWithAggregatesInput[]
    OR?: RaceHistoryScalarWhereWithAggregatesInput[]
    NOT?: RaceHistoryScalarWhereWithAggregatesInput | RaceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaceHistory"> | string
    discordId?: StringWithAggregatesFilter<"RaceHistory"> | string
    selectedHorseIndex?: IntWithAggregatesFilter<"RaceHistory"> | number
    selectedHorseName?: StringWithAggregatesFilter<"RaceHistory"> | string
    betType?: StringWithAggregatesFilter<"RaceHistory"> | string
    betAmount?: BigIntWithAggregatesFilter<"RaceHistory"> | bigint | number
    odds?: DecimalWithAggregatesFilter<"RaceHistory"> | Decimal | DecimalJsLike | number | string
    isHit?: BoolWithAggregatesFilter<"RaceHistory"> | boolean
    payout?: BigIntWithAggregatesFilter<"RaceHistory"> | bigint | number
    balanceBefore?: BigIntWithAggregatesFilter<"RaceHistory"> | bigint | number
    balanceAfter?: BigIntWithAggregatesFilter<"RaceHistory"> | bigint | number
    raceResult?: StringNullableWithAggregatesFilter<"RaceHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RaceHistory"> | Date | string
    economyAccountId?: StringNullableWithAggregatesFilter<"RaceHistory"> | string | null
  }

  export type ServerSnapshotWhereInput = {
    AND?: ServerSnapshotWhereInput | ServerSnapshotWhereInput[]
    OR?: ServerSnapshotWhereInput[]
    NOT?: ServerSnapshotWhereInput | ServerSnapshotWhereInput[]
    id?: StringFilter<"ServerSnapshot"> | string
    serverId?: StringFilter<"ServerSnapshot"> | string
    savedAt?: DateTimeFilter<"ServerSnapshot"> | Date | string
    serverName?: StringFilter<"ServerSnapshot"> | string
    serverDescription?: StringNullableFilter<"ServerSnapshot"> | string | null
    iconUrl?: StringNullableFilter<"ServerSnapshot"> | string | null
    bannerUrl?: StringNullableFilter<"ServerSnapshot"> | string | null
    ownerId?: StringFilter<"ServerSnapshot"> | string
    memberCount?: IntFilter<"ServerSnapshot"> | number
    boostCount?: IntFilter<"ServerSnapshot"> | number
    boostTier?: IntFilter<"ServerSnapshot"> | number
    channels?: StringFilter<"ServerSnapshot"> | string
    roles?: StringFilter<"ServerSnapshot"> | string
    members?: StringFilter<"ServerSnapshot"> | string
    emojis?: StringFilter<"ServerSnapshot"> | string
    stickers?: StringFilter<"ServerSnapshot"> | string
  }

  export type ServerSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    serverId?: SortOrder
    savedAt?: SortOrder
    serverName?: SortOrder
    serverDescription?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
    channels?: SortOrder
    roles?: SortOrder
    members?: SortOrder
    emojis?: SortOrder
    stickers?: SortOrder
    _relevance?: ServerSnapshotOrderByRelevanceInput
  }

  export type ServerSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServerSnapshotWhereInput | ServerSnapshotWhereInput[]
    OR?: ServerSnapshotWhereInput[]
    NOT?: ServerSnapshotWhereInput | ServerSnapshotWhereInput[]
    serverId?: StringFilter<"ServerSnapshot"> | string
    savedAt?: DateTimeFilter<"ServerSnapshot"> | Date | string
    serverName?: StringFilter<"ServerSnapshot"> | string
    serverDescription?: StringNullableFilter<"ServerSnapshot"> | string | null
    iconUrl?: StringNullableFilter<"ServerSnapshot"> | string | null
    bannerUrl?: StringNullableFilter<"ServerSnapshot"> | string | null
    ownerId?: StringFilter<"ServerSnapshot"> | string
    memberCount?: IntFilter<"ServerSnapshot"> | number
    boostCount?: IntFilter<"ServerSnapshot"> | number
    boostTier?: IntFilter<"ServerSnapshot"> | number
    channels?: StringFilter<"ServerSnapshot"> | string
    roles?: StringFilter<"ServerSnapshot"> | string
    members?: StringFilter<"ServerSnapshot"> | string
    emojis?: StringFilter<"ServerSnapshot"> | string
    stickers?: StringFilter<"ServerSnapshot"> | string
  }, "id">

  export type ServerSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    serverId?: SortOrder
    savedAt?: SortOrder
    serverName?: SortOrder
    serverDescription?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
    channels?: SortOrder
    roles?: SortOrder
    members?: SortOrder
    emojis?: SortOrder
    stickers?: SortOrder
    _count?: ServerSnapshotCountOrderByAggregateInput
    _avg?: ServerSnapshotAvgOrderByAggregateInput
    _max?: ServerSnapshotMaxOrderByAggregateInput
    _min?: ServerSnapshotMinOrderByAggregateInput
    _sum?: ServerSnapshotSumOrderByAggregateInput
  }

  export type ServerSnapshotScalarWhereWithAggregatesInput = {
    AND?: ServerSnapshotScalarWhereWithAggregatesInput | ServerSnapshotScalarWhereWithAggregatesInput[]
    OR?: ServerSnapshotScalarWhereWithAggregatesInput[]
    NOT?: ServerSnapshotScalarWhereWithAggregatesInput | ServerSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    serverId?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    savedAt?: DateTimeWithAggregatesFilter<"ServerSnapshot"> | Date | string
    serverName?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    serverDescription?: StringNullableWithAggregatesFilter<"ServerSnapshot"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"ServerSnapshot"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"ServerSnapshot"> | string | null
    ownerId?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    memberCount?: IntWithAggregatesFilter<"ServerSnapshot"> | number
    boostCount?: IntWithAggregatesFilter<"ServerSnapshot"> | number
    boostTier?: IntWithAggregatesFilter<"ServerSnapshot"> | number
    channels?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    roles?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    members?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    emojis?: StringWithAggregatesFilter<"ServerSnapshot"> | string
    stickers?: StringWithAggregatesFilter<"ServerSnapshot"> | string
  }

  export type ServerSettingCreateInput = {
    id?: string
    serverId: string
    spamBlockEnabled?: boolean
    inviteBlockEnabled?: boolean
    shortBlockEnabled?: boolean
    regexBlockEnabled?: boolean
    spamReportChannelId?: string | null
    inviteReportChannelId?: string | null
    shortReportChannelId?: string | null
    regexReportChannelId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ignoredChannels?: string | null
    ignoredRoles?: string | null
    spamIgnoredRoles?: string | null
    spamIgnoredChannels?: string | null
    inviteIgnoredRoles?: string | null
    inviteIgnoredChannels?: string | null
    shortIgnoredRoles?: string | null
    shortIgnoredChannels?: string | null
    regexIgnoredRoles?: string | null
    regexIgnoredChannels?: string | null
    honeypotChannelId?: string | null
    honeypotEnabled?: boolean
    honeypotIgnoreRole?: string | null
    honeypotReportId?: string | null
    autoReactions?: string | null
    earthquakeNotifyEnabled?: boolean
    earthquakeNotifyRole?: string | null
    earthquakeChannelId?: string | null
    earthquakeWebhookUrl?: string | null
    earthquakeNotifyScale?: number | null
    joinLeaveNotificationEnabled?: boolean
    mentionReadoutEnabled?: boolean
    mentionReadoutNameOnly?: boolean
    mentionReadoutVolume?: number
    regexPatterns?: string | null
    serverDataEnabled?: boolean
  }

  export type ServerSettingUncheckedCreateInput = {
    id?: string
    serverId: string
    spamBlockEnabled?: boolean
    inviteBlockEnabled?: boolean
    shortBlockEnabled?: boolean
    regexBlockEnabled?: boolean
    spamReportChannelId?: string | null
    inviteReportChannelId?: string | null
    shortReportChannelId?: string | null
    regexReportChannelId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ignoredChannels?: string | null
    ignoredRoles?: string | null
    spamIgnoredRoles?: string | null
    spamIgnoredChannels?: string | null
    inviteIgnoredRoles?: string | null
    inviteIgnoredChannels?: string | null
    shortIgnoredRoles?: string | null
    shortIgnoredChannels?: string | null
    regexIgnoredRoles?: string | null
    regexIgnoredChannels?: string | null
    honeypotChannelId?: string | null
    honeypotEnabled?: boolean
    honeypotIgnoreRole?: string | null
    honeypotReportId?: string | null
    autoReactions?: string | null
    earthquakeNotifyEnabled?: boolean
    earthquakeNotifyRole?: string | null
    earthquakeChannelId?: string | null
    earthquakeWebhookUrl?: string | null
    earthquakeNotifyScale?: number | null
    joinLeaveNotificationEnabled?: boolean
    mentionReadoutEnabled?: boolean
    mentionReadoutNameOnly?: boolean
    mentionReadoutVolume?: number
    regexPatterns?: string | null
    serverDataEnabled?: boolean
  }

  export type ServerSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    spamBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    inviteBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    shortBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    regexBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    spamReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    shortReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    regexReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    ignoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotEnabled?: BoolFieldUpdateOperationsInput | boolean
    honeypotIgnoreRole?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotReportId?: NullableStringFieldUpdateOperationsInput | string | null
    autoReactions?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyEnabled?: BoolFieldUpdateOperationsInput | boolean
    earthquakeNotifyRole?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeWebhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyScale?: NullableIntFieldUpdateOperationsInput | number | null
    joinLeaveNotificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutNameOnly?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutVolume?: IntFieldUpdateOperationsInput | number
    regexPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    serverDataEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServerSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    spamBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    inviteBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    shortBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    regexBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    spamReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    shortReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    regexReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    ignoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotEnabled?: BoolFieldUpdateOperationsInput | boolean
    honeypotIgnoreRole?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotReportId?: NullableStringFieldUpdateOperationsInput | string | null
    autoReactions?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyEnabled?: BoolFieldUpdateOperationsInput | boolean
    earthquakeNotifyRole?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeWebhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyScale?: NullableIntFieldUpdateOperationsInput | number | null
    joinLeaveNotificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutNameOnly?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutVolume?: IntFieldUpdateOperationsInput | number
    regexPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    serverDataEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServerSettingCreateManyInput = {
    id?: string
    serverId: string
    spamBlockEnabled?: boolean
    inviteBlockEnabled?: boolean
    shortBlockEnabled?: boolean
    regexBlockEnabled?: boolean
    spamReportChannelId?: string | null
    inviteReportChannelId?: string | null
    shortReportChannelId?: string | null
    regexReportChannelId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ignoredChannels?: string | null
    ignoredRoles?: string | null
    spamIgnoredRoles?: string | null
    spamIgnoredChannels?: string | null
    inviteIgnoredRoles?: string | null
    inviteIgnoredChannels?: string | null
    shortIgnoredRoles?: string | null
    shortIgnoredChannels?: string | null
    regexIgnoredRoles?: string | null
    regexIgnoredChannels?: string | null
    honeypotChannelId?: string | null
    honeypotEnabled?: boolean
    honeypotIgnoreRole?: string | null
    honeypotReportId?: string | null
    autoReactions?: string | null
    earthquakeNotifyEnabled?: boolean
    earthquakeNotifyRole?: string | null
    earthquakeChannelId?: string | null
    earthquakeWebhookUrl?: string | null
    earthquakeNotifyScale?: number | null
    joinLeaveNotificationEnabled?: boolean
    mentionReadoutEnabled?: boolean
    mentionReadoutNameOnly?: boolean
    mentionReadoutVolume?: number
    regexPatterns?: string | null
    serverDataEnabled?: boolean
  }

  export type ServerSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    spamBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    inviteBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    shortBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    regexBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    spamReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    shortReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    regexReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    ignoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotEnabled?: BoolFieldUpdateOperationsInput | boolean
    honeypotIgnoreRole?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotReportId?: NullableStringFieldUpdateOperationsInput | string | null
    autoReactions?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyEnabled?: BoolFieldUpdateOperationsInput | boolean
    earthquakeNotifyRole?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeWebhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyScale?: NullableIntFieldUpdateOperationsInput | number | null
    joinLeaveNotificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutNameOnly?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutVolume?: IntFieldUpdateOperationsInput | number
    regexPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    serverDataEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServerSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    spamBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    inviteBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    shortBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    regexBlockEnabled?: BoolFieldUpdateOperationsInput | boolean
    spamReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    shortReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    regexReportChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    ignoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    spamIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    inviteIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    shortIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredRoles?: NullableStringFieldUpdateOperationsInput | string | null
    regexIgnoredChannels?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotEnabled?: BoolFieldUpdateOperationsInput | boolean
    honeypotIgnoreRole?: NullableStringFieldUpdateOperationsInput | string | null
    honeypotReportId?: NullableStringFieldUpdateOperationsInput | string | null
    autoReactions?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyEnabled?: BoolFieldUpdateOperationsInput | boolean
    earthquakeNotifyRole?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeWebhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    earthquakeNotifyScale?: NullableIntFieldUpdateOperationsInput | number | null
    joinLeaveNotificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutNameOnly?: BoolFieldUpdateOperationsInput | boolean
    mentionReadoutVolume?: IntFieldUpdateOperationsInput | number
    regexPatterns?: NullableStringFieldUpdateOperationsInput | string | null
    serverDataEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateInput = {
    id?: string
    providerId: string
    accountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    providerId: string
    accountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    providerId: string
    accountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurvivalRankingCreateInput = {
    userId: string
    username: string
    bestDays?: number
    updatedAt: Date | string
  }

  export type SurvivalRankingUncheckedCreateInput = {
    userId: string
    username: string
    bestDays?: number
    updatedAt: Date | string
  }

  export type SurvivalRankingUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bestDays?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalRankingUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bestDays?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalRankingCreateManyInput = {
    userId: string
    username: string
    bestDays?: number
    updatedAt: Date | string
  }

  export type SurvivalRankingUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bestDays?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalRankingUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bestDays?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyAffiliationCreateInput = {
    id?: string
    name: string
    description?: string | null
    enabled?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: EconomyAccountCreateNestedManyWithoutAffiliationInput
  }

  export type EconomyAffiliationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    enabled?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: EconomyAccountUncheckedCreateNestedManyWithoutAffiliationInput
  }

  export type EconomyAffiliationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: EconomyAccountUpdateManyWithoutAffiliationNestedInput
  }

  export type EconomyAffiliationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: EconomyAccountUncheckedUpdateManyWithoutAffiliationNestedInput
  }

  export type EconomyAffiliationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    enabled?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EconomyAffiliationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyAffiliationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyAccountCreateInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliation?: EconomyAffiliationCreateNestedOneWithoutAccountsInput
    economyLogs?: EconomyLogCreateNestedManyWithoutEconomyAccountInput
    raceHistories?: RaceHistoryCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountUncheckedCreateInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    affiliationId?: string | null
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    economyLogs?: EconomyLogUncheckedCreateNestedManyWithoutEconomyAccountInput
    raceHistories?: RaceHistoryUncheckedCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliation?: EconomyAffiliationUpdateOneWithoutAccountsNestedInput
    economyLogs?: EconomyLogUpdateManyWithoutEconomyAccountNestedInput
    raceHistories?: RaceHistoryUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyLogs?: EconomyLogUncheckedUpdateManyWithoutEconomyAccountNestedInput
    raceHistories?: RaceHistoryUncheckedUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountCreateManyInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    affiliationId?: string | null
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EconomyAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogCreateInput = {
    id?: string
    discordId: string
    eventType: string
    amount?: bigint | number
    balanceBefore?: bigint | number
    balanceAfter?: bigint | number
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
    economyAccount?: EconomyAccountCreateNestedOneWithoutEconomyLogsInput
  }

  export type EconomyLogUncheckedCreateInput = {
    id?: string
    discordId: string
    accountId?: string | null
    eventType: string
    amount?: bigint | number
    balanceBefore?: bigint | number
    balanceAfter?: bigint | number
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyAccount?: EconomyAccountUpdateOneWithoutEconomyLogsNestedInput
  }

  export type EconomyLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogCreateManyInput = {
    id?: string
    discordId: string
    accountId?: string | null
    eventType: string
    amount?: bigint | number
    balanceBefore?: bigint | number
    balanceAfter?: bigint | number
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceHistoryCreateInput = {
    id?: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint | number
    odds: Decimal | DecimalJsLike | number | string
    isHit: boolean
    payout: bigint | number
    balanceBefore: bigint | number
    balanceAfter: bigint | number
    raceResult?: string | null
    createdAt?: Date | string
    economyAccount?: EconomyAccountCreateNestedOneWithoutRaceHistoriesInput
  }

  export type RaceHistoryUncheckedCreateInput = {
    id?: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint | number
    odds: Decimal | DecimalJsLike | number | string
    isHit: boolean
    payout: bigint | number
    balanceBefore: bigint | number
    balanceAfter: bigint | number
    raceResult?: string | null
    createdAt?: Date | string
    economyAccountId?: string | null
  }

  export type RaceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyAccount?: EconomyAccountUpdateOneWithoutRaceHistoriesNestedInput
  }

  export type RaceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceHistoryCreateManyInput = {
    id?: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint | number
    odds: Decimal | DecimalJsLike | number | string
    isHit: boolean
    payout: bigint | number
    balanceBefore: bigint | number
    balanceAfter: bigint | number
    raceResult?: string | null
    createdAt?: Date | string
    economyAccountId?: string | null
  }

  export type RaceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServerSnapshotCreateInput = {
    id?: string
    serverId: string
    savedAt?: Date | string
    serverName: string
    serverDescription?: string | null
    iconUrl?: string | null
    bannerUrl?: string | null
    ownerId: string
    memberCount: number
    boostCount?: number
    boostTier?: number
    channels: string
    roles: string
    members: string
    emojis: string
    stickers: string
  }

  export type ServerSnapshotUncheckedCreateInput = {
    id?: string
    serverId: string
    savedAt?: Date | string
    serverName: string
    serverDescription?: string | null
    iconUrl?: string | null
    bannerUrl?: string | null
    ownerId: string
    memberCount: number
    boostCount?: number
    boostTier?: number
    channels: string
    roles: string
    members: string
    emojis: string
    stickers: string
  }

  export type ServerSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serverName?: StringFieldUpdateOperationsInput | string
    serverDescription?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    boostCount?: IntFieldUpdateOperationsInput | number
    boostTier?: IntFieldUpdateOperationsInput | number
    channels?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    emojis?: StringFieldUpdateOperationsInput | string
    stickers?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serverName?: StringFieldUpdateOperationsInput | string
    serverDescription?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    boostCount?: IntFieldUpdateOperationsInput | number
    boostTier?: IntFieldUpdateOperationsInput | number
    channels?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    emojis?: StringFieldUpdateOperationsInput | string
    stickers?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSnapshotCreateManyInput = {
    id?: string
    serverId: string
    savedAt?: Date | string
    serverName: string
    serverDescription?: string | null
    iconUrl?: string | null
    bannerUrl?: string | null
    ownerId: string
    memberCount: number
    boostCount?: number
    boostTier?: number
    channels: string
    roles: string
    members: string
    emojis: string
    stickers: string
  }

  export type ServerSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serverName?: StringFieldUpdateOperationsInput | string
    serverDescription?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    boostCount?: IntFieldUpdateOperationsInput | number
    boostTier?: IntFieldUpdateOperationsInput | number
    channels?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    emojis?: StringFieldUpdateOperationsInput | string
    stickers?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serverName?: StringFieldUpdateOperationsInput | string
    serverDescription?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    boostCount?: IntFieldUpdateOperationsInput | number
    boostTier?: IntFieldUpdateOperationsInput | number
    channels?: StringFieldUpdateOperationsInput | string
    roles?: StringFieldUpdateOperationsInput | string
    members?: StringFieldUpdateOperationsInput | string
    emojis?: StringFieldUpdateOperationsInput | string
    stickers?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServerSettingOrderByRelevanceInput = {
    fields: ServerSettingOrderByRelevanceFieldEnum | ServerSettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServerSettingCountOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    spamBlockEnabled?: SortOrder
    inviteBlockEnabled?: SortOrder
    shortBlockEnabled?: SortOrder
    regexBlockEnabled?: SortOrder
    spamReportChannelId?: SortOrder
    inviteReportChannelId?: SortOrder
    shortReportChannelId?: SortOrder
    regexReportChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ignoredChannels?: SortOrder
    ignoredRoles?: SortOrder
    spamIgnoredRoles?: SortOrder
    spamIgnoredChannels?: SortOrder
    inviteIgnoredRoles?: SortOrder
    inviteIgnoredChannels?: SortOrder
    shortIgnoredRoles?: SortOrder
    shortIgnoredChannels?: SortOrder
    regexIgnoredRoles?: SortOrder
    regexIgnoredChannels?: SortOrder
    honeypotChannelId?: SortOrder
    honeypotEnabled?: SortOrder
    honeypotIgnoreRole?: SortOrder
    honeypotReportId?: SortOrder
    autoReactions?: SortOrder
    earthquakeNotifyEnabled?: SortOrder
    earthquakeNotifyRole?: SortOrder
    earthquakeChannelId?: SortOrder
    earthquakeWebhookUrl?: SortOrder
    earthquakeNotifyScale?: SortOrder
    joinLeaveNotificationEnabled?: SortOrder
    mentionReadoutEnabled?: SortOrder
    mentionReadoutNameOnly?: SortOrder
    mentionReadoutVolume?: SortOrder
    regexPatterns?: SortOrder
    serverDataEnabled?: SortOrder
  }

  export type ServerSettingAvgOrderByAggregateInput = {
    earthquakeNotifyScale?: SortOrder
    mentionReadoutVolume?: SortOrder
  }

  export type ServerSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    spamBlockEnabled?: SortOrder
    inviteBlockEnabled?: SortOrder
    shortBlockEnabled?: SortOrder
    regexBlockEnabled?: SortOrder
    spamReportChannelId?: SortOrder
    inviteReportChannelId?: SortOrder
    shortReportChannelId?: SortOrder
    regexReportChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ignoredChannels?: SortOrder
    ignoredRoles?: SortOrder
    spamIgnoredRoles?: SortOrder
    spamIgnoredChannels?: SortOrder
    inviteIgnoredRoles?: SortOrder
    inviteIgnoredChannels?: SortOrder
    shortIgnoredRoles?: SortOrder
    shortIgnoredChannels?: SortOrder
    regexIgnoredRoles?: SortOrder
    regexIgnoredChannels?: SortOrder
    honeypotChannelId?: SortOrder
    honeypotEnabled?: SortOrder
    honeypotIgnoreRole?: SortOrder
    honeypotReportId?: SortOrder
    autoReactions?: SortOrder
    earthquakeNotifyEnabled?: SortOrder
    earthquakeNotifyRole?: SortOrder
    earthquakeChannelId?: SortOrder
    earthquakeWebhookUrl?: SortOrder
    earthquakeNotifyScale?: SortOrder
    joinLeaveNotificationEnabled?: SortOrder
    mentionReadoutEnabled?: SortOrder
    mentionReadoutNameOnly?: SortOrder
    mentionReadoutVolume?: SortOrder
    regexPatterns?: SortOrder
    serverDataEnabled?: SortOrder
  }

  export type ServerSettingMinOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    spamBlockEnabled?: SortOrder
    inviteBlockEnabled?: SortOrder
    shortBlockEnabled?: SortOrder
    regexBlockEnabled?: SortOrder
    spamReportChannelId?: SortOrder
    inviteReportChannelId?: SortOrder
    shortReportChannelId?: SortOrder
    regexReportChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ignoredChannels?: SortOrder
    ignoredRoles?: SortOrder
    spamIgnoredRoles?: SortOrder
    spamIgnoredChannels?: SortOrder
    inviteIgnoredRoles?: SortOrder
    inviteIgnoredChannels?: SortOrder
    shortIgnoredRoles?: SortOrder
    shortIgnoredChannels?: SortOrder
    regexIgnoredRoles?: SortOrder
    regexIgnoredChannels?: SortOrder
    honeypotChannelId?: SortOrder
    honeypotEnabled?: SortOrder
    honeypotIgnoreRole?: SortOrder
    honeypotReportId?: SortOrder
    autoReactions?: SortOrder
    earthquakeNotifyEnabled?: SortOrder
    earthquakeNotifyRole?: SortOrder
    earthquakeChannelId?: SortOrder
    earthquakeWebhookUrl?: SortOrder
    earthquakeNotifyScale?: SortOrder
    joinLeaveNotificationEnabled?: SortOrder
    mentionReadoutEnabled?: SortOrder
    mentionReadoutNameOnly?: SortOrder
    mentionReadoutVolume?: SortOrder
    regexPatterns?: SortOrder
    serverDataEnabled?: SortOrder
  }

  export type ServerSettingSumOrderByAggregateInput = {
    earthquakeNotifyScale?: SortOrder
    mentionReadoutVolume?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerId?: SortOrder
    accountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationOrderByRelevanceInput = {
    fields: VerificationOrderByRelevanceFieldEnum | VerificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurvivalRankingOrderByRelevanceInput = {
    fields: SurvivalRankingOrderByRelevanceFieldEnum | SurvivalRankingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SurvivalRankingCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    bestDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurvivalRankingAvgOrderByAggregateInput = {
    bestDays?: SortOrder
  }

  export type SurvivalRankingMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    bestDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurvivalRankingMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    bestDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type SurvivalRankingSumOrderByAggregateInput = {
    bestDays?: SortOrder
  }

  export type EconomyAccountListRelationFilter = {
    every?: EconomyAccountWhereInput
    some?: EconomyAccountWhereInput
    none?: EconomyAccountWhereInput
  }

  export type EconomyAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EconomyAffiliationOrderByRelevanceInput = {
    fields: EconomyAffiliationOrderByRelevanceFieldEnum | EconomyAffiliationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EconomyAffiliationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EconomyAffiliationAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EconomyAffiliationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EconomyAffiliationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EconomyAffiliationSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EconomyAffiliationNullableScalarRelationFilter = {
    is?: EconomyAffiliationWhereInput | null
    isNot?: EconomyAffiliationWhereInput | null
  }

  export type EconomyLogListRelationFilter = {
    every?: EconomyLogWhereInput
    some?: EconomyLogWhereInput
    none?: EconomyLogWhereInput
  }

  export type RaceHistoryListRelationFilter = {
    every?: RaceHistoryWhereInput
    some?: RaceHistoryWhereInput
    none?: RaceHistoryWhereInput
  }

  export type EconomyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EconomyAccountOrderByRelevanceInput = {
    fields: EconomyAccountOrderByRelevanceFieldEnum | EconomyAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EconomyAccountCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    affiliationName?: SortOrder
    affiliationId?: SortOrder
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    birthday?: SortOrder
    lastWorkAt?: SortOrder
    inventory?: SortOrder
    lastBirthdayBonusYear?: SortOrder
    lastSchoolAt?: SortOrder
    schoolAttendanceCount?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EconomyAccountAvgOrderByAggregateInput = {
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    lastBirthdayBonusYear?: SortOrder
    schoolAttendanceCount?: SortOrder
  }

  export type EconomyAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    affiliationName?: SortOrder
    affiliationId?: SortOrder
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    birthday?: SortOrder
    lastWorkAt?: SortOrder
    inventory?: SortOrder
    lastBirthdayBonusYear?: SortOrder
    lastSchoolAt?: SortOrder
    schoolAttendanceCount?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EconomyAccountMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    affiliationName?: SortOrder
    affiliationId?: SortOrder
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    birthday?: SortOrder
    lastWorkAt?: SortOrder
    inventory?: SortOrder
    lastBirthdayBonusYear?: SortOrder
    lastSchoolAt?: SortOrder
    schoolAttendanceCount?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EconomyAccountSumOrderByAggregateInput = {
    coins?: SortOrder
    intelligenceLevel?: SortOrder
    satiation?: SortOrder
    happiness?: SortOrder
    lastBirthdayBonusYear?: SortOrder
    schoolAttendanceCount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EconomyAccountNullableScalarRelationFilter = {
    is?: EconomyAccountWhereInput | null
    isNot?: EconomyAccountWhereInput | null
  }

  export type EconomyLogOrderByRelevanceInput = {
    fields: EconomyLogOrderByRelevanceFieldEnum | EconomyLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EconomyLogCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    accountId?: SortOrder
    eventType?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EconomyLogAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EconomyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    accountId?: SortOrder
    eventType?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EconomyLogMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    accountId?: SortOrder
    eventType?: SortOrder
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EconomyLogSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RaceHistoryOrderByRelevanceInput = {
    fields: RaceHistoryOrderByRelevanceFieldEnum | RaceHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RaceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    selectedHorseIndex?: SortOrder
    selectedHorseName?: SortOrder
    betType?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    isHit?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    raceResult?: SortOrder
    createdAt?: SortOrder
    economyAccountId?: SortOrder
  }

  export type RaceHistoryAvgOrderByAggregateInput = {
    selectedHorseIndex?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type RaceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    selectedHorseIndex?: SortOrder
    selectedHorseName?: SortOrder
    betType?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    isHit?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    raceResult?: SortOrder
    createdAt?: SortOrder
    economyAccountId?: SortOrder
  }

  export type RaceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    discordId?: SortOrder
    selectedHorseIndex?: SortOrder
    selectedHorseName?: SortOrder
    betType?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    isHit?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
    raceResult?: SortOrder
    createdAt?: SortOrder
    economyAccountId?: SortOrder
  }

  export type RaceHistorySumOrderByAggregateInput = {
    selectedHorseIndex?: SortOrder
    betAmount?: SortOrder
    odds?: SortOrder
    payout?: SortOrder
    balanceBefore?: SortOrder
    balanceAfter?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ServerSnapshotOrderByRelevanceInput = {
    fields: ServerSnapshotOrderByRelevanceFieldEnum | ServerSnapshotOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServerSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    savedAt?: SortOrder
    serverName?: SortOrder
    serverDescription?: SortOrder
    iconUrl?: SortOrder
    bannerUrl?: SortOrder
    ownerId?: SortOrder
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
    channels?: SortOrder
    roles?: SortOrder
    members?: SortOrder
    emojis?: SortOrder
    stickers?: SortOrder
  }

  export type ServerSnapshotAvgOrderByAggregateInput = {
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
  }

  export type ServerSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    savedAt?: SortOrder
    serverName?: SortOrder
    serverDescription?: SortOrder
    iconUrl?: SortOrder
    bannerUrl?: SortOrder
    ownerId?: SortOrder
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
    channels?: SortOrder
    roles?: SortOrder
    members?: SortOrder
    emojis?: SortOrder
    stickers?: SortOrder
  }

  export type ServerSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    savedAt?: SortOrder
    serverName?: SortOrder
    serverDescription?: SortOrder
    iconUrl?: SortOrder
    bannerUrl?: SortOrder
    ownerId?: SortOrder
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
    channels?: SortOrder
    roles?: SortOrder
    members?: SortOrder
    emojis?: SortOrder
    stickers?: SortOrder
  }

  export type ServerSnapshotSumOrderByAggregateInput = {
    memberCount?: SortOrder
    boostCount?: SortOrder
    boostTier?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EconomyAccountCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<EconomyAccountCreateWithoutAffiliationInput, EconomyAccountUncheckedCreateWithoutAffiliationInput> | EconomyAccountCreateWithoutAffiliationInput[] | EconomyAccountUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutAffiliationInput | EconomyAccountCreateOrConnectWithoutAffiliationInput[]
    createMany?: EconomyAccountCreateManyAffiliationInputEnvelope
    connect?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
  }

  export type EconomyAccountUncheckedCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<EconomyAccountCreateWithoutAffiliationInput, EconomyAccountUncheckedCreateWithoutAffiliationInput> | EconomyAccountCreateWithoutAffiliationInput[] | EconomyAccountUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutAffiliationInput | EconomyAccountCreateOrConnectWithoutAffiliationInput[]
    createMany?: EconomyAccountCreateManyAffiliationInputEnvelope
    connect?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
  }

  export type EconomyAccountUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<EconomyAccountCreateWithoutAffiliationInput, EconomyAccountUncheckedCreateWithoutAffiliationInput> | EconomyAccountCreateWithoutAffiliationInput[] | EconomyAccountUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutAffiliationInput | EconomyAccountCreateOrConnectWithoutAffiliationInput[]
    upsert?: EconomyAccountUpsertWithWhereUniqueWithoutAffiliationInput | EconomyAccountUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: EconomyAccountCreateManyAffiliationInputEnvelope
    set?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    disconnect?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    delete?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    connect?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    update?: EconomyAccountUpdateWithWhereUniqueWithoutAffiliationInput | EconomyAccountUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: EconomyAccountUpdateManyWithWhereWithoutAffiliationInput | EconomyAccountUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: EconomyAccountScalarWhereInput | EconomyAccountScalarWhereInput[]
  }

  export type EconomyAccountUncheckedUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<EconomyAccountCreateWithoutAffiliationInput, EconomyAccountUncheckedCreateWithoutAffiliationInput> | EconomyAccountCreateWithoutAffiliationInput[] | EconomyAccountUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutAffiliationInput | EconomyAccountCreateOrConnectWithoutAffiliationInput[]
    upsert?: EconomyAccountUpsertWithWhereUniqueWithoutAffiliationInput | EconomyAccountUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: EconomyAccountCreateManyAffiliationInputEnvelope
    set?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    disconnect?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    delete?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    connect?: EconomyAccountWhereUniqueInput | EconomyAccountWhereUniqueInput[]
    update?: EconomyAccountUpdateWithWhereUniqueWithoutAffiliationInput | EconomyAccountUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: EconomyAccountUpdateManyWithWhereWithoutAffiliationInput | EconomyAccountUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: EconomyAccountScalarWhereInput | EconomyAccountScalarWhereInput[]
  }

  export type EconomyAffiliationCreateNestedOneWithoutAccountsInput = {
    create?: XOR<EconomyAffiliationCreateWithoutAccountsInput, EconomyAffiliationUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: EconomyAffiliationCreateOrConnectWithoutAccountsInput
    connect?: EconomyAffiliationWhereUniqueInput
  }

  export type EconomyLogCreateNestedManyWithoutEconomyAccountInput = {
    create?: XOR<EconomyLogCreateWithoutEconomyAccountInput, EconomyLogUncheckedCreateWithoutEconomyAccountInput> | EconomyLogCreateWithoutEconomyAccountInput[] | EconomyLogUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: EconomyLogCreateOrConnectWithoutEconomyAccountInput | EconomyLogCreateOrConnectWithoutEconomyAccountInput[]
    createMany?: EconomyLogCreateManyEconomyAccountInputEnvelope
    connect?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
  }

  export type RaceHistoryCreateNestedManyWithoutEconomyAccountInput = {
    create?: XOR<RaceHistoryCreateWithoutEconomyAccountInput, RaceHistoryUncheckedCreateWithoutEconomyAccountInput> | RaceHistoryCreateWithoutEconomyAccountInput[] | RaceHistoryUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: RaceHistoryCreateOrConnectWithoutEconomyAccountInput | RaceHistoryCreateOrConnectWithoutEconomyAccountInput[]
    createMany?: RaceHistoryCreateManyEconomyAccountInputEnvelope
    connect?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
  }

  export type EconomyLogUncheckedCreateNestedManyWithoutEconomyAccountInput = {
    create?: XOR<EconomyLogCreateWithoutEconomyAccountInput, EconomyLogUncheckedCreateWithoutEconomyAccountInput> | EconomyLogCreateWithoutEconomyAccountInput[] | EconomyLogUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: EconomyLogCreateOrConnectWithoutEconomyAccountInput | EconomyLogCreateOrConnectWithoutEconomyAccountInput[]
    createMany?: EconomyLogCreateManyEconomyAccountInputEnvelope
    connect?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
  }

  export type RaceHistoryUncheckedCreateNestedManyWithoutEconomyAccountInput = {
    create?: XOR<RaceHistoryCreateWithoutEconomyAccountInput, RaceHistoryUncheckedCreateWithoutEconomyAccountInput> | RaceHistoryCreateWithoutEconomyAccountInput[] | RaceHistoryUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: RaceHistoryCreateOrConnectWithoutEconomyAccountInput | RaceHistoryCreateOrConnectWithoutEconomyAccountInput[]
    createMany?: RaceHistoryCreateManyEconomyAccountInputEnvelope
    connect?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EconomyAffiliationUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<EconomyAffiliationCreateWithoutAccountsInput, EconomyAffiliationUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: EconomyAffiliationCreateOrConnectWithoutAccountsInput
    upsert?: EconomyAffiliationUpsertWithoutAccountsInput
    disconnect?: EconomyAffiliationWhereInput | boolean
    delete?: EconomyAffiliationWhereInput | boolean
    connect?: EconomyAffiliationWhereUniqueInput
    update?: XOR<XOR<EconomyAffiliationUpdateToOneWithWhereWithoutAccountsInput, EconomyAffiliationUpdateWithoutAccountsInput>, EconomyAffiliationUncheckedUpdateWithoutAccountsInput>
  }

  export type EconomyLogUpdateManyWithoutEconomyAccountNestedInput = {
    create?: XOR<EconomyLogCreateWithoutEconomyAccountInput, EconomyLogUncheckedCreateWithoutEconomyAccountInput> | EconomyLogCreateWithoutEconomyAccountInput[] | EconomyLogUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: EconomyLogCreateOrConnectWithoutEconomyAccountInput | EconomyLogCreateOrConnectWithoutEconomyAccountInput[]
    upsert?: EconomyLogUpsertWithWhereUniqueWithoutEconomyAccountInput | EconomyLogUpsertWithWhereUniqueWithoutEconomyAccountInput[]
    createMany?: EconomyLogCreateManyEconomyAccountInputEnvelope
    set?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    disconnect?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    delete?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    connect?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    update?: EconomyLogUpdateWithWhereUniqueWithoutEconomyAccountInput | EconomyLogUpdateWithWhereUniqueWithoutEconomyAccountInput[]
    updateMany?: EconomyLogUpdateManyWithWhereWithoutEconomyAccountInput | EconomyLogUpdateManyWithWhereWithoutEconomyAccountInput[]
    deleteMany?: EconomyLogScalarWhereInput | EconomyLogScalarWhereInput[]
  }

  export type RaceHistoryUpdateManyWithoutEconomyAccountNestedInput = {
    create?: XOR<RaceHistoryCreateWithoutEconomyAccountInput, RaceHistoryUncheckedCreateWithoutEconomyAccountInput> | RaceHistoryCreateWithoutEconomyAccountInput[] | RaceHistoryUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: RaceHistoryCreateOrConnectWithoutEconomyAccountInput | RaceHistoryCreateOrConnectWithoutEconomyAccountInput[]
    upsert?: RaceHistoryUpsertWithWhereUniqueWithoutEconomyAccountInput | RaceHistoryUpsertWithWhereUniqueWithoutEconomyAccountInput[]
    createMany?: RaceHistoryCreateManyEconomyAccountInputEnvelope
    set?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    disconnect?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    delete?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    connect?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    update?: RaceHistoryUpdateWithWhereUniqueWithoutEconomyAccountInput | RaceHistoryUpdateWithWhereUniqueWithoutEconomyAccountInput[]
    updateMany?: RaceHistoryUpdateManyWithWhereWithoutEconomyAccountInput | RaceHistoryUpdateManyWithWhereWithoutEconomyAccountInput[]
    deleteMany?: RaceHistoryScalarWhereInput | RaceHistoryScalarWhereInput[]
  }

  export type EconomyLogUncheckedUpdateManyWithoutEconomyAccountNestedInput = {
    create?: XOR<EconomyLogCreateWithoutEconomyAccountInput, EconomyLogUncheckedCreateWithoutEconomyAccountInput> | EconomyLogCreateWithoutEconomyAccountInput[] | EconomyLogUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: EconomyLogCreateOrConnectWithoutEconomyAccountInput | EconomyLogCreateOrConnectWithoutEconomyAccountInput[]
    upsert?: EconomyLogUpsertWithWhereUniqueWithoutEconomyAccountInput | EconomyLogUpsertWithWhereUniqueWithoutEconomyAccountInput[]
    createMany?: EconomyLogCreateManyEconomyAccountInputEnvelope
    set?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    disconnect?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    delete?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    connect?: EconomyLogWhereUniqueInput | EconomyLogWhereUniqueInput[]
    update?: EconomyLogUpdateWithWhereUniqueWithoutEconomyAccountInput | EconomyLogUpdateWithWhereUniqueWithoutEconomyAccountInput[]
    updateMany?: EconomyLogUpdateManyWithWhereWithoutEconomyAccountInput | EconomyLogUpdateManyWithWhereWithoutEconomyAccountInput[]
    deleteMany?: EconomyLogScalarWhereInput | EconomyLogScalarWhereInput[]
  }

  export type RaceHistoryUncheckedUpdateManyWithoutEconomyAccountNestedInput = {
    create?: XOR<RaceHistoryCreateWithoutEconomyAccountInput, RaceHistoryUncheckedCreateWithoutEconomyAccountInput> | RaceHistoryCreateWithoutEconomyAccountInput[] | RaceHistoryUncheckedCreateWithoutEconomyAccountInput[]
    connectOrCreate?: RaceHistoryCreateOrConnectWithoutEconomyAccountInput | RaceHistoryCreateOrConnectWithoutEconomyAccountInput[]
    upsert?: RaceHistoryUpsertWithWhereUniqueWithoutEconomyAccountInput | RaceHistoryUpsertWithWhereUniqueWithoutEconomyAccountInput[]
    createMany?: RaceHistoryCreateManyEconomyAccountInputEnvelope
    set?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    disconnect?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    delete?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    connect?: RaceHistoryWhereUniqueInput | RaceHistoryWhereUniqueInput[]
    update?: RaceHistoryUpdateWithWhereUniqueWithoutEconomyAccountInput | RaceHistoryUpdateWithWhereUniqueWithoutEconomyAccountInput[]
    updateMany?: RaceHistoryUpdateManyWithWhereWithoutEconomyAccountInput | RaceHistoryUpdateManyWithWhereWithoutEconomyAccountInput[]
    deleteMany?: RaceHistoryScalarWhereInput | RaceHistoryScalarWhereInput[]
  }

  export type EconomyAccountCreateNestedOneWithoutEconomyLogsInput = {
    create?: XOR<EconomyAccountCreateWithoutEconomyLogsInput, EconomyAccountUncheckedCreateWithoutEconomyLogsInput>
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutEconomyLogsInput
    connect?: EconomyAccountWhereUniqueInput
  }

  export type EconomyAccountUpdateOneWithoutEconomyLogsNestedInput = {
    create?: XOR<EconomyAccountCreateWithoutEconomyLogsInput, EconomyAccountUncheckedCreateWithoutEconomyLogsInput>
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutEconomyLogsInput
    upsert?: EconomyAccountUpsertWithoutEconomyLogsInput
    disconnect?: EconomyAccountWhereInput | boolean
    delete?: EconomyAccountWhereInput | boolean
    connect?: EconomyAccountWhereUniqueInput
    update?: XOR<XOR<EconomyAccountUpdateToOneWithWhereWithoutEconomyLogsInput, EconomyAccountUpdateWithoutEconomyLogsInput>, EconomyAccountUncheckedUpdateWithoutEconomyLogsInput>
  }

  export type EconomyAccountCreateNestedOneWithoutRaceHistoriesInput = {
    create?: XOR<EconomyAccountCreateWithoutRaceHistoriesInput, EconomyAccountUncheckedCreateWithoutRaceHistoriesInput>
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutRaceHistoriesInput
    connect?: EconomyAccountWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EconomyAccountUpdateOneWithoutRaceHistoriesNestedInput = {
    create?: XOR<EconomyAccountCreateWithoutRaceHistoriesInput, EconomyAccountUncheckedCreateWithoutRaceHistoriesInput>
    connectOrCreate?: EconomyAccountCreateOrConnectWithoutRaceHistoriesInput
    upsert?: EconomyAccountUpsertWithoutRaceHistoriesInput
    disconnect?: EconomyAccountWhereInput | boolean
    delete?: EconomyAccountWhereInput | boolean
    connect?: EconomyAccountWhereUniqueInput
    update?: XOR<XOR<EconomyAccountUpdateToOneWithWhereWithoutRaceHistoriesInput, EconomyAccountUpdateWithoutRaceHistoriesInput>, EconomyAccountUncheckedUpdateWithoutRaceHistoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    providerId: string
    accountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    providerId: string
    accountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type EconomyAccountCreateWithoutAffiliationInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    economyLogs?: EconomyLogCreateNestedManyWithoutEconomyAccountInput
    raceHistories?: RaceHistoryCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountUncheckedCreateWithoutAffiliationInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    economyLogs?: EconomyLogUncheckedCreateNestedManyWithoutEconomyAccountInput
    raceHistories?: RaceHistoryUncheckedCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountCreateOrConnectWithoutAffiliationInput = {
    where: EconomyAccountWhereUniqueInput
    create: XOR<EconomyAccountCreateWithoutAffiliationInput, EconomyAccountUncheckedCreateWithoutAffiliationInput>
  }

  export type EconomyAccountCreateManyAffiliationInputEnvelope = {
    data: EconomyAccountCreateManyAffiliationInput | EconomyAccountCreateManyAffiliationInput[]
    skipDuplicates?: boolean
  }

  export type EconomyAccountUpsertWithWhereUniqueWithoutAffiliationInput = {
    where: EconomyAccountWhereUniqueInput
    update: XOR<EconomyAccountUpdateWithoutAffiliationInput, EconomyAccountUncheckedUpdateWithoutAffiliationInput>
    create: XOR<EconomyAccountCreateWithoutAffiliationInput, EconomyAccountUncheckedCreateWithoutAffiliationInput>
  }

  export type EconomyAccountUpdateWithWhereUniqueWithoutAffiliationInput = {
    where: EconomyAccountWhereUniqueInput
    data: XOR<EconomyAccountUpdateWithoutAffiliationInput, EconomyAccountUncheckedUpdateWithoutAffiliationInput>
  }

  export type EconomyAccountUpdateManyWithWhereWithoutAffiliationInput = {
    where: EconomyAccountScalarWhereInput
    data: XOR<EconomyAccountUpdateManyMutationInput, EconomyAccountUncheckedUpdateManyWithoutAffiliationInput>
  }

  export type EconomyAccountScalarWhereInput = {
    AND?: EconomyAccountScalarWhereInput | EconomyAccountScalarWhereInput[]
    OR?: EconomyAccountScalarWhereInput[]
    NOT?: EconomyAccountScalarWhereInput | EconomyAccountScalarWhereInput[]
    id?: StringFilter<"EconomyAccount"> | string
    discordId?: StringFilter<"EconomyAccount"> | string
    name?: StringFilter<"EconomyAccount"> | string
    image?: StringNullableFilter<"EconomyAccount"> | string | null
    affiliationName?: StringFilter<"EconomyAccount"> | string
    affiliationId?: StringNullableFilter<"EconomyAccount"> | string | null
    coins?: BigIntFilter<"EconomyAccount"> | bigint | number
    intelligenceLevel?: IntFilter<"EconomyAccount"> | number
    satiation?: IntFilter<"EconomyAccount"> | number
    happiness?: IntFilter<"EconomyAccount"> | number
    birthday?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    lastWorkAt?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    inventory?: StringNullableFilter<"EconomyAccount"> | string | null
    lastBirthdayBonusYear?: IntNullableFilter<"EconomyAccount"> | number | null
    lastSchoolAt?: DateTimeNullableFilter<"EconomyAccount"> | Date | string | null
    schoolAttendanceCount?: IntFilter<"EconomyAccount"> | number
    status?: StringFilter<"EconomyAccount"> | string
    ipAddress?: StringNullableFilter<"EconomyAccount"> | string | null
    createdAt?: DateTimeFilter<"EconomyAccount"> | Date | string
    updatedAt?: DateTimeFilter<"EconomyAccount"> | Date | string
  }

  export type EconomyAffiliationCreateWithoutAccountsInput = {
    id?: string
    name: string
    description?: string | null
    enabled?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EconomyAffiliationUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    description?: string | null
    enabled?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EconomyAffiliationCreateOrConnectWithoutAccountsInput = {
    where: EconomyAffiliationWhereUniqueInput
    create: XOR<EconomyAffiliationCreateWithoutAccountsInput, EconomyAffiliationUncheckedCreateWithoutAccountsInput>
  }

  export type EconomyLogCreateWithoutEconomyAccountInput = {
    id?: string
    discordId: string
    eventType: string
    amount?: bigint | number
    balanceBefore?: bigint | number
    balanceAfter?: bigint | number
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyLogUncheckedCreateWithoutEconomyAccountInput = {
    id?: string
    discordId: string
    eventType: string
    amount?: bigint | number
    balanceBefore?: bigint | number
    balanceAfter?: bigint | number
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type EconomyLogCreateOrConnectWithoutEconomyAccountInput = {
    where: EconomyLogWhereUniqueInput
    create: XOR<EconomyLogCreateWithoutEconomyAccountInput, EconomyLogUncheckedCreateWithoutEconomyAccountInput>
  }

  export type EconomyLogCreateManyEconomyAccountInputEnvelope = {
    data: EconomyLogCreateManyEconomyAccountInput | EconomyLogCreateManyEconomyAccountInput[]
    skipDuplicates?: boolean
  }

  export type RaceHistoryCreateWithoutEconomyAccountInput = {
    id?: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint | number
    odds: Decimal | DecimalJsLike | number | string
    isHit: boolean
    payout: bigint | number
    balanceBefore: bigint | number
    balanceAfter: bigint | number
    raceResult?: string | null
    createdAt?: Date | string
  }

  export type RaceHistoryUncheckedCreateWithoutEconomyAccountInput = {
    id?: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint | number
    odds: Decimal | DecimalJsLike | number | string
    isHit: boolean
    payout: bigint | number
    balanceBefore: bigint | number
    balanceAfter: bigint | number
    raceResult?: string | null
    createdAt?: Date | string
  }

  export type RaceHistoryCreateOrConnectWithoutEconomyAccountInput = {
    where: RaceHistoryWhereUniqueInput
    create: XOR<RaceHistoryCreateWithoutEconomyAccountInput, RaceHistoryUncheckedCreateWithoutEconomyAccountInput>
  }

  export type RaceHistoryCreateManyEconomyAccountInputEnvelope = {
    data: RaceHistoryCreateManyEconomyAccountInput | RaceHistoryCreateManyEconomyAccountInput[]
    skipDuplicates?: boolean
  }

  export type EconomyAffiliationUpsertWithoutAccountsInput = {
    update: XOR<EconomyAffiliationUpdateWithoutAccountsInput, EconomyAffiliationUncheckedUpdateWithoutAccountsInput>
    create: XOR<EconomyAffiliationCreateWithoutAccountsInput, EconomyAffiliationUncheckedCreateWithoutAccountsInput>
    where?: EconomyAffiliationWhereInput
  }

  export type EconomyAffiliationUpdateToOneWithWhereWithoutAccountsInput = {
    where?: EconomyAffiliationWhereInput
    data: XOR<EconomyAffiliationUpdateWithoutAccountsInput, EconomyAffiliationUncheckedUpdateWithoutAccountsInput>
  }

  export type EconomyAffiliationUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyAffiliationUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogUpsertWithWhereUniqueWithoutEconomyAccountInput = {
    where: EconomyLogWhereUniqueInput
    update: XOR<EconomyLogUpdateWithoutEconomyAccountInput, EconomyLogUncheckedUpdateWithoutEconomyAccountInput>
    create: XOR<EconomyLogCreateWithoutEconomyAccountInput, EconomyLogUncheckedCreateWithoutEconomyAccountInput>
  }

  export type EconomyLogUpdateWithWhereUniqueWithoutEconomyAccountInput = {
    where: EconomyLogWhereUniqueInput
    data: XOR<EconomyLogUpdateWithoutEconomyAccountInput, EconomyLogUncheckedUpdateWithoutEconomyAccountInput>
  }

  export type EconomyLogUpdateManyWithWhereWithoutEconomyAccountInput = {
    where: EconomyLogScalarWhereInput
    data: XOR<EconomyLogUpdateManyMutationInput, EconomyLogUncheckedUpdateManyWithoutEconomyAccountInput>
  }

  export type EconomyLogScalarWhereInput = {
    AND?: EconomyLogScalarWhereInput | EconomyLogScalarWhereInput[]
    OR?: EconomyLogScalarWhereInput[]
    NOT?: EconomyLogScalarWhereInput | EconomyLogScalarWhereInput[]
    id?: StringFilter<"EconomyLog"> | string
    discordId?: StringFilter<"EconomyLog"> | string
    accountId?: StringNullableFilter<"EconomyLog"> | string | null
    eventType?: StringFilter<"EconomyLog"> | string
    amount?: BigIntFilter<"EconomyLog"> | bigint | number
    balanceBefore?: BigIntFilter<"EconomyLog"> | bigint | number
    balanceAfter?: BigIntFilter<"EconomyLog"> | bigint | number
    description?: StringNullableFilter<"EconomyLog"> | string | null
    metadata?: StringNullableFilter<"EconomyLog"> | string | null
    createdAt?: DateTimeFilter<"EconomyLog"> | Date | string
  }

  export type RaceHistoryUpsertWithWhereUniqueWithoutEconomyAccountInput = {
    where: RaceHistoryWhereUniqueInput
    update: XOR<RaceHistoryUpdateWithoutEconomyAccountInput, RaceHistoryUncheckedUpdateWithoutEconomyAccountInput>
    create: XOR<RaceHistoryCreateWithoutEconomyAccountInput, RaceHistoryUncheckedCreateWithoutEconomyAccountInput>
  }

  export type RaceHistoryUpdateWithWhereUniqueWithoutEconomyAccountInput = {
    where: RaceHistoryWhereUniqueInput
    data: XOR<RaceHistoryUpdateWithoutEconomyAccountInput, RaceHistoryUncheckedUpdateWithoutEconomyAccountInput>
  }

  export type RaceHistoryUpdateManyWithWhereWithoutEconomyAccountInput = {
    where: RaceHistoryScalarWhereInput
    data: XOR<RaceHistoryUpdateManyMutationInput, RaceHistoryUncheckedUpdateManyWithoutEconomyAccountInput>
  }

  export type RaceHistoryScalarWhereInput = {
    AND?: RaceHistoryScalarWhereInput | RaceHistoryScalarWhereInput[]
    OR?: RaceHistoryScalarWhereInput[]
    NOT?: RaceHistoryScalarWhereInput | RaceHistoryScalarWhereInput[]
    id?: StringFilter<"RaceHistory"> | string
    discordId?: StringFilter<"RaceHistory"> | string
    selectedHorseIndex?: IntFilter<"RaceHistory"> | number
    selectedHorseName?: StringFilter<"RaceHistory"> | string
    betType?: StringFilter<"RaceHistory"> | string
    betAmount?: BigIntFilter<"RaceHistory"> | bigint | number
    odds?: DecimalFilter<"RaceHistory"> | Decimal | DecimalJsLike | number | string
    isHit?: BoolFilter<"RaceHistory"> | boolean
    payout?: BigIntFilter<"RaceHistory"> | bigint | number
    balanceBefore?: BigIntFilter<"RaceHistory"> | bigint | number
    balanceAfter?: BigIntFilter<"RaceHistory"> | bigint | number
    raceResult?: StringNullableFilter<"RaceHistory"> | string | null
    createdAt?: DateTimeFilter<"RaceHistory"> | Date | string
    economyAccountId?: StringNullableFilter<"RaceHistory"> | string | null
  }

  export type EconomyAccountCreateWithoutEconomyLogsInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliation?: EconomyAffiliationCreateNestedOneWithoutAccountsInput
    raceHistories?: RaceHistoryCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountUncheckedCreateWithoutEconomyLogsInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    affiliationId?: string | null
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    raceHistories?: RaceHistoryUncheckedCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountCreateOrConnectWithoutEconomyLogsInput = {
    where: EconomyAccountWhereUniqueInput
    create: XOR<EconomyAccountCreateWithoutEconomyLogsInput, EconomyAccountUncheckedCreateWithoutEconomyLogsInput>
  }

  export type EconomyAccountUpsertWithoutEconomyLogsInput = {
    update: XOR<EconomyAccountUpdateWithoutEconomyLogsInput, EconomyAccountUncheckedUpdateWithoutEconomyLogsInput>
    create: XOR<EconomyAccountCreateWithoutEconomyLogsInput, EconomyAccountUncheckedCreateWithoutEconomyLogsInput>
    where?: EconomyAccountWhereInput
  }

  export type EconomyAccountUpdateToOneWithWhereWithoutEconomyLogsInput = {
    where?: EconomyAccountWhereInput
    data: XOR<EconomyAccountUpdateWithoutEconomyLogsInput, EconomyAccountUncheckedUpdateWithoutEconomyLogsInput>
  }

  export type EconomyAccountUpdateWithoutEconomyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliation?: EconomyAffiliationUpdateOneWithoutAccountsNestedInput
    raceHistories?: RaceHistoryUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountUncheckedUpdateWithoutEconomyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceHistories?: RaceHistoryUncheckedUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountCreateWithoutRaceHistoriesInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliation?: EconomyAffiliationCreateNestedOneWithoutAccountsInput
    economyLogs?: EconomyLogCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountUncheckedCreateWithoutRaceHistoriesInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    affiliationId?: string | null
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    economyLogs?: EconomyLogUncheckedCreateNestedManyWithoutEconomyAccountInput
  }

  export type EconomyAccountCreateOrConnectWithoutRaceHistoriesInput = {
    where: EconomyAccountWhereUniqueInput
    create: XOR<EconomyAccountCreateWithoutRaceHistoriesInput, EconomyAccountUncheckedCreateWithoutRaceHistoriesInput>
  }

  export type EconomyAccountUpsertWithoutRaceHistoriesInput = {
    update: XOR<EconomyAccountUpdateWithoutRaceHistoriesInput, EconomyAccountUncheckedUpdateWithoutRaceHistoriesInput>
    create: XOR<EconomyAccountCreateWithoutRaceHistoriesInput, EconomyAccountUncheckedCreateWithoutRaceHistoriesInput>
    where?: EconomyAccountWhereInput
  }

  export type EconomyAccountUpdateToOneWithWhereWithoutRaceHistoriesInput = {
    where?: EconomyAccountWhereInput
    data: XOR<EconomyAccountUpdateWithoutRaceHistoriesInput, EconomyAccountUncheckedUpdateWithoutRaceHistoriesInput>
  }

  export type EconomyAccountUpdateWithoutRaceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliation?: EconomyAffiliationUpdateOneWithoutAccountsNestedInput
    economyLogs?: EconomyLogUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountUncheckedUpdateWithoutRaceHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableStringFieldUpdateOperationsInput | string | null
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyLogs?: EconomyLogUncheckedUpdateManyWithoutEconomyAccountNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    providerId: string
    accountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyAccountCreateManyAffiliationInput = {
    id?: string
    discordId: string
    name: string
    image?: string | null
    affiliationName?: string
    coins?: bigint | number
    intelligenceLevel?: number
    satiation?: number
    happiness?: number
    birthday?: Date | string | null
    lastWorkAt?: Date | string | null
    inventory?: string | null
    lastBirthdayBonusYear?: number | null
    lastSchoolAt?: Date | string | null
    schoolAttendanceCount?: number
    status?: string
    ipAddress?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EconomyAccountUpdateWithoutAffiliationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyLogs?: EconomyLogUpdateManyWithoutEconomyAccountNestedInput
    raceHistories?: RaceHistoryUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountUncheckedUpdateWithoutAffiliationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    economyLogs?: EconomyLogUncheckedUpdateManyWithoutEconomyAccountNestedInput
    raceHistories?: RaceHistoryUncheckedUpdateManyWithoutEconomyAccountNestedInput
  }

  export type EconomyAccountUncheckedUpdateManyWithoutAffiliationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    affiliationName?: StringFieldUpdateOperationsInput | string
    coins?: BigIntFieldUpdateOperationsInput | bigint | number
    intelligenceLevel?: IntFieldUpdateOperationsInput | number
    satiation?: IntFieldUpdateOperationsInput | number
    happiness?: IntFieldUpdateOperationsInput | number
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWorkAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: NullableStringFieldUpdateOperationsInput | string | null
    lastBirthdayBonusYear?: NullableIntFieldUpdateOperationsInput | number | null
    lastSchoolAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schoolAttendanceCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogCreateManyEconomyAccountInput = {
    id?: string
    discordId: string
    eventType: string
    amount?: bigint | number
    balanceBefore?: bigint | number
    balanceAfter?: bigint | number
    description?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RaceHistoryCreateManyEconomyAccountInput = {
    id?: string
    discordId: string
    selectedHorseIndex: number
    selectedHorseName: string
    betType: string
    betAmount: bigint | number
    odds: Decimal | DecimalJsLike | number | string
    isHit: boolean
    payout: bigint | number
    balanceBefore: bigint | number
    balanceAfter: bigint | number
    raceResult?: string | null
    createdAt?: Date | string
  }

  export type EconomyLogUpdateWithoutEconomyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogUncheckedUpdateWithoutEconomyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EconomyLogUncheckedUpdateManyWithoutEconomyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceHistoryUpdateWithoutEconomyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceHistoryUncheckedUpdateWithoutEconomyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceHistoryUncheckedUpdateManyWithoutEconomyAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    selectedHorseIndex?: IntFieldUpdateOperationsInput | number
    selectedHorseName?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    betAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isHit?: BoolFieldUpdateOperationsInput | boolean
    payout?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceBefore?: BigIntFieldUpdateOperationsInput | bigint | number
    balanceAfter?: BigIntFieldUpdateOperationsInput | bigint | number
    raceResult?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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