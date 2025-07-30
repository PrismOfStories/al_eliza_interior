interface Props {
  data: string;
}

export default function JsonLd({ data }: Props) {
  if (data === undefined) {
    return null;
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
