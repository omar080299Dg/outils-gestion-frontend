import { Component } from '@angular/core';

@Component({
  selector: 'app-maintenance-popup',
  templateUrl: './maintenance-popup.component.html',
  styleUrl: './maintenance-popup.component.css'
})
export class MaintenancePopupComponent {
  isMaintenance: boolean = true;  // Maintenir l'état de la popup
  currentDate: Date = new Date();  // Date de la maintenance (actuelle)

  constructor() {}

  ngOnInit(): void {
    // Logique d'initialisation si nécessaire
  }

  closePopup(): void {
    this.isMaintenance = false;  // Cacher la popup lorsqu'on clique sur "Fermer"
  }
}
