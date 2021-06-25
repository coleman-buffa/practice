function alphabeticShift(inputString) {
  let crazyString = '';
  for (let i = 0; i < inputString.length; i++) {
      switch (inputString[i]) {
          case 'a':
              crazyString += 'b';
              break;
          case 'b':
              crazyString += 'c';
              break;
          case 'c':
              crazyString += 'd';
              break;
          case 'd':
              crazyString += 'e';
              break;
          case 'e':
              crazyString += 'f';
              break;
          case 'f':
              crazyString += 'g';
              break;
          case 'g':
              crazyString += 'h';
              break;
          case 'h':
              crazyString += 'i';
              break;
          case 'i':
              crazyString += 'j';
              break;
          case 'j':
              crazyString += 'k';
              break;
          case 'k':
              crazyString += 'l';
              break;
          case 'l':
              crazyString += 'm';
              break;
          case 'm':
              crazyString += 'n';
              break;
          case 'n':
              crazyString += 'o';
              break;
          case 'o':
              crazyString += 'p';
              break;
          case 'p':
              crazyString += 'q';
              break;
          case 'q':
              crazyString += 'r';
              break;
          case 'r':
              crazyString += 's';
              break;
          case 's':
              crazyString += 't';
              break;
          case 't':
              crazyString += 'u';
              break;
          case 'u':
              crazyString += 'v';
              break;
          case 'v':
              crazyString += 'w';
              break;
          case 'w':
              crazyString += 'x';
              break;
          case 'x':
              crazyString += 'y';
              break;
          case 'y':
              crazyString += 'z';
              break;
          case 'z':
              crazyString += 'a';                   
              break;
      }
  }
  console.log(crazyString);
}


alphabeticShift("crazy");