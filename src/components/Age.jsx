import moment from 'moment'

export function Age({birthdate}) {
    const birthday = new Date(birthdate)
    //solution matheuse
        //const today = Date.now()
        //const difference = parseInt((today-birthday)/(1000*3600*24*365.25))
    //solution j'appelle un ami, installation de moment.js
    const age = moment(birthday, "YYYYMMDD").fromNow()
    
    return <span>{parseInt(age)}</span>
}