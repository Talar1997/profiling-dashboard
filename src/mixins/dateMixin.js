import moment from 'moment'

export const dateMixin = {
    data() {
        return {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    },
    methods: {
        toClearDate(date) {
            if(!date) return "N/A"
            let newDate = moment(new Date(date))
            return newDate.format('DD/MM/YYYY')
        },

        toClearHour(date) {
            let newDate = moment(new Date(date))
            newDate.add(-1, 'h')
            return newDate.format('HH:mm')
        },

        toClearDatePrecise(date){
            let newDate = new Date(date)
            let newDateMoment = moment(newDate)
            const day = this.days[newDate.getDay()]
            newDateMoment.add(-1, 'h')
            return `${this.toClearDate(newDate)} (${day}) ${newDateMoment.format('HH:mm:ss')}`;
        },

        toClearDayName(date) {
            let newDate = new Date(date)
            return this.days[newDate.getDay()] + ", hour: " + this.toClearHour(date)
        },

        compareDates(date1, date2){
            const compareDateFormat = 'DDMMYYYY'
            return moment(date1).format(compareDateFormat) === moment(date2).format(compareDateFormat)
        },

        computeDate(week, subject) {
            let subjectDate = moment(new Date(subject))
            const weeks = (week - 1) * 7;
            subjectDate.add(weeks, 'd')
            return subjectDate;
        },
    },
}