import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Pacient } from 'src/app/model/Pacient';
import { PacientService } from '../../services/pacient.service';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
})
export class AddOrUpdateComponent implements OnInit, OnChanges {
  @Input() pacientToBeUpdated: Pacient;
  @Input() showUpdateModal: boolean;
  @Output() closeModal = new EventEmitter();
  @Output() updatedPacientToSend = new EventEmitter<Pacient>();
  @Output() newPacientToSend = new EventEmitter<Pacient>();

  addOrUpdateToggle: boolean = false;
  maxDate: String;

  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  socialNumber: number;
  phoneNumber: string;

  updatedPacient: Pacient;
  newPacient: Pacient;

  constructor(private pacientService: PacientService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pacientToBeUpdated'] && this.pacientToBeUpdated != undefined) {
      this.id = this.pacientToBeUpdated.id;
      this.firstName = this.pacientToBeUpdated.firstName;
      this.lastName = this.pacientToBeUpdated.lastName;
      this.dateOfBirth = this.pacientToBeUpdated.dateOfBirth;
      this.gender = this.pacientToBeUpdated.gender;
      this.socialNumber = this.pacientToBeUpdated.socialNumber;
      this.phoneNumber = this.pacientToBeUpdated.phoneNumber;
    }
  }

  ngOnInit(): void {
    // get current date for max input date selector

    this.maxDate = new Date().toISOString().split('T')[0];

    // check if update or add

    if (this.pacientToBeUpdated === undefined) {
      console.log('pacient undefined');
      this.addOrUpdateToggle = true;
    }
  }

  hideModal() {
    this.closeModal.emit('modal closed');
  }

  handleSubmit() {
    if (this.pacientToBeUpdated !== undefined) {
      // create updated pacient and send to DB
      this.updatedPacient = {
        id: this.pacientToBeUpdated.id,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        socialNumber: this.socialNumber,
        phoneNumber: this.phoneNumber,
      };

      // close modal and send pacient to DB
      this.updatedPacientToSend.emit(this.updatedPacient);
      this.closeModal.emit('modal closed');
    } else {
      //create new pacient and send to DB
      this.newPacient = {
        id: null,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        socialNumber: this.socialNumber,
        phoneNumber: this.phoneNumber,
      };

      // close modal and send pacient to DB
      this.newPacientToSend.emit(this.newPacient);
      this.closeModal.emit('modal closed');
    }
  }
}
