import { Redirect } from "react-router";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  wordsArray,
  startInterval,
  stopInterval,
  index,
  isInterval,
  resetIndex,
}) => {
  console.log(index);
  if (index === wordsArray.length) {
    stopInterval();
    resetIndex();
    return <Redirect to="/" />;
  } else {
    const separatesWords = wordsArray.map((word) => ({
      firstStr: word.slice(0, Math.round((word.length - 1) / 2)),
      middleChar: word[Math.round((word.length - 1) / 2)],
      lastStr: word.slice(Math.round((word.length - 1) / 2) + 1, word.length),
    }));

    return (
      // ajout input range
      <div className="speedReader">
        <div className="speedword">
          <h3>{separatesWords[index].firstStr}</h3>
          {wordsArray[index].length < 3 ? null : (
            <span className="interline">-</span>
          )}
          <h3>{separatesWords[index].middleChar}</h3>
          {wordsArray[index].length < 3 ? null : (
            <span className="interline">-</span>
          )}
          <h3>{separatesWords[index].lastStr}</h3>
        </div>

        <button
          onClick={() =>
            isInterval
              ? stopInterval()
              : index.length
              ? startInterval()
              : startInterval()
          }
        >
          {isInterval ? "Stop" : index ? "Continuer" : "Commencer"}
        </button>
      </div>
    );
  }
};
