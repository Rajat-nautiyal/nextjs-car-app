import { SearchBar,CarListingClient } from "./index";

export const CarCatalogue = async () => {
  return (
    <div className="mt-9 px-10 max-sm:mt-0 max-sm:px-2 mb-4">
      <div className="text-4xl max-sm:text-3xl font-bold">Car Catalogue</div>
      <p className="pt-3 text-lg max-sm:text-[1.1rem] max-sm:pt-2">Explore out cars you might like</p>
        <SearchBar />
        <CarListingClient/>
    </div>
  );
};
