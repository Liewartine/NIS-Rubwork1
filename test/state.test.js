import { go, SS, LS, state } from '../src/state.js'

describe('state', () => {
    beforeEach(() => {
    // 重置相关状态和模拟的存储对象
    state.locale = 0
    state.loading = false
    state.user = null
    state.style = 'DEFAULT'
    state.timer = 0
    state.settle = false
    state.blueLock = true

    SS.getItem.mockReset()
    SS.setItem.mockReset()
    SS.removeItem.mockReset()

    LS.getItem.mockReset()
    LS.setItem.mockReset()
    LS.removeItem.mockReset()
  })

  it('should have correct initial values', () => {
    expect(state.locale).toBe(0)
    expect(state.loading).toBe(false)
    expect(state.user).toBeNull()
    expect(state.style).toBe('DEFAULT')
    expect(state.timer).toBe(0)
    expect(state.settle).toBe(false)
    expect(state.blueLock).toBe(true)
  })

})

describe('go', () => {
  beforeEach(() => {
    // 重置定时器相关的状态
    state.timer = 1000
    state.settle = false
    state.blueLock = true
  })

  it('should not do anything if timer is 0', () => {
    state.timer = 0
    go()
    // 验证相关状态是否保持不变
    expect(state.timer).toBe(0)
    expect(state.settle).toBe(false)
    expect(state.blueLock).toBe(true)
  })

  it('should set settle to true if timer is negative', () => {
    state.timer = -100
    go()
    // 验证相关状态是否正确更新
    expect(state.timer).toBe(0)
    expect(state.settle).toBe(true)
    expect(state.blueLock).toBe(true)
  })
 
})