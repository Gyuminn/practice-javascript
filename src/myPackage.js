// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}

// js를 ts 로 보호받게끔 할 수 있다.(당장 js를 ts로 변환시킬 수 없는 경우 등)
// 1. @ts-check 추가
// 2. tsconfig 에서 allowJS 속성 true
// 3. .js 파일에서 type을 추가해줄 수 없지만 JSDoc을 이용해
//    코멘트(@params)를 남김으로써 타입을 보호받도록 할 수 있다.
