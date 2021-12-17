import { FC } from "react";

type GreetingsProps = {
  name: string;
  onSendWaves?: (waves: string) => void;
};

const Greetings: FC<GreetingsProps> = ({ name, onSendWaves }) => {
  return (
    <div>
      <p>Hello {name}</p>
      {!!onSendWaves && (
        <button
          type="button"
          onClick={() => onSendWaves(`Waves sent to ${name}`)}
        >
          Send 👋
        </button>
      )}
    </div>
  );
};

export default Greetings;
