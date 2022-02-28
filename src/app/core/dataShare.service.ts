import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class ShareDataService {

    states = {
        "AN": "andaman and nicobar",
        "AP": "andhra pradesh",
        "AR": "arunanchal pradesh",
        "AS": "assam",
        "BR": "bihar",
        "CH": "chandigarh",
        "CT": "chhattisgarh",
        "DL": "nct of delhi",
        "DN": "daman and diu",
        "GA": "goa",
        "GJ": "gujarat",
        "HP": "himachal pradesh",
        "HR": "haryana",
        "JH": "jharkhand",
        "JK": "jammu and kashmir",
        "KA": "karnataka",
        "KL": "kerala",
        "LD": "lakshadweep",
        "MH": "maharashtra",
        "ML": "meghalaya",
        "MN": "manipur",
        "MP": "madhya pradesh",
        "MZ": "mizoram",
        "NL": "nagaland",
        "OR": "odisha",
        "PB": "punjab",
        "PY": "puducherry",
        "RJ": "rajasthan",
        "SK": "sikkim",
        "TG": "telangana",
        "TN": "tamil nadu",
        "TR": "tripura",
        "TT": "india",
        "UP": "uttar pradesh",
        "UT": "uttarakhand",
        "WB": "west bengal"
    }

    cards: any[] = [{
        title: 'Confirmed',
        bgcolor: "rgba(255,7,58,.12549019607843137)",
        bgcolorfill: "rgba(255, 7, 58, 0.44)",
        textcolor: "rgb(255, 7, 58)",
        status: 'confirmed',
        bgtextcolor: "#e23028",
        mapSelected: "#ad150e"
    },
    {
        title: 'Active',
        bgcolor: "rgba(0,123,255,.12549019607843137)",
        textcolor: "rgb(0, 123, 255)",
        bgcolorfill: "rgba(0, 123, 255, 0.44)",
        status: 'active',
        bgtextcolor: "#4c75f2",
        mapSelected: "#1840ba"
    }, {
        title: 'Recovered',
        bgcolor: "rgba(40,167,69,.12549019607843137)",
        textcolor: "rgb(40, 167, 69)",
        bgcolorfill: "rgba(40, 167, 69, 0.44)",
        status: 'recovered',
        bgtextcolor: "#28a745",
        mapSelected: "#1a9937"
    }, {
        title: 'Deceased',
        bgcolor: "rgba(108,117,125,.06274509803921569)",
        bgcolorfill: "rgba(108, 117, 125, 0.44)",
        textcolor: "rgb(108, 117, 125)",
        status: 'deceased',
        bgtextcolor: "#6c757d",
        mapSelected: "#54585c"
    }]

    data = { status: 'active', place: 'india' };

    $subject = new BehaviorSubject(this.data);

    constructor() { }

    sendData(data) {
        this.$subject.next(data);
    }

    getData(): Observable<any> {
        return this.$subject.asObservable();
    }

}