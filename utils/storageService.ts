import { Storage } from '@ionic/storage';

class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = new Storage({
      name: 'mydb',
      storeName: 'storage',
      // driverOrder: ['indexeddb', 'localstorage', 'sqlite'],
    });

    this.init();
  }

  async init() {
    console.log("this.storage", this.storage.create);
    await this.storage.create();
  }

  async setData(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async getData<T>(key: string): Promise<T | null> {
    return await this.storage.get(key);
  }

  async removeData(key: string) {
    await this.storage.remove(key);
  }

  async clearStorage() {
    await this.storage.clear();
  }
}

const storageService = new StorageService();
export default storageService;
