import { createRoot } from "react-dom/client";
import RootProvider from "./providers/root-provider";

createRoot(document.getElementById("root")).render(<RootProvider/>);