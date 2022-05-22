interface InputsProps {
  text: string;
  type?: "text" | "number";
  value: any;
  readOnly?: boolean;
  changeValue?: (value: any) => void;
  className?: string;
}
export default function Inputs(props: InputsProps) {
  return (
    <div
      className={`
       flex flex-col
       ${props.className}
    
    `}
    >
      <label className="mb-2">{props.text}</label>
      <input
        className={`
          border border-blue-500 rounded-lg focus:outline-none
          bg-gray-100 px-4 py-2
         ${props.readOnly ? "" : "focus:bg-white"}

        `}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        onChange={(e) => props.changeValue?.(e.target.value)}
      />
    </div>
  );
}
