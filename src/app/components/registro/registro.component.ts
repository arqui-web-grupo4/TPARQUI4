import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
form:FormGroup
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar, private router: Router) { 
    this.form=this.fb.group({
    usuario:['',Validators.required],
    password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  ingresar(){
    console.log(this.form);
    const usuario=this.form.value.usuario;
    const password=this.form.value.password;

    if(usuario == 'neil' && password =='admin123'){
      this.router.navigate(['dashboard'])
      if(usuario == 'Andre' && password =='admin123'){
        this.router.navigate(['dashboard'])}

    }else{this.error();
      this.form.reset();

    }
  }
  error(){
    this._snackBar.open('Usuario o contraseña invalido','',{
      duration:2000,
      horizontalPosition: 'center',
      verticalPosition:'top'

    })
    

  
  }

}


