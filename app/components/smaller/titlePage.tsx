type Props = {
  children: string;
};

export default function TitlePage({ children }: Props) {
  return (
    <h1 className="text-4xl text-white font-bold text-center">{children}</h1>
  );
}
