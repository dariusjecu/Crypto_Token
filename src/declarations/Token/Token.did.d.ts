import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'getAccount' : () => Promise<string>,
  'getSymbol' : () => Promise<string>,
  'payOut' : () => Promise<string>,
  'transfer' : (arg_0: string, arg_1: bigint) => Promise<string>,
}
