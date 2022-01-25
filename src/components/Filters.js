import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByCities from './FilterByCities';

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName
          nameFilter={props.nameFilter}
          handleFilter={props.handleFilter}
        />

        <FilterByGender
          genderFilter={props.genderFilter}
          handleFilter={props.handleFilter}
        />

        <FilterByCities
          citiesFilter={props.citiesFilter}
          cities={props.cities}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
