// code your solution here

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" }
]

function superbowlWin(arrayOfObjs) {
  const sadly = arrayOfObjs.find(({ result }) => result === "W");
  console.log(sadly);
  if (sadly === undefined) {
    return sadly
  } else {
    console.log(sadly.year)
    return sadly.year
  }
}
superbowlWin(record);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find