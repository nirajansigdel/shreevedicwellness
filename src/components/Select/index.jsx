import React from "react";
import ReactSelect from "react-select";

function SelectComponent({ dropDownDataClass, onChange }) {
  return (
    <div>
      <ReactSelect
        className="basic-single"
        classNamePrefix="select"
        defaultValue={dropDownDataClass.options[0]}
        isSearchable={true}
        name="color"
        onChange={(e) => onChange(e.id)}
        options={dropDownDataClass.options}
      />
    </div>
  );
}

export default SelectComponent;
