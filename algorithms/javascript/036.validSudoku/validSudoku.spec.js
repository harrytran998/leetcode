import 'babel-polyfill'
import { isValidSudoku } from './validSudoku'

describe('isValidSudoku', function () {
  it('isValidSudoku test case 1', function () {
    const board = [
      ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
      ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
      ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
      ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    ]
    expect(isValidSudoku(board)).toBe(false)
  })
  it('isValidSudoku test case 2', function () {
    const board = [
      ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
      ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['9', '.', '.', '.', '.', '.', '.', '.', '.']
    ]
    expect(isValidSudoku(board)).toBe(true)
  })
  it('isValidSudoku test case 3', function () {
    const board = [
      ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
      ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
      ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
      ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
      ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
      ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
      ['.', '.', '4', '.', '.', '.', '.', '.', '.']
    ]
    expect(isValidSudoku(board)).toBe(false)
  })
})
