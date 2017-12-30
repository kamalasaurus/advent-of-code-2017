function checkPhrases(phrases) {

  console.assert((typeof phrases === 'string'), 'phrases is not a string but rather a', (typeof phrases));

  return phrases
    .split('\n')
    .map((phrase) => {
      const wordCounts = phrase
        .split(/\s+/g)
        .reduce((obj, word) => {
          return obj[word] ? obj[word] += 1 : obj[word] = 1, obj;
        }, {});

      return Object.keys(wordCounts)
        .every((key) => wordCounts[key] === 1);
    })
    .reduce(((sum, unique) => unique ? sum + 1 : sum), 0);

}

