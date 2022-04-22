import { Component, OnInit } from '@angular/core';
import { PacientService } from '../../services/pacient.service';
import { Pacient } from '../../model/Pacient';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  pacients: Array<Pacient>;
  showUpdateModal: boolean;
  showRemoveConfirmModal: boolean;
  pacientToBeUpdated: Pacient;
  idOfPacientToBeRemoved: number;
  loadingData: boolean = true;

  constructor(private pacientService: PacientService) {}

  ngOnInit(): void {
    this.pacientService.getPacients().subscribe((pacients) => {
      this.pacients = pacients;
      setTimeout(() => {
        this.loadingData = false;
      }, 2000);
    });
  }

  openUpdateModal(pacient: Pacient) {
    this.showUpdateModal = !this.showUpdateModal;
    this.pacientToBeUpdated = { ...pacient };
  }

  handleAddOrUpdateModal($event: any) {
    this.showUpdateModal = !this.showUpdateModal;
  }

  showAddNewPacientModal() {
    this.showUpdateModal = !this.showUpdateModal;
    this.pacientToBeUpdated = undefined;
  }

  openRemoveModal(pacient: Pacient) {
    this.showRemoveConfirmModal = !this.showRemoveConfirmModal;
    this.idOfPacientToBeRemoved = pacient.id;
  }

  closeRemoveConfirmModal($event: any) {
    this.showRemoveConfirmModal = !this.showRemoveConfirmModal;
  }

  //remove pacient from UI

  removePacientFromUI(pacientId: number) {
    this.pacients = this.pacients.filter((pacient) => pacient.id !== pacientId);
  }

  // add new pacient to DB and UI
  addNewPacientToDBandUI(pacient: Pacient) {
    this.pacientService.addPacient(pacient).subscribe((pacient) => {
      this.pacients.push(pacient);
    });
  }

  // update pacient in DB and UI
  updatePacientInDBandUI(pacient: Pacient) {
    this.pacientService.updatePacient(pacient).subscribe((pacient) => {
      let pacientIndex = this.pacients.findIndex(
        (findPacient) => findPacient.id === pacient.id
      );
      this.pacients[pacientIndex] = pacient;
    });
  }
}
