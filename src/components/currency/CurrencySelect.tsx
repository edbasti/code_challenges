import CurrencyData from "currency-codes/data";
import { useContext } from "react";
import Select from "react-select";
import { MainContext } from "../../provider/main-context";

// Props
interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: string) => void;
}

// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect = ({ value = DEFAULT_CURRENCY }: CurrencySelectProps) => {
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
