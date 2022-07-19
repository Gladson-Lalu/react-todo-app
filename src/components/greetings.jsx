import React from "react";

function Greetings() {
  const date = new Date();
  var time = date.getHours();
  var greetings;
  if (time < 12) {
    greetings = "Good morning!";
  }
  if (time > 12) {
    greetings = "Good Afternoon!";
  }
  if (time == 12) {
    greetings = "Go eat lunch!</b>";
  }
  return (
    <div>
      <h1>{greetings}</h1>
    </div>
  );
}

export default Greetings;
