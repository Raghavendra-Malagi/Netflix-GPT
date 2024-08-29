import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchPage from "./GptSearchPage";

const GPTsearch = () => {
  return (
    <div>
      {/*GPT search bar and GPT movie suggestion*/}
      <GptSearchPage />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTsearch;
