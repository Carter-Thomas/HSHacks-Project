import { Timestamp } from 'firebase/firestore'

export class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }
}

export class Period {
    constructor(name, start, end) {
        this.name = name;

        this.start = new Date();
        this.start.setHours(start.hour, start.minute, 0);

        this.end = new Date()
        this.end.setHours(end.hour, end.minute, 0);
    }
}

export class Session {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.available = true;
    }

    book() {
        this.available = false;
    }

    toPeriod() {
        const PERIODS = [
            new Period('Period 1', new Time(8, 30), new Time(9, 50)),
            new Period('Period 2', new Time(9, 55), new Time(11, 20)),
            new Period('Period 3', new Time(11, 25), new Time(13, 35)),
            new Period('Period 4', new Time(13, 40), new Time(15, 0)),
        ];

        const start = new Date(Date.now());
        start.setHours(this.start.getHours(), this.start.getMinutes(), 0);

        const end = new Date(Date.now());
        end.setHours(this.end.getHours(), this.end.getMinutes(), 0);

        for (const period of PERIODS) {
            if (start >= period.start && end <= period.end) {
                return period;
            }
        }
    }

    toObject() {
        return {
            start: Timestamp.fromDate(this.start),
            end: Timestamp.fromDate(this.end),
            available: this.available,
        };
    }
}
