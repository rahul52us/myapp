import React, { useState } from 'react';
import SelectFilter from './SelectFilter';
import PropTypes from 'prop-types';

const StandardFilter = ({ selectedFilterValue, setSelectedFilterValue, options }) => {

  const [selectedKey, setSelectedKey] = useState(
    options.filter((item) => item.value === selectedFilterValue.standard)
  );

  const handleSelectedKey = (e) => {
    setSelectedKey([e])
    setSelectedFilterValue({
      ...selectedFilterValue,
      standard: e.value,
    });
  };

  return (
    <SelectFilter
      options={options}
      selectKey={selectedKey}
      handleSelectedKey={handleSelectedKey}
      isMulti={false}
      isClearable={false}
    />
  );
};

StandardFilter.propTypes = {
  selectedFilterValue: PropTypes.object.isRequired,
  setSelectedFilterValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default StandardFilter;
