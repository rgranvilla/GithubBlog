import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { GithubBlogContext } from '../../contexts/GithubBlogContext';
import { SearchContainer, SearchInput } from './Search.styles';

const searchFormSchema = z.object({
  searchBy: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function Search() {
  const { searchIssues, posts } = useContext(GithubBlogContext);

  const numbersOfIssues = posts.length;

  const formatedIssuesPublished = () => {
    switch (numbersOfIssues) {
      case 0:
        return 'nenhuma publicação encontrada';
      case 1:
        return '1 publicação';
      default:
        return `${numbersOfIssues} publicações`;
    }
  };

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchIssues({ searchBy }: SearchFormInputs) {
    searchIssues(searchBy);
  }

  return (
    <SearchContainer>
      <header>
        <h2>Publicações</h2>
        <span>{formatedIssuesPublished()} </span>
      </header>

      <form action="" onSubmit={handleSubmit(handleSearchIssues)}>
        <SearchInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register('searchBy')}
        />
      </form>
    </SearchContainer>
  );
}

export { Search };
