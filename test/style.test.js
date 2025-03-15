import { styles } from '../src/utils/style.js'

describe('styles', () => {
  it('should have correct style properties for DEFAULT style', () => {
    const defaultStyle = styles.DEFAULT

    expect(defaultStyle.textColor_light).toBe('text-gray-200')
    expect(defaultStyle.textColor_dark).toBe('text-gray-700')
    expect(defaultStyle.textColor_unavail).toBe('text-gray-500')
    expect(defaultStyle.bgColor_light).toBe('bg-gray-200')
    expect(defaultStyle.bgColor_dark).toBe('bg-gray-700')
    expect(defaultStyle.bgColor_unavail).toBe('bg-gray-100')
    expect(defaultStyle.borderColor_light).toBe('border-gray-200')
    expect(defaultStyle.borderColor_dark).toBe('border-gray-500')
    expect(defaultStyle.borderColor_unavail).toBe('border-gray-300')
    expect(defaultStyle.ringColor).toBe('ring-gray-500/50 hover:ring-gray-500')
  })

  it('should have correct style properties for BLUE style', () => {
    const blueStyle = styles.BLUE

    expect(blueStyle.textColor_light).toBe('text-blue-200')
    expect(blueStyle.textColor_dark).toBe('text-cyan-500')
    expect(blueStyle.textColor_unavail).toBe('text-gray-500')
    expect(blueStyle.bgColor_light).toBe('bg-blue-100')
    expect(blueStyle.bgColor_dark).toBe('bg-blue-500')
    expect(blueStyle.bgColor_unavail).toBe('bg-gray-200')
    expect(blueStyle.borderColor_light).toBe('border-blue-200')
    expect(blueStyle.borderColor_dark).toBe('border-blue-500')
    expect(blueStyle.borderColor_unavail).toBe('border-gray-500')
    expect(blueStyle.ringColor).toBe('ring-cyan-500/50 hover:ring-cyan-500')
  })
})

