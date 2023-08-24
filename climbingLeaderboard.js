function climbingLeaderboard(ranked, player) {
   
    if (!ranked || !player || player.length < 1 || ranked.length < 1 || player.length < 1) { return; }

    let positions = [];

    let i = 0;
    let j = 0;
    let rank = 0;
    let countRepeatedGrades = 0;

    for (i = player.length - 1; i >=0  ; i--) {
        rank = 0;
        while (j < ranked.length && player[i] < ranked[j] )  {
            while (ranked[j] == ranked[j+1]) {
                countRepeatedGrades++;
                j++;
            }
            j++;
        }
        rank = j - countRepeatedGrades + 1;
        positions[i] = rank;
    }
    
    return positions;
}

let ranked;
let player;
//ranked = [100,90,90,80];
//player = [70,80,105];

//ranked = [100,90,90,90,80,80,70];
//player = [70,80,105];
//player = [60,75,105]; [5,4,1]

ranked = [100, 100, 50, 40, 20, 10];
player = [5, 25, 50, 120];


climbingLeaderboard(ranked, player);