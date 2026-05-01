
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
 * Model CmsAdmin
 * 
 */
export type CmsAdmin = $Result.DefaultSelection<Prisma.$CmsAdminPayload>
/**
 * Model CmsCategory
 * 
 */
export type CmsCategory = $Result.DefaultSelection<Prisma.$CmsCategoryPayload>
/**
 * Model CmsSubCategory
 * 
 */
export type CmsSubCategory = $Result.DefaultSelection<Prisma.$CmsSubCategoryPayload>
/**
 * Model CmsBlog
 * 
 */
export type CmsBlog = $Result.DefaultSelection<Prisma.$CmsBlogPayload>
/**
 * Model CmsPartner
 * 
 */
export type CmsPartner = $Result.DefaultSelection<Prisma.$CmsPartnerPayload>
/**
 * Model CmsTestimonial
 * 
 */
export type CmsTestimonial = $Result.DefaultSelection<Prisma.$CmsTestimonialPayload>
/**
 * Model CmsProduct
 * 
 */
export type CmsProduct = $Result.DefaultSelection<Prisma.$CmsProductPayload>
/**
 * Model CmsLead
 * 
 */
export type CmsLead = $Result.DefaultSelection<Prisma.$CmsLeadPayload>
/**
 * Model CmsAd
 * 
 */
export type CmsAd = $Result.DefaultSelection<Prisma.$CmsAdPayload>
/**
 * Model CmsAdEvent
 * 
 */
export type CmsAdEvent = $Result.DefaultSelection<Prisma.$CmsAdEventPayload>
/**
 * Model CmsSettings
 * 
 */
export type CmsSettings = $Result.DefaultSelection<Prisma.$CmsSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CmsAdminRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
};

export type CmsAdminRole = (typeof CmsAdminRole)[keyof typeof CmsAdminRole]


export const CmsStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type CmsStatus = (typeof CmsStatus)[keyof typeof CmsStatus]


export const LeadStatus: {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  QUALIFIED: 'QUALIFIED',
  CONVERTED: 'CONVERTED',
  REJECTED: 'REJECTED'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const AdPage: {
  HOME: 'HOME',
  BLOG: 'BLOG',
  BLOG_DETAIL: 'BLOG_DETAIL',
  PRODUCT: 'PRODUCT',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
  CATEGORY: 'CATEGORY',
  SUB_CATEGORY: 'SUB_CATEGORY',
  TOOLS: 'TOOLS',
  CALCULATOR: 'CALCULATOR'
};

export type AdPage = (typeof AdPage)[keyof typeof AdPage]


export const AdPosition: {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  BETWEEN_CONTENT: 'BETWEEN_CONTENT',
  SIDEBAR: 'SIDEBAR'
};

export type AdPosition = (typeof AdPosition)[keyof typeof AdPosition]


export const AdSize: {
  BANNER_728x90: 'BANNER_728x90',
  BANNER_300x250: 'BANNER_300x250',
  BANNER_300x600: 'BANNER_300x600',
  BANNER_320x50: 'BANNER_320x50',
  BANNER_160x600: 'BANNER_160x600',
  BANNER_970x90: 'BANNER_970x90',
  CUSTOM: 'CUSTOM'
};

export type AdSize = (typeof AdSize)[keyof typeof AdSize]


export const AdEventType: {
  CLICK: 'CLICK',
  IMPRESSION: 'IMPRESSION'
};

export type AdEventType = (typeof AdEventType)[keyof typeof AdEventType]

}

export type CmsAdminRole = $Enums.CmsAdminRole

export const CmsAdminRole: typeof $Enums.CmsAdminRole

export type CmsStatus = $Enums.CmsStatus

export const CmsStatus: typeof $Enums.CmsStatus

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type AdPage = $Enums.AdPage

export const AdPage: typeof $Enums.AdPage

export type AdPosition = $Enums.AdPosition

export const AdPosition: typeof $Enums.AdPosition

export type AdSize = $Enums.AdSize

export const AdSize: typeof $Enums.AdSize

export type AdEventType = $Enums.AdEventType

