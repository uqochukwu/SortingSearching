

 const sortSearch = (data) => {
    for(i = 1; i < data.length; i++)
    {
        var temp = i;
        for( j = i -1 ; j >= 0; j--)
        {
            if(data[temp] < data[j])
            {
                swap(temp,j, data);
                temp = j;
            }
            else{
                break;
            }
        }
    }
    return data;
 }

 const swap = (first, second, data) => {
    let temp = data[first];
    data[first] = data[second];
    data[second] = temp;
 }

console.log(sortSearch([3,5,2,1,4]));

 //reverse for loop
 //pop = [1,2,3,5,5]
//  for(i = pop.length - 1; i >=0; i--)
//  {
//      console.log(pop[i]); //pop[5]
//  }



 //SWAP
// p = [0,1,2,3]

// temp = p[3]; //temp = 3
// p[3] = p[2]; // [0,1,2,2]
// p[2] = temp // [0,1,3,2]
