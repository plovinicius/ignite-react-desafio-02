interface ContentHeaderProps {
  selectedGenre: {
    title: string;
  }
}

export function ContentHeader(props: ContentHeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.selectedGenre.title}</span>
      </span>
    </header>
  );
}
