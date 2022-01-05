import { Component, OnInit } from '@angular/core';

export interface data {
  message: any;
  response: any;
  dataPlus: [
    {
      message: any;
      response: any;
    }
  ];
}

export interface chat {
  message: string;
  response: string;
}
export interface sub {
  message: any;
  response: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chat';
   qData: any[]=[]
  showMessages:any []=[];

  sub1: any = [
    {
      message: 'الاسم الأول',
      response: 'اسامى',
      level:2,
    },
    {
      message: 'الاسم الثاني',
      response: 'اسامى',
      level:2,
    },
  ];

  sub2: any = [
    {
      message: 'اقام مبيعات بالمحافظة',
      response: '5000',
      level:2,
    },
    {
      message: 'ارقام المبيعات بالشركة',
      response: '10000',
      level:2,
    },
  ];

  sub3: any = [
    {
      message: 'where are you live',
      response: 'toronto',
    },
    {
      message: 'where are you from',
      response: 'canada',
    },
  ];

  msg: any[] = [
    {
      message: 'مشتريات',
      response: 'من فضلك قم بإدخال رقم الطلب',
      level:1,
      dataPlus: this.sub1,
    },
    {
      message: 'مبيعات',
      response: 'ارقام المبيعات',
      level:1,
      dataPlus: this.sub2,
    },
    {
      message: 'المخزن',
      response: 'البضاعة المتوفرة في المخزن',
      level:1,
      dataPlus: this.sub3,
    },
    {
      message: 'اخرى',
      response: 'اخرى',
      level:1,  
      dataPlus: this.sub3,
    }
  ];

  chatMsg: chat[] = [];
  getListOfSub: sub[] = [];


  obj: any[] = []    

// item : string

//  addMsg(task: HTMLInputElement) {
//   let obj = {task: task.value} 
//  task.value = '';
//  this.obj.push({
//     id: this.obj.length,
//     message: task.value
//   })
//  }

addMsg(item:any ) {
  this.obj.push({
    id: this.obj.length,
    message: item
  })
 
}


testAction(row:any,i:number){
console.log(row)
  if(row.level == 1){
    this.qData=[]
    console.log(this.msg[i].dataPlus)
    this.qData=row.dataPlus
  }else{

    this.qData=[]
    this.showMessages.push(row)
    // this.qData=this.msg[i].dataPlus
  }
 



}



  subDisplay:any = {};
  sub1Display:any = {};
  sub2Display:any = {};
  sub3Display:any = {};

  showRes(type:string ,index: number) {
    if(type =='msg'){
      this.subDisplay[index] = true;
    }else  if(type =='sub1'){
      this.sub1Display[index] = true;
    }else if(type =='sub2'){
      this.sub2Display[index] = true;
    } else if(type =='sub3'){
      this.sub3Display[index] = true;
    }
  }



  next(mes: any) {
    let res: any = this.msg.filter((val: data) => val.message === mes);
    if (res != undefined) {
      res[0].dataPlus.forEach((element: any) => {
        this.getListOfSub.push(element);
      });
    }
  }

  getResponse(msg: any) {
    let res: any = this.msg.filter((val: data) => val.message === msg);
    if (res != undefined) {
      this.chatMsg.push(res[0]);
      this.next(msg);
      // return x[0].response
    }

    // else return null
    // console.log(msg[0].response);
    // return msg[0].response;
    // this.msg.forEach((element : any)=> {
    //   if(element.message == msg){
    //     return element.response;
    //   }
    // });

    // var c =''
    //     this.msg.map((val:any)=>{
    //       if(val.message == msg){
    //         c = val.response;
    //       }
    //     })

    //     if (this.msg.length == 3 ) {
    //        let obj : object = {message :'',response:''}
    //        this.msg.push(obj)
    //     }
    // return null
  }

  ngOnInit(): void {

     this.qData = this.msg
  }
}


