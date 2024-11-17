import { Events } from '../eventhub/Events.js';  
import Service from './Service.js';

export class FitnessProfileRepositoryService extends Service {
  constructor() {
    super();
    this.dbName = 'fitnessProfileDB';
    this.storeName = 'profileStore';
    this.db = null;

    // Initialize the database and load the profile on startup
    this.initDB()
      .then(() => {
        this.loadFitnessProfileFromDB();
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Initialize the IndexedDB
  async initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
          store.createIndex('id', 'id', { unique: true });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        reject('Error initializing IndexedDB');
      };
    });
  }

  // Save fitness profile to the database
  async saveFitnessProfile(profileData) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put(profileData); 

      request.onsuccess = () => {
        this.publish(Events.FitnessProfileSaved, profileData);  
        resolve('Profile saved successfully');
      };

      request.onerror = () => {
        this.publish(Events.FitnessProfileSaved, profileData);  
        reject('Error saving profile');
      };
    });
  }

  // Load fitness profile from the database
  async loadFitnessProfileFromDB() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll(); 

      request.onsuccess = (event) => {
        const profileData = event.target.result[0]; 
          this.publish(Events.FitnessProfileLoaded, profileData);  
          resolve(profileData);
      };

      request.onerror = (event) => {
        this.publish(Events.FitnessProfileLoaded, null);  
        reject('Error loading profile');
      };
    });
  }

  addSubscriptions() {
    this.subscribe(Events.SaveFitnessProfile, data => {
      this.saveFitnessProfile(data);
    });
    this.subscribe(Events.LoadFitnessProfile, () => {
      this.loadFitnessProfileFromDB();
    });
  }
}

// Export the service
export const fitnessProfileService = new FitnessProfileRepositoryService();