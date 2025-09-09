import { runObserver } from "./observer";
import { runAdapter } from "./adapter";
import { runSingleton } from "./singleton";
import { runFactory } from "./factory";


(
  async () => {
    console.log("---------Observer Pattern:---------");
    await runObserver();
    console.log("---------Adapter Pattern:---------");
    await runAdapter();
    console.log("---------Singleton Pattern:---------");
    await runSingleton();
    console.log("---------Factory Pattern:---------");
    await runFactory();
  }
)();