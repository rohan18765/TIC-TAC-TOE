


let winner = [
    [0,1,2] , [3 , 4 , 5], [6 , 7 , 8],
    [0 , 3 , 6 ] , [1,4,7],
    [2,5,8], [0,4,8], [2,4,6]  
]


const board_array = new Array(9).fill("E");
let total_turn = 0 ;

function Checkwinner()
{
    for( let [index0 , index1 , index2]  of winner)
    {
        if(board_array[index0] != "E" &&  board_array[index0] == board_array[index1] && board_array[index1] == board_array[index2]  )
        {
            return true ;
        }
            
    }  
    
    return false ;
}

let turn = 'X' ;

const printer =  (event)=>
{   
    
    const element = event.target ;
    if(element.innerHTML !== "" ) return ;
    total_turn++ ;
    if(turn == 'X')
    {
       element.innerHTML = "X" ;
       board_array[element.id] = "X"
       if(Checkwinner())
       {
          const msg = document.getElementById('winningMessage');
          msg.innerHTML = "Winner is X " ;
        
            msg.style.fontSize = "28px";
            msg.style.fontWeight = "700";
            msg.style.color = "black";
            msg.style.marginTop = "15px";
            msg.style.textShadow = "1px 1px 4px rgba(0,0,0,0.3)";
          board.removeEventListener('click' , printer);
          return ;
       }
       turn = 'O' ;
    }
    else{
        element.innerHTML = "O"
        board_array[element.id] = "O"
        if(Checkwinner())
        {
          const msg = document.getElementById('winningMessage');
          msg.innerHTML = "Winner is O" ;
        msg.style.fontSize = "28px";
        msg.style.fontWeight = "700";
        msg.style.color = "black";
        msg.style.marginTop = "15px";
        msg.style.textShadow = "1px 1px 4px rgba(0,0,0,0.3)";
          board.removeEventListener('click' , printer);
          return ;
        }
        turn = 'X' ;
    }

    if( total_turn == 9)
    {
        const msg = document.getElementById('winningMessage');
        msg.innerHTML = "Match is Dreaw " ;
        msg.style.fontSize = "28px";
        msg.style.fontWeight = "700";
        msg.style.color = "black";
        msg.style.marginTop = "15px";
        msg.style.textShadow = "1px 1px 4px rgba(0,0,0,0.3)";
        board.removeEventListener('click', printer); 
    }
    
    
}; 

const board = document.getElementById('board');

board.addEventListener('click' , printer );


document.getElementById('restartButton').addEventListener('click', () => {
    board_array.fill("E");
    board.removeEventListener('click', printer); 
    board.addEventListener('click' , printer );
    turn = 'X';
    total_turn = 0 ;
    document.getElementById('winningMessage').innerHTML = "";
    
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = "";
    });
});


