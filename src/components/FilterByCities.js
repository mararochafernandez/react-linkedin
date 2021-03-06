const FilterByCities = (props) => {
  const handleChange = (event) => {
    props.handleFilter({
      key: 'location',
      value: event.currentTarget.value,
      checked: event.target.checked,
    });
  };

  const renderCities = () =>
    props.cities.map((city, index) => (
      <label key={index} className="display-block">
        <input
          type="checkbox"
          name="location"
          value={city}
          checked={props.citiesFilter.includes(city)}
          onChange={handleChange}
        />
        {city}
      </label>
    ));

  return (
    <>
      <label className="form__label display-block">Ciudad:</label>
      {renderCities()}
    </>
  );
};

export default FilterByCities;
