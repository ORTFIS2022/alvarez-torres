export default class collection {

  constructor() {
    this.nfts = [];
  }

  add(nft) {
    let duplicate = this.nfts.some(m => m.id == nft.id);
    if (!duplicate) {
      this.nfts.push(nft);
    } else {
      throw new Error(`ERROR: No se pudo agregar el NFT, ya posee uno con el id ${nft.id}`);
    }
  }

  remove(nft) {
    let index = this.nfts.findIndex(m => m.id == nft.id);
    if (index > -1) {
      this.nfts.splice(index, 1);
    } else {
      throw new Error(`ERROR: No se pudo eliminar el NFT, no se posee uno con el id ${nft.id}`);
    }
  }

  getNFTs() {
    return this.nfts;
  }

}