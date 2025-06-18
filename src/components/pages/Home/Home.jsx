import Prompt from './Prompt/Prompt';
import Result from './Result/Result';
const Home = () => {

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">
        Let's create a masterpiece, Arif! <span className="text-2xl">👋</span>
      </h2>
      <Prompt />
      <Result />
    </div>
  );
};

export default Home;
