import * as t from 'io-ts'

export interface Union<T extends string> extends t.UnionType<t.LiteralType<T>[], T, T, t.mixed> {}

export const UnionOf: UnionOfType = <T extends string>(values: T[], name?: string): Union<T> => {
    return t.union(
        values.map(val => t.literal(val)),
        name ? `Union:${name}` : 'Union'
    )
}

export type UnionOfType = <T extends string>(values: T[], name?: string) => Union<T>
