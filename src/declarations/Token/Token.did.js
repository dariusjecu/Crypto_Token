export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getAccount' : IDL.Func([], [IDL.Text], []),
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'payOut' : IDL.Func([], [IDL.Text], []),
    'transfer' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
