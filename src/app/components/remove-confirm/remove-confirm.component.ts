import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { PacientService } from '../../services/pacient.service';

@Component({
  selector: 'app-remove-confirm',
  templateUrl: './remove-confirm.component.html',
  styleUrls: ['./remove-confirm.component.css'],
})
export class RemoveConfirmComponent implements OnInit {
  @Input() idOfPacientToBeRemoved!: number;
  @Output() closeModal = new EventEmitter();
  @Output() pacientRemovedFromDB = new EventEmitter<number>();
  confirmPatientRemove: boolean = true;
  constructor(private pacientService: PacientService) {}

  ngOnInit(): void {}

  confirmed() {
    // remove pacient from DB
    this.pacientService
      .removePacient(this.idOfPacientToBeRemoved)
      .subscribe((pacient) => {
        // remove pacient from UI
        this.pacientRemovedFromDB.emit(this.idOfPacientToBeRemoved);
        this.closeModal.emit('close remove confirm modal');
      });
  }

  denied() {
    this.closeModal.emit('close remove confirm modal');
  }
}