export const AdEventType: typeof $Enums.AdEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CmsAdmins
 * const cmsAdmins = await prisma.cmsAdmin.findMany()
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
   * // Fetch zero or more CmsAdmins
   * const cmsAdmins = await prisma.cmsAdmin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cmsAdmin`: Exposes CRUD operations for the **CmsAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsAdmins
    * const cmsAdmins = await prisma.cmsAdmin.findMany()
    * ```
    */
  get cmsAdmin(): Prisma.CmsAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsCategory`: Exposes CRUD operations for the **CmsCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsCategories
    * const cmsCategories = await prisma.cmsCategory.findMany()
    * ```
    */
  get cmsCategory(): Prisma.CmsCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsSubCategory`: Exposes CRUD operations for the **CmsSubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsSubCategories
    * const cmsSubCategories = await prisma.cmsSubCategory.findMany()
    * ```
    */
  get cmsSubCategory(): Prisma.CmsSubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsBlog`: Exposes CRUD operations for the **CmsBlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsBlogs
    * const cmsBlogs = await prisma.cmsBlog.findMany()
    * ```
    */
  get cmsBlog(): Prisma.CmsBlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsPartner`: Exposes CRUD operations for the **CmsPartner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPartners
    * const cmsPartners = await prisma.cmsPartner.findMany()
    * ```
    */
  get cmsPartner(): Prisma.CmsPartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsTestimonial`: Exposes CRUD operations for the **CmsTestimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsTestimonials
    * const cmsTestimonials = await prisma.cmsTestimonial.findMany()
    * ```
    */
  get cmsTestimonial(): Prisma.CmsTestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsProduct`: Exposes CRUD operations for the **CmsProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsProducts
    * const cmsProducts = await prisma.cmsProduct.findMany()
    * ```
    */
  get cmsProduct(): Prisma.CmsProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsLead`: Exposes CRUD operations for the **CmsLead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsLeads
    * const cmsLeads = await prisma.cmsLead.findMany()
    * ```
    */
  get cmsLead(): Prisma.CmsLeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsAd`: Exposes CRUD operations for the **CmsAd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsAds
    * const cmsAds = await prisma.cmsAd.findMany()
    * ```
    */
  get cmsAd(): Prisma.CmsAdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsAdEvent`: Exposes CRUD operations for the **CmsAdEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsAdEvents
    * const cmsAdEvents = await prisma.cmsAdEvent.findMany()
    * ```
    */
  get cmsAdEvent(): Prisma.CmsAdEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsSettings`: Exposes CRUD operations for the **CmsSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsSettings
    * const cmsSettings = await prisma.cmsSettings.findMany()
    * ```
    */
  get cmsSettings(): Prisma.CmsSettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    CmsAdmin: 'CmsAdmin',
    CmsCategory: 'CmsCategory',
    CmsSubCategory: 'CmsSubCategory',
    CmsBlog: 'CmsBlog',
    CmsPartner: 'CmsPartner',
    CmsTestimonial: 'CmsTestimonial',
    CmsProduct: 'CmsProduct',
    CmsLead: 'CmsLead',
    CmsAd: 'CmsAd',
    CmsAdEvent: 'CmsAdEvent',
    CmsSettings: 'CmsSettings'
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
      modelProps: "cmsAdmin" | "cmsCategory" | "cmsSubCategory" | "cmsBlog" | "cmsPartner" | "cmsTestimonial" | "cmsProduct" | "cmsLead" | "cmsAd" | "cmsAdEvent" | "cmsSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CmsAdmin: {
        payload: Prisma.$CmsAdminPayload<ExtArgs>
        fields: Prisma.CmsAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>
          }
          findFirst: {
            args: Prisma.CmsAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>
          }
          findMany: {
            args: Prisma.CmsAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>[]
          }
          create: {
            args: Prisma.CmsAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>
          }
          createMany: {
            args: Prisma.CmsAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>[]
          }
          delete: {
            args: Prisma.CmsAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>
          }
          update: {
            args: Prisma.CmsAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>
          }
          deleteMany: {
            args: Prisma.CmsAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>[]
          }
          upsert: {
            args: Prisma.CmsAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdminPayload>
          }
          aggregate: {
            args: Prisma.CmsAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsAdmin>
          }
          groupBy: {
            args: Prisma.CmsAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsAdminCountArgs<ExtArgs>
            result: $Utils.Optional<CmsAdminCountAggregateOutputType> | number
          }
        }
      }
      CmsCategory: {
        payload: Prisma.$CmsCategoryPayload<ExtArgs>
        fields: Prisma.CmsCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>
          }
          findFirst: {
            args: Prisma.CmsCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>
          }
          findMany: {
            args: Prisma.CmsCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>[]
          }
          create: {
            args: Prisma.CmsCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>
          }
          createMany: {
            args: Prisma.CmsCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>[]
          }
          delete: {
            args: Prisma.CmsCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>
          }
          update: {
            args: Prisma.CmsCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CmsCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>[]
          }
          upsert: {
            args: Prisma.CmsCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsCategoryPayload>
          }
          aggregate: {
            args: Prisma.CmsCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsCategory>
          }
          groupBy: {
            args: Prisma.CmsCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CmsCategoryCountAggregateOutputType> | number
          }
        }
      }
      CmsSubCategory: {
        payload: Prisma.$CmsSubCategoryPayload<ExtArgs>
        fields: Prisma.CmsSubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsSubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsSubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>
          }
          findFirst: {
            args: Prisma.CmsSubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsSubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>
          }
          findMany: {
            args: Prisma.CmsSubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>[]
          }
          create: {
            args: Prisma.CmsSubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>
          }
          createMany: {
            args: Prisma.CmsSubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsSubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>[]
          }
          delete: {
            args: Prisma.CmsSubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>
          }
          update: {
            args: Prisma.CmsSubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CmsSubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsSubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsSubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.CmsSubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSubCategoryPayload>
          }
          aggregate: {
            args: Prisma.CmsSubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsSubCategory>
          }
          groupBy: {
            args: Prisma.CmsSubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsSubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsSubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CmsSubCategoryCountAggregateOutputType> | number
          }
        }
      }
      CmsBlog: {
        payload: Prisma.$CmsBlogPayload<ExtArgs>
        fields: Prisma.CmsBlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsBlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsBlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          findFirst: {
            args: Prisma.CmsBlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsBlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          findMany: {
            args: Prisma.CmsBlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>[]
          }
          create: {
            args: Prisma.CmsBlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          createMany: {
            args: Prisma.CmsBlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsBlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>[]
          }
          delete: {
            args: Prisma.CmsBlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          update: {
            args: Prisma.CmsBlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          deleteMany: {
            args: Prisma.CmsBlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsBlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsBlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>[]
          }
          upsert: {
            args: Prisma.CmsBlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          aggregate: {
            args: Prisma.CmsBlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsBlog>
          }
          groupBy: {
            args: Prisma.CmsBlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsBlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsBlogCountArgs<ExtArgs>
            result: $Utils.Optional<CmsBlogCountAggregateOutputType> | number
          }
        }
      }
      CmsPartner: {
        payload: Prisma.$CmsPartnerPayload<ExtArgs>
        fields: Prisma.CmsPartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>
          }
          findFirst: {
            args: Prisma.CmsPartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>
          }
          findMany: {
            args: Prisma.CmsPartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>[]
          }
          create: {
            args: Prisma.CmsPartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>
          }
          createMany: {
            args: Prisma.CmsPartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>[]
          }
          delete: {
            args: Prisma.CmsPartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>
          }
          update: {
            args: Prisma.CmsPartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>
          }
          deleteMany: {
            args: Prisma.CmsPartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>[]
          }
          upsert: {
            args: Prisma.CmsPartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPartnerPayload>
          }
          aggregate: {
            args: Prisma.CmsPartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPartner>
          }
          groupBy: {
            args: Prisma.CmsPartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPartnerCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPartnerCountAggregateOutputType> | number
          }
        }
      }
      CmsTestimonial: {
        payload: Prisma.$CmsTestimonialPayload<ExtArgs>
        fields: Prisma.CmsTestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsTestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsTestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>
          }
          findFirst: {
            args: Prisma.CmsTestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsTestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>
          }
          findMany: {
            args: Prisma.CmsTestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>[]
          }
          create: {
            args: Prisma.CmsTestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>
          }
          createMany: {
            args: Prisma.CmsTestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsTestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>[]
          }
          delete: {
            args: Prisma.CmsTestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>
          }
          update: {
            args: Prisma.CmsTestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>
          }
          deleteMany: {
            args: Prisma.CmsTestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsTestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsTestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>[]
          }
          upsert: {
            args: Prisma.CmsTestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTestimonialPayload>
          }
          aggregate: {
            args: Prisma.CmsTestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsTestimonial>
          }
          groupBy: {
            args: Prisma.CmsTestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsTestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsTestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<CmsTestimonialCountAggregateOutputType> | number
          }
        }
      }
      CmsProduct: {
        payload: Prisma.$CmsProductPayload<ExtArgs>
        fields: Prisma.CmsProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>
          }
          findFirst: {
            args: Prisma.CmsProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>
          }
          findMany: {
            args: Prisma.CmsProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>[]
          }
          create: {
            args: Prisma.CmsProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>
          }
          createMany: {
            args: Prisma.CmsProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>[]
          }
          delete: {
            args: Prisma.CmsProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>
          }
          update: {
            args: Prisma.CmsProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>
          }
          deleteMany: {
            args: Prisma.CmsProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>[]
          }
          upsert: {
            args: Prisma.CmsProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsProductPayload>
          }
          aggregate: {
            args: Prisma.CmsProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsProduct>
          }
          groupBy: {
            args: Prisma.CmsProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsProductCountArgs<ExtArgs>
            result: $Utils.Optional<CmsProductCountAggregateOutputType> | number
          }
        }
      }
      CmsLead: {
        payload: Prisma.$CmsLeadPayload<ExtArgs>
        fields: Prisma.CmsLeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsLeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsLeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>
          }
          findFirst: {
            args: Prisma.CmsLeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsLeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>
          }
          findMany: {
            args: Prisma.CmsLeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>[]
          }
          create: {
            args: Prisma.CmsLeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>
          }
          createMany: {
            args: Prisma.CmsLeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsLeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>[]
          }
          delete: {
            args: Prisma.CmsLeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>
          }
          update: {
            args: Prisma.CmsLeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>
          }
          deleteMany: {
            args: Prisma.CmsLeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsLeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsLeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>[]
          }
          upsert: {
            args: Prisma.CmsLeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsLeadPayload>
          }
          aggregate: {
            args: Prisma.CmsLeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsLead>
          }
          groupBy: {
            args: Prisma.CmsLeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsLeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsLeadCountArgs<ExtArgs>
            result: $Utils.Optional<CmsLeadCountAggregateOutputType> | number
          }
        }
      }
      CmsAd: {
        payload: Prisma.$CmsAdPayload<ExtArgs>
        fields: Prisma.CmsAdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsAdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsAdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>
          }
          findFirst: {
            args: Prisma.CmsAdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsAdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>
          }
          findMany: {
            args: Prisma.CmsAdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>[]
          }
          create: {
            args: Prisma.CmsAdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>
          }
          createMany: {
            args: Prisma.CmsAdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsAdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>[]
          }
          delete: {
            args: Prisma.CmsAdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>
          }
          update: {
            args: Prisma.CmsAdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>
          }
          deleteMany: {
            args: Prisma.CmsAdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsAdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsAdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>[]
          }
          upsert: {
            args: Prisma.CmsAdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdPayload>
          }
          aggregate: {
            args: Prisma.CmsAdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsAd>
          }
          groupBy: {
            args: Prisma.CmsAdGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsAdGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsAdCountArgs<ExtArgs>
            result: $Utils.Optional<CmsAdCountAggregateOutputType> | number
          }
        }
      }
      CmsAdEvent: {
        payload: Prisma.$CmsAdEventPayload<ExtArgs>
        fields: Prisma.CmsAdEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsAdEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsAdEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>
          }
          findFirst: {
            args: Prisma.CmsAdEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsAdEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>
          }
          findMany: {
            args: Prisma.CmsAdEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>[]
          }
          create: {
            args: Prisma.CmsAdEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>
          }
          createMany: {
            args: Prisma.CmsAdEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsAdEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>[]
          }
          delete: {
            args: Prisma.CmsAdEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>
          }
          update: {
            args: Prisma.CmsAdEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>
          }
          deleteMany: {
            args: Prisma.CmsAdEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsAdEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsAdEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>[]
          }
          upsert: {
            args: Prisma.CmsAdEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAdEventPayload>
          }
          aggregate: {
            args: Prisma.CmsAdEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsAdEvent>
          }
          groupBy: {
            args: Prisma.CmsAdEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsAdEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsAdEventCountArgs<ExtArgs>
            result: $Utils.Optional<CmsAdEventCountAggregateOutputType> | number
          }
        }
      }
      CmsSettings: {
        payload: Prisma.$CmsSettingsPayload<ExtArgs>
        fields: Prisma.CmsSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>
          }
          findFirst: {
            args: Prisma.CmsSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>
          }
          findMany: {
            args: Prisma.CmsSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>[]
          }
          create: {
            args: Prisma.CmsSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>
          }
          createMany: {
            args: Prisma.CmsSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>[]
          }
          delete: {
            args: Prisma.CmsSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>
          }
          update: {
            args: Prisma.CmsSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>
          }
          deleteMany: {
            args: Prisma.CmsSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>[]
          }
          upsert: {
            args: Prisma.CmsSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSettingsPayload>
          }
          aggregate: {
            args: Prisma.CmsSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsSettings>
          }
          groupBy: {
            args: Prisma.CmsSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<CmsSettingsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    cmsAdmin?: CmsAdminOmit
    cmsCategory?: CmsCategoryOmit
    cmsSubCategory?: CmsSubCategoryOmit
    cmsBlog?: CmsBlogOmit
    cmsPartner?: CmsPartnerOmit
    cmsTestimonial?: CmsTestimonialOmit
    cmsProduct?: CmsProductOmit
    cmsLead?: CmsLeadOmit
    cmsAd?: CmsAdOmit
    cmsAdEvent?: CmsAdEventOmit
    cmsSettings?: CmsSettingsOmit
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
   * Count Type CmsCategoryCountOutputType
   */

  export type CmsCategoryCountOutputType = {
    subCategories: number
    blogs: number
    products: number
    leads: number
  }

  export type CmsCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CmsCategoryCountOutputTypeCountSubCategoriesArgs
    blogs?: boolean | CmsCategoryCountOutputTypeCountBlogsArgs
    products?: boolean | CmsCategoryCountOutputTypeCountProductsArgs
    leads?: boolean | CmsCategoryCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CmsCategoryCountOutputType without action
   */
  export type CmsCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategoryCountOutputType
     */
    select?: CmsCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsCategoryCountOutputType without action
   */
  export type CmsCategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSubCategoryWhereInput
  }

  /**
   * CmsCategoryCountOutputType without action
   */
  export type CmsCategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBlogWhereInput
  }

  /**
   * CmsCategoryCountOutputType without action
   */
  export type CmsCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsProductWhereInput
  }

  /**
   * CmsCategoryCountOutputType without action
   */
  export type CmsCategoryCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsLeadWhereInput
  }


  /**
   * Count Type CmsSubCategoryCountOutputType
   */

  export type CmsSubCategoryCountOutputType = {
    blogs: number
    products: number
  }

  export type CmsSubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | CmsSubCategoryCountOutputTypeCountBlogsArgs
    products?: boolean | CmsSubCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CmsSubCategoryCountOutputType without action
   */
  export type CmsSubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategoryCountOutputType
     */
    select?: CmsSubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsSubCategoryCountOutputType without action
   */
  export type CmsSubCategoryCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBlogWhereInput
  }

  /**
   * CmsSubCategoryCountOutputType without action
   */
  export type CmsSubCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsProductWhereInput
  }


  /**
   * Count Type CmsProductCountOutputType
   */

  export type CmsProductCountOutputType = {
    leads: number
  }

  export type CmsProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | CmsProductCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * CmsProductCountOutputType without action
   */
  export type CmsProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProductCountOutputType
     */
    select?: CmsProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsProductCountOutputType without action
   */
  export type CmsProductCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsLeadWhereInput
  }


  /**
   * Count Type CmsAdCountOutputType
   */

  export type CmsAdCountOutputType = {
    events: number
  }

  export type CmsAdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CmsAdCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CmsAdCountOutputType without action
   */
  export type CmsAdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdCountOutputType
     */
    select?: CmsAdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsAdCountOutputType without action
   */
  export type CmsAdCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAdEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CmsAdmin
   */

  export type AggregateCmsAdmin = {
    _count: CmsAdminCountAggregateOutputType | null
    _min: CmsAdminMinAggregateOutputType | null
    _max: CmsAdminMaxAggregateOutputType | null
  }

  export type CmsAdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.CmsAdminRole | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.CmsAdminRole | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAdminCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsAdminMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAdminMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAdminCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAdmin to aggregate.
     */
    where?: CmsAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdmins to fetch.
     */
    orderBy?: CmsAdminOrderByWithRelationInput | CmsAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsAdmins
    **/
    _count?: true | CmsAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsAdminMaxAggregateInputType
  }

  export type GetCmsAdminAggregateType<T extends CmsAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsAdmin[P]>
      : GetScalarType<T[P], AggregateCmsAdmin[P]>
  }




  export type CmsAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAdminWhereInput
    orderBy?: CmsAdminOrderByWithAggregationInput | CmsAdminOrderByWithAggregationInput[]
    by: CmsAdminScalarFieldEnum[] | CmsAdminScalarFieldEnum
    having?: CmsAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsAdminCountAggregateInputType | true
    _min?: CmsAdminMinAggregateInputType
    _max?: CmsAdminMaxAggregateInputType
  }

  export type CmsAdminGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.CmsAdminRole
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CmsAdminCountAggregateOutputType | null
    _min: CmsAdminMinAggregateOutputType | null
    _max: CmsAdminMaxAggregateOutputType | null
  }

  type GetCmsAdminGroupByPayload<T extends CmsAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsAdminGroupByOutputType[P]>
            : GetScalarType<T[P], CmsAdminGroupByOutputType[P]>
        }
      >
    >


  export type CmsAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAdmin"]>

  export type CmsAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAdmin"]>

  export type CmsAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAdmin"]>

  export type CmsAdminSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsAdmin"]>

  export type $CmsAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.CmsAdminRole
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsAdmin"]>
    composites: {}
  }

  type CmsAdminGetPayload<S extends boolean | null | undefined | CmsAdminDefaultArgs> = $Result.GetResult<Prisma.$CmsAdminPayload, S>

  type CmsAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsAdminCountAggregateInputType | true
    }

  export interface CmsAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsAdmin'], meta: { name: 'CmsAdmin' } }
    /**
     * Find zero or one CmsAdmin that matches the filter.
     * @param {CmsAdminFindUniqueArgs} args - Arguments to find a CmsAdmin
     * @example
     * // Get one CmsAdmin
     * const cmsAdmin = await prisma.cmsAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsAdminFindUniqueArgs>(args: SelectSubset<T, CmsAdminFindUniqueArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsAdminFindUniqueOrThrowArgs} args - Arguments to find a CmsAdmin
     * @example
     * // Get one CmsAdmin
     * const cmsAdmin = await prisma.cmsAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminFindFirstArgs} args - Arguments to find a CmsAdmin
     * @example
     * // Get one CmsAdmin
     * const cmsAdmin = await prisma.cmsAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsAdminFindFirstArgs>(args?: SelectSubset<T, CmsAdminFindFirstArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminFindFirstOrThrowArgs} args - Arguments to find a CmsAdmin
     * @example
     * // Get one CmsAdmin
     * const cmsAdmin = await prisma.cmsAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsAdmins
     * const cmsAdmins = await prisma.cmsAdmin.findMany()
     * 
     * // Get first 10 CmsAdmins
     * const cmsAdmins = await prisma.cmsAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsAdminWithIdOnly = await prisma.cmsAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsAdminFindManyArgs>(args?: SelectSubset<T, CmsAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsAdmin.
     * @param {CmsAdminCreateArgs} args - Arguments to create a CmsAdmin.
     * @example
     * // Create one CmsAdmin
     * const CmsAdmin = await prisma.cmsAdmin.create({
     *   data: {
     *     // ... data to create a CmsAdmin
     *   }
     * })
     * 
     */
    create<T extends CmsAdminCreateArgs>(args: SelectSubset<T, CmsAdminCreateArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsAdmins.
     * @param {CmsAdminCreateManyArgs} args - Arguments to create many CmsAdmins.
     * @example
     * // Create many CmsAdmins
     * const cmsAdmin = await prisma.cmsAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsAdminCreateManyArgs>(args?: SelectSubset<T, CmsAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsAdmins and returns the data saved in the database.
     * @param {CmsAdminCreateManyAndReturnArgs} args - Arguments to create many CmsAdmins.
     * @example
     * // Create many CmsAdmins
     * const cmsAdmin = await prisma.cmsAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsAdmins and only return the `id`
     * const cmsAdminWithIdOnly = await prisma.cmsAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsAdmin.
     * @param {CmsAdminDeleteArgs} args - Arguments to delete one CmsAdmin.
     * @example
     * // Delete one CmsAdmin
     * const CmsAdmin = await prisma.cmsAdmin.delete({
     *   where: {
     *     // ... filter to delete one CmsAdmin
     *   }
     * })
     * 
     */
    delete<T extends CmsAdminDeleteArgs>(args: SelectSubset<T, CmsAdminDeleteArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsAdmin.
     * @param {CmsAdminUpdateArgs} args - Arguments to update one CmsAdmin.
     * @example
     * // Update one CmsAdmin
     * const cmsAdmin = await prisma.cmsAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsAdminUpdateArgs>(args: SelectSubset<T, CmsAdminUpdateArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsAdmins.
     * @param {CmsAdminDeleteManyArgs} args - Arguments to filter CmsAdmins to delete.
     * @example
     * // Delete a few CmsAdmins
     * const { count } = await prisma.cmsAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsAdminDeleteManyArgs>(args?: SelectSubset<T, CmsAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsAdmins
     * const cmsAdmin = await prisma.cmsAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsAdminUpdateManyArgs>(args: SelectSubset<T, CmsAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAdmins and returns the data updated in the database.
     * @param {CmsAdminUpdateManyAndReturnArgs} args - Arguments to update many CmsAdmins.
     * @example
     * // Update many CmsAdmins
     * const cmsAdmin = await prisma.cmsAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsAdmins and only return the `id`
     * const cmsAdminWithIdOnly = await prisma.cmsAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsAdmin.
     * @param {CmsAdminUpsertArgs} args - Arguments to update or create a CmsAdmin.
     * @example
     * // Update or create a CmsAdmin
     * const cmsAdmin = await prisma.cmsAdmin.upsert({
     *   create: {
     *     // ... data to create a CmsAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsAdmin we want to update
     *   }
     * })
     */
    upsert<T extends CmsAdminUpsertArgs>(args: SelectSubset<T, CmsAdminUpsertArgs<ExtArgs>>): Prisma__CmsAdminClient<$Result.GetResult<Prisma.$CmsAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminCountArgs} args - Arguments to filter CmsAdmins to count.
     * @example
     * // Count the number of CmsAdmins
     * const count = await prisma.cmsAdmin.count({
     *   where: {
     *     // ... the filter for the CmsAdmins we want to count
     *   }
     * })
    **/
    count<T extends CmsAdminCountArgs>(
      args?: Subset<T, CmsAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsAdminAggregateArgs>(args: Subset<T, CmsAdminAggregateArgs>): Prisma.PrismaPromise<GetCmsAdminAggregateType<T>>

    /**
     * Group by CmsAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdminGroupByArgs} args - Group by arguments.
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
      T extends CmsAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsAdminGroupByArgs['orderBy'] }
        : { orderBy?: CmsAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsAdmin model
   */
  readonly fields: CmsAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CmsAdmin model
   */
  interface CmsAdminFieldRefs {
    readonly id: FieldRef<"CmsAdmin", 'String'>
    readonly email: FieldRef<"CmsAdmin", 'String'>
    readonly passwordHash: FieldRef<"CmsAdmin", 'String'>
    readonly name: FieldRef<"CmsAdmin", 'String'>
    readonly role: FieldRef<"CmsAdmin", 'CmsAdminRole'>
    readonly isActive: FieldRef<"CmsAdmin", 'Boolean'>
    readonly lastLoginAt: FieldRef<"CmsAdmin", 'DateTime'>
    readonly createdAt: FieldRef<"CmsAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsAdmin findUnique
   */
  export type CmsAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * Filter, which CmsAdmin to fetch.
     */
    where: CmsAdminWhereUniqueInput
  }

  /**
   * CmsAdmin findUniqueOrThrow
   */
  export type CmsAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * Filter, which CmsAdmin to fetch.
     */
    where: CmsAdminWhereUniqueInput
  }

  /**
   * CmsAdmin findFirst
   */
  export type CmsAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * Filter, which CmsAdmin to fetch.
     */
    where?: CmsAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdmins to fetch.
     */
    orderBy?: CmsAdminOrderByWithRelationInput | CmsAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAdmins.
     */
    cursor?: CmsAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAdmins.
     */
    distinct?: CmsAdminScalarFieldEnum | CmsAdminScalarFieldEnum[]
  }

  /**
   * CmsAdmin findFirstOrThrow
   */
  export type CmsAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * Filter, which CmsAdmin to fetch.
     */
    where?: CmsAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdmins to fetch.
     */
    orderBy?: CmsAdminOrderByWithRelationInput | CmsAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAdmins.
     */
    cursor?: CmsAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAdmins.
     */
    distinct?: CmsAdminScalarFieldEnum | CmsAdminScalarFieldEnum[]
  }

  /**
   * CmsAdmin findMany
   */
  export type CmsAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * Filter, which CmsAdmins to fetch.
     */
    where?: CmsAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdmins to fetch.
     */
    orderBy?: CmsAdminOrderByWithRelationInput | CmsAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsAdmins.
     */
    cursor?: CmsAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAdmins.
     */
    distinct?: CmsAdminScalarFieldEnum | CmsAdminScalarFieldEnum[]
  }

  /**
   * CmsAdmin create
   */
  export type CmsAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsAdmin.
     */
    data: XOR<CmsAdminCreateInput, CmsAdminUncheckedCreateInput>
  }

  /**
   * CmsAdmin createMany
   */
  export type CmsAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsAdmins.
     */
    data: CmsAdminCreateManyInput | CmsAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAdmin createManyAndReturn
   */
  export type CmsAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * The data used to create many CmsAdmins.
     */
    data: CmsAdminCreateManyInput | CmsAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAdmin update
   */
  export type CmsAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsAdmin.
     */
    data: XOR<CmsAdminUpdateInput, CmsAdminUncheckedUpdateInput>
    /**
     * Choose, which CmsAdmin to update.
     */
    where: CmsAdminWhereUniqueInput
  }

  /**
   * CmsAdmin updateMany
   */
  export type CmsAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsAdmins.
     */
    data: XOR<CmsAdminUpdateManyMutationInput, CmsAdminUncheckedUpdateManyInput>
    /**
     * Filter which CmsAdmins to update
     */
    where?: CmsAdminWhereInput
    /**
     * Limit how many CmsAdmins to update.
     */
    limit?: number
  }

  /**
   * CmsAdmin updateManyAndReturn
   */
  export type CmsAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * The data used to update CmsAdmins.
     */
    data: XOR<CmsAdminUpdateManyMutationInput, CmsAdminUncheckedUpdateManyInput>
    /**
     * Filter which CmsAdmins to update
     */
    where?: CmsAdminWhereInput
    /**
     * Limit how many CmsAdmins to update.
     */
    limit?: number
  }

  /**
   * CmsAdmin upsert
   */
  export type CmsAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsAdmin to update in case it exists.
     */
    where: CmsAdminWhereUniqueInput
    /**
     * In case the CmsAdmin found by the `where` argument doesn't exist, create a new CmsAdmin with this data.
     */
    create: XOR<CmsAdminCreateInput, CmsAdminUncheckedCreateInput>
    /**
     * In case the CmsAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsAdminUpdateInput, CmsAdminUncheckedUpdateInput>
  }

  /**
   * CmsAdmin delete
   */
  export type CmsAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
    /**
     * Filter which CmsAdmin to delete.
     */
    where: CmsAdminWhereUniqueInput
  }

  /**
   * CmsAdmin deleteMany
   */
  export type CmsAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAdmins to delete
     */
    where?: CmsAdminWhereInput
    /**
     * Limit how many CmsAdmins to delete.
     */
    limit?: number
  }

  /**
   * CmsAdmin without action
   */
  export type CmsAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdmin
     */
    select?: CmsAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdmin
     */
    omit?: CmsAdminOmit<ExtArgs> | null
  }


  /**
   * Model CmsCategory
   */

  export type AggregateCmsCategory = {
    _count: CmsCategoryCountAggregateOutputType | null
    _min: CmsCategoryMinAggregateOutputType | null
    _max: CmsCategoryMaxAggregateOutputType | null
  }

  export type CmsCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsCategory to aggregate.
     */
    where?: CmsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsCategories to fetch.
     */
    orderBy?: CmsCategoryOrderByWithRelationInput | CmsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsCategories
    **/
    _count?: true | CmsCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsCategoryMaxAggregateInputType
  }

  export type GetCmsCategoryAggregateType<T extends CmsCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsCategory[P]>
      : GetScalarType<T[P], AggregateCmsCategory[P]>
  }




  export type CmsCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsCategoryWhereInput
    orderBy?: CmsCategoryOrderByWithAggregationInput | CmsCategoryOrderByWithAggregationInput[]
    by: CmsCategoryScalarFieldEnum[] | CmsCategoryScalarFieldEnum
    having?: CmsCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsCategoryCountAggregateInputType | true
    _min?: CmsCategoryMinAggregateInputType
    _max?: CmsCategoryMaxAggregateInputType
  }

  export type CmsCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CmsCategoryCountAggregateOutputType | null
    _min: CmsCategoryMinAggregateOutputType | null
    _max: CmsCategoryMaxAggregateOutputType | null
  }

  type GetCmsCategoryGroupByPayload<T extends CmsCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CmsCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CmsCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subCategories?: boolean | CmsCategory$subCategoriesArgs<ExtArgs>
    blogs?: boolean | CmsCategory$blogsArgs<ExtArgs>
    products?: boolean | CmsCategory$productsArgs<ExtArgs>
    leads?: boolean | CmsCategory$leadsArgs<ExtArgs>
    _count?: boolean | CmsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsCategory"]>

  export type CmsCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsCategory"]>

  export type CmsCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsCategory"]>

  export type CmsCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsCategory"]>
  export type CmsCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CmsCategory$subCategoriesArgs<ExtArgs>
    blogs?: boolean | CmsCategory$blogsArgs<ExtArgs>
    products?: boolean | CmsCategory$productsArgs<ExtArgs>
    leads?: boolean | CmsCategory$leadsArgs<ExtArgs>
    _count?: boolean | CmsCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CmsCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CmsCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsCategory"
    objects: {
      subCategories: Prisma.$CmsSubCategoryPayload<ExtArgs>[]
      blogs: Prisma.$CmsBlogPayload<ExtArgs>[]
      products: Prisma.$CmsProductPayload<ExtArgs>[]
      leads: Prisma.$CmsLeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsCategory"]>
    composites: {}
  }

  type CmsCategoryGetPayload<S extends boolean | null | undefined | CmsCategoryDefaultArgs> = $Result.GetResult<Prisma.$CmsCategoryPayload, S>

  type CmsCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsCategoryCountAggregateInputType | true
    }

  export interface CmsCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsCategory'], meta: { name: 'CmsCategory' } }
    /**
     * Find zero or one CmsCategory that matches the filter.
     * @param {CmsCategoryFindUniqueArgs} args - Arguments to find a CmsCategory
     * @example
     * // Get one CmsCategory
     * const cmsCategory = await prisma.cmsCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsCategoryFindUniqueArgs>(args: SelectSubset<T, CmsCategoryFindUniqueArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsCategoryFindUniqueOrThrowArgs} args - Arguments to find a CmsCategory
     * @example
     * // Get one CmsCategory
     * const cmsCategory = await prisma.cmsCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryFindFirstArgs} args - Arguments to find a CmsCategory
     * @example
     * // Get one CmsCategory
     * const cmsCategory = await prisma.cmsCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsCategoryFindFirstArgs>(args?: SelectSubset<T, CmsCategoryFindFirstArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryFindFirstOrThrowArgs} args - Arguments to find a CmsCategory
     * @example
     * // Get one CmsCategory
     * const cmsCategory = await prisma.cmsCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsCategories
     * const cmsCategories = await prisma.cmsCategory.findMany()
     * 
     * // Get first 10 CmsCategories
     * const cmsCategories = await prisma.cmsCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsCategoryWithIdOnly = await prisma.cmsCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsCategoryFindManyArgs>(args?: SelectSubset<T, CmsCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsCategory.
     * @param {CmsCategoryCreateArgs} args - Arguments to create a CmsCategory.
     * @example
     * // Create one CmsCategory
     * const CmsCategory = await prisma.cmsCategory.create({
     *   data: {
     *     // ... data to create a CmsCategory
     *   }
     * })
     * 
     */
    create<T extends CmsCategoryCreateArgs>(args: SelectSubset<T, CmsCategoryCreateArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsCategories.
     * @param {CmsCategoryCreateManyArgs} args - Arguments to create many CmsCategories.
     * @example
     * // Create many CmsCategories
     * const cmsCategory = await prisma.cmsCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsCategoryCreateManyArgs>(args?: SelectSubset<T, CmsCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsCategories and returns the data saved in the database.
     * @param {CmsCategoryCreateManyAndReturnArgs} args - Arguments to create many CmsCategories.
     * @example
     * // Create many CmsCategories
     * const cmsCategory = await prisma.cmsCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsCategories and only return the `id`
     * const cmsCategoryWithIdOnly = await prisma.cmsCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsCategory.
     * @param {CmsCategoryDeleteArgs} args - Arguments to delete one CmsCategory.
     * @example
     * // Delete one CmsCategory
     * const CmsCategory = await prisma.cmsCategory.delete({
     *   where: {
     *     // ... filter to delete one CmsCategory
     *   }
     * })
     * 
     */
    delete<T extends CmsCategoryDeleteArgs>(args: SelectSubset<T, CmsCategoryDeleteArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsCategory.
     * @param {CmsCategoryUpdateArgs} args - Arguments to update one CmsCategory.
     * @example
     * // Update one CmsCategory
     * const cmsCategory = await prisma.cmsCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsCategoryUpdateArgs>(args: SelectSubset<T, CmsCategoryUpdateArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsCategories.
     * @param {CmsCategoryDeleteManyArgs} args - Arguments to filter CmsCategories to delete.
     * @example
     * // Delete a few CmsCategories
     * const { count } = await prisma.cmsCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsCategoryDeleteManyArgs>(args?: SelectSubset<T, CmsCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsCategories
     * const cmsCategory = await prisma.cmsCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsCategoryUpdateManyArgs>(args: SelectSubset<T, CmsCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsCategories and returns the data updated in the database.
     * @param {CmsCategoryUpdateManyAndReturnArgs} args - Arguments to update many CmsCategories.
     * @example
     * // Update many CmsCategories
     * const cmsCategory = await prisma.cmsCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsCategories and only return the `id`
     * const cmsCategoryWithIdOnly = await prisma.cmsCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsCategory.
     * @param {CmsCategoryUpsertArgs} args - Arguments to update or create a CmsCategory.
     * @example
     * // Update or create a CmsCategory
     * const cmsCategory = await prisma.cmsCategory.upsert({
     *   create: {
     *     // ... data to create a CmsCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsCategory we want to update
     *   }
     * })
     */
    upsert<T extends CmsCategoryUpsertArgs>(args: SelectSubset<T, CmsCategoryUpsertArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryCountArgs} args - Arguments to filter CmsCategories to count.
     * @example
     * // Count the number of CmsCategories
     * const count = await prisma.cmsCategory.count({
     *   where: {
     *     // ... the filter for the CmsCategories we want to count
     *   }
     * })
    **/
    count<T extends CmsCategoryCountArgs>(
      args?: Subset<T, CmsCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsCategoryAggregateArgs>(args: Subset<T, CmsCategoryAggregateArgs>): Prisma.PrismaPromise<GetCmsCategoryAggregateType<T>>

    /**
     * Group by CmsCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsCategoryGroupByArgs} args - Group by arguments.
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
      T extends CmsCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CmsCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsCategory model
   */
  readonly fields: CmsCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategories<T extends CmsCategory$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, CmsCategory$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogs<T extends CmsCategory$blogsArgs<ExtArgs> = {}>(args?: Subset<T, CmsCategory$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends CmsCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, CmsCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends CmsCategory$leadsArgs<ExtArgs> = {}>(args?: Subset<T, CmsCategory$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CmsCategory model
   */
  interface CmsCategoryFieldRefs {
    readonly id: FieldRef<"CmsCategory", 'String'>
    readonly name: FieldRef<"CmsCategory", 'String'>
    readonly slug: FieldRef<"CmsCategory", 'String'>
    readonly imageUrl: FieldRef<"CmsCategory", 'String'>
    readonly isActive: FieldRef<"CmsCategory", 'Boolean'>
    readonly createdAt: FieldRef<"CmsCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsCategory findUnique
   */
  export type CmsCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsCategory to fetch.
     */
    where: CmsCategoryWhereUniqueInput
  }

  /**
   * CmsCategory findUniqueOrThrow
   */
  export type CmsCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsCategory to fetch.
     */
    where: CmsCategoryWhereUniqueInput
  }

  /**
   * CmsCategory findFirst
   */
  export type CmsCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsCategory to fetch.
     */
    where?: CmsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsCategories to fetch.
     */
    orderBy?: CmsCategoryOrderByWithRelationInput | CmsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsCategories.
     */
    cursor?: CmsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsCategories.
     */
    distinct?: CmsCategoryScalarFieldEnum | CmsCategoryScalarFieldEnum[]
  }

  /**
   * CmsCategory findFirstOrThrow
   */
  export type CmsCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsCategory to fetch.
     */
    where?: CmsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsCategories to fetch.
     */
    orderBy?: CmsCategoryOrderByWithRelationInput | CmsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsCategories.
     */
    cursor?: CmsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsCategories.
     */
    distinct?: CmsCategoryScalarFieldEnum | CmsCategoryScalarFieldEnum[]
  }

  /**
   * CmsCategory findMany
   */
  export type CmsCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsCategories to fetch.
     */
    where?: CmsCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsCategories to fetch.
     */
    orderBy?: CmsCategoryOrderByWithRelationInput | CmsCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsCategories.
     */
    cursor?: CmsCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsCategories.
     */
    distinct?: CmsCategoryScalarFieldEnum | CmsCategoryScalarFieldEnum[]
  }

  /**
   * CmsCategory create
   */
  export type CmsCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsCategory.
     */
    data: XOR<CmsCategoryCreateInput, CmsCategoryUncheckedCreateInput>
  }

  /**
   * CmsCategory createMany
   */
  export type CmsCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsCategories.
     */
    data: CmsCategoryCreateManyInput | CmsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsCategory createManyAndReturn
   */
  export type CmsCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many CmsCategories.
     */
    data: CmsCategoryCreateManyInput | CmsCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsCategory update
   */
  export type CmsCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsCategory.
     */
    data: XOR<CmsCategoryUpdateInput, CmsCategoryUncheckedUpdateInput>
    /**
     * Choose, which CmsCategory to update.
     */
    where: CmsCategoryWhereUniqueInput
  }

  /**
   * CmsCategory updateMany
   */
  export type CmsCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsCategories.
     */
    data: XOR<CmsCategoryUpdateManyMutationInput, CmsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CmsCategories to update
     */
    where?: CmsCategoryWhereInput
    /**
     * Limit how many CmsCategories to update.
     */
    limit?: number
  }

  /**
   * CmsCategory updateManyAndReturn
   */
  export type CmsCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * The data used to update CmsCategories.
     */
    data: XOR<CmsCategoryUpdateManyMutationInput, CmsCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CmsCategories to update
     */
    where?: CmsCategoryWhereInput
    /**
     * Limit how many CmsCategories to update.
     */
    limit?: number
  }

  /**
   * CmsCategory upsert
   */
  export type CmsCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsCategory to update in case it exists.
     */
    where: CmsCategoryWhereUniqueInput
    /**
     * In case the CmsCategory found by the `where` argument doesn't exist, create a new CmsCategory with this data.
     */
    create: XOR<CmsCategoryCreateInput, CmsCategoryUncheckedCreateInput>
    /**
     * In case the CmsCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsCategoryUpdateInput, CmsCategoryUncheckedUpdateInput>
  }

  /**
   * CmsCategory delete
   */
  export type CmsCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    /**
     * Filter which CmsCategory to delete.
     */
    where: CmsCategoryWhereUniqueInput
  }

  /**
   * CmsCategory deleteMany
   */
  export type CmsCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsCategories to delete
     */
    where?: CmsCategoryWhereInput
    /**
     * Limit how many CmsCategories to delete.
     */
    limit?: number
  }

  /**
   * CmsCategory.subCategories
   */
  export type CmsCategory$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    where?: CmsSubCategoryWhereInput
    orderBy?: CmsSubCategoryOrderByWithRelationInput | CmsSubCategoryOrderByWithRelationInput[]
    cursor?: CmsSubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsSubCategoryScalarFieldEnum | CmsSubCategoryScalarFieldEnum[]
  }

  /**
   * CmsCategory.blogs
   */
  export type CmsCategory$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    where?: CmsBlogWhereInput
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    cursor?: CmsBlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsCategory.products
   */
  export type CmsCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    where?: CmsProductWhereInput
    orderBy?: CmsProductOrderByWithRelationInput | CmsProductOrderByWithRelationInput[]
    cursor?: CmsProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsProductScalarFieldEnum | CmsProductScalarFieldEnum[]
  }

  /**
   * CmsCategory.leads
   */
  export type CmsCategory$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    where?: CmsLeadWhereInput
    orderBy?: CmsLeadOrderByWithRelationInput | CmsLeadOrderByWithRelationInput[]
    cursor?: CmsLeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsLeadScalarFieldEnum | CmsLeadScalarFieldEnum[]
  }

  /**
   * CmsCategory without action
   */
  export type CmsCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
  }


  /**
   * Model CmsSubCategory
   */

  export type AggregateCmsSubCategory = {
    _count: CmsSubCategoryCountAggregateOutputType | null
    _min: CmsSubCategoryMinAggregateOutputType | null
    _max: CmsSubCategoryMaxAggregateOutputType | null
  }

  export type CmsSubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type CmsSubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type CmsSubCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type CmsSubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type CmsSubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type CmsSubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type CmsSubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSubCategory to aggregate.
     */
    where?: CmsSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSubCategories to fetch.
     */
    orderBy?: CmsSubCategoryOrderByWithRelationInput | CmsSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsSubCategories
    **/
    _count?: true | CmsSubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsSubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsSubCategoryMaxAggregateInputType
  }

  export type GetCmsSubCategoryAggregateType<T extends CmsSubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsSubCategory[P]>
      : GetScalarType<T[P], AggregateCmsSubCategory[P]>
  }




  export type CmsSubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSubCategoryWhereInput
    orderBy?: CmsSubCategoryOrderByWithAggregationInput | CmsSubCategoryOrderByWithAggregationInput[]
    by: CmsSubCategoryScalarFieldEnum[] | CmsSubCategoryScalarFieldEnum
    having?: CmsSubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsSubCategoryCountAggregateInputType | true
    _min?: CmsSubCategoryMinAggregateInputType
    _max?: CmsSubCategoryMaxAggregateInputType
  }

  export type CmsSubCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    categoryId: string
    _count: CmsSubCategoryCountAggregateOutputType | null
    _min: CmsSubCategoryMinAggregateOutputType | null
    _max: CmsSubCategoryMaxAggregateOutputType | null
  }

  type GetCmsSubCategoryGroupByPayload<T extends CmsSubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsSubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsSubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsSubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CmsSubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CmsSubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | CmsCategoryDefaultArgs<ExtArgs>
    blogs?: boolean | CmsSubCategory$blogsArgs<ExtArgs>
    products?: boolean | CmsSubCategory$productsArgs<ExtArgs>
    _count?: boolean | CmsSubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSubCategory"]>

  export type CmsSubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | CmsCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSubCategory"]>

  export type CmsSubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | CmsCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSubCategory"]>

  export type CmsSubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type CmsSubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "imageUrl" | "isActive" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["cmsSubCategory"]>
  export type CmsSubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsCategoryDefaultArgs<ExtArgs>
    blogs?: boolean | CmsSubCategory$blogsArgs<ExtArgs>
    products?: boolean | CmsSubCategory$productsArgs<ExtArgs>
    _count?: boolean | CmsSubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsSubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsCategoryDefaultArgs<ExtArgs>
  }
  export type CmsSubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsCategoryDefaultArgs<ExtArgs>
  }

  export type $CmsSubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsSubCategory"
    objects: {
      category: Prisma.$CmsCategoryPayload<ExtArgs>
      blogs: Prisma.$CmsBlogPayload<ExtArgs>[]
      products: Prisma.$CmsProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      categoryId: string
    }, ExtArgs["result"]["cmsSubCategory"]>
    composites: {}
  }

  type CmsSubCategoryGetPayload<S extends boolean | null | undefined | CmsSubCategoryDefaultArgs> = $Result.GetResult<Prisma.$CmsSubCategoryPayload, S>

  type CmsSubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsSubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsSubCategoryCountAggregateInputType | true
    }

  export interface CmsSubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsSubCategory'], meta: { name: 'CmsSubCategory' } }
    /**
     * Find zero or one CmsSubCategory that matches the filter.
     * @param {CmsSubCategoryFindUniqueArgs} args - Arguments to find a CmsSubCategory
     * @example
     * // Get one CmsSubCategory
     * const cmsSubCategory = await prisma.cmsSubCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsSubCategoryFindUniqueArgs>(args: SelectSubset<T, CmsSubCategoryFindUniqueArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsSubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsSubCategoryFindUniqueOrThrowArgs} args - Arguments to find a CmsSubCategory
     * @example
     * // Get one CmsSubCategory
     * const cmsSubCategory = await prisma.cmsSubCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsSubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsSubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryFindFirstArgs} args - Arguments to find a CmsSubCategory
     * @example
     * // Get one CmsSubCategory
     * const cmsSubCategory = await prisma.cmsSubCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsSubCategoryFindFirstArgs>(args?: SelectSubset<T, CmsSubCategoryFindFirstArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryFindFirstOrThrowArgs} args - Arguments to find a CmsSubCategory
     * @example
     * // Get one CmsSubCategory
     * const cmsSubCategory = await prisma.cmsSubCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsSubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsSubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsSubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsSubCategories
     * const cmsSubCategories = await prisma.cmsSubCategory.findMany()
     * 
     * // Get first 10 CmsSubCategories
     * const cmsSubCategories = await prisma.cmsSubCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsSubCategoryWithIdOnly = await prisma.cmsSubCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsSubCategoryFindManyArgs>(args?: SelectSubset<T, CmsSubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsSubCategory.
     * @param {CmsSubCategoryCreateArgs} args - Arguments to create a CmsSubCategory.
     * @example
     * // Create one CmsSubCategory
     * const CmsSubCategory = await prisma.cmsSubCategory.create({
     *   data: {
     *     // ... data to create a CmsSubCategory
     *   }
     * })
     * 
     */
    create<T extends CmsSubCategoryCreateArgs>(args: SelectSubset<T, CmsSubCategoryCreateArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsSubCategories.
     * @param {CmsSubCategoryCreateManyArgs} args - Arguments to create many CmsSubCategories.
     * @example
     * // Create many CmsSubCategories
     * const cmsSubCategory = await prisma.cmsSubCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsSubCategoryCreateManyArgs>(args?: SelectSubset<T, CmsSubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsSubCategories and returns the data saved in the database.
     * @param {CmsSubCategoryCreateManyAndReturnArgs} args - Arguments to create many CmsSubCategories.
     * @example
     * // Create many CmsSubCategories
     * const cmsSubCategory = await prisma.cmsSubCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsSubCategories and only return the `id`
     * const cmsSubCategoryWithIdOnly = await prisma.cmsSubCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsSubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsSubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsSubCategory.
     * @param {CmsSubCategoryDeleteArgs} args - Arguments to delete one CmsSubCategory.
     * @example
     * // Delete one CmsSubCategory
     * const CmsSubCategory = await prisma.cmsSubCategory.delete({
     *   where: {
     *     // ... filter to delete one CmsSubCategory
     *   }
     * })
     * 
     */
    delete<T extends CmsSubCategoryDeleteArgs>(args: SelectSubset<T, CmsSubCategoryDeleteArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsSubCategory.
     * @param {CmsSubCategoryUpdateArgs} args - Arguments to update one CmsSubCategory.
     * @example
     * // Update one CmsSubCategory
     * const cmsSubCategory = await prisma.cmsSubCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsSubCategoryUpdateArgs>(args: SelectSubset<T, CmsSubCategoryUpdateArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsSubCategories.
     * @param {CmsSubCategoryDeleteManyArgs} args - Arguments to filter CmsSubCategories to delete.
     * @example
     * // Delete a few CmsSubCategories
     * const { count } = await prisma.cmsSubCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsSubCategoryDeleteManyArgs>(args?: SelectSubset<T, CmsSubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsSubCategories
     * const cmsSubCategory = await prisma.cmsSubCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsSubCategoryUpdateManyArgs>(args: SelectSubset<T, CmsSubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSubCategories and returns the data updated in the database.
     * @param {CmsSubCategoryUpdateManyAndReturnArgs} args - Arguments to update many CmsSubCategories.
     * @example
     * // Update many CmsSubCategories
     * const cmsSubCategory = await prisma.cmsSubCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsSubCategories and only return the `id`
     * const cmsSubCategoryWithIdOnly = await prisma.cmsSubCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsSubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsSubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsSubCategory.
     * @param {CmsSubCategoryUpsertArgs} args - Arguments to update or create a CmsSubCategory.
     * @example
     * // Update or create a CmsSubCategory
     * const cmsSubCategory = await prisma.cmsSubCategory.upsert({
     *   create: {
     *     // ... data to create a CmsSubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsSubCategory we want to update
     *   }
     * })
     */
    upsert<T extends CmsSubCategoryUpsertArgs>(args: SelectSubset<T, CmsSubCategoryUpsertArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsSubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryCountArgs} args - Arguments to filter CmsSubCategories to count.
     * @example
     * // Count the number of CmsSubCategories
     * const count = await prisma.cmsSubCategory.count({
     *   where: {
     *     // ... the filter for the CmsSubCategories we want to count
     *   }
     * })
    **/
    count<T extends CmsSubCategoryCountArgs>(
      args?: Subset<T, CmsSubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsSubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsSubCategoryAggregateArgs>(args: Subset<T, CmsSubCategoryAggregateArgs>): Prisma.PrismaPromise<GetCmsSubCategoryAggregateType<T>>

    /**
     * Group by CmsSubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSubCategoryGroupByArgs} args - Group by arguments.
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
      T extends CmsSubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsSubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CmsSubCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsSubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsSubCategory model
   */
  readonly fields: CmsSubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsSubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsSubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CmsCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsCategoryDefaultArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blogs<T extends CmsSubCategory$blogsArgs<ExtArgs> = {}>(args?: Subset<T, CmsSubCategory$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends CmsSubCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, CmsSubCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CmsSubCategory model
   */
  interface CmsSubCategoryFieldRefs {
    readonly id: FieldRef<"CmsSubCategory", 'String'>
    readonly name: FieldRef<"CmsSubCategory", 'String'>
    readonly slug: FieldRef<"CmsSubCategory", 'String'>
    readonly imageUrl: FieldRef<"CmsSubCategory", 'String'>
    readonly isActive: FieldRef<"CmsSubCategory", 'Boolean'>
    readonly createdAt: FieldRef<"CmsSubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsSubCategory", 'DateTime'>
    readonly categoryId: FieldRef<"CmsSubCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmsSubCategory findUnique
   */
  export type CmsSubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsSubCategory to fetch.
     */
    where: CmsSubCategoryWhereUniqueInput
  }

  /**
   * CmsSubCategory findUniqueOrThrow
   */
  export type CmsSubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsSubCategory to fetch.
     */
    where: CmsSubCategoryWhereUniqueInput
  }

  /**
   * CmsSubCategory findFirst
   */
  export type CmsSubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsSubCategory to fetch.
     */
    where?: CmsSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSubCategories to fetch.
     */
    orderBy?: CmsSubCategoryOrderByWithRelationInput | CmsSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSubCategories.
     */
    cursor?: CmsSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSubCategories.
     */
    distinct?: CmsSubCategoryScalarFieldEnum | CmsSubCategoryScalarFieldEnum[]
  }

  /**
   * CmsSubCategory findFirstOrThrow
   */
  export type CmsSubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsSubCategory to fetch.
     */
    where?: CmsSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSubCategories to fetch.
     */
    orderBy?: CmsSubCategoryOrderByWithRelationInput | CmsSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSubCategories.
     */
    cursor?: CmsSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSubCategories.
     */
    distinct?: CmsSubCategoryScalarFieldEnum | CmsSubCategoryScalarFieldEnum[]
  }

  /**
   * CmsSubCategory findMany
   */
  export type CmsSubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CmsSubCategories to fetch.
     */
    where?: CmsSubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSubCategories to fetch.
     */
    orderBy?: CmsSubCategoryOrderByWithRelationInput | CmsSubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsSubCategories.
     */
    cursor?: CmsSubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSubCategories.
     */
    distinct?: CmsSubCategoryScalarFieldEnum | CmsSubCategoryScalarFieldEnum[]
  }

  /**
   * CmsSubCategory create
   */
  export type CmsSubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsSubCategory.
     */
    data: XOR<CmsSubCategoryCreateInput, CmsSubCategoryUncheckedCreateInput>
  }

  /**
   * CmsSubCategory createMany
   */
  export type CmsSubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsSubCategories.
     */
    data: CmsSubCategoryCreateManyInput | CmsSubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSubCategory createManyAndReturn
   */
  export type CmsSubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many CmsSubCategories.
     */
    data: CmsSubCategoryCreateManyInput | CmsSubCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSubCategory update
   */
  export type CmsSubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsSubCategory.
     */
    data: XOR<CmsSubCategoryUpdateInput, CmsSubCategoryUncheckedUpdateInput>
    /**
     * Choose, which CmsSubCategory to update.
     */
    where: CmsSubCategoryWhereUniqueInput
  }

  /**
   * CmsSubCategory updateMany
   */
  export type CmsSubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsSubCategories.
     */
    data: XOR<CmsSubCategoryUpdateManyMutationInput, CmsSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CmsSubCategories to update
     */
    where?: CmsSubCategoryWhereInput
    /**
     * Limit how many CmsSubCategories to update.
     */
    limit?: number
  }

  /**
   * CmsSubCategory updateManyAndReturn
   */
  export type CmsSubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update CmsSubCategories.
     */
    data: XOR<CmsSubCategoryUpdateManyMutationInput, CmsSubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CmsSubCategories to update
     */
    where?: CmsSubCategoryWhereInput
    /**
     * Limit how many CmsSubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSubCategory upsert
   */
  export type CmsSubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsSubCategory to update in case it exists.
     */
    where: CmsSubCategoryWhereUniqueInput
    /**
     * In case the CmsSubCategory found by the `where` argument doesn't exist, create a new CmsSubCategory with this data.
     */
    create: XOR<CmsSubCategoryCreateInput, CmsSubCategoryUncheckedCreateInput>
    /**
     * In case the CmsSubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsSubCategoryUpdateInput, CmsSubCategoryUncheckedUpdateInput>
  }

  /**
   * CmsSubCategory delete
   */
  export type CmsSubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    /**
     * Filter which CmsSubCategory to delete.
     */
    where: CmsSubCategoryWhereUniqueInput
  }

  /**
   * CmsSubCategory deleteMany
   */
  export type CmsSubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSubCategories to delete
     */
    where?: CmsSubCategoryWhereInput
    /**
     * Limit how many CmsSubCategories to delete.
     */
    limit?: number
  }

  /**
   * CmsSubCategory.blogs
   */
  export type CmsSubCategory$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    where?: CmsBlogWhereInput
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    cursor?: CmsBlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsSubCategory.products
   */
  export type CmsSubCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    where?: CmsProductWhereInput
    orderBy?: CmsProductOrderByWithRelationInput | CmsProductOrderByWithRelationInput[]
    cursor?: CmsProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsProductScalarFieldEnum | CmsProductScalarFieldEnum[]
  }

  /**
   * CmsSubCategory without action
   */
  export type CmsSubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model CmsBlog
   */

  export type AggregateCmsBlog = {
    _count: CmsBlogCountAggregateOutputType | null
    _avg: CmsBlogAvgAggregateOutputType | null
    _sum: CmsBlogSumAggregateOutputType | null
    _min: CmsBlogMinAggregateOutputType | null
    _max: CmsBlogMaxAggregateOutputType | null
  }

  export type CmsBlogAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type CmsBlogSumAggregateOutputType = {
    viewCount: number | null
  }

  export type CmsBlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    author: string | null
    status: $Enums.CmsStatus | null
    publishedAt: Date | null
    seoTitle: string | null
    seoDescription: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    subCategoryId: string | null
  }

  export type CmsBlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    author: string | null
    status: $Enums.CmsStatus | null
    publishedAt: Date | null
    seoTitle: string | null
    seoDescription: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    subCategoryId: string | null
  }

  export type CmsBlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    coverImage: number
    tags: number
    author: number
    status: number
    publishedAt: number
    seoTitle: number
    seoDescription: number
    viewCount: number
    createdAt: number
    updatedAt: number
    categoryId: number
    subCategoryId: number
    _all: number
  }


  export type CmsBlogAvgAggregateInputType = {
    viewCount?: true
  }

  export type CmsBlogSumAggregateInputType = {
    viewCount?: true
  }

  export type CmsBlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    author?: true
    status?: true
    publishedAt?: true
    seoTitle?: true
    seoDescription?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    subCategoryId?: true
  }

  export type CmsBlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    author?: true
    status?: true
    publishedAt?: true
    seoTitle?: true
    seoDescription?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    subCategoryId?: true
  }

  export type CmsBlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    tags?: true
    author?: true
    status?: true
    publishedAt?: true
    seoTitle?: true
    seoDescription?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    subCategoryId?: true
    _all?: true
  }

  export type CmsBlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsBlog to aggregate.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsBlogs
    **/
    _count?: true | CmsBlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsBlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsBlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsBlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsBlogMaxAggregateInputType
  }

  export type GetCmsBlogAggregateType<T extends CmsBlogAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsBlog[P]>
      : GetScalarType<T[P], AggregateCmsBlog[P]>
  }




  export type CmsBlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBlogWhereInput
    orderBy?: CmsBlogOrderByWithAggregationInput | CmsBlogOrderByWithAggregationInput[]
    by: CmsBlogScalarFieldEnum[] | CmsBlogScalarFieldEnum
    having?: CmsBlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsBlogCountAggregateInputType | true
    _avg?: CmsBlogAvgAggregateInputType
    _sum?: CmsBlogSumAggregateInputType
    _min?: CmsBlogMinAggregateInputType
    _max?: CmsBlogMaxAggregateInputType
  }

  export type CmsBlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    coverImage: string | null
    tags: string[]
    author: string | null
    status: $Enums.CmsStatus
    publishedAt: Date | null
    seoTitle: string | null
    seoDescription: string | null
    viewCount: number
    createdAt: Date
    updatedAt: Date
    categoryId: string | null
    subCategoryId: string | null
    _count: CmsBlogCountAggregateOutputType | null
    _avg: CmsBlogAvgAggregateOutputType | null
    _sum: CmsBlogSumAggregateOutputType | null
    _min: CmsBlogMinAggregateOutputType | null
    _max: CmsBlogMaxAggregateOutputType | null
  }

  type GetCmsBlogGroupByPayload<T extends CmsBlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsBlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsBlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsBlogGroupByOutputType[P]>
            : GetScalarType<T[P], CmsBlogGroupByOutputType[P]>
        }
      >
    >


  export type CmsBlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    tags?: boolean
    author?: boolean
    status?: boolean
    publishedAt?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    category?: boolean | CmsBlog$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsBlog$subCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsBlog"]>

  export type CmsBlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    tags?: boolean
    author?: boolean
    status?: boolean
    publishedAt?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    category?: boolean | CmsBlog$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsBlog$subCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsBlog"]>

  export type CmsBlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    tags?: boolean
    author?: boolean
    status?: boolean
    publishedAt?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    category?: boolean | CmsBlog$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsBlog$subCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsBlog"]>

  export type CmsBlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    tags?: boolean
    author?: boolean
    status?: boolean
    publishedAt?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
  }

  export type CmsBlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "coverImage" | "tags" | "author" | "status" | "publishedAt" | "seoTitle" | "seoDescription" | "viewCount" | "createdAt" | "updatedAt" | "categoryId" | "subCategoryId", ExtArgs["result"]["cmsBlog"]>
  export type CmsBlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsBlog$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsBlog$subCategoryArgs<ExtArgs>
  }
  export type CmsBlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsBlog$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsBlog$subCategoryArgs<ExtArgs>
  }
  export type CmsBlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsBlog$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsBlog$subCategoryArgs<ExtArgs>
  }

  export type $CmsBlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsBlog"
    objects: {
      category: Prisma.$CmsCategoryPayload<ExtArgs> | null
      subCategory: Prisma.$CmsSubCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      coverImage: string | null
      tags: string[]
      author: string | null
      status: $Enums.CmsStatus
      publishedAt: Date | null
      seoTitle: string | null
      seoDescription: string | null
      viewCount: number
      createdAt: Date
      updatedAt: Date
      categoryId: string | null
      subCategoryId: string | null
    }, ExtArgs["result"]["cmsBlog"]>
    composites: {}
  }

  type CmsBlogGetPayload<S extends boolean | null | undefined | CmsBlogDefaultArgs> = $Result.GetResult<Prisma.$CmsBlogPayload, S>

  type CmsBlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsBlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsBlogCountAggregateInputType | true
    }

  export interface CmsBlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsBlog'], meta: { name: 'CmsBlog' } }
    /**
     * Find zero or one CmsBlog that matches the filter.
     * @param {CmsBlogFindUniqueArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsBlogFindUniqueArgs>(args: SelectSubset<T, CmsBlogFindUniqueArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsBlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsBlogFindUniqueOrThrowArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsBlogFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsBlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsBlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogFindFirstArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsBlogFindFirstArgs>(args?: SelectSubset<T, CmsBlogFindFirstArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsBlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogFindFirstOrThrowArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsBlogFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsBlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsBlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsBlogs
     * const cmsBlogs = await prisma.cmsBlog.findMany()
     * 
     * // Get first 10 CmsBlogs
     * const cmsBlogs = await prisma.cmsBlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsBlogWithIdOnly = await prisma.cmsBlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsBlogFindManyArgs>(args?: SelectSubset<T, CmsBlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsBlog.
     * @param {CmsBlogCreateArgs} args - Arguments to create a CmsBlog.
     * @example
     * // Create one CmsBlog
     * const CmsBlog = await prisma.cmsBlog.create({
     *   data: {
     *     // ... data to create a CmsBlog
     *   }
     * })
     * 
     */
    create<T extends CmsBlogCreateArgs>(args: SelectSubset<T, CmsBlogCreateArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsBlogs.
     * @param {CmsBlogCreateManyArgs} args - Arguments to create many CmsBlogs.
     * @example
     * // Create many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsBlogCreateManyArgs>(args?: SelectSubset<T, CmsBlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsBlogs and returns the data saved in the database.
     * @param {CmsBlogCreateManyAndReturnArgs} args - Arguments to create many CmsBlogs.
     * @example
     * // Create many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsBlogs and only return the `id`
     * const cmsBlogWithIdOnly = await prisma.cmsBlog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsBlogCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsBlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsBlog.
     * @param {CmsBlogDeleteArgs} args - Arguments to delete one CmsBlog.
     * @example
     * // Delete one CmsBlog
     * const CmsBlog = await prisma.cmsBlog.delete({
     *   where: {
     *     // ... filter to delete one CmsBlog
     *   }
     * })
     * 
     */
    delete<T extends CmsBlogDeleteArgs>(args: SelectSubset<T, CmsBlogDeleteArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsBlog.
     * @param {CmsBlogUpdateArgs} args - Arguments to update one CmsBlog.
     * @example
     * // Update one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsBlogUpdateArgs>(args: SelectSubset<T, CmsBlogUpdateArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsBlogs.
     * @param {CmsBlogDeleteManyArgs} args - Arguments to filter CmsBlogs to delete.
     * @example
     * // Delete a few CmsBlogs
     * const { count } = await prisma.cmsBlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsBlogDeleteManyArgs>(args?: SelectSubset<T, CmsBlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsBlogUpdateManyArgs>(args: SelectSubset<T, CmsBlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsBlogs and returns the data updated in the database.
     * @param {CmsBlogUpdateManyAndReturnArgs} args - Arguments to update many CmsBlogs.
     * @example
     * // Update many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsBlogs and only return the `id`
     * const cmsBlogWithIdOnly = await prisma.cmsBlog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsBlogUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsBlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsBlog.
     * @param {CmsBlogUpsertArgs} args - Arguments to update or create a CmsBlog.
     * @example
     * // Update or create a CmsBlog
     * const cmsBlog = await prisma.cmsBlog.upsert({
     *   create: {
     *     // ... data to create a CmsBlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsBlog we want to update
     *   }
     * })
     */
    upsert<T extends CmsBlogUpsertArgs>(args: SelectSubset<T, CmsBlogUpsertArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogCountArgs} args - Arguments to filter CmsBlogs to count.
     * @example
     * // Count the number of CmsBlogs
     * const count = await prisma.cmsBlog.count({
     *   where: {
     *     // ... the filter for the CmsBlogs we want to count
     *   }
     * })
    **/
    count<T extends CmsBlogCountArgs>(
      args?: Subset<T, CmsBlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsBlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsBlogAggregateArgs>(args: Subset<T, CmsBlogAggregateArgs>): Prisma.PrismaPromise<GetCmsBlogAggregateType<T>>

    /**
     * Group by CmsBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogGroupByArgs} args - Group by arguments.
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
      T extends CmsBlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsBlogGroupByArgs['orderBy'] }
        : { orderBy?: CmsBlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsBlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsBlog model
   */
  readonly fields: CmsBlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsBlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsBlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CmsBlog$categoryArgs<ExtArgs> = {}>(args?: Subset<T, CmsBlog$categoryArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subCategory<T extends CmsBlog$subCategoryArgs<ExtArgs> = {}>(args?: Subset<T, CmsBlog$subCategoryArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CmsBlog model
   */
  interface CmsBlogFieldRefs {
    readonly id: FieldRef<"CmsBlog", 'String'>
    readonly title: FieldRef<"CmsBlog", 'String'>
    readonly slug: FieldRef<"CmsBlog", 'String'>
    readonly excerpt: FieldRef<"CmsBlog", 'String'>
    readonly content: FieldRef<"CmsBlog", 'String'>
    readonly coverImage: FieldRef<"CmsBlog", 'String'>
    readonly tags: FieldRef<"CmsBlog", 'String[]'>
    readonly author: FieldRef<"CmsBlog", 'String'>
    readonly status: FieldRef<"CmsBlog", 'CmsStatus'>
    readonly publishedAt: FieldRef<"CmsBlog", 'DateTime'>
    readonly seoTitle: FieldRef<"CmsBlog", 'String'>
    readonly seoDescription: FieldRef<"CmsBlog", 'String'>
    readonly viewCount: FieldRef<"CmsBlog", 'Int'>
    readonly createdAt: FieldRef<"CmsBlog", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsBlog", 'DateTime'>
    readonly categoryId: FieldRef<"CmsBlog", 'String'>
    readonly subCategoryId: FieldRef<"CmsBlog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmsBlog findUnique
   */
  export type CmsBlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog findUniqueOrThrow
   */
  export type CmsBlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog findFirst
   */
  export type CmsBlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsBlogs.
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBlogs.
     */
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsBlog findFirstOrThrow
   */
  export type CmsBlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsBlogs.
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBlogs.
     */
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsBlog findMany
   */
  export type CmsBlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlogs to fetch.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsBlogs.
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBlogs.
     */
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsBlog create
   */
  export type CmsBlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsBlog.
     */
    data: XOR<CmsBlogCreateInput, CmsBlogUncheckedCreateInput>
  }

  /**
   * CmsBlog createMany
   */
  export type CmsBlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsBlogs.
     */
    data: CmsBlogCreateManyInput | CmsBlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsBlog createManyAndReturn
   */
  export type CmsBlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * The data used to create many CmsBlogs.
     */
    data: CmsBlogCreateManyInput | CmsBlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsBlog update
   */
  export type CmsBlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsBlog.
     */
    data: XOR<CmsBlogUpdateInput, CmsBlogUncheckedUpdateInput>
    /**
     * Choose, which CmsBlog to update.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog updateMany
   */
  export type CmsBlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsBlogs.
     */
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyInput>
    /**
     * Filter which CmsBlogs to update
     */
    where?: CmsBlogWhereInput
    /**
     * Limit how many CmsBlogs to update.
     */
    limit?: number
  }

  /**
   * CmsBlog updateManyAndReturn
   */
  export type CmsBlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * The data used to update CmsBlogs.
     */
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyInput>
    /**
     * Filter which CmsBlogs to update
     */
    where?: CmsBlogWhereInput
    /**
     * Limit how many CmsBlogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsBlog upsert
   */
  export type CmsBlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsBlog to update in case it exists.
     */
    where: CmsBlogWhereUniqueInput
    /**
     * In case the CmsBlog found by the `where` argument doesn't exist, create a new CmsBlog with this data.
     */
    create: XOR<CmsBlogCreateInput, CmsBlogUncheckedCreateInput>
    /**
     * In case the CmsBlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsBlogUpdateInput, CmsBlogUncheckedUpdateInput>
  }

  /**
   * CmsBlog delete
   */
  export type CmsBlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter which CmsBlog to delete.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog deleteMany
   */
  export type CmsBlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsBlogs to delete
     */
    where?: CmsBlogWhereInput
    /**
     * Limit how many CmsBlogs to delete.
     */
    limit?: number
  }

  /**
   * CmsBlog.category
   */
  export type CmsBlog$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    where?: CmsCategoryWhereInput
  }

  /**
   * CmsBlog.subCategory
   */
  export type CmsBlog$subCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    where?: CmsSubCategoryWhereInput
  }

  /**
   * CmsBlog without action
   */
  export type CmsBlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
  }


  /**
   * Model CmsPartner
   */

  export type AggregateCmsPartner = {
    _count: CmsPartnerCountAggregateOutputType | null
    _min: CmsPartnerMinAggregateOutputType | null
    _max: CmsPartnerMaxAggregateOutputType | null
  }

  export type CmsPartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPartnerCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsPartnerMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPartnerMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPartnerCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsPartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPartner to aggregate.
     */
    where?: CmsPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPartners to fetch.
     */
    orderBy?: CmsPartnerOrderByWithRelationInput | CmsPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPartners
    **/
    _count?: true | CmsPartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPartnerMaxAggregateInputType
  }

  export type GetCmsPartnerAggregateType<T extends CmsPartnerAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPartner[P]>
      : GetScalarType<T[P], AggregateCmsPartner[P]>
  }




  export type CmsPartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPartnerWhereInput
    orderBy?: CmsPartnerOrderByWithAggregationInput | CmsPartnerOrderByWithAggregationInput[]
    by: CmsPartnerScalarFieldEnum[] | CmsPartnerScalarFieldEnum
    having?: CmsPartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPartnerCountAggregateInputType | true
    _min?: CmsPartnerMinAggregateInputType
    _max?: CmsPartnerMaxAggregateInputType
  }

  export type CmsPartnerGroupByOutputType = {
    id: string
    name: string
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CmsPartnerCountAggregateOutputType | null
    _min: CmsPartnerMinAggregateOutputType | null
    _max: CmsPartnerMaxAggregateOutputType | null
  }

  type GetCmsPartnerGroupByPayload<T extends CmsPartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPartnerGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPartnerGroupByOutputType[P]>
        }
      >
    >


  export type CmsPartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPartner"]>

  export type CmsPartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPartner"]>

  export type CmsPartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPartner"]>

  export type CmsPartnerSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsPartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsPartner"]>

  export type $CmsPartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPartner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsPartner"]>
    composites: {}
  }

  type CmsPartnerGetPayload<S extends boolean | null | undefined | CmsPartnerDefaultArgs> = $Result.GetResult<Prisma.$CmsPartnerPayload, S>

  type CmsPartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPartnerCountAggregateInputType | true
    }

  export interface CmsPartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPartner'], meta: { name: 'CmsPartner' } }
    /**
     * Find zero or one CmsPartner that matches the filter.
     * @param {CmsPartnerFindUniqueArgs} args - Arguments to find a CmsPartner
     * @example
     * // Get one CmsPartner
     * const cmsPartner = await prisma.cmsPartner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPartnerFindUniqueArgs>(args: SelectSubset<T, CmsPartnerFindUniqueArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPartner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPartnerFindUniqueOrThrowArgs} args - Arguments to find a CmsPartner
     * @example
     * // Get one CmsPartner
     * const cmsPartner = await prisma.cmsPartner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPartner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerFindFirstArgs} args - Arguments to find a CmsPartner
     * @example
     * // Get one CmsPartner
     * const cmsPartner = await prisma.cmsPartner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPartnerFindFirstArgs>(args?: SelectSubset<T, CmsPartnerFindFirstArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPartner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerFindFirstOrThrowArgs} args - Arguments to find a CmsPartner
     * @example
     * // Get one CmsPartner
     * const cmsPartner = await prisma.cmsPartner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPartners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPartners
     * const cmsPartners = await prisma.cmsPartner.findMany()
     * 
     * // Get first 10 CmsPartners
     * const cmsPartners = await prisma.cmsPartner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPartnerWithIdOnly = await prisma.cmsPartner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPartnerFindManyArgs>(args?: SelectSubset<T, CmsPartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPartner.
     * @param {CmsPartnerCreateArgs} args - Arguments to create a CmsPartner.
     * @example
     * // Create one CmsPartner
     * const CmsPartner = await prisma.cmsPartner.create({
     *   data: {
     *     // ... data to create a CmsPartner
     *   }
     * })
     * 
     */
    create<T extends CmsPartnerCreateArgs>(args: SelectSubset<T, CmsPartnerCreateArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPartners.
     * @param {CmsPartnerCreateManyArgs} args - Arguments to create many CmsPartners.
     * @example
     * // Create many CmsPartners
     * const cmsPartner = await prisma.cmsPartner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPartnerCreateManyArgs>(args?: SelectSubset<T, CmsPartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPartners and returns the data saved in the database.
     * @param {CmsPartnerCreateManyAndReturnArgs} args - Arguments to create many CmsPartners.
     * @example
     * // Create many CmsPartners
     * const cmsPartner = await prisma.cmsPartner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPartners and only return the `id`
     * const cmsPartnerWithIdOnly = await prisma.cmsPartner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPartner.
     * @param {CmsPartnerDeleteArgs} args - Arguments to delete one CmsPartner.
     * @example
     * // Delete one CmsPartner
     * const CmsPartner = await prisma.cmsPartner.delete({
     *   where: {
     *     // ... filter to delete one CmsPartner
     *   }
     * })
     * 
     */
    delete<T extends CmsPartnerDeleteArgs>(args: SelectSubset<T, CmsPartnerDeleteArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPartner.
     * @param {CmsPartnerUpdateArgs} args - Arguments to update one CmsPartner.
     * @example
     * // Update one CmsPartner
     * const cmsPartner = await prisma.cmsPartner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPartnerUpdateArgs>(args: SelectSubset<T, CmsPartnerUpdateArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPartners.
     * @param {CmsPartnerDeleteManyArgs} args - Arguments to filter CmsPartners to delete.
     * @example
     * // Delete a few CmsPartners
     * const { count } = await prisma.cmsPartner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPartnerDeleteManyArgs>(args?: SelectSubset<T, CmsPartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPartners
     * const cmsPartner = await prisma.cmsPartner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPartnerUpdateManyArgs>(args: SelectSubset<T, CmsPartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPartners and returns the data updated in the database.
     * @param {CmsPartnerUpdateManyAndReturnArgs} args - Arguments to update many CmsPartners.
     * @example
     * // Update many CmsPartners
     * const cmsPartner = await prisma.cmsPartner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPartners and only return the `id`
     * const cmsPartnerWithIdOnly = await prisma.cmsPartner.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsPartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPartner.
     * @param {CmsPartnerUpsertArgs} args - Arguments to update or create a CmsPartner.
     * @example
     * // Update or create a CmsPartner
     * const cmsPartner = await prisma.cmsPartner.upsert({
     *   create: {
     *     // ... data to create a CmsPartner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPartner we want to update
     *   }
     * })
     */
    upsert<T extends CmsPartnerUpsertArgs>(args: SelectSubset<T, CmsPartnerUpsertArgs<ExtArgs>>): Prisma__CmsPartnerClient<$Result.GetResult<Prisma.$CmsPartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPartners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerCountArgs} args - Arguments to filter CmsPartners to count.
     * @example
     * // Count the number of CmsPartners
     * const count = await prisma.cmsPartner.count({
     *   where: {
     *     // ... the filter for the CmsPartners we want to count
     *   }
     * })
    **/
    count<T extends CmsPartnerCountArgs>(
      args?: Subset<T, CmsPartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsPartnerAggregateArgs>(args: Subset<T, CmsPartnerAggregateArgs>): Prisma.PrismaPromise<GetCmsPartnerAggregateType<T>>

    /**
     * Group by CmsPartner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPartnerGroupByArgs} args - Group by arguments.
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
      T extends CmsPartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPartnerGroupByArgs['orderBy'] }
        : { orderBy?: CmsPartnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsPartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPartner model
   */
  readonly fields: CmsPartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPartner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CmsPartner model
   */
  interface CmsPartnerFieldRefs {
    readonly id: FieldRef<"CmsPartner", 'String'>
    readonly name: FieldRef<"CmsPartner", 'String'>
    readonly imageUrl: FieldRef<"CmsPartner", 'String'>
    readonly isActive: FieldRef<"CmsPartner", 'Boolean'>
    readonly createdAt: FieldRef<"CmsPartner", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsPartner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPartner findUnique
   */
  export type CmsPartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * Filter, which CmsPartner to fetch.
     */
    where: CmsPartnerWhereUniqueInput
  }

  /**
   * CmsPartner findUniqueOrThrow
   */
  export type CmsPartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * Filter, which CmsPartner to fetch.
     */
    where: CmsPartnerWhereUniqueInput
  }

  /**
   * CmsPartner findFirst
   */
  export type CmsPartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * Filter, which CmsPartner to fetch.
     */
    where?: CmsPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPartners to fetch.
     */
    orderBy?: CmsPartnerOrderByWithRelationInput | CmsPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPartners.
     */
    cursor?: CmsPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPartners.
     */
    distinct?: CmsPartnerScalarFieldEnum | CmsPartnerScalarFieldEnum[]
  }

  /**
   * CmsPartner findFirstOrThrow
   */
  export type CmsPartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * Filter, which CmsPartner to fetch.
     */
    where?: CmsPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPartners to fetch.
     */
    orderBy?: CmsPartnerOrderByWithRelationInput | CmsPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPartners.
     */
    cursor?: CmsPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPartners.
     */
    distinct?: CmsPartnerScalarFieldEnum | CmsPartnerScalarFieldEnum[]
  }

  /**
   * CmsPartner findMany
   */
  export type CmsPartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * Filter, which CmsPartners to fetch.
     */
    where?: CmsPartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPartners to fetch.
     */
    orderBy?: CmsPartnerOrderByWithRelationInput | CmsPartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPartners.
     */
    cursor?: CmsPartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPartners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPartners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPartners.
     */
    distinct?: CmsPartnerScalarFieldEnum | CmsPartnerScalarFieldEnum[]
  }

  /**
   * CmsPartner create
   */
  export type CmsPartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsPartner.
     */
    data: XOR<CmsPartnerCreateInput, CmsPartnerUncheckedCreateInput>
  }

  /**
   * CmsPartner createMany
   */
  export type CmsPartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPartners.
     */
    data: CmsPartnerCreateManyInput | CmsPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPartner createManyAndReturn
   */
  export type CmsPartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPartners.
     */
    data: CmsPartnerCreateManyInput | CmsPartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPartner update
   */
  export type CmsPartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsPartner.
     */
    data: XOR<CmsPartnerUpdateInput, CmsPartnerUncheckedUpdateInput>
    /**
     * Choose, which CmsPartner to update.
     */
    where: CmsPartnerWhereUniqueInput
  }

  /**
   * CmsPartner updateMany
   */
  export type CmsPartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPartners.
     */
    data: XOR<CmsPartnerUpdateManyMutationInput, CmsPartnerUncheckedUpdateManyInput>
    /**
     * Filter which CmsPartners to update
     */
    where?: CmsPartnerWhereInput
    /**
     * Limit how many CmsPartners to update.
     */
    limit?: number
  }

  /**
   * CmsPartner updateManyAndReturn
   */
  export type CmsPartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * The data used to update CmsPartners.
     */
    data: XOR<CmsPartnerUpdateManyMutationInput, CmsPartnerUncheckedUpdateManyInput>
    /**
     * Filter which CmsPartners to update
     */
    where?: CmsPartnerWhereInput
    /**
     * Limit how many CmsPartners to update.
     */
    limit?: number
  }

  /**
   * CmsPartner upsert
   */
  export type CmsPartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsPartner to update in case it exists.
     */
    where: CmsPartnerWhereUniqueInput
    /**
     * In case the CmsPartner found by the `where` argument doesn't exist, create a new CmsPartner with this data.
     */
    create: XOR<CmsPartnerCreateInput, CmsPartnerUncheckedCreateInput>
    /**
     * In case the CmsPartner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPartnerUpdateInput, CmsPartnerUncheckedUpdateInput>
  }

  /**
   * CmsPartner delete
   */
  export type CmsPartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
    /**
     * Filter which CmsPartner to delete.
     */
    where: CmsPartnerWhereUniqueInput
  }

  /**
   * CmsPartner deleteMany
   */
  export type CmsPartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPartners to delete
     */
    where?: CmsPartnerWhereInput
    /**
     * Limit how many CmsPartners to delete.
     */
    limit?: number
  }

  /**
   * CmsPartner without action
   */
  export type CmsPartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPartner
     */
    select?: CmsPartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPartner
     */
    omit?: CmsPartnerOmit<ExtArgs> | null
  }


  /**
   * Model CmsTestimonial
   */

  export type AggregateCmsTestimonial = {
    _count: CmsTestimonialCountAggregateOutputType | null
    _avg: CmsTestimonialAvgAggregateOutputType | null
    _sum: CmsTestimonialSumAggregateOutputType | null
    _min: CmsTestimonialMinAggregateOutputType | null
    _max: CmsTestimonialMaxAggregateOutputType | null
  }

  export type CmsTestimonialAvgAggregateOutputType = {
    rating: number | null
  }

  export type CmsTestimonialSumAggregateOutputType = {
    rating: number | null
  }

  export type CmsTestimonialMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    avatar: string | null
    content: string | null
    rating: number | null
    featured: boolean | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsTestimonialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    avatar: string | null
    content: string | null
    rating: number | null
    featured: boolean | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsTestimonialCountAggregateOutputType = {
    id: number
    name: number
    role: number
    avatar: number
    content: number
    rating: number
    featured: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsTestimonialAvgAggregateInputType = {
    rating?: true
  }

  export type CmsTestimonialSumAggregateInputType = {
    rating?: true
  }

  export type CmsTestimonialMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    avatar?: true
    content?: true
    rating?: true
    featured?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsTestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    avatar?: true
    content?: true
    rating?: true
    featured?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsTestimonialCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    avatar?: true
    content?: true
    rating?: true
    featured?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsTestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsTestimonial to aggregate.
     */
    where?: CmsTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTestimonials to fetch.
     */
    orderBy?: CmsTestimonialOrderByWithRelationInput | CmsTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsTestimonials
    **/
    _count?: true | CmsTestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsTestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsTestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsTestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsTestimonialMaxAggregateInputType
  }

  export type GetCmsTestimonialAggregateType<T extends CmsTestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsTestimonial[P]>
      : GetScalarType<T[P], AggregateCmsTestimonial[P]>
  }




  export type CmsTestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsTestimonialWhereInput
    orderBy?: CmsTestimonialOrderByWithAggregationInput | CmsTestimonialOrderByWithAggregationInput[]
    by: CmsTestimonialScalarFieldEnum[] | CmsTestimonialScalarFieldEnum
    having?: CmsTestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsTestimonialCountAggregateInputType | true
    _avg?: CmsTestimonialAvgAggregateInputType
    _sum?: CmsTestimonialSumAggregateInputType
    _min?: CmsTestimonialMinAggregateInputType
    _max?: CmsTestimonialMaxAggregateInputType
  }

  export type CmsTestimonialGroupByOutputType = {
    id: string
    name: string
    role: string | null
    avatar: string | null
    content: string
    rating: number
    featured: boolean
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CmsTestimonialCountAggregateOutputType | null
    _avg: CmsTestimonialAvgAggregateOutputType | null
    _sum: CmsTestimonialSumAggregateOutputType | null
    _min: CmsTestimonialMinAggregateOutputType | null
    _max: CmsTestimonialMaxAggregateOutputType | null
  }

  type GetCmsTestimonialGroupByPayload<T extends CmsTestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsTestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsTestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsTestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], CmsTestimonialGroupByOutputType[P]>
        }
      >
    >


  export type CmsTestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    content?: boolean
    rating?: boolean
    featured?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsTestimonial"]>

  export type CmsTestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    content?: boolean
    rating?: boolean
    featured?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsTestimonial"]>

  export type CmsTestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    content?: boolean
    rating?: boolean
    featured?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsTestimonial"]>

  export type CmsTestimonialSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    avatar?: boolean
    content?: boolean
    rating?: boolean
    featured?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsTestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "avatar" | "content" | "rating" | "featured" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsTestimonial"]>

  export type $CmsTestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsTestimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string | null
      avatar: string | null
      content: string
      rating: number
      featured: boolean
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsTestimonial"]>
    composites: {}
  }

  type CmsTestimonialGetPayload<S extends boolean | null | undefined | CmsTestimonialDefaultArgs> = $Result.GetResult<Prisma.$CmsTestimonialPayload, S>

  type CmsTestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsTestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsTestimonialCountAggregateInputType | true
    }

  export interface CmsTestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsTestimonial'], meta: { name: 'CmsTestimonial' } }
    /**
     * Find zero or one CmsTestimonial that matches the filter.
     * @param {CmsTestimonialFindUniqueArgs} args - Arguments to find a CmsTestimonial
     * @example
     * // Get one CmsTestimonial
     * const cmsTestimonial = await prisma.cmsTestimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsTestimonialFindUniqueArgs>(args: SelectSubset<T, CmsTestimonialFindUniqueArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsTestimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsTestimonialFindUniqueOrThrowArgs} args - Arguments to find a CmsTestimonial
     * @example
     * // Get one CmsTestimonial
     * const cmsTestimonial = await prisma.cmsTestimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsTestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsTestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsTestimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialFindFirstArgs} args - Arguments to find a CmsTestimonial
     * @example
     * // Get one CmsTestimonial
     * const cmsTestimonial = await prisma.cmsTestimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsTestimonialFindFirstArgs>(args?: SelectSubset<T, CmsTestimonialFindFirstArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsTestimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialFindFirstOrThrowArgs} args - Arguments to find a CmsTestimonial
     * @example
     * // Get one CmsTestimonial
     * const cmsTestimonial = await prisma.cmsTestimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsTestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsTestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsTestimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsTestimonials
     * const cmsTestimonials = await prisma.cmsTestimonial.findMany()
     * 
     * // Get first 10 CmsTestimonials
     * const cmsTestimonials = await prisma.cmsTestimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsTestimonialWithIdOnly = await prisma.cmsTestimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsTestimonialFindManyArgs>(args?: SelectSubset<T, CmsTestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsTestimonial.
     * @param {CmsTestimonialCreateArgs} args - Arguments to create a CmsTestimonial.
     * @example
     * // Create one CmsTestimonial
     * const CmsTestimonial = await prisma.cmsTestimonial.create({
     *   data: {
     *     // ... data to create a CmsTestimonial
     *   }
     * })
     * 
     */
    create<T extends CmsTestimonialCreateArgs>(args: SelectSubset<T, CmsTestimonialCreateArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsTestimonials.
     * @param {CmsTestimonialCreateManyArgs} args - Arguments to create many CmsTestimonials.
     * @example
     * // Create many CmsTestimonials
     * const cmsTestimonial = await prisma.cmsTestimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsTestimonialCreateManyArgs>(args?: SelectSubset<T, CmsTestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsTestimonials and returns the data saved in the database.
     * @param {CmsTestimonialCreateManyAndReturnArgs} args - Arguments to create many CmsTestimonials.
     * @example
     * // Create many CmsTestimonials
     * const cmsTestimonial = await prisma.cmsTestimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsTestimonials and only return the `id`
     * const cmsTestimonialWithIdOnly = await prisma.cmsTestimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsTestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsTestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsTestimonial.
     * @param {CmsTestimonialDeleteArgs} args - Arguments to delete one CmsTestimonial.
     * @example
     * // Delete one CmsTestimonial
     * const CmsTestimonial = await prisma.cmsTestimonial.delete({
     *   where: {
     *     // ... filter to delete one CmsTestimonial
     *   }
     * })
     * 
     */
    delete<T extends CmsTestimonialDeleteArgs>(args: SelectSubset<T, CmsTestimonialDeleteArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsTestimonial.
     * @param {CmsTestimonialUpdateArgs} args - Arguments to update one CmsTestimonial.
     * @example
     * // Update one CmsTestimonial
     * const cmsTestimonial = await prisma.cmsTestimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsTestimonialUpdateArgs>(args: SelectSubset<T, CmsTestimonialUpdateArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsTestimonials.
     * @param {CmsTestimonialDeleteManyArgs} args - Arguments to filter CmsTestimonials to delete.
     * @example
     * // Delete a few CmsTestimonials
     * const { count } = await prisma.cmsTestimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsTestimonialDeleteManyArgs>(args?: SelectSubset<T, CmsTestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsTestimonials
     * const cmsTestimonial = await prisma.cmsTestimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsTestimonialUpdateManyArgs>(args: SelectSubset<T, CmsTestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsTestimonials and returns the data updated in the database.
     * @param {CmsTestimonialUpdateManyAndReturnArgs} args - Arguments to update many CmsTestimonials.
     * @example
     * // Update many CmsTestimonials
     * const cmsTestimonial = await prisma.cmsTestimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsTestimonials and only return the `id`
     * const cmsTestimonialWithIdOnly = await prisma.cmsTestimonial.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsTestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsTestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsTestimonial.
     * @param {CmsTestimonialUpsertArgs} args - Arguments to update or create a CmsTestimonial.
     * @example
     * // Update or create a CmsTestimonial
     * const cmsTestimonial = await prisma.cmsTestimonial.upsert({
     *   create: {
     *     // ... data to create a CmsTestimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsTestimonial we want to update
     *   }
     * })
     */
    upsert<T extends CmsTestimonialUpsertArgs>(args: SelectSubset<T, CmsTestimonialUpsertArgs<ExtArgs>>): Prisma__CmsTestimonialClient<$Result.GetResult<Prisma.$CmsTestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialCountArgs} args - Arguments to filter CmsTestimonials to count.
     * @example
     * // Count the number of CmsTestimonials
     * const count = await prisma.cmsTestimonial.count({
     *   where: {
     *     // ... the filter for the CmsTestimonials we want to count
     *   }
     * })
    **/
    count<T extends CmsTestimonialCountArgs>(
      args?: Subset<T, CmsTestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsTestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsTestimonialAggregateArgs>(args: Subset<T, CmsTestimonialAggregateArgs>): Prisma.PrismaPromise<GetCmsTestimonialAggregateType<T>>

    /**
     * Group by CmsTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTestimonialGroupByArgs} args - Group by arguments.
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
      T extends CmsTestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsTestimonialGroupByArgs['orderBy'] }
        : { orderBy?: CmsTestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsTestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsTestimonial model
   */
  readonly fields: CmsTestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsTestimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsTestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CmsTestimonial model
   */
  interface CmsTestimonialFieldRefs {
    readonly id: FieldRef<"CmsTestimonial", 'String'>
    readonly name: FieldRef<"CmsTestimonial", 'String'>
    readonly role: FieldRef<"CmsTestimonial", 'String'>
    readonly avatar: FieldRef<"CmsTestimonial", 'String'>
    readonly content: FieldRef<"CmsTestimonial", 'String'>
    readonly rating: FieldRef<"CmsTestimonial", 'Int'>
    readonly featured: FieldRef<"CmsTestimonial", 'Boolean'>
    readonly active: FieldRef<"CmsTestimonial", 'Boolean'>
    readonly createdAt: FieldRef<"CmsTestimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsTestimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsTestimonial findUnique
   */
  export type CmsTestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * Filter, which CmsTestimonial to fetch.
     */
    where: CmsTestimonialWhereUniqueInput
  }

  /**
   * CmsTestimonial findUniqueOrThrow
   */
  export type CmsTestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * Filter, which CmsTestimonial to fetch.
     */
    where: CmsTestimonialWhereUniqueInput
  }

  /**
   * CmsTestimonial findFirst
   */
  export type CmsTestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * Filter, which CmsTestimonial to fetch.
     */
    where?: CmsTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTestimonials to fetch.
     */
    orderBy?: CmsTestimonialOrderByWithRelationInput | CmsTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsTestimonials.
     */
    cursor?: CmsTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsTestimonials.
     */
    distinct?: CmsTestimonialScalarFieldEnum | CmsTestimonialScalarFieldEnum[]
  }

  /**
   * CmsTestimonial findFirstOrThrow
   */
  export type CmsTestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * Filter, which CmsTestimonial to fetch.
     */
    where?: CmsTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTestimonials to fetch.
     */
    orderBy?: CmsTestimonialOrderByWithRelationInput | CmsTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsTestimonials.
     */
    cursor?: CmsTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsTestimonials.
     */
    distinct?: CmsTestimonialScalarFieldEnum | CmsTestimonialScalarFieldEnum[]
  }

  /**
   * CmsTestimonial findMany
   */
  export type CmsTestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * Filter, which CmsTestimonials to fetch.
     */
    where?: CmsTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTestimonials to fetch.
     */
    orderBy?: CmsTestimonialOrderByWithRelationInput | CmsTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsTestimonials.
     */
    cursor?: CmsTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsTestimonials.
     */
    distinct?: CmsTestimonialScalarFieldEnum | CmsTestimonialScalarFieldEnum[]
  }

  /**
   * CmsTestimonial create
   */
  export type CmsTestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsTestimonial.
     */
    data: XOR<CmsTestimonialCreateInput, CmsTestimonialUncheckedCreateInput>
  }

  /**
   * CmsTestimonial createMany
   */
  export type CmsTestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsTestimonials.
     */
    data: CmsTestimonialCreateManyInput | CmsTestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsTestimonial createManyAndReturn
   */
  export type CmsTestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many CmsTestimonials.
     */
    data: CmsTestimonialCreateManyInput | CmsTestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsTestimonial update
   */
  export type CmsTestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsTestimonial.
     */
    data: XOR<CmsTestimonialUpdateInput, CmsTestimonialUncheckedUpdateInput>
    /**
     * Choose, which CmsTestimonial to update.
     */
    where: CmsTestimonialWhereUniqueInput
  }

  /**
   * CmsTestimonial updateMany
   */
  export type CmsTestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsTestimonials.
     */
    data: XOR<CmsTestimonialUpdateManyMutationInput, CmsTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which CmsTestimonials to update
     */
    where?: CmsTestimonialWhereInput
    /**
     * Limit how many CmsTestimonials to update.
     */
    limit?: number
  }

  /**
   * CmsTestimonial updateManyAndReturn
   */
  export type CmsTestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * The data used to update CmsTestimonials.
     */
    data: XOR<CmsTestimonialUpdateManyMutationInput, CmsTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which CmsTestimonials to update
     */
    where?: CmsTestimonialWhereInput
    /**
     * Limit how many CmsTestimonials to update.
     */
    limit?: number
  }

  /**
   * CmsTestimonial upsert
   */
  export type CmsTestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsTestimonial to update in case it exists.
     */
    where: CmsTestimonialWhereUniqueInput
    /**
     * In case the CmsTestimonial found by the `where` argument doesn't exist, create a new CmsTestimonial with this data.
     */
    create: XOR<CmsTestimonialCreateInput, CmsTestimonialUncheckedCreateInput>
    /**
     * In case the CmsTestimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsTestimonialUpdateInput, CmsTestimonialUncheckedUpdateInput>
  }

  /**
   * CmsTestimonial delete
   */
  export type CmsTestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
    /**
     * Filter which CmsTestimonial to delete.
     */
    where: CmsTestimonialWhereUniqueInput
  }

  /**
   * CmsTestimonial deleteMany
   */
  export type CmsTestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsTestimonials to delete
     */
    where?: CmsTestimonialWhereInput
    /**
     * Limit how many CmsTestimonials to delete.
     */
    limit?: number
  }

  /**
   * CmsTestimonial without action
   */
  export type CmsTestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTestimonial
     */
    select?: CmsTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTestimonial
     */
    omit?: CmsTestimonialOmit<ExtArgs> | null
  }


  /**
   * Model CmsProduct
   */

  export type AggregateCmsProduct = {
    _count: CmsProductCountAggregateOutputType | null
    _avg: CmsProductAvgAggregateOutputType | null
    _sum: CmsProductSumAggregateOutputType | null
    _min: CmsProductMinAggregateOutputType | null
    _max: CmsProductMaxAggregateOutputType | null
  }

  export type CmsProductAvgAggregateOutputType = {
    sortOrder: number | null
    viewCount: number | null
  }

  export type CmsProductSumAggregateOutputType = {
    sortOrder: number | null
    viewCount: number | null
  }

  export type CmsProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    shortDescription: string | null
    description: string | null
    image: string | null
    provider: string | null
    providerLogo: string | null
    interestRate: string | null
    processingFee: string | null
    minAmount: string | null
    maxAmount: string | null
    tenure: string | null
    applyUrl: string | null
    status: $Enums.CmsStatus | null
    featured: boolean | null
    isBestSeller: boolean | null
    badge: string | null
    sortOrder: number | null
    seoTitle: string | null
    seoDescription: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    subCategoryId: string | null
  }

  export type CmsProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    shortDescription: string | null
    description: string | null
    image: string | null
    provider: string | null
    providerLogo: string | null
    interestRate: string | null
    processingFee: string | null
    minAmount: string | null
    maxAmount: string | null
    tenure: string | null
    applyUrl: string | null
    status: $Enums.CmsStatus | null
    featured: boolean | null
    isBestSeller: boolean | null
    badge: string | null
    sortOrder: number | null
    seoTitle: string | null
    seoDescription: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
    subCategoryId: string | null
  }

  export type CmsProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    shortDescription: number
    description: number
    image: number
    provider: number
    providerLogo: number
    interestRate: number
    processingFee: number
    minAmount: number
    maxAmount: number
    tenure: number
    features: number
    benefits: number
    eligibility: number
    formFields: number
    applyUrl: number
    status: number
    featured: number
    isBestSeller: number
    badge: number
    sortOrder: number
    seoTitle: number
    seoDescription: number
    viewCount: number
    createdAt: number
    updatedAt: number
    categoryId: number
    subCategoryId: number
    _all: number
  }


  export type CmsProductAvgAggregateInputType = {
    sortOrder?: true
    viewCount?: true
  }

  export type CmsProductSumAggregateInputType = {
    sortOrder?: true
    viewCount?: true
  }

  export type CmsProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortDescription?: true
    description?: true
    image?: true
    provider?: true
    providerLogo?: true
    interestRate?: true
    processingFee?: true
    minAmount?: true
    maxAmount?: true
    tenure?: true
    applyUrl?: true
    status?: true
    featured?: true
    isBestSeller?: true
    badge?: true
    sortOrder?: true
    seoTitle?: true
    seoDescription?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    subCategoryId?: true
  }

  export type CmsProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortDescription?: true
    description?: true
    image?: true
    provider?: true
    providerLogo?: true
    interestRate?: true
    processingFee?: true
    minAmount?: true
    maxAmount?: true
    tenure?: true
    applyUrl?: true
    status?: true
    featured?: true
    isBestSeller?: true
    badge?: true
    sortOrder?: true
    seoTitle?: true
    seoDescription?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    subCategoryId?: true
  }

  export type CmsProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    shortDescription?: true
    description?: true
    image?: true
    provider?: true
    providerLogo?: true
    interestRate?: true
    processingFee?: true
    minAmount?: true
    maxAmount?: true
    tenure?: true
    features?: true
    benefits?: true
    eligibility?: true
    formFields?: true
    applyUrl?: true
    status?: true
    featured?: true
    isBestSeller?: true
    badge?: true
    sortOrder?: true
    seoTitle?: true
    seoDescription?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    subCategoryId?: true
    _all?: true
  }

  export type CmsProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsProduct to aggregate.
     */
    where?: CmsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsProducts to fetch.
     */
    orderBy?: CmsProductOrderByWithRelationInput | CmsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsProducts
    **/
    _count?: true | CmsProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsProductMaxAggregateInputType
  }

  export type GetCmsProductAggregateType<T extends CmsProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsProduct[P]>
      : GetScalarType<T[P], AggregateCmsProduct[P]>
  }




  export type CmsProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsProductWhereInput
    orderBy?: CmsProductOrderByWithAggregationInput | CmsProductOrderByWithAggregationInput[]
    by: CmsProductScalarFieldEnum[] | CmsProductScalarFieldEnum
    having?: CmsProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsProductCountAggregateInputType | true
    _avg?: CmsProductAvgAggregateInputType
    _sum?: CmsProductSumAggregateInputType
    _min?: CmsProductMinAggregateInputType
    _max?: CmsProductMaxAggregateInputType
  }

  export type CmsProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    shortDescription: string | null
    description: string | null
    image: string | null
    provider: string | null
    providerLogo: string | null
    interestRate: string | null
    processingFee: string | null
    minAmount: string | null
    maxAmount: string | null
    tenure: string | null
    features: JsonValue | null
    benefits: JsonValue | null
    eligibility: JsonValue | null
    formFields: JsonValue | null
    applyUrl: string | null
    status: $Enums.CmsStatus
    featured: boolean
    isBestSeller: boolean
    badge: string | null
    sortOrder: number
    seoTitle: string | null
    seoDescription: string | null
    viewCount: number
    createdAt: Date
    updatedAt: Date
    categoryId: string | null
    subCategoryId: string | null
    _count: CmsProductCountAggregateOutputType | null
    _avg: CmsProductAvgAggregateOutputType | null
    _sum: CmsProductSumAggregateOutputType | null
    _min: CmsProductMinAggregateOutputType | null
    _max: CmsProductMaxAggregateOutputType | null
  }

  type GetCmsProductGroupByPayload<T extends CmsProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsProductGroupByOutputType[P]>
            : GetScalarType<T[P], CmsProductGroupByOutputType[P]>
        }
      >
    >


  export type CmsProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    provider?: boolean
    providerLogo?: boolean
    interestRate?: boolean
    processingFee?: boolean
    minAmount?: boolean
    maxAmount?: boolean
    tenure?: boolean
    features?: boolean
    benefits?: boolean
    eligibility?: boolean
    formFields?: boolean
    applyUrl?: boolean
    status?: boolean
    featured?: boolean
    isBestSeller?: boolean
    badge?: boolean
    sortOrder?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    category?: boolean | CmsProduct$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsProduct$subCategoryArgs<ExtArgs>
    leads?: boolean | CmsProduct$leadsArgs<ExtArgs>
    _count?: boolean | CmsProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsProduct"]>

  export type CmsProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    provider?: boolean
    providerLogo?: boolean
    interestRate?: boolean
    processingFee?: boolean
    minAmount?: boolean
    maxAmount?: boolean
    tenure?: boolean
    features?: boolean
    benefits?: boolean
    eligibility?: boolean
    formFields?: boolean
    applyUrl?: boolean
    status?: boolean
    featured?: boolean
    isBestSeller?: boolean
    badge?: boolean
    sortOrder?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    category?: boolean | CmsProduct$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsProduct$subCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsProduct"]>

  export type CmsProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    provider?: boolean
    providerLogo?: boolean
    interestRate?: boolean
    processingFee?: boolean
    minAmount?: boolean
    maxAmount?: boolean
    tenure?: boolean
    features?: boolean
    benefits?: boolean
    eligibility?: boolean
    formFields?: boolean
    applyUrl?: boolean
    status?: boolean
    featured?: boolean
    isBestSeller?: boolean
    badge?: boolean
    sortOrder?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
    category?: boolean | CmsProduct$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsProduct$subCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsProduct"]>

  export type CmsProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    shortDescription?: boolean
    description?: boolean
    image?: boolean
    provider?: boolean
    providerLogo?: boolean
    interestRate?: boolean
    processingFee?: boolean
    minAmount?: boolean
    maxAmount?: boolean
    tenure?: boolean
    features?: boolean
    benefits?: boolean
    eligibility?: boolean
    formFields?: boolean
    applyUrl?: boolean
    status?: boolean
    featured?: boolean
    isBestSeller?: boolean
    badge?: boolean
    sortOrder?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    subCategoryId?: boolean
  }

  export type CmsProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "shortDescription" | "description" | "image" | "provider" | "providerLogo" | "interestRate" | "processingFee" | "minAmount" | "maxAmount" | "tenure" | "features" | "benefits" | "eligibility" | "formFields" | "applyUrl" | "status" | "featured" | "isBestSeller" | "badge" | "sortOrder" | "seoTitle" | "seoDescription" | "viewCount" | "createdAt" | "updatedAt" | "categoryId" | "subCategoryId", ExtArgs["result"]["cmsProduct"]>
  export type CmsProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsProduct$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsProduct$subCategoryArgs<ExtArgs>
    leads?: boolean | CmsProduct$leadsArgs<ExtArgs>
    _count?: boolean | CmsProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsProduct$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsProduct$subCategoryArgs<ExtArgs>
  }
  export type CmsProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CmsProduct$categoryArgs<ExtArgs>
    subCategory?: boolean | CmsProduct$subCategoryArgs<ExtArgs>
  }

  export type $CmsProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsProduct"
    objects: {
      category: Prisma.$CmsCategoryPayload<ExtArgs> | null
      subCategory: Prisma.$CmsSubCategoryPayload<ExtArgs> | null
      leads: Prisma.$CmsLeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      shortDescription: string | null
      description: string | null
      image: string | null
      provider: string | null
      providerLogo: string | null
      interestRate: string | null
      processingFee: string | null
      minAmount: string | null
      maxAmount: string | null
      tenure: string | null
      features: Prisma.JsonValue | null
      benefits: Prisma.JsonValue | null
      eligibility: Prisma.JsonValue | null
      formFields: Prisma.JsonValue | null
      applyUrl: string | null
      status: $Enums.CmsStatus
      featured: boolean
      isBestSeller: boolean
      badge: string | null
      sortOrder: number
      seoTitle: string | null
      seoDescription: string | null
      viewCount: number
      createdAt: Date
      updatedAt: Date
      categoryId: string | null
      subCategoryId: string | null
    }, ExtArgs["result"]["cmsProduct"]>
    composites: {}
  }

  type CmsProductGetPayload<S extends boolean | null | undefined | CmsProductDefaultArgs> = $Result.GetResult<Prisma.$CmsProductPayload, S>

  type CmsProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsProductCountAggregateInputType | true
    }

  export interface CmsProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsProduct'], meta: { name: 'CmsProduct' } }
    /**
     * Find zero or one CmsProduct that matches the filter.
     * @param {CmsProductFindUniqueArgs} args - Arguments to find a CmsProduct
     * @example
     * // Get one CmsProduct
     * const cmsProduct = await prisma.cmsProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsProductFindUniqueArgs>(args: SelectSubset<T, CmsProductFindUniqueArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsProductFindUniqueOrThrowArgs} args - Arguments to find a CmsProduct
     * @example
     * // Get one CmsProduct
     * const cmsProduct = await prisma.cmsProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsProductFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductFindFirstArgs} args - Arguments to find a CmsProduct
     * @example
     * // Get one CmsProduct
     * const cmsProduct = await prisma.cmsProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsProductFindFirstArgs>(args?: SelectSubset<T, CmsProductFindFirstArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductFindFirstOrThrowArgs} args - Arguments to find a CmsProduct
     * @example
     * // Get one CmsProduct
     * const cmsProduct = await prisma.cmsProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsProductFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsProducts
     * const cmsProducts = await prisma.cmsProduct.findMany()
     * 
     * // Get first 10 CmsProducts
     * const cmsProducts = await prisma.cmsProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsProductWithIdOnly = await prisma.cmsProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsProductFindManyArgs>(args?: SelectSubset<T, CmsProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsProduct.
     * @param {CmsProductCreateArgs} args - Arguments to create a CmsProduct.
     * @example
     * // Create one CmsProduct
     * const CmsProduct = await prisma.cmsProduct.create({
     *   data: {
     *     // ... data to create a CmsProduct
     *   }
     * })
     * 
     */
    create<T extends CmsProductCreateArgs>(args: SelectSubset<T, CmsProductCreateArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsProducts.
     * @param {CmsProductCreateManyArgs} args - Arguments to create many CmsProducts.
     * @example
     * // Create many CmsProducts
     * const cmsProduct = await prisma.cmsProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsProductCreateManyArgs>(args?: SelectSubset<T, CmsProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsProducts and returns the data saved in the database.
     * @param {CmsProductCreateManyAndReturnArgs} args - Arguments to create many CmsProducts.
     * @example
     * // Create many CmsProducts
     * const cmsProduct = await prisma.cmsProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsProducts and only return the `id`
     * const cmsProductWithIdOnly = await prisma.cmsProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsProductCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsProduct.
     * @param {CmsProductDeleteArgs} args - Arguments to delete one CmsProduct.
     * @example
     * // Delete one CmsProduct
     * const CmsProduct = await prisma.cmsProduct.delete({
     *   where: {
     *     // ... filter to delete one CmsProduct
     *   }
     * })
     * 
     */
    delete<T extends CmsProductDeleteArgs>(args: SelectSubset<T, CmsProductDeleteArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsProduct.
     * @param {CmsProductUpdateArgs} args - Arguments to update one CmsProduct.
     * @example
     * // Update one CmsProduct
     * const cmsProduct = await prisma.cmsProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsProductUpdateArgs>(args: SelectSubset<T, CmsProductUpdateArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsProducts.
     * @param {CmsProductDeleteManyArgs} args - Arguments to filter CmsProducts to delete.
     * @example
     * // Delete a few CmsProducts
     * const { count } = await prisma.cmsProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsProductDeleteManyArgs>(args?: SelectSubset<T, CmsProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsProducts
     * const cmsProduct = await prisma.cmsProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsProductUpdateManyArgs>(args: SelectSubset<T, CmsProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsProducts and returns the data updated in the database.
     * @param {CmsProductUpdateManyAndReturnArgs} args - Arguments to update many CmsProducts.
     * @example
     * // Update many CmsProducts
     * const cmsProduct = await prisma.cmsProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsProducts and only return the `id`
     * const cmsProductWithIdOnly = await prisma.cmsProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsProductUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsProduct.
     * @param {CmsProductUpsertArgs} args - Arguments to update or create a CmsProduct.
     * @example
     * // Update or create a CmsProduct
     * const cmsProduct = await prisma.cmsProduct.upsert({
     *   create: {
     *     // ... data to create a CmsProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsProduct we want to update
     *   }
     * })
     */
    upsert<T extends CmsProductUpsertArgs>(args: SelectSubset<T, CmsProductUpsertArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductCountArgs} args - Arguments to filter CmsProducts to count.
     * @example
     * // Count the number of CmsProducts
     * const count = await prisma.cmsProduct.count({
     *   where: {
     *     // ... the filter for the CmsProducts we want to count
     *   }
     * })
    **/
    count<T extends CmsProductCountArgs>(
      args?: Subset<T, CmsProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsProductAggregateArgs>(args: Subset<T, CmsProductAggregateArgs>): Prisma.PrismaPromise<GetCmsProductAggregateType<T>>

    /**
     * Group by CmsProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsProductGroupByArgs} args - Group by arguments.
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
      T extends CmsProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsProductGroupByArgs['orderBy'] }
        : { orderBy?: CmsProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsProduct model
   */
  readonly fields: CmsProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CmsProduct$categoryArgs<ExtArgs> = {}>(args?: Subset<T, CmsProduct$categoryArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subCategory<T extends CmsProduct$subCategoryArgs<ExtArgs> = {}>(args?: Subset<T, CmsProduct$subCategoryArgs<ExtArgs>>): Prisma__CmsSubCategoryClient<$Result.GetResult<Prisma.$CmsSubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leads<T extends CmsProduct$leadsArgs<ExtArgs> = {}>(args?: Subset<T, CmsProduct$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CmsProduct model
   */
  interface CmsProductFieldRefs {
    readonly id: FieldRef<"CmsProduct", 'String'>
    readonly name: FieldRef<"CmsProduct", 'String'>
    readonly slug: FieldRef<"CmsProduct", 'String'>
    readonly shortDescription: FieldRef<"CmsProduct", 'String'>
    readonly description: FieldRef<"CmsProduct", 'String'>
    readonly image: FieldRef<"CmsProduct", 'String'>
    readonly provider: FieldRef<"CmsProduct", 'String'>
    readonly providerLogo: FieldRef<"CmsProduct", 'String'>
    readonly interestRate: FieldRef<"CmsProduct", 'String'>
    readonly processingFee: FieldRef<"CmsProduct", 'String'>
    readonly minAmount: FieldRef<"CmsProduct", 'String'>
    readonly maxAmount: FieldRef<"CmsProduct", 'String'>
    readonly tenure: FieldRef<"CmsProduct", 'String'>
    readonly features: FieldRef<"CmsProduct", 'Json'>
    readonly benefits: FieldRef<"CmsProduct", 'Json'>
    readonly eligibility: FieldRef<"CmsProduct", 'Json'>
    readonly formFields: FieldRef<"CmsProduct", 'Json'>
    readonly applyUrl: FieldRef<"CmsProduct", 'String'>
    readonly status: FieldRef<"CmsProduct", 'CmsStatus'>
    readonly featured: FieldRef<"CmsProduct", 'Boolean'>
    readonly isBestSeller: FieldRef<"CmsProduct", 'Boolean'>
    readonly badge: FieldRef<"CmsProduct", 'String'>
    readonly sortOrder: FieldRef<"CmsProduct", 'Int'>
    readonly seoTitle: FieldRef<"CmsProduct", 'String'>
    readonly seoDescription: FieldRef<"CmsProduct", 'String'>
    readonly viewCount: FieldRef<"CmsProduct", 'Int'>
    readonly createdAt: FieldRef<"CmsProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsProduct", 'DateTime'>
    readonly categoryId: FieldRef<"CmsProduct", 'String'>
    readonly subCategoryId: FieldRef<"CmsProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmsProduct findUnique
   */
  export type CmsProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * Filter, which CmsProduct to fetch.
     */
    where: CmsProductWhereUniqueInput
  }

  /**
   * CmsProduct findUniqueOrThrow
   */
  export type CmsProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * Filter, which CmsProduct to fetch.
     */
    where: CmsProductWhereUniqueInput
  }

  /**
   * CmsProduct findFirst
   */
  export type CmsProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * Filter, which CmsProduct to fetch.
     */
    where?: CmsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsProducts to fetch.
     */
    orderBy?: CmsProductOrderByWithRelationInput | CmsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsProducts.
     */
    cursor?: CmsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsProducts.
     */
    distinct?: CmsProductScalarFieldEnum | CmsProductScalarFieldEnum[]
  }

  /**
   * CmsProduct findFirstOrThrow
   */
  export type CmsProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * Filter, which CmsProduct to fetch.
     */
    where?: CmsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsProducts to fetch.
     */
    orderBy?: CmsProductOrderByWithRelationInput | CmsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsProducts.
     */
    cursor?: CmsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsProducts.
     */
    distinct?: CmsProductScalarFieldEnum | CmsProductScalarFieldEnum[]
  }

  /**
   * CmsProduct findMany
   */
  export type CmsProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * Filter, which CmsProducts to fetch.
     */
    where?: CmsProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsProducts to fetch.
     */
    orderBy?: CmsProductOrderByWithRelationInput | CmsProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsProducts.
     */
    cursor?: CmsProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsProducts.
     */
    distinct?: CmsProductScalarFieldEnum | CmsProductScalarFieldEnum[]
  }

  /**
   * CmsProduct create
   */
  export type CmsProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsProduct.
     */
    data: XOR<CmsProductCreateInput, CmsProductUncheckedCreateInput>
  }

  /**
   * CmsProduct createMany
   */
  export type CmsProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsProducts.
     */
    data: CmsProductCreateManyInput | CmsProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsProduct createManyAndReturn
   */
  export type CmsProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * The data used to create many CmsProducts.
     */
    data: CmsProductCreateManyInput | CmsProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsProduct update
   */
  export type CmsProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsProduct.
     */
    data: XOR<CmsProductUpdateInput, CmsProductUncheckedUpdateInput>
    /**
     * Choose, which CmsProduct to update.
     */
    where: CmsProductWhereUniqueInput
  }

  /**
   * CmsProduct updateMany
   */
  export type CmsProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsProducts.
     */
    data: XOR<CmsProductUpdateManyMutationInput, CmsProductUncheckedUpdateManyInput>
    /**
     * Filter which CmsProducts to update
     */
    where?: CmsProductWhereInput
    /**
     * Limit how many CmsProducts to update.
     */
    limit?: number
  }

  /**
   * CmsProduct updateManyAndReturn
   */
  export type CmsProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * The data used to update CmsProducts.
     */
    data: XOR<CmsProductUpdateManyMutationInput, CmsProductUncheckedUpdateManyInput>
    /**
     * Filter which CmsProducts to update
     */
    where?: CmsProductWhereInput
    /**
     * Limit how many CmsProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsProduct upsert
   */
  export type CmsProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsProduct to update in case it exists.
     */
    where: CmsProductWhereUniqueInput
    /**
     * In case the CmsProduct found by the `where` argument doesn't exist, create a new CmsProduct with this data.
     */
    create: XOR<CmsProductCreateInput, CmsProductUncheckedCreateInput>
    /**
     * In case the CmsProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsProductUpdateInput, CmsProductUncheckedUpdateInput>
  }

  /**
   * CmsProduct delete
   */
  export type CmsProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    /**
     * Filter which CmsProduct to delete.
     */
    where: CmsProductWhereUniqueInput
  }

  /**
   * CmsProduct deleteMany
   */
  export type CmsProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsProducts to delete
     */
    where?: CmsProductWhereInput
    /**
     * Limit how many CmsProducts to delete.
     */
    limit?: number
  }

  /**
   * CmsProduct.category
   */
  export type CmsProduct$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    where?: CmsCategoryWhereInput
  }

  /**
   * CmsProduct.subCategory
   */
  export type CmsProduct$subCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSubCategory
     */
    select?: CmsSubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSubCategory
     */
    omit?: CmsSubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSubCategoryInclude<ExtArgs> | null
    where?: CmsSubCategoryWhereInput
  }

  /**
   * CmsProduct.leads
   */
  export type CmsProduct$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    where?: CmsLeadWhereInput
    orderBy?: CmsLeadOrderByWithRelationInput | CmsLeadOrderByWithRelationInput[]
    cursor?: CmsLeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsLeadScalarFieldEnum | CmsLeadScalarFieldEnum[]
  }

  /**
   * CmsProduct without action
   */
  export type CmsProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
  }


  /**
   * Model CmsLead
   */

  export type AggregateCmsLead = {
    _count: CmsLeadCountAggregateOutputType | null
    _min: CmsLeadMinAggregateOutputType | null
    _max: CmsLeadMaxAggregateOutputType | null
  }

  export type CmsLeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: $Enums.LeadStatus | null
    notes: string | null
    assignedTo: string | null
    source: string | null
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: string | null
    categoryId: string | null
  }

  export type CmsLeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: $Enums.LeadStatus | null
    notes: string | null
    assignedTo: string | null
    source: string | null
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    createdAt: Date | null
    updatedAt: Date | null
    productId: string | null
    categoryId: string | null
  }

  export type CmsLeadCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    customData: number
    status: number
    notes: number
    assignedTo: number
    source: number
    utmSource: number
    utmMedium: number
    utmCampaign: number
    createdAt: number
    updatedAt: number
    productId: number
    categoryId: number
    _all: number
  }


  export type CmsLeadMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    notes?: true
    assignedTo?: true
    source?: true
    utmSource?: true
    utmMedium?: true
    utmCampaign?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    categoryId?: true
  }

  export type CmsLeadMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    notes?: true
    assignedTo?: true
    source?: true
    utmSource?: true
    utmMedium?: true
    utmCampaign?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    categoryId?: true
  }

  export type CmsLeadCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    customData?: true
    status?: true
    notes?: true
    assignedTo?: true
    source?: true
    utmSource?: true
    utmMedium?: true
    utmCampaign?: true
    createdAt?: true
    updatedAt?: true
    productId?: true
    categoryId?: true
    _all?: true
  }

  export type CmsLeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsLead to aggregate.
     */
    where?: CmsLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsLeads to fetch.
     */
    orderBy?: CmsLeadOrderByWithRelationInput | CmsLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsLeads
    **/
    _count?: true | CmsLeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsLeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsLeadMaxAggregateInputType
  }

  export type GetCmsLeadAggregateType<T extends CmsLeadAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsLead[P]>
      : GetScalarType<T[P], AggregateCmsLead[P]>
  }




  export type CmsLeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsLeadWhereInput
    orderBy?: CmsLeadOrderByWithAggregationInput | CmsLeadOrderByWithAggregationInput[]
    by: CmsLeadScalarFieldEnum[] | CmsLeadScalarFieldEnum
    having?: CmsLeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsLeadCountAggregateInputType | true
    _min?: CmsLeadMinAggregateInputType
    _max?: CmsLeadMaxAggregateInputType
  }

  export type CmsLeadGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    message: string | null
    customData: JsonValue | null
    status: $Enums.LeadStatus
    notes: string | null
    assignedTo: string | null
    source: string | null
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    createdAt: Date
    updatedAt: Date
    productId: string | null
    categoryId: string | null
    _count: CmsLeadCountAggregateOutputType | null
    _min: CmsLeadMinAggregateOutputType | null
    _max: CmsLeadMaxAggregateOutputType | null
  }

  type GetCmsLeadGroupByPayload<T extends CmsLeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsLeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsLeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsLeadGroupByOutputType[P]>
            : GetScalarType<T[P], CmsLeadGroupByOutputType[P]>
        }
      >
    >


  export type CmsLeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    customData?: boolean
    status?: boolean
    notes?: boolean
    assignedTo?: boolean
    source?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    categoryId?: boolean
    product?: boolean | CmsLead$productArgs<ExtArgs>
    category?: boolean | CmsLead$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsLead"]>

  export type CmsLeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    customData?: boolean
    status?: boolean
    notes?: boolean
    assignedTo?: boolean
    source?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    categoryId?: boolean
    product?: boolean | CmsLead$productArgs<ExtArgs>
    category?: boolean | CmsLead$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsLead"]>

  export type CmsLeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    customData?: boolean
    status?: boolean
    notes?: boolean
    assignedTo?: boolean
    source?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    categoryId?: boolean
    product?: boolean | CmsLead$productArgs<ExtArgs>
    category?: boolean | CmsLead$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["cmsLead"]>

  export type CmsLeadSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    customData?: boolean
    status?: boolean
    notes?: boolean
    assignedTo?: boolean
    source?: boolean
    utmSource?: boolean
    utmMedium?: boolean
    utmCampaign?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productId?: boolean
    categoryId?: boolean
  }

  export type CmsLeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "customData" | "status" | "notes" | "assignedTo" | "source" | "utmSource" | "utmMedium" | "utmCampaign" | "createdAt" | "updatedAt" | "productId" | "categoryId", ExtArgs["result"]["cmsLead"]>
  export type CmsLeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CmsLead$productArgs<ExtArgs>
    category?: boolean | CmsLead$categoryArgs<ExtArgs>
  }
  export type CmsLeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CmsLead$productArgs<ExtArgs>
    category?: boolean | CmsLead$categoryArgs<ExtArgs>
  }
  export type CmsLeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CmsLead$productArgs<ExtArgs>
    category?: boolean | CmsLead$categoryArgs<ExtArgs>
  }

  export type $CmsLeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsLead"
    objects: {
      product: Prisma.$CmsProductPayload<ExtArgs> | null
      category: Prisma.$CmsCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      message: string | null
      customData: Prisma.JsonValue | null
      status: $Enums.LeadStatus
      notes: string | null
      assignedTo: string | null
      source: string | null
      utmSource: string | null
      utmMedium: string | null
      utmCampaign: string | null
      createdAt: Date
      updatedAt: Date
      productId: string | null
      categoryId: string | null
    }, ExtArgs["result"]["cmsLead"]>
    composites: {}
  }

  type CmsLeadGetPayload<S extends boolean | null | undefined | CmsLeadDefaultArgs> = $Result.GetResult<Prisma.$CmsLeadPayload, S>

  type CmsLeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsLeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsLeadCountAggregateInputType | true
    }

  export interface CmsLeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsLead'], meta: { name: 'CmsLead' } }
    /**
     * Find zero or one CmsLead that matches the filter.
     * @param {CmsLeadFindUniqueArgs} args - Arguments to find a CmsLead
     * @example
     * // Get one CmsLead
     * const cmsLead = await prisma.cmsLead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsLeadFindUniqueArgs>(args: SelectSubset<T, CmsLeadFindUniqueArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsLead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsLeadFindUniqueOrThrowArgs} args - Arguments to find a CmsLead
     * @example
     * // Get one CmsLead
     * const cmsLead = await prisma.cmsLead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsLeadFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsLeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsLead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadFindFirstArgs} args - Arguments to find a CmsLead
     * @example
     * // Get one CmsLead
     * const cmsLead = await prisma.cmsLead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsLeadFindFirstArgs>(args?: SelectSubset<T, CmsLeadFindFirstArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsLead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadFindFirstOrThrowArgs} args - Arguments to find a CmsLead
     * @example
     * // Get one CmsLead
     * const cmsLead = await prisma.cmsLead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsLeadFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsLeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsLeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsLeads
     * const cmsLeads = await prisma.cmsLead.findMany()
     * 
     * // Get first 10 CmsLeads
     * const cmsLeads = await prisma.cmsLead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsLeadWithIdOnly = await prisma.cmsLead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsLeadFindManyArgs>(args?: SelectSubset<T, CmsLeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsLead.
     * @param {CmsLeadCreateArgs} args - Arguments to create a CmsLead.
     * @example
     * // Create one CmsLead
     * const CmsLead = await prisma.cmsLead.create({
     *   data: {
     *     // ... data to create a CmsLead
     *   }
     * })
     * 
     */
    create<T extends CmsLeadCreateArgs>(args: SelectSubset<T, CmsLeadCreateArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsLeads.
     * @param {CmsLeadCreateManyArgs} args - Arguments to create many CmsLeads.
     * @example
     * // Create many CmsLeads
     * const cmsLead = await prisma.cmsLead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsLeadCreateManyArgs>(args?: SelectSubset<T, CmsLeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsLeads and returns the data saved in the database.
     * @param {CmsLeadCreateManyAndReturnArgs} args - Arguments to create many CmsLeads.
     * @example
     * // Create many CmsLeads
     * const cmsLead = await prisma.cmsLead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsLeads and only return the `id`
     * const cmsLeadWithIdOnly = await prisma.cmsLead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsLeadCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsLeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsLead.
     * @param {CmsLeadDeleteArgs} args - Arguments to delete one CmsLead.
     * @example
     * // Delete one CmsLead
     * const CmsLead = await prisma.cmsLead.delete({
     *   where: {
     *     // ... filter to delete one CmsLead
     *   }
     * })
     * 
     */
    delete<T extends CmsLeadDeleteArgs>(args: SelectSubset<T, CmsLeadDeleteArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsLead.
     * @param {CmsLeadUpdateArgs} args - Arguments to update one CmsLead.
     * @example
     * // Update one CmsLead
     * const cmsLead = await prisma.cmsLead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsLeadUpdateArgs>(args: SelectSubset<T, CmsLeadUpdateArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsLeads.
     * @param {CmsLeadDeleteManyArgs} args - Arguments to filter CmsLeads to delete.
     * @example
     * // Delete a few CmsLeads
     * const { count } = await prisma.cmsLead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsLeadDeleteManyArgs>(args?: SelectSubset<T, CmsLeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsLeads
     * const cmsLead = await prisma.cmsLead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsLeadUpdateManyArgs>(args: SelectSubset<T, CmsLeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsLeads and returns the data updated in the database.
     * @param {CmsLeadUpdateManyAndReturnArgs} args - Arguments to update many CmsLeads.
     * @example
     * // Update many CmsLeads
     * const cmsLead = await prisma.cmsLead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsLeads and only return the `id`
     * const cmsLeadWithIdOnly = await prisma.cmsLead.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsLeadUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsLeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsLead.
     * @param {CmsLeadUpsertArgs} args - Arguments to update or create a CmsLead.
     * @example
     * // Update or create a CmsLead
     * const cmsLead = await prisma.cmsLead.upsert({
     *   create: {
     *     // ... data to create a CmsLead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsLead we want to update
     *   }
     * })
     */
    upsert<T extends CmsLeadUpsertArgs>(args: SelectSubset<T, CmsLeadUpsertArgs<ExtArgs>>): Prisma__CmsLeadClient<$Result.GetResult<Prisma.$CmsLeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadCountArgs} args - Arguments to filter CmsLeads to count.
     * @example
     * // Count the number of CmsLeads
     * const count = await prisma.cmsLead.count({
     *   where: {
     *     // ... the filter for the CmsLeads we want to count
     *   }
     * })
    **/
    count<T extends CmsLeadCountArgs>(
      args?: Subset<T, CmsLeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsLeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsLeadAggregateArgs>(args: Subset<T, CmsLeadAggregateArgs>): Prisma.PrismaPromise<GetCmsLeadAggregateType<T>>

    /**
     * Group by CmsLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsLeadGroupByArgs} args - Group by arguments.
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
      T extends CmsLeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsLeadGroupByArgs['orderBy'] }
        : { orderBy?: CmsLeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsLeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsLead model
   */
  readonly fields: CmsLeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsLead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsLeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends CmsLead$productArgs<ExtArgs> = {}>(args?: Subset<T, CmsLead$productArgs<ExtArgs>>): Prisma__CmsProductClient<$Result.GetResult<Prisma.$CmsProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends CmsLead$categoryArgs<ExtArgs> = {}>(args?: Subset<T, CmsLead$categoryArgs<ExtArgs>>): Prisma__CmsCategoryClient<$Result.GetResult<Prisma.$CmsCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CmsLead model
   */
  interface CmsLeadFieldRefs {
    readonly id: FieldRef<"CmsLead", 'String'>
    readonly name: FieldRef<"CmsLead", 'String'>
    readonly email: FieldRef<"CmsLead", 'String'>
    readonly phone: FieldRef<"CmsLead", 'String'>
    readonly message: FieldRef<"CmsLead", 'String'>
    readonly customData: FieldRef<"CmsLead", 'Json'>
    readonly status: FieldRef<"CmsLead", 'LeadStatus'>
    readonly notes: FieldRef<"CmsLead", 'String'>
    readonly assignedTo: FieldRef<"CmsLead", 'String'>
    readonly source: FieldRef<"CmsLead", 'String'>
    readonly utmSource: FieldRef<"CmsLead", 'String'>
    readonly utmMedium: FieldRef<"CmsLead", 'String'>
    readonly utmCampaign: FieldRef<"CmsLead", 'String'>
    readonly createdAt: FieldRef<"CmsLead", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsLead", 'DateTime'>
    readonly productId: FieldRef<"CmsLead", 'String'>
    readonly categoryId: FieldRef<"CmsLead", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmsLead findUnique
   */
  export type CmsLeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * Filter, which CmsLead to fetch.
     */
    where: CmsLeadWhereUniqueInput
  }

  /**
   * CmsLead findUniqueOrThrow
   */
  export type CmsLeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * Filter, which CmsLead to fetch.
     */
    where: CmsLeadWhereUniqueInput
  }

  /**
   * CmsLead findFirst
   */
  export type CmsLeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * Filter, which CmsLead to fetch.
     */
    where?: CmsLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsLeads to fetch.
     */
    orderBy?: CmsLeadOrderByWithRelationInput | CmsLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsLeads.
     */
    cursor?: CmsLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsLeads.
     */
    distinct?: CmsLeadScalarFieldEnum | CmsLeadScalarFieldEnum[]
  }

  /**
   * CmsLead findFirstOrThrow
   */
  export type CmsLeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * Filter, which CmsLead to fetch.
     */
    where?: CmsLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsLeads to fetch.
     */
    orderBy?: CmsLeadOrderByWithRelationInput | CmsLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsLeads.
     */
    cursor?: CmsLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsLeads.
     */
    distinct?: CmsLeadScalarFieldEnum | CmsLeadScalarFieldEnum[]
  }

  /**
   * CmsLead findMany
   */
  export type CmsLeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * Filter, which CmsLeads to fetch.
     */
    where?: CmsLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsLeads to fetch.
     */
    orderBy?: CmsLeadOrderByWithRelationInput | CmsLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsLeads.
     */
    cursor?: CmsLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsLeads.
     */
    distinct?: CmsLeadScalarFieldEnum | CmsLeadScalarFieldEnum[]
  }

  /**
   * CmsLead create
   */
  export type CmsLeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsLead.
     */
    data: XOR<CmsLeadCreateInput, CmsLeadUncheckedCreateInput>
  }

  /**
   * CmsLead createMany
   */
  export type CmsLeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsLeads.
     */
    data: CmsLeadCreateManyInput | CmsLeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsLead createManyAndReturn
   */
  export type CmsLeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * The data used to create many CmsLeads.
     */
    data: CmsLeadCreateManyInput | CmsLeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsLead update
   */
  export type CmsLeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsLead.
     */
    data: XOR<CmsLeadUpdateInput, CmsLeadUncheckedUpdateInput>
    /**
     * Choose, which CmsLead to update.
     */
    where: CmsLeadWhereUniqueInput
  }

  /**
   * CmsLead updateMany
   */
  export type CmsLeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsLeads.
     */
    data: XOR<CmsLeadUpdateManyMutationInput, CmsLeadUncheckedUpdateManyInput>
    /**
     * Filter which CmsLeads to update
     */
    where?: CmsLeadWhereInput
    /**
     * Limit how many CmsLeads to update.
     */
    limit?: number
  }

  /**
   * CmsLead updateManyAndReturn
   */
  export type CmsLeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * The data used to update CmsLeads.
     */
    data: XOR<CmsLeadUpdateManyMutationInput, CmsLeadUncheckedUpdateManyInput>
    /**
     * Filter which CmsLeads to update
     */
    where?: CmsLeadWhereInput
    /**
     * Limit how many CmsLeads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsLead upsert
   */
  export type CmsLeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsLead to update in case it exists.
     */
    where: CmsLeadWhereUniqueInput
    /**
     * In case the CmsLead found by the `where` argument doesn't exist, create a new CmsLead with this data.
     */
    create: XOR<CmsLeadCreateInput, CmsLeadUncheckedCreateInput>
    /**
     * In case the CmsLead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsLeadUpdateInput, CmsLeadUncheckedUpdateInput>
  }

  /**
   * CmsLead delete
   */
  export type CmsLeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
    /**
     * Filter which CmsLead to delete.
     */
    where: CmsLeadWhereUniqueInput
  }

  /**
   * CmsLead deleteMany
   */
  export type CmsLeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsLeads to delete
     */
    where?: CmsLeadWhereInput
    /**
     * Limit how many CmsLeads to delete.
     */
    limit?: number
  }

  /**
   * CmsLead.product
   */
  export type CmsLead$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsProduct
     */
    select?: CmsProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsProduct
     */
    omit?: CmsProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsProductInclude<ExtArgs> | null
    where?: CmsProductWhereInput
  }

  /**
   * CmsLead.category
   */
  export type CmsLead$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCategory
     */
    select?: CmsCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsCategory
     */
    omit?: CmsCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsCategoryInclude<ExtArgs> | null
    where?: CmsCategoryWhereInput
  }

  /**
   * CmsLead without action
   */
  export type CmsLeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsLead
     */
    select?: CmsLeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsLead
     */
    omit?: CmsLeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsLeadInclude<ExtArgs> | null
  }


  /**
   * Model CmsAd
   */

  export type AggregateCmsAd = {
    _count: CmsAdCountAggregateOutputType | null
    _avg: CmsAdAvgAggregateOutputType | null
    _sum: CmsAdSumAggregateOutputType | null
    _min: CmsAdMinAggregateOutputType | null
    _max: CmsAdMaxAggregateOutputType | null
  }

  export type CmsAdAvgAggregateOutputType = {
    customWidth: number | null
    customHeight: number | null
    sortOrder: number | null
  }

  export type CmsAdSumAggregateOutputType = {
    customWidth: number | null
    customHeight: number | null
    sortOrder: number | null
  }

  export type CmsAdMinAggregateOutputType = {
    id: string | null
    title: string | null
    customWidth: number | null
    customHeight: number | null
    size: $Enums.AdSize | null
    startDateTime: Date | null
    endDateTime: Date | null
    link: string | null
    image: string | null
    active: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAdMaxAggregateOutputType = {
    id: string | null
    title: string | null
    customWidth: number | null
    customHeight: number | null
    size: $Enums.AdSize | null
    startDateTime: Date | null
    endDateTime: Date | null
    link: string | null
    image: string | null
    active: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAdCountAggregateOutputType = {
    id: number
    title: number
    pages: number
    positions: number
    customWidth: number
    customHeight: number
    size: number
    startDateTime: number
    endDateTime: number
    link: number
    image: number
    active: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsAdAvgAggregateInputType = {
    customWidth?: true
    customHeight?: true
    sortOrder?: true
  }

  export type CmsAdSumAggregateInputType = {
    customWidth?: true
    customHeight?: true
    sortOrder?: true
  }

  export type CmsAdMinAggregateInputType = {
    id?: true
    title?: true
    customWidth?: true
    customHeight?: true
    size?: true
    startDateTime?: true
    endDateTime?: true
    link?: true
    image?: true
    active?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAdMaxAggregateInputType = {
    id?: true
    title?: true
    customWidth?: true
    customHeight?: true
    size?: true
    startDateTime?: true
    endDateTime?: true
    link?: true
    image?: true
    active?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAdCountAggregateInputType = {
    id?: true
    title?: true
    pages?: true
    positions?: true
    customWidth?: true
    customHeight?: true
    size?: true
    startDateTime?: true
    endDateTime?: true
    link?: true
    image?: true
    active?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsAdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAd to aggregate.
     */
    where?: CmsAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAds to fetch.
     */
    orderBy?: CmsAdOrderByWithRelationInput | CmsAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsAds
    **/
    _count?: true | CmsAdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsAdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsAdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsAdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsAdMaxAggregateInputType
  }

  export type GetCmsAdAggregateType<T extends CmsAdAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsAd[P]>
      : GetScalarType<T[P], AggregateCmsAd[P]>
  }




  export type CmsAdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAdWhereInput
    orderBy?: CmsAdOrderByWithAggregationInput | CmsAdOrderByWithAggregationInput[]
    by: CmsAdScalarFieldEnum[] | CmsAdScalarFieldEnum
    having?: CmsAdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsAdCountAggregateInputType | true
    _avg?: CmsAdAvgAggregateInputType
    _sum?: CmsAdSumAggregateInputType
    _min?: CmsAdMinAggregateInputType
    _max?: CmsAdMaxAggregateInputType
  }

  export type CmsAdGroupByOutputType = {
    id: string
    title: string
    pages: $Enums.AdPage[]
    positions: $Enums.AdPosition[]
    customWidth: number | null
    customHeight: number | null
    size: $Enums.AdSize
    startDateTime: Date | null
    endDateTime: Date | null
    link: string | null
    image: string
    active: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CmsAdCountAggregateOutputType | null
    _avg: CmsAdAvgAggregateOutputType | null
    _sum: CmsAdSumAggregateOutputType | null
    _min: CmsAdMinAggregateOutputType | null
    _max: CmsAdMaxAggregateOutputType | null
  }

  type GetCmsAdGroupByPayload<T extends CmsAdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsAdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsAdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsAdGroupByOutputType[P]>
            : GetScalarType<T[P], CmsAdGroupByOutputType[P]>
        }
      >
    >


  export type CmsAdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pages?: boolean
    positions?: boolean
    customWidth?: boolean
    customHeight?: boolean
    size?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    link?: boolean
    image?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | CmsAd$eventsArgs<ExtArgs>
    _count?: boolean | CmsAdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAd"]>

  export type CmsAdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pages?: boolean
    positions?: boolean
    customWidth?: boolean
    customHeight?: boolean
    size?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    link?: boolean
    image?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAd"]>

  export type CmsAdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pages?: boolean
    positions?: boolean
    customWidth?: boolean
    customHeight?: boolean
    size?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    link?: boolean
    image?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAd"]>

  export type CmsAdSelectScalar = {
    id?: boolean
    title?: boolean
    pages?: boolean
    positions?: boolean
    customWidth?: boolean
    customHeight?: boolean
    size?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    link?: boolean
    image?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsAdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "pages" | "positions" | "customWidth" | "customHeight" | "size" | "startDateTime" | "endDateTime" | "link" | "image" | "active" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsAd"]>
  export type CmsAdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CmsAd$eventsArgs<ExtArgs>
    _count?: boolean | CmsAdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsAdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CmsAdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CmsAdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsAd"
    objects: {
      events: Prisma.$CmsAdEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      pages: $Enums.AdPage[]
      positions: $Enums.AdPosition[]
      customWidth: number | null
      customHeight: number | null
      size: $Enums.AdSize
      startDateTime: Date | null
      endDateTime: Date | null
      link: string | null
      image: string
      active: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsAd"]>
    composites: {}
  }

  type CmsAdGetPayload<S extends boolean | null | undefined | CmsAdDefaultArgs> = $Result.GetResult<Prisma.$CmsAdPayload, S>

  type CmsAdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsAdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsAdCountAggregateInputType | true
    }

  export interface CmsAdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsAd'], meta: { name: 'CmsAd' } }
    /**
     * Find zero or one CmsAd that matches the filter.
     * @param {CmsAdFindUniqueArgs} args - Arguments to find a CmsAd
     * @example
     * // Get one CmsAd
     * const cmsAd = await prisma.cmsAd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsAdFindUniqueArgs>(args: SelectSubset<T, CmsAdFindUniqueArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsAd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsAdFindUniqueOrThrowArgs} args - Arguments to find a CmsAd
     * @example
     * // Get one CmsAd
     * const cmsAd = await prisma.cmsAd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsAdFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsAdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdFindFirstArgs} args - Arguments to find a CmsAd
     * @example
     * // Get one CmsAd
     * const cmsAd = await prisma.cmsAd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsAdFindFirstArgs>(args?: SelectSubset<T, CmsAdFindFirstArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdFindFirstOrThrowArgs} args - Arguments to find a CmsAd
     * @example
     * // Get one CmsAd
     * const cmsAd = await prisma.cmsAd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsAdFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsAdFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsAds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsAds
     * const cmsAds = await prisma.cmsAd.findMany()
     * 
     * // Get first 10 CmsAds
     * const cmsAds = await prisma.cmsAd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsAdWithIdOnly = await prisma.cmsAd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsAdFindManyArgs>(args?: SelectSubset<T, CmsAdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsAd.
     * @param {CmsAdCreateArgs} args - Arguments to create a CmsAd.
     * @example
     * // Create one CmsAd
     * const CmsAd = await prisma.cmsAd.create({
     *   data: {
     *     // ... data to create a CmsAd
     *   }
     * })
     * 
     */
    create<T extends CmsAdCreateArgs>(args: SelectSubset<T, CmsAdCreateArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsAds.
     * @param {CmsAdCreateManyArgs} args - Arguments to create many CmsAds.
     * @example
     * // Create many CmsAds
     * const cmsAd = await prisma.cmsAd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsAdCreateManyArgs>(args?: SelectSubset<T, CmsAdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsAds and returns the data saved in the database.
     * @param {CmsAdCreateManyAndReturnArgs} args - Arguments to create many CmsAds.
     * @example
     * // Create many CmsAds
     * const cmsAd = await prisma.cmsAd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsAds and only return the `id`
     * const cmsAdWithIdOnly = await prisma.cmsAd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsAdCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsAdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsAd.
     * @param {CmsAdDeleteArgs} args - Arguments to delete one CmsAd.
     * @example
     * // Delete one CmsAd
     * const CmsAd = await prisma.cmsAd.delete({
     *   where: {
     *     // ... filter to delete one CmsAd
     *   }
     * })
     * 
     */
    delete<T extends CmsAdDeleteArgs>(args: SelectSubset<T, CmsAdDeleteArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsAd.
     * @param {CmsAdUpdateArgs} args - Arguments to update one CmsAd.
     * @example
     * // Update one CmsAd
     * const cmsAd = await prisma.cmsAd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsAdUpdateArgs>(args: SelectSubset<T, CmsAdUpdateArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsAds.
     * @param {CmsAdDeleteManyArgs} args - Arguments to filter CmsAds to delete.
     * @example
     * // Delete a few CmsAds
     * const { count } = await prisma.cmsAd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsAdDeleteManyArgs>(args?: SelectSubset<T, CmsAdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsAds
     * const cmsAd = await prisma.cmsAd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsAdUpdateManyArgs>(args: SelectSubset<T, CmsAdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAds and returns the data updated in the database.
     * @param {CmsAdUpdateManyAndReturnArgs} args - Arguments to update many CmsAds.
     * @example
     * // Update many CmsAds
     * const cmsAd = await prisma.cmsAd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsAds and only return the `id`
     * const cmsAdWithIdOnly = await prisma.cmsAd.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsAdUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsAdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsAd.
     * @param {CmsAdUpsertArgs} args - Arguments to update or create a CmsAd.
     * @example
     * // Update or create a CmsAd
     * const cmsAd = await prisma.cmsAd.upsert({
     *   create: {
     *     // ... data to create a CmsAd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsAd we want to update
     *   }
     * })
     */
    upsert<T extends CmsAdUpsertArgs>(args: SelectSubset<T, CmsAdUpsertArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsAds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdCountArgs} args - Arguments to filter CmsAds to count.
     * @example
     * // Count the number of CmsAds
     * const count = await prisma.cmsAd.count({
     *   where: {
     *     // ... the filter for the CmsAds we want to count
     *   }
     * })
    **/
    count<T extends CmsAdCountArgs>(
      args?: Subset<T, CmsAdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsAdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsAd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsAdAggregateArgs>(args: Subset<T, CmsAdAggregateArgs>): Prisma.PrismaPromise<GetCmsAdAggregateType<T>>

    /**
     * Group by CmsAd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdGroupByArgs} args - Group by arguments.
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
      T extends CmsAdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsAdGroupByArgs['orderBy'] }
        : { orderBy?: CmsAdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsAdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsAd model
   */
  readonly fields: CmsAdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsAd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsAdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends CmsAd$eventsArgs<ExtArgs> = {}>(args?: Subset<T, CmsAd$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CmsAd model
   */
  interface CmsAdFieldRefs {
    readonly id: FieldRef<"CmsAd", 'String'>
    readonly title: FieldRef<"CmsAd", 'String'>
    readonly pages: FieldRef<"CmsAd", 'AdPage[]'>
    readonly positions: FieldRef<"CmsAd", 'AdPosition[]'>
    readonly customWidth: FieldRef<"CmsAd", 'Int'>
    readonly customHeight: FieldRef<"CmsAd", 'Int'>
    readonly size: FieldRef<"CmsAd", 'AdSize'>
    readonly startDateTime: FieldRef<"CmsAd", 'DateTime'>
    readonly endDateTime: FieldRef<"CmsAd", 'DateTime'>
    readonly link: FieldRef<"CmsAd", 'String'>
    readonly image: FieldRef<"CmsAd", 'String'>
    readonly active: FieldRef<"CmsAd", 'Boolean'>
    readonly sortOrder: FieldRef<"CmsAd", 'Int'>
    readonly createdAt: FieldRef<"CmsAd", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsAd", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsAd findUnique
   */
  export type CmsAdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * Filter, which CmsAd to fetch.
     */
    where: CmsAdWhereUniqueInput
  }

  /**
   * CmsAd findUniqueOrThrow
   */
  export type CmsAdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * Filter, which CmsAd to fetch.
     */
    where: CmsAdWhereUniqueInput
  }

  /**
   * CmsAd findFirst
   */
  export type CmsAdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * Filter, which CmsAd to fetch.
     */
    where?: CmsAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAds to fetch.
     */
    orderBy?: CmsAdOrderByWithRelationInput | CmsAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAds.
     */
    cursor?: CmsAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAds.
     */
    distinct?: CmsAdScalarFieldEnum | CmsAdScalarFieldEnum[]
  }

  /**
   * CmsAd findFirstOrThrow
   */
  export type CmsAdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * Filter, which CmsAd to fetch.
     */
    where?: CmsAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAds to fetch.
     */
    orderBy?: CmsAdOrderByWithRelationInput | CmsAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAds.
     */
    cursor?: CmsAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAds.
     */
    distinct?: CmsAdScalarFieldEnum | CmsAdScalarFieldEnum[]
  }

  /**
   * CmsAd findMany
   */
  export type CmsAdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * Filter, which CmsAds to fetch.
     */
    where?: CmsAdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAds to fetch.
     */
    orderBy?: CmsAdOrderByWithRelationInput | CmsAdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsAds.
     */
    cursor?: CmsAdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAds.
     */
    distinct?: CmsAdScalarFieldEnum | CmsAdScalarFieldEnum[]
  }

  /**
   * CmsAd create
   */
  export type CmsAdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsAd.
     */
    data: XOR<CmsAdCreateInput, CmsAdUncheckedCreateInput>
  }

  /**
   * CmsAd createMany
   */
  export type CmsAdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsAds.
     */
    data: CmsAdCreateManyInput | CmsAdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAd createManyAndReturn
   */
  export type CmsAdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * The data used to create many CmsAds.
     */
    data: CmsAdCreateManyInput | CmsAdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAd update
   */
  export type CmsAdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsAd.
     */
    data: XOR<CmsAdUpdateInput, CmsAdUncheckedUpdateInput>
    /**
     * Choose, which CmsAd to update.
     */
    where: CmsAdWhereUniqueInput
  }

  /**
   * CmsAd updateMany
   */
  export type CmsAdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsAds.
     */
    data: XOR<CmsAdUpdateManyMutationInput, CmsAdUncheckedUpdateManyInput>
    /**
     * Filter which CmsAds to update
     */
    where?: CmsAdWhereInput
    /**
     * Limit how many CmsAds to update.
     */
    limit?: number
  }

  /**
   * CmsAd updateManyAndReturn
   */
  export type CmsAdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * The data used to update CmsAds.
     */
    data: XOR<CmsAdUpdateManyMutationInput, CmsAdUncheckedUpdateManyInput>
    /**
     * Filter which CmsAds to update
     */
    where?: CmsAdWhereInput
    /**
     * Limit how many CmsAds to update.
     */
    limit?: number
  }

  /**
   * CmsAd upsert
   */
  export type CmsAdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsAd to update in case it exists.
     */
    where: CmsAdWhereUniqueInput
    /**
     * In case the CmsAd found by the `where` argument doesn't exist, create a new CmsAd with this data.
     */
    create: XOR<CmsAdCreateInput, CmsAdUncheckedCreateInput>
    /**
     * In case the CmsAd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsAdUpdateInput, CmsAdUncheckedUpdateInput>
  }

  /**
   * CmsAd delete
   */
  export type CmsAdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
    /**
     * Filter which CmsAd to delete.
     */
    where: CmsAdWhereUniqueInput
  }

  /**
   * CmsAd deleteMany
   */
  export type CmsAdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAds to delete
     */
    where?: CmsAdWhereInput
    /**
     * Limit how many CmsAds to delete.
     */
    limit?: number
  }

  /**
   * CmsAd.events
   */
  export type CmsAd$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    where?: CmsAdEventWhereInput
    orderBy?: CmsAdEventOrderByWithRelationInput | CmsAdEventOrderByWithRelationInput[]
    cursor?: CmsAdEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsAdEventScalarFieldEnum | CmsAdEventScalarFieldEnum[]
  }

  /**
   * CmsAd without action
   */
  export type CmsAdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAd
     */
    select?: CmsAdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAd
     */
    omit?: CmsAdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdInclude<ExtArgs> | null
  }


  /**
   * Model CmsAdEvent
   */

  export type AggregateCmsAdEvent = {
    _count: CmsAdEventCountAggregateOutputType | null
    _min: CmsAdEventMinAggregateOutputType | null
    _max: CmsAdEventMaxAggregateOutputType | null
  }

  export type CmsAdEventMinAggregateOutputType = {
    id: string | null
    adId: string | null
    type: $Enums.AdEventType | null
    isUnique: boolean | null
    ip: string | null
    sessionId: string | null
    userAgent: string | null
    deviceType: string | null
    page: string | null
    referrer: string | null
    country: string | null
    createdAt: Date | null
  }

  export type CmsAdEventMaxAggregateOutputType = {
    id: string | null
    adId: string | null
    type: $Enums.AdEventType | null
    isUnique: boolean | null
    ip: string | null
    sessionId: string | null
    userAgent: string | null
    deviceType: string | null
    page: string | null
    referrer: string | null
    country: string | null
    createdAt: Date | null
  }

  export type CmsAdEventCountAggregateOutputType = {
    id: number
    adId: number
    type: number
    isUnique: number
    ip: number
    sessionId: number
    userAgent: number
    deviceType: number
    page: number
    referrer: number
    country: number
    createdAt: number
    _all: number
  }


  export type CmsAdEventMinAggregateInputType = {
    id?: true
    adId?: true
    type?: true
    isUnique?: true
    ip?: true
    sessionId?: true
    userAgent?: true
    deviceType?: true
    page?: true
    referrer?: true
    country?: true
    createdAt?: true
  }

  export type CmsAdEventMaxAggregateInputType = {
    id?: true
    adId?: true
    type?: true
    isUnique?: true
    ip?: true
    sessionId?: true
    userAgent?: true
    deviceType?: true
    page?: true
    referrer?: true
    country?: true
    createdAt?: true
  }

  export type CmsAdEventCountAggregateInputType = {
    id?: true
    adId?: true
    type?: true
    isUnique?: true
    ip?: true
    sessionId?: true
    userAgent?: true
    deviceType?: true
    page?: true
    referrer?: true
    country?: true
    createdAt?: true
    _all?: true
  }

  export type CmsAdEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAdEvent to aggregate.
     */
    where?: CmsAdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdEvents to fetch.
     */
    orderBy?: CmsAdEventOrderByWithRelationInput | CmsAdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsAdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsAdEvents
    **/
    _count?: true | CmsAdEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsAdEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsAdEventMaxAggregateInputType
  }

  export type GetCmsAdEventAggregateType<T extends CmsAdEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsAdEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsAdEvent[P]>
      : GetScalarType<T[P], AggregateCmsAdEvent[P]>
  }




  export type CmsAdEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAdEventWhereInput
    orderBy?: CmsAdEventOrderByWithAggregationInput | CmsAdEventOrderByWithAggregationInput[]
    by: CmsAdEventScalarFieldEnum[] | CmsAdEventScalarFieldEnum
    having?: CmsAdEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsAdEventCountAggregateInputType | true
    _min?: CmsAdEventMinAggregateInputType
    _max?: CmsAdEventMaxAggregateInputType
  }

  export type CmsAdEventGroupByOutputType = {
    id: string
    adId: string
    type: $Enums.AdEventType
    isUnique: boolean
    ip: string | null
    sessionId: string | null
    userAgent: string | null
    deviceType: string | null
    page: string | null
    referrer: string | null
    country: string | null
    createdAt: Date
    _count: CmsAdEventCountAggregateOutputType | null
    _min: CmsAdEventMinAggregateOutputType | null
    _max: CmsAdEventMaxAggregateOutputType | null
  }

  type GetCmsAdEventGroupByPayload<T extends CmsAdEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsAdEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsAdEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsAdEventGroupByOutputType[P]>
            : GetScalarType<T[P], CmsAdEventGroupByOutputType[P]>
        }
      >
    >


  export type CmsAdEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    type?: boolean
    isUnique?: boolean
    ip?: boolean
    sessionId?: boolean
    userAgent?: boolean
    deviceType?: boolean
    page?: boolean
    referrer?: boolean
    country?: boolean
    createdAt?: boolean
    ad?: boolean | CmsAdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAdEvent"]>

  export type CmsAdEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    type?: boolean
    isUnique?: boolean
    ip?: boolean
    sessionId?: boolean
    userAgent?: boolean
    deviceType?: boolean
    page?: boolean
    referrer?: boolean
    country?: boolean
    createdAt?: boolean
    ad?: boolean | CmsAdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAdEvent"]>

  export type CmsAdEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    type?: boolean
    isUnique?: boolean
    ip?: boolean
    sessionId?: boolean
    userAgent?: boolean
    deviceType?: boolean
    page?: boolean
    referrer?: boolean
    country?: boolean
    createdAt?: boolean
    ad?: boolean | CmsAdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAdEvent"]>

  export type CmsAdEventSelectScalar = {
    id?: boolean
    adId?: boolean
    type?: boolean
    isUnique?: boolean
    ip?: boolean
    sessionId?: boolean
    userAgent?: boolean
    deviceType?: boolean
    page?: boolean
    referrer?: boolean
    country?: boolean
    createdAt?: boolean
  }

  export type CmsAdEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adId" | "type" | "isUnique" | "ip" | "sessionId" | "userAgent" | "deviceType" | "page" | "referrer" | "country" | "createdAt", ExtArgs["result"]["cmsAdEvent"]>
  export type CmsAdEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | CmsAdDefaultArgs<ExtArgs>
  }
  export type CmsAdEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | CmsAdDefaultArgs<ExtArgs>
  }
  export type CmsAdEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | CmsAdDefaultArgs<ExtArgs>
  }

  export type $CmsAdEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsAdEvent"
    objects: {
      ad: Prisma.$CmsAdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adId: string
      type: $Enums.AdEventType
      isUnique: boolean
      ip: string | null
      sessionId: string | null
      userAgent: string | null
      deviceType: string | null
      page: string | null
      referrer: string | null
      country: string | null
      createdAt: Date
    }, ExtArgs["result"]["cmsAdEvent"]>
    composites: {}
  }

  type CmsAdEventGetPayload<S extends boolean | null | undefined | CmsAdEventDefaultArgs> = $Result.GetResult<Prisma.$CmsAdEventPayload, S>

  type CmsAdEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsAdEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsAdEventCountAggregateInputType | true
    }

  export interface CmsAdEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsAdEvent'], meta: { name: 'CmsAdEvent' } }
    /**
     * Find zero or one CmsAdEvent that matches the filter.
     * @param {CmsAdEventFindUniqueArgs} args - Arguments to find a CmsAdEvent
     * @example
     * // Get one CmsAdEvent
     * const cmsAdEvent = await prisma.cmsAdEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsAdEventFindUniqueArgs>(args: SelectSubset<T, CmsAdEventFindUniqueArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsAdEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsAdEventFindUniqueOrThrowArgs} args - Arguments to find a CmsAdEvent
     * @example
     * // Get one CmsAdEvent
     * const cmsAdEvent = await prisma.cmsAdEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsAdEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsAdEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAdEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventFindFirstArgs} args - Arguments to find a CmsAdEvent
     * @example
     * // Get one CmsAdEvent
     * const cmsAdEvent = await prisma.cmsAdEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsAdEventFindFirstArgs>(args?: SelectSubset<T, CmsAdEventFindFirstArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAdEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventFindFirstOrThrowArgs} args - Arguments to find a CmsAdEvent
     * @example
     * // Get one CmsAdEvent
     * const cmsAdEvent = await prisma.cmsAdEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsAdEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsAdEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsAdEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsAdEvents
     * const cmsAdEvents = await prisma.cmsAdEvent.findMany()
     * 
     * // Get first 10 CmsAdEvents
     * const cmsAdEvents = await prisma.cmsAdEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsAdEventWithIdOnly = await prisma.cmsAdEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsAdEventFindManyArgs>(args?: SelectSubset<T, CmsAdEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsAdEvent.
     * @param {CmsAdEventCreateArgs} args - Arguments to create a CmsAdEvent.
     * @example
     * // Create one CmsAdEvent
     * const CmsAdEvent = await prisma.cmsAdEvent.create({
     *   data: {
     *     // ... data to create a CmsAdEvent
     *   }
     * })
     * 
     */
    create<T extends CmsAdEventCreateArgs>(args: SelectSubset<T, CmsAdEventCreateArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsAdEvents.
     * @param {CmsAdEventCreateManyArgs} args - Arguments to create many CmsAdEvents.
     * @example
     * // Create many CmsAdEvents
     * const cmsAdEvent = await prisma.cmsAdEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsAdEventCreateManyArgs>(args?: SelectSubset<T, CmsAdEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsAdEvents and returns the data saved in the database.
     * @param {CmsAdEventCreateManyAndReturnArgs} args - Arguments to create many CmsAdEvents.
     * @example
     * // Create many CmsAdEvents
     * const cmsAdEvent = await prisma.cmsAdEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsAdEvents and only return the `id`
     * const cmsAdEventWithIdOnly = await prisma.cmsAdEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsAdEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsAdEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsAdEvent.
     * @param {CmsAdEventDeleteArgs} args - Arguments to delete one CmsAdEvent.
     * @example
     * // Delete one CmsAdEvent
     * const CmsAdEvent = await prisma.cmsAdEvent.delete({
     *   where: {
     *     // ... filter to delete one CmsAdEvent
     *   }
     * })
     * 
     */
    delete<T extends CmsAdEventDeleteArgs>(args: SelectSubset<T, CmsAdEventDeleteArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsAdEvent.
     * @param {CmsAdEventUpdateArgs} args - Arguments to update one CmsAdEvent.
     * @example
     * // Update one CmsAdEvent
     * const cmsAdEvent = await prisma.cmsAdEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsAdEventUpdateArgs>(args: SelectSubset<T, CmsAdEventUpdateArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsAdEvents.
     * @param {CmsAdEventDeleteManyArgs} args - Arguments to filter CmsAdEvents to delete.
     * @example
     * // Delete a few CmsAdEvents
     * const { count } = await prisma.cmsAdEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsAdEventDeleteManyArgs>(args?: SelectSubset<T, CmsAdEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAdEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsAdEvents
     * const cmsAdEvent = await prisma.cmsAdEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsAdEventUpdateManyArgs>(args: SelectSubset<T, CmsAdEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAdEvents and returns the data updated in the database.
     * @param {CmsAdEventUpdateManyAndReturnArgs} args - Arguments to update many CmsAdEvents.
     * @example
     * // Update many CmsAdEvents
     * const cmsAdEvent = await prisma.cmsAdEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsAdEvents and only return the `id`
     * const cmsAdEventWithIdOnly = await prisma.cmsAdEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsAdEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsAdEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsAdEvent.
     * @param {CmsAdEventUpsertArgs} args - Arguments to update or create a CmsAdEvent.
     * @example
     * // Update or create a CmsAdEvent
     * const cmsAdEvent = await prisma.cmsAdEvent.upsert({
     *   create: {
     *     // ... data to create a CmsAdEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsAdEvent we want to update
     *   }
     * })
     */
    upsert<T extends CmsAdEventUpsertArgs>(args: SelectSubset<T, CmsAdEventUpsertArgs<ExtArgs>>): Prisma__CmsAdEventClient<$Result.GetResult<Prisma.$CmsAdEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsAdEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventCountArgs} args - Arguments to filter CmsAdEvents to count.
     * @example
     * // Count the number of CmsAdEvents
     * const count = await prisma.cmsAdEvent.count({
     *   where: {
     *     // ... the filter for the CmsAdEvents we want to count
     *   }
     * })
    **/
    count<T extends CmsAdEventCountArgs>(
      args?: Subset<T, CmsAdEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsAdEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsAdEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsAdEventAggregateArgs>(args: Subset<T, CmsAdEventAggregateArgs>): Prisma.PrismaPromise<GetCmsAdEventAggregateType<T>>

    /**
     * Group by CmsAdEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAdEventGroupByArgs} args - Group by arguments.
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
      T extends CmsAdEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsAdEventGroupByArgs['orderBy'] }
        : { orderBy?: CmsAdEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsAdEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsAdEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsAdEvent model
   */
  readonly fields: CmsAdEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsAdEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsAdEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ad<T extends CmsAdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsAdDefaultArgs<ExtArgs>>): Prisma__CmsAdClient<$Result.GetResult<Prisma.$CmsAdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CmsAdEvent model
   */
  interface CmsAdEventFieldRefs {
    readonly id: FieldRef<"CmsAdEvent", 'String'>
    readonly adId: FieldRef<"CmsAdEvent", 'String'>
    readonly type: FieldRef<"CmsAdEvent", 'AdEventType'>
    readonly isUnique: FieldRef<"CmsAdEvent", 'Boolean'>
    readonly ip: FieldRef<"CmsAdEvent", 'String'>
    readonly sessionId: FieldRef<"CmsAdEvent", 'String'>
    readonly userAgent: FieldRef<"CmsAdEvent", 'String'>
    readonly deviceType: FieldRef<"CmsAdEvent", 'String'>
    readonly page: FieldRef<"CmsAdEvent", 'String'>
    readonly referrer: FieldRef<"CmsAdEvent", 'String'>
    readonly country: FieldRef<"CmsAdEvent", 'String'>
    readonly createdAt: FieldRef<"CmsAdEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsAdEvent findUnique
   */
  export type CmsAdEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * Filter, which CmsAdEvent to fetch.
     */
    where: CmsAdEventWhereUniqueInput
  }

  /**
   * CmsAdEvent findUniqueOrThrow
   */
  export type CmsAdEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * Filter, which CmsAdEvent to fetch.
     */
    where: CmsAdEventWhereUniqueInput
  }

  /**
   * CmsAdEvent findFirst
   */
  export type CmsAdEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * Filter, which CmsAdEvent to fetch.
     */
    where?: CmsAdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdEvents to fetch.
     */
    orderBy?: CmsAdEventOrderByWithRelationInput | CmsAdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAdEvents.
     */
    cursor?: CmsAdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAdEvents.
     */
    distinct?: CmsAdEventScalarFieldEnum | CmsAdEventScalarFieldEnum[]
  }

  /**
   * CmsAdEvent findFirstOrThrow
   */
  export type CmsAdEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * Filter, which CmsAdEvent to fetch.
     */
    where?: CmsAdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdEvents to fetch.
     */
    orderBy?: CmsAdEventOrderByWithRelationInput | CmsAdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAdEvents.
     */
    cursor?: CmsAdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAdEvents.
     */
    distinct?: CmsAdEventScalarFieldEnum | CmsAdEventScalarFieldEnum[]
  }

  /**
   * CmsAdEvent findMany
   */
  export type CmsAdEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * Filter, which CmsAdEvents to fetch.
     */
    where?: CmsAdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAdEvents to fetch.
     */
    orderBy?: CmsAdEventOrderByWithRelationInput | CmsAdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsAdEvents.
     */
    cursor?: CmsAdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAdEvents.
     */
    distinct?: CmsAdEventScalarFieldEnum | CmsAdEventScalarFieldEnum[]
  }

  /**
   * CmsAdEvent create
   */
  export type CmsAdEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsAdEvent.
     */
    data: XOR<CmsAdEventCreateInput, CmsAdEventUncheckedCreateInput>
  }

  /**
   * CmsAdEvent createMany
   */
  export type CmsAdEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsAdEvents.
     */
    data: CmsAdEventCreateManyInput | CmsAdEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAdEvent createManyAndReturn
   */
  export type CmsAdEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * The data used to create many CmsAdEvents.
     */
    data: CmsAdEventCreateManyInput | CmsAdEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsAdEvent update
   */
  export type CmsAdEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsAdEvent.
     */
    data: XOR<CmsAdEventUpdateInput, CmsAdEventUncheckedUpdateInput>
    /**
     * Choose, which CmsAdEvent to update.
     */
    where: CmsAdEventWhereUniqueInput
  }

  /**
   * CmsAdEvent updateMany
   */
  export type CmsAdEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsAdEvents.
     */
    data: XOR<CmsAdEventUpdateManyMutationInput, CmsAdEventUncheckedUpdateManyInput>
    /**
     * Filter which CmsAdEvents to update
     */
    where?: CmsAdEventWhereInput
    /**
     * Limit how many CmsAdEvents to update.
     */
    limit?: number
  }

  /**
   * CmsAdEvent updateManyAndReturn
   */
  export type CmsAdEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * The data used to update CmsAdEvents.
     */
    data: XOR<CmsAdEventUpdateManyMutationInput, CmsAdEventUncheckedUpdateManyInput>
    /**
     * Filter which CmsAdEvents to update
     */
    where?: CmsAdEventWhereInput
    /**
     * Limit how many CmsAdEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsAdEvent upsert
   */
  export type CmsAdEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsAdEvent to update in case it exists.
     */
    where: CmsAdEventWhereUniqueInput
    /**
     * In case the CmsAdEvent found by the `where` argument doesn't exist, create a new CmsAdEvent with this data.
     */
    create: XOR<CmsAdEventCreateInput, CmsAdEventUncheckedCreateInput>
    /**
     * In case the CmsAdEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsAdEventUpdateInput, CmsAdEventUncheckedUpdateInput>
  }

  /**
   * CmsAdEvent delete
   */
  export type CmsAdEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
    /**
     * Filter which CmsAdEvent to delete.
     */
    where: CmsAdEventWhereUniqueInput
  }

  /**
   * CmsAdEvent deleteMany
   */
  export type CmsAdEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAdEvents to delete
     */
    where?: CmsAdEventWhereInput
    /**
     * Limit how many CmsAdEvents to delete.
     */
    limit?: number
  }

  /**
   * CmsAdEvent without action
   */
  export type CmsAdEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAdEvent
     */
    select?: CmsAdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAdEvent
     */
    omit?: CmsAdEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAdEventInclude<ExtArgs> | null
  }


  /**
   * Model CmsSettings
   */

  export type AggregateCmsSettings = {
    _count: CmsSettingsCountAggregateOutputType | null
    _min: CmsSettingsMinAggregateOutputType | null
    _max: CmsSettingsMaxAggregateOutputType | null
  }

  export type CmsSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    whatsappNo: string | null
    callingNo: string | null
    supportEmail: string | null
    instagramUrl: string | null
    linkedinUrl: string | null
    autoMailEnabled: boolean | null
    autoWhatsappEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    maintenanceMode: boolean | null
  }

  export type CmsSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    whatsappNo: string | null
    callingNo: string | null
    supportEmail: string | null
    instagramUrl: string | null
    linkedinUrl: string | null
    autoMailEnabled: boolean | null
    autoWhatsappEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    maintenanceMode: boolean | null
  }

  export type CmsSettingsCountAggregateOutputType = {
    id: number
    key: number
    whatsappNo: number
    callingNo: number
    supportEmail: number
    instagramUrl: number
    linkedinUrl: number
    autoMailEnabled: number
    autoWhatsappEnabled: number
    createdAt: number
    updatedAt: number
    maintenanceMode: number
    _all: number
  }


  export type CmsSettingsMinAggregateInputType = {
    id?: true
    key?: true
    whatsappNo?: true
    callingNo?: true
    supportEmail?: true
    instagramUrl?: true
    linkedinUrl?: true
    autoMailEnabled?: true
    autoWhatsappEnabled?: true
    createdAt?: true
    updatedAt?: true
    maintenanceMode?: true
  }

  export type CmsSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    whatsappNo?: true
    callingNo?: true
    supportEmail?: true
    instagramUrl?: true
    linkedinUrl?: true
    autoMailEnabled?: true
    autoWhatsappEnabled?: true
    createdAt?: true
    updatedAt?: true
    maintenanceMode?: true
  }

  export type CmsSettingsCountAggregateInputType = {
    id?: true
    key?: true
    whatsappNo?: true
    callingNo?: true
    supportEmail?: true
    instagramUrl?: true
    linkedinUrl?: true
    autoMailEnabled?: true
    autoWhatsappEnabled?: true
    createdAt?: true
    updatedAt?: true
    maintenanceMode?: true
    _all?: true
  }

  export type CmsSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSettings to aggregate.
     */
    where?: CmsSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingsOrderByWithRelationInput | CmsSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsSettings
    **/
    _count?: true | CmsSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsSettingsMaxAggregateInputType
  }

  export type GetCmsSettingsAggregateType<T extends CmsSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsSettings[P]>
      : GetScalarType<T[P], AggregateCmsSettings[P]>
  }




  export type CmsSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSettingsWhereInput
    orderBy?: CmsSettingsOrderByWithAggregationInput | CmsSettingsOrderByWithAggregationInput[]
    by: CmsSettingsScalarFieldEnum[] | CmsSettingsScalarFieldEnum
    having?: CmsSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsSettingsCountAggregateInputType | true
    _min?: CmsSettingsMinAggregateInputType
    _max?: CmsSettingsMaxAggregateInputType
  }

  export type CmsSettingsGroupByOutputType = {
    id: string
    key: string
    whatsappNo: string | null
    callingNo: string | null
    supportEmail: string | null
    instagramUrl: string | null
    linkedinUrl: string | null
    autoMailEnabled: boolean
    autoWhatsappEnabled: boolean
    createdAt: Date
    updatedAt: Date
    maintenanceMode: boolean
    _count: CmsSettingsCountAggregateOutputType | null
    _min: CmsSettingsMinAggregateOutputType | null
    _max: CmsSettingsMaxAggregateOutputType | null
  }

  type GetCmsSettingsGroupByPayload<T extends CmsSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], CmsSettingsGroupByOutputType[P]>
        }
      >
    >


  export type CmsSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    whatsappNo?: boolean
    callingNo?: boolean
    supportEmail?: boolean
    instagramUrl?: boolean
    linkedinUrl?: boolean
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }, ExtArgs["result"]["cmsSettings"]>

  export type CmsSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    whatsappNo?: boolean
    callingNo?: boolean
    supportEmail?: boolean
    instagramUrl?: boolean
    linkedinUrl?: boolean
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }, ExtArgs["result"]["cmsSettings"]>

  export type CmsSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    whatsappNo?: boolean
    callingNo?: boolean
    supportEmail?: boolean
    instagramUrl?: boolean
    linkedinUrl?: boolean
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }, ExtArgs["result"]["cmsSettings"]>

  export type CmsSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    whatsappNo?: boolean
    callingNo?: boolean
    supportEmail?: boolean
    instagramUrl?: boolean
    linkedinUrl?: boolean
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceMode?: boolean
  }

  export type CmsSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "whatsappNo" | "callingNo" | "supportEmail" | "instagramUrl" | "linkedinUrl" | "autoMailEnabled" | "autoWhatsappEnabled" | "createdAt" | "updatedAt" | "maintenanceMode", ExtArgs["result"]["cmsSettings"]>

  export type $CmsSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      whatsappNo: string | null
      callingNo: string | null
      supportEmail: string | null
      instagramUrl: string | null
      linkedinUrl: string | null
      autoMailEnabled: boolean
      autoWhatsappEnabled: boolean
      createdAt: Date
      updatedAt: Date
      maintenanceMode: boolean
    }, ExtArgs["result"]["cmsSettings"]>
    composites: {}
  }

  type CmsSettingsGetPayload<S extends boolean | null | undefined | CmsSettingsDefaultArgs> = $Result.GetResult<Prisma.$CmsSettingsPayload, S>

  type CmsSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsSettingsCountAggregateInputType | true
    }

  export interface CmsSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsSettings'], meta: { name: 'CmsSettings' } }
    /**
     * Find zero or one CmsSettings that matches the filter.
     * @param {CmsSettingsFindUniqueArgs} args - Arguments to find a CmsSettings
     * @example
     * // Get one CmsSettings
     * const cmsSettings = await prisma.cmsSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsSettingsFindUniqueArgs>(args: SelectSubset<T, CmsSettingsFindUniqueArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsSettingsFindUniqueOrThrowArgs} args - Arguments to find a CmsSettings
     * @example
     * // Get one CmsSettings
     * const cmsSettings = await prisma.cmsSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsFindFirstArgs} args - Arguments to find a CmsSettings
     * @example
     * // Get one CmsSettings
     * const cmsSettings = await prisma.cmsSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsSettingsFindFirstArgs>(args?: SelectSubset<T, CmsSettingsFindFirstArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsFindFirstOrThrowArgs} args - Arguments to find a CmsSettings
     * @example
     * // Get one CmsSettings
     * const cmsSettings = await prisma.cmsSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsSettings
     * const cmsSettings = await prisma.cmsSettings.findMany()
     * 
     * // Get first 10 CmsSettings
     * const cmsSettings = await prisma.cmsSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsSettingsWithIdOnly = await prisma.cmsSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsSettingsFindManyArgs>(args?: SelectSubset<T, CmsSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsSettings.
     * @param {CmsSettingsCreateArgs} args - Arguments to create a CmsSettings.
     * @example
     * // Create one CmsSettings
     * const CmsSettings = await prisma.cmsSettings.create({
     *   data: {
     *     // ... data to create a CmsSettings
     *   }
     * })
     * 
     */
    create<T extends CmsSettingsCreateArgs>(args: SelectSubset<T, CmsSettingsCreateArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsSettings.
     * @param {CmsSettingsCreateManyArgs} args - Arguments to create many CmsSettings.
     * @example
     * // Create many CmsSettings
     * const cmsSettings = await prisma.cmsSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsSettingsCreateManyArgs>(args?: SelectSubset<T, CmsSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsSettings and returns the data saved in the database.
     * @param {CmsSettingsCreateManyAndReturnArgs} args - Arguments to create many CmsSettings.
     * @example
     * // Create many CmsSettings
     * const cmsSettings = await prisma.cmsSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsSettings and only return the `id`
     * const cmsSettingsWithIdOnly = await prisma.cmsSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsSettings.
     * @param {CmsSettingsDeleteArgs} args - Arguments to delete one CmsSettings.
     * @example
     * // Delete one CmsSettings
     * const CmsSettings = await prisma.cmsSettings.delete({
     *   where: {
     *     // ... filter to delete one CmsSettings
     *   }
     * })
     * 
     */
    delete<T extends CmsSettingsDeleteArgs>(args: SelectSubset<T, CmsSettingsDeleteArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsSettings.
     * @param {CmsSettingsUpdateArgs} args - Arguments to update one CmsSettings.
     * @example
     * // Update one CmsSettings
     * const cmsSettings = await prisma.cmsSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsSettingsUpdateArgs>(args: SelectSubset<T, CmsSettingsUpdateArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsSettings.
     * @param {CmsSettingsDeleteManyArgs} args - Arguments to filter CmsSettings to delete.
     * @example
     * // Delete a few CmsSettings
     * const { count } = await prisma.cmsSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsSettingsDeleteManyArgs>(args?: SelectSubset<T, CmsSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsSettings
     * const cmsSettings = await prisma.cmsSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsSettingsUpdateManyArgs>(args: SelectSubset<T, CmsSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSettings and returns the data updated in the database.
     * @param {CmsSettingsUpdateManyAndReturnArgs} args - Arguments to update many CmsSettings.
     * @example
     * // Update many CmsSettings
     * const cmsSettings = await prisma.cmsSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsSettings and only return the `id`
     * const cmsSettingsWithIdOnly = await prisma.cmsSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsSettings.
     * @param {CmsSettingsUpsertArgs} args - Arguments to update or create a CmsSettings.
     * @example
     * // Update or create a CmsSettings
     * const cmsSettings = await prisma.cmsSettings.upsert({
     *   create: {
     *     // ... data to create a CmsSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsSettings we want to update
     *   }
     * })
     */
    upsert<T extends CmsSettingsUpsertArgs>(args: SelectSubset<T, CmsSettingsUpsertArgs<ExtArgs>>): Prisma__CmsSettingsClient<$Result.GetResult<Prisma.$CmsSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsCountArgs} args - Arguments to filter CmsSettings to count.
     * @example
     * // Count the number of CmsSettings
     * const count = await prisma.cmsSettings.count({
     *   where: {
     *     // ... the filter for the CmsSettings we want to count
     *   }
     * })
    **/
    count<T extends CmsSettingsCountArgs>(
      args?: Subset<T, CmsSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsSettingsAggregateArgs>(args: Subset<T, CmsSettingsAggregateArgs>): Prisma.PrismaPromise<GetCmsSettingsAggregateType<T>>

    /**
     * Group by CmsSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSettingsGroupByArgs} args - Group by arguments.
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
      T extends CmsSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsSettingsGroupByArgs['orderBy'] }
        : { orderBy?: CmsSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsSettings model
   */
  readonly fields: CmsSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CmsSettings model
   */
  interface CmsSettingsFieldRefs {
    readonly id: FieldRef<"CmsSettings", 'String'>
    readonly key: FieldRef<"CmsSettings", 'String'>
    readonly whatsappNo: FieldRef<"CmsSettings", 'String'>
    readonly callingNo: FieldRef<"CmsSettings", 'String'>
    readonly supportEmail: FieldRef<"CmsSettings", 'String'>
    readonly instagramUrl: FieldRef<"CmsSettings", 'String'>
    readonly linkedinUrl: FieldRef<"CmsSettings", 'String'>
    readonly autoMailEnabled: FieldRef<"CmsSettings", 'Boolean'>
    readonly autoWhatsappEnabled: FieldRef<"CmsSettings", 'Boolean'>
    readonly createdAt: FieldRef<"CmsSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsSettings", 'DateTime'>
    readonly maintenanceMode: FieldRef<"CmsSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CmsSettings findUnique
   */
  export type CmsSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CmsSettings to fetch.
     */
    where: CmsSettingsWhereUniqueInput
  }

  /**
   * CmsSettings findUniqueOrThrow
   */
  export type CmsSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CmsSettings to fetch.
     */
    where: CmsSettingsWhereUniqueInput
  }

  /**
   * CmsSettings findFirst
   */
  export type CmsSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CmsSettings to fetch.
     */
    where?: CmsSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingsOrderByWithRelationInput | CmsSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSettings.
     */
    cursor?: CmsSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSettings.
     */
    distinct?: CmsSettingsScalarFieldEnum | CmsSettingsScalarFieldEnum[]
  }

  /**
   * CmsSettings findFirstOrThrow
   */
  export type CmsSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CmsSettings to fetch.
     */
    where?: CmsSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingsOrderByWithRelationInput | CmsSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSettings.
     */
    cursor?: CmsSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSettings.
     */
    distinct?: CmsSettingsScalarFieldEnum | CmsSettingsScalarFieldEnum[]
  }

  /**
   * CmsSettings findMany
   */
  export type CmsSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CmsSettings to fetch.
     */
    where?: CmsSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSettings to fetch.
     */
    orderBy?: CmsSettingsOrderByWithRelationInput | CmsSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsSettings.
     */
    cursor?: CmsSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSettings.
     */
    distinct?: CmsSettingsScalarFieldEnum | CmsSettingsScalarFieldEnum[]
  }

  /**
   * CmsSettings create
   */
  export type CmsSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsSettings.
     */
    data: XOR<CmsSettingsCreateInput, CmsSettingsUncheckedCreateInput>
  }

  /**
   * CmsSettings createMany
   */
  export type CmsSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsSettings.
     */
    data: CmsSettingsCreateManyInput | CmsSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSettings createManyAndReturn
   */
  export type CmsSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many CmsSettings.
     */
    data: CmsSettingsCreateManyInput | CmsSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSettings update
   */
  export type CmsSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsSettings.
     */
    data: XOR<CmsSettingsUpdateInput, CmsSettingsUncheckedUpdateInput>
    /**
     * Choose, which CmsSettings to update.
     */
    where: CmsSettingsWhereUniqueInput
  }

  /**
   * CmsSettings updateMany
   */
  export type CmsSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsSettings.
     */
    data: XOR<CmsSettingsUpdateManyMutationInput, CmsSettingsUncheckedUpdateManyInput>
    /**
     * Filter which CmsSettings to update
     */
    where?: CmsSettingsWhereInput
    /**
     * Limit how many CmsSettings to update.
     */
    limit?: number
  }

  /**
   * CmsSettings updateManyAndReturn
   */
  export type CmsSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * The data used to update CmsSettings.
     */
    data: XOR<CmsSettingsUpdateManyMutationInput, CmsSettingsUncheckedUpdateManyInput>
    /**
     * Filter which CmsSettings to update
     */
    where?: CmsSettingsWhereInput
    /**
     * Limit how many CmsSettings to update.
     */
    limit?: number
  }

  /**
   * CmsSettings upsert
   */
  export type CmsSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsSettings to update in case it exists.
     */
    where: CmsSettingsWhereUniqueInput
    /**
     * In case the CmsSettings found by the `where` argument doesn't exist, create a new CmsSettings with this data.
     */
    create: XOR<CmsSettingsCreateInput, CmsSettingsUncheckedCreateInput>
    /**
     * In case the CmsSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsSettingsUpdateInput, CmsSettingsUncheckedUpdateInput>
  }

  /**
   * CmsSettings delete
   */
  export type CmsSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
    /**
     * Filter which CmsSettings to delete.
     */
    where: CmsSettingsWhereUniqueInput
  }

  /**
   * CmsSettings deleteMany
   */
  export type CmsSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSettings to delete
     */
    where?: CmsSettingsWhereInput
    /**
     * Limit how many CmsSettings to delete.
     */
    limit?: number
  }

  /**
   * CmsSettings without action
   */
  export type CmsSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSettings
     */
    select?: CmsSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSettings
     */
    omit?: CmsSettingsOmit<ExtArgs> | null
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


  export const CmsAdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsAdminScalarFieldEnum = (typeof CmsAdminScalarFieldEnum)[keyof typeof CmsAdminScalarFieldEnum]


  export const CmsCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsCategoryScalarFieldEnum = (typeof CmsCategoryScalarFieldEnum)[keyof typeof CmsCategoryScalarFieldEnum]


  export const CmsSubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type CmsSubCategoryScalarFieldEnum = (typeof CmsSubCategoryScalarFieldEnum)[keyof typeof CmsSubCategoryScalarFieldEnum]


  export const CmsBlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImage: 'coverImage',
    tags: 'tags',
    author: 'author',
    status: 'status',
    publishedAt: 'publishedAt',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId',
    subCategoryId: 'subCategoryId'
  };

  export type CmsBlogScalarFieldEnum = (typeof CmsBlogScalarFieldEnum)[keyof typeof CmsBlogScalarFieldEnum]


  export const CmsPartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsPartnerScalarFieldEnum = (typeof CmsPartnerScalarFieldEnum)[keyof typeof CmsPartnerScalarFieldEnum]


  export const CmsTestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    avatar: 'avatar',
    content: 'content',
    rating: 'rating',
    featured: 'featured',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsTestimonialScalarFieldEnum = (typeof CmsTestimonialScalarFieldEnum)[keyof typeof CmsTestimonialScalarFieldEnum]


  export const CmsProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    shortDescription: 'shortDescription',
    description: 'description',
    image: 'image',
    provider: 'provider',
    providerLogo: 'providerLogo',
    interestRate: 'interestRate',
    processingFee: 'processingFee',
    minAmount: 'minAmount',
    maxAmount: 'maxAmount',
    tenure: 'tenure',
    features: 'features',
    benefits: 'benefits',
    eligibility: 'eligibility',
    formFields: 'formFields',
    applyUrl: 'applyUrl',
    status: 'status',
    featured: 'featured',
    isBestSeller: 'isBestSeller',
    badge: 'badge',
    sortOrder: 'sortOrder',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId',
    subCategoryId: 'subCategoryId'
  };

  export type CmsProductScalarFieldEnum = (typeof CmsProductScalarFieldEnum)[keyof typeof CmsProductScalarFieldEnum]


  export const CmsLeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    customData: 'customData',
    status: 'status',
    notes: 'notes',
    assignedTo: 'assignedTo',
    source: 'source',
    utmSource: 'utmSource',
    utmMedium: 'utmMedium',
    utmCampaign: 'utmCampaign',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    productId: 'productId',
    categoryId: 'categoryId'
  };

  export type CmsLeadScalarFieldEnum = (typeof CmsLeadScalarFieldEnum)[keyof typeof CmsLeadScalarFieldEnum]


  export const CmsAdScalarFieldEnum: {
    id: 'id',
    title: 'title',
    pages: 'pages',
    positions: 'positions',
    customWidth: 'customWidth',
    customHeight: 'customHeight',
    size: 'size',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    link: 'link',
    image: 'image',
    active: 'active',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsAdScalarFieldEnum = (typeof CmsAdScalarFieldEnum)[keyof typeof CmsAdScalarFieldEnum]


  export const CmsAdEventScalarFieldEnum: {
    id: 'id',
    adId: 'adId',
    type: 'type',
    isUnique: 'isUnique',
    ip: 'ip',
    sessionId: 'sessionId',
    userAgent: 'userAgent',
    deviceType: 'deviceType',
    page: 'page',
    referrer: 'referrer',
    country: 'country',
    createdAt: 'createdAt'
  };

  export type CmsAdEventScalarFieldEnum = (typeof CmsAdEventScalarFieldEnum)[keyof typeof CmsAdEventScalarFieldEnum]


  export const CmsSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    whatsappNo: 'whatsappNo',
    callingNo: 'callingNo',
    supportEmail: 'supportEmail',
    instagramUrl: 'instagramUrl',
    linkedinUrl: 'linkedinUrl',
    autoMailEnabled: 'autoMailEnabled',
    autoWhatsappEnabled: 'autoWhatsappEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    maintenanceMode: 'maintenanceMode'
  };

  export type CmsSettingsScalarFieldEnum = (typeof CmsSettingsScalarFieldEnum)[keyof typeof CmsSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'CmsAdminRole'
   */
  export type EnumCmsAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsAdminRole'>
    


  /**
   * Reference to a field of type 'CmsAdminRole[]'
   */
  export type ListEnumCmsAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsAdminRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CmsStatus'
   */
  export type EnumCmsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsStatus'>
    


  /**
   * Reference to a field of type 'CmsStatus[]'
   */
  export type ListEnumCmsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'AdPage[]'
   */
  export type ListEnumAdPageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdPage[]'>
    


  /**
   * Reference to a field of type 'AdPage'
   */
  export type EnumAdPageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdPage'>
    


  /**
   * Reference to a field of type 'AdPosition[]'
   */
  export type ListEnumAdPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdPosition[]'>
    


  /**
   * Reference to a field of type 'AdPosition'
   */
  export type EnumAdPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdPosition'>
    


  /**
   * Reference to a field of type 'AdSize'
   */
  export type EnumAdSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdSize'>
    


  /**
   * Reference to a field of type 'AdSize[]'
   */
  export type ListEnumAdSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdSize[]'>
    


  /**
   * Reference to a field of type 'AdEventType'
   */
  export type EnumAdEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdEventType'>
    


  /**
   * Reference to a field of type 'AdEventType[]'
   */
  export type ListEnumAdEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdEventType[]'>
    


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


  export type CmsAdminWhereInput = {
    AND?: CmsAdminWhereInput | CmsAdminWhereInput[]
    OR?: CmsAdminWhereInput[]
    NOT?: CmsAdminWhereInput | CmsAdminWhereInput[]
    id?: StringFilter<"CmsAdmin"> | string
    email?: StringFilter<"CmsAdmin"> | string
    passwordHash?: StringFilter<"CmsAdmin"> | string
    name?: StringFilter<"CmsAdmin"> | string
    role?: EnumCmsAdminRoleFilter<"CmsAdmin"> | $Enums.CmsAdminRole
    isActive?: BoolFilter<"CmsAdmin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"CmsAdmin"> | Date | string | null
    createdAt?: DateTimeFilter<"CmsAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAdmin"> | Date | string
  }

  export type CmsAdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CmsAdminWhereInput | CmsAdminWhereInput[]
    OR?: CmsAdminWhereInput[]
    NOT?: CmsAdminWhereInput | CmsAdminWhereInput[]
    passwordHash?: StringFilter<"CmsAdmin"> | string
    name?: StringFilter<"CmsAdmin"> | string
    role?: EnumCmsAdminRoleFilter<"CmsAdmin"> | $Enums.CmsAdminRole
    isActive?: BoolFilter<"CmsAdmin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"CmsAdmin"> | Date | string | null
    createdAt?: DateTimeFilter<"CmsAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAdmin"> | Date | string
  }, "id" | "email">

  export type CmsAdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsAdminCountOrderByAggregateInput
    _max?: CmsAdminMaxOrderByAggregateInput
    _min?: CmsAdminMinOrderByAggregateInput
  }

  export type CmsAdminScalarWhereWithAggregatesInput = {
    AND?: CmsAdminScalarWhereWithAggregatesInput | CmsAdminScalarWhereWithAggregatesInput[]
    OR?: CmsAdminScalarWhereWithAggregatesInput[]
    NOT?: CmsAdminScalarWhereWithAggregatesInput | CmsAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsAdmin"> | string
    email?: StringWithAggregatesFilter<"CmsAdmin"> | string
    passwordHash?: StringWithAggregatesFilter<"CmsAdmin"> | string
    name?: StringWithAggregatesFilter<"CmsAdmin"> | string
    role?: EnumCmsAdminRoleWithAggregatesFilter<"CmsAdmin"> | $Enums.CmsAdminRole
    isActive?: BoolWithAggregatesFilter<"CmsAdmin"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"CmsAdmin"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CmsAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsAdmin"> | Date | string
  }

  export type CmsCategoryWhereInput = {
    AND?: CmsCategoryWhereInput | CmsCategoryWhereInput[]
    OR?: CmsCategoryWhereInput[]
    NOT?: CmsCategoryWhereInput | CmsCategoryWhereInput[]
    id?: StringFilter<"CmsCategory"> | string
    name?: StringFilter<"CmsCategory"> | string
    slug?: StringFilter<"CmsCategory"> | string
    imageUrl?: StringNullableFilter<"CmsCategory"> | string | null
    isActive?: BoolFilter<"CmsCategory"> | boolean
    createdAt?: DateTimeFilter<"CmsCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CmsCategory"> | Date | string
    subCategories?: CmsSubCategoryListRelationFilter
    blogs?: CmsBlogListRelationFilter
    products?: CmsProductListRelationFilter
    leads?: CmsLeadListRelationFilter
  }

  export type CmsCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subCategories?: CmsSubCategoryOrderByRelationAggregateInput
    blogs?: CmsBlogOrderByRelationAggregateInput
    products?: CmsProductOrderByRelationAggregateInput
    leads?: CmsLeadOrderByRelationAggregateInput
  }

  export type CmsCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CmsCategoryWhereInput | CmsCategoryWhereInput[]
    OR?: CmsCategoryWhereInput[]
    NOT?: CmsCategoryWhereInput | CmsCategoryWhereInput[]
    name?: StringFilter<"CmsCategory"> | string
    imageUrl?: StringNullableFilter<"CmsCategory"> | string | null
    isActive?: BoolFilter<"CmsCategory"> | boolean
    createdAt?: DateTimeFilter<"CmsCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CmsCategory"> | Date | string
    subCategories?: CmsSubCategoryListRelationFilter
    blogs?: CmsBlogListRelationFilter
    products?: CmsProductListRelationFilter
    leads?: CmsLeadListRelationFilter
  }, "id" | "slug">

  export type CmsCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsCategoryCountOrderByAggregateInput
    _max?: CmsCategoryMaxOrderByAggregateInput
    _min?: CmsCategoryMinOrderByAggregateInput
  }

  export type CmsCategoryScalarWhereWithAggregatesInput = {
    AND?: CmsCategoryScalarWhereWithAggregatesInput | CmsCategoryScalarWhereWithAggregatesInput[]
    OR?: CmsCategoryScalarWhereWithAggregatesInput[]
    NOT?: CmsCategoryScalarWhereWithAggregatesInput | CmsCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsCategory"> | string
    name?: StringWithAggregatesFilter<"CmsCategory"> | string
    slug?: StringWithAggregatesFilter<"CmsCategory"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CmsCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"CmsCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsCategory"> | Date | string
  }

  export type CmsSubCategoryWhereInput = {
    AND?: CmsSubCategoryWhereInput | CmsSubCategoryWhereInput[]
    OR?: CmsSubCategoryWhereInput[]
    NOT?: CmsSubCategoryWhereInput | CmsSubCategoryWhereInput[]
    id?: StringFilter<"CmsSubCategory"> | string
    name?: StringFilter<"CmsSubCategory"> | string
    slug?: StringFilter<"CmsSubCategory"> | string
    imageUrl?: StringNullableFilter<"CmsSubCategory"> | string | null
    isActive?: BoolFilter<"CmsSubCategory"> | boolean
    createdAt?: DateTimeFilter<"CmsSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSubCategory"> | Date | string
    categoryId?: StringFilter<"CmsSubCategory"> | string
    category?: XOR<CmsCategoryScalarRelationFilter, CmsCategoryWhereInput>
    blogs?: CmsBlogListRelationFilter
    products?: CmsProductListRelationFilter
  }

  export type CmsSubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: CmsCategoryOrderByWithRelationInput
    blogs?: CmsBlogOrderByRelationAggregateInput
    products?: CmsProductOrderByRelationAggregateInput
  }

  export type CmsSubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CmsSubCategoryWhereInput | CmsSubCategoryWhereInput[]
    OR?: CmsSubCategoryWhereInput[]
    NOT?: CmsSubCategoryWhereInput | CmsSubCategoryWhereInput[]
    name?: StringFilter<"CmsSubCategory"> | string
    imageUrl?: StringNullableFilter<"CmsSubCategory"> | string | null
    isActive?: BoolFilter<"CmsSubCategory"> | boolean
    createdAt?: DateTimeFilter<"CmsSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSubCategory"> | Date | string
    categoryId?: StringFilter<"CmsSubCategory"> | string
    category?: XOR<CmsCategoryScalarRelationFilter, CmsCategoryWhereInput>
    blogs?: CmsBlogListRelationFilter
    products?: CmsProductListRelationFilter
  }, "id" | "slug">

  export type CmsSubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: CmsSubCategoryCountOrderByAggregateInput
    _max?: CmsSubCategoryMaxOrderByAggregateInput
    _min?: CmsSubCategoryMinOrderByAggregateInput
  }

  export type CmsSubCategoryScalarWhereWithAggregatesInput = {
    AND?: CmsSubCategoryScalarWhereWithAggregatesInput | CmsSubCategoryScalarWhereWithAggregatesInput[]
    OR?: CmsSubCategoryScalarWhereWithAggregatesInput[]
    NOT?: CmsSubCategoryScalarWhereWithAggregatesInput | CmsSubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsSubCategory"> | string
    name?: StringWithAggregatesFilter<"CmsSubCategory"> | string
    slug?: StringWithAggregatesFilter<"CmsSubCategory"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CmsSubCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"CmsSubCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsSubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsSubCategory"> | Date | string
    categoryId?: StringWithAggregatesFilter<"CmsSubCategory"> | string
  }

  export type CmsBlogWhereInput = {
    AND?: CmsBlogWhereInput | CmsBlogWhereInput[]
    OR?: CmsBlogWhereInput[]
    NOT?: CmsBlogWhereInput | CmsBlogWhereInput[]
    id?: StringFilter<"CmsBlog"> | string
    title?: StringFilter<"CmsBlog"> | string
    slug?: StringFilter<"CmsBlog"> | string
    excerpt?: StringNullableFilter<"CmsBlog"> | string | null
    content?: StringFilter<"CmsBlog"> | string
    coverImage?: StringNullableFilter<"CmsBlog"> | string | null
    tags?: StringNullableListFilter<"CmsBlog">
    author?: StringNullableFilter<"CmsBlog"> | string | null
    status?: EnumCmsStatusFilter<"CmsBlog"> | $Enums.CmsStatus
    publishedAt?: DateTimeNullableFilter<"CmsBlog"> | Date | string | null
    seoTitle?: StringNullableFilter<"CmsBlog"> | string | null
    seoDescription?: StringNullableFilter<"CmsBlog"> | string | null
    viewCount?: IntFilter<"CmsBlog"> | number
    createdAt?: DateTimeFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBlog"> | Date | string
    categoryId?: StringNullableFilter<"CmsBlog"> | string | null
    subCategoryId?: StringNullableFilter<"CmsBlog"> | string | null
    category?: XOR<CmsCategoryNullableScalarRelationFilter, CmsCategoryWhereInput> | null
    subCategory?: XOR<CmsSubCategoryNullableScalarRelationFilter, CmsSubCategoryWhereInput> | null
  }

  export type CmsBlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    tags?: SortOrder
    author?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    category?: CmsCategoryOrderByWithRelationInput
    subCategory?: CmsSubCategoryOrderByWithRelationInput
  }

  export type CmsBlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CmsBlogWhereInput | CmsBlogWhereInput[]
    OR?: CmsBlogWhereInput[]
    NOT?: CmsBlogWhereInput | CmsBlogWhereInput[]
    title?: StringFilter<"CmsBlog"> | string
    excerpt?: StringNullableFilter<"CmsBlog"> | string | null
    content?: StringFilter<"CmsBlog"> | string
    coverImage?: StringNullableFilter<"CmsBlog"> | string | null
    tags?: StringNullableListFilter<"CmsBlog">
    author?: StringNullableFilter<"CmsBlog"> | string | null
    status?: EnumCmsStatusFilter<"CmsBlog"> | $Enums.CmsStatus
    publishedAt?: DateTimeNullableFilter<"CmsBlog"> | Date | string | null
    seoTitle?: StringNullableFilter<"CmsBlog"> | string | null
    seoDescription?: StringNullableFilter<"CmsBlog"> | string | null
    viewCount?: IntFilter<"CmsBlog"> | number
    createdAt?: DateTimeFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBlog"> | Date | string
    categoryId?: StringNullableFilter<"CmsBlog"> | string | null
    subCategoryId?: StringNullableFilter<"CmsBlog"> | string | null
    category?: XOR<CmsCategoryNullableScalarRelationFilter, CmsCategoryWhereInput> | null
    subCategory?: XOR<CmsSubCategoryNullableScalarRelationFilter, CmsSubCategoryWhereInput> | null
  }, "id" | "slug">

  export type CmsBlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    tags?: SortOrder
    author?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    _count?: CmsBlogCountOrderByAggregateInput
    _avg?: CmsBlogAvgOrderByAggregateInput
    _max?: CmsBlogMaxOrderByAggregateInput
    _min?: CmsBlogMinOrderByAggregateInput
    _sum?: CmsBlogSumOrderByAggregateInput
  }

  export type CmsBlogScalarWhereWithAggregatesInput = {
    AND?: CmsBlogScalarWhereWithAggregatesInput | CmsBlogScalarWhereWithAggregatesInput[]
    OR?: CmsBlogScalarWhereWithAggregatesInput[]
    NOT?: CmsBlogScalarWhereWithAggregatesInput | CmsBlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsBlog"> | string
    title?: StringWithAggregatesFilter<"CmsBlog"> | string
    slug?: StringWithAggregatesFilter<"CmsBlog"> | string
    excerpt?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    content?: StringWithAggregatesFilter<"CmsBlog"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    tags?: StringNullableListFilter<"CmsBlog">
    author?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    status?: EnumCmsStatusWithAggregatesFilter<"CmsBlog"> | $Enums.CmsStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsBlog"> | Date | string | null
    seoTitle?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    viewCount?: IntWithAggregatesFilter<"CmsBlog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsBlog"> | Date | string
    categoryId?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    subCategoryId?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
  }

  export type CmsPartnerWhereInput = {
    AND?: CmsPartnerWhereInput | CmsPartnerWhereInput[]
    OR?: CmsPartnerWhereInput[]
    NOT?: CmsPartnerWhereInput | CmsPartnerWhereInput[]
    id?: StringFilter<"CmsPartner"> | string
    name?: StringFilter<"CmsPartner"> | string
    imageUrl?: StringNullableFilter<"CmsPartner"> | string | null
    isActive?: BoolFilter<"CmsPartner"> | boolean
    createdAt?: DateTimeFilter<"CmsPartner"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPartner"> | Date | string
  }

  export type CmsPartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsPartnerWhereInput | CmsPartnerWhereInput[]
    OR?: CmsPartnerWhereInput[]
    NOT?: CmsPartnerWhereInput | CmsPartnerWhereInput[]
    name?: StringFilter<"CmsPartner"> | string
    imageUrl?: StringNullableFilter<"CmsPartner"> | string | null
    isActive?: BoolFilter<"CmsPartner"> | boolean
    createdAt?: DateTimeFilter<"CmsPartner"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPartner"> | Date | string
  }, "id">

  export type CmsPartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsPartnerCountOrderByAggregateInput
    _max?: CmsPartnerMaxOrderByAggregateInput
    _min?: CmsPartnerMinOrderByAggregateInput
  }

  export type CmsPartnerScalarWhereWithAggregatesInput = {
    AND?: CmsPartnerScalarWhereWithAggregatesInput | CmsPartnerScalarWhereWithAggregatesInput[]
    OR?: CmsPartnerScalarWhereWithAggregatesInput[]
    NOT?: CmsPartnerScalarWhereWithAggregatesInput | CmsPartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsPartner"> | string
    name?: StringWithAggregatesFilter<"CmsPartner"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CmsPartner"> | string | null
    isActive?: BoolWithAggregatesFilter<"CmsPartner"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsPartner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsPartner"> | Date | string
  }

  export type CmsTestimonialWhereInput = {
    AND?: CmsTestimonialWhereInput | CmsTestimonialWhereInput[]
    OR?: CmsTestimonialWhereInput[]
    NOT?: CmsTestimonialWhereInput | CmsTestimonialWhereInput[]
    id?: StringFilter<"CmsTestimonial"> | string
    name?: StringFilter<"CmsTestimonial"> | string
    role?: StringNullableFilter<"CmsTestimonial"> | string | null
    avatar?: StringNullableFilter<"CmsTestimonial"> | string | null
    content?: StringFilter<"CmsTestimonial"> | string
    rating?: IntFilter<"CmsTestimonial"> | number
    featured?: BoolFilter<"CmsTestimonial"> | boolean
    active?: BoolFilter<"CmsTestimonial"> | boolean
    createdAt?: DateTimeFilter<"CmsTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"CmsTestimonial"> | Date | string
  }

  export type CmsTestimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    content?: SortOrder
    rating?: SortOrder
    featured?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsTestimonialWhereInput | CmsTestimonialWhereInput[]
    OR?: CmsTestimonialWhereInput[]
    NOT?: CmsTestimonialWhereInput | CmsTestimonialWhereInput[]
    name?: StringFilter<"CmsTestimonial"> | string
    role?: StringNullableFilter<"CmsTestimonial"> | string | null
    avatar?: StringNullableFilter<"CmsTestimonial"> | string | null
    content?: StringFilter<"CmsTestimonial"> | string
    rating?: IntFilter<"CmsTestimonial"> | number
    featured?: BoolFilter<"CmsTestimonial"> | boolean
    active?: BoolFilter<"CmsTestimonial"> | boolean
    createdAt?: DateTimeFilter<"CmsTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"CmsTestimonial"> | Date | string
  }, "id">

  export type CmsTestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    content?: SortOrder
    rating?: SortOrder
    featured?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsTestimonialCountOrderByAggregateInput
    _avg?: CmsTestimonialAvgOrderByAggregateInput
    _max?: CmsTestimonialMaxOrderByAggregateInput
    _min?: CmsTestimonialMinOrderByAggregateInput
    _sum?: CmsTestimonialSumOrderByAggregateInput
  }

  export type CmsTestimonialScalarWhereWithAggregatesInput = {
    AND?: CmsTestimonialScalarWhereWithAggregatesInput | CmsTestimonialScalarWhereWithAggregatesInput[]
    OR?: CmsTestimonialScalarWhereWithAggregatesInput[]
    NOT?: CmsTestimonialScalarWhereWithAggregatesInput | CmsTestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsTestimonial"> | string
    name?: StringWithAggregatesFilter<"CmsTestimonial"> | string
    role?: StringNullableWithAggregatesFilter<"CmsTestimonial"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"CmsTestimonial"> | string | null
    content?: StringWithAggregatesFilter<"CmsTestimonial"> | string
    rating?: IntWithAggregatesFilter<"CmsTestimonial"> | number
    featured?: BoolWithAggregatesFilter<"CmsTestimonial"> | boolean
    active?: BoolWithAggregatesFilter<"CmsTestimonial"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsTestimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsTestimonial"> | Date | string
  }

  export type CmsProductWhereInput = {
    AND?: CmsProductWhereInput | CmsProductWhereInput[]
    OR?: CmsProductWhereInput[]
    NOT?: CmsProductWhereInput | CmsProductWhereInput[]
    id?: StringFilter<"CmsProduct"> | string
    name?: StringFilter<"CmsProduct"> | string
    slug?: StringFilter<"CmsProduct"> | string
    shortDescription?: StringNullableFilter<"CmsProduct"> | string | null
    description?: StringNullableFilter<"CmsProduct"> | string | null
    image?: StringNullableFilter<"CmsProduct"> | string | null
    provider?: StringNullableFilter<"CmsProduct"> | string | null
    providerLogo?: StringNullableFilter<"CmsProduct"> | string | null
    interestRate?: StringNullableFilter<"CmsProduct"> | string | null
    processingFee?: StringNullableFilter<"CmsProduct"> | string | null
    minAmount?: StringNullableFilter<"CmsProduct"> | string | null
    maxAmount?: StringNullableFilter<"CmsProduct"> | string | null
    tenure?: StringNullableFilter<"CmsProduct"> | string | null
    features?: JsonNullableFilter<"CmsProduct">
    benefits?: JsonNullableFilter<"CmsProduct">
    eligibility?: JsonNullableFilter<"CmsProduct">
    formFields?: JsonNullableFilter<"CmsProduct">
    applyUrl?: StringNullableFilter<"CmsProduct"> | string | null
    status?: EnumCmsStatusFilter<"CmsProduct"> | $Enums.CmsStatus
    featured?: BoolFilter<"CmsProduct"> | boolean
    isBestSeller?: BoolFilter<"CmsProduct"> | boolean
    badge?: StringNullableFilter<"CmsProduct"> | string | null
    sortOrder?: IntFilter<"CmsProduct"> | number
    seoTitle?: StringNullableFilter<"CmsProduct"> | string | null
    seoDescription?: StringNullableFilter<"CmsProduct"> | string | null
    viewCount?: IntFilter<"CmsProduct"> | number
    createdAt?: DateTimeFilter<"CmsProduct"> | Date | string
    updatedAt?: DateTimeFilter<"CmsProduct"> | Date | string
    categoryId?: StringNullableFilter<"CmsProduct"> | string | null
    subCategoryId?: StringNullableFilter<"CmsProduct"> | string | null
    category?: XOR<CmsCategoryNullableScalarRelationFilter, CmsCategoryWhereInput> | null
    subCategory?: XOR<CmsSubCategoryNullableScalarRelationFilter, CmsSubCategoryWhereInput> | null
    leads?: CmsLeadListRelationFilter
  }

  export type CmsProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerLogo?: SortOrderInput | SortOrder
    interestRate?: SortOrderInput | SortOrder
    processingFee?: SortOrderInput | SortOrder
    minAmount?: SortOrderInput | SortOrder
    maxAmount?: SortOrderInput | SortOrder
    tenure?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    eligibility?: SortOrderInput | SortOrder
    formFields?: SortOrderInput | SortOrder
    applyUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    isBestSeller?: SortOrder
    badge?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    category?: CmsCategoryOrderByWithRelationInput
    subCategory?: CmsSubCategoryOrderByWithRelationInput
    leads?: CmsLeadOrderByRelationAggregateInput
  }

  export type CmsProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CmsProductWhereInput | CmsProductWhereInput[]
    OR?: CmsProductWhereInput[]
    NOT?: CmsProductWhereInput | CmsProductWhereInput[]
    name?: StringFilter<"CmsProduct"> | string
    shortDescription?: StringNullableFilter<"CmsProduct"> | string | null
    description?: StringNullableFilter<"CmsProduct"> | string | null
    image?: StringNullableFilter<"CmsProduct"> | string | null
    provider?: StringNullableFilter<"CmsProduct"> | string | null
    providerLogo?: StringNullableFilter<"CmsProduct"> | string | null
    interestRate?: StringNullableFilter<"CmsProduct"> | string | null
    processingFee?: StringNullableFilter<"CmsProduct"> | string | null
    minAmount?: StringNullableFilter<"CmsProduct"> | string | null
    maxAmount?: StringNullableFilter<"CmsProduct"> | string | null
    tenure?: StringNullableFilter<"CmsProduct"> | string | null
    features?: JsonNullableFilter<"CmsProduct">
    benefits?: JsonNullableFilter<"CmsProduct">
    eligibility?: JsonNullableFilter<"CmsProduct">
    formFields?: JsonNullableFilter<"CmsProduct">
    applyUrl?: StringNullableFilter<"CmsProduct"> | string | null
    status?: EnumCmsStatusFilter<"CmsProduct"> | $Enums.CmsStatus
    featured?: BoolFilter<"CmsProduct"> | boolean
    isBestSeller?: BoolFilter<"CmsProduct"> | boolean
    badge?: StringNullableFilter<"CmsProduct"> | string | null
    sortOrder?: IntFilter<"CmsProduct"> | number
    seoTitle?: StringNullableFilter<"CmsProduct"> | string | null
    seoDescription?: StringNullableFilter<"CmsProduct"> | string | null
    viewCount?: IntFilter<"CmsProduct"> | number
    createdAt?: DateTimeFilter<"CmsProduct"> | Date | string
    updatedAt?: DateTimeFilter<"CmsProduct"> | Date | string
    categoryId?: StringNullableFilter<"CmsProduct"> | string | null
    subCategoryId?: StringNullableFilter<"CmsProduct"> | string | null
    category?: XOR<CmsCategoryNullableScalarRelationFilter, CmsCategoryWhereInput> | null
    subCategory?: XOR<CmsSubCategoryNullableScalarRelationFilter, CmsSubCategoryWhereInput> | null
    leads?: CmsLeadListRelationFilter
  }, "id" | "slug">

  export type CmsProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerLogo?: SortOrderInput | SortOrder
    interestRate?: SortOrderInput | SortOrder
    processingFee?: SortOrderInput | SortOrder
    minAmount?: SortOrderInput | SortOrder
    maxAmount?: SortOrderInput | SortOrder
    tenure?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    eligibility?: SortOrderInput | SortOrder
    formFields?: SortOrderInput | SortOrder
    applyUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    isBestSeller?: SortOrder
    badge?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subCategoryId?: SortOrderInput | SortOrder
    _count?: CmsProductCountOrderByAggregateInput
    _avg?: CmsProductAvgOrderByAggregateInput
    _max?: CmsProductMaxOrderByAggregateInput
    _min?: CmsProductMinOrderByAggregateInput
    _sum?: CmsProductSumOrderByAggregateInput
  }

  export type CmsProductScalarWhereWithAggregatesInput = {
    AND?: CmsProductScalarWhereWithAggregatesInput | CmsProductScalarWhereWithAggregatesInput[]
    OR?: CmsProductScalarWhereWithAggregatesInput[]
    NOT?: CmsProductScalarWhereWithAggregatesInput | CmsProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsProduct"> | string
    name?: StringWithAggregatesFilter<"CmsProduct"> | string
    slug?: StringWithAggregatesFilter<"CmsProduct"> | string
    shortDescription?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    description?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    image?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    provider?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    providerLogo?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    interestRate?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    processingFee?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    minAmount?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    maxAmount?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    tenure?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    features?: JsonNullableWithAggregatesFilter<"CmsProduct">
    benefits?: JsonNullableWithAggregatesFilter<"CmsProduct">
    eligibility?: JsonNullableWithAggregatesFilter<"CmsProduct">
    formFields?: JsonNullableWithAggregatesFilter<"CmsProduct">
    applyUrl?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    status?: EnumCmsStatusWithAggregatesFilter<"CmsProduct"> | $Enums.CmsStatus
    featured?: BoolWithAggregatesFilter<"CmsProduct"> | boolean
    isBestSeller?: BoolWithAggregatesFilter<"CmsProduct"> | boolean
    badge?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    sortOrder?: IntWithAggregatesFilter<"CmsProduct"> | number
    seoTitle?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    viewCount?: IntWithAggregatesFilter<"CmsProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsProduct"> | Date | string
    categoryId?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
    subCategoryId?: StringNullableWithAggregatesFilter<"CmsProduct"> | string | null
  }

  export type CmsLeadWhereInput = {
    AND?: CmsLeadWhereInput | CmsLeadWhereInput[]
    OR?: CmsLeadWhereInput[]
    NOT?: CmsLeadWhereInput | CmsLeadWhereInput[]
    id?: StringFilter<"CmsLead"> | string
    name?: StringFilter<"CmsLead"> | string
    email?: StringNullableFilter<"CmsLead"> | string | null
    phone?: StringNullableFilter<"CmsLead"> | string | null
    message?: StringNullableFilter<"CmsLead"> | string | null
    customData?: JsonNullableFilter<"CmsLead">
    status?: EnumLeadStatusFilter<"CmsLead"> | $Enums.LeadStatus
    notes?: StringNullableFilter<"CmsLead"> | string | null
    assignedTo?: StringNullableFilter<"CmsLead"> | string | null
    source?: StringNullableFilter<"CmsLead"> | string | null
    utmSource?: StringNullableFilter<"CmsLead"> | string | null
    utmMedium?: StringNullableFilter<"CmsLead"> | string | null
    utmCampaign?: StringNullableFilter<"CmsLead"> | string | null
    createdAt?: DateTimeFilter<"CmsLead"> | Date | string
    updatedAt?: DateTimeFilter<"CmsLead"> | Date | string
    productId?: StringNullableFilter<"CmsLead"> | string | null
    categoryId?: StringNullableFilter<"CmsLead"> | string | null
    product?: XOR<CmsProductNullableScalarRelationFilter, CmsProductWhereInput> | null
    category?: XOR<CmsCategoryNullableScalarRelationFilter, CmsCategoryWhereInput> | null
  }

  export type CmsLeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    customData?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    utmSource?: SortOrderInput | SortOrder
    utmMedium?: SortOrderInput | SortOrder
    utmCampaign?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    product?: CmsProductOrderByWithRelationInput
    category?: CmsCategoryOrderByWithRelationInput
  }

  export type CmsLeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsLeadWhereInput | CmsLeadWhereInput[]
    OR?: CmsLeadWhereInput[]
    NOT?: CmsLeadWhereInput | CmsLeadWhereInput[]
    name?: StringFilter<"CmsLead"> | string
    email?: StringNullableFilter<"CmsLead"> | string | null
    phone?: StringNullableFilter<"CmsLead"> | string | null
    message?: StringNullableFilter<"CmsLead"> | string | null
    customData?: JsonNullableFilter<"CmsLead">
    status?: EnumLeadStatusFilter<"CmsLead"> | $Enums.LeadStatus
    notes?: StringNullableFilter<"CmsLead"> | string | null
    assignedTo?: StringNullableFilter<"CmsLead"> | string | null
    source?: StringNullableFilter<"CmsLead"> | string | null
    utmSource?: StringNullableFilter<"CmsLead"> | string | null
    utmMedium?: StringNullableFilter<"CmsLead"> | string | null
    utmCampaign?: StringNullableFilter<"CmsLead"> | string | null
    createdAt?: DateTimeFilter<"CmsLead"> | Date | string
    updatedAt?: DateTimeFilter<"CmsLead"> | Date | string
    productId?: StringNullableFilter<"CmsLead"> | string | null
    categoryId?: StringNullableFilter<"CmsLead"> | string | null
    product?: XOR<CmsProductNullableScalarRelationFilter, CmsProductWhereInput> | null
    category?: XOR<CmsCategoryNullableScalarRelationFilter, CmsCategoryWhereInput> | null
  }, "id">

  export type CmsLeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    customData?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    utmSource?: SortOrderInput | SortOrder
    utmMedium?: SortOrderInput | SortOrder
    utmCampaign?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: CmsLeadCountOrderByAggregateInput
    _max?: CmsLeadMaxOrderByAggregateInput
    _min?: CmsLeadMinOrderByAggregateInput
  }

  export type CmsLeadScalarWhereWithAggregatesInput = {
    AND?: CmsLeadScalarWhereWithAggregatesInput | CmsLeadScalarWhereWithAggregatesInput[]
    OR?: CmsLeadScalarWhereWithAggregatesInput[]
    NOT?: CmsLeadScalarWhereWithAggregatesInput | CmsLeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsLead"> | string
    name?: StringWithAggregatesFilter<"CmsLead"> | string
    email?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    message?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    customData?: JsonNullableWithAggregatesFilter<"CmsLead">
    status?: EnumLeadStatusWithAggregatesFilter<"CmsLead"> | $Enums.LeadStatus
    notes?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    assignedTo?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    source?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    utmSource?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    utmMedium?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    utmCampaign?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CmsLead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsLead"> | Date | string
    productId?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"CmsLead"> | string | null
  }

  export type CmsAdWhereInput = {
    AND?: CmsAdWhereInput | CmsAdWhereInput[]
    OR?: CmsAdWhereInput[]
    NOT?: CmsAdWhereInput | CmsAdWhereInput[]
    id?: StringFilter<"CmsAd"> | string
    title?: StringFilter<"CmsAd"> | string
    pages?: EnumAdPageNullableListFilter<"CmsAd">
    positions?: EnumAdPositionNullableListFilter<"CmsAd">
    customWidth?: IntNullableFilter<"CmsAd"> | number | null
    customHeight?: IntNullableFilter<"CmsAd"> | number | null
    size?: EnumAdSizeFilter<"CmsAd"> | $Enums.AdSize
    startDateTime?: DateTimeNullableFilter<"CmsAd"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"CmsAd"> | Date | string | null
    link?: StringNullableFilter<"CmsAd"> | string | null
    image?: StringFilter<"CmsAd"> | string
    active?: BoolFilter<"CmsAd"> | boolean
    sortOrder?: IntFilter<"CmsAd"> | number
    createdAt?: DateTimeFilter<"CmsAd"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAd"> | Date | string
    events?: CmsAdEventListRelationFilter
  }

  export type CmsAdOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    pages?: SortOrder
    positions?: SortOrder
    customWidth?: SortOrderInput | SortOrder
    customHeight?: SortOrderInput | SortOrder
    size?: SortOrder
    startDateTime?: SortOrderInput | SortOrder
    endDateTime?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    image?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: CmsAdEventOrderByRelationAggregateInput
  }

  export type CmsAdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsAdWhereInput | CmsAdWhereInput[]
    OR?: CmsAdWhereInput[]
    NOT?: CmsAdWhereInput | CmsAdWhereInput[]
    title?: StringFilter<"CmsAd"> | string
    pages?: EnumAdPageNullableListFilter<"CmsAd">
    positions?: EnumAdPositionNullableListFilter<"CmsAd">
    customWidth?: IntNullableFilter<"CmsAd"> | number | null
    customHeight?: IntNullableFilter<"CmsAd"> | number | null
    size?: EnumAdSizeFilter<"CmsAd"> | $Enums.AdSize
    startDateTime?: DateTimeNullableFilter<"CmsAd"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"CmsAd"> | Date | string | null
    link?: StringNullableFilter<"CmsAd"> | string | null
    image?: StringFilter<"CmsAd"> | string
    active?: BoolFilter<"CmsAd"> | boolean
    sortOrder?: IntFilter<"CmsAd"> | number
    createdAt?: DateTimeFilter<"CmsAd"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAd"> | Date | string
    events?: CmsAdEventListRelationFilter
  }, "id">

  export type CmsAdOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    pages?: SortOrder
    positions?: SortOrder
    customWidth?: SortOrderInput | SortOrder
    customHeight?: SortOrderInput | SortOrder
    size?: SortOrder
    startDateTime?: SortOrderInput | SortOrder
    endDateTime?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    image?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsAdCountOrderByAggregateInput
    _avg?: CmsAdAvgOrderByAggregateInput
    _max?: CmsAdMaxOrderByAggregateInput
    _min?: CmsAdMinOrderByAggregateInput
    _sum?: CmsAdSumOrderByAggregateInput
  }

  export type CmsAdScalarWhereWithAggregatesInput = {
    AND?: CmsAdScalarWhereWithAggregatesInput | CmsAdScalarWhereWithAggregatesInput[]
    OR?: CmsAdScalarWhereWithAggregatesInput[]
    NOT?: CmsAdScalarWhereWithAggregatesInput | CmsAdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsAd"> | string
    title?: StringWithAggregatesFilter<"CmsAd"> | string
    pages?: EnumAdPageNullableListFilter<"CmsAd">
    positions?: EnumAdPositionNullableListFilter<"CmsAd">
    customWidth?: IntNullableWithAggregatesFilter<"CmsAd"> | number | null
    customHeight?: IntNullableWithAggregatesFilter<"CmsAd"> | number | null
    size?: EnumAdSizeWithAggregatesFilter<"CmsAd"> | $Enums.AdSize
    startDateTime?: DateTimeNullableWithAggregatesFilter<"CmsAd"> | Date | string | null
    endDateTime?: DateTimeNullableWithAggregatesFilter<"CmsAd"> | Date | string | null
    link?: StringNullableWithAggregatesFilter<"CmsAd"> | string | null
    image?: StringWithAggregatesFilter<"CmsAd"> | string
    active?: BoolWithAggregatesFilter<"CmsAd"> | boolean
    sortOrder?: IntWithAggregatesFilter<"CmsAd"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsAd"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsAd"> | Date | string
  }

  export type CmsAdEventWhereInput = {
    AND?: CmsAdEventWhereInput | CmsAdEventWhereInput[]
    OR?: CmsAdEventWhereInput[]
    NOT?: CmsAdEventWhereInput | CmsAdEventWhereInput[]
    id?: StringFilter<"CmsAdEvent"> | string
    adId?: StringFilter<"CmsAdEvent"> | string
    type?: EnumAdEventTypeFilter<"CmsAdEvent"> | $Enums.AdEventType
    isUnique?: BoolFilter<"CmsAdEvent"> | boolean
    ip?: StringNullableFilter<"CmsAdEvent"> | string | null
    sessionId?: StringNullableFilter<"CmsAdEvent"> | string | null
    userAgent?: StringNullableFilter<"CmsAdEvent"> | string | null
    deviceType?: StringNullableFilter<"CmsAdEvent"> | string | null
    page?: StringNullableFilter<"CmsAdEvent"> | string | null
    referrer?: StringNullableFilter<"CmsAdEvent"> | string | null
    country?: StringNullableFilter<"CmsAdEvent"> | string | null
    createdAt?: DateTimeFilter<"CmsAdEvent"> | Date | string
    ad?: XOR<CmsAdScalarRelationFilter, CmsAdWhereInput>
  }

  export type CmsAdEventOrderByWithRelationInput = {
    id?: SortOrder
    adId?: SortOrder
    type?: SortOrder
    isUnique?: SortOrder
    ip?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ad?: CmsAdOrderByWithRelationInput
  }

  export type CmsAdEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsAdEventWhereInput | CmsAdEventWhereInput[]
    OR?: CmsAdEventWhereInput[]
    NOT?: CmsAdEventWhereInput | CmsAdEventWhereInput[]
    adId?: StringFilter<"CmsAdEvent"> | string
    type?: EnumAdEventTypeFilter<"CmsAdEvent"> | $Enums.AdEventType
    isUnique?: BoolFilter<"CmsAdEvent"> | boolean
    ip?: StringNullableFilter<"CmsAdEvent"> | string | null
    sessionId?: StringNullableFilter<"CmsAdEvent"> | string | null
    userAgent?: StringNullableFilter<"CmsAdEvent"> | string | null
    deviceType?: StringNullableFilter<"CmsAdEvent"> | string | null
    page?: StringNullableFilter<"CmsAdEvent"> | string | null
    referrer?: StringNullableFilter<"CmsAdEvent"> | string | null
    country?: StringNullableFilter<"CmsAdEvent"> | string | null
    createdAt?: DateTimeFilter<"CmsAdEvent"> | Date | string
    ad?: XOR<CmsAdScalarRelationFilter, CmsAdWhereInput>
  }, "id">

  export type CmsAdEventOrderByWithAggregationInput = {
    id?: SortOrder
    adId?: SortOrder
    type?: SortOrder
    isUnique?: SortOrder
    ip?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CmsAdEventCountOrderByAggregateInput
    _max?: CmsAdEventMaxOrderByAggregateInput
    _min?: CmsAdEventMinOrderByAggregateInput
  }

  export type CmsAdEventScalarWhereWithAggregatesInput = {
    AND?: CmsAdEventScalarWhereWithAggregatesInput | CmsAdEventScalarWhereWithAggregatesInput[]
    OR?: CmsAdEventScalarWhereWithAggregatesInput[]
    NOT?: CmsAdEventScalarWhereWithAggregatesInput | CmsAdEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsAdEvent"> | string
    adId?: StringWithAggregatesFilter<"CmsAdEvent"> | string
    type?: EnumAdEventTypeWithAggregatesFilter<"CmsAdEvent"> | $Enums.AdEventType
    isUnique?: BoolWithAggregatesFilter<"CmsAdEvent"> | boolean
    ip?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    page?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    country?: StringNullableWithAggregatesFilter<"CmsAdEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CmsAdEvent"> | Date | string
  }

  export type CmsSettingsWhereInput = {
    AND?: CmsSettingsWhereInput | CmsSettingsWhereInput[]
    OR?: CmsSettingsWhereInput[]
    NOT?: CmsSettingsWhereInput | CmsSettingsWhereInput[]
    id?: StringFilter<"CmsSettings"> | string
    key?: StringFilter<"CmsSettings"> | string
    whatsappNo?: StringNullableFilter<"CmsSettings"> | string | null
    callingNo?: StringNullableFilter<"CmsSettings"> | string | null
    supportEmail?: StringNullableFilter<"CmsSettings"> | string | null
    instagramUrl?: StringNullableFilter<"CmsSettings"> | string | null
    linkedinUrl?: StringNullableFilter<"CmsSettings"> | string | null
    autoMailEnabled?: BoolFilter<"CmsSettings"> | boolean
    autoWhatsappEnabled?: BoolFilter<"CmsSettings"> | boolean
    createdAt?: DateTimeFilter<"CmsSettings"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSettings"> | Date | string
    maintenanceMode?: BoolFilter<"CmsSettings"> | boolean
  }

  export type CmsSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    whatsappNo?: SortOrderInput | SortOrder
    callingNo?: SortOrderInput | SortOrder
    supportEmail?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    autoMailEnabled?: SortOrder
    autoWhatsappEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type CmsSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: CmsSettingsWhereInput | CmsSettingsWhereInput[]
    OR?: CmsSettingsWhereInput[]
    NOT?: CmsSettingsWhereInput | CmsSettingsWhereInput[]
    whatsappNo?: StringNullableFilter<"CmsSettings"> | string | null
    callingNo?: StringNullableFilter<"CmsSettings"> | string | null
    supportEmail?: StringNullableFilter<"CmsSettings"> | string | null
    instagramUrl?: StringNullableFilter<"CmsSettings"> | string | null
    linkedinUrl?: StringNullableFilter<"CmsSettings"> | string | null
    autoMailEnabled?: BoolFilter<"CmsSettings"> | boolean
    autoWhatsappEnabled?: BoolFilter<"CmsSettings"> | boolean
    createdAt?: DateTimeFilter<"CmsSettings"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSettings"> | Date | string
    maintenanceMode?: BoolFilter<"CmsSettings"> | boolean
  }, "id" | "key">

  export type CmsSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    whatsappNo?: SortOrderInput | SortOrder
    callingNo?: SortOrderInput | SortOrder
    supportEmail?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    autoMailEnabled?: SortOrder
    autoWhatsappEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
    _count?: CmsSettingsCountOrderByAggregateInput
    _max?: CmsSettingsMaxOrderByAggregateInput
    _min?: CmsSettingsMinOrderByAggregateInput
  }

  export type CmsSettingsScalarWhereWithAggregatesInput = {
    AND?: CmsSettingsScalarWhereWithAggregatesInput | CmsSettingsScalarWhereWithAggregatesInput[]
    OR?: CmsSettingsScalarWhereWithAggregatesInput[]
    NOT?: CmsSettingsScalarWhereWithAggregatesInput | CmsSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CmsSettings"> | string
    key?: StringWithAggregatesFilter<"CmsSettings"> | string
    whatsappNo?: StringNullableWithAggregatesFilter<"CmsSettings"> | string | null
    callingNo?: StringNullableWithAggregatesFilter<"CmsSettings"> | string | null
    supportEmail?: StringNullableWithAggregatesFilter<"CmsSettings"> | string | null
    instagramUrl?: StringNullableWithAggregatesFilter<"CmsSettings"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"CmsSettings"> | string | null
    autoMailEnabled?: BoolWithAggregatesFilter<"CmsSettings"> | boolean
    autoWhatsappEnabled?: BoolWithAggregatesFilter<"CmsSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsSettings"> | Date | string
    maintenanceMode?: BoolWithAggregatesFilter<"CmsSettings"> | boolean
  }

  export type CmsAdminCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.CmsAdminRole
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAdminUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.CmsAdminRole
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsAdminRoleFieldUpdateOperationsInput | $Enums.CmsAdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsAdminRoleFieldUpdateOperationsInput | $Enums.CmsAdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdminCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.CmsAdminRole
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsAdminRoleFieldUpdateOperationsInput | $Enums.CmsAdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsAdminRoleFieldUpdateOperationsInput | $Enums.CmsAdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryCreateNestedManyWithoutCategoryInput
    blogs?: CmsBlogCreateNestedManyWithoutCategoryInput
    products?: CmsProductCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryUncheckedCreateNestedManyWithoutCategoryInput
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutCategoryInput
    products?: CmsProductUncheckedCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUpdateManyWithoutCategoryNestedInput
    blogs?: CmsBlogUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUpdateManyWithoutCategoryNestedInput
  }

  export type CmsCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    blogs?: CmsBlogUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUncheckedUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CmsCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSubCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CmsCategoryCreateNestedOneWithoutSubCategoriesInput
    blogs?: CmsBlogCreateNestedManyWithoutSubCategoryInput
    products?: CmsProductCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutSubCategoryInput
    products?: CmsProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    blogs?: CmsBlogUpdateManyWithoutSubCategoryNestedInput
    products?: CmsProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsSubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    blogs?: CmsBlogUncheckedUpdateManyWithoutSubCategoryNestedInput
    products?: CmsProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsSubCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type CmsSubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CmsBlogCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CmsCategoryCreateNestedOneWithoutBlogsInput
    subCategory?: CmsSubCategoryCreateNestedOneWithoutBlogsInput
  }

  export type CmsBlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    subCategoryId?: string | null
  }

  export type CmsBlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneWithoutBlogsNestedInput
    subCategory?: CmsSubCategoryUpdateOneWithoutBlogsNestedInput
  }

  export type CmsBlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsBlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    subCategoryId?: string | null
  }

  export type CmsBlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsPartnerCreateInput = {
    id?: string
    name: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPartnerUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPartnerCreateManyInput = {
    id?: string
    name: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTestimonialCreateInput = {
    id?: string
    name: string
    role?: string | null
    avatar?: string | null
    content: string
    rating?: number
    featured?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTestimonialUncheckedCreateInput = {
    id?: string
    name: string
    role?: string | null
    avatar?: string | null
    content: string
    rating?: number
    featured?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTestimonialCreateManyInput = {
    id?: string
    name: string
    role?: string | null
    avatar?: string | null
    content: string
    rating?: number
    featured?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsProductCreateInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CmsCategoryCreateNestedOneWithoutProductsInput
    subCategory?: CmsSubCategoryCreateNestedOneWithoutProductsInput
    leads?: CmsLeadCreateNestedManyWithoutProductInput
  }

  export type CmsProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    subCategoryId?: string | null
    leads?: CmsLeadUncheckedCreateNestedManyWithoutProductInput
  }

  export type CmsProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneWithoutProductsNestedInput
    subCategory?: CmsSubCategoryUpdateOneWithoutProductsNestedInput
    leads?: CmsLeadUpdateManyWithoutProductNestedInput
  }

  export type CmsProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: CmsLeadUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CmsProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    subCategoryId?: string | null
  }

  export type CmsProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsLeadCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: CmsProductCreateNestedOneWithoutLeadsInput
    category?: CmsCategoryCreateNestedOneWithoutLeadsInput
  }

  export type CmsLeadUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
    categoryId?: string | null
  }

  export type CmsLeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: CmsProductUpdateOneWithoutLeadsNestedInput
    category?: CmsCategoryUpdateOneWithoutLeadsNestedInput
  }

  export type CmsLeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsLeadCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
    categoryId?: string | null
  }

  export type CmsLeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsLeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsAdCreateInput = {
    id?: string
    title: string
    pages?: CmsAdCreatepagesInput | $Enums.AdPage[]
    positions?: CmsAdCreatepositionsInput | $Enums.AdPosition[]
    customWidth?: number | null
    customHeight?: number | null
    size?: $Enums.AdSize
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    link?: string | null
    image: string
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: CmsAdEventCreateNestedManyWithoutAdInput
  }

  export type CmsAdUncheckedCreateInput = {
    id?: string
    title: string
    pages?: CmsAdCreatepagesInput | $Enums.AdPage[]
    positions?: CmsAdCreatepositionsInput | $Enums.AdPosition[]
    customWidth?: number | null
    customHeight?: number | null
    size?: $Enums.AdSize
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    link?: string | null
    image: string
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: CmsAdEventUncheckedCreateNestedManyWithoutAdInput
  }

  export type CmsAdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: CmsAdUpdatepagesInput | $Enums.AdPage[]
    positions?: CmsAdUpdatepositionsInput | $Enums.AdPosition[]
    customWidth?: NullableIntFieldUpdateOperationsInput | number | null
    customHeight?: NullableIntFieldUpdateOperationsInput | number | null
    size?: EnumAdSizeFieldUpdateOperationsInput | $Enums.AdSize
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: CmsAdEventUpdateManyWithoutAdNestedInput
  }

  export type CmsAdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: CmsAdUpdatepagesInput | $Enums.AdPage[]
    positions?: CmsAdUpdatepositionsInput | $Enums.AdPosition[]
    customWidth?: NullableIntFieldUpdateOperationsInput | number | null
    customHeight?: NullableIntFieldUpdateOperationsInput | number | null
    size?: EnumAdSizeFieldUpdateOperationsInput | $Enums.AdSize
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: CmsAdEventUncheckedUpdateManyWithoutAdNestedInput
  }

  export type CmsAdCreateManyInput = {
    id?: string
    title: string
    pages?: CmsAdCreatepagesInput | $Enums.AdPage[]
    positions?: CmsAdCreatepositionsInput | $Enums.AdPosition[]
    customWidth?: number | null
    customHeight?: number | null
    size?: $Enums.AdSize
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    link?: string | null
    image: string
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: CmsAdUpdatepagesInput | $Enums.AdPage[]
    positions?: CmsAdUpdatepositionsInput | $Enums.AdPosition[]
    customWidth?: NullableIntFieldUpdateOperationsInput | number | null
    customHeight?: NullableIntFieldUpdateOperationsInput | number | null
    size?: EnumAdSizeFieldUpdateOperationsInput | $Enums.AdSize
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: CmsAdUpdatepagesInput | $Enums.AdPage[]
    positions?: CmsAdUpdatepositionsInput | $Enums.AdPosition[]
    customWidth?: NullableIntFieldUpdateOperationsInput | number | null
    customHeight?: NullableIntFieldUpdateOperationsInput | number | null
    size?: EnumAdSizeFieldUpdateOperationsInput | $Enums.AdSize
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdEventCreateInput = {
    id?: string
    type: $Enums.AdEventType
    isUnique?: boolean
    ip?: string | null
    sessionId?: string | null
    userAgent?: string | null
    deviceType?: string | null
    page?: string | null
    referrer?: string | null
    country?: string | null
    createdAt?: Date | string
    ad: CmsAdCreateNestedOneWithoutEventsInput
  }

  export type CmsAdEventUncheckedCreateInput = {
    id?: string
    adId: string
    type: $Enums.AdEventType
    isUnique?: boolean
    ip?: string | null
    sessionId?: string | null
    userAgent?: string | null
    deviceType?: string | null
    page?: string | null
    referrer?: string | null
    country?: string | null
    createdAt?: Date | string
  }

  export type CmsAdEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ad?: CmsAdUpdateOneRequiredWithoutEventsNestedInput
  }

  export type CmsAdEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdEventCreateManyInput = {
    id?: string
    adId: string
    type: $Enums.AdEventType
    isUnique?: boolean
    ip?: string | null
    sessionId?: string | null
    userAgent?: string | null
    deviceType?: string | null
    page?: string | null
    referrer?: string | null
    country?: string | null
    createdAt?: Date | string
  }

  export type CmsAdEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSettingsCreateInput = {
    id?: string
    key?: string
    whatsappNo?: string | null
    callingNo?: string | null
    supportEmail?: string | null
    instagramUrl?: string | null
    linkedinUrl?: string | null
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceMode?: boolean
  }

  export type CmsSettingsUncheckedCreateInput = {
    id?: string
    key?: string
    whatsappNo?: string | null
    callingNo?: string | null
    supportEmail?: string | null
    instagramUrl?: string | null
    linkedinUrl?: string | null
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceMode?: boolean
  }

  export type CmsSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    whatsappNo?: NullableStringFieldUpdateOperationsInput | string | null
    callingNo?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoMailEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoWhatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CmsSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    whatsappNo?: NullableStringFieldUpdateOperationsInput | string | null
    callingNo?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoMailEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoWhatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CmsSettingsCreateManyInput = {
    id?: string
    key?: string
    whatsappNo?: string | null
    callingNo?: string | null
    supportEmail?: string | null
    instagramUrl?: string | null
    linkedinUrl?: string | null
    autoMailEnabled?: boolean
    autoWhatsappEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceMode?: boolean
  }

  export type CmsSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    whatsappNo?: NullableStringFieldUpdateOperationsInput | string | null
    callingNo?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoMailEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoWhatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CmsSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    whatsappNo?: NullableStringFieldUpdateOperationsInput | string | null
    callingNo?: NullableStringFieldUpdateOperationsInput | string | null
    supportEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    autoMailEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoWhatsappEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumCmsAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsAdminRole | EnumCmsAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsAdminRoleFilter<$PrismaModel> | $Enums.CmsAdminRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CmsAdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
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

  export type EnumCmsAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsAdminRole | EnumCmsAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.CmsAdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumCmsAdminRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CmsSubCategoryListRelationFilter = {
    every?: CmsSubCategoryWhereInput
    some?: CmsSubCategoryWhereInput
    none?: CmsSubCategoryWhereInput
  }

  export type CmsBlogListRelationFilter = {
    every?: CmsBlogWhereInput
    some?: CmsBlogWhereInput
    none?: CmsBlogWhereInput
  }

  export type CmsProductListRelationFilter = {
    every?: CmsProductWhereInput
    some?: CmsProductWhereInput
    none?: CmsProductWhereInput
  }

  export type CmsLeadListRelationFilter = {
    every?: CmsLeadWhereInput
    some?: CmsLeadWhereInput
    none?: CmsLeadWhereInput
  }

  export type CmsSubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsBlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsLeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CmsCategoryScalarRelationFilter = {
    is?: CmsCategoryWhereInput
    isNot?: CmsCategoryWhereInput
  }

  export type CmsSubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type CmsSubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type CmsSubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumCmsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsStatus | EnumCmsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsStatusFilter<$PrismaModel> | $Enums.CmsStatus
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

  export type CmsCategoryNullableScalarRelationFilter = {
    is?: CmsCategoryWhereInput | null
    isNot?: CmsCategoryWhereInput | null
  }

  export type CmsSubCategoryNullableScalarRelationFilter = {
    is?: CmsSubCategoryWhereInput | null
    isNot?: CmsSubCategoryWhereInput | null
  }

  export type CmsBlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    tags?: SortOrder
    author?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type CmsBlogAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type CmsBlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    author?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type CmsBlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    author?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type CmsBlogSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type EnumCmsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsStatus | EnumCmsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsStatusWithAggregatesFilter<$PrismaModel> | $Enums.CmsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsStatusFilter<$PrismaModel>
    _max?: NestedEnumCmsStatusFilter<$PrismaModel>
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

  export type CmsPartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    featured?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTestimonialAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CmsTestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    featured?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    featured?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTestimonialSumOrderByAggregateInput = {
    rating?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type CmsProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerLogo?: SortOrder
    interestRate?: SortOrder
    processingFee?: SortOrder
    minAmount?: SortOrder
    maxAmount?: SortOrder
    tenure?: SortOrder
    features?: SortOrder
    benefits?: SortOrder
    eligibility?: SortOrder
    formFields?: SortOrder
    applyUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isBestSeller?: SortOrder
    badge?: SortOrder
    sortOrder?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type CmsProductAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
    viewCount?: SortOrder
  }

  export type CmsProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerLogo?: SortOrder
    interestRate?: SortOrder
    processingFee?: SortOrder
    minAmount?: SortOrder
    maxAmount?: SortOrder
    tenure?: SortOrder
    applyUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isBestSeller?: SortOrder
    badge?: SortOrder
    sortOrder?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type CmsProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerLogo?: SortOrder
    interestRate?: SortOrder
    processingFee?: SortOrder
    minAmount?: SortOrder
    maxAmount?: SortOrder
    tenure?: SortOrder
    applyUrl?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isBestSeller?: SortOrder
    badge?: SortOrder
    sortOrder?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    subCategoryId?: SortOrder
  }

  export type CmsProductSumOrderByAggregateInput = {
    sortOrder?: SortOrder
    viewCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type CmsProductNullableScalarRelationFilter = {
    is?: CmsProductWhereInput | null
    isNot?: CmsProductWhereInput | null
  }

  export type CmsLeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    customData?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    assignedTo?: SortOrder
    source?: SortOrder
    utmSource?: SortOrder
    utmMedium?: SortOrder
    utmCampaign?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type CmsLeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    assignedTo?: SortOrder
    source?: SortOrder
    utmSource?: SortOrder
    utmMedium?: SortOrder
    utmCampaign?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type CmsLeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    assignedTo?: SortOrder
    source?: SortOrder
    utmSource?: SortOrder
    utmMedium?: SortOrder
    utmCampaign?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type EnumAdPageNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.AdPage[] | ListEnumAdPageFieldRefInput<$PrismaModel> | null
    has?: $Enums.AdPage | EnumAdPageFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.AdPage[] | ListEnumAdPageFieldRefInput<$PrismaModel>
    hasSome?: $Enums.AdPage[] | ListEnumAdPageFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAdPositionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.AdPosition[] | ListEnumAdPositionFieldRefInput<$PrismaModel> | null
    has?: $Enums.AdPosition | EnumAdPositionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.AdPosition[] | ListEnumAdPositionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.AdPosition[] | ListEnumAdPositionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type EnumAdSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdSize | EnumAdSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdSizeFilter<$PrismaModel> | $Enums.AdSize
  }

  export type CmsAdEventListRelationFilter = {
    every?: CmsAdEventWhereInput
    some?: CmsAdEventWhereInput
    none?: CmsAdEventWhereInput
  }

  export type CmsAdEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsAdCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pages?: SortOrder
    positions?: SortOrder
    customWidth?: SortOrder
    customHeight?: SortOrder
    size?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    link?: SortOrder
    image?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAdAvgOrderByAggregateInput = {
    customWidth?: SortOrder
    customHeight?: SortOrder
    sortOrder?: SortOrder
  }

  export type CmsAdMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    customWidth?: SortOrder
    customHeight?: SortOrder
    size?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    link?: SortOrder
    image?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAdMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    customWidth?: SortOrder
    customHeight?: SortOrder
    size?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    link?: SortOrder
    image?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAdSumOrderByAggregateInput = {
    customWidth?: SortOrder
    customHeight?: SortOrder
    sortOrder?: SortOrder
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

  export type EnumAdSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdSize | EnumAdSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdSizeWithAggregatesFilter<$PrismaModel> | $Enums.AdSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdSizeFilter<$PrismaModel>
    _max?: NestedEnumAdSizeFilter<$PrismaModel>
  }

  export type EnumAdEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdEventType | EnumAdEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdEventTypeFilter<$PrismaModel> | $Enums.AdEventType
  }

  export type CmsAdScalarRelationFilter = {
    is?: CmsAdWhereInput
    isNot?: CmsAdWhereInput
  }

  export type CmsAdEventCountOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    type?: SortOrder
    isUnique?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    page?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsAdEventMaxOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    type?: SortOrder
    isUnique?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    page?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsAdEventMinOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    type?: SortOrder
    isUnique?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    page?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAdEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdEventType | EnumAdEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAdEventTypeFilter<$PrismaModel>
  }

  export type CmsSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    whatsappNo?: SortOrder
    callingNo?: SortOrder
    supportEmail?: SortOrder
    instagramUrl?: SortOrder
    linkedinUrl?: SortOrder
    autoMailEnabled?: SortOrder
    autoWhatsappEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type CmsSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    whatsappNo?: SortOrder
    callingNo?: SortOrder
    supportEmail?: SortOrder
    instagramUrl?: SortOrder
    linkedinUrl?: SortOrder
    autoMailEnabled?: SortOrder
    autoWhatsappEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type CmsSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    whatsappNo?: SortOrder
    callingNo?: SortOrder
    supportEmail?: SortOrder
    instagramUrl?: SortOrder
    linkedinUrl?: SortOrder
    autoMailEnabled?: SortOrder
    autoWhatsappEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceMode?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCmsAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.CmsAdminRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CmsSubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsSubCategoryCreateWithoutCategoryInput, CmsSubCategoryUncheckedCreateWithoutCategoryInput> | CmsSubCategoryCreateWithoutCategoryInput[] | CmsSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutCategoryInput | CmsSubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsSubCategoryCreateManyCategoryInputEnvelope
    connect?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
  }

  export type CmsBlogCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsBlogCreateWithoutCategoryInput, CmsBlogUncheckedCreateWithoutCategoryInput> | CmsBlogCreateWithoutCategoryInput[] | CmsBlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCategoryInput | CmsBlogCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsBlogCreateManyCategoryInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsProductCreateWithoutCategoryInput, CmsProductUncheckedCreateWithoutCategoryInput> | CmsProductCreateWithoutCategoryInput[] | CmsProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutCategoryInput | CmsProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsProductCreateManyCategoryInputEnvelope
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
  }

  export type CmsLeadCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsLeadCreateWithoutCategoryInput, CmsLeadUncheckedCreateWithoutCategoryInput> | CmsLeadCreateWithoutCategoryInput[] | CmsLeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutCategoryInput | CmsLeadCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsLeadCreateManyCategoryInputEnvelope
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
  }

  export type CmsSubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsSubCategoryCreateWithoutCategoryInput, CmsSubCategoryUncheckedCreateWithoutCategoryInput> | CmsSubCategoryCreateWithoutCategoryInput[] | CmsSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutCategoryInput | CmsSubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsSubCategoryCreateManyCategoryInputEnvelope
    connect?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
  }

  export type CmsBlogUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsBlogCreateWithoutCategoryInput, CmsBlogUncheckedCreateWithoutCategoryInput> | CmsBlogCreateWithoutCategoryInput[] | CmsBlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCategoryInput | CmsBlogCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsBlogCreateManyCategoryInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsProductCreateWithoutCategoryInput, CmsProductUncheckedCreateWithoutCategoryInput> | CmsProductCreateWithoutCategoryInput[] | CmsProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutCategoryInput | CmsProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsProductCreateManyCategoryInputEnvelope
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
  }

  export type CmsLeadUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CmsLeadCreateWithoutCategoryInput, CmsLeadUncheckedCreateWithoutCategoryInput> | CmsLeadCreateWithoutCategoryInput[] | CmsLeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutCategoryInput | CmsLeadCreateOrConnectWithoutCategoryInput[]
    createMany?: CmsLeadCreateManyCategoryInputEnvelope
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CmsSubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsSubCategoryCreateWithoutCategoryInput, CmsSubCategoryUncheckedCreateWithoutCategoryInput> | CmsSubCategoryCreateWithoutCategoryInput[] | CmsSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutCategoryInput | CmsSubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsSubCategoryUpsertWithWhereUniqueWithoutCategoryInput | CmsSubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsSubCategoryCreateManyCategoryInputEnvelope
    set?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    disconnect?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    delete?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    connect?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    update?: CmsSubCategoryUpdateWithWhereUniqueWithoutCategoryInput | CmsSubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsSubCategoryUpdateManyWithWhereWithoutCategoryInput | CmsSubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsSubCategoryScalarWhereInput | CmsSubCategoryScalarWhereInput[]
  }

  export type CmsBlogUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsBlogCreateWithoutCategoryInput, CmsBlogUncheckedCreateWithoutCategoryInput> | CmsBlogCreateWithoutCategoryInput[] | CmsBlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCategoryInput | CmsBlogCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutCategoryInput | CmsBlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsBlogCreateManyCategoryInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutCategoryInput | CmsBlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutCategoryInput | CmsBlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsProductCreateWithoutCategoryInput, CmsProductUncheckedCreateWithoutCategoryInput> | CmsProductCreateWithoutCategoryInput[] | CmsProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutCategoryInput | CmsProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsProductUpsertWithWhereUniqueWithoutCategoryInput | CmsProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsProductCreateManyCategoryInputEnvelope
    set?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    disconnect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    delete?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    update?: CmsProductUpdateWithWhereUniqueWithoutCategoryInput | CmsProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsProductUpdateManyWithWhereWithoutCategoryInput | CmsProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsProductScalarWhereInput | CmsProductScalarWhereInput[]
  }

  export type CmsLeadUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsLeadCreateWithoutCategoryInput, CmsLeadUncheckedCreateWithoutCategoryInput> | CmsLeadCreateWithoutCategoryInput[] | CmsLeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutCategoryInput | CmsLeadCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsLeadUpsertWithWhereUniqueWithoutCategoryInput | CmsLeadUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsLeadCreateManyCategoryInputEnvelope
    set?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    disconnect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    delete?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    update?: CmsLeadUpdateWithWhereUniqueWithoutCategoryInput | CmsLeadUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsLeadUpdateManyWithWhereWithoutCategoryInput | CmsLeadUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsLeadScalarWhereInput | CmsLeadScalarWhereInput[]
  }

  export type CmsSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsSubCategoryCreateWithoutCategoryInput, CmsSubCategoryUncheckedCreateWithoutCategoryInput> | CmsSubCategoryCreateWithoutCategoryInput[] | CmsSubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutCategoryInput | CmsSubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsSubCategoryUpsertWithWhereUniqueWithoutCategoryInput | CmsSubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsSubCategoryCreateManyCategoryInputEnvelope
    set?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    disconnect?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    delete?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    connect?: CmsSubCategoryWhereUniqueInput | CmsSubCategoryWhereUniqueInput[]
    update?: CmsSubCategoryUpdateWithWhereUniqueWithoutCategoryInput | CmsSubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsSubCategoryUpdateManyWithWhereWithoutCategoryInput | CmsSubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsSubCategoryScalarWhereInput | CmsSubCategoryScalarWhereInput[]
  }

  export type CmsBlogUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsBlogCreateWithoutCategoryInput, CmsBlogUncheckedCreateWithoutCategoryInput> | CmsBlogCreateWithoutCategoryInput[] | CmsBlogUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCategoryInput | CmsBlogCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutCategoryInput | CmsBlogUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsBlogCreateManyCategoryInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutCategoryInput | CmsBlogUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutCategoryInput | CmsBlogUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsProductCreateWithoutCategoryInput, CmsProductUncheckedCreateWithoutCategoryInput> | CmsProductCreateWithoutCategoryInput[] | CmsProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutCategoryInput | CmsProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsProductUpsertWithWhereUniqueWithoutCategoryInput | CmsProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsProductCreateManyCategoryInputEnvelope
    set?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    disconnect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    delete?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    update?: CmsProductUpdateWithWhereUniqueWithoutCategoryInput | CmsProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsProductUpdateManyWithWhereWithoutCategoryInput | CmsProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsProductScalarWhereInput | CmsProductScalarWhereInput[]
  }

  export type CmsLeadUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CmsLeadCreateWithoutCategoryInput, CmsLeadUncheckedCreateWithoutCategoryInput> | CmsLeadCreateWithoutCategoryInput[] | CmsLeadUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutCategoryInput | CmsLeadCreateOrConnectWithoutCategoryInput[]
    upsert?: CmsLeadUpsertWithWhereUniqueWithoutCategoryInput | CmsLeadUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CmsLeadCreateManyCategoryInputEnvelope
    set?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    disconnect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    delete?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    update?: CmsLeadUpdateWithWhereUniqueWithoutCategoryInput | CmsLeadUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CmsLeadUpdateManyWithWhereWithoutCategoryInput | CmsLeadUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CmsLeadScalarWhereInput | CmsLeadScalarWhereInput[]
  }

  export type CmsCategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CmsCategoryCreateWithoutSubCategoriesInput, CmsCategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CmsCategoryWhereUniqueInput
  }

  export type CmsBlogCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<CmsBlogCreateWithoutSubCategoryInput, CmsBlogUncheckedCreateWithoutSubCategoryInput> | CmsBlogCreateWithoutSubCategoryInput[] | CmsBlogUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutSubCategoryInput | CmsBlogCreateOrConnectWithoutSubCategoryInput[]
    createMany?: CmsBlogCreateManySubCategoryInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsProductCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<CmsProductCreateWithoutSubCategoryInput, CmsProductUncheckedCreateWithoutSubCategoryInput> | CmsProductCreateWithoutSubCategoryInput[] | CmsProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutSubCategoryInput | CmsProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: CmsProductCreateManySubCategoryInputEnvelope
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
  }

  export type CmsBlogUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<CmsBlogCreateWithoutSubCategoryInput, CmsBlogUncheckedCreateWithoutSubCategoryInput> | CmsBlogCreateWithoutSubCategoryInput[] | CmsBlogUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutSubCategoryInput | CmsBlogCreateOrConnectWithoutSubCategoryInput[]
    createMany?: CmsBlogCreateManySubCategoryInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsProductUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<CmsProductCreateWithoutSubCategoryInput, CmsProductUncheckedCreateWithoutSubCategoryInput> | CmsProductCreateWithoutSubCategoryInput[] | CmsProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutSubCategoryInput | CmsProductCreateOrConnectWithoutSubCategoryInput[]
    createMany?: CmsProductCreateManySubCategoryInputEnvelope
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
  }

  export type CmsCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CmsCategoryCreateWithoutSubCategoriesInput, CmsCategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CmsCategoryUpsertWithoutSubCategoriesInput
    connect?: CmsCategoryWhereUniqueInput
    update?: XOR<XOR<CmsCategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CmsCategoryUpdateWithoutSubCategoriesInput>, CmsCategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CmsBlogUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<CmsBlogCreateWithoutSubCategoryInput, CmsBlogUncheckedCreateWithoutSubCategoryInput> | CmsBlogCreateWithoutSubCategoryInput[] | CmsBlogUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutSubCategoryInput | CmsBlogCreateOrConnectWithoutSubCategoryInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutSubCategoryInput | CmsBlogUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: CmsBlogCreateManySubCategoryInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutSubCategoryInput | CmsBlogUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutSubCategoryInput | CmsBlogUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsProductUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<CmsProductCreateWithoutSubCategoryInput, CmsProductUncheckedCreateWithoutSubCategoryInput> | CmsProductCreateWithoutSubCategoryInput[] | CmsProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutSubCategoryInput | CmsProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: CmsProductUpsertWithWhereUniqueWithoutSubCategoryInput | CmsProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: CmsProductCreateManySubCategoryInputEnvelope
    set?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    disconnect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    delete?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    update?: CmsProductUpdateWithWhereUniqueWithoutSubCategoryInput | CmsProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: CmsProductUpdateManyWithWhereWithoutSubCategoryInput | CmsProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: CmsProductScalarWhereInput | CmsProductScalarWhereInput[]
  }

  export type CmsBlogUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<CmsBlogCreateWithoutSubCategoryInput, CmsBlogUncheckedCreateWithoutSubCategoryInput> | CmsBlogCreateWithoutSubCategoryInput[] | CmsBlogUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutSubCategoryInput | CmsBlogCreateOrConnectWithoutSubCategoryInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutSubCategoryInput | CmsBlogUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: CmsBlogCreateManySubCategoryInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutSubCategoryInput | CmsBlogUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutSubCategoryInput | CmsBlogUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsProductUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<CmsProductCreateWithoutSubCategoryInput, CmsProductUncheckedCreateWithoutSubCategoryInput> | CmsProductCreateWithoutSubCategoryInput[] | CmsProductUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: CmsProductCreateOrConnectWithoutSubCategoryInput | CmsProductCreateOrConnectWithoutSubCategoryInput[]
    upsert?: CmsProductUpsertWithWhereUniqueWithoutSubCategoryInput | CmsProductUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: CmsProductCreateManySubCategoryInputEnvelope
    set?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    disconnect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    delete?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    connect?: CmsProductWhereUniqueInput | CmsProductWhereUniqueInput[]
    update?: CmsProductUpdateWithWhereUniqueWithoutSubCategoryInput | CmsProductUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: CmsProductUpdateManyWithWhereWithoutSubCategoryInput | CmsProductUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: CmsProductScalarWhereInput | CmsProductScalarWhereInput[]
  }

  export type CmsBlogCreatetagsInput = {
    set: string[]
  }

  export type CmsCategoryCreateNestedOneWithoutBlogsInput = {
    create?: XOR<CmsCategoryCreateWithoutBlogsInput, CmsCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutBlogsInput
    connect?: CmsCategoryWhereUniqueInput
  }

  export type CmsSubCategoryCreateNestedOneWithoutBlogsInput = {
    create?: XOR<CmsSubCategoryCreateWithoutBlogsInput, CmsSubCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutBlogsInput
    connect?: CmsSubCategoryWhereUniqueInput
  }

  export type CmsBlogUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCmsStatusFieldUpdateOperationsInput = {
    set?: $Enums.CmsStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CmsCategoryUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<CmsCategoryCreateWithoutBlogsInput, CmsCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutBlogsInput
    upsert?: CmsCategoryUpsertWithoutBlogsInput
    disconnect?: CmsCategoryWhereInput | boolean
    delete?: CmsCategoryWhereInput | boolean
    connect?: CmsCategoryWhereUniqueInput
    update?: XOR<XOR<CmsCategoryUpdateToOneWithWhereWithoutBlogsInput, CmsCategoryUpdateWithoutBlogsInput>, CmsCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type CmsSubCategoryUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<CmsSubCategoryCreateWithoutBlogsInput, CmsSubCategoryUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutBlogsInput
    upsert?: CmsSubCategoryUpsertWithoutBlogsInput
    disconnect?: CmsSubCategoryWhereInput | boolean
    delete?: CmsSubCategoryWhereInput | boolean
    connect?: CmsSubCategoryWhereUniqueInput
    update?: XOR<XOR<CmsSubCategoryUpdateToOneWithWhereWithoutBlogsInput, CmsSubCategoryUpdateWithoutBlogsInput>, CmsSubCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type CmsCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CmsCategoryCreateWithoutProductsInput, CmsCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutProductsInput
    connect?: CmsCategoryWhereUniqueInput
  }

  export type CmsSubCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CmsSubCategoryCreateWithoutProductsInput, CmsSubCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutProductsInput
    connect?: CmsSubCategoryWhereUniqueInput
  }

  export type CmsLeadCreateNestedManyWithoutProductInput = {
    create?: XOR<CmsLeadCreateWithoutProductInput, CmsLeadUncheckedCreateWithoutProductInput> | CmsLeadCreateWithoutProductInput[] | CmsLeadUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutProductInput | CmsLeadCreateOrConnectWithoutProductInput[]
    createMany?: CmsLeadCreateManyProductInputEnvelope
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
  }

  export type CmsLeadUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CmsLeadCreateWithoutProductInput, CmsLeadUncheckedCreateWithoutProductInput> | CmsLeadCreateWithoutProductInput[] | CmsLeadUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutProductInput | CmsLeadCreateOrConnectWithoutProductInput[]
    createMany?: CmsLeadCreateManyProductInputEnvelope
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
  }

  export type CmsCategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CmsCategoryCreateWithoutProductsInput, CmsCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutProductsInput
    upsert?: CmsCategoryUpsertWithoutProductsInput
    disconnect?: CmsCategoryWhereInput | boolean
    delete?: CmsCategoryWhereInput | boolean
    connect?: CmsCategoryWhereUniqueInput
    update?: XOR<XOR<CmsCategoryUpdateToOneWithWhereWithoutProductsInput, CmsCategoryUpdateWithoutProductsInput>, CmsCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CmsSubCategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CmsSubCategoryCreateWithoutProductsInput, CmsSubCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CmsSubCategoryCreateOrConnectWithoutProductsInput
    upsert?: CmsSubCategoryUpsertWithoutProductsInput
    disconnect?: CmsSubCategoryWhereInput | boolean
    delete?: CmsSubCategoryWhereInput | boolean
    connect?: CmsSubCategoryWhereUniqueInput
    update?: XOR<XOR<CmsSubCategoryUpdateToOneWithWhereWithoutProductsInput, CmsSubCategoryUpdateWithoutProductsInput>, CmsSubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CmsLeadUpdateManyWithoutProductNestedInput = {
    create?: XOR<CmsLeadCreateWithoutProductInput, CmsLeadUncheckedCreateWithoutProductInput> | CmsLeadCreateWithoutProductInput[] | CmsLeadUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutProductInput | CmsLeadCreateOrConnectWithoutProductInput[]
    upsert?: CmsLeadUpsertWithWhereUniqueWithoutProductInput | CmsLeadUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CmsLeadCreateManyProductInputEnvelope
    set?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    disconnect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    delete?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    update?: CmsLeadUpdateWithWhereUniqueWithoutProductInput | CmsLeadUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CmsLeadUpdateManyWithWhereWithoutProductInput | CmsLeadUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CmsLeadScalarWhereInput | CmsLeadScalarWhereInput[]
  }

  export type CmsLeadUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CmsLeadCreateWithoutProductInput, CmsLeadUncheckedCreateWithoutProductInput> | CmsLeadCreateWithoutProductInput[] | CmsLeadUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CmsLeadCreateOrConnectWithoutProductInput | CmsLeadCreateOrConnectWithoutProductInput[]
    upsert?: CmsLeadUpsertWithWhereUniqueWithoutProductInput | CmsLeadUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CmsLeadCreateManyProductInputEnvelope
    set?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    disconnect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    delete?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    connect?: CmsLeadWhereUniqueInput | CmsLeadWhereUniqueInput[]
    update?: CmsLeadUpdateWithWhereUniqueWithoutProductInput | CmsLeadUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CmsLeadUpdateManyWithWhereWithoutProductInput | CmsLeadUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CmsLeadScalarWhereInput | CmsLeadScalarWhereInput[]
  }

  export type CmsProductCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CmsProductCreateWithoutLeadsInput, CmsProductUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CmsProductCreateOrConnectWithoutLeadsInput
    connect?: CmsProductWhereUniqueInput
  }

  export type CmsCategoryCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CmsCategoryCreateWithoutLeadsInput, CmsCategoryUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutLeadsInput
    connect?: CmsCategoryWhereUniqueInput
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type CmsProductUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<CmsProductCreateWithoutLeadsInput, CmsProductUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CmsProductCreateOrConnectWithoutLeadsInput
    upsert?: CmsProductUpsertWithoutLeadsInput
    disconnect?: CmsProductWhereInput | boolean
    delete?: CmsProductWhereInput | boolean
    connect?: CmsProductWhereUniqueInput
    update?: XOR<XOR<CmsProductUpdateToOneWithWhereWithoutLeadsInput, CmsProductUpdateWithoutLeadsInput>, CmsProductUncheckedUpdateWithoutLeadsInput>
  }

  export type CmsCategoryUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<CmsCategoryCreateWithoutLeadsInput, CmsCategoryUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CmsCategoryCreateOrConnectWithoutLeadsInput
    upsert?: CmsCategoryUpsertWithoutLeadsInput
    disconnect?: CmsCategoryWhereInput | boolean
    delete?: CmsCategoryWhereInput | boolean
    connect?: CmsCategoryWhereUniqueInput
    update?: XOR<XOR<CmsCategoryUpdateToOneWithWhereWithoutLeadsInput, CmsCategoryUpdateWithoutLeadsInput>, CmsCategoryUncheckedUpdateWithoutLeadsInput>
  }

  export type CmsAdCreatepagesInput = {
    set: $Enums.AdPage[]
  }

  export type CmsAdCreatepositionsInput = {
    set: $Enums.AdPosition[]
  }

  export type CmsAdEventCreateNestedManyWithoutAdInput = {
    create?: XOR<CmsAdEventCreateWithoutAdInput, CmsAdEventUncheckedCreateWithoutAdInput> | CmsAdEventCreateWithoutAdInput[] | CmsAdEventUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CmsAdEventCreateOrConnectWithoutAdInput | CmsAdEventCreateOrConnectWithoutAdInput[]
    createMany?: CmsAdEventCreateManyAdInputEnvelope
    connect?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
  }

  export type CmsAdEventUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<CmsAdEventCreateWithoutAdInput, CmsAdEventUncheckedCreateWithoutAdInput> | CmsAdEventCreateWithoutAdInput[] | CmsAdEventUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CmsAdEventCreateOrConnectWithoutAdInput | CmsAdEventCreateOrConnectWithoutAdInput[]
    createMany?: CmsAdEventCreateManyAdInputEnvelope
    connect?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
  }

  export type CmsAdUpdatepagesInput = {
    set?: $Enums.AdPage[]
    push?: $Enums.AdPage | $Enums.AdPage[]
  }

  export type CmsAdUpdatepositionsInput = {
    set?: $Enums.AdPosition[]
    push?: $Enums.AdPosition | $Enums.AdPosition[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAdSizeFieldUpdateOperationsInput = {
    set?: $Enums.AdSize
  }

  export type CmsAdEventUpdateManyWithoutAdNestedInput = {
    create?: XOR<CmsAdEventCreateWithoutAdInput, CmsAdEventUncheckedCreateWithoutAdInput> | CmsAdEventCreateWithoutAdInput[] | CmsAdEventUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CmsAdEventCreateOrConnectWithoutAdInput | CmsAdEventCreateOrConnectWithoutAdInput[]
    upsert?: CmsAdEventUpsertWithWhereUniqueWithoutAdInput | CmsAdEventUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: CmsAdEventCreateManyAdInputEnvelope
    set?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    disconnect?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    delete?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    connect?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    update?: CmsAdEventUpdateWithWhereUniqueWithoutAdInput | CmsAdEventUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: CmsAdEventUpdateManyWithWhereWithoutAdInput | CmsAdEventUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: CmsAdEventScalarWhereInput | CmsAdEventScalarWhereInput[]
  }

  export type CmsAdEventUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<CmsAdEventCreateWithoutAdInput, CmsAdEventUncheckedCreateWithoutAdInput> | CmsAdEventCreateWithoutAdInput[] | CmsAdEventUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CmsAdEventCreateOrConnectWithoutAdInput | CmsAdEventCreateOrConnectWithoutAdInput[]
    upsert?: CmsAdEventUpsertWithWhereUniqueWithoutAdInput | CmsAdEventUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: CmsAdEventCreateManyAdInputEnvelope
    set?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    disconnect?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    delete?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    connect?: CmsAdEventWhereUniqueInput | CmsAdEventWhereUniqueInput[]
    update?: CmsAdEventUpdateWithWhereUniqueWithoutAdInput | CmsAdEventUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: CmsAdEventUpdateManyWithWhereWithoutAdInput | CmsAdEventUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: CmsAdEventScalarWhereInput | CmsAdEventScalarWhereInput[]
  }

  export type CmsAdCreateNestedOneWithoutEventsInput = {
    create?: XOR<CmsAdCreateWithoutEventsInput, CmsAdUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CmsAdCreateOrConnectWithoutEventsInput
    connect?: CmsAdWhereUniqueInput
  }

  export type EnumAdEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdEventType
  }

  export type CmsAdUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CmsAdCreateWithoutEventsInput, CmsAdUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CmsAdCreateOrConnectWithoutEventsInput
    upsert?: CmsAdUpsertWithoutEventsInput
    connect?: CmsAdWhereUniqueInput
    update?: XOR<XOR<CmsAdUpdateToOneWithWhereWithoutEventsInput, CmsAdUpdateWithoutEventsInput>, CmsAdUncheckedUpdateWithoutEventsInput>
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

  export type NestedEnumCmsAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsAdminRole | EnumCmsAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsAdminRoleFilter<$PrismaModel> | $Enums.CmsAdminRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumCmsAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsAdminRole | EnumCmsAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsAdminRole[] | ListEnumCmsAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.CmsAdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumCmsAdminRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCmsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsStatus | EnumCmsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsStatusFilter<$PrismaModel> | $Enums.CmsStatus
  }

  export type NestedEnumCmsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsStatus | EnumCmsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsStatus[] | ListEnumCmsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsStatusWithAggregatesFilter<$PrismaModel> | $Enums.CmsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsStatusFilter<$PrismaModel>
    _max?: NestedEnumCmsStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumAdSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdSize | EnumAdSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdSizeFilter<$PrismaModel> | $Enums.AdSize
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

  export type NestedEnumAdSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdSize | EnumAdSizeFieldRefInput<$PrismaModel>
    in?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdSize[] | ListEnumAdSizeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdSizeWithAggregatesFilter<$PrismaModel> | $Enums.AdSize
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdSizeFilter<$PrismaModel>
    _max?: NestedEnumAdSizeFilter<$PrismaModel>
  }

  export type NestedEnumAdEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdEventType | EnumAdEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdEventTypeFilter<$PrismaModel> | $Enums.AdEventType
  }

  export type NestedEnumAdEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdEventType | EnumAdEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdEventType[] | ListEnumAdEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAdEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAdEventTypeFilter<$PrismaModel>
  }

  export type CmsSubCategoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: CmsBlogCreateNestedManyWithoutSubCategoryInput
    products?: CmsProductCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutSubCategoryInput
    products?: CmsProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryCreateOrConnectWithoutCategoryInput = {
    where: CmsSubCategoryWhereUniqueInput
    create: XOR<CmsSubCategoryCreateWithoutCategoryInput, CmsSubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type CmsSubCategoryCreateManyCategoryInputEnvelope = {
    data: CmsSubCategoryCreateManyCategoryInput | CmsSubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CmsBlogCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: CmsSubCategoryCreateNestedOneWithoutBlogsInput
  }

  export type CmsBlogUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: string | null
  }

  export type CmsBlogCreateOrConnectWithoutCategoryInput = {
    where: CmsBlogWhereUniqueInput
    create: XOR<CmsBlogCreateWithoutCategoryInput, CmsBlogUncheckedCreateWithoutCategoryInput>
  }

  export type CmsBlogCreateManyCategoryInputEnvelope = {
    data: CmsBlogCreateManyCategoryInput | CmsBlogCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CmsProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategory?: CmsSubCategoryCreateNestedOneWithoutProductsInput
    leads?: CmsLeadCreateNestedManyWithoutProductInput
  }

  export type CmsProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: string | null
    leads?: CmsLeadUncheckedCreateNestedManyWithoutProductInput
  }

  export type CmsProductCreateOrConnectWithoutCategoryInput = {
    where: CmsProductWhereUniqueInput
    create: XOR<CmsProductCreateWithoutCategoryInput, CmsProductUncheckedCreateWithoutCategoryInput>
  }

  export type CmsProductCreateManyCategoryInputEnvelope = {
    data: CmsProductCreateManyCategoryInput | CmsProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CmsLeadCreateWithoutCategoryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: CmsProductCreateNestedOneWithoutLeadsInput
  }

  export type CmsLeadUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
  }

  export type CmsLeadCreateOrConnectWithoutCategoryInput = {
    where: CmsLeadWhereUniqueInput
    create: XOR<CmsLeadCreateWithoutCategoryInput, CmsLeadUncheckedCreateWithoutCategoryInput>
  }

  export type CmsLeadCreateManyCategoryInputEnvelope = {
    data: CmsLeadCreateManyCategoryInput | CmsLeadCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CmsSubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CmsSubCategoryWhereUniqueInput
    update: XOR<CmsSubCategoryUpdateWithoutCategoryInput, CmsSubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<CmsSubCategoryCreateWithoutCategoryInput, CmsSubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type CmsSubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CmsSubCategoryWhereUniqueInput
    data: XOR<CmsSubCategoryUpdateWithoutCategoryInput, CmsSubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type CmsSubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: CmsSubCategoryScalarWhereInput
    data: XOR<CmsSubCategoryUpdateManyMutationInput, CmsSubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CmsSubCategoryScalarWhereInput = {
    AND?: CmsSubCategoryScalarWhereInput | CmsSubCategoryScalarWhereInput[]
    OR?: CmsSubCategoryScalarWhereInput[]
    NOT?: CmsSubCategoryScalarWhereInput | CmsSubCategoryScalarWhereInput[]
    id?: StringFilter<"CmsSubCategory"> | string
    name?: StringFilter<"CmsSubCategory"> | string
    slug?: StringFilter<"CmsSubCategory"> | string
    imageUrl?: StringNullableFilter<"CmsSubCategory"> | string | null
    isActive?: BoolFilter<"CmsSubCategory"> | boolean
    createdAt?: DateTimeFilter<"CmsSubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSubCategory"> | Date | string
    categoryId?: StringFilter<"CmsSubCategory"> | string
  }

  export type CmsBlogUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CmsBlogWhereUniqueInput
    update: XOR<CmsBlogUpdateWithoutCategoryInput, CmsBlogUncheckedUpdateWithoutCategoryInput>
    create: XOR<CmsBlogCreateWithoutCategoryInput, CmsBlogUncheckedCreateWithoutCategoryInput>
  }

  export type CmsBlogUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CmsBlogWhereUniqueInput
    data: XOR<CmsBlogUpdateWithoutCategoryInput, CmsBlogUncheckedUpdateWithoutCategoryInput>
  }

  export type CmsBlogUpdateManyWithWhereWithoutCategoryInput = {
    where: CmsBlogScalarWhereInput
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CmsBlogScalarWhereInput = {
    AND?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
    OR?: CmsBlogScalarWhereInput[]
    NOT?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
    id?: StringFilter<"CmsBlog"> | string
    title?: StringFilter<"CmsBlog"> | string
    slug?: StringFilter<"CmsBlog"> | string
    excerpt?: StringNullableFilter<"CmsBlog"> | string | null
    content?: StringFilter<"CmsBlog"> | string
    coverImage?: StringNullableFilter<"CmsBlog"> | string | null
    tags?: StringNullableListFilter<"CmsBlog">
    author?: StringNullableFilter<"CmsBlog"> | string | null
    status?: EnumCmsStatusFilter<"CmsBlog"> | $Enums.CmsStatus
    publishedAt?: DateTimeNullableFilter<"CmsBlog"> | Date | string | null
    seoTitle?: StringNullableFilter<"CmsBlog"> | string | null
    seoDescription?: StringNullableFilter<"CmsBlog"> | string | null
    viewCount?: IntFilter<"CmsBlog"> | number
    createdAt?: DateTimeFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBlog"> | Date | string
    categoryId?: StringNullableFilter<"CmsBlog"> | string | null
    subCategoryId?: StringNullableFilter<"CmsBlog"> | string | null
  }

  export type CmsProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CmsProductWhereUniqueInput
    update: XOR<CmsProductUpdateWithoutCategoryInput, CmsProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<CmsProductCreateWithoutCategoryInput, CmsProductUncheckedCreateWithoutCategoryInput>
  }

  export type CmsProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CmsProductWhereUniqueInput
    data: XOR<CmsProductUpdateWithoutCategoryInput, CmsProductUncheckedUpdateWithoutCategoryInput>
  }

  export type CmsProductUpdateManyWithWhereWithoutCategoryInput = {
    where: CmsProductScalarWhereInput
    data: XOR<CmsProductUpdateManyMutationInput, CmsProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CmsProductScalarWhereInput = {
    AND?: CmsProductScalarWhereInput | CmsProductScalarWhereInput[]
    OR?: CmsProductScalarWhereInput[]
    NOT?: CmsProductScalarWhereInput | CmsProductScalarWhereInput[]
    id?: StringFilter<"CmsProduct"> | string
    name?: StringFilter<"CmsProduct"> | string
    slug?: StringFilter<"CmsProduct"> | string
    shortDescription?: StringNullableFilter<"CmsProduct"> | string | null
    description?: StringNullableFilter<"CmsProduct"> | string | null
    image?: StringNullableFilter<"CmsProduct"> | string | null
    provider?: StringNullableFilter<"CmsProduct"> | string | null
    providerLogo?: StringNullableFilter<"CmsProduct"> | string | null
    interestRate?: StringNullableFilter<"CmsProduct"> | string | null
    processingFee?: StringNullableFilter<"CmsProduct"> | string | null
    minAmount?: StringNullableFilter<"CmsProduct"> | string | null
    maxAmount?: StringNullableFilter<"CmsProduct"> | string | null
    tenure?: StringNullableFilter<"CmsProduct"> | string | null
    features?: JsonNullableFilter<"CmsProduct">
    benefits?: JsonNullableFilter<"CmsProduct">
    eligibility?: JsonNullableFilter<"CmsProduct">
    formFields?: JsonNullableFilter<"CmsProduct">
    applyUrl?: StringNullableFilter<"CmsProduct"> | string | null
    status?: EnumCmsStatusFilter<"CmsProduct"> | $Enums.CmsStatus
    featured?: BoolFilter<"CmsProduct"> | boolean
    isBestSeller?: BoolFilter<"CmsProduct"> | boolean
    badge?: StringNullableFilter<"CmsProduct"> | string | null
    sortOrder?: IntFilter<"CmsProduct"> | number
    seoTitle?: StringNullableFilter<"CmsProduct"> | string | null
    seoDescription?: StringNullableFilter<"CmsProduct"> | string | null
    viewCount?: IntFilter<"CmsProduct"> | number
    createdAt?: DateTimeFilter<"CmsProduct"> | Date | string
    updatedAt?: DateTimeFilter<"CmsProduct"> | Date | string
    categoryId?: StringNullableFilter<"CmsProduct"> | string | null
    subCategoryId?: StringNullableFilter<"CmsProduct"> | string | null
  }

  export type CmsLeadUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CmsLeadWhereUniqueInput
    update: XOR<CmsLeadUpdateWithoutCategoryInput, CmsLeadUncheckedUpdateWithoutCategoryInput>
    create: XOR<CmsLeadCreateWithoutCategoryInput, CmsLeadUncheckedCreateWithoutCategoryInput>
  }

  export type CmsLeadUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CmsLeadWhereUniqueInput
    data: XOR<CmsLeadUpdateWithoutCategoryInput, CmsLeadUncheckedUpdateWithoutCategoryInput>
  }

  export type CmsLeadUpdateManyWithWhereWithoutCategoryInput = {
    where: CmsLeadScalarWhereInput
    data: XOR<CmsLeadUpdateManyMutationInput, CmsLeadUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CmsLeadScalarWhereInput = {
    AND?: CmsLeadScalarWhereInput | CmsLeadScalarWhereInput[]
    OR?: CmsLeadScalarWhereInput[]
    NOT?: CmsLeadScalarWhereInput | CmsLeadScalarWhereInput[]
    id?: StringFilter<"CmsLead"> | string
    name?: StringFilter<"CmsLead"> | string
    email?: StringNullableFilter<"CmsLead"> | string | null
    phone?: StringNullableFilter<"CmsLead"> | string | null
    message?: StringNullableFilter<"CmsLead"> | string | null
    customData?: JsonNullableFilter<"CmsLead">
    status?: EnumLeadStatusFilter<"CmsLead"> | $Enums.LeadStatus
    notes?: StringNullableFilter<"CmsLead"> | string | null
    assignedTo?: StringNullableFilter<"CmsLead"> | string | null
    source?: StringNullableFilter<"CmsLead"> | string | null
    utmSource?: StringNullableFilter<"CmsLead"> | string | null
    utmMedium?: StringNullableFilter<"CmsLead"> | string | null
    utmCampaign?: StringNullableFilter<"CmsLead"> | string | null
    createdAt?: DateTimeFilter<"CmsLead"> | Date | string
    updatedAt?: DateTimeFilter<"CmsLead"> | Date | string
    productId?: StringNullableFilter<"CmsLead"> | string | null
    categoryId?: StringNullableFilter<"CmsLead"> | string | null
  }

  export type CmsCategoryCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: CmsBlogCreateNestedManyWithoutCategoryInput
    products?: CmsProductCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutCategoryInput
    products?: CmsProductUncheckedCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CmsCategoryWhereUniqueInput
    create: XOR<CmsCategoryCreateWithoutSubCategoriesInput, CmsCategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type CmsBlogCreateWithoutSubCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CmsCategoryCreateNestedOneWithoutBlogsInput
  }

  export type CmsBlogUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type CmsBlogCreateOrConnectWithoutSubCategoryInput = {
    where: CmsBlogWhereUniqueInput
    create: XOR<CmsBlogCreateWithoutSubCategoryInput, CmsBlogUncheckedCreateWithoutSubCategoryInput>
  }

  export type CmsBlogCreateManySubCategoryInputEnvelope = {
    data: CmsBlogCreateManySubCategoryInput | CmsBlogCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CmsProductCreateWithoutSubCategoryInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CmsCategoryCreateNestedOneWithoutProductsInput
    leads?: CmsLeadCreateNestedManyWithoutProductInput
  }

  export type CmsProductUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    leads?: CmsLeadUncheckedCreateNestedManyWithoutProductInput
  }

  export type CmsProductCreateOrConnectWithoutSubCategoryInput = {
    where: CmsProductWhereUniqueInput
    create: XOR<CmsProductCreateWithoutSubCategoryInput, CmsProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type CmsProductCreateManySubCategoryInputEnvelope = {
    data: CmsProductCreateManySubCategoryInput | CmsProductCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CmsCategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CmsCategoryUpdateWithoutSubCategoriesInput, CmsCategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CmsCategoryCreateWithoutSubCategoriesInput, CmsCategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CmsCategoryWhereInput
  }

  export type CmsCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CmsCategoryWhereInput
    data: XOR<CmsCategoryUpdateWithoutSubCategoriesInput, CmsCategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CmsCategoryUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: CmsBlogUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUpdateManyWithoutCategoryNestedInput
  }

  export type CmsCategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: CmsBlogUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUncheckedUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CmsBlogUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: CmsBlogWhereUniqueInput
    update: XOR<CmsBlogUpdateWithoutSubCategoryInput, CmsBlogUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<CmsBlogCreateWithoutSubCategoryInput, CmsBlogUncheckedCreateWithoutSubCategoryInput>
  }

  export type CmsBlogUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: CmsBlogWhereUniqueInput
    data: XOR<CmsBlogUpdateWithoutSubCategoryInput, CmsBlogUncheckedUpdateWithoutSubCategoryInput>
  }

  export type CmsBlogUpdateManyWithWhereWithoutSubCategoryInput = {
    where: CmsBlogScalarWhereInput
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type CmsProductUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: CmsProductWhereUniqueInput
    update: XOR<CmsProductUpdateWithoutSubCategoryInput, CmsProductUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<CmsProductCreateWithoutSubCategoryInput, CmsProductUncheckedCreateWithoutSubCategoryInput>
  }

  export type CmsProductUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: CmsProductWhereUniqueInput
    data: XOR<CmsProductUpdateWithoutSubCategoryInput, CmsProductUncheckedUpdateWithoutSubCategoryInput>
  }

  export type CmsProductUpdateManyWithWhereWithoutSubCategoryInput = {
    where: CmsProductScalarWhereInput
    data: XOR<CmsProductUpdateManyMutationInput, CmsProductUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type CmsCategoryCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryCreateNestedManyWithoutCategoryInput
    products?: CmsProductCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryUncheckedCreateNestedManyWithoutCategoryInput
    products?: CmsProductUncheckedCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryCreateOrConnectWithoutBlogsInput = {
    where: CmsCategoryWhereUniqueInput
    create: XOR<CmsCategoryCreateWithoutBlogsInput, CmsCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type CmsSubCategoryCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CmsCategoryCreateNestedOneWithoutSubCategoriesInput
    products?: CmsProductCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    products?: CmsProductUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryCreateOrConnectWithoutBlogsInput = {
    where: CmsSubCategoryWhereUniqueInput
    create: XOR<CmsSubCategoryCreateWithoutBlogsInput, CmsSubCategoryUncheckedCreateWithoutBlogsInput>
  }

  export type CmsCategoryUpsertWithoutBlogsInput = {
    update: XOR<CmsCategoryUpdateWithoutBlogsInput, CmsCategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<CmsCategoryCreateWithoutBlogsInput, CmsCategoryUncheckedCreateWithoutBlogsInput>
    where?: CmsCategoryWhereInput
  }

  export type CmsCategoryUpdateToOneWithWhereWithoutBlogsInput = {
    where?: CmsCategoryWhereInput
    data: XOR<CmsCategoryUpdateWithoutBlogsInput, CmsCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type CmsCategoryUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUpdateManyWithoutCategoryNestedInput
  }

  export type CmsCategoryUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUncheckedUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CmsSubCategoryUpsertWithoutBlogsInput = {
    update: XOR<CmsSubCategoryUpdateWithoutBlogsInput, CmsSubCategoryUncheckedUpdateWithoutBlogsInput>
    create: XOR<CmsSubCategoryCreateWithoutBlogsInput, CmsSubCategoryUncheckedCreateWithoutBlogsInput>
    where?: CmsSubCategoryWhereInput
  }

  export type CmsSubCategoryUpdateToOneWithWhereWithoutBlogsInput = {
    where?: CmsSubCategoryWhereInput
    data: XOR<CmsSubCategoryUpdateWithoutBlogsInput, CmsSubCategoryUncheckedUpdateWithoutBlogsInput>
  }

  export type CmsSubCategoryUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    products?: CmsProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsSubCategoryUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    products?: CmsProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryCreateNestedManyWithoutCategoryInput
    blogs?: CmsBlogCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryUncheckedCreateNestedManyWithoutCategoryInput
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutCategoryInput
    leads?: CmsLeadUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryCreateOrConnectWithoutProductsInput = {
    where: CmsCategoryWhereUniqueInput
    create: XOR<CmsCategoryCreateWithoutProductsInput, CmsCategoryUncheckedCreateWithoutProductsInput>
  }

  export type CmsSubCategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CmsCategoryCreateNestedOneWithoutSubCategoriesInput
    blogs?: CmsBlogCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type CmsSubCategoryCreateOrConnectWithoutProductsInput = {
    where: CmsSubCategoryWhereUniqueInput
    create: XOR<CmsSubCategoryCreateWithoutProductsInput, CmsSubCategoryUncheckedCreateWithoutProductsInput>
  }

  export type CmsLeadCreateWithoutProductInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CmsCategoryCreateNestedOneWithoutLeadsInput
  }

  export type CmsLeadUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type CmsLeadCreateOrConnectWithoutProductInput = {
    where: CmsLeadWhereUniqueInput
    create: XOR<CmsLeadCreateWithoutProductInput, CmsLeadUncheckedCreateWithoutProductInput>
  }

  export type CmsLeadCreateManyProductInputEnvelope = {
    data: CmsLeadCreateManyProductInput | CmsLeadCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CmsCategoryUpsertWithoutProductsInput = {
    update: XOR<CmsCategoryUpdateWithoutProductsInput, CmsCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CmsCategoryCreateWithoutProductsInput, CmsCategoryUncheckedCreateWithoutProductsInput>
    where?: CmsCategoryWhereInput
  }

  export type CmsCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CmsCategoryWhereInput
    data: XOR<CmsCategoryUpdateWithoutProductsInput, CmsCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CmsCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUpdateManyWithoutCategoryNestedInput
    blogs?: CmsBlogUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUpdateManyWithoutCategoryNestedInput
  }

  export type CmsCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    blogs?: CmsBlogUncheckedUpdateManyWithoutCategoryNestedInput
    leads?: CmsLeadUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CmsSubCategoryUpsertWithoutProductsInput = {
    update: XOR<CmsSubCategoryUpdateWithoutProductsInput, CmsSubCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CmsSubCategoryCreateWithoutProductsInput, CmsSubCategoryUncheckedCreateWithoutProductsInput>
    where?: CmsSubCategoryWhereInput
  }

  export type CmsSubCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CmsSubCategoryWhereInput
    data: XOR<CmsSubCategoryUpdateWithoutProductsInput, CmsSubCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CmsSubCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    blogs?: CmsBlogUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsSubCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    blogs?: CmsBlogUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsLeadUpsertWithWhereUniqueWithoutProductInput = {
    where: CmsLeadWhereUniqueInput
    update: XOR<CmsLeadUpdateWithoutProductInput, CmsLeadUncheckedUpdateWithoutProductInput>
    create: XOR<CmsLeadCreateWithoutProductInput, CmsLeadUncheckedCreateWithoutProductInput>
  }

  export type CmsLeadUpdateWithWhereUniqueWithoutProductInput = {
    where: CmsLeadWhereUniqueInput
    data: XOR<CmsLeadUpdateWithoutProductInput, CmsLeadUncheckedUpdateWithoutProductInput>
  }

  export type CmsLeadUpdateManyWithWhereWithoutProductInput = {
    where: CmsLeadScalarWhereInput
    data: XOR<CmsLeadUpdateManyMutationInput, CmsLeadUncheckedUpdateManyWithoutProductInput>
  }

  export type CmsProductCreateWithoutLeadsInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CmsCategoryCreateNestedOneWithoutProductsInput
    subCategory?: CmsSubCategoryCreateNestedOneWithoutProductsInput
  }

  export type CmsProductUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    subCategoryId?: string | null
  }

  export type CmsProductCreateOrConnectWithoutLeadsInput = {
    where: CmsProductWhereUniqueInput
    create: XOR<CmsProductCreateWithoutLeadsInput, CmsProductUncheckedCreateWithoutLeadsInput>
  }

  export type CmsCategoryCreateWithoutLeadsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryCreateNestedManyWithoutCategoryInput
    blogs?: CmsBlogCreateNestedManyWithoutCategoryInput
    products?: CmsProductCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategories?: CmsSubCategoryUncheckedCreateNestedManyWithoutCategoryInput
    blogs?: CmsBlogUncheckedCreateNestedManyWithoutCategoryInput
    products?: CmsProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CmsCategoryCreateOrConnectWithoutLeadsInput = {
    where: CmsCategoryWhereUniqueInput
    create: XOR<CmsCategoryCreateWithoutLeadsInput, CmsCategoryUncheckedCreateWithoutLeadsInput>
  }

  export type CmsProductUpsertWithoutLeadsInput = {
    update: XOR<CmsProductUpdateWithoutLeadsInput, CmsProductUncheckedUpdateWithoutLeadsInput>
    create: XOR<CmsProductCreateWithoutLeadsInput, CmsProductUncheckedCreateWithoutLeadsInput>
    where?: CmsProductWhereInput
  }

  export type CmsProductUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CmsProductWhereInput
    data: XOR<CmsProductUpdateWithoutLeadsInput, CmsProductUncheckedUpdateWithoutLeadsInput>
  }

  export type CmsProductUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneWithoutProductsNestedInput
    subCategory?: CmsSubCategoryUpdateOneWithoutProductsNestedInput
  }

  export type CmsProductUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsCategoryUpsertWithoutLeadsInput = {
    update: XOR<CmsCategoryUpdateWithoutLeadsInput, CmsCategoryUncheckedUpdateWithoutLeadsInput>
    create: XOR<CmsCategoryCreateWithoutLeadsInput, CmsCategoryUncheckedCreateWithoutLeadsInput>
    where?: CmsCategoryWhereInput
  }

  export type CmsCategoryUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CmsCategoryWhereInput
    data: XOR<CmsCategoryUpdateWithoutLeadsInput, CmsCategoryUncheckedUpdateWithoutLeadsInput>
  }

  export type CmsCategoryUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUpdateManyWithoutCategoryNestedInput
    blogs?: CmsBlogUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUpdateManyWithoutCategoryNestedInput
  }

  export type CmsCategoryUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: CmsSubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    blogs?: CmsBlogUncheckedUpdateManyWithoutCategoryNestedInput
    products?: CmsProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CmsAdEventCreateWithoutAdInput = {
    id?: string
    type: $Enums.AdEventType
    isUnique?: boolean
    ip?: string | null
    sessionId?: string | null
    userAgent?: string | null
    deviceType?: string | null
    page?: string | null
    referrer?: string | null
    country?: string | null
    createdAt?: Date | string
  }

  export type CmsAdEventUncheckedCreateWithoutAdInput = {
    id?: string
    type: $Enums.AdEventType
    isUnique?: boolean
    ip?: string | null
    sessionId?: string | null
    userAgent?: string | null
    deviceType?: string | null
    page?: string | null
    referrer?: string | null
    country?: string | null
    createdAt?: Date | string
  }

  export type CmsAdEventCreateOrConnectWithoutAdInput = {
    where: CmsAdEventWhereUniqueInput
    create: XOR<CmsAdEventCreateWithoutAdInput, CmsAdEventUncheckedCreateWithoutAdInput>
  }

  export type CmsAdEventCreateManyAdInputEnvelope = {
    data: CmsAdEventCreateManyAdInput | CmsAdEventCreateManyAdInput[]
    skipDuplicates?: boolean
  }

  export type CmsAdEventUpsertWithWhereUniqueWithoutAdInput = {
    where: CmsAdEventWhereUniqueInput
    update: XOR<CmsAdEventUpdateWithoutAdInput, CmsAdEventUncheckedUpdateWithoutAdInput>
    create: XOR<CmsAdEventCreateWithoutAdInput, CmsAdEventUncheckedCreateWithoutAdInput>
  }

  export type CmsAdEventUpdateWithWhereUniqueWithoutAdInput = {
    where: CmsAdEventWhereUniqueInput
    data: XOR<CmsAdEventUpdateWithoutAdInput, CmsAdEventUncheckedUpdateWithoutAdInput>
  }

  export type CmsAdEventUpdateManyWithWhereWithoutAdInput = {
    where: CmsAdEventScalarWhereInput
    data: XOR<CmsAdEventUpdateManyMutationInput, CmsAdEventUncheckedUpdateManyWithoutAdInput>
  }

  export type CmsAdEventScalarWhereInput = {
    AND?: CmsAdEventScalarWhereInput | CmsAdEventScalarWhereInput[]
    OR?: CmsAdEventScalarWhereInput[]
    NOT?: CmsAdEventScalarWhereInput | CmsAdEventScalarWhereInput[]
    id?: StringFilter<"CmsAdEvent"> | string
    adId?: StringFilter<"CmsAdEvent"> | string
    type?: EnumAdEventTypeFilter<"CmsAdEvent"> | $Enums.AdEventType
    isUnique?: BoolFilter<"CmsAdEvent"> | boolean
    ip?: StringNullableFilter<"CmsAdEvent"> | string | null
    sessionId?: StringNullableFilter<"CmsAdEvent"> | string | null
    userAgent?: StringNullableFilter<"CmsAdEvent"> | string | null
    deviceType?: StringNullableFilter<"CmsAdEvent"> | string | null
    page?: StringNullableFilter<"CmsAdEvent"> | string | null
    referrer?: StringNullableFilter<"CmsAdEvent"> | string | null
    country?: StringNullableFilter<"CmsAdEvent"> | string | null
    createdAt?: DateTimeFilter<"CmsAdEvent"> | Date | string
  }

  export type CmsAdCreateWithoutEventsInput = {
    id?: string
    title: string
    pages?: CmsAdCreatepagesInput | $Enums.AdPage[]
    positions?: CmsAdCreatepositionsInput | $Enums.AdPosition[]
    customWidth?: number | null
    customHeight?: number | null
    size?: $Enums.AdSize
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    link?: string | null
    image: string
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAdUncheckedCreateWithoutEventsInput = {
    id?: string
    title: string
    pages?: CmsAdCreatepagesInput | $Enums.AdPage[]
    positions?: CmsAdCreatepositionsInput | $Enums.AdPosition[]
    customWidth?: number | null
    customHeight?: number | null
    size?: $Enums.AdSize
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    link?: string | null
    image: string
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAdCreateOrConnectWithoutEventsInput = {
    where: CmsAdWhereUniqueInput
    create: XOR<CmsAdCreateWithoutEventsInput, CmsAdUncheckedCreateWithoutEventsInput>
  }

  export type CmsAdUpsertWithoutEventsInput = {
    update: XOR<CmsAdUpdateWithoutEventsInput, CmsAdUncheckedUpdateWithoutEventsInput>
    create: XOR<CmsAdCreateWithoutEventsInput, CmsAdUncheckedCreateWithoutEventsInput>
    where?: CmsAdWhereInput
  }

  export type CmsAdUpdateToOneWithWhereWithoutEventsInput = {
    where?: CmsAdWhereInput
    data: XOR<CmsAdUpdateWithoutEventsInput, CmsAdUncheckedUpdateWithoutEventsInput>
  }

  export type CmsAdUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: CmsAdUpdatepagesInput | $Enums.AdPage[]
    positions?: CmsAdUpdatepositionsInput | $Enums.AdPosition[]
    customWidth?: NullableIntFieldUpdateOperationsInput | number | null
    customHeight?: NullableIntFieldUpdateOperationsInput | number | null
    size?: EnumAdSizeFieldUpdateOperationsInput | $Enums.AdSize
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: CmsAdUpdatepagesInput | $Enums.AdPage[]
    positions?: CmsAdUpdatepositionsInput | $Enums.AdPosition[]
    customWidth?: NullableIntFieldUpdateOperationsInput | number | null
    customHeight?: NullableIntFieldUpdateOperationsInput | number | null
    size?: EnumAdSizeFieldUpdateOperationsInput | $Enums.AdSize
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSubCategoryCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: string | null
  }

  export type CmsProductCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subCategoryId?: string | null
  }

  export type CmsLeadCreateManyCategoryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productId?: string | null
  }

  export type CmsSubCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: CmsBlogUpdateManyWithoutSubCategoryNestedInput
    products?: CmsProductUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsSubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogs?: CmsBlogUncheckedUpdateManyWithoutSubCategoryNestedInput
    products?: CmsProductUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type CmsSubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: CmsSubCategoryUpdateOneWithoutBlogsNestedInput
  }

  export type CmsBlogUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsBlogUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategory?: CmsSubCategoryUpdateOneWithoutProductsNestedInput
    leads?: CmsLeadUpdateManyWithoutProductNestedInput
  }

  export type CmsProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: CmsLeadUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CmsProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsLeadUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: CmsProductUpdateOneWithoutLeadsNestedInput
  }

  export type CmsLeadUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsLeadUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsBlogCreateManySubCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    tags?: CmsBlogCreatetagsInput | string[]
    author?: string | null
    status?: $Enums.CmsStatus
    publishedAt?: Date | string | null
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type CmsProductCreateManySubCategoryInput = {
    id?: string
    name: string
    slug: string
    shortDescription?: string | null
    description?: string | null
    image?: string | null
    provider?: string | null
    providerLogo?: string | null
    interestRate?: string | null
    processingFee?: string | null
    minAmount?: string | null
    maxAmount?: string | null
    tenure?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: string | null
    status?: $Enums.CmsStatus
    featured?: boolean
    isBestSeller?: boolean
    badge?: string | null
    sortOrder?: number
    seoTitle?: string | null
    seoDescription?: string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type CmsBlogUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneWithoutBlogsNestedInput
  }

  export type CmsBlogUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsBlogUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: CmsBlogUpdatetagsInput | string[]
    author?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsProductUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneWithoutProductsNestedInput
    leads?: CmsLeadUpdateManyWithoutProductNestedInput
  }

  export type CmsProductUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: CmsLeadUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CmsProductUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    interestRate?: NullableStringFieldUpdateOperationsInput | string | null
    processingFee?: NullableStringFieldUpdateOperationsInput | string | null
    minAmount?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmount?: NullableStringFieldUpdateOperationsInput | string | null
    tenure?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    benefits?: NullableJsonNullValueInput | InputJsonValue
    eligibility?: NullableJsonNullValueInput | InputJsonValue
    formFields?: NullableJsonNullValueInput | InputJsonValue
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCmsStatusFieldUpdateOperationsInput | $Enums.CmsStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isBestSeller?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsLeadCreateManyProductInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    message?: string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.LeadStatus
    notes?: string | null
    assignedTo?: string | null
    source?: string | null
    utmSource?: string | null
    utmMedium?: string | null
    utmCampaign?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type CmsLeadUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CmsCategoryUpdateOneWithoutLeadsNestedInput
  }

  export type CmsLeadUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsLeadUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    utmSource?: NullableStringFieldUpdateOperationsInput | string | null
    utmMedium?: NullableStringFieldUpdateOperationsInput | string | null
    utmCampaign?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CmsAdEventCreateManyAdInput = {
    id?: string
    type: $Enums.AdEventType
    isUnique?: boolean
    ip?: string | null
    sessionId?: string | null
    userAgent?: string | null
    deviceType?: string | null
    page?: string | null
    referrer?: string | null
    country?: string | null
    createdAt?: Date | string
  }

  export type CmsAdEventUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdEventUncheckedUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAdEventUncheckedUpdateManyWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAdEventTypeFieldUpdateOperationsInput | $Enums.AdEventType
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
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