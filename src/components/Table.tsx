import Client from "../core/Client";
import { IconEdit, IconDelete } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.clientDeleted || props.clientSelected;

  function Header() {
    return (
      <tr>
        <th className="text-left p-4">Código </th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">idade</th>
        {showActions ? <th className="text-center p-4">Ações</th> : false}
      </tr>
    );
  }
  function Data() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`
          ${i % 2 === 0 ? "bg-blue-300" : "bg-blue-200"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? Actions(client) : false}
        </tr>
      );
    });
  }
  function Actions(client: Client) {
    return (
      <td className="flex justify-center ">
        {props.clientSelected ? (
          <button
            onClick={() => props.clientSelected?.(client)}
            className={`
          flex items-center justify-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-blue-50
          
        `}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}

        {props.clientDeleted ? (
          <button
            onClick={() => props.clientDeleted?.(client)}
            className={`
          flex items-center justify-center
          text-red-400 rounded-full p-2 m-1
          hover:bg-blue-50
        `}
          >
            {IconDelete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden ">
      <thead
        className={`
        bg-gradient-to-r from-blue-500 to-blue-700
        text-gray-100

        `}
      >
        {Header()}
      </thead>
      <tbody>{Data()}</tbody>
    </table>
  );
}
