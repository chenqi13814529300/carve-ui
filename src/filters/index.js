// import constant from '@/constant/index'
// import moment from 'moment'
const mobilePhoneFilter = (value) => {
  if (value) { return value.slice(0, 3) + '****' + value.slice(value.length - 4) }
}
const percentageFilter = (num) => {
  let str = Number(num * 100).toFixed(2)
  str += '%'
  return str
}



export default {
  mobilePhoneFilter,
  percentageFilter,

}
