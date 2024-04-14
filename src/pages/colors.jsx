export const Colors = () => {
  const colorPairs = [
    {
      color: "#FFFFFFF",
      backgroundColor: "#494440",
    },
    {
      color: "#FFFFFFF",
      backgroundColor: "#0071BC",
    },
    {
      color: "#FFFFFFF",
      backgroundColor: "#2E8540",
    },
    {
      color: "#FFFFFFF",
      backgroundColor: "#E31C3D",
    },
    {
      color: "#212121",
      backgroundColor: "#FAD980",
    },
    {
      color: "#212121",
      backgroundColor: "#E4E2E0",
    },
    {
      color: "#212121",
      backgroundColor: "#006400",
    },
    {
      color: "#212121",
      backgroundColor: "#FFF1D2",
    },
    {
      color: "#504E4E",
      backgroundColor: "#212121",
    },

    {
      color: "#D3C39F",
      backgroundColor: "#FFF1E2",
    },
    {
      color: "#FFFFFFF",
      backgroundColor: "#212121",
    },
  ];

  return (
    <>
      {colorPairs.map(({ color, backgroundColor }) => (
        <div
          className="color-row"
          key={`${color}-${backgroundColor}`}
          style={{
            color,
            backgroundColor,
          }}
        >
          {`${color} on ${backgroundColor}`}
        </div>
      ))}
    </>
  );
};
