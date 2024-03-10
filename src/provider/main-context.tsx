import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { DEFAULT_COUNTRY } from "../components/country/CountrySelect";
import { DEFAULT_LANGUAGE } from "../components/language/LanguageSelect";
import { DEFAULT_CURRENCY } from "../components/currency/CurrencySelect";

interface ContextProps {
  children: ReactNode;
}

/*
const useValue = () => {
  const [newState, setNewState] = useState({
    country: DEFAULT_COUNTRY,
    currency: DEFAULT_CURRENCY,
    language: DEFAULT_LANGUAGE,
  });

  return {
    newState,
    setNewState,
  };
};

export const MainContext = React.createContext<>(
  {} as ReturnType<typeof useValue>
);

export const MainContextProvider: React.FC<ContextProps> = ({
  children,
}: ContextProps) => {
  return (
    <MainContext.Provider value={useValue()}>{children}</MainContext.Provider>
  );
}; */

interface ContextProps {
  children: ReactNode;
}

interface Country {
  code: string;
  name: string;
}

interface MainState {
  country: Country;
  currency: string;
  language: string;
}

interface ContextState {
  newState: MainState;
  setNewState: Dispatch<SetStateAction<MainState>>;
}

export const MainContext = createContext<ContextState | undefined>(undefined);

export default function MainContextProvider({ children }: ContextProps) {
  const [newState, setNewState] = useState({
    country: DEFAULT_COUNTRY,
    currency: DEFAULT_CURRENCY,
    language: DEFAULT_LANGUAGE,
  });

  return (
    <MainContext.Provider
      value={{
        newState,
        setNewState,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
