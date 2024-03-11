import { useContext } from "react";
import Select from "react-select";
import { MainContext } from "../../provider/main-context";

const CurrencyData = require("currency-codes/data");
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect = () => {
  const context = useContext(MainContext);

  // Prepare data
  const data = CurrencyData.map(
    ({ code, currency }: { code: string; currency: string }) => {
      return {
        value: code + " - " + currency,
        label: code + " - " + currency,
      };
    }
  );
  const defaultValue = {
    value: context?.newState?.currency,
    label: context?.newState?.currency,
  };
  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            context?.setNewState({
              ...context?.newState,
              currency: newValue?.value!,
            });
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
