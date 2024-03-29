var LOCAL_STORAGE = {};

var _accountKey = 'token-trader.own';

LOCAL_STORAGE.getAccount = function (yourKey) {
    var serializedAccount = localStorage.getItem(_accountKey + yourKey);
    return serializedAccount ? ethClient.Account.deserialize(serializedAccount) : null;
};
LOCAL_STORAGE.getPoolAccount = function (yourKey) {
    var serializedAccount = localStorage.getItem(_accountKey + yourKey);
    return serializedAccount;
};
LOCAL_STORAGE.setAccount = function (_account, yourKey) {
    localStorage.setItem(_accountKey + yourKey, _account.serialize());
};
LOCAL_STORAGE.setPoolAccount = function (pooladdress, yourKey) {
    localStorage.setItem(_accountKey + yourKey, pooladdress);
};
LOCAL_STORAGE.removeAccount = function (yourKey) {
    localStorage.removeItem(_accountKey + yourKey);
};
