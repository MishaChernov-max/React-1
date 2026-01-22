import "./searchAndFilters.css";
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  sortValue: string;
  setSortValue: (value: string) => void;
}
export function SearchAndFilters({
  searchValue,
  setSearchValue,
  sortValue,
  setSortValue,
}: Props) {
  return (
    <div className="search-filter container">
      <div className="flex">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          className="select"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="default" disabled hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
}
