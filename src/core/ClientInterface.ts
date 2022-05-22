import Client from "./Client";

export default interface ClientInterface {
  saveClient(client: Client): Promise<Client>;
  deleteClient(client: Client): Promise<void>;
  getAllClients(): Promise<Client[]>;
}
