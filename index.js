function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (musicians = 0; musicians < 3; musicians++) {
    arr.push(`${musicians} plays ${instruments} `)
  }
  return arr
}
