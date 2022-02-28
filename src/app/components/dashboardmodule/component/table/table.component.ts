import { Component, Input, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { ShareDataService } from 'src/app/core/dataShare.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() mapdata: any;
  @Input() status: any;
  @Input() states: any;

  tableData: any[] = [];

  constructor(private baseservice: BaseService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.getData().subscribe((res) => {
      this.status = res;
      this.tableData = [];
      this.manageData();
    })
  }

  manageData() {
    Object.keys(this.mapdata).forEach((res) => {
      let total = this.mapdata[res].total;
      let delta = this.mapdata[res].delta;
      let formateData = {
        state: this.states[res],
        confirmed: total.confirmed,
        confirmedDelta: delta.confirmed,
        active: total.confirmed - (total.deceased + total.recovered),
        recovered: total.recovered,
        recoveredDelta: delta.recovered,
        deceased: total.deceased,
        deceasedDelta: delta.deceased,
        tested: total.tested,
        testedDelta: delta.tested,
        vaccaine_dose_administered: total.vaccinated1 + total.vaccinated2,
        vaccaine_dose_administeredDelta: delta.vaccinated1 + delta.vaccinated2
      }
      this.tableData.push(formateData);
    })
    let index = this.tableData.findIndex((ele) => {
      if (ele.state == 'india') {
        return ele;
      }
    });
    let indiaData = this.tableData[index];
    this.tableData.splice(index, 1);
    this.tableData.push(indiaData);
  }

  highlightRow(rowdata) {
    if (this.status.place != rowdata.state) {
      this.status.place = rowdata.state;
      this.shareDataService.sendData(this.status);
    }
  }

}
