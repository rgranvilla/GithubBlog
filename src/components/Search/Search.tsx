import { SearchContainer, SearchInput } from './Search.styles';

function Search() {
  return (
    <SearchContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>

      <form action="">
        <SearchInput type="search" placeholder="Buscar conteúdo" />
      </form>
    </SearchContainer>
  );
}

export { Search };
