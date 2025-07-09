import { App } from "./App";
import { hydrate } from "preact-iso";

hydrate(<App />, document.getElementById("app"));
