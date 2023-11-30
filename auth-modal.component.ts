import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../../shared/modal/modal.component";
import { ModalService } from '../../services/modal.service';
import { TabsContainerComponent } from "../../shared/tabs-container/tabs-container.component";
import { TabComponent } from "../../shared/tab/tab.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-auth-modal',
    standalone: true,
    templateUrl: './auth-modal.component.html',
    styleUrl: './auth-modal.component.css',
    imports: [CommonModule, ModalComponent, TabsContainerComponent, TabComponent, LoginComponent, RegisterComponent]
})
export class AuthModalComponent implements OnInit {

    constructor(public modal:ModalService) {}
    ngOnInit(): void {
        this.modal.register('auth')
        
        
    }

}
