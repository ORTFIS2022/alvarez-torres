export default class collection {

  constructor() {
    this.nfts = [];
  }

  agregar(nft) {
    let duplicate = this.nfts.some(m => m.id == nft.id);
    if (!duplicate) {
      this.nfts.push(nft);
    } else {
      throw new Error(`ERROR: No se pudo agregar el NFT, ya posee uno con el id ${nft.id}`);
    }
  }

  getNFTs() {
    return this.nfts;
  }
}