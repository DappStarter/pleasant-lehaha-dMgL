require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember million half area blue gas'; 
let testAccounts = [
"0x0222f36ca8d1a9f201fa7041d422c397f4a68175194207f9e35977b75a29047e",
"0x8e3edf9571180532a26bba1b346f0663fbff0279cb723f1752f0eef81c1bf9cb",
"0x194d6b80afde15319c2c5ece9bceb0d14a6843dd83e4b9a230a01538b216d8d9",
"0x3f17244d947634177306c5a46f3e5db30275d14c85afcc275d72f9282ce73260",
"0x6aba324d7a0576d7bc9ad443a52ce4c9f400d8fea5805c459bd8fffc1fe3d845",
"0xeebf635b60640c39e218b50c18c2e421c8351db2544507d1cf7410fa33089b7e",
"0x5a269dc48c7b1042f6867339e80587a544e0b85d11c2e28894ac63d31797fab5",
"0xc521292261a7ab9c6b8231b06742fa1c355fd99d7197c052ec7b48ffdd31fbd9",
"0x2f44c585fb7f108b4d6d199d4bf56aeaff6aa67940e0c1048d47871c7afbcbf6",
"0x8fffd7842a34abb22b66e3406e492710ca4ab92886fa6a4e81f2c4d65675d4d4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


