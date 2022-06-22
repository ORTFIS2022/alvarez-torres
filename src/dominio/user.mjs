export default class user {

    constructor(id) {
      this.id = id;
      this.collection = collection;
    }

    recieve(nft, sender) {
      try{
        this.collection.add(nft);
        sender.collection.remove(nft);
      }catch(error){
        throw new Error("ERROR: La transferencia no ha sido exitosa");
      }
    }

    getCollection() {
      return this.collection.getNFTs();
    }

  }