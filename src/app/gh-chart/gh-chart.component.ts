import { Component } from "@angular/core";

import { LocalStorageManager } from "../../util/localstorage-manager";
import StorageKey from "../../constants/local-storage";

@Component({
  selector: "gh-chart",
  standalone: true,
  imports: [],
  templateUrl: "./gh-chart.component.html",
  styleUrl: "./gh-chart.component.scss"
})
export class GhChart {
  public commitHistory: string = "http://ghchart.rshah.org/000000/jagernet-ops";

  constructor() {
    if (!LocalStorageManager.hasKey(StorageKey.Chart)) {
      this.storeCommitChart();
    }
    else if (LocalStorageManager.hasKey(StorageKey.Chart)) {
      this.commitHistory = this.retrieveCommitChart();
    }
  }

  private retrieveCommitChart(): string {
    try {
      const { encodedChart, expiration } = LocalStorageManager.getItemObject(StorageKey.Chart)
        .orElseThrow();

      if (Date.now() >= Number.parseInt(expiration, 10)) {
        this.storeCommitChart();
      }

      return encodedChart;
    } catch(e) {
      console.error(e)
      return "http://ghchart.rshah.org/000000/jagernet-ops";
    }
  }

  private storeCommitChart(): void {

  }
}
