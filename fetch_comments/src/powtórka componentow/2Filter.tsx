import { TFilter } from "./2App";

interface ToFilter {
  filter: TFilter;
  setFilter: React.Dispatch<React.SetStateAction<TFilter>>;
}

export const Filter2 = ({ filter, setFilter }: ToFilter) => {
  return (
    <div>
      <input
        type="search"
        id="title"
        placeholder="filtruj po tytule"
        value={filter.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFilter({ ...filter, title: e.target.value });
        }}
      />
      <input
        type="search"
        id="body"
        placeholder="filtruj po treści"
        value={filter.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFilter({ ...filter, body: e.target.value });
        }}
      />
    </div>
  );
};
