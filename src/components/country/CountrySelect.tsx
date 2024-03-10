import React, { useContext } from "react";
import countries from "i18n-iso-countries";
import { MainContext } from "../../provider/main-context";
import Select from "react-select";
import { CountrySelectOption } from "./CountrySelectOption";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

interface Country {
  code: string;
  name: string;
}

// Props
export interface CountrySelectProps {
  value?: Country;
}

// Constants
export const DEFAULT_COUNTRY = {
  code: "US",
  name: "United States of America",
};

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
}: CountrySelectProps) => {
  const context = useContext(MainContext);

  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = {
    value: context?.newState?.country,
    label: context?.newState?.country.name,
  };

  // Render
  if (!CountrySelectOption) {
    return;
  }
  return (
    <>
      <label>
        Country
        <Select
          options={data}
          components={{ Option: CountrySelectOption }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            console.log({ newVal: newValue?.value });
            context?.setNewState({
              ...context?.newState,
              country: newValue?.value,
            });
            console.log(context?.newState);
          }}
        />
      </label>
    </>
  );
};

export default CountrySelect;
