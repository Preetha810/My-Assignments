const browserVersion = "Chrome";

// Version 1: using var
function getBrowserVersionWithVar() {
  if (browserVersion === "Chrome") {
    var browserVersion = "Chrome 129";
  }
  console.log("var - Outside block:", browserVersion);
}

// Version 2: using let
function getBrowserVersionWithLet() {
  if (browserVersion === "Chrome") {
    let browserVersion = "Chrome 129";
    console.log("let - Inside block:", browserVersion);
  }
  console.log("let - Outside block:", browserVersion);
}

getBrowserVersionWithVar();
getBrowserVersionWithLet();
console.log("Global:", browserVersion);