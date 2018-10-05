const letterGrade = (mark, course_pass) => {
    mark = parseFloat(mark.toFixed(1));

    if (mark < course_pass) return 'F';
    if (mark < 40) return 'E';
    if (mark < 50) return 'D';
    if (mark < 55) return 'C-';
    if (mark < 60) return 'C';
    if (mark < 65) return 'C+';
    if (mark < 70) return 'B-';
    if (mark < 75) return 'B';
    if (mark < 80) return 'B+';
    if (mark < 85) return 'A-';
    if (mark < 90) return 'A';
    return 'A+';
}

const gpaValue = (letter) => {
    switch (letter) {
        case 'E':  return '-1';
        case 'D':  return '+0';
        case 'C-': return '+1';
        case 'C':  return '+2';
        case 'C+': return '+3';
        case 'B-': return '+4';
        case 'B':  return '+5';
        case 'B+': return '+6';
        case 'A-': return '+7';
        case 'A':  return '+8';
        case 'A+': return '+9';

        case 'R': return '+1';
        case 'X': return '-3';

        default: return 'n/a';
    }
}

function letterColour(letter) {
  switch (letter) {
      case 'F':
      case 'X':
      case 'E':
          return 'red lighten-1';
      case 'R':
      case 'D':
          return 'orange lighten-1';
      case 'C-':
      case 'C':
      case 'C+':
          return 'light-blue darken-1';
      case 'B-':
      case 'B':
      case 'B+':
          return 'cyan';
      case 'A-':
      case 'A':
      case 'A+':
          return 'green acccent-2';
      default:
        return 'white';
  }
}

export { letterGrade, gpaValue, letterColour };