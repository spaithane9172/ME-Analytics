export const goldPriceData = {
  labels: [
    "Aug 24",
    "Aug 25",
    "Aug 26",
    "Aug 27",
    "Aug 28",
    "Aug 29",
    "Aug 30",
  ],
  datasets: [
    {
      label: "Gold Price (INR)",
      data: [1975.3, 1982.1, 1990.4, 1987.2, 2001.6, 2007.8, 2004.5],
      borderColor: "rgba(255, 215, 0, 1)", // gold color
      backgroundColor: "rgba(255, 215, 0, 0.3)",
      tension: 0.3, // smooth curve
      fill: true,
    },
  ],
};
