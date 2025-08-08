type Params = {
  params: Promise<
  {slug: string} 
  >;
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${(await params).slug}` };
}

export default async function Page({ params }: Params) {
  return <h1>Slug: {(await params).slug}</h1>;
}
