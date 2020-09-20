require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name recipe situate common include argue swift gentle'; 
let testAccounts = [
"0x1f05b087982fac261eb93a06d7ca6dbd92c95ce2d1e48acf7608e10990e9b08b",
"0x34ffd850dff46d7457ccd9879ef050154b4ab22821d6ac1760f345e845c89c3a",
"0xe3862b3d6b33450734479ac22020efd2926f6355a3c38b6f6e104c10c2c3bf17",
"0xb6cd8e07b23800655086b60b2fd9d42aa25b8741bc6bf247356cbe8412bc961a",
"0x65e65d3155b19513db59005bc7f34bdc2144fd422735145d3f313bf23ef50c33",
"0xf7a52473e2c992b1a679864d547bcbe95316a68e7687d45fc32a6a7843fd3299",
"0xc162b7ab6e9845f759152f6c3307984f1dea27dc3b19efc6300654a453b799a1",
"0x20fcd45f02450ebbb459e6ddc8dd8e9474cc281bbe0ad4ff1eceb81f5df825a4",
"0xe1e5d4c1e7a72683653e9b4c517f3d01270989d4d3a6158c98b92a74a6d799c7",
"0x5d5f8da4853f3024af061511c999b4790839177c53c007d3f97527f5e6d985fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
