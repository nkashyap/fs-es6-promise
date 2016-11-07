import * as fs from 'fs';

// sadly, there’s no way to check for “a certain var-lenght sequence of types followed by (err: ...) => void”

export type AsyncCB0 = (e: NodeJS.ErrnoException) => void
export type AsyncCB1<X> = (e: NodeJS.ErrnoException, arg1: X) => void
export type AsyncCB2<X, Y> = (e: NodeJS.ErrnoException, arg1: X, arg2: Y) => void
export type AsyncCB<X, Y> = AsyncCB0 | AsyncCB1<X> | AsyncCB2<X, Y>

export type AsyncFn0<               X, Y, CB extends AsyncCB<X, Y>> = (                                             cb: CB) => void
export type AsyncFn1<A,             X, Y, CB extends AsyncCB<X, Y>> = (arg1: A,                                     cb: CB) => void
export type AsyncFn2<A, B,          X, Y, CB extends AsyncCB<X, Y>> = (arg1: A, arg2: B,                            cb: CB) => void
export type AsyncFn3<A, B, C,       X, Y, CB extends AsyncCB<X, Y>> = (arg1: A, arg2: B, arg3: C,                   cb: CB) => void
export type AsyncFn4<A, B, C, D,    X, Y, CB extends AsyncCB<X, Y>> = (arg1: A, arg2: B, arg3: C, arg4: D,          cb: CB) => void
export type AsyncFn5<A, B, C, D, E, X, Y, CB extends AsyncCB<X, Y>> = (arg1: A, arg2: B, arg3: C, arg4: D, arg5: E, cb: CB) => void

export type AsyncFn <A, B, C, D, E, X, Y, CB extends AsyncCB<X, Y>> =
            AsyncFn0<               X, Y, CB> |
            AsyncFn1<A,             X, Y, CB> |
            AsyncFn2<A, B,          X, Y, CB> |
            AsyncFn3<A, B, C,       X, Y, CB> |
            AsyncFn4<A, B, C, D,    X, Y, CB> |
            AsyncFn5<A, B, C, D, E, X, Y, CB>

export function execute0            (fn: AsyncFn0<            void, void, AsyncCB0>                                    ): Promise<undefined>
export function execute0<A>         (fn: AsyncFn1<A,          void, void, AsyncCB0>, arg1: A,                          ): Promise<undefined>
export function execute0<A, B>      (fn: AsyncFn2<A, B,       void, void, AsyncCB0>, arg1: A, arg2: B,                 ): Promise<undefined>
export function execute0<A, B, C>   (fn: AsyncFn3<A, B, C,    void, void, AsyncCB0>, arg1: A, arg2: B, arg3: C,        ): Promise<undefined>
export function execute0<A, B, C, D>(fn: AsyncFn4<A, B, C, D, void, void, AsyncCB0>, arg1: A, arg2: B, arg3: C, arg4: D): Promise<undefined>
export function execute0<A, B, C, D, E, FN extends AsyncFn<A, B, C, D, E, void, void, AsyncCB0>>(fn: FN, ...args: Array<A|B|C|D>): Promise<undefined> {
    return new Promise((resolve, reject) =>
        fn.call(fs, ...args, (error: NodeJS.ErrnoException) =>
            (error) ? reject(error) : resolve(undefined)));
}

export function execute1<            X>(fn: AsyncFn0<            X, void, AsyncCB1<X>>                                    ): Promise<X>
export function execute1<A,          X>(fn: AsyncFn1<A,          X, void, AsyncCB1<X>>, arg1: A                           ): Promise<X>
export function execute1<A, B,       X>(fn: AsyncFn2<A, B,       X, void, AsyncCB1<X>>, arg1: A, arg2: B,                 ): Promise<X>
export function execute1<A, B, C,    X>(fn: AsyncFn3<A, B, C,    X, void, AsyncCB1<X>>, arg1: A, arg2: B, arg3: C         ): Promise<X>
export function execute1<A, B, C, D, X>(fn: AsyncFn4<A, B, C, D, X, void, AsyncCB1<X>>, arg1: A, arg2: B, arg3: C, arg4: D): Promise<X>
export function execute1<A, B, C, D, E, X, FN extends AsyncFn<A, B, C, D, E, X, void, AsyncCB1<X>>>(fn: FN, ...args: Array<A|B|C|D>): Promise<X> {
    return new Promise((resolve, reject) =>
        fn.call(fs, ...args, (error: NodeJS.ErrnoException, argX: X) =>
            (error) ? reject(error) : resolve(argX)));
}

export function execute2<               X, Y, R extends { [sig: string]: X | Y }>(sig1: string, sig2: string, fn: AsyncFn0<               X, Y, AsyncCB2<X, Y>>                                             ): Promise<R>
export function execute2<A,             X, Y, R extends { [sig: string]: X | Y }>(sig1: string, sig2: string, fn: AsyncFn1<A,             X, Y, AsyncCB2<X, Y>>, arg1: A,                                   ): Promise<R>
export function execute2<A, B,          X, Y, R extends { [sig: string]: X | Y }>(sig1: string, sig2: string, fn: AsyncFn2<A, B,          X, Y, AsyncCB2<X, Y>>, arg1: A, arg2: B                           ): Promise<R>
export function execute2<A, B, C,       X, Y, R extends { [sig: string]: X | Y }>(sig1: string, sig2: string, fn: AsyncFn3<A, B, C,       X, Y, AsyncCB2<X, Y>>, arg1: A, arg2: B, arg3: C                  ): Promise<R>
export function execute2<A, B, C, D,    X, Y, R extends { [sig: string]: X | Y }>(sig1: string, sig2: string, fn: AsyncFn4<A, B, C, D,    X, Y, AsyncCB2<X, Y>>, arg1: A, arg2: B, arg3: C, arg4: D         ): Promise<R>
export function execute2<A, B, C, D, E, X, Y, R extends { [sig: string]: X | Y }>(sig1: string, sig2: string, fn: AsyncFn5<A, B, C, D, E, X, Y, AsyncCB2<X, Y>>, arg1: A, arg2: B, arg3: C, arg4: D, arg5: E): Promise<R>
export function execute2<A, B, C, D, E, X, Y, R extends { [sig: string]: X | Y }, FN extends AsyncFn<A, B, C, D, E, X, Y, AsyncCB2<X, Y>>>(sig1: string, sig2: string, fn: FN, ...args: Array<A|B|C|D>): Promise<R> {
    return new Promise((resolve, reject) =>
        fn.call(fs, ...args, (error: NodeJS.ErrnoException, argX: X, argY: Y) =>
            (error) ? reject(error) : resolve({
                [sig1]: argX,
                [sig2]: argY,
            })));
}
