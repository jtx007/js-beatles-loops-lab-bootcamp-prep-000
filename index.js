function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (i = 0; i < musicians.length; musicians++) {
    arr.push(`${musicians} plays ${instruments} `)
  }
  return arr
}
