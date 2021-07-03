class TimeSequence {

  constructor() {
    this.times = []
  }

  push = (value) => {
    const count = this.times.length
    if (count === 0) {
      this.times.push(value)
      return 0
    } else {
      let tailIndex = count - 1
      let tail = this.times[tailIndex]

      if (tail === value) {
        return count - 1 
      } else {
        this.times.push(value)
        return count
      }
    }
  }

  transform = () => {
    return this.times.map(parseFloat)
  }
}

module.exports = { TimeSequence }