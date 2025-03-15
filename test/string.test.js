import { T, I, IT, random } from '../src/utils/string.js'
import state from '../src/state.js'

describe('T', () => {
  it('should replace template placeholders with data', () => {
    const template = 'Hello, {{ name }}!'
    const data = { name: 'John' }

    const result = T(template, data)

    expect(result).toBe('Hello, John!')
  })

  it('should replace multiple template placeholders with data', () => {
    const template = 'My name is {{ name }} and I am {{ age }} years old.'
    const data = { name: 'Alice', age: 25 }

    const result = T(template, data)

    expect(result).toBe('My name is Alice and I am 25 years old.')
  })
})

describe('I', () => {
  it('should select correct language choice for template', () => {
    state.locale = 0 // English

    const template = '[[Hello|Bonjour]]'

    const result = I(template)

    expect(result).toBe('Hello')

    state.locale = 1 // French

    const result2 = I(template)

    expect(result2).toBe('Bonjour')
  })

  it('should handle missing language choices and fallback to default', () => {
    state.locale = 0 // English

    const template = '[[Hello|]]'

    const result = I(template)

    expect(result).toBe('Hello')

    state.locale = 1 // French

    const result2 = I(template)

    expect(result2).toBe('')
  })
})

describe('IT', () => {
  it('should replace template placeholders with data and select correct language choice', () => {
    state.locale = 0 // English

    const template = 'My name is {{ name }} and I speak [[English|French]].'
    const data = { name: 'Alice' }

    const result = IT(template, data)

    expect(result).toBe('My name is Alice and I speak English.')

    state.locale = 1 // French

    const result2 = IT(template, data)

    expect(result2).toBe('My name is Alice and I speak French.')
  })
})

describe('random', () => {
  it('should generate a random string', () => {
    const result = random()

    expect(typeof result).toBe('string')
    expect(result.length).toBe(20)
  })
})

