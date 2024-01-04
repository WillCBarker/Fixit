import { NewPrompt } from "./components/prompt/NewPrompt";

export default function Home() {
  return (
      <main className="flex-grow flex flex-col items-center justify-center">
          <h1 className="mb-20 text-8xl font-bold">FixitLink</h1>
          <NewPrompt />
      </main>
  );
}
