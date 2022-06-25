import nft from './nft.mjs';
import collection from './collection.mjs';
import user from './user.mjs';

test("Creo un usuario", () => {
    let unUser = new user(1);
    expect(unUser.id).toBe(1);
    expect(unUser.collection.nfts).toEqual([]);
});

test("Creo dos usuarios y uno le envia un NFT al otro", () => {
    let userA = new user(1);
    let userB = new user(2);
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    userA.collection.add(unNFT);
    userB.recieve(unNFT, userA);
    expect(userA.collection.nfts).toEqual([]);
    expect(userB.collection.nfts).toEqual([unNFT]);
});

test("Creo un usuario y pido la colección de NFTs", () => {
    let unUser = new user(1);
    expect(unUser.getCollection()).toEqual([]);
});

test("Creo un usuario, le agrego un NFT y pido la colección de NFTs", () => {
    let unUser = new user(1);
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    unUser.collection.add(unNFT);
    expect(unUser.getCollection()).toEqual([unNFT]);
});

test("Creo dos usuarios y uno envía un NFT que no posee al otro", () => {
    let userA = new user(1);
    let userB = new user(2);
    let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
    expect(() => {
        userA.recieve(unNFT, userB);
    }).toThrow(new Error("ERROR: La transferencia no ha sido exitosa"));
    //Puede tirar el otro error
});