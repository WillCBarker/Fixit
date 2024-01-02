import { NewPrompt } from "./components/prompt/prompt";

export default function Home() {

  const initialPrompt = "Ex. My faucet is leaking";

  return (
    <div className="container mx-auto p-4">
      <NewPrompt initialPrompt={initialPrompt} />
    </div>
  );
}
