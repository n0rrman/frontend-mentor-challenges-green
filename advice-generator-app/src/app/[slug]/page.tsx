import TipBox from "@/components/tip-box";

interface IdPageProps {
  params: {
    slug: string;
  };
}

export default async function IdPage({ params }: IdPageProps) {
  return <TipBox id={params.slug} />;
}
