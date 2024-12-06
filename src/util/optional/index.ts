export type Nullable<T> = T | null | undefined

export type Empty = null | undefined

class Optional<T> {
  private value: Nullable<T>

  private constructor(value: T) {
    this.value = value
  }

  public static of<T>(value: T): Optional<T> {
    return new Optional(value)
  }

  public static empty(): Optional<Empty> {
    return new Optional(null)
  }

  public static ofNullable<T>(value: T): Optional<T | Empty> {
    return Boolean(value === null || value === undefined) ? Optional.empty() : Optional.of(value)
  }

  /*
   *  @throws {NoSuchElementException}
   */
  public get(): NonNullable<T> {
    if (this.value === null || this.value === undefined) {
      throw new NoSuchElementException('No value present')
    }
    return this.value
  }

  public isPresent(): boolean {
    return this.value !== null && this.value !== undefined
  }

  public ifPresent(callback: (value: NonNullable<T>) => void): void {
    if (this.value !== null && this.value !== undefined) {
      callback(this.value)
    }
  }

  public ifPresentOrElse(callback: (value: NonNullable<T>) => void, emptyAction: () => void): void {
    if (this.value !== null && this.value !== undefined) {
      callback(this.value!)
    } else {
      emptyAction()
    }
  }

  public filter(predicate: (value: NonNullable<T>) => boolean): Optional<T | Empty> {
    if (this.value === null || this.value === undefined){
      return this
    }
    return predicate(this.value!) ? this : Optional.empty()
  }

  public orElse<U>(other: U): U | NonNullable<T> {
    return this.value !== null && this.value !== undefined ? this.value : other
  }

  public orElseGet(callback: CallableFunction): T {
    return this.value !== null && this.value !== undefined ? this.value : callback()
  }

  /*
   *  @throws {NoSuchElementException}
   */
  public orElseThrow(): T {
    if (this.value === null || this.value === undefined) {
      throw new NoSuchElementException("No value present")
    }
    return this.value
  }
}

export class NoSuchElementException extends Error {
  constructor(...args: any[]) {
    super(...args)
  }
}

export default Optional
