import nft from './nft.mjs';

test('creación de un NFT', () => {
  let unNFT = new nft(1, "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", 100);
  expect(unNFT.id).toBe(1);
  expect(unNFT.image).toBe("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
  expect(unNFT.price).toBe(100);
});