export const actionButtons = [
    {
      id: 10,
      value: "-"
    },
    {
      id: 11,
      value: "+"
    },
    {
      id: 12,
      value: "C"
    },
    {
      id: 13,
      value: "*"
    },
    {
      id: 14,
      value: "/"
    }, {
      id: 15,
      value: "="
    },
 

  ];
  
  const numberButtons = [...Array(9)].map((item, index) => ({
    id: index + 1,
    value: index + 1
  }));
  
  export default [...numberButtons, ...actionButtons];
  