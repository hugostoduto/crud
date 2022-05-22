import Input from "./Input";
import Client from "../core/Client";
import { useState } from "react";
import Button from "./Button";

interface FormProps {
  client: Client;
}
export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id ? <Input className="mb-4" text="Id" readOnly value="Id" /> : false}

      <Input className="mb-4" changeValue={setName} text="Nome" value={name} />
      <Input changeValue={setAge} text="Idade" type="number" value={age} />
      <div className="mt-3 flex justify-end">
        <Button className="mr-2" color="blue">
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button>Cancelar</Button>
      </div>
    </div>
  );
}
