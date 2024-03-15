import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public myForm!:FormGroup;
 
   constructor(private fb:FormBuilder, private loginPrd:AutentificationService, private router: Router) {  }
 
   ngOnInit(): void {
     this.myForm = this.createMyForm();
   }
 
   private createMyForm():FormGroup{
     return this.fb.group({
       usuario:['',[Validators.required]],
       password:['',Validators.required]
     });
   }
   public submitFormulario(){
     
       console.log(this.myForm.invalid);
       if(this.myForm.invalid){
         return
       }
       
       if(this.loginPrd.ingresarAplicativo(this.myForm.value)){
         this.router.navigate(['/productos']);
       }else{
        alert("USUARIO Y/O CONSTRASEÑA INCORRECTA")
       }
   };
   public get f():any{
     return this.myForm.controls;
   }
 }