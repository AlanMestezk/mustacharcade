import { Metadata } from "next";
import Image from "next/image";
import { GameCard } from "@/components/gameCard";
import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import { Label } from "./components/label";

// Buscar os dados do jogo
const getData = async (id: string): Promise<GameProps | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Erro ao buscar dados do jogo");
    return res.json();
  } catch (error) {
    console.error(`Erro ao buscar o jogo com ID ${id}:`, error);
    return null;
  }
};

// Buscar jogos recomendados
const getGamesSorted = async (): Promise<GameProps | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar jogo recomendado");
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar jogo recomendado:", error);
    return null;
  }
};

// Corrigir o tipo do parâmetro para ser compatível com Next.js
interface GameDetailProps {
  params: { id: string }; // Garantir que 'params' tem o formato esperado
}

// Componente agora tem um tipo explícito para evitar o erro do Next.js
const GameDetail = async ({ params }: GameDetailProps) => {
  const { id } = params; // Aqui, `params.id` deve ser resolvido corretamente

  // Buscar os dados do jogo e os jogos recomendados
  const data = await getData(id);
  const gameSorted = await getGamesSorted();

  if (!data) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <main className="w-full text-white">
      <Container>
        <div className="bg-clack sm:h-96 h-80 w-700 relative mt-4">
          <Image
            className="max-h-120 object-cover opacity-80"
            sizes="(max-width: 900px) 100vw, (max-width: 1200px) 33vw"
            src={data.image_url}
            alt={data.title}
            priority={true}
            fill={true}
          />
        </div>

        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <strong>{data.description}</strong>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap my-4">
          {data.platforms?.length ? (
            data.platforms.map((item) => <Label name={item} key={item} />)
          ) : (
            <p>Carregando ou sem plataformas...</p>
          )}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap my-4">
          {data.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento: </strong>
          {data.release ? `${data.release}` : `${data.data_release}`}
        </p>

        <h2 className="mt-20 font-bold text-lg mb-2">Jogo recomendado: </h2>

        {gameSorted && (
          <div className="flex">
            <div className="flex-grow">
              <GameCard data={gameSorted} />
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default GameDetail;
