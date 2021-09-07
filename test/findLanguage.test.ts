import findLanguage from '../src/parseLanguage/index.js';

describe('findLanguage test cases', () => {
  describe('sr-Cyrl-RS', () => {
    const actual = findLanguage('sr-Cyrl-RS')

    test('name is Serbian [Cyrl.] .RS', () => {
      expect(actual.name).toBe('Serbian [Cyrl.] .RS')
    })
  })

  describe('pt-BR', () => {
    const actual = findLanguage('pt-BR')

    test('name is Português (Brasil)', () => {
      expect(actual.name).toBe('Português (Brasil)')
    })

    test('regionFormatted name is .BR', () => {
      expect(actual.regionFormatted).toBe('.BR')
    })    

    test('internationalLanguageName is Portuguese', () => {
      expect(actual.internationalLanguageName).toBe('Portuguese')
    })    
  })


  describe('fr ', () => {
    const actual = findLanguage('fr')

    test('name is Français', () => {
      expect(actual.name).toBe('Français')
    })

    test('nativeLanguageName name is Français', () => {
      expect(actual.nativeLanguageName).toBe('Français')
    })

    test('internationalLanguageName is French', () => {
      expect(actual.internationalLanguageName).toBe('French')
    })
  })

  describe('de-CH', () => {
    const actual = findLanguage('de-CH')

    test('name is Deutsch (Schweiz)', () => {
      expect(actual.name).toBe('Deutsch (Schweiz)')
    })

    test('regionKey name is CH', () => {
      expect(actual.regionKey).toBe('CH')
    })

    test('regionValue name is Switzerland', () => {
      expect(actual.regionValue).toBe('Switzerland')
    })

    test('internationalLanguageName is German', () => {
      expect(actual.internationalLanguageName).toBe('German')
    })
  })

  describe('fre-CA', () => {
    const actual = findLanguage('fre-CA')

    test('name is Français .CA', () => {
      expect(actual.name).toBe('Français .CA')
    })

    test('regionKey name is CA', () => {
      expect(actual.regionKey).toBe('CA')
    })

    test('regionValue name is Canada', () => {
      expect(actual.regionValue).toBe('Canada')
    })

    test('regionFormatted name is Canada', () => {
      expect(actual.regionFormatted).toBe('.CA')
    })

    test('internationalLanguageName is French', () => {
      expect(actual.internationalLanguageName).toBe('French')
    })
  })
})