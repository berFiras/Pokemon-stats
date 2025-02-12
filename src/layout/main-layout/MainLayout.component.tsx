import PokemonList from "../../components/organisms/pokemon-list/PokemonList.component";

const MainLayout = () => {
  return (
    <div className="flex-grow container mx-auto p-4">
      <PokemonList />
    </div>
  );
};

export default MainLayout;
