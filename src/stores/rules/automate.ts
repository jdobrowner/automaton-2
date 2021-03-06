import { size } from 'src/constants';

function automate(state, ruleset) {
  // ruleset is a function
  let grid = {};

  // getting the map of grid cells to react key values
  // and having each cell know of its neighbor's states
  for (let m = 0; m < size; m++) {
    for (let n = 0; n < size; n++) {
      const keyDown = `${n}-${m}`;
      const keyUp = `${n}+${m}`;

      let p = n - 1;
      let q = n + 1;
      let P = m - 1;
      let Q = m + 1;
      if (p < 0) p = size - 1;
      if (q >= size) q = 0;
      if (P < 0) P = size - 1;
      if (Q >= size) Q = 0;

      // A is self-reffering
      // B is 2/3 pi
      // D is 4/3 pi
      // C is 2 pi
      // capital is up triangles
      // lowercase is down triangles

      const a = state[keyDown];
      const A = state[keyUp];
      const b = state[`${n}+${P}`];
      const D = state[`${n}-${Q}`];

      let c: number, d: number, B: number, C: number;
      if (m % 2 === 0) {
        c = state[`${p}+${m}`];
        d = A;
        B = state[`${q}-${m}`];
        C = a;
      } else {
        c = A;
        d = state[`${q}+${m}`];
        B = a;
        C = state[`${p}-${m}`];
      }

      grid[keyDown] = ruleset(a, b, c, d);
      grid[keyUp] = ruleset(A, B, C, D);
    }
  }
  return grid;
}

export default automate;
