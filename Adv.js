//manage Database
var database = firebase.database();
var messageRef = database.ref("Game/AdventuresGame").orderByChild('score'); //อ้างชื่อ key


new Vue({
    el:"#comment",
    data:{
        messageText:'',
        messagesArray:[],
        name:'',
        Array:[]
    },
    methods:{ //บันทึกข้อมูลลงArray storeMessage
        storeMessage:function(){
            messageRef.push({text:this.messageText,name:this.name})
            this.messageText=''
        }
    },
    created(){ //update del ข้อมูล
    //หลังจากเพิ่มข้อมูลเสร็จ เอาข้อมูลในฐานข้อมูล ไปแสดง
    messageRef.on('child_added',snapshot=>{
        //เอาข้อมูลจาก message มาเก็บในArray
        this.messagesArray.push({...snapshot.val(),id:snapshot.key})
        console.log(snapshot.val());
    })

    }
})