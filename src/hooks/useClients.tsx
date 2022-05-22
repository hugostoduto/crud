/* eslint-disable react-hooks/exhaustive-deps */
import Client from "../core/Client";
import { useEffect, useState } from "react";
import ClientInterface from "../core/ClientInterface";
import CollectionClients from "../backend/db/CollectionClients";

export default function useClients() {
  const repo: ClientInterface = new CollectionClients();

  const [state, setState] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.void());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAllClients().then((clients) => {
      setClients(clients);
      setState("table");
    });
  }
  function clientSelected(client: Client) {
    setClient(client);
    setState("form");
  }
  async function clientDeleted(client: Client) {
    await repo.deleteClient(client);
    getAll();
  }

  function toTable() {
    setState("table");
  }
  function toForm() {
    setClient(Client.void());
    setState("form");
  }
  async function saveClient(client: Client) {
    await repo.saveClient(client);
    getAll();
  }
  return {
    saveClient,
    clientSelected,
    clientDeleted,
    toTable,
    toForm,
    getAll,
    clients,
    state,
    client,
  };
}
