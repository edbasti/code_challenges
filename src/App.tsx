import MainContextProvider from "./provider/main-context";

import SettingsSelector from "./components/settings/SettingsSelector";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <MainContextProvider>
      <SettingsSelector />
    </MainContextProvider>
  );
}

export default App;
