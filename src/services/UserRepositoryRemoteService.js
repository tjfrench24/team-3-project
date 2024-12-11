import Service from "./Service.js";
import { Events } from "../eventhub/Events.js";
import Base64 from "../utility/base64.js";

export class UserRepositoryRemoteService extends Service {
  constructor() {
    super();
    this.#initUsers();
  }

  addSubscriptions() {
    this.subscribe(Events.StoreUser, (data) => {
      this.storeUser(data);
    });

    this.subscribe(Events.UnstoreUsers, () => {
      this.clearUsers();
    });
  }

  // The #initUsers() method is an async method that fetches users from the
  // server. It uses the fetch API to make a GET request to the /v1/tasks
  // endpoint. If the request is successful, it parses the response as JSON and
  // iterates over the tasks, converting the base64 string back to a blob using
  // the Base64.convertBase64ToFile() method. It then publishes a NewUser event
  // with the task data. This method is called in the constructor to initialize
  // the tasks when the service is created.
  async #initUsers() {
    const response = await fetch("/");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    data.users.forEach(async (user) => {
      // Convert the base64 string back to blob
      if (user.file) {
        user.file = Base64.convertBase64ToFile(
          user.file,
          user.mime,
          user.filename
        );
      }

      // Publish the task. This will likely update the UI with the task data.
      // What is cool is that we do not care about the UI here. We just publish
      // the event and let the UI components handle the update or whatever part
      // of this application is interested in the task data.
      this.publish(Events.NewUser, user);
    });
  }

  async storeUser(userData) {
    // Convert the task data to base64 if it has a file
    await this.#toBase64(userData);

    const response = await fetch("/v1/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to store user");
    }

    const data = await response.json();
    return data;
  }

  async #toBase64(userData) {
    // If the task data has a file, we need to convert the file to base64 before
    // storing. We also need to store the mime type and filename separately so
    // that we can convert the base64 string back to a blob when fetched from
    // the server.
    if (userData.file) {
      // Need to store the mime type separately as it is needed when
      // converting back to blob when fetched from the server.
      userData.mime = userData.file.type;
      // Store the filename separately as well
      userData.filename = userData.file.name;
      // Convert the file to base64
      const base64 = await Base64.convertFileToBase64(userData.file);
      userData.file = base64;
    }
  }

  async clearUsers() {
    const response = await fetch("/v1/tasks", {
      method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to clear users");
    }

    // Notify subscribers that tasks have been cleared from the server.
    // This is likely needed to update the UI.
    this.publish(Events.UnstoreUsersSuccess);

    return data;
  }
}
