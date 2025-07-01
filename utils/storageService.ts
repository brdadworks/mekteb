import { Storage } from '@ionic/storage';

class StorageService {
  private storage: Storage;
  private isInitialized: boolean = false;
  private initPromise: Promise<void>;

  constructor() {
    this.storage = new Storage({
      name: 'mydb',
      storeName: 'storage',
      // driverOrder: ['indexeddb', 'localstorage', 'sqlite'],
    });

    this.initPromise = this.init();
  }

  async init() {
    console.log("StorageService -> initializing storage");
    try {
      await this.storage.create();
      this.isInitialized = true;
      console.log("StorageService -> storage initialized successfully");
    } catch (error) {
      console.error("StorageService -> initialization error:", error);
      throw error;
    }
  }

  private async ensureInitialized() {
    if (!this.isInitialized) {
      await this.initPromise;
    }
  }

  async setData(key: string, value: any) {
    await this.ensureInitialized();
    console.log(`StorageService -> setting ${key}:`, value);
    await this.storage.set(key, value);
  }

  async getData<T>(key: string): Promise<T | null> {
    await this.ensureInitialized();
    const value = await this.storage.get(key);
    console.log(`StorageService -> getting ${key}:`, value);
    return value;
  }

  async removeData(key: string) {
    await this.ensureInitialized();
    console.log(`StorageService -> removing ${key}`);
    await this.storage.remove(key);
  }

  async clearStorage() {
    await this.ensureInitialized();
    console.log("StorageService -> clearing storage");
    await this.storage.clear();
  }
}

const storageService = new StorageService();
export default storageService;
