import { NewPrompt } from "./components/prompt/NewPrompt";

export default function Home() {

  const initialPrompt = "Ex. My faucet is leaking";

  return (
      <main className="flex-grow flex flex-col items-center justify-center">
          <h1 className="mb-4 text-8xl mb-20 font-bold">FixitLink</h1>
          <NewPrompt />
      </main>
  );
}
