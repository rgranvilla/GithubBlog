import { PostCardContainer } from './PostCard.styles';

function PostCard() {
  const content = `Programming languages all have built-in data structures, but 
  these often differ from one language to another. This article attempts to list 
  the built-in data structures available in JavaScript and what properties they have.
  These can be used to build other data structures. Wherever possible, comparisons 
  with other languages are drawn.`;

  const previewContent = content.slice(0, 187);
  return (
    <PostCardContainer>
      <header>
        <h2>Javascript data types and data structures</h2>
        <span>Há 1 dia</span>
      </header>

      <main>
        <p className="previewContent">{previewContent}...</p>
      </main>
    </PostCardContainer>
  );
}

export { PostCard };
