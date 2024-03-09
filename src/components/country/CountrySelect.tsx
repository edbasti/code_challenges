import countries from "i18n-iso-countries";
import Select, { MultiValue, SingleValue } from "react-select";
import { CountrySelectOption } from "./CountrySelectOption";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

interface Country {
  code: string;
  name: string;
}
interface CountryOption {
  value: {
    code: string;
    name: string;
  };
  label: string;
}
// Props
interface CountrySelectProps {
  value?: Country;
  onChange?: (
    value: MultiValue<CountryOption> | SingleValue<CountryOption>
  ) => void;
}

// Constants
export const DEFAULT_COUNTRY = {
  code: "US",
  name: "United States of America",
};

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        Country
        <Select
          options={data}
          components={{ Option: CountrySelectOption }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            console.log(newValue);
            onChange?.(newValue?.value);
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
