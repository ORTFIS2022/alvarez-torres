import nft from './nft.mjs';
import collection from './collection.mjs';
import user from './user.mjs';
import system from './system.mjs';

test("Creo un sitema", () => {
    let unSystem = new system();
    expect(unSystem.users).toEqual([]);
});

test("Creo un sitema y agrego un usuario", () => {
    let unSistema = new system();
    unSistema.addUser(1);
    expect(unSistema.users[0].id).toBe(1);
});