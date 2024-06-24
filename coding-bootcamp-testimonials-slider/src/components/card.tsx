interface CardProps {
  name: string;
  title: string;
  review: string;
}

export default function Card({ name, title, review }: CardProps) {
  return (
    <div>
      <p>{review}</p>
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
}
