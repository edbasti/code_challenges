import ISO_6391_Languages from "iso-639-1";
import { useContext } from "react";

import Select from "react-select";
import { MainContext } from "../../provider/main-context";

// Props
interface LanguageSelectProps {
  language?: string;
  onChange?: (language: string) => void;
}

// Constants
export const DEFAULT_LANGUAGE = "English - English";

// Component
const LanguageSelect = ({
  language = DEFAULT_LANGUAGE,
}: LanguageSelectProps) => {
  const context = useContext(MainContext);
  // Prepare data
  const data = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
    "es",
  ]).map(({ name, nativeName }) => {
    return {
      value: name + " - " + nativeName,
      label: name + " - " + nativeName,
    };
  });

  const defaultValue = {
    value: context?.newState?.language,
    label: context?.newState?.language,
  };

  // Render
  return (
    <div>
      <label>
        Language
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            context?.setNewState({
              ...context?.newState,
              language: newValue?.value!,
            });
          }}
        />
      </label>
    </div>
  );
};

export default LanguageSelect;
