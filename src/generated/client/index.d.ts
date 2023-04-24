
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string | null
  password: string | null
  hashedPassword: string | null
  student_id: string | null
  role: string | null
  class: string | null
  class_id: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TestResult
 * 
 */
export type TestResult = {
  id: string
  user_id: string
  sdq_stu_aggressive_score: number | null
  sdq_stu_emotional_score: number | null
  sdq_stu_restless_score: number | null
  sdq_stu_friends_score: number | null
  sdq_stu_society_score: number | null
  sdq_stu_total_score: number | null
  sdq_tea_aggressive_score: number | null
  sdq_tea_emotional_score: number | null
  sdq_tea_restless_score: number | null
  sdq_tea_friends_score: number | null
  sdq_tea_society_score: number | null
  sdq_tea_total_score: number | null
  sdq_parent_aggressive_score: number | null
  sdq_parent_emotional_score: number | null
  sdq_parent_restless_score: number | null
  sdq_parent_friends_score: number | null
  sdq_parent_society_score: number | null
  sdq_parent_total_score: number | null
  eq_score: number | null
}


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TestResult: 'TestResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
    test_result: number
  }

  export type UserCountOutputTypeSelect = {
    test_result?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
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
    name: string | null
    email: string | null
    password: string | null
    hashedPassword: string | null
    student_id: string | null
    role: string | null
    class: string | null
    class_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    hashedPassword: string | null
    student_id: string | null
    role: string | null
    class: string | null
    class_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    hashedPassword: number
    student_id: number
    role: number
    class: number
    class_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    hashedPassword?: true
    student_id?: true
    role?: true
    class?: true
    class_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    hashedPassword?: true
    student_id?: true
    role?: true
    class?: true
    class_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    hashedPassword?: true
    student_id?: true
    role?: true
    class?: true
    class_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    hashedPassword: string | null
    student_id: string | null
    role: string | null
    class: string | null
    class_id: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    hashedPassword?: boolean
    student_id?: boolean
    role?: boolean
    class?: boolean
    class_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test_result?: boolean | User$test_resultArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    test_result?: boolean | User$test_resultArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'test_result' ? Array < TestResultGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'test_result' ? Array < TestResultGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

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
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    test_result<T extends User$test_resultArgs= {}>(args?: Subset<T, User$test_resultArgs>): Prisma.PrismaPromise<Array<TestResultGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.test_result
   */
  export type User$test_resultArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model TestResult
   */


  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    sdq_stu_aggressive_score: number | null
    sdq_stu_emotional_score: number | null
    sdq_stu_restless_score: number | null
    sdq_stu_friends_score: number | null
    sdq_stu_society_score: number | null
    sdq_stu_total_score: number | null
    sdq_tea_aggressive_score: number | null
    sdq_tea_emotional_score: number | null
    sdq_tea_restless_score: number | null
    sdq_tea_friends_score: number | null
    sdq_tea_society_score: number | null
    sdq_tea_total_score: number | null
    sdq_parent_aggressive_score: number | null
    sdq_parent_emotional_score: number | null
    sdq_parent_restless_score: number | null
    sdq_parent_friends_score: number | null
    sdq_parent_society_score: number | null
    sdq_parent_total_score: number | null
    eq_score: number | null
  }

  export type TestResultSumAggregateOutputType = {
    sdq_stu_aggressive_score: number | null
    sdq_stu_emotional_score: number | null
    sdq_stu_restless_score: number | null
    sdq_stu_friends_score: number | null
    sdq_stu_society_score: number | null
    sdq_stu_total_score: number | null
    sdq_tea_aggressive_score: number | null
    sdq_tea_emotional_score: number | null
    sdq_tea_restless_score: number | null
    sdq_tea_friends_score: number | null
    sdq_tea_society_score: number | null
    sdq_tea_total_score: number | null
    sdq_parent_aggressive_score: number | null
    sdq_parent_emotional_score: number | null
    sdq_parent_restless_score: number | null
    sdq_parent_friends_score: number | null
    sdq_parent_society_score: number | null
    sdq_parent_total_score: number | null
    eq_score: number | null
  }

  export type TestResultMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    sdq_stu_aggressive_score: number | null
    sdq_stu_emotional_score: number | null
    sdq_stu_restless_score: number | null
    sdq_stu_friends_score: number | null
    sdq_stu_society_score: number | null
    sdq_stu_total_score: number | null
    sdq_tea_aggressive_score: number | null
    sdq_tea_emotional_score: number | null
    sdq_tea_restless_score: number | null
    sdq_tea_friends_score: number | null
    sdq_tea_society_score: number | null
    sdq_tea_total_score: number | null
    sdq_parent_aggressive_score: number | null
    sdq_parent_emotional_score: number | null
    sdq_parent_restless_score: number | null
    sdq_parent_friends_score: number | null
    sdq_parent_society_score: number | null
    sdq_parent_total_score: number | null
    eq_score: number | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    sdq_stu_aggressive_score: number | null
    sdq_stu_emotional_score: number | null
    sdq_stu_restless_score: number | null
    sdq_stu_friends_score: number | null
    sdq_stu_society_score: number | null
    sdq_stu_total_score: number | null
    sdq_tea_aggressive_score: number | null
    sdq_tea_emotional_score: number | null
    sdq_tea_restless_score: number | null
    sdq_tea_friends_score: number | null
    sdq_tea_society_score: number | null
    sdq_tea_total_score: number | null
    sdq_parent_aggressive_score: number | null
    sdq_parent_emotional_score: number | null
    sdq_parent_restless_score: number | null
    sdq_parent_friends_score: number | null
    sdq_parent_society_score: number | null
    sdq_parent_total_score: number | null
    eq_score: number | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    user_id: number
    sdq_stu_aggressive_score: number
    sdq_stu_emotional_score: number
    sdq_stu_restless_score: number
    sdq_stu_friends_score: number
    sdq_stu_society_score: number
    sdq_stu_total_score: number
    sdq_tea_aggressive_score: number
    sdq_tea_emotional_score: number
    sdq_tea_restless_score: number
    sdq_tea_friends_score: number
    sdq_tea_society_score: number
    sdq_tea_total_score: number
    sdq_parent_aggressive_score: number
    sdq_parent_emotional_score: number
    sdq_parent_restless_score: number
    sdq_parent_friends_score: number
    sdq_parent_society_score: number
    sdq_parent_total_score: number
    eq_score: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    sdq_stu_aggressive_score?: true
    sdq_stu_emotional_score?: true
    sdq_stu_restless_score?: true
    sdq_stu_friends_score?: true
    sdq_stu_society_score?: true
    sdq_stu_total_score?: true
    sdq_tea_aggressive_score?: true
    sdq_tea_emotional_score?: true
    sdq_tea_restless_score?: true
    sdq_tea_friends_score?: true
    sdq_tea_society_score?: true
    sdq_tea_total_score?: true
    sdq_parent_aggressive_score?: true
    sdq_parent_emotional_score?: true
    sdq_parent_restless_score?: true
    sdq_parent_friends_score?: true
    sdq_parent_society_score?: true
    sdq_parent_total_score?: true
    eq_score?: true
  }

  export type TestResultSumAggregateInputType = {
    sdq_stu_aggressive_score?: true
    sdq_stu_emotional_score?: true
    sdq_stu_restless_score?: true
    sdq_stu_friends_score?: true
    sdq_stu_society_score?: true
    sdq_stu_total_score?: true
    sdq_tea_aggressive_score?: true
    sdq_tea_emotional_score?: true
    sdq_tea_restless_score?: true
    sdq_tea_friends_score?: true
    sdq_tea_society_score?: true
    sdq_tea_total_score?: true
    sdq_parent_aggressive_score?: true
    sdq_parent_emotional_score?: true
    sdq_parent_restless_score?: true
    sdq_parent_friends_score?: true
    sdq_parent_society_score?: true
    sdq_parent_total_score?: true
    eq_score?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    user_id?: true
    sdq_stu_aggressive_score?: true
    sdq_stu_emotional_score?: true
    sdq_stu_restless_score?: true
    sdq_stu_friends_score?: true
    sdq_stu_society_score?: true
    sdq_stu_total_score?: true
    sdq_tea_aggressive_score?: true
    sdq_tea_emotional_score?: true
    sdq_tea_restless_score?: true
    sdq_tea_friends_score?: true
    sdq_tea_society_score?: true
    sdq_tea_total_score?: true
    sdq_parent_aggressive_score?: true
    sdq_parent_emotional_score?: true
    sdq_parent_restless_score?: true
    sdq_parent_friends_score?: true
    sdq_parent_society_score?: true
    sdq_parent_total_score?: true
    eq_score?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    user_id?: true
    sdq_stu_aggressive_score?: true
    sdq_stu_emotional_score?: true
    sdq_stu_restless_score?: true
    sdq_stu_friends_score?: true
    sdq_stu_society_score?: true
    sdq_stu_total_score?: true
    sdq_tea_aggressive_score?: true
    sdq_tea_emotional_score?: true
    sdq_tea_restless_score?: true
    sdq_tea_friends_score?: true
    sdq_tea_society_score?: true
    sdq_tea_total_score?: true
    sdq_parent_aggressive_score?: true
    sdq_parent_emotional_score?: true
    sdq_parent_restless_score?: true
    sdq_parent_friends_score?: true
    sdq_parent_society_score?: true
    sdq_parent_total_score?: true
    eq_score?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    user_id?: true
    sdq_stu_aggressive_score?: true
    sdq_stu_emotional_score?: true
    sdq_stu_restless_score?: true
    sdq_stu_friends_score?: true
    sdq_stu_society_score?: true
    sdq_stu_total_score?: true
    sdq_tea_aggressive_score?: true
    sdq_tea_emotional_score?: true
    sdq_tea_restless_score?: true
    sdq_tea_friends_score?: true
    sdq_tea_society_score?: true
    sdq_tea_total_score?: true
    sdq_parent_aggressive_score?: true
    sdq_parent_emotional_score?: true
    sdq_parent_restless_score?: true
    sdq_parent_friends_score?: true
    sdq_parent_society_score?: true
    sdq_parent_total_score?: true
    eq_score?: true
    _all?: true
  }

  export type TestResultAggregateArgs = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs = {
    where?: TestResultWhereInput
    orderBy?: Enumerable<TestResultOrderByWithAggregationInput>
    by: TestResultScalarFieldEnum[]
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _avg?: TestResultAvgAggregateInputType
    _sum?: TestResultSumAggregateInputType
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }


  export type TestResultGroupByOutputType = {
    id: string
    user_id: string
    sdq_stu_aggressive_score: number | null
    sdq_stu_emotional_score: number | null
    sdq_stu_restless_score: number | null
    sdq_stu_friends_score: number | null
    sdq_stu_society_score: number | null
    sdq_stu_total_score: number | null
    sdq_tea_aggressive_score: number | null
    sdq_tea_emotional_score: number | null
    sdq_tea_restless_score: number | null
    sdq_tea_friends_score: number | null
    sdq_tea_society_score: number | null
    sdq_tea_total_score: number | null
    sdq_parent_aggressive_score: number | null
    sdq_parent_emotional_score: number | null
    sdq_parent_restless_score: number | null
    sdq_parent_friends_score: number | null
    sdq_parent_society_score: number | null
    sdq_parent_total_score: number | null
    eq_score: number | null
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect = {
    id?: boolean
    user_id?: boolean
    sdq_stu_aggressive_score?: boolean
    sdq_stu_emotional_score?: boolean
    sdq_stu_restless_score?: boolean
    sdq_stu_friends_score?: boolean
    sdq_stu_society_score?: boolean
    sdq_stu_total_score?: boolean
    sdq_tea_aggressive_score?: boolean
    sdq_tea_emotional_score?: boolean
    sdq_tea_restless_score?: boolean
    sdq_tea_friends_score?: boolean
    sdq_tea_society_score?: boolean
    sdq_tea_total_score?: boolean
    sdq_parent_aggressive_score?: boolean
    sdq_parent_emotional_score?: boolean
    sdq_parent_restless_score?: boolean
    sdq_parent_friends_score?: boolean
    sdq_parent_society_score?: boolean
    sdq_parent_total_score?: boolean
    eq_score?: boolean
    user?: boolean | UserArgs
  }


  export type TestResultInclude = {
    user?: boolean | UserArgs
  }

  export type TestResultGetPayload<S extends boolean | null | undefined | TestResultArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestResult :
    S extends undefined ? never :
    S extends { include: any } & (TestResultArgs | TestResultFindManyArgs)
    ? TestResult  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TestResultArgs | TestResultFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof TestResult ? TestResult[P] : never
  } 
      : TestResult


  type TestResultCountArgs = 
    Omit<TestResultFindManyArgs, 'select' | 'include'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestResultFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestResultFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TestResult'> extends True ? Prisma__TestResultClient<TestResultGetPayload<T>> : Prisma__TestResultClient<TestResultGetPayload<T> | null, null>

    /**
     * Find one TestResult that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestResultFindUniqueOrThrowArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestResultFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestResultFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TestResult'> extends True ? Prisma__TestResultClient<TestResultGetPayload<T>> : Prisma__TestResultClient<TestResultGetPayload<T> | null, null>

    /**
     * Find the first TestResult that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestResultFindFirstOrThrowArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestResultFindManyArgs>(
      args?: SelectSubset<T, TestResultFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestResultGetPayload<T>>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
    **/
    create<T extends TestResultCreateArgs>(
      args: SelectSubset<T, TestResultCreateArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Create many TestResults.
     *     @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     *     @example
     *     // Create many TestResults
     *     const testResult = await prisma.testResult.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestResultCreateManyArgs>(
      args?: SelectSubset<T, TestResultCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
    **/
    delete<T extends TestResultDeleteArgs>(
      args: SelectSubset<T, TestResultDeleteArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestResultUpdateArgs>(
      args: SelectSubset<T, TestResultUpdateArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestResultDeleteManyArgs>(
      args?: SelectSubset<T, TestResultDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestResultUpdateManyArgs>(
      args: SelectSubset<T, TestResultUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
    **/
    upsert<T extends TestResultUpsertArgs>(
      args: SelectSubset<T, TestResultUpsertArgs>
    ): Prisma__TestResultClient<TestResultGetPayload<T>>

    /**
     * Find zero or more TestResults that matches the filter.
     * @param {TestResultFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const testResult = await prisma.testResult.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TestResultFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TestResult.
     * @param {TestResultAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const testResult = await prisma.testResult.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TestResultAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
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
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestResultClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TestResult base type for findUnique actions
   */
  export type TestResultFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUnique
   */
  export interface TestResultFindUniqueArgs extends TestResultFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult base type for findFirst actions
   */
  export type TestResultFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }

  /**
   * TestResult findFirst
   */
  export interface TestResultFindFirstArgs extends TestResultFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: Enumerable<TestResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: Enumerable<TestResultScalarFieldEnum>
  }


  /**
   * TestResult create
   */
  export type TestResultCreateArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }


  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs = {
    /**
     * The data used to create many TestResults.
     */
    data: Enumerable<TestResultCreateManyInput>
  }


  /**
   * TestResult update
   */
  export type TestResultUpdateArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
  }


  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }


  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }


  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
  }


  /**
   * TestResult findRaw
   */
  export type TestResultFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TestResult aggregateRaw
   */
  export type TestResultAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TestResult without action
   */
  export type TestResultArgs = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestResultInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sdq_stu_aggressive_score: 'sdq_stu_aggressive_score',
    sdq_stu_emotional_score: 'sdq_stu_emotional_score',
    sdq_stu_restless_score: 'sdq_stu_restless_score',
    sdq_stu_friends_score: 'sdq_stu_friends_score',
    sdq_stu_society_score: 'sdq_stu_society_score',
    sdq_stu_total_score: 'sdq_stu_total_score',
    sdq_tea_aggressive_score: 'sdq_tea_aggressive_score',
    sdq_tea_emotional_score: 'sdq_tea_emotional_score',
    sdq_tea_restless_score: 'sdq_tea_restless_score',
    sdq_tea_friends_score: 'sdq_tea_friends_score',
    sdq_tea_society_score: 'sdq_tea_society_score',
    sdq_tea_total_score: 'sdq_tea_total_score',
    sdq_parent_aggressive_score: 'sdq_parent_aggressive_score',
    sdq_parent_emotional_score: 'sdq_parent_emotional_score',
    sdq_parent_restless_score: 'sdq_parent_restless_score',
    sdq_parent_friends_score: 'sdq_parent_friends_score',
    sdq_parent_society_score: 'sdq_parent_society_score',
    sdq_parent_total_score: 'sdq_parent_total_score',
    eq_score: 'eq_score'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    hashedPassword: 'hashedPassword',
    student_id: 'student_id',
    role: 'role',
    class: 'class',
    class_id: 'class_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    hashedPassword?: StringNullableFilter | string | null
    student_id?: StringNullableFilter | string | null
    role?: StringNullableFilter | string | null
    class?: StringNullableFilter | string | null
    class_id?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    test_result?: TestResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
    student_id?: SortOrder
    role?: SortOrder
    class?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    test_result?: TestResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
    student_id?: SortOrder
    role?: SortOrder
    class?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    hashedPassword?: StringNullableWithAggregatesFilter | string | null
    student_id?: StringNullableWithAggregatesFilter | string | null
    role?: StringNullableWithAggregatesFilter | string | null
    class?: StringNullableWithAggregatesFilter | string | null
    class_id?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TestResultWhereInput = {
    AND?: Enumerable<TestResultWhereInput>
    OR?: Enumerable<TestResultWhereInput>
    NOT?: Enumerable<TestResultWhereInput>
    id?: StringFilter | string
    user_id?: StringFilter | string
    sdq_stu_aggressive_score?: IntNullableFilter | number | null
    sdq_stu_emotional_score?: IntNullableFilter | number | null
    sdq_stu_restless_score?: IntNullableFilter | number | null
    sdq_stu_friends_score?: IntNullableFilter | number | null
    sdq_stu_society_score?: IntNullableFilter | number | null
    sdq_stu_total_score?: IntNullableFilter | number | null
    sdq_tea_aggressive_score?: IntNullableFilter | number | null
    sdq_tea_emotional_score?: IntNullableFilter | number | null
    sdq_tea_restless_score?: IntNullableFilter | number | null
    sdq_tea_friends_score?: IntNullableFilter | number | null
    sdq_tea_society_score?: IntNullableFilter | number | null
    sdq_tea_total_score?: IntNullableFilter | number | null
    sdq_parent_aggressive_score?: IntNullableFilter | number | null
    sdq_parent_emotional_score?: IntNullableFilter | number | null
    sdq_parent_restless_score?: IntNullableFilter | number | null
    sdq_parent_friends_score?: IntNullableFilter | number | null
    sdq_parent_society_score?: IntNullableFilter | number | null
    sdq_parent_total_score?: IntNullableFilter | number | null
    eq_score?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = {
    id?: string
  }

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _avg?: TestResultAvgOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
    _sum?: TestResultSumOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestResultScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    sdq_stu_aggressive_score?: IntNullableWithAggregatesFilter | number | null
    sdq_stu_emotional_score?: IntNullableWithAggregatesFilter | number | null
    sdq_stu_restless_score?: IntNullableWithAggregatesFilter | number | null
    sdq_stu_friends_score?: IntNullableWithAggregatesFilter | number | null
    sdq_stu_society_score?: IntNullableWithAggregatesFilter | number | null
    sdq_stu_total_score?: IntNullableWithAggregatesFilter | number | null
    sdq_tea_aggressive_score?: IntNullableWithAggregatesFilter | number | null
    sdq_tea_emotional_score?: IntNullableWithAggregatesFilter | number | null
    sdq_tea_restless_score?: IntNullableWithAggregatesFilter | number | null
    sdq_tea_friends_score?: IntNullableWithAggregatesFilter | number | null
    sdq_tea_society_score?: IntNullableWithAggregatesFilter | number | null
    sdq_tea_total_score?: IntNullableWithAggregatesFilter | number | null
    sdq_parent_aggressive_score?: IntNullableWithAggregatesFilter | number | null
    sdq_parent_emotional_score?: IntNullableWithAggregatesFilter | number | null
    sdq_parent_restless_score?: IntNullableWithAggregatesFilter | number | null
    sdq_parent_friends_score?: IntNullableWithAggregatesFilter | number | null
    sdq_parent_society_score?: IntNullableWithAggregatesFilter | number | null
    sdq_parent_total_score?: IntNullableWithAggregatesFilter | number | null
    eq_score?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    hashedPassword?: string | null
    student_id?: string | null
    role?: string | null
    class?: string | null
    class_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    test_result?: TestResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    hashedPassword?: string | null
    student_id?: string | null
    role?: string | null
    class?: string | null
    class_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    test_result?: TestResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test_result?: TestResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test_result?: TestResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    hashedPassword?: string | null
    student_id?: string | null
    role?: string | null
    class?: string | null
    class_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateInput = {
    id?: string
    sdq_stu_aggressive_score?: number | null
    sdq_stu_emotional_score?: number | null
    sdq_stu_restless_score?: number | null
    sdq_stu_friends_score?: number | null
    sdq_stu_society_score?: number | null
    sdq_stu_total_score?: number | null
    sdq_tea_aggressive_score?: number | null
    sdq_tea_emotional_score?: number | null
    sdq_tea_restless_score?: number | null
    sdq_tea_friends_score?: number | null
    sdq_tea_society_score?: number | null
    sdq_tea_total_score?: number | null
    sdq_parent_aggressive_score?: number | null
    sdq_parent_emotional_score?: number | null
    sdq_parent_restless_score?: number | null
    sdq_parent_friends_score?: number | null
    sdq_parent_society_score?: number | null
    sdq_parent_total_score?: number | null
    eq_score?: number | null
    user: UserCreateNestedOneWithoutTest_resultInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: string
    user_id: string
    sdq_stu_aggressive_score?: number | null
    sdq_stu_emotional_score?: number | null
    sdq_stu_restless_score?: number | null
    sdq_stu_friends_score?: number | null
    sdq_stu_society_score?: number | null
    sdq_stu_total_score?: number | null
    sdq_tea_aggressive_score?: number | null
    sdq_tea_emotional_score?: number | null
    sdq_tea_restless_score?: number | null
    sdq_tea_friends_score?: number | null
    sdq_tea_society_score?: number | null
    sdq_tea_total_score?: number | null
    sdq_parent_aggressive_score?: number | null
    sdq_parent_emotional_score?: number | null
    sdq_parent_restless_score?: number | null
    sdq_parent_friends_score?: number | null
    sdq_parent_society_score?: number | null
    sdq_parent_total_score?: number | null
    eq_score?: number | null
  }

  export type TestResultUpdateInput = {
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutTest_resultNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestResultCreateManyInput = {
    id?: string
    user_id: string
    sdq_stu_aggressive_score?: number | null
    sdq_stu_emotional_score?: number | null
    sdq_stu_restless_score?: number | null
    sdq_stu_friends_score?: number | null
    sdq_stu_society_score?: number | null
    sdq_stu_total_score?: number | null
    sdq_tea_aggressive_score?: number | null
    sdq_tea_emotional_score?: number | null
    sdq_tea_restless_score?: number | null
    sdq_tea_friends_score?: number | null
    sdq_tea_society_score?: number | null
    sdq_tea_total_score?: number | null
    sdq_parent_aggressive_score?: number | null
    sdq_parent_emotional_score?: number | null
    sdq_parent_restless_score?: number | null
    sdq_parent_friends_score?: number | null
    sdq_parent_society_score?: number | null
    sdq_parent_total_score?: number | null
    eq_score?: number | null
  }

  export type TestResultUpdateManyMutationInput = {
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestResultUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TestResultListRelationFilter = {
    every?: TestResultWhereInput
    some?: TestResultWhereInput
    none?: TestResultWhereInput
  }

  export type TestResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
    student_id?: SortOrder
    role?: SortOrder
    class?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
    student_id?: SortOrder
    role?: SortOrder
    class?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
    student_id?: SortOrder
    role?: SortOrder
    class?: SortOrder
    class_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
  }

  export type TestResultAvgOrderByAggregateInput = {
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
  }

  export type TestResultSumOrderByAggregateInput = {
    sdq_stu_aggressive_score?: SortOrder
    sdq_stu_emotional_score?: SortOrder
    sdq_stu_restless_score?: SortOrder
    sdq_stu_friends_score?: SortOrder
    sdq_stu_society_score?: SortOrder
    sdq_stu_total_score?: SortOrder
    sdq_tea_aggressive_score?: SortOrder
    sdq_tea_emotional_score?: SortOrder
    sdq_tea_restless_score?: SortOrder
    sdq_tea_friends_score?: SortOrder
    sdq_tea_society_score?: SortOrder
    sdq_tea_total_score?: SortOrder
    sdq_parent_aggressive_score?: SortOrder
    sdq_parent_emotional_score?: SortOrder
    sdq_parent_restless_score?: SortOrder
    sdq_parent_friends_score?: SortOrder
    sdq_parent_society_score?: SortOrder
    sdq_parent_total_score?: SortOrder
    eq_score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type TestResultCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutUserInput>, Enumerable<TestResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutUserInput>
    createMany?: TestResultCreateManyUserInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type TestResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutUserInput>, Enumerable<TestResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutUserInput>
    createMany?: TestResultCreateManyUserInputEnvelope
    connect?: Enumerable<TestResultWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutUserInput>, Enumerable<TestResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TestResultCreateManyUserInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type TestResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TestResultCreateWithoutUserInput>, Enumerable<TestResultUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TestResultCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TestResultUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TestResultCreateManyUserInputEnvelope
    set?: Enumerable<TestResultWhereUniqueInput>
    disconnect?: Enumerable<TestResultWhereUniqueInput>
    delete?: Enumerable<TestResultWhereUniqueInput>
    connect?: Enumerable<TestResultWhereUniqueInput>
    update?: Enumerable<TestResultUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TestResultUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TestResultScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTest_resultInput = {
    create?: XOR<UserCreateWithoutTest_resultInput, UserUncheckedCreateWithoutTest_resultInput>
    connectOrCreate?: UserCreateOrConnectWithoutTest_resultInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutTest_resultNestedInput = {
    create?: XOR<UserCreateWithoutTest_resultInput, UserUncheckedCreateWithoutTest_resultInput>
    connectOrCreate?: UserCreateOrConnectWithoutTest_resultInput
    upsert?: UserUpsertWithoutTest_resultInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTest_resultInput, UserUncheckedUpdateWithoutTest_resultInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type TestResultCreateWithoutUserInput = {
    id?: string
    sdq_stu_aggressive_score?: number | null
    sdq_stu_emotional_score?: number | null
    sdq_stu_restless_score?: number | null
    sdq_stu_friends_score?: number | null
    sdq_stu_society_score?: number | null
    sdq_stu_total_score?: number | null
    sdq_tea_aggressive_score?: number | null
    sdq_tea_emotional_score?: number | null
    sdq_tea_restless_score?: number | null
    sdq_tea_friends_score?: number | null
    sdq_tea_society_score?: number | null
    sdq_tea_total_score?: number | null
    sdq_parent_aggressive_score?: number | null
    sdq_parent_emotional_score?: number | null
    sdq_parent_restless_score?: number | null
    sdq_parent_friends_score?: number | null
    sdq_parent_society_score?: number | null
    sdq_parent_total_score?: number | null
    eq_score?: number | null
  }

  export type TestResultUncheckedCreateWithoutUserInput = {
    id?: string
    sdq_stu_aggressive_score?: number | null
    sdq_stu_emotional_score?: number | null
    sdq_stu_restless_score?: number | null
    sdq_stu_friends_score?: number | null
    sdq_stu_society_score?: number | null
    sdq_stu_total_score?: number | null
    sdq_tea_aggressive_score?: number | null
    sdq_tea_emotional_score?: number | null
    sdq_tea_restless_score?: number | null
    sdq_tea_friends_score?: number | null
    sdq_tea_society_score?: number | null
    sdq_tea_total_score?: number | null
    sdq_parent_aggressive_score?: number | null
    sdq_parent_emotional_score?: number | null
    sdq_parent_restless_score?: number | null
    sdq_parent_friends_score?: number | null
    sdq_parent_society_score?: number | null
    sdq_parent_total_score?: number | null
    eq_score?: number | null
  }

  export type TestResultCreateOrConnectWithoutUserInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutUserInput, TestResultUncheckedCreateWithoutUserInput>
  }

  export type TestResultCreateManyUserInputEnvelope = {
    data: Enumerable<TestResultCreateManyUserInput>
  }

  export type TestResultUpsertWithWhereUniqueWithoutUserInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutUserInput, TestResultUncheckedUpdateWithoutUserInput>
    create: XOR<TestResultCreateWithoutUserInput, TestResultUncheckedCreateWithoutUserInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutUserInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutUserInput, TestResultUncheckedUpdateWithoutUserInput>
  }

  export type TestResultUpdateManyWithWhereWithoutUserInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTest_resultInput>
  }

  export type TestResultScalarWhereInput = {
    AND?: Enumerable<TestResultScalarWhereInput>
    OR?: Enumerable<TestResultScalarWhereInput>
    NOT?: Enumerable<TestResultScalarWhereInput>
    id?: StringFilter | string
    user_id?: StringFilter | string
    sdq_stu_aggressive_score?: IntNullableFilter | number | null
    sdq_stu_emotional_score?: IntNullableFilter | number | null
    sdq_stu_restless_score?: IntNullableFilter | number | null
    sdq_stu_friends_score?: IntNullableFilter | number | null
    sdq_stu_society_score?: IntNullableFilter | number | null
    sdq_stu_total_score?: IntNullableFilter | number | null
    sdq_tea_aggressive_score?: IntNullableFilter | number | null
    sdq_tea_emotional_score?: IntNullableFilter | number | null
    sdq_tea_restless_score?: IntNullableFilter | number | null
    sdq_tea_friends_score?: IntNullableFilter | number | null
    sdq_tea_society_score?: IntNullableFilter | number | null
    sdq_tea_total_score?: IntNullableFilter | number | null
    sdq_parent_aggressive_score?: IntNullableFilter | number | null
    sdq_parent_emotional_score?: IntNullableFilter | number | null
    sdq_parent_restless_score?: IntNullableFilter | number | null
    sdq_parent_friends_score?: IntNullableFilter | number | null
    sdq_parent_society_score?: IntNullableFilter | number | null
    sdq_parent_total_score?: IntNullableFilter | number | null
    eq_score?: IntNullableFilter | number | null
  }

  export type UserCreateWithoutTest_resultInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    hashedPassword?: string | null
    student_id?: string | null
    role?: string | null
    class?: string | null
    class_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTest_resultInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    hashedPassword?: string | null
    student_id?: string | null
    role?: string | null
    class?: string | null
    class_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTest_resultInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTest_resultInput, UserUncheckedCreateWithoutTest_resultInput>
  }

  export type UserUpsertWithoutTest_resultInput = {
    update: XOR<UserUpdateWithoutTest_resultInput, UserUncheckedUpdateWithoutTest_resultInput>
    create: XOR<UserCreateWithoutTest_resultInput, UserUncheckedCreateWithoutTest_resultInput>
  }

  export type UserUpdateWithoutTest_resultInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTest_resultInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    student_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyUserInput = {
    id?: string
    sdq_stu_aggressive_score?: number | null
    sdq_stu_emotional_score?: number | null
    sdq_stu_restless_score?: number | null
    sdq_stu_friends_score?: number | null
    sdq_stu_society_score?: number | null
    sdq_stu_total_score?: number | null
    sdq_tea_aggressive_score?: number | null
    sdq_tea_emotional_score?: number | null
    sdq_tea_restless_score?: number | null
    sdq_tea_friends_score?: number | null
    sdq_tea_society_score?: number | null
    sdq_tea_total_score?: number | null
    sdq_parent_aggressive_score?: number | null
    sdq_parent_emotional_score?: number | null
    sdq_parent_restless_score?: number | null
    sdq_parent_friends_score?: number | null
    sdq_parent_society_score?: number | null
    sdq_parent_total_score?: number | null
    eq_score?: number | null
  }

  export type TestResultUpdateWithoutUserInput = {
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestResultUncheckedUpdateWithoutUserInput = {
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TestResultUncheckedUpdateManyWithoutTest_resultInput = {
    sdq_stu_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_stu_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_tea_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_aggressive_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_emotional_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_restless_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_friends_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_society_score?: NullableIntFieldUpdateOperationsInput | number | null
    sdq_parent_total_score?: NullableIntFieldUpdateOperationsInput | number | null
    eq_score?: NullableIntFieldUpdateOperationsInput | number | null
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