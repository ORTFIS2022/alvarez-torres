import nft from './nft.mjs';
import collection from './collection.mjs';

test("Creo una colección de NFTs", () => {
    let col = new collection();
    expect(col.nfts).toEqual([]);
});

test("Creo una colección de NFTs y agrego un NFT", () => {
    let col = new collection();
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    col.add(unNFT);
    expect(col.nfts).toEqual([unNFT]);
});

test("Creo una colección de NFTs y agrego un NFT, pido la colección", () => {
    let col = new collection();
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    col.add(unNFT);
    expect(col.getNFTs()).toEqual([unNFT]);
});

test("Creo una colección de NFTs y agrego un NFT y lo elimino", () => {
    let col = new collection();
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    col.add(unNFT);
    col.remove(unNFT);
    expect(col.nfts).toEqual([]);
});

test("Creo una colección de NFTs e intento agregar un NFT duplicado", () => {
    let col = new collection();
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    col.add(unNFT);
    expect(() => {
        col.add(unNFT);
    }).toThrow(new Error("ERROR: No se pudo agregar el NFT, ya posee uno con el id 1"));
});

test("Creo una colección de NFTs e intento eliminar un NFT que no existe", () => {
    let col = new collection();
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    expect(() => {
        col.remove(unNFT);
    }).toThrow(new Error("ERROR: No se pudo eliminar el NFT, no se posee uno con el id 1"));
});