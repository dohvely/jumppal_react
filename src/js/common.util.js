/**
 * date를 MMDD 문자열로 (with format)
 * @param {Date} date 
 * @param {String} format 
 * @returns 
 */
function dateToMMDDWithFormat({ date, format }) {

  date = date ?? new Date()
  format = format ?? '.'

  let mm = date.getMonth()+1
  let dd = date.getDate()

  return `${mm.toString().padStart(2, '0')}${format}${dd.toString().padStart(2, '0')}`
}

function dateToMMDDKoreanFormat({ date }) {

  date = date ?? new Date()

  let mm = date.getMonth()+1
  let dd = date.getDate()

  return `${mm.toString().padStart(2, '0')}월${dd.toString().padStart(2, '0')}일`
}



export default {
  dateToMMDDWithFormat,
  dateToMMDDKoreanFormat,
}