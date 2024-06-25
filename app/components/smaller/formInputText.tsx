type Props = {
  idAttribute: string;
  labelText: string;
  name: string;
  placeholderText: string;
};

export default function FormInputText({
  idAttribute,
  labelText,
  name,
  placeholderText,
}: Props) {
  return (
    <div className="flex flex-col items-start text-2xl font-semibold md:flex-row md:items-center md:gap-16">
      <label htmlFor={idAttribute}>{labelText}:</label>
      <input
        type="text"
        className="text-black max-w-[95%]"
        id={idAttribute}
        name={name}
        placeholder={placeholderText}
      />
    </div>
  );
}
