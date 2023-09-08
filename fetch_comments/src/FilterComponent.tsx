import { Filter } from "./App";

interface ToFilter {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const FilterComponent = ({ filter, setFilter }: ToFilter) => {
  // console.log("filter", filter);

  return (
    <article
      style={{
        boxShadow: "3px 3px 10px red, yellow -3px 3px 10px, 3px -3px 10px",
        color: "orange",
      }}
    >
      <p style={{ textAlign: "center" }}>
        <i>*Finde what you looking for:*</i>
      </p>
      <label>
        By Title:
        <input
          value={filter.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFilter({ ...filter, title: e.target.value });
          }}
          type="search"
          placeholder="filter title"
          id="title"
        />
      </label>
      <label>
        By Body:
        <input
          value={filter.body}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFilter({ ...filter, body: e.target.value });
          }}
          type="search"
          placeholder="filter body"
          id="body"
        />
      </label>
    </article>
  );
};
