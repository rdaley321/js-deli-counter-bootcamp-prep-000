function takeANumber(n, name) {
  n.push(name)
  return `Welcome, ${name}. You are number ${n.length} in line.`;
}

function nowServing(current) {
  if(current.length === 0) {
    return "There is nobody waiting to be served!";
  }
  let nowServing = "";
  nowServing = current[0];
  current.shift();
  return nowServing;
}

function currentLine(current) {
  if(current.length === 0) {
    return "The line is currently empty.";
  }
  let message = "The line is currently: ";
  for(let i=0; i<current.length; i++) {
    message += `${i+1}. ${current[i]} `;
  }
  return message;
}