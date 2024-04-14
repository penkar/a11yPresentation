export const Colors = () => {
  const sharedStyle = {
    alignItems: "center",
    display: "flex",
    fontSize: "32px",
    height: "52px",
    justifyContent: "center",
    paddingBottom: "8px",
    width: "100%",
  };

  const colorPairs = [
    {
      color: "#ffffff",
      backgroundColor: "#212121",
    },
    {
      color: "#ffffff",
      backgroundColor: "#494440",
    },
    {
      color: "#ffffff",
      backgroundColor: "#0071bc",
    },
    {
      color: "#ffffff",
      backgroundColor: "#2e8540",
    },
    {
      color: "#ffffff",
      backgroundColor: "#e31c3d",
    },
    {
      color: "#212121",
      backgroundColor: "#fad980",
    },
    {
      color: "#212121",
      backgroundColor: "#e4e2e0",
    },
    {
      color: "#212121",
      backgroundColor: "#006400",
    },
    {
      color: "#212121",
      backgroundColor: "#fff1d2",
    },
    {
      color: "#504e4e",
      backgroundColor: "#212121",
    },

    {
      color: "#d3c39f",
      backgroundColor: "#fff1d2",
    },
  ];

  return (
    <>
      {colorPairs.map(({ color, backgroundColor }) => (
        <div
          key={`${color}-${backgroundColor}`}
          style={{
            color,
            backgroundColor,
            ...sharedStyle,
          }}
        >
          {`${color} on ${backgroundColor}`}
        </div>
      ))}
    </>
  );
};
