function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (musicians = 0; musicians < 4; musicians++) {
    arr.push(`${musicians} plays ${instruments} `)
  }
  return arr
}
