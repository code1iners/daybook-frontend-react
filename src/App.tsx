import { useRecoilValue } from "recoil";
import { helloAtom } from "./stores";

function App() {
  const helloAtomValue = useRecoilValue(helloAtom);
  return <div>{helloAtomValue}</div>;
}

export default App;
