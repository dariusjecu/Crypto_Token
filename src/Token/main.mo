import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor Token {
  var owner : Principal = Principal.fromText("bxnwh-o3g6r-qfxaw-flgjf-alg2l-ta4kq-eycz4-4twsm-cphfc-fpvsj-sae");
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "DARK";

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  balances.put(owner, totalSupply);

  public query func balanceOf(who : Principal) : async Nat {

    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };

    return balance;
  };

  public query func getSymbol() : async Text {
    return symbol;
  };

  public shared (msg) func getAccount() : async Text {
    var account : Text = Principal.toText(msg.caller);
    return account;
  };

  public shared (msg) func payOut() : async Text {
    if (balances.get(msg.caller) == null) {
      let amount = 1000;
      totalSupply := totalSupply - amount;
      balances.put(owner, totalSupply);
      balances.put(msg.caller, amount);
      Debug.print(debug_show (msg.caller));
      return "Tokens claimed";
    } else {
      return "Already claimed";
    };
  };

  public shared (msg) func transfer(who : Text, amount : Nat) : async Text {
    if (who != Principal.toText(msg.caller)) {
      var account = Principal.fromText(who);
      var tokens_send : Nat = switch (balances.get(account)) {
        case null 0;
        case (?result) result;
      };
      var tokens_sender : Nat = switch (balances.get(msg.caller)) {
        case null 0;
        case (?result) result;
      };
      Debug.print(debug_show (tokens_sender));
      Debug.print(debug_show (amount));
      if (tokens_sender - amount : Int >= 0) {
        tokens_sender := tokens_sender - amount;
        tokens_send := tokens_send + amount;
        balances.put(msg.caller, tokens_sender);
        balances.put(account, tokens_send);
        return "Success";
      } else {
        return "You do not have enough tokens";
      };
    } else {
      return "You can not send to this account";
    };
  };
};
