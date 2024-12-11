import { Events } from '../eventhub/Events.js';
import Service from './Service.js';

export class UserRepositoryService extends Service {
  constructor() {
    super();
    this.dbName = 'userDB';
    this.storeName = 'users';
    this.db = null;

    // Initialize the database
    this.initDB()
      .then(() => {
        // Load tasks on initialization
        this.loadTasksFromDB();
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Initialize database
  async initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = event => {
        const db = event.target.result;
        db.createObjectStore(this.storeName, {
          keyPath: 'id',
          autoIncrement: true,
        });
      };

      request.onsuccess = event => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = event => {
        reject('Error initializing IndexedDB');
      };
    });
  }

  async storeUser(userData) {
    //await this.#toBase64(userData);

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(userData);

      request.onsuccess = () => {
        this.publish(Events.StoreUserSuccess, userData);
        resolve('User stored successfully');
      };

      request.onerror = () => {
        this.publish(Events.StoreUserFailure, userData);
        reject('Error storing user: ');
      };
    });
  }

  async loadUsersFromDB() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = event => {
        const users = event.target.result;
        users.forEach(user => this.publish('NewUser', user));
        resolve(users);
      };

      request.onerror = () => {
        this.publish(Events.LoadUsersFailure);
        reject('Error retrieving users');
      };
    });
  }

  async clearUsers() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.clear();

      request.onsuccess = () => {
        this.publish(Events.UnstoreUsersSuccess);
        resolve('All users cleared');
      };

      request.onerror = () => {
        this.publish(Events.UnstoreUsersFailure);
        reject('Error clearing users');
      };
    });
  }

  addSubscriptions() {
    this.subscribe(Events.StoreUser, data => {
      this.storeUser(data);
    });

    this.subscribe(Events.UnstoreUsers, () => {
      this.clearUsers();
    });
  }
}
