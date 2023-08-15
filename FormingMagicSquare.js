function formingMagicSquare(s) {

    if (!s) { return -1; }

    let min = Number.MAX_VALUE;
    let sums = [0,0,0,0,0,0,0,0];
    
    let a1=[[8,1,6],[3,5,7],[4,9,2]];
    let a2=[[4,3,8],[9,5,1],[2,7,6]];
    let a3=[[2,9,4],[7,5,3],[6,1,8]];
    let a4=[[6,7,2],[1,5,9],[8,3,4]];
    let a5=[[6,1,8],[7,5,3],[2,9,4]];
    let a6=[[8,3,4],[1,5,9],[6,7,2]];
    let a7=[[4,9,2],[3,5,7],[8,1,6]];
    let a8=[[2,7,6],[9,5,1],[4,3,8]];
  
    for(let i=0;i<3;i++ )
        for(let j=0;j<3;j++)
        {
           sums[0] += Math.abs(s[i][j]-a1[i][j]);
           sums[1] += Math.abs(s[i][j]-a2[i][j]);
           sums[2] += Math.abs(s[i][j]-a3[i][j]);
           sums[3] += Math.abs(s[i][j]-a4[i][j]);
           sums[4] += Math.abs(s[i][j]-a5[i][j]);
           sums[5] += Math.abs(s[i][j]-a6[i][j]);
           sums[6] += Math.abs(s[i][j]-a7[i][j]);
           sums[7] += Math.abs(s[i][j]-a8[i][j]);
           
        }
   
    for(let i = 0; i < 8; i++)
    {
       if(sums[i] < min)
       {
           min = sums[i];
       }
    }
    console.log(min);
}


formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]);