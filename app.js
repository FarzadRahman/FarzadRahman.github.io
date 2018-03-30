new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false
    },

    watch:{
        playerHealth:function (value) {
            if(this.playerHealth <=0){
                this.playerHealth=0;
                alert('you lose');
                this.gameIsRunning=false;
            }
        },

        monsterHealth:function (value) {
            if(this.monsterHealth <=0){
                this.monsterHealth=0;
                alert('you win');
                this.gameIsRunning=false;
            }
        }

    },
    methods:{
        startGame:function () {
            this.monsterHealth=100;
            this.playerHealth=100;
            this.gameIsRunning=true;

        },
        attack:function () {
            var damage=Math.max(Math.floor(Math.random()*10),3);
            this.playerHealth-=damage;

            var damage=Math.max(Math.floor(Math.random()*10),3);
            this.monsterHealth-=damage;
        },
        specialAttack:function () {
            var damage=Math.max(Math.floor(Math.random()*20),10);
            this.monsterHealth-=damage;


            var damage=Math.max(Math.floor(Math.random()*10),3);
            this.playerHealth-=damage;

        },
        heal:function () {
            if(this.playerHealth<100){
                this.playerHealth+=5;
            }

        },
        giveUp:function () {
                this.gameIsRunning=false;
        },
    }
});