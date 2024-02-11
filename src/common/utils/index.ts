export function update<T>(array: T[], targetIndex: number, value: Partial<T>) {
  return array.map((item, index) => {
    if (index === targetIndex || targetIndex === -1) {
      return {
        ...item,
        ...value,
      };
    }

    return item;
  });
}

export function getRandomCardPairsPack(
  cardPairs: number,
  images: { url: string }[]
) {
  const defaultCard = {
    expended: true,
    matched: false,
    imageSrc: "",
    id: "",
  };

  const cardsPack = new Array(cardPairs)
    .fill(null)
    .map((_, index: number) => {
      const cardPairsId = crypto.randomUUID();

      return [
        {
          ...defaultCard,
          id: cardPairsId,
          imageSrc: images[index].url,
        },
        {
          ...defaultCard,
          id: cardPairsId,
          imageSrc: images[index].url,
        },
      ];
    })
    .flat();

  const shuffled = cardsPack
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}
